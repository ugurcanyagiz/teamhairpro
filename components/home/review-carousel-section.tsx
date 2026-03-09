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
    <section id="proof" className="relative overflow-hidden bg-[#f6f0e8] px-4 py-24 md:px-6 md:py-28 lg:py-32" aria-labelledby="reviews-heading">
      <div className="relative mx-auto w-full max-w-[1360px]">
        <div className="relative overflow-hidden rounded-[3.2rem] px-5 py-16 sm:px-8 md:rounded-[4.5rem] md:px-10 md:py-20 lg:px-14 lg:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[#d8c4b1]" />
          <div className="pointer-events-none absolute -left-20 top-[-7.5rem] h-48 w-[24rem] rounded-[100%] bg-[#f6f0e8] sm:left-[-8%] sm:w-[28rem] md:h-56 md:w-[35rem]" />
          <div className="pointer-events-none absolute right-[-8%] top-[-6.5rem] h-44 w-[18rem] rounded-[100%] bg-[#f6f0e8] sm:w-[24rem] md:h-56 md:w-[30rem]" />
          <div className="pointer-events-none absolute -left-24 bottom-[-9rem] h-72 w-56 rounded-[100%] bg-[#f6f0e8] md:w-72" />
          <div className="pointer-events-none absolute bottom-[-8rem] right-[8%] h-60 w-56 rounded-[100%] bg-[#f6f0e8] md:h-72 md:w-80" />
          <div className="pointer-events-none absolute left-[16%] top-[20%] h-24 w-24 rounded-full bg-[#eadccf]/55 blur-2xl" />
          <div className="pointer-events-none absolute right-[20%] bottom-[18%] h-28 w-28 rounded-full bg-[#e7d5c4]/45 blur-2xl" />

          <div className="relative mx-auto w-full max-w-[1180px]">
            <header className="text-center text-[#f8f3ed]">
              <h2 id="reviews-heading" className="font-serif text-[clamp(2.6rem,9vw,6.6rem)] font-normal uppercase leading-[0.8] tracking-tight">
                <span className="block">Words We</span>
                <span className="-mt-2.5 block">Live By</span>
              </h2>
            </header>

            <div
              className="relative mt-8 md:mt-10"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={clearPointerState}
              aria-roledescription="carousel"
              aria-label="Client reviews"
            >
              <div className="hidden h-[460px] md:block" style={{ perspective: "1500px" }}>
                {reviews.map((review, index) => {
                  const isActive = index === activeIndex;
                  const isPrevious = index === previousIndex;
                  const isNext = index === nextIndex;
                  const isVisible = isActive || isPrevious || isNext;

                  let transform = "translateX(0)";
                  let opacity = 0;
                  let zIndex = 0;
                  let widthClass = "max-w-[305px]";
                  let minHeight = "290px";

                  if (isActive) {
                    transform = "translateX(-50%) translateY(-2px) rotateZ(-0.4deg)";
                    opacity = 1;
                    zIndex = 30;
                    widthClass = "max-w-[390px]";
                    minHeight = "350px";
                  } else if (isPrevious) {
                    transform = "translateX(-124%) translateY(48px) rotateZ(-5deg) rotateY(6deg) scale(0.93)";
                    opacity = 1;
                    zIndex = 20;
                  } else if (isNext) {
                    transform = "translateX(24%) translateY(34px) rotateZ(4.7deg) rotateY(-6deg) scale(0.94)";
                    opacity = 1;
                    zIndex = 20;
                    widthClass = "max-w-[322px]";
                  }

                  return (
                    <article
                      key={review.id}
                      className={`absolute left-1/2 top-3 w-full ${widthClass} -translate-x-1/2 rounded-[0.45rem] border border-[#e7ddd2] bg-[#f8f4ee] px-6 py-7 text-left shadow-[0_18px_34px_rgba(66,47,31,0.14)] transition-all duration-700 ease-out`}
                      style={{
                        minHeight,
                        transform,
                        opacity,
                        zIndex,
                        visibility: isVisible ? "visible" : "hidden",
                        transitionDuration: prefersReducedMotion ? "0ms" : "860ms",
                      }}
                      aria-hidden={!isActive}
                    >
                      <p className="text-sm tracking-[0.22em] text-[#8d7660]">★★★★★</p>
                      <p className="mt-4 text-[15px] leading-relaxed text-[#51453a]">“{review.quote}”</p>
                      <div className="mt-6 border-t border-[#e5d9ce] pt-4">
                        <p className="font-serif text-[1.55rem] leading-none text-[#ab8576]">{review.name}</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#7b6b5d]">{review.location}</p>
                        <div className="mt-2.5">
                          <SourceBadge source={review.source} />
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="md:hidden">
                <article
                  className="mx-auto w-full max-w-sm rounded-[0.45rem] border border-[#e7ddd2] bg-[#f8f4ee] px-6 py-7 text-left shadow-[0_18px_34px_rgba(66,47,31,0.14)] transition-transform duration-700"
                  style={{ transform: `translateX(${dragOffset * 0.15}px)`, minHeight: "328px" }}
                >
                  <p className="text-sm tracking-[0.22em] text-[#8d7660]">★★★★★</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#51453a]">“{reviews[activeIndex].quote}”</p>
                  <div className="mt-6 border-t border-[#e5d9ce] pt-4">
                    <p className="font-serif text-[1.55rem] leading-none text-[#ab8576]">{reviews[activeIndex].name}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#7b6b5d]">{reviews[activeIndex].location}</p>
                    <div className="mt-2.5">
                      <SourceBadge source={reviews[activeIndex].source} />
                    </div>
                  </div>
                </article>
              </div>

              <div className="mt-8 flex justify-center gap-2.5" aria-label="Review slide selection">
                {reviews.map((review, index) => (
                  <button
                    key={review.id}
                    type="button"
                    onClick={() => goToIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full border border-[#9d8571]/40 transition ${index === activeIndex ? "bg-[#705b49]" : "bg-[#f2e7db] hover:bg-[#ede0d3]"}`}
                    aria-label={`Show review ${index + 1}`}
                    aria-current={index === activeIndex}
                  />
                ))}
              </div>
            </div>

            <p className="mt-12 text-center font-serif text-[clamp(2.2rem,7.8vw,5.8rem)] uppercase leading-[0.84] tracking-tight text-[#f8f3ed]">
              <span className="block">Crafted for</span>
              <span className="-mt-2.5 block">Your Signature Look.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
