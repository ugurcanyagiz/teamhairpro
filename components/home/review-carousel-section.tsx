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
      "I had the pleasure of doing my hair with Gigi. She delivered an amazing service. The salon is welcoming and feels like you are getting pampered. I highly recommend Gigi as a colorist and the Palms Salon!",
    name: "Olga P",
    location: "Brooklyn, NY",
    source: "Yelp",
  },
  {
    id: 2,
    quote:
      "I've been getting my hair done by Ariel for the past 6 years and he has always given me the blonde Barbie hair of my dreams! This time around I wanted a little change, and he knew exactly what to do!",
    name: "Jelena G",
    location: "Brooklyn, NY",
    source: "Yelp",
  },
  {
    id: 3,
    quote:
      "I am new to the city and was looking for a blonde specialist and Trish did NOT disappoint. I went in with some inspo pics and she was amazing at understanding and setting realistic goals.",
    name: "Paige R",
    location: "New York, NY",
    source: "Google",
  },
  {
    id: 4,
    quote: "Ariel is amazing with curls. Favorite haircut I've ever had.",
    name: "Coby C",
    location: "New York, NY",
    source: "Google",
  },
  {
    id: 5,
    quote: "From consultation to finish everything felt calm, intentional, and genuinely client-first.",
    name: "Elena P",
    location: "Jersey City, NJ",
    source: "Google",
  },
];

const AUTOPLAY_INTERVAL_MS = 5000;
const SWIPE_THRESHOLD = 46;

function SourceBadge({ source }: { source: Review["source"] }) {
  if (source === "Google") {
    return (
      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#6a5b4f]">
        <span className="text-sm leading-none text-[#4285F4]">G</span>
        <span>Google</span>
      </span>
    );
  }

  return <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#6a5b4f]">Yelp ✶</span>;
}

export function ReviewCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(1);
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
    <section id="proof" className="relative overflow-hidden bg-[#f5f5f7] px-4 py-24 md:px-6 md:py-28 lg:py-32" aria-labelledby="reviews-heading">
      <div className="mx-auto w-full max-w-[1280px]">
        <header className="text-center">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8f7f6e]">Testimonials</p>
          <h2 id="reviews-heading" className="mt-5 font-serif text-[clamp(2.4rem,7.6vw,5.8rem)] leading-[0.9] tracking-tight text-[#2f2721]">
            Voices of
            <span className="block">Quiet Luxury</span>
          </h2>
        </header>

        <div
          className="relative mt-14 md:mt-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={clearPointerState}
          aria-roledescription="carousel"
          aria-label="Client reviews"
        >
          <div className="hidden h-[470px] md:block" style={{ perspective: "1700px" }}>
            {reviews.map((review, index) => {
              const isActive = index === activeIndex;
              const isPrevious = index === previousIndex;
              const isNext = index === nextIndex;
              const isVisible = isActive || isPrevious || isNext;

              let transform = "translateX(-50%)";
              let opacity = 0;
              let zIndex = 0;
              let widthClass = "max-w-[320px]";
              let minHeight = "308px";

              if (isActive) {
                transform = "translateX(-50%) translateY(-8px) rotateZ(-0.8deg)";
                opacity = 1;
                zIndex = 40;
                widthClass = "max-w-[430px]";
                minHeight = "372px";
              } else if (isPrevious) {
                transform = "translateX(-152%) translateY(42px) rotateZ(-6.8deg) rotateY(8deg) scale(0.92)";
                opacity = 1;
                zIndex = 25;
              } else if (isNext) {
                transform = "translateX(52%) translateY(54px) rotateZ(5.9deg) rotateY(-8deg) scale(0.9)";
                opacity = 1;
                zIndex = 25;
                widthClass = "max-w-[336px]";
              }

              return (
                <article
                  key={review.id}
                  className={`absolute left-1/2 top-0 w-full ${widthClass} rounded-[0.7rem] border border-[#e4ddd6] bg-[#fbfaf8] px-7 py-8 text-left shadow-[0_24px_44px_rgba(53,40,30,0.14)] transition-all duration-700 ease-out`}
                  style={{
                    minHeight,
                    transform,
                    opacity,
                    zIndex,
                    visibility: isVisible ? "visible" : "hidden",
                    transitionDuration: prefersReducedMotion ? "0ms" : "820ms",
                  }}
                  aria-hidden={!isActive}
                >
                  <p className="text-[11px] tracking-[0.3em] text-[#9b8570]">★★★★★</p>
                  <p className="mt-5 text-[15px] leading-relaxed text-[#4a4038]">“{review.quote}”</p>
                  <div className="mt-7 border-t border-[#e9e1d9] pt-4">
                    <p className="font-serif text-[1.58rem] leading-none text-[#8d6f60]">{review.name}</p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[#7d6d60]">{review.location}</p>
                    <div className="mt-3">
                      <SourceBadge source={review.source} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="md:hidden">
            <article
              className="mx-auto w-full max-w-sm rounded-[0.7rem] border border-[#e4ddd6] bg-[#fbfaf8] px-6 py-7 text-left shadow-[0_24px_44px_rgba(53,40,30,0.14)] transition-transform duration-700"
              style={{ transform: `translateX(${dragOffset * 0.15}px)`, minHeight: "330px" }}
            >
              <p className="text-[11px] tracking-[0.3em] text-[#9b8570]">★★★★★</p>
              <p className="mt-5 text-[15px] leading-relaxed text-[#4a4038]">“{reviews[activeIndex].quote}”</p>
              <div className="mt-7 border-t border-[#e9e1d9] pt-4">
                <p className="font-serif text-[1.58rem] leading-none text-[#8d6f60]">{reviews[activeIndex].name}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[#7d6d60]">{reviews[activeIndex].location}</p>
                <div className="mt-3">
                  <SourceBadge source={reviews[activeIndex].source} />
                </div>
              </div>
            </article>
          </div>

          <div className="mt-9 flex justify-center gap-2.5" aria-label="Review slide selection">
            {reviews.map((review, index) => (
              <button
                key={review.id}
                type="button"
                onClick={() => goToIndex(index)}
                className={`h-2.5 w-2.5 rounded-full border border-[#9a8572]/40 transition ${index === activeIndex ? "bg-[#5f4c3e]" : "bg-[#ece7e2] hover:bg-[#dfd6ce]"}`}
                aria-label={`Show review ${index + 1}`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>
        </div>

        <p className="mt-14 text-center font-serif text-[clamp(2rem,6.4vw,4.8rem)] leading-[0.88] tracking-tight text-[#2f2721]">
          Precision, warmth,
          <span className="block">and signature artistry.</span>
        </p>
      </div>
    </section>
  );
}
