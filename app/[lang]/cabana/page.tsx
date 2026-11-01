import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { getDict, type Lang } from "@/lib/content";
import { site } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const d = getDict(((await params).lang as Lang));
  return { title: d.meta.cabin.title, description: d.meta.cabin.description };
}

export default async function CabinPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = ((await params).lang as Lang) as Lang;
  const d = getDict(lang);
  const c = d.cabin;

  return (
    <>
      <section className="bg-forest-dark pt-36 pb-16 text-center text-cream">
        <div className="container-x">
          <h1 className="font-serif text-5xl text-cream md:text-6xl">{c.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/80">{c.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid items-start gap-10 md:grid-cols-2">
          <Reveal>
            <img src="/images/interior-living.jpg" alt="Inside the cabin — living room and wood stove" className="w-full rounded-2xl object-cover" />
          </Reveal>
          <div>
            <Reveal>
              <p className="kicker">{c.detailsTitle}</p>
              <h2 className="mt-3 text-4xl">{c.detailsTitle}</h2>
              <ul className="mt-6 list-disc space-y-2 pl-5 text-ink/80">
                {c.details.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <h2 className="mt-10 text-3xl">{c.capacityTitle}</h2>
              <p className="mt-3 text-ink/80">
                {site.capacity.guests} guests · {site.capacity.bedrooms} bedroom · {site.capacity.bathrooms} bath
              </p>
              <p className="mt-1 text-sm text-ink/60">{c.capacityNote}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-cream-dark/60">
        <div className="container-x">
          <Reveal>
            <h2 className="text-4xl">{c.amenitiesTitle}</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {c.amenities.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.12} className="card">
                <h3 className="text-2xl">{g.title}</h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink/75">
                  {g.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <h2 className="text-3xl">{c.rulesTitle}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-ink/80">
              {c.rules.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
