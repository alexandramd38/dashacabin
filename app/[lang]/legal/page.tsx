import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { getDict, type Lang } from "@/lib/content";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const d = getDict(((await params).lang as Lang));
  return { title: d.meta.legal.title, description: d.meta.legal.description };
}

export default async function LegalPage({ params }: { params: Promise<{ lang: string }> }) {
  const d = getDict(((await params).lang as Lang));
  const l = d.legal;
  const blocks = [
    { title: l.privacyTitle, text: l.privacy },
    { title: l.cookiesTitle, text: l.cookies },
    { title: l.termsTitle, text: l.terms },
  ];
  return (
    <>
      <section className="bg-forest-dark pt-36 pb-16 text-center text-cream">
        <div className="container-x">
          <h1 className="font-serif text-5xl text-cream md:text-6xl">{l.title}</h1>
        </div>
      </section>
      <section className="section">
        <div className="container-x max-w-3xl space-y-10">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1}>
              <h2 className="text-3xl">{b.title}</h2>
              <p className="mt-3 text-ink/75">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
