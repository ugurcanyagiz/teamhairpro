"use client";

import Link from "next/link";
import { useState } from "react";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Proof", href: "#proof" },
  { label: "Booking", href: "#booking" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)]/80 bg-[var(--background)]/90 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Main navigation">
        <Link href="#home" className="text-sm font-semibold tracking-[0.24em] text-[var(--foreground)] transition hover:text-[var(--accent-gold)]">
          TEAMHAIRPRO
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--foreground)]">
              {item.label}
            </Link>
          ))}
          <Link
            href="#booking"
            className="rounded-full border border-[var(--accent-gold)] bg-[var(--accent-gold)] px-5 py-2 text-sm font-medium text-[var(--surface)] shadow-[0_8px_18px_rgba(17,17,17,0.16)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-gold-hover)]"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center rounded-lg border border-[var(--border)] bg-[var(--surface)]/80 p-2 text-[var(--foreground)] transition hover:border-[var(--accent-gold)] md:hidden"
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
        <div id="mobile-menu" className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navigationLinks.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMenu} className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--foreground)]">
                {item.label}
              </Link>
            ))}
            <Link
              href="#booking"
              onClick={closeMenu}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-[var(--accent-gold)] bg-[var(--accent-gold)] px-5 py-2 text-sm font-medium text-[var(--surface)] shadow-[0_8px_18px_rgba(17,17,17,0.14)] transition hover:bg-[var(--accent-gold-hover)]"
            >
              Book Now
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
