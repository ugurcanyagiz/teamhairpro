import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/home/navbar";

type Service = {
  title: string;
  description: string;
};

type Stat = {
  label: string;
  value: string;
};

type Stylist = {
  src: string;
  name: string;
  specialty: string;
};

type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

const stats: Stat[] = [
  { value: "12+", label: "Years of salon expertise" },
  { value: "4.9/5", label: "Average client rating" },
  { value: "3k+", label: "Happy appointments yearly" },
  { value: "Premium", label: "Professional product lines" },
];

const services: Service[] = [
  {
    title: "Haircut & Styling",
    description: "Precision cuts and polished styling tailored to your face shape, lifestyle, and signature look.",
  },
  {
    title: "Color & Highlights",
    description: "Dimensional color, balayage, and highlights designed for luminous tone and graceful grow-out.",
  },
  {
    title: "Restorative Treatments",
    description: "Hydration, bond repair, and scalp care rituals that revive softness, shine, and long-term hair health.",
  },
  {
    title: "Blowouts",
    description: "Camera-ready finishes with volume, movement, and all-day hold for your everyday luxury moment.",
  },
  {
    title: "Bridal & Events",
    description: "Elegant occasion styling and updos crafted to complement your features, dress, and event mood.",
  },
];

const galleryImages = [
  { src: "/images/gallery-1.svg", alt: "Elegant textured haircut finish" },
  { src: "/images/gallery-2.svg", alt: "Color transformation with soft dimension" },
  { src: "/images/gallery-3.svg", alt: "Premium salon styling session" },
  { src: "/images/gallery-4.svg", alt: "Glossy brunette treatment result" },
  { src: "/images/gallery-5.svg", alt: "Stylist finishing a modern layered cut" },
  { src: "/images/gallery-6.svg", alt: "Refined final look photographed in studio light" },
];

const stylists: Stylist[] = [
  { src: "/images/stylist-1.svg", name: "Aria Bennett", specialty: "Creative Director · Precision Cuts" },
  { src: "/images/stylist-2.svg", name: "Sofia Laurent", specialty: "Color Specialist · Lived-In Blonde" },
  { src: "/images/stylist-3.svg", name: "Mila Carver", specialty: "Styling Lead · Events & Bridal" },
];

const testimonials: Testimonial[] = [
  {
    quote: "The salon feels calm and luxurious, and every detail of my color is considered. I leave feeling elevated every time.",
    name: "Camille R.",
    detail: "Client for 2 years",
  },
  {
    quote: "My haircut grows out beautifully, which says everything about their skill. TeamHairPro has become my trusted studio.",
    name: "Natalie M.",
    detail: "Monthly styling client",
  },
  {
    quote: "From consultation to finish, the experience is polished and personal. It is the most premium salon visit in the city.",
    name: "Olivia T.",
    detail: "Bridal styling client",
  },
];

