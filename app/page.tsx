import Image from "next/image";
import Link from "next/link";
import { LogoCarousel } from "@/components/home/logo-carousel";
import { Navbar } from "@/components/home/navbar";

type Stat = {
  value: string;
  label: string;
  detail: string;
};

const stats: Stat[] = [
  {
    value: "10+",
    label: "Years of Craft",
    detail: "Expert-led cuts and color tailored to your face shape and routine.",
  },
  {
    value: "500+",
    label: "Happy Clients",
    detail: "Returning clients who trust TeamHairPro for consistent premium results.",
  },
  {
    value: "5★",
    label: "Rated Service",
    detail: "A calm, thoughtful experience from consultation to final finish.",
  },
  {
    value: "100%",
    label: "Premium Product Focus",
    detail: "Professional formulas selected for long-term shine and hair health.",
  },
];

const benefits = [
  "Tailored cuts and styling that complement your natural features",
  "Premium color services with refined, dimensional results",
  "Bridal and event looks designed for camera-ready confidence",
  "Healthy-hair-focused treatments that protect strength and shine",
];

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <main>
        <section className="relative isolate overflow-hidden border-b border-[var(--border)]" aria-labelledby="hero-title">
          <div className="absolute inset-0">
            <Image src="/images/hero-hair.svg" alt="TeamHairPro salon editorial scene" fill priority className="object-cover" sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(96deg,rgba(243,240,234,0.95)_0%,rgba(243,240,234,0.88)_42%,rgba(243,240,234,0.72)_60%,rgba(243,240,234,0.78)_100%)]" />
          <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent-gold)]">Luxury Salon Experience</p>
              <h1 id="hero-title" className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Luxury Hair, Beautifully Tailored
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]">
                Precision cuts, premium color, and modern styling designed around you. Enjoy a warm, elevated salon ritual that feels
                personal from first consultation to final finish.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#booking"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--accent-gold)] bg-[var(--accent-gold)] px-7 py-3 text-sm font-medium text-[var(--surface)] shadow-[0_12px_24px_rgba(17,17,17,0.16)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-gold-hover)]"
                >
                  Book Appointment
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/95 px-7 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent-gold)]"
                >
                  View Services
                </Link>
              </div>
            </div>

            <aside
              id="booking"
              className="mx-auto w-full max-w-md rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)]/98 p-6 shadow-[0_30px_50px_rgba(17,17,17,0.16)] backdrop-blur"
              aria-label="Consultation booking form"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-gold)]">Private Consultation</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--foreground)]">Request your appointment</h2>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">Share your details and we’ll help you choose the ideal stylist and service.</p>

              <form className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input type="text" placeholder="First Name" className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm outline-none transition placeholder:text-[color:var(--text-secondary)]/60 focus:border-[var(--accent-gold)]" />
                  <input type="text" placeholder="Last Name" className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm outline-none transition placeholder:text-[color:var(--text-secondary)]/60 focus:border-[var(--accent-gold)]" />
                </div>
                <input type="email" placeholder="Email" className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm outline-none transition placeholder:text-[color:var(--text-secondary)]/60 focus:border-[var(--accent-gold)]" />
                <input type="tel" placeholder="Phone" className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm outline-none transition placeholder:text-[color:var(--text-secondary)]/60 focus:border-[var(--accent-gold)]" />
                <select className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-secondary)] outline-none transition focus:border-[var(--accent-gold)]" defaultValue="">
                  <option value="" disabled>
                    Service Interested In
                  </option>
                  <option>Precision Cut & Style</option>
                  <option>Color & Highlights</option>
                  <option>Bridal / Event Styling</option>
                  <option>Restorative Treatment</option>
                </select>
                <input type="date" className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-secondary)] outline-none transition focus:border-[var(--accent-gold)]" />

                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-[var(--accent-gold)] bg-[var(--accent-gold)] px-6 py-3 text-sm font-medium text-[var(--surface)] shadow-[0_10px_20px_rgba(17,17,17,0.18)] transition hover:bg-[var(--accent-gold-hover)]"
                >
                  Book Consultation
                </button>
              </form>
            </aside>
          </div>
        </section>

        <LogoCarousel />

        <section id="proof" className="px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-gold)]">The details that build trust</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Less talk, more proof</h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <article key={stat.label} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center shadow-[0_14px_28px_rgba(67,50,34,0.06)]">
                  <p className="text-4xl font-semibold tracking-tight text-[var(--foreground)]">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-gold)]">{stat.label}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{stat.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="px-6 pb-20 lg:px-8 lg:pb-24">
          <div className="mx-auto w-full max-w-5xl rounded-[2rem] border border-[var(--border)] bg-[var(--background-secondary)] p-8 text-center shadow-[0_20px_36px_rgba(17,17,17,0.08)] sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-gold)]">TeamHairPro is designed for clients who want</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)]">Personalized beauty with premium care</h3>
            <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent-gold)] text-xs text-[var(--surface)]">✓</span>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
