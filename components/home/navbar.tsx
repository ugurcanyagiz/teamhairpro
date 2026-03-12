"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string };

const leftLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Salon Services", href: "/services" },
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
  "group relative inline-flex items-center pb-1 text-[0.74rem] font-medium uppercase tracking-[0.16em] text-[#2b2622] transition duration-300 hover:text-[#12100f]";

export function Navbar({ overlay = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const getNavHref = (href: string) => {
    if (!href.startsWith("#")) return href;
    return pathname === "/" ? href : `/${href}`;
  };

  return (
    <header className={`z-40 w-full border-b border-[rgba(40,30,20,0.12)] bg-[#f9f7f3]/95 backdrop-blur ${overlay ? "sticky top-0" : ""}`}>
      <nav className="mx-auto hidden w-full max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center gap-8 px-10 py-5 xl:grid" aria-label="Main navigation">
        <ul className="flex min-w-0 items-center gap-7 justify-self-start 2xl:gap-8">
          {leftLinks.map((item) => (
            <li key={item.label}>
              <Link href={getNavHref(item.href)} className={navLinkClass}>
                {item.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/" className="flex items-center justify-center justify-self-center" aria-label="Team Hair Pro home">
          <Image src="/logo.svg" alt="Team Hair Pro" width={292} height={88} priority className="h-auto w-[250px] 2xl:w-[292px]" />
        </Link>

        <ul className="flex min-w-0 items-center justify-self-end gap-7 2xl:gap-8">
          {rightLinks.map((item) => (
            <li key={item.label}>
              <Link href={getNavHref(item.href)} className={navLinkClass}>
                {item.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition duration-300 group-hover:scale-x-100" />
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
