import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-flex bg-[#0d0d0d] px-6 py-2 text-[0.72rem] font-medium uppercase tracking-[0.34em] text-white sm:px-8 sm:py-2.5">
      {children}
    </span>
  );
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
    <section id={id} className={`px-5 py-14 sm:px-6 sm:py-18 lg:py-24 ${className}`.trim()}>
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        {label ? <div>{label}</div> : null}
        {heading ? <h2 className="mt-7 text-3xl leading-tight tracking-[0.02em] text-[#111111] sm:text-4xl">{heading}</h2> : null}
        {description ? <p className="mt-5 max-w-3xl text-base leading-8 text-[#4c4c4c] sm:text-lg">{description}</p> : null}
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
      className={`inline-flex items-center justify-center rounded-md border border-[#d7cabd] bg-[#dfd1c6] px-9 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#141414] transition hover:bg-[#d6c4b7] ${className}`.trim()}
    >
      {children}
    </Link>
  );
}

export function ContactBanner() {
  return (
    <div className="bg-[#efebe6] px-4 py-3 text-center text-sm text-[#2c2926] sm:text-base">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center gap-3 sm:gap-5">
        <span aria-hidden className="text-lg text-[#49413a]">❦</span>
        <p className="max-w-3xl leading-relaxed tracking-[0.01em]">(201) 292-1919 · 106 River Drive S, Jersey City, NJ 07310</p>
        <span aria-hidden className="text-lg text-[#49413a]">❦</span>
      </div>
    </div>
  );
}

type SocialIconRowProps = {
  links: Array<{ href: string; label: string; icon: ReactNode }>;
};

export function SocialIconRow({ links }: SocialIconRowProps) {
  return (
    <div className="mt-10 flex items-center justify-center gap-8 sm:gap-10">
      {links.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.label}
          className="grid h-12 w-12 place-items-center rounded-full border border-[#d8d1ca] bg-[#f7f6f4] text-[#171717] transition hover:-translate-y-0.5 hover:bg-[#efebe6]"
        >
          {item.icon}
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
    <div className="mt-10 grid w-full grid-cols-2 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-3">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noreferrer"
          className="group relative overflow-hidden rounded-sm"
          aria-label={post.caption}
        >
          <div className="relative aspect-[3/4] w-full">
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
    <section className="relative h-[52vh] min-h-[330px] w-full overflow-hidden sm:h-[62vh] lg:h-[74vh]" aria-label="Salon hero image">
      <Image src="/andy.png" alt="Interior of Team Hair Pro salon" fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f7f6f4]/90" />
    </section>
  );
}
