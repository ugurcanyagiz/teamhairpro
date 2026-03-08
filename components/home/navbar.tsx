"use client";

import Link from "next/link";
import { useState } from "react";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Stylists", href: "#stylists" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#12110f]/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="#home"
          className="text-sm font-semibold tracking-[0.28em] text-[#f2e8d8] transition hover:text-white"
        >
          TEAMHAIRPRO
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#dfd4c3] transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#booking"
            className="rounded-full border border-[#d8b37a]/70 bg-[#d8b37a] px-5 py-2 text-sm font-medium text-[#1f1a14] transition hover:bg-[#e6c38e]"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center rounded-md border border-white/20 p-2 text-[#f2e8d8] transition hover:border-[#d8b37a]/70 hover:text-white md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {isMenuOpen ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-[#12110f]/95 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navigationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-sm text-[#dfd4c3] transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#booking"
              onClick={closeMenu}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-[#d8b37a]/70 bg-[#d8b37a] px-5 py-2 text-sm font-medium text-[#1f1a14] transition hover:bg-[#e6c38e]"
            >
              Book Now
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
