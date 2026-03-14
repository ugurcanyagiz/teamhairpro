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

export function ServicesSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const featuredReview = reviews[activeIndex];
  const supportingReviews = reviews.filter((review) => review.id !== featuredReview.id).slice(0, 3);

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
    <section ref={sectionRef} className="testimonial-composition relative isolate overflow-hidden bg-[#fcfbf9] px-5 py-[84px] sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute -left-20 top-8 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(195,151,91,0.2),rgba(252,251,249,0))] blur-2xl" aria-hidden />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(66,51,35,0.12),rgba(252,251,249,0))] blur-3xl" aria-hidden />

      <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.85fr] lg:items-end">
        <article
          className={`group rounded-[2rem] border border-white/70 bg-white/95 p-7 shadow-[0_40px_85px_rgba(48,32,18,0.12),0_1px_0_rgba(255,255,255,0.85)_inset] backdrop-blur-sm transition duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-10 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <ReviewMeta review={featuredReview} />
            <Stars count={featuredReview.rating} />
          </div>

          <p className="mt-8 text-[1.34rem] leading-[1.75] tracking-[0.01em] text-[#1f1a16] sm:text-[1.5rem]">
            “{featuredReview.review}”
          </p>

          <footer className="mt-10 flex items-center justify-between gap-3 border-t border-[#f0ebe6] pt-6">
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {supportingReviews.map((review, index) => (
            <article
              key={review.id}
              className={`testimonial-support-card rounded-[1.35rem] border border-white/75 bg-white/90 p-5 shadow-[0_20px_50px_rgba(38,25,14,0.09),0_1px_0_rgba(255,255,255,0.8)_inset] backdrop-blur-sm transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 120 + 100}ms` }}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-[0.83rem] tracking-[0.08em] text-[#7a726b] uppercase">{review.timeAgo}</p>
                <Stars count={review.rating} />
              </div>
              <p className="mt-4 line-clamp-4 text-[0.98rem] leading-7 text-[#302924]">“{review.review}”</p>
              <p className="mt-4 text-[0.95rem] font-medium text-[#171311]">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
