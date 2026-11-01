import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { getDict, type Lang } from "@/lib/content";
import { site } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const d = getDict(((await params).lang as Lang));
  return { title: d.meta.experiences.title, description: d.meta.experiences.description };
}

export default async function ExperiencesPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = ((await params).lang as Lang) as Lang;
  const d = getDict(lang);
  const e = d.experiences;

  return (
    <>
      <section className="bg-forest-dark pt-36 pb-16 text-center text-cream">
        <div className="container-x">
          <h1 className="font-serif text-5xl text-cream md:text-6xl">{e.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/80">{e.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-6 sm:grid-cols-2">
          {e.cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1} className={i % 2 === 1 ? "md:mt-10" : ""}>
              <div className="overflow-hidden rounded-2xl">
                <img src={c.img} alt={c.title} loading="lazy" className="h-72 w-full object-cover" />
              </div>
              <h3 className="mt-4 text-2xl">{c.title}</h3>
              <p className="mt-1 text-sm text-ink/70">{c.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-cream-dark/60">
        <div className="container-x grid items-start gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="text-4xl">{e.mapTitle}</h2>
            <p className="mt-3 text-ink/70">{site.locality[lang]}</p>
            <iframe className="mt-5 h-80 w-full rounded-2xl border-0" src={site.mapsEmbed} title="Google Maps — Dasha Cabin" loading="lazy" />
            <p className="mt-2 text-sm text-ink/60">
              <a href={site.mapsUrl} target="_blank" rel="noopener" className="underline hover:text-gold">Google Maps</a>
              {" · "}
              {e.mapNote}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="text-4xl">{e.directionsTitle}</h2>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-ink/80">
              {e.directions.map((x) => <li key={x}>{x}</li>)}
            </ul>
            <p className="kicker mt-8">{e.navTitle}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a href={site.mapsDirUrl} target="_blank" rel="noopener" className="btn-primary">
                {e.navGoogle}
              </a>
              <a href={site.wazeUrl} target="_blank" rel="noopener" className="btn-outline">
                {e.navWaze}
              </a>
            </div>
            <div className="card mt-8 border-l-2 border-gold/60">
              <h3 className="text-2xl">{e.lastKmTitle}</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink/75">
                {e.lastKm.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
