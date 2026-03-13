const WRITE_REVIEW_URL = "https://google.com"; // TODO: Replace with the Team Hair Pro Google review URL.

type Review = {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  timeAgo: string;
  review: string;
  verified?: boolean;
  source: "Google";
};

const reviews: Review[] = [
  {
    id: "hilal-akbalik",
    name: "Hilal Akbalik",
    avatar: "H",
    rating: 5,
    timeAgo: "1 month ago",
    review:
      "Great experience at Hair Pro. Andy and his team are thoughtful, professional, and incredibly talented. My color looks dimensional, my cut sits perfectly, and the finish lasted beautifully all week.",
    verified: true,
    source: "Google",
  },
  {
    id: "cindy-garzon",
    name: "Cindy Garzon",
    avatar: "C",
    rating: 5,
    timeAgo: "1 month ago",
    review:
      "Khan is the best. He listened to everything I asked for and elevated the final look. The salon feels calm and luxurious, and the entire team is warm, attentive, and consistent every time.",
    verified: true,
    source: "Google",
  },
  {
    id: "simge-cicek",
    name: "Simge Cicek",
    avatar: "S",
    rating: 5,
    timeAgo: "2 months ago",
    review:
      "I am in love with my hairstyle. The artistry is amazing and the results still look fresh weeks later. Team Hair Pro truly understands texture, shape, and how to create a polished luxury look.",
    verified: true,
    source: "Google",
  },
  {
    id: "emily-tepper",
    name: "Emily Tepper",
    avatar: "E",
    rating: 5,
    timeAgo: "3 weeks ago",
    review:
      "From consultation to blowout, everything was exceptional. The tone match and precision cut were exactly what I wanted, and the attention to detail made the whole appointment feel elevated.",
    verified: true,
    source: "Google",
  },
  {
    id: "nora-vasquez",
    name: "Nora Vasquez",
    avatar: "N",
    rating: 5,
    timeAgo: "3 months ago",
    review:
      "I have finally found my salon. The team is punctual, skilled, and consistent, and my hair has never felt healthier. Beautiful atmosphere, excellent service, and stunning color work.",
    verified: true,
    source: "Google",
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

function GoogleBadge() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[rgba(0,0,0,0.08)] bg-white text-xs font-semibold text-[#4285F4] shadow-[0_4px_10px_rgba(0,0,0,0.06)]">
      G
    </span>
  );
}

export function ServicesSpotlight() {
  return (
    <section
      className="google-reviews-enter relative overflow-hidden border-y border-[rgba(17,17,17,0.08)] bg-white px-5 py-18 sm:px-6 sm:py-24 lg:py-28"
      aria-labelledby="google-testimonials-heading"
    >
      <h2 id="google-testimonials-heading" className="sr-only">Google Reviews</h2>
      <div className="relative mx-auto w-full max-w-[76rem] rounded-[2rem] border border-[rgba(17,17,17,0.07)] bg-[#f8f8f6] px-4 py-5 shadow-[0_26px_70px_rgba(17,17,17,0.08)] sm:px-7 sm:py-7 lg:rounded-[2.2rem] lg:px-9 lg:py-8">
        <header className="flex flex-col items-center justify-between gap-5 rounded-[1.4rem] border border-[rgba(17,17,17,0.06)] bg-[#f3f3f1] px-5 py-4 sm:flex-row sm:px-7">
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

        <div className="mt-5 overflow-x-auto pb-3">
          <div className="grid min-w-max snap-x snap-mandatory grid-flow-col auto-cols-[minmax(17.2rem,1fr)] gap-4 sm:auto-cols-[minmax(19rem,1fr)] lg:min-w-0 lg:grid-flow-row lg:grid-cols-4">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="group snap-start rounded-[1.1rem] border border-[rgba(17,17,17,0.08)] bg-[#efefed] p-4 shadow-[0_10px_24px_rgba(16,16,16,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(16,16,16,0.1)]"
              >
                <header className="flex items-start gap-3">
                  <div className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(140deg,#d5d4d0,#b0b0ac)] text-sm font-semibold text-[#26221f]">
                    {review.avatar}
                    <span className="absolute -bottom-0.5 -right-0.5">
                      <GoogleBadge />
                    </span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h3 className="truncate text-[1.02rem] font-semibold text-[#13110f]">{review.name}</h3>
                      {review.verified ? <VerifiedBadge /> : null}
                    </div>
                    <p className="mt-0.5 text-sm text-[#79736d]">{review.timeAgo}</p>
                  </div>
                </header>

                <div className="mt-3 flex items-center justify-between">
                  <Stars count={review.rating} />
                  <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#7e7873]">{review.source}</span>
                </div>

                <p className="mt-3 text-[1rem] leading-7 text-[#27221f]">{review.review}</p>
                <span className="mt-1 inline-flex text-[0.94rem] font-medium text-[#1a73e8]">Read more</span>

              </article>
            ))}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-center gap-2" aria-hidden>
          {[0, 1, 2, 3].map((dot) => (
            <span key={dot} className={`h-1.5 rounded-full ${dot === 0 ? "w-5 bg-[#2f2c29]" : "w-1.5 bg-[#b6b0aa]"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
