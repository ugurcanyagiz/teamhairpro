import Image from "next/image";
import {
  BeigeButton,
  CenteredSection,
  ContactBanner,
  HeroImageSection,
  InstagramGrid,
  SectionLabel,
  SocialIconRow,
} from "@/components/home/design-system";
import { Navbar } from "@/components/home/navbar";

const galleryStrip = ["/ins1.png", "/ins2.png", "/ins3.png"];

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
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.8V3.1c-.9-.1-1.8-.2-2.7-.2-2.7 0-4.5 1.6-4.5 4.7v2.1H7v3.2h2.9V21h3.6Z" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com/teamhairpro",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
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
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden>
        <path d="M4 4l16 16M20 4 4 20" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-[#f7f6f4] text-[#222222]">
      <ContactBanner />
      <Navbar overlay />

      <main>
        <HeroImageSection />

        <CenteredSection className="border-b border-[rgba(0,0,0,0.08)]" label={<SectionLabel>SCHEDULE AN APPOINTMENT FOR A HAIRCUT, HAIR COLOR, NAILS AND FACIAL TREATMENTS</SectionLabel>}>
          <p className="mt-10 max-w-xl text-center text-[clamp(2rem,9vw,4.1rem)] font-light uppercase leading-[1.1] tracking-[0.16em] text-[#111111]">
            Call us for a free consultation
          </p>
          <BeigeButton href="#booking" className="mt-10">
            Book now
          </BeigeButton>
        </CenteredSection>

        <section className="grid grid-cols-1 gap-[1px] bg-[rgba(0,0,0,0.08)] sm:grid-cols-3">
          {galleryStrip.map((image, index) => (
            <div key={image} className="relative aspect-[4/3] bg-[#f7f6f4]">
              <Image src={image} alt={`Salon gallery image ${index + 1}`} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
            </div>
          ))}
        </section>

        <CenteredSection
          id="about"
          className="border-b border-[rgba(0,0,0,0.08)]"
          label={<SectionLabel>ABOUT TEAM HAIR PRO</SectionLabel>}
          heading={<>Specialists Who Care</>}
          description={
            <>
              We believe everyone is naturally beautiful and unique. Our salon team blends craft, care, and thoughtful consultation to
              enhance your natural beauty and help you feel your best every day.
            </>
          }
        >
          <form id="booking" className="mt-10 grid w-full max-w-3xl gap-3 text-left sm:grid-cols-2">
            <input type="text" placeholder="First Name" className="rounded-sm border border-[rgba(0,0,0,0.12)] bg-white px-4 py-3 text-sm outline-none focus:border-[#baa79a]" />
            <input type="text" placeholder="Last Name" className="rounded-sm border border-[rgba(0,0,0,0.12)] bg-white px-4 py-3 text-sm outline-none focus:border-[#baa79a]" />
            <input type="email" placeholder="Email" className="rounded-sm border border-[rgba(0,0,0,0.12)] bg-white px-4 py-3 text-sm outline-none focus:border-[#baa79a] sm:col-span-2" />
            <input type="tel" placeholder="Phone" className="rounded-sm border border-[rgba(0,0,0,0.12)] bg-white px-4 py-3 text-sm outline-none focus:border-[#baa79a] sm:col-span-2" />
            <button type="submit" className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-[#d7cabd] bg-[#dfd1c6] px-7 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#141414] sm:col-span-2">
              Request Appointment
            </button>
          </form>
        </CenteredSection>

        <section id="call" className="relative isolate overflow-hidden px-5 py-20 sm:px-6 sm:py-24">
          <Image src="/andy.png" alt="Relaxing spa texture" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            <h2 className="text-5xl font-semibold uppercase tracking-[0.1em] text-white sm:text-6xl">Call Us At</h2>
            <a href="tel:2012921919" className="mt-10 inline-flex rounded-md bg-[#efe3d8] px-10 py-4 text-xl font-semibold tracking-[0.16em] text-[#111111]">
              201 - 292 - 1919
            </a>
          </div>
        </section>

        <CenteredSection label={<SectionLabel>FOLLOW US</SectionLabel>}>
          <SocialIconRow links={socialLinks} />
        </CenteredSection>

        <CenteredSection id="instagram" className="pt-0" label={<SectionLabel>INSTAGRAM</SectionLabel>}>
          <InstagramGrid posts={instagramPosts} />
        </CenteredSection>
      </main>
    </div>
  );
}
