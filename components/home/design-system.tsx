import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

import { VagaroWidget } from "./vagaro-widget";

type SectionLabelProps = {
  children: ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return <span className="inline-flex rounded-full border border-[rgba(26,22,19,0.16)] bg-[#f4efe9] px-5 py-2 text-[0.64rem] font-medium uppercase tracking-[0.3em] text-[#282320]">{children}</span>;
}

type CenteredSectionProps = {
  id?: string;
  label?: ReactNode;
  heading?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function CenteredSection({ id, label, heading, description, children, className = "", contentClassName = "max-w-6xl" }: CenteredSectionProps) {
  return (
    <section id={id} className={`px-5 py-18 sm:px-6 sm:py-24 lg:py-28 ${className}`.trim()}>
      <div className={`mx-auto flex w-full flex-col items-center text-center ${contentClassName}`.trim()}>
        {label ? <div>{label}</div> : null}
        {heading ? <h2 className="mt-8 text-3xl leading-tight tracking-[0.03em] text-[#111111] sm:text-4xl">{heading}</h2> : null}
        {description ? <p className="mt-6 max-w-3xl text-base leading-8 text-[#4f4944] sm:text-lg">{description}</p> : null}
        {children}
      </div>
    </section>
  );
}

type BeigeButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function BeigeButton({ href, children, className = "" }: BeigeButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full border border-[#201d1b] bg-[#201d1b] px-11 py-3.5 text-xs font-semibold uppercase tracking-[0.19em] text-[#f4efe9] shadow-[0_10px_24px_rgba(16,14,12,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#12100f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4efe9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f1a16] ${className}`.trim()}
    >
      {children}
    </Link>
  );
}

export function ContactBanner() {
  const address = "9 W Railroad Ave, Tenafly, NJ 07670";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="border-b border-[rgba(55,45,34,0.12)] bg-[#d9cbbc] px-4 py-1.5 text-center sm:py-2">
      <p className="text-[0.68rem] font-medium tracking-[0.07em] text-[#1f1812] sm:text-[0.74rem]">
        (201) 927-1711 •{" "}
        <Link
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-[rgba(31,24,18,0.45)] underline-offset-2 transition hover:decoration-[rgba(31,24,18,0.9)]"
          aria-label={`${address} on Google Maps`}
        >
          {address}
        </Link>
      </p>
    </div>
  );
}

type SocialIconRowProps = {
  links: Array<{ href: string; label: string; icon: ReactNode }>;
};

export function SocialIconRow({ links }: SocialIconRowProps) {
  return (
    <div className="mt-9 flex items-center justify-center gap-7 sm:gap-9">
      {links.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.label}
          className="text-[#181818] transition duration-300 hover:-translate-y-0.5 hover:opacity-70"
        >
          <span className="grid h-8 w-8 place-items-center">{item.icon}</span>
        </Link>
      ))}
    </div>
  );
}

type InstagramPost = {
  id: string;
  image: string;
  caption: string;
  permalink: string;
};

type InstagramShowcaseProps = {
  posts: InstagramPost[];
  handle?: string;
  subtitle?: string;
  profileImage?: string;
};

export function InstagramShowcase({
  posts,
  handle = "teamhairpro",
  subtitle = "Follow our latest work",
  profileImage = "/logo.svg",
}: InstagramShowcaseProps) {
  return (
    <article className="mt-10 w-full text-left sm:mt-12">
      <div className="flex flex-col gap-5 border-b border-[rgba(17,14,12,0.08)] pb-6 sm:gap-6 sm:pb-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="flex items-center gap-4">
            <span className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full border border-[rgba(21,18,16,0.1)] bg-white">
              {profileImage ? <Image src={profileImage} alt="Team Hair Pro Instagram avatar" fill sizes="48px" className="object-contain p-1.5" /> : "TH"}
            </span>
            <div>
              <p className="text-sm font-semibold tracking-[0.04em] text-[#14110f]">{handle}</p>
              <p className="mt-1 text-xs tracking-[0.06em] text-[#7a6f65]">{subtitle}</p>
            </div>
          </div>

          <Link
            href={`https://instagram.com/${handle.replace("@", "")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2.5 self-start rounded-full border border-[rgba(29,24,20,0.16)] bg-white px-6 text-[0.67rem] font-semibold uppercase tracking-[0.19em] text-[#1a1512] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(29,24,20,0.28)] hover:bg-[#faf8f5] sm:self-auto"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
            </svg>
            Follow on Instagram
          </Link>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3.5 sm:mt-8 sm:gap-4 md:grid-cols-3 lg:gap-5">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-[#f3ede7]"
            aria-label={post.caption}
          >
            <div className="relative aspect-[4/5] w-full bg-[#eae4de]">
              <Image
                src={post.image}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 420px"
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,12,10,0.32),rgba(14,12,10,0.06)_48%,rgba(14,12,10,0.02))] opacity-0 transition duration-300 group-hover:opacity-100" />
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}

export function HeroImageSection() {
  return (
    <section className="relative isolate flex min-h-[70vh] w-full items-center overflow-hidden px-5 py-16 sm:min-h-[75vh] sm:px-6 sm:py-20" aria-label="Salon hero image">
      <Image src="/andy.png" alt="Interior of Team Hair Pro salon" fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(11,10,9,0.7)_0%,rgba(11,10,9,0.56)_40%,rgba(11,10,9,0.24)_100%)]" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-14">
        <div className="max-w-xl text-left text-[#f9f5f1]">
          <p className="inline-flex rounded-full border border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.1)] px-4 py-1.5 text-[0.64rem] font-medium tracking-[0.28em] text-[#f6ede3]">
            PREMIUM HAIR &amp; BEAUTY EXPERIENCE
          </p>
          <h1 className="mt-6 text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.08] tracking-[0.03em] text-white">
            Effortless Booking, Elevated Beauty Care
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-7 tracking-[0.02em] text-[#ece4dc] sm:text-base sm:leading-8">
            Schedule your next salon experience with expert styling, personalized care, and a seamless reservation process designed around you.
          </p>
          <BeigeButton href="#call" className="mt-9 px-12 py-4 text-[0.68rem] tracking-[0.22em] shadow-[0_16px_35px_rgba(15,12,10,0.4)]">
            BOOK NOW
          </BeigeButton>
          <p className="mt-4 text-xs tracking-[0.08em] text-[#dfd1c2] sm:text-sm">Consultation-first appointments. Walk-ins welcome based on availability.</p>
        </div>

        <HeroBookingCard />
      </div>
    </section>
  );
}

function HeroBookingCard() {
  return (
    <aside
      className="hero-booking-card w-full max-w-xl justify-self-end rounded-[1.75rem] border border-[rgba(255,255,255,0.36)] bg-[rgba(251,247,243,0.96)] p-6 text-[#211b17] shadow-[0_28px_70px_rgba(0,0,0,0.24)] backdrop-blur-[1px] sm:p-7"
      aria-label="Quick reservation panel"
    >
      <div className="flex items-start justify-between gap-3 border-b border-[rgba(26,22,19,0.12)] pb-5">
        <div>
          <p className="text-[0.67rem] font-semibold uppercase tracking-[0.22em] text-[#7f6553]">Booking Assistant</p>
          <h2 className="mt-2 text-2xl font-medium tracking-[0.02em] text-[#181310]">Quick Reservation</h2>
        </div>
        <span className="rounded-full bg-[#efe2d4] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#705644]">Vagaro Ready</span>
      </div>

      <div className="mt-5 w-full">
        <VagaroWidget />
      </div>
    </aside>
  );
}
