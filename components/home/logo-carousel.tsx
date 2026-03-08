import Image from "next/image";

type TrustedBrand = {
  name: string;
  logoSrc?: string;
};

const trustedBrands: TrustedBrand[] = [
  { name: "OLAPLEX" },
  { name: "KERASTASE" },
  { name: "REDKEN" },
  { name: "MOROCCANOIL" },
  { name: "DAVINES" },
  { name: "WELLA" },
  { name: "ORIBE" },
  { name: "L’OREAL PROFESSIONNEL" },
];

export function LogoCarousel() {
  const marqueeBrands = [...trustedBrands, ...trustedBrands];

  return (
    <section aria-labelledby="trusted-brands-title" className="border-b border-[var(--border)] bg-[var(--background)] px-6 py-12 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[var(--accent-gold)]">Premium Brands We Love</p>
          <h2 id="trusted-brands-title" className="mt-3 text-base font-medium tracking-[0.02em] text-[var(--text-secondary)] sm:text-lg">
            Crafted with trusted professional products
          </h2>
        </div>

        <div className="logo-carousel-mask group relative mt-8 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface)] px-2 py-2.5 shadow-[0_10px_24px_rgba(17,17,17,0.08)] sm:px-3">
          <ul className="logo-marquee-track flex w-max items-center gap-3 sm:gap-4 group-hover:[animation-play-state:paused]" aria-label="Trusted hair product brands">
            {marqueeBrands.map((brand, index) => (
              <li
                key={`${brand.name}-${index}`}
                className="flex min-w-[160px] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 transition sm:min-w-[198px] sm:px-7"
              >
                {brand.logoSrc ? (
                  <Image
                    src={brand.logoSrc}
                    alt={brand.name}
                    width={132}
                    height={24}
                    className="h-5 w-auto opacity-60 grayscale transition duration-300 hover:opacity-90"
                  />
                ) : (
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--text-secondary)] opacity-60 transition duration-300 hover:opacity-95 sm:text-[0.72rem]">
                    {brand.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
