"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Proof", href: "#proof" },
  { label: "Booking", href: "#booking" },
];

type NavbarProps = {
  overlay?: boolean;
};

export function Navbar({ overlay = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!overlay) return;

    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [overlay]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`top-0 z-50 transition-all duration-500 ${
        overlay
          ? `fixed inset-x-0 ${
              isScrolled
                ? "border-b border-[#e8d8c7]/40 bg-[rgba(36,30,25,0.45)] backdrop-blur-xl"
                : "bg-transparent"
            }`
          : "sticky border-b border-[#e9dfd4]/80 bg-[#fbf8f3]/90 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-8" aria-label="Main navigation">
        <Link
          href="#home"
          className={`text-[0.86rem] font-semibold tracking-[0.28em] transition ${overlay ? "text-[#fff8ef] hover:text-white" : "text-[#2f2924] hover:text-[#8d7156]"}`}
        >
          TEAMHAIRPRO
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base font-light tracking-[0.09em] transition ${overlay ? "text-[#f7efe4] hover:text-white" : "text-[#675b50] hover:text-[#2f2924]"}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#booking"
            className={`rounded-full border px-6 py-2.5 text-sm font-medium shadow-[0_10px_20px_rgba(20,14,10,0.22)] transition hover:-translate-y-0.5 ${
              overlay
                ? "border-[#f0dcc7]/80 bg-[#eed8c1]/18 text-[#fffaf4] backdrop-blur-md hover:bg-[#eed8c1]/30"
                : "border-[#c8b198] bg-[#b99a7b] text-[#fffaf4] hover:bg-[#aa8a6d]"
            }`}
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={`inline-flex items-center rounded-lg border p-2 text-sm transition md:hidden ${
            overlay
              ? "border-[#f1dfcc]/50 bg-[rgba(247,236,224,0.15)] text-[#fff9f2] hover:border-[#fff4e7]"
              : "border-[#d8cec2] bg-white/70 text-[#3a312b] hover:border-[#b99a7b]"
          }`}
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
        <div
          id="mobile-menu"
          className={`px-6 py-5 md:hidden ${
            overlay
              ? "border-t border-[#f0dfcb]/35 bg-[rgba(28,23,19,0.78)] backdrop-blur-2xl"
              : "border-t border-[#e8e0d6] bg-[#fcfaf7]"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navigationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`text-base tracking-[0.08em] transition ${overlay ? "text-[#f6ecdf] hover:text-white" : "text-[#6f6358] hover:text-[#2f2924]"}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#booking"
              onClick={closeMenu}
              className={`mt-2 inline-flex w-full items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                overlay
                  ? "border-[#f0dcc7]/70 bg-[#eed8c1]/18 text-[#fffaf4] hover:bg-[#eed8c1]/30"
                  : "border-[#c8b198] bg-[#b99a7b] text-[#fffaf4] hover:bg-[#aa8a6d]"
              }`}
            >
              Book Now
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
