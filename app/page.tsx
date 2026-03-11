import Image from "next/image";
import {
  CenteredSection,
  ContactBanner,
  HeroImageSection,
  InstagramGrid,
  SectionLabel,
  SocialIconRow,
} from "@/components/home/design-system";
import { Navbar } from "@/components/home/navbar";

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
    <div id="home" className="min-h-screen bg-[#f5f2ee] text-[#201d1b]">
      <ContactBanner />
      <Navbar overlay />

      <main>
        <HeroImageSection />

        <CenteredSection id="about" className="border-b border-[rgba(0,0,0,0.08)] bg-[#f5f2ee]" label={<SectionLabel>ABOUT NULUX</SectionLabel>}>
          <div className="mt-10 w-full max-w-2xl space-y-14 text-center">
            <article>
              <h2 className="text-[clamp(1.7rem,2.6vw,2.35rem)] font-normal tracking-[0.02em] text-[#161311]">We are here for you</h2>
              <p className="mt-6 text-lg leading-8 text-[#4c4743]">
                Our team of talented and experienced stylists and technicians is here to deliver your ideal hair, skincare, and self-care routine. We provide an elevated one-stop experience designed to boost confidence and leave you feeling refreshed.
              </p>
            </article>
            <article className="border-t border-[rgba(0,0,0,0.09)] pt-12">
              <h3 className="text-[clamp(1.65rem,2.4vw,2.2rem)] font-normal tracking-[0.02em] text-[#161311]">Specialists Who Care</h3>
              <p className="mt-6 text-lg leading-8 text-[#4c4743]">
                We believe every guest is naturally beautiful and unique. Through personalized consultation and intentional artistry, we enhance your natural features and create looks that feel timeless, polished, and unmistakably yours.
              </p>
            </article>
          </div>
        </CenteredSection>

        <section id="call" className="relative isolate overflow-hidden px-5 py-22 sm:px-6 sm:py-24">
          <Image src="/andy.png" alt="Relaxing spa texture" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/48" />
          <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            <h2 className="text-4xl font-semibold uppercase tracking-[0.14em] text-white sm:text-5xl">Call Us At</h2>
            <a href="tel:2012921919" className="mt-8 inline-flex border border-[#decebf] bg-[#f1e4d8] px-10 py-3 text-lg font-semibold tracking-[0.2em] text-[#13100f]">
              201 · 292 · 1919
            </a>
          </div>
        </section>

        <CenteredSection className="border-b border-[rgba(0,0,0,0.08)]" label={<SectionLabel>FOLLOW US</SectionLabel>}>
          <SocialIconRow links={socialLinks} />

          <form className="mt-12 grid w-full max-w-5xl items-center gap-4 border border-[rgba(0,0,0,0.08)] bg-[#f7f4f0] p-4 sm:grid-cols-[auto_1fr_auto] sm:gap-3 sm:p-5">
            <label htmlFor="subscribe-email" className="text-3xl font-semibold uppercase tracking-[0.05em] text-[#191614]">
              Subscribe
            </label>
            <input
              id="subscribe-email"
              type="email"
              placeholder="Email"
              className="h-11 border border-[rgba(0,0,0,0.12)] bg-white px-4 text-sm outline-none focus:border-[#baa79a]"
            />
            <button type="submit" className="h-11 border border-[#d8cabf] bg-[#e8d8cb] px-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#141414] transition hover:bg-[#dfccbe]">
              Sign Up
            </button>
          </form>

          <div id="instagram" className="mt-14">
            <SectionLabel>INSTAGRAM</SectionLabel>
            <InstagramGrid posts={instagramPosts} />
          </div>
        </CenteredSection>
      </main>
    </div>
  );
}
