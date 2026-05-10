"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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

const baseNavLinkClass =
  "group relative inline-flex items-center justify-center whitespace-nowrap px-2 py-2 text-[1.02rem] font-semibold uppercase tracking-[0.16em] transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 2xl:text-[1.1rem]";

const desktopUnderlineClass =
  "absolute inset-x-0 -bottom-1 h-px origin-center scale-x-0 transition duration-300 group-hover:scale-x-100";
export function Navbar({ overlay = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  const getNavHref = (href: string) => {
    if (!href.startsWith("#")) return href;
    return pathname === "/" ? href : `/${href}`;
  };

  useEffect(() => {
    if (!overlay) return;

    const updateScrollState = () => setHasScrolled(window.scrollY > 24);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, [overlay]);

  const isFloatingOverHero = overlay && !hasScrolled;
  const navLinkClass = `${baseNavLinkClass} ${
    isFloatingOverHero
      ? "text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.55)] hover:text-[#f6dcc1] focus-visible:ring-white/80"
      : "text-[#211b17] hover:text-[#8a6035] focus-visible:ring-[#b79a78]"
  }`;
  const underlineClass = `${desktopUnderlineClass} ${isFloatingOverHero ? "bg-[#f6dcc1]" : "bg-[#b28c62]"}`;
  const logoClass = `h-auto w-[255px] transition duration-300 hover:-translate-y-0.5 2xl:w-[292px] ${isFloatingOverHero ? "brightness-0 invert drop-shadow-[0_10px_24px_rgba(0,0,0,0.55)]" : "drop-shadow-[0_10px_20px_rgba(31,23,16,0.08)]"}`;
  const mobileIconClass = isFloatingOverHero ? "border-white/55 text-white shadow-[0_8px_22px_rgba(0,0,0,0.22)] hover:bg-white/10" : "border-[rgba(0,0,0,0.14)] text-[#181818] hover:bg-[rgba(255,255,255,0.35)]";
  const mobileMenuLinkClass = isFloatingOverHero
    ? "text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.45)] hover:text-[#f6dcc1]"
    : "text-[#211b17] hover:text-[#8a6035]";
  const headerClassName = overlay
    ? `sticky top-0 z-50 -mb-[5rem] w-full transition duration-300 xl:-mb-[7.5rem] ${hasScrolled ? "border-b border-[rgba(40,30,20,0.1)] bg-[#f9f7f3]/88 shadow-[0_12px_35px_rgba(32,24,18,0.08)] backdrop-blur" : "bg-transparent"}`
    : "sticky top-0 z-50 w-full border-b border-[rgba(40,30,20,0.1)] bg-[#f9f7f3]/95 backdrop-blur";

  return (
    <header className={headerClassName}>
      <nav className="mx-auto hidden w-full max-w-[1450px] grid-cols-[1fr_auto_1fr] items-center gap-8 px-8 py-5 xl:grid 2xl:gap-12 2xl:px-10" aria-label="Main navigation">
        <ul className="flex min-w-0 items-center gap-8 justify-self-start 2xl:gap-10">
          {leftLinks.map((item) => (
            <li key={item.label}>
              <Link href={getNavHref(item.href)} className={navLinkClass}>
                {item.label}
                <span className={underlineClass} />
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/" className="flex items-center justify-center justify-self-center" aria-label="Team Hair Pro home">
          <Image src="/logo.svg" alt="Team Hair Pro" width={292} height={88} priority className={logoClass} />
        </Link>

        <ul className="flex min-w-0 items-center justify-self-end gap-8 2xl:gap-10">
          {rightLinks.map((item) => (
            <li key={item.label}>
              <Link href={getNavHref(item.href)} className={navLinkClass}>
                {item.label}
                <span className={underlineClass} />
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
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition ${mobileIconClass}`}
        >
          <span className="sr-only">Toggle menu</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <Link href="/" className="flex items-center justify-center" aria-label="Team Hair Pro home">
          <Image src="/logo.svg" alt="Team Hair Pro" width={210} height={64} priority className={`h-auto w-[165px] sm:w-[190px] ${isFloatingOverHero ? "brightness-0 invert drop-shadow-[0_8px_18px_rgba(0,0,0,0.5)]" : ""}`} />
        </Link>

        <span className="h-10 w-10" />
      </nav>

      {isMenuOpen ? (
        <div id="mobile-menu" className={`${isFloatingOverHero ? "bg-[linear-gradient(180deg,rgba(10,8,7,0.72),rgba(10,8,7,0.38),rgba(10,8,7,0))]" : "border-t border-[rgba(0,0,0,0.1)] bg-[#f9f7f3]/95 backdrop-blur"} px-5 pb-7 pt-3 xl:hidden`}>
          <div className="flex flex-col items-center gap-3.5">
            {mobileLinks.map((item) => (
              <Link
                key={item.label}
                href={getNavHref(item.href)}
                onClick={() => setIsMenuOpen(false)}
                className={`text-[1.04rem] font-semibold uppercase tracking-[0.16em] transition duration-300 hover:-translate-y-0.5 ${mobileMenuLinkClass}`}
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
