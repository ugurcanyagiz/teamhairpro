import Image from "next/image";
import {
  CenteredSection,
  ContactBanner,
  HeroImageSection,
  InstagramShowcase,
  SectionLabel,
} from "@/components/home/design-system";
import { Navbar } from "@/components/home/navbar";
import { BrandCarousel } from "@/components/home/brand-carousel";
import { ServicesSpotlight } from "@/components/home/services-spotlight";

const instagramPosts = [
  {
    id: "1",
    image: "/ins1.png",
    caption: "Soft dimensional color with a polished, natural finish.",
    permalink: "https://instagram.com/teamhairpro",
  },
  {
    id: "2",
    image: "/ins2.png",
    caption: "Refined styling designed for movement, shine, and balance.",
    permalink: "https://instagram.com/teamhairpro",
  },
  {
    id: "3",
    image: "/ins3.png",
    caption: "Bridal-ready texture with elegant detail and softness.",
    permalink: "https://instagram.com/teamhairpro",
  },
  {
    id: "4",
    image: "/ins4.png",
    caption: "Healthy-hair-focused care with a luminous result.",
    permalink: "https://instagram.com/teamhairpro",
  },
  {
    id: "5",
    image: "/ins5.png",
    caption: "A transformation tailored to facial harmony and tone.",
    permalink: "https://instagram.com/teamhairpro",
  },
  {
    id: "6",
    image: "/ins6.png",
    caption: "Premium finishing work for a smooth and elevated look.",
    permalink: "https://instagram.com/teamhairpro",
  },
];

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-[#fbfbfd] text-[#201d1b] antialiased">
      <ContactBanner />
      <Navbar overlay />

      <main>
        <HeroImageSection />
        <BrandCarousel />
        <ServicesSpotlight />

        <section id="call" className="relative isolate overflow-hidden px-5 py-22 sm:px-6 sm:py-28">
          <div className="callus-mobile-strip absolute inset-0 sm:hidden" aria-hidden>
            <div className="callus-mobile-strip__track">
              <div className="relative h-full w-full shrink-0">
                <Image src="/callus.svg" alt="" fill sizes="100vw" className="object-cover" />
              </div>
              <div className="relative h-full w-full shrink-0">
                <Image src="/callus.svg" alt="" fill sizes="100vw" className="object-cover" />
              </div>
            </div>
          </div>
          <Image src="/callus.svg" alt="Call us section visual" fill sizes="100vw" className="hidden object-cover sm:block" />
          <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            <h2 className="inline-flex rounded-full border border-white bg-white px-11 py-3.5 text-3xl font-semibold uppercase tracking-[0.14em] text-[#101010] [font-family:var(--font-league-spartan)] sm:text-4xl">
              Call Us
            </h2>
            <a href="tel:2019271711" className="mt-8 inline-flex rounded-full border border-white bg-white px-10 py-3.5 text-lg font-semibold tracking-[0.18em] text-[#111111] shadow-[0_14px_34px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f7f7f7] [font-family:var(--font-league-spartan)]">
              201 · 927 · 1711
            </a>
          </div>
        </section>

        <CenteredSection
          className="border-b border-[rgba(0,0,0,0.08)] bg-white"
          contentClassName="max-w-[86rem]"
          label={<SectionLabel>ABOUT TEAM HAIR PRO</SectionLabel>}
        >
          <article className="mt-12 w-full max-w-3xl text-center">
            <h2 className="text-[clamp(1.85rem,2.6vw,2.5rem)] font-medium tracking-[0.03em] text-[#161311]">We are here for you</h2>
            <p className="mt-6 text-[1.02rem] leading-8 text-[#4f4944] sm:text-lg">
              Our team of talented and experienced stylists and technicians is here to deliver your ideal hair, skincare, and self-care routine. We provide an elevated one-stop experience designed to boost confidence and leave you feeling refreshed.
            </p>
          </article>

          <div id="instagram" className="mt-16 w-full">
            <SectionLabel>LATEST FROM INSTAGRAM</SectionLabel>
            <InstagramShowcase posts={instagramPosts} handle="teamhairpro" subtitle="Follow our latest work" />
          </div>
        </CenteredSection>
      </main>
    </div>
  );
}
