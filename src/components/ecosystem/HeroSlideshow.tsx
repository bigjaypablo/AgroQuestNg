import { useEffect, useRef, useState } from "react";
import { heroSlides } from "../../data/heroSlides";

const SLIDE_DURATION = 6000;

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion || heroSlides.length <= 1) return;
    timerRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, reducedMotion]);

  const activeSlide = reducedMotion ? heroSlides[0] : heroSlides[index];

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-canopy-100 md:aspect-[21/9]">
      {heroSlides.map((slide, i) => {
        const isActive = reducedMotion ? i === 0 : i === index;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              isActive ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {slide.src ? (
              slide.type === "video" ? (
                <video
                  src={slide.src}
                  autoPlay={isActive && !reducedMotion}
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <img src={slide.src} alt={slide.caption} className="h-full w-full object-cover" />
              )
            ) : (
              <div className="flex h-full w-full items-center justify-center text-sm text-canopy-700/50">
                [ {slide.caption} — placeholder, add real footage in heroSlides.ts ]
              </div>
            )}
          </div>
        );
      })}

      {!reducedMotion && heroSlides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => setIndex(i)}
              aria-label={`Show ${slide.caption}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
