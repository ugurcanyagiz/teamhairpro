"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef } from "react";

const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/andyhairpro/";

type InstagramEmbedWindow = Window & {
  instgrm?: {
    Embeds?: {
      process: () => void;
    };
  };
};

export function InstagramEmbedSection() {
  const sectionRef = useRef<HTMLElement>(null);

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
  }, [processEmbeds]);

  return (
    <section id="instagram" ref={sectionRef} className="mt-16 flex w-full justify-center px-4 sm:mt-18">
      <Script src="https://www.instagram.com/embed.js" strategy="afterInteractive" onLoad={processEmbeds} onReady={processEmbeds} />

      <div className="luxury-float w-full max-w-[36rem] overflow-hidden rounded-[1.75rem] border border-[rgba(80,58,38,0.1)] bg-white p-2 shadow-[0_28px_70px_rgba(42,31,23,0.14)] ring-1 ring-white/80 sm:p-3">
        <blockquote
          aria-label="Andy Hair Pro Instagram profile"
          className="instagram-media mx-auto w-full bg-white"
          data-instgrm-permalink={INSTAGRAM_PROFILE_URL}
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
        />
      </div>
    </section>
  );
}
