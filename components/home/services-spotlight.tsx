import Script from "next/script";

export function ServicesSpotlight() {
  return (
    <section
      className="relative overflow-hidden border-y border-[rgba(17,17,17,0.08)] bg-white px-5 py-18 sm:px-6 sm:py-24 lg:py-28"
      aria-labelledby="google-testimonials-heading"
    >
      <div className="pointer-events-none absolute left-1/2 top-28 h-72 w-[min(82vw,56rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(220,220,214,0.24)_0%,rgba(255,255,255,0)_72%)]" aria-hidden />

      <div className="relative mx-auto w-full max-w-[74rem]">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[#66615a]">GOOGLE TESTIMONIALS</p>
          <h2
            id="google-testimonials-heading"
            className="mt-5 text-[clamp(1.95rem,4.4vw,3.25rem)] font-medium leading-[1.08] tracking-[0.01em] text-[#161412]"
          >
            Guests love their Hair Pro experience
          </h2>
          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-[rgba(17,17,17,0.08)] bg-[#fafaf8] px-5 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-[#5f5952]">
            <span className="text-[0.86rem] tracking-[0.18em] text-[#b0893f]">★★★★★</span>
            <span>Google verified reviews</span>
          </div>
        </header>

        <div className="mt-10 rounded-[2rem] border border-[rgba(17,17,17,0.08)] bg-[#fafaf8] p-3 shadow-[0_24px_70px_rgba(17,17,17,0.06)] sm:p-5 lg:p-6">
          <div className="rounded-[1.5rem] bg-white p-2 sm:p-3">
            <div className="elfsight-app-8061136c-569d-4b36-9b7b-4ee394d4edc1" data-elfsight-app-lazy />
          </div>
        </div>
      </div>

      <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
    </section>
  );
}
