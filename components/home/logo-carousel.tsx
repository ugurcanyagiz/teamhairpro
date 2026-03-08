import Image from "next/image";

type TrustedBrand = {
  name: string;
  logoSrc: string;
};

const trustedBrands: TrustedBrand[] = [
  { name: "OLAPLEX", logoSrc: "/1.svg" },
  { name: "KERASTASE", logoSrc: "/2.svg" },
  { name: "REDKEN", logoSrc: "/3.svg" },
  { name: "MOROCCANOIL", logoSrc: "/4.svg" },
  { name: "DAVINES", logoSrc: "/5.svg" },
  { name: "WELLA", logoSrc: "/6.svg" },
];

export function LogoCarousel() {
  const marqueeBrands = [...trustedBrands, ...trustedBrands];

  return (
    <section aria-labelledby="trusted-brands-title" className="border-b border-[#e8dfd4] bg-[#f9f5ef] px-6 py-12 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#94755b]">Premium Brands We Love</p>
          <h2 id="trusted-brands-title" className="mt-3 text-base font-medium tracking-[0.02em] text-[#5f5247] sm:text-lg">
            Crafted with trusted professional products
          </h2>
        </div>

        <div className="logo-carousel-mask group relative mt-8 overflow-hidden rounded-full border border-[#e8ddd1] bg-[#fdfaf6] px-2 py-2.5 shadow-[0_10px_24px_rgba(62,45,28,0.05)] sm:px-3">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#fdfaf6] to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#fdfaf6] to-transparent sm:w-16" />

          <ul className="logo-marquee-track flex w-max items-center gap-3 sm:gap-4 group-hover:[animation-play-state:paused]" aria-label="Trusted hair product brands">
            {marqueeBrands.map((brand, index) => (
              <li
                key={`${brand.name}-${index}`}
                className="group/logo flex min-w-[160px] items-center justify-center rounded-full border border-[#ebe2d7] bg-[#fbf7f2] px-5 py-3 transition sm:min-w-[198px] sm:px-7"
              >
                <div className="flex h-8 items-end justify-center">
                  <Image
                    src={brand.logoSrc}
                    alt={brand.name}
                    width={160}
                    height={32}
                    className="h-8 w-auto object-contain opacity-70 grayscale transition duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
