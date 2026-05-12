"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_SOURCE = "/api/tutorial-video";

export function TutorialVideoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const closeModal = () => {
    const video = videoRef.current;

    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const video = videoRef.current;
    video?.play().catch(() => {
      // Browsers may block autoplay until a user gesture is registered.
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center rounded-full border border-[#8a6035] bg-[#f6dcc1] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-[#211b17] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#efd0ad] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6035]/60 focus-visible:ring-offset-2"
      >
        Tutorial
      </button>

      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Tutorial video"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/15">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-2xl leading-none text-[#211b17] shadow-lg transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Close tutorial video"
            >
              ×
            </button>
            <video
              ref={videoRef}
              src={VIDEO_SOURCE}
              className="aspect-video w-full bg-black"
              controls
              autoPlay
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
