"use client";

import { useEffect, useRef, useState } from "react";

const AUTO_ADVANCE_MS = 7000;

type Review = {
  id: string;
  name: string;
  role: string;
  rating: number;
  timeAgo?: string;
  review: string;
};

const reviews: Review[] = [
  {
    id: "denise-yantin",
    name: "Denise Yantin",
    role: "Google Review",
    rating: 5,
    review:
      "I just got a cut and highlights from the wonderful owner and couldn’t be happier. Andy is very warm, professional, and humble given the fact that he has a stellar background in hair and is super talented in this area. I will definitely be returning, and not just for myself but for the kids too! Thank you Andy! 😊",
  },
  {
    id: "diana-nahim",
    name: "Diana Nahim",
    role: "Google Review",
    rating: 5,
    review:
      "It's a whole day affair for me to visit Erdinc. The commute from Brooklyn to Jersey on public transportation is no joke, but so worth it every time. Erdinc is a master of his craft, understands hair, SPEAKS to hair, and has an unmatched attention to detail and result. Go see him.",
  },
  {
    id: "deniz-akturk",
    name: "Deniz Akturk",
    role: "Google Review",
    rating: 5,
    review:
      "We’ve been going to Hair Pro as a family—my husband, my son, and I—and we are extremely happy every time. Not only is Andy an excellent choice for adults, but his friendly approach to my son and the way he cuts his hair with the same professionalism and precision as an adult truly means a lot to me. He is professional, friendly, and incredibly talented. I highly recommend him to everyone!",
  },
  {
    id: "canan-uslugel",
    name: "Canan Uslugel",
    role: "Google Review",
    rating: 5,
    review:
      "I came in with dull, uneven hair, and I left with the most beautiful transformation. The color is rich, shiny, and perfectly blended, and the haircut gave my hair so much shape and freshness. My hair looks healthier, smoother, and so much more vibrant than before. I’m really happy with the result amazing work!",
  },
  {
    id: "isik-surdum",
    name: "Isik Surdum",
    role: "Google Review",
    rating: 5,
    review:
      "The definition of a luxury hairstylist and experience. Andy is incredible and a magician with your hair, I completely trust his vision and expertise and he has blown me away every time with his talent. If you are looking for an expert level haircut, this is your place.",
  },
  {
    id: "leticia-oliveira",
    name: "Leticia Oliveira",
    role: "Google Review",
    rating: 5,
    review:
      "I had the best experience here! They’re amazing with cuts and blowouts, but I’m absolutely in love with my highlights. The customer service is outstanding, and Andy is the best, such a skilled professional and a truly nice person. Highly recommend!❤️",
  },
  {
    id: "gulhan-a",
    name: "Gulhan A.",
    role: "Google Review",
    rating: 5,
    review:
      "Andy is truly a gem! His attention to detail is unmatched, and he always takes the time to really listen to what I want. I leave his chair feeling confident and refreshed every single time. Trusting someone with your hair isn’t easy but with Andy, it’s a no-brainer!",
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
      {review.timeAgo ? (
        <>
          <span aria-hidden>•</span>
          <span>{review.timeAgo}</span>
        </>
      ) : null}
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
