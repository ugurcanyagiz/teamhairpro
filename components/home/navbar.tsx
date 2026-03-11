"use client";

import Link from "next/link";
import { useState } from "react";

type NavbarProps = {
  overlay?: boolean;
};

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Call", href: "#call" },
  { label: "Instagram", href: "#instagram" },
];

export function Navbar({ overlay = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`z-40 w-full border-b border-[rgba(0,0,0,0.08)] bg-white/95 backdrop-blur ${overlay ? "sticky top-0" : ""}`}>
      <nav className="mx-auto grid w-full max-w-6xl grid-cols-[auto_1fr_auto] items-center px-4 py-5 sm:px-6" aria-label="Main navigation">
        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center text-[#181818] md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
            {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <Link href="#home" className="justify-self-center text-3xl font-semibold tracking-[0.14em] text-[#111111] sm:text-4xl">
          TEAMHAIRPRO
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm uppercase tracking-[0.18em] text-[#383431] transition hover:text-black">
              {item.label}
            </Link>
          ))}
        </div>

        <span className="h-10 w-10 md:hidden" />
      </nav>

      {isMenuOpen ? (
        <div id="mobile-menu" className="border-t border-[rgba(0,0,0,0.08)] bg-[#f7f6f4] px-5 py-5 md:hidden">
          <div className="flex flex-col items-center gap-4">
            {navigationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-[#272320]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#booking"
              onClick={() => setIsMenuOpen(false)}
              className="mt-1 inline-flex rounded-md border border-[#d7cabd] bg-[#dfd1c6] px-7 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#141414]"
            >
              Book Now
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
