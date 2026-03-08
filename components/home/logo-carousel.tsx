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
  { name: "L’OREAL PROFESSIONNEL" },
  { name: "ORIBE" },
];

export function LogoCarousel() {
  const marqueeBrands = [...trustedBrands, ...trustedBrands];

  return (
    <section
      aria-labelledby="trusted-brands-title"
      className="border-b border-[#e8dfd4] bg-[#f8f3ed] px-6 py-10 lg:px-8 lg:py-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#94755b]">
            Premium Product Partnerships
          </p>
          <h2
            id="trusted-brands-title"
            className="mt-3 text-base font-medium tracking-[0.02em] text-[#5f5247] sm:text-lg"
          >
            Crafted with trusted professional products
          </h2>
        </div>

        <div className="logo-carousel-mask group relative mt-7 overflow-hidden rounded-full border border-[#e8ddd1] bg-[#fdfaf6] px-2 py-2.5 shadow-[0_10px_24px_rgba(62,45,28,0.05)] sm:mt-8 sm:px-3">
          <ul
            className="logo-marquee-track flex w-max items-center gap-3 sm:gap-4 group-hover:[animation-play-state:paused]"
            aria-label="Trusted hair product brands"
          >
            {marqueeBrands.map((brand, index) => (
              <li
                key={`${brand.name}-${index}`}
                className="flex min-w-[160px] items-center justify-center rounded-full border border-[#ebe2d7] bg-[#fbf7f2] px-5 py-3 transition sm:min-w-[198px] sm:px-7"
              >
                {brand.logoSrc ? (
                  <Image
                    src={brand.logoSrc}
                    alt={brand.name}
                    width={132}
                    height={24}
                    className="h-5 w-auto opacity-60 grayscale transition duration-300 hover:opacity-80"
                  />
                ) : (
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#736659] opacity-65 transition duration-300 hover:opacity-90 sm:text-[0.72rem]">
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
