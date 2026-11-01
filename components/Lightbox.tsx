"use client";
import { useCallback, useEffect, useState } from "react";

export default function Lightbox({
  images,
  closeLabel,
}: {
  images: { img: string; caption: string }[];
  closeLabel: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (active === null) return;
      if (e.key === "ArrowRight") setActive((active + 1) % images.length);
      if (e.key === "ArrowLeft") setActive((active - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active, images.length, close]);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((it, i) => (
          <figure key={it.img + i} className="group cursor-pointer" onClick={() => setActive(i)}>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={it.img}
                alt={it.caption}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption className="pt-2 text-sm text-ink/60">{it.caption}</figcaption>
          </figure>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-dark/95 p-4"
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <button
            onClick={close}
            aria-label={closeLabel}
            className="absolute right-5 top-5 text-4xl text-cream hover:text-gold"
          >
            ×
          </button>
          <img
            src={images[active].img}
            alt={images[active].caption}
            className="max-h-[85vh] max-w-[92vw] rounded-xl object-contain"
          />
        </div>
      )}
    </>
  );
}
