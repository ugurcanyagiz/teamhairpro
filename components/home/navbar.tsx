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

export function Navbar({ overlay = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`z-40 w-full border-b border-[rgba(0,0,0,0.1)] bg-[#f8f6f2]/95 backdrop-blur ${overlay ? "sticky top-0" : ""}`}>
      <nav className="mx-auto hidden w-full max-w-[1300px] grid-cols-[1fr_auto_1fr] items-center gap-8 px-8 py-5 lg:grid" aria-label="Main navigation">
        <ul className="flex items-center gap-9 justify-self-start">
          {leftLinks.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="text-[0.9rem] uppercase tracking-[0.14em] text-[#2a2724] transition hover:text-black">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="#home" className="justify-self-center text-[3.2rem] font-semibold uppercase tracking-[0.12em] text-black leading-none">
          Nulux
          <span className="mt-1 block text-center text-[1.2rem] font-normal tracking-[0.12em]">Salon &amp; Spa</span>
        </Link>

        <ul className="flex items-center justify-self-end gap-9">
          {rightLinks.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="text-[0.9rem] uppercase tracking-[0.14em] text-[#2a2724] transition hover:text-black">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="mx-auto flex w-full items-center justify-between px-4 py-4 lg:hidden" aria-label="Mobile navigation">
        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center text-[#181818]"
        >
          <span className="sr-only">Toggle menu</span>
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
            {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <Link href="#home" className="text-center text-3xl font-semibold uppercase tracking-[0.12em] text-black leading-none">
          Nulux
          <span className="mt-0.5 block text-[0.85rem] font-normal tracking-[0.11em]">Salon &amp; Spa</span>
        </Link>

        <span className="h-10 w-10" />
      </nav>

      {isMenuOpen ? (
        <div id="mobile-menu" className="border-t border-[rgba(0,0,0,0.1)] bg-[#f8f6f2] px-5 py-5 lg:hidden">
          <div className="flex flex-col items-center gap-3">
            {mobileLinks.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-sm uppercase tracking-[0.16em] text-[#272320]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
