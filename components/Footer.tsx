import Link from "next/link";
import type { Dict, Lang } from "@/lib/content";
import { routes } from "@/lib/content";
import { site } from "@/lib/site";

export default function Footer({ lang, d }: { lang: Lang; d: Dict }) {
  return (
    <footer className="bg-forest-dark text-cream/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Dasha Cabin logo" className="h-12 w-12 rounded-full bg-white p-0.5" />
            <span className="font-serif text-2xl text-cream">
              Dasha <span className="text-gold">Cabin</span>
            </span>
          </div>
          <p className="mt-3 text-sm">{d.footer.madeWith}</p>
        </div>
        <div className="text-sm">
          <p className="kicker mb-3">Contact</p>
          <p>
            <a href={`mailto:${site.email}`} className="hover:text-gold">{site.email}</a>
          </p>
          <p>{site.phone}</p>
          <p className="mt-2">{site.locality[lang]}</p>
        </div>
        <div className="text-sm">
          <p className="kicker mb-3">Links</p>
          <p><Link href={`/${lang}/${routes.booking}`} className="hover:text-gold">{d.nav.booking}</Link></p>
          <p><Link href={`/${lang}/${routes.legal}`} className="hover:text-gold">{d.footer.legal}</Link></p>
          <p>
            <a href={site.mapsUrl} target="_blank" rel="noopener" className="hover:text-gold">Google Maps</a>
          </p>
        </div>
      </div>
      <div className="border-t border-cream/10 py-4 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {site.name}. {d.footer.rights}
      </div>
    </footer>
  );
}
