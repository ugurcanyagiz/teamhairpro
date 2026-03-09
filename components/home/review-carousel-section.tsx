"use client";

import { type PointerEvent, useEffect, useMemo, useRef, useState } from "react";

type Review = {
  id: number;
  quote: string;
  name: string;
  location: string;
  source: "Google" | "Yelp";
};

const reviews: Review[] = [
  {
    id: 1,
    quote:
      "I came in wanting softer dimension and a shape that would still look polished on busy mornings. The consultation was thoughtful, and the result felt tailored to me.",
    name: "Maya R.",
    location: "Brooklyn, NY",
    source: "Google",
  },
  {
    id: 2,
    quote:
      "From the first welcome to the final style, everything felt calm and intentional. My color looks luminous in every light and grows out beautifully.",
    name: "Elena P.",
    location: "Jersey City, NJ",
    source: "Yelp",
  },
  {
    id: 3,
    quote:
      "I trust this team completely for event styling. They listen, refine every detail, and create a look that photographs elegantly without feeling overdone.",
    name: "Camille T.",
    location: "New York, NY",
    source: "Google",
  },
  {
    id: 4,
    quote:
      "The cut brought movement back to my hair and made everyday styling genuinely easier. It still keeps its shape weeks later, which is rare for me.",
    name: "Nora L.",
    location: "Hoboken, NJ",
    source: "Yelp",
  },
  {
    id: 5,
    quote:
      "I wanted modern but still timeless, and they struck that balance perfectly. The service felt refined, warm, and completely client-focused.",
    name: "Ari S.",
    location: "Queens, NY",
    source: "Google",
  },
];

const AUTOPLAY_INTERVAL_MS = 5000;
const SWIPE_THRESHOLD = 46;

function SourceBadge({ source }: { source: Review["source"] }) {
  const badgeClass =
    source === "Google"
      ? "border-[#e3d6c8] bg-[#faf7f2] text-[#6e5b47]"
      : "border-[#e0d2c3] bg-[#fdf8f4] text-[#7a4f44]";

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium tracking-[0.08em] ${badgeClass}`}>
      {source}
    </span>
  );
}

export function ReviewCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const dragStartX = useRef<number | null>(null);

  const reviewCount = reviews.length;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isHovered || isPointerDown || reviewCount < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviewCount);
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [isHovered, isPointerDown, prefersReducedMotion, reviewCount]);

  const previousIndex = useMemo(() => (activeIndex - 1 + reviewCount) % reviewCount, [activeIndex, reviewCount]);
  const nextIndex = useMemo(() => (activeIndex + 1) % reviewCount, [activeIndex, reviewCount]);

  const goToIndex = (index: number) => setActiveIndex(index);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragStartX.current = event.clientX;
    setIsPointerDown(true);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    setDragOffset(event.clientX - dragStartX.current);
  };

  const clearPointerState = () => {
    dragStartX.current = null;
    setIsPointerDown(false);
    setDragOffset(0);
  };

  const handlePointerUp = () => {
    if (dragOffset > SWIPE_THRESHOLD) {
      setActiveIndex((current) => (current - 1 + reviewCount) % reviewCount);
    } else if (dragOffset < -SWIPE_THRESHOLD) {
      setActiveIndex((current) => (current + 1) % reviewCount);
    }
    clearPointerState();
  };

  return (
    <section id="proof" className="relative overflow-hidden bg-[#b8997f] px-6 py-20 lg:px-8 lg:py-24" aria-labelledby="reviews-heading">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-32 h-64 w-64 rounded-full bg-[#d7c2af]/70 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#c8a98f]/60 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="text-center text-[#f8f1e8]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f4e9dc]">Client stories</p>
          <h2 id="reviews-heading" className="mt-5 font-serif text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block">Talk the Talk</span>
            <span className="-mt-3 block pl-6 sm:pl-16 lg:pl-24">Walk the Walk.</span>
          </h2>
        </div>

        <div
          className="relative mt-14"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={clearPointerState}
          aria-roledescription="carousel"
          aria-label="Client reviews"
        >
          <div className="hidden h-[420px] md:block" style={{ perspective: "1200px" }}>
            {reviews.map((review, index) => {
              const isActive = index === activeIndex;
              const isPrevious = index === previousIndex;
              const isNext = index === nextIndex;
              const isVisible = isActive || isPrevious || isNext;

              let transform = "translateX(0) scale(0.9)";
              let opacity = 0;
              let zIndex = 0;

              if (isActive) {
                transform = "translateX(0) scale(1) rotateZ(0deg)";
                opacity = 1;
                zIndex = 30;
              } else if (isPrevious) {
                transform = "translateX(-64%) scale(0.92) rotateY(8deg) rotateZ(-1.5deg)";
                opacity = 0.75;
                zIndex = 20;
              } else if (isNext) {
                transform = "translateX(64%) scale(0.92) rotateY(-8deg) rotateZ(1.5deg)";
                opacity = 0.75;
                zIndex = 20;
              }

              return (
                <article
                  key={review.id}
                  className="absolute left-1/2 top-0 w-full max-w-md -translate-x-1/2 rounded-[2rem] border border-[#ece2d8] bg-white px-8 py-10 text-center shadow-[0_28px_40px_rgba(52,35,20,0.16)] transition-all duration-700 ease-out"
                  style={{
                    transform,
                    opacity,
                    zIndex,
                    visibility: isVisible ? "visible" : "hidden",
                    transitionDuration: prefersReducedMotion ? "0ms" : "900ms",
                  }}
                  aria-hidden={!isActive}
                >
                  <p className="text-lg leading-relaxed text-[#40362f]">“{review.quote}”</p>
                  <p className="mt-8 font-serif text-2xl text-[#9a765d]">{review.name}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.16em] text-[#8b7b6d]">{review.location}</p>
                  <div className="mt-5 flex justify-center">
                    <SourceBadge source={review.source} />
                  </div>
                </article>
              );
            })}
          </div>

          <div className="md:hidden">
            <article
              className="mx-auto w-full max-w-md rounded-[1.75rem] border border-[#ece2d8] bg-white px-7 py-9 text-center shadow-[0_24px_32px_rgba(52,35,20,0.16)] transition-transform duration-700"
              style={{ transform: `translateX(${dragOffset * 0.15}px)` }}
            >
              <p className="text-base leading-relaxed text-[#40362f]">“{reviews[activeIndex].quote}”</p>
              <p className="mt-7 font-serif text-2xl text-[#9a765d]">{reviews[activeIndex].name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#8b7b6d]">{reviews[activeIndex].location}</p>
              <div className="mt-5 flex justify-center">
                <SourceBadge source={reviews[activeIndex].source} />
              </div>
            </article>
          </div>

          <div className="mt-10 flex justify-center gap-3" aria-label="Review slide selection">
            {reviews.map((review, index) => (
              <button
                key={review.id}
                type="button"
                onClick={() => goToIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex ? "scale-110 bg-[#f6ede3]" : "bg-[#e7d8ca]/80 hover:bg-[#f6ede3]/90"
                }`}
                aria-label={`Show review ${index + 1}`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
