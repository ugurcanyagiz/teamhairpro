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

      <div className="relative z-10 mx-auto grid w-full max-w-[1450px] gap-7 md:gap-9 lg:grid-cols-[minmax(0,1.18fr)_minmax(390px,0.7fr)] lg:items-center lg:gap-10 xl:gap-12">
        <div className="mx-auto max-w-[640px] text-center text-[#f9f5f1] md:mx-0 md:text-left xl:max-w-[780px]">
          <p className="inline-flex max-w-[min(100%,22rem)] justify-center rounded-full border border-[#d6b17a]/70 bg-black/18 px-4 py-2 text-center text-[0.58rem] font-bold uppercase leading-4 tracking-[0.24em] text-[#fff4e4] shadow-[0_12px_34px_rgba(0,0,0,0.24)] backdrop-blur-md md:max-w-none md:px-6 md:text-[0.68rem] md:tracking-[0.3em]">
            Premium Hair &amp; Beauty Experience
          </p>

          <h1 className="mt-5 leading-[0.9] tracking-[-0.055em] md:mt-7">
            <span className="block whitespace-nowrap text-[clamp(2.7rem,11.5vw,4.9rem)] font-black text-[#fffdf7] drop-shadow-[0_14px_34px_rgba(0,0,0,0.44)] [font-family:var(--font-league-spartan)] md:text-[clamp(4.2rem,6vw,5.6rem)] xl:text-[clamp(4.9rem,5vw,6.2rem)]">
              Signature Style.
            </span>
            <span className="mt-1 block whitespace-nowrap text-[clamp(2.75rem,12.2vw,5.1rem)] font-serif italic text-[#d9b474] drop-shadow-[0_12px_28px_rgba(0,0,0,0.42)] md:text-[clamp(4.3rem,6.2vw,5.85rem)] xl:text-[clamp(4.85rem,5.2vw,6.35rem)]">
              Elevated You.
            </span>
          </h1>

          <div className="mx-auto mt-6 h-px w-20 bg-[#ead8bb] md:mx-0 md:mt-7" />

          <p className="mx-auto mt-6 max-w-[34rem] text-base leading-7 tracking-[0.01em] text-[#fff6ec] drop-shadow-[0_8px_18px_rgba(0,0,0,0.42)] md:mx-0 md:text-lg md:leading-8">
            Expert styling, personalized care, and a seamless experience designed to bring out your best look.
          </p>

          <div className="mt-7 grid grid-cols-3 justify-center gap-1.5 md:mt-9 md:flex md:justify-start md:gap-0">
            {heroFeatureItems.map((item, index) => (
              <div
                key={item.label}
                className={`flex min-w-0 flex-col items-center gap-1.5 px-1 py-1 text-center md:flex-row md:gap-3 md:px-5 md:py-1.5 md:text-left ${index === 0 ? "md:pl-0" : "md:border-l md:border-white/24"}`}
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center md:h-10 md:w-10 rounded-full border border-[#d9b474]/70 bg-black/18 text-[#e6c283] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur">
                  {item.icon}
                </span>
                <span className="max-w-[4.8rem] text-[0.5rem] font-black uppercase leading-3 tracking-[0.13em] md:max-w-28 md:text-[0.68rem] md:leading-5 md:tracking-[0.2em] text-[#fff7ec]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <HeroBookingCard />

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
