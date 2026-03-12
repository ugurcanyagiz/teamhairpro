"use client";

import { useEffect, useState } from "react";

type GoogleReview = {
  id: number;
  author: string;
  timeAgo: string;
  text: string;
};

const googleReviews: GoogleReview[] = [
  {
    id: 1,
    author: "hilal akbalık",
    timeAgo: "a month ago",
    text: "Great experience at Hair Pro. Andy and his team are professional, talented, and truly artistic — you can tell they care about the details. Highly recommend!",
  },
  {
    id: 2,
    author: "Ann Real",
    timeAgo: "8 months ago",
    text: "I've tried many hair salons in New York and New Jersey, but none of them could do my hair like Andy ...Professional, friendly, and incredibly efficient. I'm so grateful for the beautiful, natural blonde look you created with such ease and without making it feel like a chore. Definitely a big yes, yes, yes!",
  },
  {
    id: 3,
    author: "Cindy Garzon",
    timeAgo: "a month ago",
    text: "Khan is the best!! I absolutely loved my color, and the products he uses are amazing. I live in NY, but I went to NJ where he is because it's simply worth it. I couldn't be happier with the results!",
  },
  {
    id: 4,
    author: "canan uslugel",
    timeAgo: "3 months ago",
    text: "I came in with dull, uneven hair, and I left with the most beautiful transformation. The color is rich, shiny, and perfectly blended, and the haircut gave my hair so much shape and freshness. My hair looks healthier, smoother, and so much more vibrant than before. I'm really happy with the result amazing work!",
  },
];

const AUTOPLAY_MS = 4800;

export function ServicesSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % googleReviews.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      className="border-y border-[rgba(0,0,0,0.08)] bg-[linear-gradient(130deg,#f7f3ed_0%,#efe8df_48%,#f8f5f0_100%)] px-5 py-12 sm:px-6 sm:py-14"
      aria-labelledby="google-testimonials-heading"
    >
      <div className="mx-auto w-full max-w-5xl">
        <header className="text-center">
          <p className="text-[0.63rem] font-semibold uppercase tracking-[0.2em] text-[#6e6157]">Google Testimonials</p>
          <h2
            id="google-testimonials-heading"
            className="mt-3 text-[clamp(1.6rem,3.8vw,2.4rem)] font-medium leading-tight tracking-[0.03em] text-[#15110f]"
          >
            Guests love their Hair Pro experience
          </h2>
        </header>

        <div className="relative mt-8">
          <div className="overflow-hidden rounded-[2rem] border border-[rgba(17,17,17,0.1)] bg-[rgba(255,255,255,0.72)] shadow-[0_16px_50px_rgba(21,17,14,0.08)] backdrop-blur-[1.5px]">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {googleReviews.map((review) => (
                <article key={review.id} className="w-full shrink-0 px-6 py-8 text-left sm:px-10 sm:py-10">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[1rem] font-semibold text-[#171311] sm:text-[1.1rem]">{review.author}</p>
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#d8d2cc] bg-white/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#5f544b]">
                      <span className="text-[#f9b51e]">★★★★★</span>
                      Google
                    </span>
                  </div>

                  <p className="mt-2 text-[0.72rem] uppercase tracking-[0.15em] text-[#8a7b70]">{review.timeAgo}</p>
                  <p className="mt-5 text-[0.98rem] leading-8 text-[#3e3732] sm:text-[1.08rem]">“{review.text}”</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2.5" aria-label="Testimonials controls">
            {googleReviews.map((review, index) => (
              <button
                key={review.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full border border-[#9a8572]/40 transition ${
                  index === activeIndex ? "bg-[#5f4c3e]" : "bg-[#ece7e2] hover:bg-[#dfd6ce]"
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
