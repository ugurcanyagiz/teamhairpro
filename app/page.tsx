import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Precision Cuts",
    description: "Editorial-level cuts tailored to your face shape, texture, and daily styling goals.",
    price: "From $85",
  },
  {
    title: "Lived-In Color",
    description: "Dimensional color + gloss systems that grow out softly and keep your look luminous.",
    price: "From $165",
  },
  {
    title: "Signature Blowout",
    description: "Camera-ready polish with movement, bounce, and humidity-resistant finish.",
    price: "From $65",
  },
];

const stylists = [
  {
    name: "Mia Alvarez",
    role: "Creative Director",
    image: "/images/stylist-1.svg",
    focus: "Luxury color transformations",
  },
  {
    name: "Jordan Kim",
    role: "Senior Stylist",
    image: "/images/stylist-2.svg",
    focus: "Precision shaping + styling",
  },
  {
    name: "Ari Bennett",
    role: "Texture Specialist",
    image: "/images/stylist-3.svg",
    focus: "Curl care + healthy-hair treatments",
  },
];

const testimonials = [
  {
    name: "Nina K.",
    review:
      "I walked out feeling like the best version of myself. The color was rich, glossy, and exactly what I asked for.",
  },
  {
    name: "Olivia R.",
    review:
      "The energy is unmatched. Every stylist is warm, confident, and truly skilled. Booking my next visit immediately.",
  },
  {
    name: "Samantha J.",
    review:
      "Team Hair Pro nails that premium but welcoming vibe. My cut has movement and still looks perfect weeks later.",
  },
  {
    name: "Grace L.",
    review:
      "This salon understands modern style. I brought inspiration photos and they elevated the whole look.",
  },
];

const socialImages = ["/ins1.png", "/ins2.png", "/ins3.png", "/ins4.png", "/ins5.png", "/ins6.png"];

