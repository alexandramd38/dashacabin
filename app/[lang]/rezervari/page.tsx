import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";
import { getDict, type Lang } from "@/lib/content";
import { site } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const d = getDict(((await params).lang as Lang));
  return { title: d.meta.booking.title, description: d.meta.booking.description };
}

export default async function BookingPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = ((await params).lang as Lang) as Lang;
  const d = getDict(lang);
  const b = d.booking;
  const lei = (n: number) => `${n.toLocaleString("ro-RO")} lei`;

  return (
    <>
      <section className="bg-forest-dark pt-36 pb-16 text-center text-cream">
        <div className="container-x">
          <h1 className="font-serif text-5xl text-cream md:text-6xl">{b.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-cream/80">{b.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <Reveal>
            <h2 className="text-4xl">{b.ratesTitle}</h2>
            <div className="mt-6 overflow-x-auto rounded-2xl shadow-sm ring-1 ring-forest/10">
              <table className="w-full border-collapse bg-white text-left">
                <thead>
                  <tr className="bg-forest text-cream">
                    <th className="px-5 py-3 font-medium">{b.colSeason}</th>
                    <th className="px-5 py-3 font-medium">{b.colNight}</th>
                    <th className="px-5 py-3 font-medium">{b.colWeek}</th>
                    <th className="px-5 py-3 font-medium">{b.colMin}</th>
                  </tr>
                </thead>
                <tbody>
                  {site.rates.map((r) => (
                    <tr key={r.season.en} className="border-t border-cream-dark">
                      <td className="px-5 py-3">{r.season[lang]}</td>
                      <td className="px-5 py-3">{lei(r.night)}</td>
                      <td className="px-5 py-3">{lei(r.week)}</td>
                      <td className="px-5 py-3">{r.minStay} {b.nights}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-ink/60">{b.feeNote}</p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-cream-dark/60">
        <div className="container-x max-w-3xl">
          <Reveal>
            <h2 className="text-4xl">{b.requestTitle}</h2>
            <div className="card mt-6">
              <BookingForm d={d} />
            </div>
            <div className="mt-8 rounded-2xl border-2 border-dashed border-gold/60 bg-gold/10 p-6 text-center text-ink/60">
              {/* {b.futureSlot} */}
              <p className="font-medium">{b.futureNote}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
