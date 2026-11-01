import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { getDict, type Lang } from "@/lib/content";
import { site } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const d = getDict(((await params).lang as Lang));
  return { title: d.meta.contact.title, description: d.meta.contact.description };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = ((await params).lang as Lang) as Lang;
  const d = getDict(lang);
  const c = d.contact;
  return (
    <>
      <section className="bg-forest-dark pt-36 pb-16 text-center text-cream">
        <div className="container-x">
          <h1 className="font-serif text-5xl text-cream md:text-6xl">{c.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/80">{c.intro}</p>
        </div>
      </section>
      <section className="section">
        <div className="container-x grid gap-12 md:grid-cols-2">
          <Reveal>
            <form action={site.formspree} method="POST" className="card grid gap-4">
              <div>
                <label htmlFor="ct-name" className="mb-1 block text-sm font-medium">{c.name}</label>
                <input id="ct-name" name="name" required className="input" />
              </div>
              <div>
                <label htmlFor="ct-email" className="mb-1 block text-sm font-medium">{c.email}</label>
                <input id="ct-email" name="email" type="email" required className="input" />
              </div>
              <div>
                <label htmlFor="ct-msg" className="mb-1 block text-sm font-medium">{c.message}</label>
                <textarea id="ct-msg" name="message" rows={6} required className="input" />
              </div>
              <button type="submit" className="btn-dark w-fit">{c.send}</button>
            </form>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="text-3xl">{c.direct}</h2>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="kicker">{c.emailLabel}</dt>
                <dd className="mt-1"><a href={`mailto:${site.email}`} className="text-lg hover:text-gold">{site.email}</a></dd>
              </div>
              <div>
                <dt className="kicker">{c.phoneLabel}</dt>
                <dd className="mt-1"><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-lg hover:text-gold">{site.phone}</a></dd>
              </div>
              <div>
                <dt className="kicker">{c.locationLabel}</dt>
                <dd className="mt-1 text-lg">{site.locality[lang]}</dd>
              </div>
            </dl>
            <iframe className="mt-8 h-64 w-full rounded-2xl border-0" src={site.mapsEmbed} title="Google Maps — Dasha Cabin" loading="lazy" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
