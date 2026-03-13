"use client";

import { useEffect, useState } from "react";

const WRITE_REVIEW_URL = "https://maps.app.goo.gl/kfL3Ls7x8Jn6xe9v7";
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
    <span className="text-[1.25rem] font-medium leading-none tracking-[-0.03em]" aria-label="Google">
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
    <section className="google-reviews-enter relative px-5 py-[80px] sm:px-6" aria-labelledby="google-testimonials-heading">
      <h2 id="google-testimonials-heading" className="sr-only">
        Google Reviews
      </h2>

      <div className="mx-auto w-full max-w-4xl">
        <header className="flex w-full items-center justify-center gap-2.5 whitespace-nowrap">
          <GoogleWordmark />
          <span className="text-[2.1rem] font-semibold leading-none text-[#161311]">5.0</span>
          <Stars count={5} />
          <span className="text-[1.05rem] font-medium text-[#6f6963]">(174)</span>
        </header>

        <div className="mt-6 flex justify-center">
          <a
            href={WRITE_REVIEW_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-[#1f66dc] bg-[#2f7af5] px-4 text-[0.95rem] font-semibold leading-none text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1f66dc]"
          >
            Write a Review
          </a>
        </div>

        <div className="relative mt-10" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <button
            type="button"
            onClick={() => goToIndex(activeIndex - 1)}
            aria-label="Show previous review"
            className="absolute left-0 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-[#2b2825] transition hover:bg-black/5 sm:-left-12"
          >
            ‹
          </button>

          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
            >
              {reviews.map((review) => (
                <article key={review.id} className="w-full shrink-0 px-10 sm:px-16">
                  <header className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h3 className="truncate text-[1.08rem] font-bold text-[#13110f]">{review.name}</h3>
                      {review.verified ? <VerifiedBadge /> : null}
                    </div>
                    <p className="mt-1 text-sm text-[#88827d]">{review.timeAgo}</p>
                  </header>

                  <div className="mt-4">
                    <Stars count={review.rating} />
                  </div>

                  <p className="mt-4 text-[1rem] leading-8 text-[#27221f]">{review.review}</p>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => goToIndex(activeIndex + 1)}
            aria-label="Show next review"
            className="absolute right-0 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-[#2b2825] transition hover:bg-black/5 sm:-right-12"
          >
            ›
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2" aria-label="Review pagination">
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
