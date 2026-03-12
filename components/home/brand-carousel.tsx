import Image from "next/image";

const logos = ["/1.svg", "/2.svg", "/3.svg", "/4.svg", "/5.svg", "/6.svg"];

export function BrandCarousel() {
  const loopedLogos = [...logos, ...logos];

  return (
    <section aria-label="Brand logos" className="bg-[#f5f2ee] px-5 py-12 sm:px-6 sm:py-14">
      <div className="mx-auto w-full max-w-7xl">
        <div className="brand-carousel group relative overflow-hidden">
          <div className="brand-carousel__edge brand-carousel__edge--left" aria-hidden />
          <div className="brand-carousel__edge brand-carousel__edge--right" aria-hidden />

          <ul className="brand-carousel__track flex w-max items-center gap-12 pr-12 group-hover:[animation-play-state:paused] sm:gap-16 sm:pr-16 lg:gap-20 lg:pr-20">
            {loopedLogos.map((logo, index) => (
              <li key={`${logo}-${index}`} className="flex h-12 shrink-0 items-center justify-center sm:h-14 lg:h-14">
                <Image
                  src={logo}
                  alt="Brand partner logo"
                  width={180}
                  height={56}
                  className="h-10 w-auto object-contain opacity-80 transition duration-300 ease-out hover:scale-[1.03] hover:opacity-100 sm:h-11 lg:h-12"
                  priority={index < logos.length}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
