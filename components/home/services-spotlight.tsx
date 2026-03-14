"use client";

import { useEffect, useRef, useState } from "react";

const AUTO_ADVANCE_MS = 7000;

type Review = {
  id: string;
  name: string;
  role: string;
  rating: number;
  timeAgo: string;
  review: string;
};

const reviews: Review[] = [
  {
    id: "hilal-akbalik",
    name: "Hilal Akbalik",
    role: "Google Review",
    rating: 5,
    timeAgo: "1 month ago",
    review:
      "Andy and his team created exactly the dimensional color I had in mind. Every detail felt intentional, and my hair held its shape and shine beautifully all week.",
  },
  {
    id: "cindy-garzon",
    name: "Cindy Garzon",
    role: "Google Review",
    rating: 5,
    timeAgo: "1 month ago",
    review:
      "Khan listened closely and refined every step of the cut. The final finish looked polished, modern, and still effortless days later.",
  },
  {
    id: "simge-cicek",
    name: "Simge Cicek",
    role: "Google Review",
    rating: 5,
    timeAgo: "2 months ago",
    review:
      "TeamHairPro understands balance and texture in a way that feels rare. The whole appointment was calm, elevated, and genuinely luxurious.",
  },
  {
    id: "emily-tepper",
    name: "Emily Tepper",
    role: "Google Review",
    rating: 5,
    timeAgo: "3 weeks ago",
    review:
      "From consultation to finish, everything felt thoughtful. The tone match was precise and the shape framed my face better than I expected.",
  },
  {
    id: "nora-vasquez",
    name: "Nora Vasquez",
    role: "Google Review",
    rating: 5,
    timeAgo: "3 months ago",
    review:
      "The consistency here is unmatched. My color remains luminous, my hair feels healthier, and the studio atmosphere always feels refined.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 text-[0.92rem] leading-none text-[#b98b3a]" aria-label={`${count} star rating`}>
      {Array.from({ length: count }).map((_, index) => (
        <span key={index}>★</span>
      ))}
    </div>
  );
}

function ReviewMeta({ review }: { review: Review }) {
  return (
    <div className="flex items-center gap-2 text-[0.76rem] tracking-[0.08em] text-[#7a7169] uppercase">
      <span>{review.role}</span>
      <span aria-hidden>•</span>
      <span>{review.timeAgo}</span>
    </div>
  );
}

function getWrappedIndex(index: number, length: number) {
  return (index + length) % length;
}

export function ServicesSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const featuredReview = reviews[activeIndex];
  const leftReview = reviews[getWrappedIndex(activeIndex - 1, reviews.length)];
  const rightReview = reviews[getWrappedIndex(activeIndex + 1, reviews.length)];

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="testimonial-composition relative isolate overflow-hidden bg-white px-5 py-[84px] sm:px-6 sm:py-28">

      <div className="mx-auto w-full max-w-6xl">
        <div
          className={`testimonial-stage relative mx-auto grid min-h-[28rem] items-center gap-5 py-2 sm:min-h-[30rem] lg:min-h-[33rem] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
          }`}
        >
          <article key={`${leftReview.id}-left`} className="testimonial-stage-card testimonial-stage-card--left testimonial-stage-card--animate-in" aria-hidden>
            <div className="flex items-center justify-between gap-3">
              <ReviewMeta review={leftReview} />
              <Stars count={leftReview.rating} />
            </div>
            <p className="mt-5 line-clamp-4 text-[1rem] leading-7 text-[#302924]">“{leftReview.review}”</p>
            <p className="mt-5 text-[0.98rem] font-medium text-[#171311]">{leftReview.name}</p>
          </article>

          <article
            key={`${featuredReview.id}-center`}
            className="testimonial-stage-card testimonial-stage-card--center testimonial-stage-card--animate-in luxury-float"
            aria-live="polite"
          >
            <div className="flex items-center justify-between gap-4">
              <ReviewMeta review={featuredReview} />
              <Stars count={featuredReview.rating} />
            </div>

            <p className="mt-8 text-[1.22rem] leading-[1.7] tracking-[0.01em] text-[#1f1a16] sm:text-[1.45rem]">“{featuredReview.review}”</p>

            <footer className="mt-8 flex items-center justify-between gap-3 border-t border-[#f0ebe6] pt-6">
              <div>
                <p className="text-[1.04rem] font-medium tracking-[0.02em] text-[#171311]">{featuredReview.name}</p>
                <p className="mt-1 text-sm text-[#7f766f]">Verified client</p>
              </div>

              <div className="flex items-center gap-1.5" aria-label="Review pagination">
                {reviews.map((review, index) => (
                  <button
                    key={review.id}
                    type="button"
                    aria-label={`Show testimonial ${index + 1}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                    onClick={() => setActiveIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 hover:bg-[#54453a] ${
                      index === activeIndex ? "w-6 bg-[#2d241e]" : "w-1.5 bg-[#cbbeb2]"
                    }`}
                  />
                ))}
              </div>
            </footer>
          </article>

          <article key={`${rightReview.id}-right`} className="testimonial-stage-card testimonial-stage-card--right testimonial-stage-card--animate-in" aria-hidden>
            <div className="flex items-center justify-between gap-3">
              <ReviewMeta review={rightReview} />
              <Stars count={rightReview.rating} />
            </div>
            <p className="mt-5 line-clamp-4 text-[1rem] leading-7 text-[#302924]">“{rightReview.review}”</p>
            <p className="mt-5 text-[0.98rem] font-medium text-[#171311]">{rightReview.name}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
