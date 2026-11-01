import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Lightbox from "@/components/Lightbox";
import { getDict, type Lang } from "@/lib/content";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const d = getDict(((await params).lang as Lang));
  return { title: d.meta.gallery.title, description: d.meta.gallery.description };
}

export default async function GalleryPage({ params }: { params: Promise<{ lang: string }> }) {
  const d = getDict(((await params).lang as Lang));
  return (
    <>
      <section className="bg-forest-dark pt-36 pb-16 text-center text-cream">
        <div className="container-x">
          <h1 className="font-serif text-5xl text-cream md:text-6xl">{d.gallery.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/80">{d.gallery.intro}</p>
        </div>
      </section>
      <section className="section">
        <div className="container-x">
          <Reveal>
            <Lightbox images={d.gallery.items} closeLabel={d.lightbox.close} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
