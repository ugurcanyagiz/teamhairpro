"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = { label: string; href: string };

const leftLinks: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Salon Services", href: "#about" },
  { label: "Facial", href: "#call" },
  { label: "Gift Certificate", href: "#instagram" },
];

const rightLinks: NavItem[] = [
  { label: "Our Team", href: "#about" },
  { label: "Contact Us", href: "#call" },
  { label: "Our Policies", href: "#instagram" },
];

const mobileLinks = [...leftLinks, ...rightLinks.filter((link) => !leftLinks.some((left) => left.label === link.label))];

type NavbarProps = {
  overlay?: boolean;
};

const navLinkClass =
  "group relative inline-flex items-center pb-1 text-[0.76rem] font-medium uppercase tracking-[0.15em] text-[#2c2824] transition duration-300 hover:text-[#171311]";

export function Navbar({ overlay = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`z-40 w-full border-b border-[rgba(0,0,0,0.09)] bg-[#f7f2eb]/95 backdrop-blur ${overlay ? "sticky top-0" : ""}`}>
      <nav className="mx-auto hidden w-full max-w-[1320px] grid-cols-[1fr_auto_1fr] items-center gap-5 px-8 py-4 xl:grid" aria-label="Main navigation">
        <ul className="flex min-w-0 items-center gap-5 justify-self-start 2xl:gap-7">
          {leftLinks.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className={navLinkClass}>
                {item.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <Link href="#home" className="justify-self-center text-center leading-none text-[#151210]">
          <span className="block text-[2.3rem] font-semibold uppercase tracking-[0.14em]">TEAM HAIR PRO</span>
          <span className="mt-1 block text-[0.72rem] font-medium uppercase tracking-[0.34em] text-[#5a534d]">Salon &amp; Spa</span>
        </Link>

        <ul className="flex min-w-0 items-center justify-self-end gap-5 2xl:gap-7">
          {rightLinks.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className={navLinkClass}>
                {item.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="mx-auto flex w-full items-center justify-between px-4 py-4 sm:px-5 xl:hidden" aria-label="Mobile navigation">
        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(0,0,0,0.14)] text-[#181818] transition hover:bg-[rgba(255,255,255,0.35)]"
        >
          <span className="sr-only">Toggle menu</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <Link href="#home" className="text-center leading-none text-black">
          <span className="block text-[1.3rem] font-semibold uppercase tracking-[0.12em]">TEAM HAIR PRO</span>
          <span className="mt-1 block text-[0.58rem] font-medium uppercase tracking-[0.28em] text-[#58514c]">Salon &amp; Spa</span>
        </Link>

        <span className="h-10 w-10" />
      </nav>

      {isMenuOpen ? (
        <div id="mobile-menu" className="border-t border-[rgba(0,0,0,0.1)] bg-[#f7f2eb] px-5 py-5 xl:hidden">
          <div className="flex flex-col items-center gap-3.5">
            {mobileLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[0.78rem] font-medium uppercase tracking-[0.18em] text-[#272320] transition duration-300 hover:opacity-70"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
