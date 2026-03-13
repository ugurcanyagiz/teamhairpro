"use client";

import { type UIEvent, useEffect, useMemo, useRef, useState } from "react";

type Testimonial = {
  id: number;
  name: string;
  review: string;
  rating: number;
  source: "Google";
  timeAgo: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sofia M.",
    review:
      "Every detail feels intentional, from the consultation to the final style. My color looks luminous in every light and still feels effortlessly natural.",
    rating: 5,
    source: "Google",
    timeAgo: "2 weeks ago",
  },
  {
    id: 2,
    name: "Nina R.",
    review:
      "The team is warm, precise, and incredibly consistent. I trust them completely for cuts, color, and styling before important events.",
    rating: 5,
    source: "Google",
    timeAgo: "1 month ago",
  },
  {
    id: 3,
    name: "Elena P.",
    review:
      "I asked for softness and movement, and they delivered exactly that. The result was polished, modern, and genuinely flattering.",
    rating: 5,
    source: "Google",
    timeAgo: "3 weeks ago",
  },
  {
    id: 4,
    name: "Camila T.",
    review:
      "This is the first salon where I feel truly understood. Their artistry is refined, and the experience always feels calm and elevated.",
    rating: 5,
    source: "Google",
    timeAgo: "5 days ago",
  },
  {
    id: 5,
    name: "Lara G.",
    review:
      "From tone matching to finishing, the level of professionalism is exceptional. I leave feeling confident every single time.",
    rating: 5,
    source: "Google",
    timeAgo: "2 months ago",
  },
  {
    id: 6,
    name: "Maya D.",
    review:
      "The atmosphere is beautiful without ever feeling rushed. My stylist balanced healthy hair goals with a result that looks editorial.",
    rating: 5,
    source: "Google",
    timeAgo: "4 weeks ago",
  },
];

const AUTO_ADVANCE_MS = 5600;

function stars(rating: number) {
  return "★".repeat(Math.max(0, Math.min(5, rating)));
}

export function ServicesSpotlight() {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  const featured = useMemo(() => testimonials[activeIndex], [activeIndex]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const setPreference = () => setPrefersReducedMotion(mediaQuery.matches);
    setPreference();
    mediaQuery.addEventListener("change", setPreference);
    return () => mediaQuery.removeEventListener("change", setPreference);
  }, []);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const card = rail.querySelector<HTMLElement>(`[data-review-index='${activeIndex}']`);
    if (!card) return;

    card.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIndex, prefersReducedMotion]);

  const handleRailScroll = (event: UIEvent<HTMLDivElement>) => {
    const current = event.currentTarget;
    const cardWidth = current.firstElementChild?.clientWidth;
    if (!cardWidth) return;

    const styles = window.getComputedStyle(current);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0");
    const nextIndex = Math.round(current.scrollLeft / (cardWidth + gap));
    if (nextIndex !== activeIndex && nextIndex >= 0 && nextIndex < testimonials.length) {
      setActiveIndex(nextIndex);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y border-[rgba(17,17,17,0.08)] bg-white px-5 py-18 sm:px-6 sm:py-24 lg:py-28"
      aria-labelledby="google-testimonials-heading"
    >
      <div className="pointer-events-none absolute left-1/2 top-28 h-72 w-[min(82vw,56rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(220,220,214,0.24)_0%,rgba(255,255,255,0)_72%)]" aria-hidden />

      <div className="relative mx-auto w-full max-w-[74rem]">
        <header className="mx-auto max-w-3xl text-center">
          <p
            className={`text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[#66615a] transition duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            GOOGLE TESTIMONIALS
          </p>
          <h2
            id="google-testimonials-heading"
            className={`mt-5 text-[clamp(1.95rem,4.4vw,3.25rem)] font-medium leading-[1.08] tracking-[0.01em] text-[#161412] transition duration-700 delay-75 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Guests love their Hair Pro experience
          </h2>
          <div
            className={`mt-5 inline-flex items-center gap-3 rounded-full border border-[rgba(17,17,17,0.08)] bg-[#fafaf8] px-5 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-[#5f5952] transition duration-700 delay-150 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <span className="text-[0.86rem] tracking-[0.18em] text-[#b0893f]">★★★★★</span>
            <span>4.9/5 based on 120+ Google reviews</span>
          </div>
        </header>

        <article
          className={`luxury-float relative mx-auto mt-11 max-w-4xl rounded-[2rem] border border-[rgba(17,17,17,0.08)] bg-white px-6 py-8 text-center shadow-[0_24px_70px_rgba(17,17,17,0.08)] transition duration-700 delay-200 sm:px-10 sm:py-11 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <span className="pointer-events-none absolute left-8 top-4 text-5xl leading-none text-[rgba(28,25,22,0.08)] sm:left-10 sm:top-6 sm:text-6xl" aria-hidden>
            “
          </span>
          <p className="text-[clamp(1.25rem,2.6vw,2.05rem)] leading-[1.45] tracking-[0.01em] text-[#1e1b18]">
            {featured.review}
          </p>
          <footer className="mt-8 border-t border-[rgba(17,17,17,0.08)] pt-6 sm:mt-9">
            <p className="text-[1.03rem] font-medium tracking-[0.02em] text-[#191613]">{featured.name}</p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2.5 text-[0.68rem] uppercase tracking-[0.15em] text-[#6b655e]">
              <span>{stars(featured.rating)}</span>
              <span>·</span>
              <span>{featured.source} Review</span>
              <span>·</span>
              <span>{featured.timeAgo}</span>
            </div>
          </footer>
        </article>

        <div
          className={`mt-10 transition duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={railRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onScroll={handleRailScroll}
            aria-label="More Google testimonials"
          >
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.id}
                data-review-index={index}
                className={`group min-w-[83%] snap-center rounded-[1.5rem] border bg-[#fafaf8] p-5 shadow-[0_14px_36px_rgba(17,17,17,0.05)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(17,17,17,0.09)] sm:min-w-[48%] lg:min-w-[31%] ${
                  index === activeIndex
                    ? "border-[rgba(17,17,17,0.14)]"
                    : "border-[rgba(17,17,17,0.08)] hover:border-[rgba(17,17,17,0.14)]"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-medium text-[#181512]">{testimonial.name}</p>
                  <span className="inline-flex items-center rounded-full border border-[rgba(17,17,17,0.08)] bg-white px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#6a655f]">
                    Google
                  </span>
                </div>
                <p className="mt-2 text-[0.64rem] uppercase tracking-[0.13em] text-[#8a847e]">{testimonial.timeAgo}</p>
                <p className="mt-4 text-[0.95rem] leading-7 text-[#3d3832]">{testimonial.review}</p>
                <p className="mt-4 text-[0.76rem] tracking-[0.19em] text-[#b0893f]">{stars(testimonial.rating)}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2.5" aria-label="Testimonial progress indicators">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full border border-[rgba(17,17,17,0.14)] transition ${
                  index === activeIndex ? "w-7 bg-[#25211e]" : "w-2.5 bg-[#ecebe8] hover:bg-[#d8d5d1]"
                }`}
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
