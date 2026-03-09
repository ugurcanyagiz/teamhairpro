import Image from "next/image";
import Link from "next/link";
import { LogoCarousel } from "@/components/home/logo-carousel";
import { Navbar } from "@/components/home/navbar";
import { ReviewCarouselSection } from "@/components/home/review-carousel-section";

const benefits = [
  "Tailored cuts and styling that complement your natural features",
  "Premium color services with refined, dimensional results",
  "Bridal and event looks designed for camera-ready confidence",
  "Healthy-hair-focused treatments that protect strength and shine",
];

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-[#f7f2eb] text-[#2b2622]">
      <Navbar />

      <main>
        <section className="relative isolate w-full overflow-hidden border-b border-[#e8dfd4]" aria-labelledby="hero-title">
          <div className="absolute inset-0">
            <Image src="/andy.png" alt="TeamHairPro salon editorial scene" fill priority className="object-cover object-center" sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(96deg,rgba(247,242,235,0.9)_0%,rgba(247,242,235,0.82)_42%,rgba(247,242,235,0.7)_60%,rgba(247,242,235,0.76)_100%)]" />
          <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#917255]">Luxury Salon Experience</p>
              <h1 id="hero-title" className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Luxury Hair, Beautifully Tailored
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#655a50]">
                Precision cuts, premium color, and modern styling designed around you. Enjoy a warm, elevated salon ritual that feels
                personal from first consultation to final finish.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#booking"
                  className="inline-flex items-center justify-center rounded-full border border-[#c8b097] bg-[#b69573] px-7 py-3 text-sm font-medium text-[#fffaf4] shadow-[0_12px_24px_rgba(120,89,61,0.2)] transition hover:-translate-y-0.5 hover:bg-[#a98867]"
                >
                  Book Appointment
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-[#d9cec1] bg-[#fffdfa]/95 px-7 py-3 text-sm font-medium text-[#41362d] transition hover:border-[#b69573]"
                >
                  View Services
                </Link>
              </div>
            </div>

            <aside
              id="booking"
              className="mx-auto w-full max-w-md rounded-[1.75rem] border border-[#e3d8cc] bg-[#fffbf6]/98 p-6 shadow-[0_30px_50px_rgba(62,46,31,0.16)] backdrop-blur"
              aria-label="Consultation booking form"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#917255]">Private Consultation</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#2f2822]">Request your appointment</h2>
              <p className="mt-2 text-sm text-[#6d6157]">Share your details and we’ll help you choose the ideal stylist and service.</p>

              <form className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input type="text" placeholder="First Name" className="rounded-xl border border-[#dfd3c6] bg-[#fffcf8] px-4 py-3 text-sm outline-none transition placeholder:text-[#9a8f84] focus:border-[#b69573]" />
                  <input type="text" placeholder="Last Name" className="rounded-xl border border-[#dfd3c6] bg-[#fffcf8] px-4 py-3 text-sm outline-none transition placeholder:text-[#9a8f84] focus:border-[#b69573]" />
                </div>
                <input type="email" placeholder="Email" className="w-full rounded-xl border border-[#dfd3c6] bg-[#fffcf8] px-4 py-3 text-sm outline-none transition placeholder:text-[#9a8f84] focus:border-[#b69573]" />
                <input type="tel" placeholder="Phone" className="w-full rounded-xl border border-[#dfd3c6] bg-[#fffcf8] px-4 py-3 text-sm outline-none transition placeholder:text-[#9a8f84] focus:border-[#b69573]" />
                <select className="w-full rounded-xl border border-[#dfd3c6] bg-[#fffcf8] px-4 py-3 text-sm text-[#5d5146] outline-none transition focus:border-[#b69573]" defaultValue="">
                  <option value="" disabled>
                    Service Interested In
                  </option>
                  <option>Precision Cut & Style</option>
                  <option>Color & Highlights</option>
                  <option>Bridal / Event Styling</option>
                  <option>Restorative Treatment</option>
                </select>
                <input type="date" className="w-full rounded-xl border border-[#dfd3c6] bg-[#fffcf8] px-4 py-3 text-sm text-[#5d5146] outline-none transition focus:border-[#b69573]" />

                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-[#c8b097] bg-[#b69573] px-6 py-3 text-sm font-medium text-[#fffaf4] shadow-[0_10px_20px_rgba(120,89,61,0.2)] transition hover:bg-[#a98867]"
                >
                  Book Consultation
                </button>
              </form>
            </aside>
          </div>
        </section>

        <LogoCarousel />

        <ReviewCarouselSection />

        <section id="services" className="px-6 pb-20 lg:px-8 lg:pb-24">
          <div className="mx-auto w-full max-w-5xl rounded-[2rem] border border-[#ddd1c4] bg-[#efe6db] p-8 text-center shadow-[0_20px_36px_rgba(74,58,42,0.08)] sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8e7156]">TeamHairPro is designed for clients who want</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#2e2721]">Personalized beauty with premium care</h3>
            <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 rounded-2xl border border-[#ded1c3] bg-[#f8f2ea] p-4">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b69573] text-xs text-[#fffaf4]">✓</span>
                  <p className="text-sm leading-relaxed text-[#5f5449]">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
