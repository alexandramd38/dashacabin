import type { MetadataRoute } from "next";
import { langs, routes } from "@/lib/content";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const paths = Object.values(routes);
  return langs.flatMap((lang) =>
    ["", ...paths].map((p) => ({
      url: `${base}/${lang}/${p ? p + "/" : ""}`,
      alternates: {
        languages: Object.fromEntries(langs.map((l) => [l, `${base}/${l}/${p ? p + "/" : ""}`])),
      },
    }))
  );
}
