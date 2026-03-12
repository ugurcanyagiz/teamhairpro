import Link from "next/link";

export function ServicesSpotlight() {
  return (
    <section className="border-y border-[rgba(0,0,0,0.08)] bg-[linear-gradient(130deg,#f7f3ed_0%,#efe8df_48%,#f8f5f0_100%)] px-5 py-12 sm:px-6 sm:py-14">
      <div className="mx-auto w-full max-w-5xl">
        <div className="rounded-[2rem] border border-[rgba(17,17,17,0.1)] bg-[rgba(255,255,255,0.72)] px-6 py-8 shadow-[0_16px_50px_rgba(21,17,14,0.08)] backdrop-blur-[1.5px] sm:px-10 sm:py-10">
          <p className="text-[0.63rem] font-semibold uppercase tracking-[0.2em] text-[#6e6157]">Service Highlights</p>
          <h2 className="mt-3 max-w-3xl text-[clamp(1.6rem,3.8vw,2.5rem)] font-medium leading-tight tracking-[0.03em] text-[#15110f]">
            Industry-loved salon services, crafted with Team Hair Pro precision.
          </h2>
          <p className="mt-4 max-w-3xl text-[0.85rem] leading-7 text-[#4d443e] sm:text-[0.95rem]">
            From seamless balayage and dimensional highlights to smooth keratin finishes, discover the most requested services on our menu—all delivered with tailored consultation and premium care.
          </p>

          <div className="mt-7 flex justify-end">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-[#15110f] bg-[#15110f] px-6 py-2.5 text-[0.63rem] font-semibold uppercase tracking-[0.16em] text-[#f6f1ea] transition hover:-translate-y-0.5 hover:bg-[#090807]"
            >
              Explore all services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
