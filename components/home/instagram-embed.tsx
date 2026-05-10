"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";

const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/andyhairpro/";

const INSTAGRAM_POST_URLS = [
  "https://www.instagram.com/reel/DYKFan9STwL/",
  "https://www.instagram.com/reel/DYIfriJyPsM/",
  "https://www.instagram.com/reel/DYISdEbypt5/",
  "https://www.instagram.com/reel/DYFUvrPS5AN/",
  "https://www.instagram.com/reel/DWF2gtXDWHk/",
  "https://www.instagram.com/p/DUYqcbpkv9U/",
];

type InstagramEmbedWindow = Window & {
  instgrm?: {
    Embeds?: {
      process: () => void;
    };
  };
};

type InstagramEmbedCardProps = {
  className?: string;
  label: string;
  permalink: string;
};

function InstagramEmbedCard({ className = "", label, permalink }: InstagramEmbedCardProps) {
  return (
    <div
      className={`overflow-hidden rounded-[1.75rem] border border-[rgba(80,58,38,0.1)] bg-white shadow-[0_20px_55px_rgba(42,31,23,0.09)] ring-1 ring-white/80 ${className}`}
    >
      <blockquote
        aria-label={label}
        className="instagram-media mx-auto w-full bg-white"
        data-instgrm-permalink={permalink}
        data-instgrm-version="14"
        style={{
          background: "#fff",
          border: 0,
          borderRadius: "1.75rem",
          boxShadow: "none",
          margin: "0 auto",
          maxWidth: "540px",
          minWidth: 0,
          padding: 0,
          width: "100%",
        }}
      >
        <a className="sr-only" href={permalink} rel="noreferrer" target="_blank">
          View on Instagram
        </a>
      </blockquote>
    </div>
  );
}

export function InstagramEmbedSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasError, setHasError] = useState(false);

  const processEmbeds = useCallback(() => {
    (window as InstagramEmbedWindow).instgrm?.Embeds?.process?.();

    window.setTimeout(() => {
      sectionRef.current?.querySelectorAll<HTMLIFrameElement>("iframe").forEach((iframe) => {
        iframe.style.width = "100%";
        iframe.style.minWidth = "0";
        iframe.style.maxWidth = "100%";
      });
    }, 250);
  }, []);

  useEffect(() => {
    processEmbeds();

    const renderTimer = window.setTimeout(() => {
      if (!sectionRef.current?.querySelector("iframe")) {
        setHasError(true);
      }
    }, 7000);

    return () => {
      window.clearTimeout(renderTimer);
    };
  }, [processEmbeds]);

  return (
    <section
      id="instagram"
      ref={sectionRef}
      className="mt-16 w-full max-w-6xl overflow-hidden rounded-[2.25rem] bg-[#fbf8f4] px-4 py-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.88)] ring-1 ring-[rgba(80,58,38,0.08)] sm:mt-18 sm:px-8 sm:py-14 lg:px-10 lg:py-16"
    >
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={processEmbeds}
        onReady={processEmbeds}
        onError={() => setHasError(true)}
      />

      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#8b725f]">Instagram</p>
        <h3 className="mt-3 text-[clamp(2rem,4vw,3.15rem)] font-medium leading-tight tracking-[0.01em] text-[#1b1613]">
          Follow Our Latest Work
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#675a51] sm:text-lg">
          See our newest transformations, behind-the-chair details, and favorite salon moments from the Team Hair Pro studio.
        </p>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-[36rem] justify-center sm:mt-12">
        <InstagramEmbedCard className="w-full p-2 sm:p-3" label="Andy Hair Pro Instagram profile" permalink={INSTAGRAM_PROFILE_URL} />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {INSTAGRAM_POST_URLS.map((permalink, index) => (
          <InstagramEmbedCard
            key={permalink}
            className="min-h-[34rem] p-2 sm:p-3"
            label={`Team Hair Pro Instagram reel or post ${index + 1}`}
            permalink={permalink}
          />
        ))}
      </div>

      {hasError ? (
        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[rgba(80,58,38,0.1)] bg-white/80 px-5 py-4 text-center text-sm leading-6 text-[#6e6259] shadow-[0_12px_30px_rgba(42,31,23,0.06)]">
          We couldn&apos;t load Instagram right now. Please try again shortly or visit @andyhairpro directly.
        </div>
      ) : null}
    </section>
  );
}
