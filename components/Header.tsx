"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dict, Lang } from "@/lib/content";
import { routes } from "@/lib/content";
import { site } from "@/lib/site";

export default function Header({ lang, d }: { lang: Lang; d: Dict }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const other: Lang = lang === "ro" ? "en" : "ro";
  const langPath = pathname.replace(/^\/(ro|en)/, `/${other}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { href: string; label: string }[] = [
    { href: `/${lang}`, label: d.nav.home },
    { href: `/${lang}/${routes.cabin}`, label: d.nav.cabin },
    { href: `/${lang}/${routes.gallery}`, label: d.nav.gallery },
    { href: `/${lang}/${routes.experiences}`, label: d.nav.experiences },
    { href: `/${lang}/${routes.story}`, label: d.nav.story },
    { href: `/${lang}/${routes.contact}`, label: d.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-forest-dark/95 shadow-lg backdrop-blur" : "bg-gradient-to-b from-forest-dark/70 to-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-3">
        <Link href={`/${lang}`} className="flex items-center gap-3 text-cream" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="Dasha Cabin logo" className="h-11 w-11 rounded-full bg-white p-0.5 object-cover" />
          <span className="font-serif text-2xl tracking-wide">
            Dasha <span className="text-gold">Cabin</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`text-sm tracking-wide transition-colors hover:text-gold ${
                pathname === l.href ? "text-gold" : "text-cream/90"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href={`/${lang}/${routes.booking}`} className="btn-primary">
            {d.nav.cta}
          </Link>
          <Link href={langPath} className="text-xs uppercase tracking-widest2 text-cream/70 hover:text-gold">
            {d.langSwitch}
          </Link>
        </nav>

        <button
          className="rounded-md border border-cream/40 px-3 py-2 text-cream lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-cream/10 bg-forest-dark/95 px-5 pb-5 lg:hidden" aria-label="Mobile">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-cream/10 py-3 text-cream/90 hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-4 flex items-center gap-4">
            <Link href={`/${lang}/${routes.booking}`} className="btn-primary" onClick={() => setOpen(false)}>
              {d.nav.cta}
            </Link>
            <Link href={langPath} className="text-xs uppercase tracking-widest2 text-cream/70">
              {d.langSwitch}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
