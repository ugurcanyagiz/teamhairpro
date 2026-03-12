import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

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
};

export function CenteredSection({ id, label, heading, description, children, className = "" }: CenteredSectionProps) {
  return (
    <section id={id} className={`px-5 py-18 sm:px-6 sm:py-24 lg:py-28 ${className}`.trim()}>
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
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
  return (
    <div className="border-b border-[rgba(55,45,34,0.12)] bg-[#d9cbbc] px-4 py-1.5 text-center sm:py-2">
      <p className="text-[0.68rem] font-medium tracking-[0.07em] text-[#1f1812] sm:text-[0.74rem]">
        (201) 927-1711 • 9 W Railroad Ave, Tenafly, NJ 07670
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

export function InstagramGrid({ posts }: { posts: InstagramPost[] }) {
  return (
    <div className="mt-11 grid w-full grid-cols-2 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-3">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noreferrer"
          className="group relative overflow-hidden rounded-2xl"
          aria-label={post.caption}
        >
          <div className="relative aspect-square w-full bg-[#eae4de]">
            <Image
              src={post.image}
              alt={post.caption}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 900px) 33vw, 25vw"
              className="object-cover transition duration-500 md:group-hover:scale-[1.045]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(16,14,12,0.34),rgba(16,14,12,0))] opacity-0 transition duration-300 group-hover:opacity-100" />
          </div>
        </Link>
      ))}
    </div>
  );
}

export function HeroImageSection() {
  return (
    <section className="relative flex min-h-[66vh] w-full items-center justify-center overflow-hidden px-5 py-16 text-center sm:min-h-[72vh] sm:py-20" aria-label="Salon hero image">
      <Image src="/andy.png" alt="Interior of Team Hair Pro salon" fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(12,10,9,0.48),rgba(12,10,9,0.34))]" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center rounded-[1.75rem] border border-[rgba(255,255,255,0.24)] bg-[rgba(20,16,13,0.46)] px-6 py-10 backdrop-blur-[2px] sm:px-10 sm:py-12">
        <SectionLabel>PREMIUM CONSULTATIONS FOR MODERN HAIR &amp; BEAUTY</SectionLabel>
        <h1 className="mt-6 text-[clamp(1.95rem,5vw,4.4rem)] font-medium uppercase leading-[1.06] tracking-[0.08em] text-[#f8f4ef] sm:max-w-3xl">
          TEAM HAIR PRO
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 tracking-[0.03em] text-[#ece5dd] sm:text-base sm:leading-8">
          Experience personalized hair artistry, expert care, and elevated styling tailored to your features, lifestyle, and vision.
        </p>
        <BeigeButton href="#call" className="mt-9">Book Now</BeigeButton>
      </div>
    </section>
  );
}
