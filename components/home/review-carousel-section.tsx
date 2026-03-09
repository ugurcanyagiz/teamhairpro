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
    quote: "Ariel is amazing with curls. Favorite haircut I\'ve ever had.",
    name: "Coby C",
    location: "New York, NY",
    source: "Google",
  },
  {
    id: 2,
    quote:
      "I had the pleasure of doing my hair with Gigi. She delivered an amazing service. The salon is welcoming and feels like you are getting pampered.",
    name: "Olga P",
    location: "Brooklyn, NY",
    source: "Yelp",
  },
  {
    id: 3,
    quote:
      "I\'ve been getting my hair done by Ariel for years and he always gives me the blonde Barbie hair of my dreams. He knows exactly what to do and listens closely.",
    name: "Jelena G",
    location: "Brooklyn, NY",
    source: "Yelp",
  },
  {
    id: 4,
    quote:
      "From consultation to finish, everything felt calm and intentional. My color looks luminous in every light and grows out beautifully.",
    name: "Elena P",
    location: "Jersey City, NJ",
    source: "Google",
  },
  {
    id: 5,
    quote:
      "The cut brought movement back to my hair and made everyday styling genuinely easier. It still keeps its shape weeks later.",
    name: "Nora L",
    location: "Hoboken, NJ",
    source: "Yelp",
  },
];

const AUTOPLAY_INTERVAL_MS = 5000;
const SWIPE_THRESHOLD = 46;

function SourceBadge({ source }: { source: Review["source"] }) {
  if (source === "Google") {
    return (
      <span className="inline-flex items-center text-lg font-semibold leading-none">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
      </span>
    );
  }

  return <span className="text-sm font-semibold uppercase tracking-wide text-[#b25245]">yelp✶</span>;
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
    <section id="proof" className="relative overflow-hidden bg-[#f2e7db] px-6 py-24 lg:px-10 lg:py-28" aria-labelledby="reviews-heading">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-28 -top-20 h-[23rem] w-[30rem] rounded-[60%_40%_55%_45%/52%_42%_58%_48%] bg-[#b7957c]" />
        <div className="absolute right-[-18%] top-[-4%] h-[34rem] w-[45rem] rounded-[58%_42%_49%_51%/59%_39%_61%_41%] bg-[#b7957c]" />
        <div className="absolute -bottom-40 left-1/4 h-[20rem] w-[25rem] rounded-[56%_44%_48%_52%/62%_38%_62%_38%] bg-[#b7957c]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="text-center text-[#fffaf3]">
          <p className="text-[12px] uppercase tracking-[0.35em] text-[#f8ede2]">Testimonials</p>
          <h2 id="reviews-heading" className="mt-3 font-serif text-6xl font-normal leading-[0.82] sm:text-7xl lg:text-8xl">
            <span className="block">Talk the</span>
            <span className="-mt-2 block">Talk...</span>
          </h2>
        </div>

        <div
          className="relative mt-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={clearPointerState}
          aria-roledescription="carousel"
          aria-label="Client reviews"
        >
          <div className="hidden h-[430px] md:block" style={{ perspective: "1200px" }}>
            {reviews.map((review, index) => {
              const isActive = index === activeIndex;
              const isPrevious = index === previousIndex;
              const isNext = index === nextIndex;
              const isVisible = isActive || isPrevious || isNext;

              let transform = "translateX(0) scale(0.92)";
              let opacity = 0;
              let zIndex = 0;
              let widthClass = "max-w-[300px]";

              if (isActive) {
                transform = "translateX(0) translateY(-4px) scale(1) rotateZ(0deg)";
                opacity = 1;
                zIndex = 30;
                widthClass = "max-w-[370px]";
              } else if (isPrevious) {
                transform = "translateX(-86%) translateY(4px) scale(0.94) rotateZ(-2deg)";
                opacity = 0.95;
                zIndex = 20;
              } else if (isNext) {
                transform = "translateX(86%) translateY(8px) scale(0.98) rotateZ(2deg)";
                opacity = 0.95;
                zIndex = 20;
                widthClass = "max-w-[340px]";
              }

              return (
                <article
                  key={review.id}
                  className={`absolute left-1/2 top-0 w-full ${widthClass} -translate-x-1/2 bg-[#f8f8f8] px-8 py-10 text-center shadow-[0_10px_18px_rgba(58,38,20,0.2)] transition-all duration-700 ease-out`}
                  style={{
                    transform,
                    opacity,
                    zIndex,
                    visibility: isVisible ? "visible" : "hidden",
                    clipPath: "polygon(0% 1.5%, 100% 0%, 100% 98%, 0% 100%)",
                    transitionDuration: prefersReducedMotion ? "0ms" : "850ms",
                  }}
                  aria-hidden={!isActive}
                >
                  <p className="text-[19px] leading-relaxed text-[#4a423c]">“{review.quote}”</p>
                  <p className="mt-9 font-serif text-[38px] leading-none text-[#d3a69e]">{review.name}</p>
                  <p className="mt-3 text-xl text-[#d3a69e]">from {review.location} on</p>
                  <div className="mt-3 flex justify-center">
                    <SourceBadge source={review.source} />
                  </div>
                </article>
              );
            })}
          </div>

          <div className="md:hidden">
            <article
              className="mx-auto w-full max-w-md bg-[#f8f8f8] px-7 py-9 text-center shadow-[0_10px_18px_rgba(58,38,20,0.2)] transition-transform duration-700"
              style={{ transform: `translateX(${dragOffset * 0.15}px)`, clipPath: "polygon(0% 1.5%, 100% 0%, 100% 98%, 0% 100%)" }}
            >
              <p className="text-base leading-relaxed text-[#4a423c]">“{reviews[activeIndex].quote}”</p>
              <p className="mt-7 font-serif text-4xl leading-none text-[#d3a69e]">{reviews[activeIndex].name}</p>
              <p className="mt-2 text-lg text-[#d3a69e]">from {reviews[activeIndex].location} on</p>
              <div className="mt-3 flex justify-center">
                <SourceBadge source={reviews[activeIndex].source} />
              </div>
            </article>
          </div>

          <div className="mt-10 flex justify-center gap-2.5" aria-label="Review slide selection">
            {reviews.map((review, index) => (
              <button
                key={review.id}
                type="button"
                onClick={() => goToIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex ? "bg-[#18110b]" : "bg-[#f4ede5] hover:bg-[#fff7f0]"
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
