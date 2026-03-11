import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return <span className="inline-flex bg-black px-5 py-2 text-[0.68rem] font-medium uppercase tracking-[0.34em] text-white">{children}</span>;
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
    <section id={id} className={`px-5 py-16 sm:px-6 sm:py-20 lg:py-24 ${className}`.trim()}>
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {label ? <div>{label}</div> : null}
        {heading ? <h2 className="mt-8 text-3xl leading-tight tracking-[0.02em] text-[#111111] sm:text-4xl">{heading}</h2> : null}
        {description ? <p className="mt-5 max-w-3xl text-base leading-8 text-[#494542] sm:text-lg">{description}</p> : null}
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
      className={`inline-flex items-center justify-center border border-[#d8cabf] bg-[#e8d8cb] px-10 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#171412] transition hover:bg-[#dfccbe] ${className}`.trim()}
    >
      {children}
    </Link>
  );
}

export function ContactBanner() {
  return (
    <div className="border-y border-[rgba(0,0,0,0.08)] bg-[#e8ddd2] px-4 py-2.5 text-center">
      <p className="text-[0.7rem] uppercase tracking-[0.17em] text-[#2d2823] sm:text-[0.78rem]">
        ❦ (201) 292-1919 · 106 River Drive S, Jersey City, NJ 07310 ❦
      </p>
    </div>
  );
}

type SocialIconRowProps = {
  links: Array<{ href: string; label: string; icon: ReactNode }>;
};

export function SocialIconRow({ links }: SocialIconRowProps) {
  return (
    <div className="mt-8 flex items-center justify-center gap-7 sm:gap-9">
      {links.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.label}
          className="text-[#181818] transition hover:opacity-65"
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
    <div className="mt-10 grid w-full grid-cols-2 gap-2.5 sm:mt-12 sm:gap-3 md:grid-cols-3">
      {posts.map((post) => (
        <Link key={post.id} href={post.permalink} target="_blank" rel="noreferrer" className="group relative overflow-hidden" aria-label={post.caption}>
          <div className="relative aspect-square w-full bg-[#eae4de]">
            <Image
              src={post.image}
              alt={post.caption}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 900px) 33vw, 25vw"
              className="object-cover transition duration-500 md:group-hover:scale-105"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

export function HeroImageSection() {
  return (
    <section className="relative flex min-h-[66vh] w-full items-center justify-center overflow-hidden px-5 py-16 text-center sm:min-h-[72vh]" aria-label="Salon hero image">
      <Image src="/andy.png" alt="Interior of Team Hair Pro salon" fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
        <SectionLabel>SCHEDULE AN APPOINTMENT FOR HAIR, NAILS AND FACIAL TREATMENTS</SectionLabel>
        <h1 className="mt-5 inline-block bg-[#f5f2ee] px-5 py-4 text-[clamp(1.85rem,5.4vw,5rem)] font-light uppercase leading-[1.1] tracking-[0.1em] text-[#111111] sm:px-8 sm:py-5">
          Call us for a free consultation
        </h1>
        <BeigeButton href="#call" className="mt-7">Book now</BeigeButton>
      </div>
    </section>
  );
}
