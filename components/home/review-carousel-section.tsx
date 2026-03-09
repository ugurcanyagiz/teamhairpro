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
      <span className="inline-flex items-center text-xl font-semibold leading-none">
        <span className="text-[#4285F4]">G</span>
      </span>
    );
  }

  return <span className="text-sm font-semibold leading-none text-[#1f1a17]">yelp✶</span>;
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
    <section id="proof" className="relative overflow-hidden bg-[#efe1d4] px-4 py-16 md:px-6 md:py-20 lg:py-24" aria-labelledby="reviews-heading">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[3%] top-[4%] h-[92%] w-[94%] rounded-[8rem] bg-[#b99a82] md:rounded-[9rem]" />
        <div className="absolute left-[21%] top-[-5rem] h-44 w-72 rounded-[999px] bg-[#efe1d4]" />
        <div className="absolute right-[16%] top-[-3.4rem] h-52 w-[26rem] rounded-[999px] bg-[#efe1d4]" />
        <div className="absolute -left-12 bottom-[-7rem] h-80 w-52 rounded-[999px] bg-[#efe1d4]" />
        <div className="absolute bottom-[-8rem] right-[16%] h-72 w-56 rounded-[999px] bg-[#efe1d4]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1320px]">
        <div className="text-center text-[#f7efe8]">
          <h2 id="reviews-heading" className="font-serif text-[72px] font-normal uppercase leading-[0.78] tracking-tight sm:text-[84px] lg:text-[92px]">
            <span className="block">Talk The</span>
            <span className="-mt-3 block">Talk...</span>
          </h2>
        </div>

        <div
          className="relative mt-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={clearPointerState}
          aria-roledescription="carousel"
          aria-label="Client reviews"
        >
          <div className="hidden h-[440px] md:block" style={{ perspective: "1200px" }}>
            {reviews.map((review, index) => {
              const isActive = index === activeIndex;
              const isPrevious = index === previousIndex;
              const isNext = index === nextIndex;
              const isVisible = isActive || isPrevious || isNext;

              let transform = "translateX(0)";
              let opacity = 0;
              let zIndex = 0;
              let widthClass = "max-w-[302px]";
              let paddingClass = "px-7 py-9";
              let minHeight = "320px";

              if (isActive) {
                transform = "translateX(0) scale(1)";
                opacity = 1;
                zIndex = 30;
                widthClass = "max-w-[380px]";
                paddingClass = "px-8 py-10";
                minHeight = "430px";
              } else if (isPrevious) {
                transform = "translateX(-82%) translateY(8px) rotateZ(-1.6deg)";
                opacity = 1;
                zIndex = 20;
              } else if (isNext) {
                transform = "translateX(82%) translateY(8px) rotateZ(1.6deg)";
                opacity = 1;
                zIndex = 20;
              }

              return (
                <article
                  key={review.id}
                  className={`absolute left-1/2 top-0 w-full ${widthClass} ${paddingClass} -translate-x-1/2 bg-[#f3f3f3] text-center shadow-[0_12px_18px_rgba(60,41,25,0.24)] transition-all duration-700 ease-out`}
                  style={{
                    minHeight,
                    transform,
                    opacity,
                    zIndex,
                    visibility: isVisible ? "visible" : "hidden",
                    clipPath: "polygon(0% 1.6%, 100% 0%, 100% 98.6%, 0% 100%)",
                    transitionDuration: prefersReducedMotion ? "0ms" : "820ms",
                  }}
                  aria-hidden={!isActive}
                >
                  <p className="text-[33px] leading-[1.06] text-[#4f4943]">“{review.quote}”</p>
                  <p className="mt-7 font-serif text-[43px] leading-none text-[#d3a29b]">{review.name} from {review.location} on</p>
                  <div className="mt-2.5 flex justify-center">
                    <SourceBadge source={review.source} />
                  </div>
                </article>
              );
            })}
          </div>

          <div className="md:hidden">
            <article
              className="mx-auto w-full max-w-sm bg-[#f3f3f3] px-6 py-8 text-center shadow-[0_12px_18px_rgba(60,41,25,0.24)] transition-transform duration-700"
              style={{
                transform: `translateX(${dragOffset * 0.15}px)`,
                clipPath: "polygon(0% 1.6%, 100% 0%, 100% 98.6%, 0% 100%)",
                minHeight: "360px",
              }}
            >
              <p className="text-base leading-relaxed text-[#4f4943]">“{reviews[activeIndex].quote}”</p>
              <p className="mt-7 font-serif text-4xl leading-none text-[#d3a29b]">{reviews[activeIndex].name}</p>
              <p className="mt-2 text-xl text-[#d3a29b]">from {reviews[activeIndex].location} on</p>
              <div className="mt-2.5 flex justify-center">
                <SourceBadge source={reviews[activeIndex].source} />
              </div>
            </article>
          </div>

          <div className="mt-8 flex justify-center gap-2.5" aria-label="Review slide selection">
            {reviews.map((review, index) => (
              <button
                key={review.id}
                type="button"
                onClick={() => goToIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${index === activeIndex ? "bg-[#17120c]" : "bg-[#efe7de] hover:bg-[#f8f2eb]"}`}
                aria-label={`Show review ${index + 1}`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>
        </div>

        <p className="mt-10 text-center font-serif text-[74px] uppercase leading-[0.84] tracking-tight text-[#f7efe8] sm:text-[84px] lg:text-[94px]">
          <span className="block">&apos;Cause We Walk</span>
          <span className="-mt-3 block">The Walk.</span>
        </p>
      </div>
    </section>
  );
}