function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-14">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9b8064]">TeamHairPro</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#2a2420] sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-[#6e6257]">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-[#f6f1ea] text-[#2a2420]">
      <Navbar />

      <main>
        <section className="relative overflow-hidden border-b border-[#e8dfd4]" aria-labelledby="hero-title">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,169,138,0.2),_transparent_55%)]" />
          <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 py-14 sm:py-18 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8 lg:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b8064]">Luxury Salon Experience</p>
              <h1 id="hero-title" className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#2b2521] sm:text-5xl lg:text-6xl">
                Luxury Hair, Beautifully Tailored
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#64594f]">
                Personalized cuts, color artistry, and restorative care in a refined studio designed around confidence and timeless beauty.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#booking"
                  className="inline-flex items-center justify-center rounded-full border border-[#c7af95] bg-[#b99a7b] px-7 py-3 text-sm font-medium text-[#fffaf4] shadow-[0_12px_24px_rgba(145,108,75,0.22)] transition hover:-translate-y-0.5 hover:bg-[#a98a6d]"
                >
                  Book Appointment
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-[#d7ccc0] bg-white/80 px-7 py-3 text-sm font-medium text-[#3b322c] transition hover:border-[#b99a7b] hover:text-[#2a2420]"
                >
                  View Services
                </Link>
              </div>

              <p className="mt-6 text-sm text-[#7b6f64]">Color, cuts, styling, and treatments tailored to you.</p>
            </div>

            <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-[#e6ddd2] bg-[#f3ece3] shadow-[0_30px_50px_rgba(78,62,47,0.16)] sm:h-[520px]">
              <Image
                src="/images/hero-hair.svg"
                alt="Premium hair salon styling session"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a2118]/14 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        <section className="border-b border-[#e8dfd4] bg-[#fbf8f4] px-6 py-7 lg:px-8" aria-label="Social proof">
          <div className="mx-auto grid w-full max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[#ece3d9] bg-white/80 px-5 py-4 text-center">
                <p className="text-xl font-semibold text-[#2f2924]">{stat.value}</p>
                <p className="mt-1 text-sm text-[#75695e]">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            title="Signature Services"
            description="Every appointment begins with consultation and ends with a polished finish designed for your texture, goals, and lifestyle."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-3xl border border-[#e9e0d5] bg-[#fffdfa] p-7 shadow-[0_14px_26px_rgba(57,42,29,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_34px_rgba(57,42,29,0.1)]"
              >
                <div className="mb-4 h-1.5 w-12 rounded-full bg-[#ceb295] transition group-hover:w-16" />
                <h3 className="text-xl font-semibold text-[#2f2924]">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-[#6f6358]">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="border-y border-[#e8dfd4] bg-[#f9f5ef] px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto w-full max-w-7xl">
            <SectionHeading
              title="Featured Looks"
              description="A curated edit of finishes created inside TeamHairPro—from dimensional color to sculpted styling and editorial texture."
            />
            <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {galleryImages.map((image, index) => {
                const spanClass =
                  index === 0
                    ? "sm:row-span-2 lg:col-span-6"
                    : index === 1 || index === 4
                      ? "lg:col-span-3"
                      : index === 3
                        ? "lg:col-span-6"
                        : "lg:col-span-3";

                return (
                  <figure key={image.src} className={`group relative overflow-hidden rounded-2xl border border-[#e7ddd2] ${spanClass}`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2c241c]/28 to-transparent" />
                  </figure>
                );
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <div className="relative h-[360px] overflow-hidden rounded-[1.75rem] border border-[#e8dfd4] bg-[#f4ede4] shadow-[0_20px_40px_rgba(68,50,34,0.12)] sm:h-[430px]">
            <Image src="/images/gallery-4.svg" alt="TeamHairPro salon interior and styling atmosphere" fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9b8064]">Salon Philosophy</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#2a2420] sm:text-4xl">An elevated salon ritual with modern care</h2>
            <p className="mt-6 leading-relaxed text-[#6c6055]">
              We blend technical artistry with a warm, attentive experience. Every visit includes thoughtful consultation, expert execution, and guidance that keeps your hair looking exceptional beyond the chair.
            </p>
            <p className="mt-4 leading-relaxed text-[#6c6055]">
              From subtle refreshes to complete transformations, our focus is always tailored results that look effortlessly premium and authentically you.
            </p>
          </div>
        </section>

        <section id="stylists" className="border-y border-[#e8dfd4] bg-[#fbf8f4] px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto w-full max-w-7xl">
            <SectionHeading
              title="Meet the Stylists"
              description="A team of artists known for refined technique, personalized service, and a calm luxury approach to beauty."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {stylists.map((stylist) => (
                <article
                  key={stylist.name}
                  className="group overflow-hidden rounded-3xl border border-[#e7ddd2] bg-[#fffdfa] shadow-[0_14px_28px_rgba(56,40,24,0.08)] transition hover:-translate-y-1"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={stylist.src}
                      alt={stylist.name}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-6 py-5">
                    <h3 className="text-xl font-semibold text-[#2f2924]">{stylist.name}</h3>
                    <p className="mt-2 text-sm text-[#6f6358]">{stylist.specialty}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            title="Client Love"
            description="Real experiences from clients who trust TeamHairPro for consistently beautiful, confidence-boosting results."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="rounded-3xl border border-[#e7ddd2] bg-[#fffdfa] p-7 shadow-[0_14px_28px_rgba(56,40,24,0.06)]">
                <blockquote className="text-base leading-relaxed text-[#584d44]">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-[#eee5db] pt-5">
                  <p className="font-semibold text-[#2f2924]">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-[#7b6f64]">{testimonial.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="booking" className="border-y border-[#e8dfd4] bg-[#f4ece2] px-6 py-20 lg:px-8">
          <div className="mx-auto w-full max-w-4xl rounded-[2rem] border border-[#e2d5c7] bg-[#fffaf4] px-8 py-12 text-center shadow-[0_28px_50px_rgba(72,54,39,0.12)] sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9b8064]">Book Your Visit</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#2a2420] sm:text-4xl">Ready for your next look?</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#6d6157]">
              Reserve your appointment with our senior stylists for bespoke cuts, luminous color, and polished finishing tailored to your vision.
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-[#c7af95] bg-[#b99a7b] px-8 py-3 text-sm font-medium text-[#fffaf4] shadow-[0_12px_24px_rgba(145,108,75,0.2)] transition hover:-translate-y-0.5 hover:bg-[#a98a6d]"
            >
              Book Appointment
            </Link>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-[#f8f4ee] px-6 py-14 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-10 border-t border-[#e8dfd4] pt-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-sm font-semibold tracking-[0.24em] text-[#2f2924]">TEAMHAIRPRO</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#6f6358]">
              Premium salon services rooted in craftsmanship, calm luxury, and tailored beauty for modern women.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8c7258]">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#6f6358]">
              <li>
                <Link href="#services" className="transition hover:text-[#2f2924]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="transition hover:text-[#2f2924]">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="transition hover:text-[#2f2924]">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8c7258]">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#6f6358]">
              <li>hello@teamhairpro.com</li>
              <li>(555) 248-1904</li>
              <li>124 Atelier Ave, Suite 5</li>
              <li className="pt-2 text-xs uppercase tracking-[0.2em] text-[#98877a]">Instagram · Pinterest · Facebook</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