export default function Home() {
  return (
    <div className="bg-[#151515] text-[#f7f4ef]">
      <header className="fixed inset-x-0 top-4 z-50 px-4 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/15 bg-[#1f1d1b]/70 px-4 py-2.5 backdrop-blur-xl md:px-6">
          <Link href="#home" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Team Hair Pro" width={126} height={32} className="h-7 w-auto" priority />
          </Link>

          <nav className="hidden items-center gap-8 text-sm tracking-wide text-[#ece7de] md:flex">
            <Link href="#services" className="transition hover:text-[#d4b38a]">Services</Link>
            <Link href="#looks" className="transition hover:text-[#d4b38a]">Looks</Link>
            <Link href="#team" className="transition hover:text-[#d4b38a]">Team</Link>
            <Link href="#reviews" className="transition hover:text-[#d4b38a]">Reviews</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/teamhairpro"
              aria-label="Visit Team Hair Pro on Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[#f7f4ef] transition hover:-translate-y-0.5 hover:border-[#d4b38a] hover:text-[#d4b38a]"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5" stroke="currentColor" strokeWidth="1.7">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.3" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <Link
              href="#book"
              className="rounded-full bg-[#d4b38a] px-4 py-2 text-sm font-semibold tracking-wide text-[#1b1816] transition hover:-translate-y-0.5 hover:bg-[#e5c29b]"
            >
              Book Now
            </Link>
          </div>
        </div>
      </header>

      <main id="home" className="overflow-x-clip">
        <section className="relative px-4 pb-20 pt-34 md:px-8 md:pt-38">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.05fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[#d4b38a]">Luxury Hair Atelier</p>
              <h1 className="mt-4 text-5xl font-semibold leading-[1.03] tracking-tight text-[#f8f4ee] md:text-7xl [font-family:var(--font-league-spartan)]">
                Where your next signature look begins.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#c9c2b8] md:text-lg">
                Team Hair Pro blends editorial craftsmanship with modern social energy—so every visit feels elevated, expressive, and confidence-boosting.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="#book" className="rounded-full bg-[#d4b38a] px-8 py-3 font-medium text-[#1f1a16] transition hover:-translate-y-0.5 hover:bg-[#e7c6a0]">
                  Book Consultation
                </Link>
                <Link href="#looks" className="rounded-full border border-white/30 px-8 py-3 font-medium text-[#f5f2ed] transition hover:-translate-y-0.5 hover:border-[#d4b38a] hover:text-[#d4b38a]">
                  Explore Looks
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[36rem] md:justify-self-end">
              <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-[#d4b38a]/25 blur-2xl" />
              <div className="absolute -right-3 -top-4 h-24 w-24 rounded-full border border-white/20" />
              <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#24201c] p-3">
                <div className="relative h-[28rem] overflow-hidden rounded-[1.7rem] md:h-[34rem]">
                  <Image src="/images/hero-hair.svg" alt="Team Hair Pro salon model" fill className="object-cover transition duration-700 hover:scale-105" priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 rounded-[1.8rem] border border-white/10 bg-[#1c1a18] px-6 py-6 text-center text-sm md:grid-cols-3 md:text-left">
            <div>
              <p className="text-3xl font-semibold text-[#f8f4ee]">4.9 ★</p>
              <p className="mt-1 text-[#bcb5aa]">Average Google rating</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-[#f8f4ee]">1,200+</p>
              <p className="mt-1 text-[#bcb5aa]">Verified five-star reviews</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-[#f8f4ee]">Top 1%</p>
              <p className="mt-1 text-[#bcb5aa]">Color + cut specialists in NJ</p>
            </div>
          </div>
        </section>

        <section id="services" className="px-4 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d4b38a]">Signature Services</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#f8f4ee] md:text-5xl [font-family:var(--font-league-spartan)]">Built to turn heads.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="group rounded-[1.6rem] border border-white/10 bg-[linear-gradient(165deg,#24211e,#191816)] p-6 transition hover:-translate-y-1 hover:border-[#d4b38a]/60">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#9c9389]">{service.price}</p>
                  <h3 className="mt-3 text-2xl font-medium text-[#f7f2e9]">{service.title}</h3>
                  <p className="mt-3 leading-7 text-[#b7b0a6]">{service.description}</p>
                  <Link href="#book" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#d4b38a]">
                    Reserve Spot <span className="transition group-hover:translate-x-1">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="looks" className="px-4 pb-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="text-4xl font-semibold tracking-tight text-[#f8f4ee] md:text-5xl [font-family:var(--font-league-spartan)]">Featured Looks</h2>
              <p className="max-w-md text-sm leading-6 text-[#b7b0a6]">Fresh transformations captured with editorial polish and social-first energy.</p>
            </div>
            <div className="grid auto-rows-[9rem] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[8.5rem]">
              {[
                "gallery-1.svg",
                "gallery-2.svg",
                "gallery-3.svg",
                "gallery-4.svg",
                "gallery-5.svg",
                "gallery-6.svg",
              ].map((image, index) => (
                <div
                  key={image}
                  className={`group relative overflow-hidden rounded-3xl border border-white/10 ${
                    index === 0 ? "col-span-2 row-span-2" : index === 3 ? "row-span-2" : ""
                  }`}
                >
                  <Image
                    src={`/images/${image}`}
                    alt="Featured salon work"
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 md:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[2rem] border border-white/10 bg-[#1c1a18] p-5 md:grid-cols-2 md:p-8">
            <div className="relative h-80 overflow-hidden rounded-[1.6rem] md:h-[28rem]">
              <Image src="/images/gallery-4.svg" alt="Salon interior experience" fill className="object-cover" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d4b38a]">The Team Hair Pro Experience</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#f8f4ee] [font-family:var(--font-league-spartan)]">Luxury that feels personal.</h2>
              <p className="mt-5 leading-8 text-[#b9b2a8]">
                From playlist to product finish, every detail is curated so you feel seen, celebrated, and instantly elevated.
              </p>
              <ul className="mt-6 space-y-3 text-[#ece7de]">
                <li>• Consultation-first approach for intentional results</li>
                <li>• Premium formulas focused on shine and hair health</li>
                <li>• Social-ready finishing and style coaching before you leave</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="team" className="px-4 pb-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-semibold tracking-tight text-[#f8f4ee] md:text-5xl [font-family:var(--font-league-spartan)]">Meet the Artists</h2>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {stylists.map((stylist) => (
                <article key={stylist.name} className="group rounded-[1.4rem] border border-white/10 bg-[#1d1b19] p-4 transition hover:-translate-y-1 hover:border-[#d4b38a]/60">
                  <div className="relative h-72 overflow-hidden rounded-[1.1rem]">
                    <Image src={stylist.image} alt={stylist.name} fill className="object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="mt-4 text-2xl text-[#f8f4ee]">{stylist.name}</h3>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#d4b38a]">{stylist.role}</p>
                  <p className="mt-2 text-[#b8b1a8]">{stylist.focus}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="px-4 pb-20 md:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,#27231f,#171614)] px-5 py-10 md:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#d4b38a]">Google Reviews</p>
                <h2 className="mt-2 text-4xl font-semibold text-[#f8f4ee] [font-family:var(--font-league-spartan)]">Loved by our clients</h2>
              </div>
              <p className="rounded-full border border-white/15 px-4 py-2 text-sm text-[#d8d1c6]">4.9 average from 1,200+ reviews</p>
            </div>
            <div className="testimonial-track mt-8">
              {[...testimonials, ...testimonials].map((item, i) => (
                <article key={`${item.name}-${i}`} className="luxury-float rounded-2xl border border-white/12 bg-[#201d1b] p-5 shadow-[0_16px_30px_rgba(0,0,0,0.25)]">
                  <p className="text-sm leading-7 text-[#dfd9cf]">“{item.review}”</p>
                  <p className="mt-4 text-sm font-semibold tracking-wide text-[#d4b38a]">{item.name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 md:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#1b1917] p-6 md:p-8">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Image src="/logo.svg" alt="Team Hair Pro" width={88} height={22} className="h-7 w-auto rounded-full bg-[#2a2622] p-1.5" />
                <div>
                  <p className="text-sm font-semibold text-[#f6f1e8]">@teamhairpro</p>
                  <p className="text-xs text-[#a89f94]">Daily transformations + salon moments</p>
                </div>
              </div>
              <a
                href="https://instagram.com/teamhairpro"
                className="rounded-full border border-white/20 px-4 py-2 text-sm text-[#f5f1e8] transition hover:border-[#d4b38a] hover:text-[#d4b38a]"
              >
                Follow on Instagram
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
              {socialImages.map((image, idx) => (
                <a
                  key={image}
                  href="https://instagram.com/teamhairpro"
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 ${idx % 3 === 0 ? "md:col-span-2" : ""} ${
                    idx === 4 ? "md:-translate-y-4" : ""
                  }`}
                >
                  <div className="relative h-44 md:h-56">
                    <Image src={image} alt="Team Hair Pro instagram post" fill className="object-cover transition duration-700 group-hover:scale-110" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="book" className="px-4 pb-22 md:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#d4b38a]/40 bg-[linear-gradient(145deg,#25211d,#171513)] px-6 py-14 text-center md:px-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d4b38a]">Ready for your next look?</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#f8f4ee] md:text-5xl [font-family:var(--font-league-spartan)]">
              Let’s create something unforgettable.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#bbb4aa]">
              Tap below to secure your appointment and experience premium, confidence-driven hair artistry.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a href="tel:2019271711" className="rounded-full border border-white/30 px-7 py-3 text-[#f7f3eb] transition hover:border-[#d4b38a] hover:text-[#d4b38a]">
                Call 201 · 927 · 1711
              </a>
              <a href="#" className="rounded-full bg-[#d4b38a] px-7 py-3 font-medium text-[#1f1a16] transition hover:-translate-y-0.5 hover:bg-[#e5c39d]">
                Book Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#121110] px-4 py-8 text-sm text-[#9f978b] md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Team Hair Pro. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-[#d4b38a]">Privacy</a>
            <a href="#" className="transition hover:text-[#d4b38a]">Terms</a>
            <a href="https://instagram.com/teamhairpro" className="transition hover:text-[#d4b38a]">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
