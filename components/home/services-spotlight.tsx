"use client";

import { useEffect, useState } from "react";

const WRITE_REVIEW_URL = "https://google.com"; // TODO: Replace with the Team Hair Pro Google review URL.
const AUTO_ADVANCE_MS = 5500;

type Review = {
  id: string;
  name: string;
  rating: number;
  timeAgo: string;
  review: string;
  verified?: boolean;
};

const reviews: Review[] = [
  {
    id: "hilal-akbalik",
    name: "Hilal Akbalik",
    rating: 5,
    timeAgo: "1 month ago",
    review:
      "Great experience at Hair Pro. Andy and his team are thoughtful, professional, and incredibly talented. My color looks dimensional, my cut sits perfectly, and the finish lasted beautifully all week.",
    verified: true,
  },
  {
    id: "cindy-garzon",
    name: "Cindy Garzon",
    rating: 5,
    timeAgo: "1 month ago",
    review:
      "Khan is the best. He listened to everything I asked for and elevated the final look. The salon feels calm and luxurious, and the entire team is warm, attentive, and consistent every time.",
    verified: true,
  },
  {
    id: "simge-cicek",
    name: "Simge Cicek",
    rating: 5,
    timeAgo: "2 months ago",
    review:
      "I am in love with my hairstyle. The artistry is amazing and the results still look fresh weeks later. Team Hair Pro truly understands texture, shape, and how to create a polished luxury look.",
    verified: true,
  },
  {
    id: "emily-tepper",
    name: "Emily Tepper",
    rating: 5,
    timeAgo: "3 weeks ago",
    review:
      "From consultation to blowout, everything was exceptional. The tone match and precision cut were exactly what I wanted, and the attention to detail made the whole appointment feel elevated.",
    verified: true,
  },
  {
    id: "nora-vasquez",
    name: "Nora Vasquez",
    rating: 5,
    timeAgo: "3 months ago",
    review:
      "I have finally found my salon. The team is punctual, skilled, and consistent, and my hair has never felt healthier. Beautiful atmosphere, excellent service, and stunning color work.",
    verified: true,
  },
];

function GoogleWordmark() {
  return (
    <span className="text-[1.55rem] font-medium leading-none tracking-[-0.03em]" aria-label="Google">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 text-[1.2rem] leading-none text-[#E8A823]" aria-label={`${count} star rating`}>
      {Array.from({ length: count }).map((_, index) => (
        <span key={index}>★</span>
      ))}
    </div>
  );
}

function VerifiedBadge() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden>
      <circle cx="10" cy="10" r="9" fill="#1A73E8" />
      <path d="M8.5 12.8 6 10.4l1.1-1.1 1.4 1.4 4.2-4.2 1.1 1.1-5.3 5.2Z" fill="#fff" />
    </svg>
  );
}

export function ServicesSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToIndex = (index: number) => {
    const length = reviews.length;
    setActiveIndex(((index % length) + length) % length);
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      className="google-reviews-enter relative border-y border-[rgba(17,17,17,0.08)] bg-white px-5 py-18 sm:px-6 sm:py-24 lg:py-28"
      aria-labelledby="google-testimonials-heading"
    >
      <h2 id="google-testimonials-heading" className="sr-only">
        Google Reviews
      </h2>

      <div className="mx-auto w-full max-w-[72rem]">
        <header className="mx-auto flex w-full max-w-[68rem] flex-col items-center justify-between gap-5 rounded-[1.4rem] border border-[rgba(17,17,17,0.08)] bg-[#f3f3f1] px-5 py-4 sm:flex-row sm:px-7">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <GoogleWordmark />
            <span className="text-[2rem] font-semibold leading-none text-[#161311]">5.0</span>
            <Stars count={5} />
            <span className="text-sm font-medium text-[#6f6963]">(174)</span>
          </div>

          <a
            href={WRITE_REVIEW_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full border border-[#1f66dc] bg-[#2f7af5] px-6 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(47,122,245,0.26)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1f66dc]"
          >
            Write a Review
          </a>
        </header>

        <div
          className="relative mt-7"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            type="button"
            onClick={() => goToIndex(activeIndex - 1)}
            aria-label="Show previous review"
            className="absolute left-1/2 top-1/2 z-10 inline-flex h-10 w-10 -translate-x-[13.5rem] -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(17,17,17,0.16)] bg-white/95 text-[#2b2825] shadow-[0_10px_22px_rgba(0,0,0,0.1)] transition hover:bg-white sm:-translate-x-[16.4rem]"
          >
            ‹
          </button>

          <div className="mx-auto w-full max-w-[24rem] overflow-hidden rounded-[1.25rem] border border-[rgba(17,17,17,0.08)] bg-[#efefed] shadow-[0_16px_40px_rgba(16,16,16,0.08)] sm:max-w-[30rem]">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
            >
              {reviews.map((review) => (
                <article key={review.id} className="w-full shrink-0 p-5 sm:p-6">
                  <header className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h3 className="truncate text-[1.05rem] font-semibold text-[#13110f]">{review.name}</h3>
                      {review.verified ? <VerifiedBadge /> : null}
                    </div>
                    <p className="mt-0.5 text-sm text-[#79736d]">{review.timeAgo}</p>
                  </header>

                  <div className="mt-3 flex items-center justify-between">
                    <Stars count={review.rating} />
                    <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#7e7873]">Google</span>
                  </div>

                  <p className="mt-3 text-[1rem] leading-8 text-[#27221f]">{review.review}</p>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => goToIndex(activeIndex + 1)}
            aria-label="Show next review"
            className="absolute left-1/2 top-1/2 z-10 inline-flex h-10 w-10 translate-x-[13.5rem] -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(17,17,17,0.16)] bg-white/95 text-[#2b2825] shadow-[0_10px_22px_rgba(0,0,0,0.1)] transition hover:bg-white sm:translate-x-[16.4rem]"
          >
            ›
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2" aria-label="Review pagination">
          {reviews.map((review, index) => (
            <button
              key={review.id}
              type="button"
              aria-label={`Go to review ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => goToIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? "w-5 bg-[#2f2c29]" : "w-1.5 bg-[#b6b0aa] hover:bg-[#8f8a84]"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
