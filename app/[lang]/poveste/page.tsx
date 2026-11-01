import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { getDict, type Lang } from "@/lib/content";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const d = getDict(((await params).lang as Lang));
  return { title: d.meta.story.title, description: d.meta.story.description };
}

export default async function StoryPage({ params }: { params: Promise<{ lang: string }> }) {
  const d = getDict(((await params).lang as Lang));
  const s = d.story;
  return (
    <>
      <section className="bg-forest-dark pt-36 pb-16 text-center text-cream">
        <div className="container-x">
          <h1 className="font-serif text-5xl text-cream md:text-6xl">{s.title}</h1>
        </div>
      </section>
      <section className="section">
        <div className="container-x grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <img src="/images/logo.png" alt="Dasha, the little white dog who gave the cabin its name" className="mx-auto w-full max-w-md rounded-3xl" />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="kicker">{s.kicker}</p>
            <h2 className="mt-3 text-4xl">Dasha</h2>
            <p className="lead mt-5">{s.text1}</p>
            <p className="mt-4 text-ink/75">{s.text2}</p>
            <p className="mt-4 text-ink/75">{s.text3}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
