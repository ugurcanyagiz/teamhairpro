"use client";

import Link from "next/link";
import { useState } from "react";

const navigationLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Experience", href: "#experience" },
  { label: "Stylists", href: "#stylists" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e0d6]/80 bg-[#f8f4ee]/90 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Main navigation">
        <Link href="#home" className="text-sm font-semibold tracking-[0.24em] text-[#2f2924] transition hover:text-[#8d7156]">
          TEAMHAIRPRO
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-[#6f6358] transition hover:text-[#2f2924]">
              {item.label}
            </Link>
          ))}
          <Link
            href="#booking"
            className="rounded-full border border-[#c8b198] bg-[#b99a7b] px-5 py-2 text-sm font-medium text-[#fffaf4] shadow-[0_8px_18px_rgba(149,112,78,0.2)] transition hover:-translate-y-0.5 hover:bg-[#aa8a6d]"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center rounded-lg border border-[#d8cec2] bg-white/70 p-2 text-[#3a312b] transition hover:border-[#b99a7b] md:hidden"
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
        <div id="mobile-menu" className="border-t border-[#e8e0d6] bg-[#fcfaf7] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navigationLinks.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMenu} className="text-sm text-[#6f6358] transition hover:text-[#2f2924]">
                {item.label}
              </Link>
            ))}
            <Link
              href="#booking"
              onClick={closeMenu}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-[#c8b198] bg-[#b99a7b] px-5 py-2 text-sm font-medium text-[#fffaf4] shadow-[0_8px_18px_rgba(149,112,78,0.18)] transition hover:bg-[#aa8a6d]"
            >
              Book Now
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
