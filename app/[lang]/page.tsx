import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getDict, routes, type Lang } from "@/lib/content";
import { site } from "@/lib/site";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = ((await params).lang as Lang) as Lang;
  const d = getDict(lang);
  const h = d.home;

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-svh items-center justify-center text-center">
        <img src="/images/hero-cabin.jpg" alt="Dasha Cabin A-frame cabin at sunset among pine trees" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-forest-dark/45" />
        <div className="container-x relative z-10 py-24 text-cream">
          <Reveal>
            <p className="kicker">{d.hero.tagline}</p>
            <h1 className="mt-4 font-serif text-6xl text-cream md:text-8xl">{d.hero.title}</h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-cream/90 md:text-xl">{d.hero.sub}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href={`/${lang}/${routes.booking}`} className="btn-primary">{d.hero.ctaAvailability}</Link>
              <Link href={`/${lang}/${routes.cabin}`} className="btn-outline">{d.hero.ctaExplore}</Link>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest2 text-cream/60">
          {d.hero.scroll} ↓
        </div>
      </section>

      {/* The experience */}
      <section className="section">
        <div className="container-x max-w-3xl text-center">
          <Reveal>
            <p className="kicker">{h.experienceTitle}</p>
            <h2 className="mt-3 text-4xl md:text-5xl">{h.experienceTitle}</h2>
            <p className="lead mt-6">{h.experienceText}</p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {h.points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.12} className="card">
                <h3 className="text-2xl">{p.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Discover — asymmetrical editorial */}
      <section className="section bg-cream-dark/60">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="kicker">{h.discoverTitle}</p>
            <h2 className="mt-3 text-4xl md:text-5xl">{h.discoverTitle}</h2>
            <p className="lead mt-4">{h.discoverText}</p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {h.discoverCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.12} className={i === 1 ? "md:mt-12" : ""}>
                <Link href={`/${lang}/${routes.gallery}`} className="group block">
                  <div className="overflow-hidden rounded-2xl">
                    <img src={c.img} alt={c.title} className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="mt-4 text-2xl">{c.title}</h3>
                  <p className="mt-1 text-sm text-ink/70">{c.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dasha story teaser */}
      <section className="section">
        <div className="container-x grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <img src="/images/logo.png" alt="Dasha, the little white dog, in front of the A-frame cabin" className="mx-auto w-full max-w-md rounded-3xl" />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="kicker">{h.storyTeaser.kicker}</p>
            <h2 className="mt-3 text-4xl md:text-5xl">{d.nav.story}</h2>
            <p className="lead mt-4">{h.storyTeaser.text}</p>
            <Link href={`/${lang}/${routes.story}`} className="btn-dark mt-6">{h.storyTeaser.cta}</Link>
          </Reveal>
        </div>
      </section>

      {/* Location teaser */}
      <section className="section bg-forest text-cream">
        <div className="container-x grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <p className="kicker">{h.locationTeaser.title}</p>
            <h2 className="mt-3 font-serif text-4xl text-cream md:text-5xl">{h.locationTeaser.title}</h2>
            <p className="mt-4 text-lg text-cream/80">{h.locationTeaser.text}</p>
            <Link href={`/${lang}/${routes.experiences}`} className="btn-primary mt-6">{h.locationTeaser.cta}</Link>
          </Reveal>
          <Reveal delay={0.15}>
            <iframe
              className="h-72 w-full rounded-2xl border-0"
              src={site.mapsEmbed}
              title="Google Maps — Dasha Cabin"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container-x max-w-3xl text-center">
          <Reveal>
            <p className="kicker">{h.reviews.title}</p>
            <h2 className="mt-3 text-4xl md:text-5xl">{h.reviews.title}</h2>
            <p className="mt-6 text-ink/60">{h.reviews.placeholder}</p>
          </Reveal>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section bg-cream-dark/60">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl">{h.bookingTeaser.title}</h2>
            <p className="lead mx-auto mt-4 max-w-xl">{h.bookingTeaser.text}</p>
            <Link href={`/${lang}/${routes.booking}`} className="btn-primary mt-8">{h.bookingTeaser.cta}</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
