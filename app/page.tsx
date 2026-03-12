import Image from "next/image";
import {
  CenteredSection,
  ContactBanner,
  HeroImageSection,
  InstagramShowcase,
  SectionLabel,
  SocialIconRow,
} from "@/components/home/design-system";
import { Navbar } from "@/components/home/navbar";
import { BrandCarousel } from "@/components/home/brand-carousel";

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

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.8V3.1c-.9-.1-1.8-.2-2.7-.2-2.7 0-4.5 1.6-4.5 4.7v2.1H7v3.2h2.9V21h3.6Z" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com/teamhairpro",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "https://x.com",
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden>
        <path d="M4 4l16 16M20 4 4 20" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-[#f5f2ee] text-[#201d1b] antialiased">
      <ContactBanner />
      <Navbar overlay />

      <main>
        <HeroImageSection />
        <BrandCarousel />

        <CenteredSection id="about" className="border-b border-[rgba(0,0,0,0.08)] bg-[#f5f2ee]" label={<SectionLabel>ABOUT TEAM HAIR PRO</SectionLabel>}>
          <div className="mt-12 w-full max-w-3xl space-y-16 text-center">
            <article>
              <h2 className="text-[clamp(1.85rem,2.6vw,2.5rem)] font-medium tracking-[0.03em] text-[#161311]">We are here for you</h2>
              <p className="mt-6 text-[1.02rem] leading-8 text-[#4f4944] sm:text-lg">
                Our team of talented and experienced stylists and technicians is here to deliver your ideal hair, skincare, and self-care routine. We provide an elevated one-stop experience designed to boost confidence and leave you feeling refreshed.
              </p>
            </article>
            <article className="border-t border-[rgba(0,0,0,0.09)] pt-14">
              <h3 className="text-[clamp(1.75rem,2.4vw,2.32rem)] font-medium tracking-[0.03em] text-[#161311]">Specialists Who Care</h3>
              <p className="mt-6 text-[1.02rem] leading-8 text-[#4f4944] sm:text-lg">
                We believe every guest is naturally beautiful and unique. Through personalized consultation and intentional artistry, we enhance your natural features and create looks that feel timeless, polished, and unmistakably yours.
              </p>
            </article>
          </div>
        </CenteredSection>

        <section id="call" className="relative isolate overflow-hidden px-5 py-22 sm:px-6 sm:py-28">
          <Image src="/callus.svg" alt="Call us section visual" fill sizes="100vw" className="object-cover" />
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
          label={<SectionLabel>FOLLOW US</SectionLabel>}
        >
          <SocialIconRow links={socialLinks} />

          <form className="mt-14 grid w-full max-w-5xl items-center gap-4 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-[#f7f4f0] p-4 sm:grid-cols-[auto_1fr_auto] sm:gap-3 sm:p-5">
            <label htmlFor="subscribe-email" className="text-3xl font-semibold uppercase tracking-[0.05em] text-[#191614]">
              Subscribe
            </label>
            <input
              id="subscribe-email"
              type="email"
              placeholder="Email"
              className="h-11 rounded-full border border-[rgba(0,0,0,0.12)] bg-white px-4 text-sm outline-none transition focus:border-[#9f8878]"
            />
            <button type="submit" className="h-11 rounded-full border border-[#201d1b] bg-[#201d1b] px-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#f4efe9] transition duration-300 hover:bg-[#12100f]">
              Sign Up
            </button>
          </form>

          <div id="instagram" className="mt-16 w-full">
            <SectionLabel>LATEST FROM INSTAGRAM</SectionLabel>
            <InstagramShowcase posts={instagramPosts} handle="teamhairpro" subtitle="Follow our latest work" />
          </div>
        </CenteredSection>
      </main>
    </div>
  );
}
