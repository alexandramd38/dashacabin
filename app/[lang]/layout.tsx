import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDict, langs, type Lang } from "@/lib/content";
import { site } from "@/lib/site";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-cormorant" });
const sans = Inter({ subsets: ["latin"], variable: "--font-inter" });

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = ((await params).lang as Lang) as Lang;
  const d = getDict(lang);
  const base = `https://${site.domain}`;
  return {
    metadataBase: new URL(base),
    title: d.meta.home.title,
    description: d.meta.home.description,
    alternates: {
      canonical: `${base}/${lang}/`,
      languages: { ro: `${base}/ro/`, en: `${base}/en/` },
    },
    openGraph: {
      title: d.meta.home.title,
      description: d.meta.home.description,
      siteName: site.name,
      locale: d.locale,
      type: "website",
      images: [{ url: "/images/hero-cabin.jpg", alt: site.name }],
    },
    icons: { icon: "/images/logo.png" },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = ((await params).lang as Lang) as Lang;
  const d = getDict(lang);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    name: site.name,
    description: d.meta.home.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Măguri",
      addressRegion: "Cluj",
      addressCountry: "RO",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.coords.lat, longitude: site.coords.lng },
    url: `https://${site.domain}/${lang}/`,
    image: [`https://${site.domain}/images/hero-cabin.jpg`],
    petsAllowed: site.pets,
  };
  return (
    <html lang={lang} className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header lang={lang} d={d} />
        <main>{children}</main>
        <Footer lang={lang} d={d} />
      </body>
    </html>
  );
}
