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

const heroFeatureItems = [
  { label: "Expert Stylists", icon: <ScissorsIcon /> },
  { label: "Premium Products", icon: <BottleIcon /> },
  { label: "Easy Online Booking", icon: <CalendarCheckIcon /> },
];

const heroValueItems = [
  { title: "Beauty That Inspires", description: "Looks that highlight your natural beauty.", icon: <SparkleIcon /> },
  { title: "You’re in Good Hands", description: "Our team listens, cares, and delivers.", icon: <HeartIcon /> },
  { title: "Premium Experience", description: "From products to service, we do not compromise.", icon: <LeafIcon /> },
  { title: "Made For You", description: "Every appointment is personalized.", icon: <ClockIcon /> },
];

export function HeroImageSection() {
  return (
    <section
      className="relative isolate flex w-full items-start overflow-hidden bg-[#0f0c09] px-4 pb-7 pt-[7.9rem] sm:pb-8 md:min-h-[88vh] md:items-center md:px-6 md:pb-10 md:pt-[8.75rem] xl:min-h-[920px] xl:pt-[9.5rem]"
      aria-label="Salon hero image"
    >
      <Image src="/andy.png" alt="Interior of Team Hair Pro salon" fill priority sizes="100vw" className="object-cover object-[58%_center] md:object-center" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_63%_44%,rgba(221,179,116,0.18),transparent_24%),radial-gradient(circle_at_92%_37%,rgba(244,218,178,0.28),transparent_18%),linear-gradient(90deg,rgba(4,4,4,0.88)_0%,rgba(8,7,6,0.66)_38%,rgba(13,10,8,0.3)_64%,rgba(11,9,8,0.58)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_34%,rgba(0,0,0,0.34)_78%,rgba(0,0,0,0.68)_100%)]" />
      <div className="absolute left-0 top-0 h-full w-[58%] bg-[linear-gradient(90deg,rgba(0,0,0,0.54),rgba(0,0,0,0))]" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#c99b63]/18 blur-3xl md:h-96 md:w-96" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1450px] gap-7 md:gap-9 lg:grid-cols-[minmax(0,1.08fr)_minmax(390px,0.74fr)] lg:items-center lg:gap-12 xl:gap-16">
        <div className="mx-auto max-w-[640px] text-center text-[#f9f5f1] md:mx-0 md:text-left xl:max-w-[690px]">
          <p className="inline-flex max-w-[min(100%,22rem)] justify-center rounded-full border border-[#d6b17a]/70 bg-black/18 px-4 py-2 text-center text-[0.58rem] font-bold uppercase leading-4 tracking-[0.24em] text-[#fff4e4] shadow-[0_12px_34px_rgba(0,0,0,0.24)] backdrop-blur-md md:max-w-none md:px-6 md:text-[0.68rem] md:tracking-[0.3em]">
            Premium Hair &amp; Beauty Experience
          </p>

          <h1 className="mt-5 leading-[0.9] tracking-[-0.055em] md:mt-7">
            <span className="block text-[clamp(4.05rem,17vw,6.4rem)] font-black text-[#fffdf7] drop-shadow-[0_14px_34px_rgba(0,0,0,0.44)] [font-family:var(--font-league-spartan)] md:text-[clamp(5.4rem,9vw,8.5rem)] xl:text-[clamp(6.75rem,8vw,9.25rem)]">
              Great Hair.
            </span>
            <span className="mt-1 block text-[clamp(3.7rem,15.5vw,5.9rem)] font-serif italic text-[#d9b474] drop-shadow-[0_12px_28px_rgba(0,0,0,0.42)] md:text-[clamp(5rem,8.4vw,7.75rem)] xl:text-[clamp(6.1rem,7.5vw,8.4rem)]">
              Great You.
            </span>
          </h1>

          <div className="mx-auto mt-6 h-px w-20 bg-[#ead8bb] md:mx-0 md:mt-7" />

          <p className="mx-auto mt-6 max-w-[34rem] text-base leading-7 tracking-[0.01em] text-[#fff6ec] drop-shadow-[0_8px_18px_rgba(0,0,0,0.42)] md:mx-0 md:text-lg md:leading-8">
            Expert styling, personalized care, and a seamless experience designed to bring out your best look.
          </p>

          <Link
            href="#hero-booking"
            className="group mt-7 inline-flex h-15 items-center justify-center gap-5 rounded-full border border-[#f5ead8]/80 bg-[#eadcc8] px-9 text-[0.72rem] font-black uppercase tracking-[0.21em] text-[#16100b] shadow-[0_18px_40px_rgba(0,0,0,0.36)] transition duration-300 hover:-translate-y-1 hover:bg-[#f8efe2] hover:shadow-[0_24px_48px_rgba(0,0,0,0.46)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f8efe2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#15100c] md:mt-9 md:h-16 md:px-12"
          >
            Book Your Appointment
            <span className="grid h-8 w-8 place-items-center rounded-full border border-[#21170f]/20 transition duration-300 group-hover:translate-x-1 group-hover:border-[#21170f]/35" aria-hidden>
              <ArrowRightIcon />
            </span>
          </Link>

          <div className="mt-7 flex flex-wrap justify-center gap-3 md:mt-9 md:justify-start md:gap-0">
            {heroFeatureItems.map((item, index) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-2.5 py-1.5 text-left md:px-5 ${index === 0 ? "md:pl-0" : "md:border-l md:border-white/24"}`}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#d9b474]/70 bg-black/18 text-[#e6c283] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur">
                  {item.icon}
                </span>
                <span className="max-w-28 text-[0.68rem] font-black uppercase leading-5 tracking-[0.2em] text-[#fff7ec]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <HeroBookingCard />

        <div className="hero-value-strip lg:col-span-2">
          {heroValueItems.map((item) => (
            <article key={item.title} className="hero-value-card">
              <span className="hero-value-icon">{item.icon}</span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroBookingCard() {
  return (
    <aside
      id="hero-booking"
      className="hero-booking-card w-full justify-self-center overflow-hidden rounded-[2rem] border border-white/70 bg-[#fffaf4] text-[#211b17] shadow-[0_34px_90px_rgba(0,0,0,0.34),0_0_0_1px_rgba(207,171,119,0.2)] lg:justify-self-end"
      aria-label="Quick reservation panel"
    >
      <VagaroWidget />
    </aside>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function ScissorsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="6" cy="7" r="2.4" />
      <circle cx="6" cy="17" r="2.4" />
      <path d="M8.1 8.3 19 19" />
      <path d="M8.1 15.7 19 5" />
    </svg>
  );
}

function BottleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M10 3h4" />
      <path d="M11 3v4h2V3" />
      <path d="M8.5 10.2c0-1.2 1-2.2 2.2-2.2h2.6c1.2 0 2.2 1 2.2 2.2V20H8.5Z" />
      <path d="M10.2 13.2h3.6" />
      <path d="M10.2 16h3.6" />
    </svg>
  );
}

function CalendarCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M4 10h16" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2.8 13.8 9l6.2 1.9-6.2 1.9L12 19l-1.8-6.2L4 10.9 10.2 9Z" />
      <path d="M19 17v4" />
      <path d="M17 19h4" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20.8 8.7c0 5.4-8.8 10.1-8.8 10.1S3.2 14.1 3.2 8.7A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.8 2.3Z" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20.5 3.5C12 4 6.5 8.7 5 16.8c7.7.7 13.8-4.8 15.5-13.3Z" />
      <path d="M4 20c3.4-5.4 7.8-8.9 13-10.7" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}
