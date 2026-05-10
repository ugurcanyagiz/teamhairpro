"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string };

const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Stylists", href: "#about" },
  { label: "About", href: "#about" },
  { label: "Contact Us", href: "#call" },
];

const leftLinks = navLinks.slice(0, 3);
const rightLinks = navLinks.slice(3);
const mobileLinks = navLinks;

type NavbarProps = {
  overlay?: boolean;
};

const navLinkClass =
  "group relative inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2.5 text-[1rem] font-semibold uppercase tracking-[0.14em] text-[#211b17] transition duration-300 hover:-translate-y-0.5 hover:bg-[#efe7dc] hover:text-[#100d0b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b79a78] 2xl:px-5 2xl:text-[1.06rem]";

export function Navbar({ overlay = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const getNavHref = (href: string) => {
    if (!href.startsWith("#")) return href;
    return pathname === "/" ? href : `/${href}`;
  };

  return (
    <header className={`z-40 w-full border-b border-[rgba(40,30,20,0.1)] bg-[#f9f7f3]/95 shadow-[0_12px_35px_rgba(32,24,18,0.06)] backdrop-blur ${overlay ? "sticky top-0" : ""}`}>
      <nav className="mx-auto hidden w-full max-w-[1450px] grid-cols-[1fr_auto_1fr] items-center gap-7 px-8 py-4 xl:grid 2xl:gap-10 2xl:px-10" aria-label="Main navigation">
        <ul className="flex min-w-0 items-center justify-self-start rounded-full border border-[rgba(46,35,25,0.12)] bg-white/45 px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] 2xl:px-4">
          {leftLinks.map((item) => (
            <li key={item.label}>
              <Link href={getNavHref(item.href)} className={navLinkClass}>
                {item.label}
                <span className="absolute inset-x-4 bottom-1.5 h-px origin-center scale-x-0 bg-[#b28c62] transition duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/" className="flex items-center justify-center justify-self-center rounded-[2rem] border border-[rgba(46,35,25,0.1)] bg-white/55 px-8 py-3 shadow-[0_16px_38px_rgba(31,23,16,0.08)]" aria-label="Team Hair Pro home">
          <Image src="/logo.svg" alt="Team Hair Pro" width={292} height={88} priority className="h-auto w-[255px] 2xl:w-[292px]" />
        </Link>

        <ul className="flex min-w-0 items-center justify-self-end rounded-full border border-[rgba(46,35,25,0.12)] bg-white/45 px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] 2xl:px-4">
          {rightLinks.map((item) => (
            <li key={item.label}>
              <Link href={getNavHref(item.href)} className={navLinkClass}>
                {item.label}
                <span className="absolute inset-x-4 bottom-1.5 h-px origin-center scale-x-0 bg-[#b28c62] transition duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="mx-auto flex w-full items-center justify-between px-4 py-3.5 sm:px-5 xl:hidden" aria-label="Mobile navigation">
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

        <Link href="/" className="flex items-center justify-center" aria-label="Team Hair Pro home">
          <Image src="/logo.svg" alt="Team Hair Pro" width={210} height={64} priority className="h-auto w-[165px] sm:w-[190px]" />
        </Link>

        <span className="h-10 w-10" />
      </nav>

      {isMenuOpen ? (
        <div id="mobile-menu" className="border-t border-[rgba(0,0,0,0.1)] bg-[#f9f7f3] px-5 py-5 xl:hidden">
          <div className="flex flex-col items-center gap-3.5">
            {mobileLinks.map((item) => (
              <Link
                key={item.label}
                href={getNavHref(item.href)}
                onClick={() => setIsMenuOpen(false)}
                className="w-full rounded-full border border-[rgba(46,35,25,0.1)] bg-white/55 px-5 py-3 text-center text-[1rem] font-semibold uppercase tracking-[0.14em] text-[#211b17] transition duration-300 hover:-translate-y-0.5 hover:bg-[#efe7dc]"
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
