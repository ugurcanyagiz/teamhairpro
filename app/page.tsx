import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/home/navbar";

type Service = {
  title: string;
  description: string;
  icon: "scissors" | "beard" | "color";
};

type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

const services: Service[] = [
  {
    title: "Haircut",
    description:
      "Tailored cuts with precision detailing that complement your face shape, texture, and personal style.",
    icon: "scissors",
  },
  {
    title: "Beard Styling",
    description:
      "Sharp beard sculpting, fades, and grooming rituals for a clean and refined modern look.",
    icon: "beard",
  },
  {
    title: "Hair Coloring",
    description:
      "Dimensional tones and expert coloring techniques crafted to enhance depth, character, and confidence.",
    icon: "color",
  },
];

const galleryImages = [
  { src: "/images/gallery-1.svg", alt: "Textured modern haircut" },
  { src: "/images/gallery-2.svg", alt: "Luxury salon interior styling" },
  { src: "/images/gallery-3.svg", alt: "Beard lineup and grooming" },
  { src: "/images/gallery-4.svg", alt: "Premium hair color treatment" },
  { src: "/images/gallery-5.svg", alt: "Stylist shaping a fresh cut" },
  { src: "/images/gallery-6.svg", alt: "Close-up of finished hairstyle" },
];

const stylists = [
  { src: "/images/stylist-1.svg", name: "Ariana Cole", role: "Creative Director" },
  { src: "/images/stylist-2.svg", name: "Marcus Reid", role: "Senior Grooming Artist" },
  { src: "/images/stylist-3.svg", name: "Elena Brooks", role: "Color Specialist" },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "The attention to detail is unmatched. Every appointment feels curated, and the result always exceeds expectations.",
    name: "Daniel Harper",
    detail: "Client for 3 years",
  },
  {
    quote:
      "TeamHairPro blends technical precision with luxury service. It is my go-to spot before every major event.",
    name: "Jordan Blake",
    detail: "Creative consultant",
  },
  {
    quote:
      "From the ambiance to the finish, everything feels premium. The stylists understand exactly what modern grooming should be.",
    name: "Owen Bennett",
    detail: "Entrepreneur",
  },
];

function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#d8b37a]">TeamHairPro</p>
      <h2 className="text-3xl font-semibold text-[#f6efe5] sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-[#b8afa3]">{description}</p>
    </div>
  );
}

function ServiceIcon({ icon }: { icon: Service["icon"] }) {
  if (icon === "scissors") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="5.5" cy="7.5" r="2.5" />
        <circle cx="5.5" cy="16.5" r="2.5" />
        <path strokeLinecap="round" d="M8 9l11-6M8 15l11 6M8 9l8 6" />
      </svg>
    );
  }

  if (icon === "beard") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10a7 7 0 1114 0v2a7 7 0 01-14 0v-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 14c1.2 1.4 2.7 2 4 2s2.8-.6 4-2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c4.5 0 8 3.5 8 8s-3.5 10-8 10-8-5.5-8-10 3.5-8 8-8z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 9.5c1 1 2 1.3 3.5 1.3 1.6 0 2.8-.4 3.8-1.4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.5c.8 1 1.9 1.5 3.2 1.5 1.5 0 2.6-.6 3.6-1.7" />
    </svg>
  );
}

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-[#0f0e0c] text-[#f6efe5]">
      <Navbar />

      <main>
        <section className="relative overflow-hidden border-b border-white/10" aria-labelledby="hero-title">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(216,179,122,0.16),_transparent_55%)]" />
          <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#d8b37a]">Luxury Grooming Studio</p>
              <h1 id="hero-title" className="text-4xl font-semibold leading-tight text-[#f8f2e9] sm:text-5xl lg:text-6xl">
                Team Hair Pro
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#bcb2a4]">
                Precision cuts, modern styling, and premium grooming experience.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#booking"
                  className="inline-flex items-center justify-center rounded-full border border-[#d8b37a]/70 bg-[#d8b37a] px-7 py-3 text-sm font-medium text-[#1c1712] transition hover:bg-[#e6c38e]"
                >
                  Book Appointment
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-[#ece3d7] transition hover:border-[#d8b37a]/70 hover:text-white"
                >
                  View Services
                </Link>
              </div>
            </div>

            <div className="relative h-[420px] overflow-hidden rounded-[1.8rem] border border-white/15 bg-[#181613] shadow-[0_25px_60px_rgba(0,0,0,0.4)] sm:h-[520px]">
              <Image
                src="/images/hero-hair.svg"
                alt="Stylish haircut at Team Hair Pro"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#050505]/70 via-[#0e0c0a]/35 to-transparent" />
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            title="Signature Services"
            description="Refined techniques and detail-first execution tailored for clients who value consistency, style, and elevated care."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-[#161411] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#d8b37a]/55"
              >
                <div className="mb-5 inline-flex rounded-full border border-[#d8b37a]/35 bg-[#d8b37a]/10 p-3 text-[#ddbe8d]">
                  <ServiceIcon icon={service.icon} />
                </div>
                <h3 className="text-xl font-semibold text-[#f7efe4]">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#b8afa3]">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="border-y border-white/10 bg-[#13110e] px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto w-full max-w-7xl">
            <SectionHeading
              title="Editorial Gallery"
              description="A curated showcase of modern finishes, premium textures, and transformations crafted in our studio."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`relative overflow-hidden rounded-2xl border border-white/10 ${
                    index === 0 || index === 3 ? "sm:col-span-2 lg:col-span-2" : ""
                  } ${index === 0 ? "sm:row-span-2" : ""} h-64 sm:h-72 ${index === 0 ? "sm:h-full" : ""}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908]/65 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stylists" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            title="Meet the Stylists"
            description="Experienced artists dedicated to sharp execution, personalized styling, and an exceptional salon experience."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {stylists.map((stylist) => (
              <article key={stylist.name} className="overflow-hidden rounded-2xl border border-white/10 bg-[#161411]">
                <div className="relative h-80">
                  <Image src={stylist.src} alt={stylist.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#f7efe4]">{stylist.name}</h3>
                  <p className="mt-2 text-sm text-[#b8afa3]">{stylist.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="testimonials" className="border-y border-white/10 bg-[#13110e] px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto w-full max-w-7xl">
            <SectionHeading
              title="Client Testimonials"
              description="Trusted by professionals and style-conscious clients seeking impeccable results and a premium atmosphere."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="rounded-2xl border border-white/10 bg-[#161411] p-7">
                  <p className="text-base leading-relaxed text-[#d3cabf]">“{testimonial.quote}”</p>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="font-medium text-[#f6efe5]">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-[#b8afa3]">{testimonial.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="rounded-3xl border border-[#d8b37a]/40 bg-[linear-gradient(120deg,#1b1712_0%,#13110e_48%,#1f1b15_100%)] px-6 py-12 text-center shadow-[0_18px_50px_rgba(0,0,0,0.35)] sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d8b37a]">Book Your Session</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#f7efe4] sm:text-4xl">Ready for your next look?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#c4bbaf]">
              Reserve your appointment today and experience modern grooming with exceptional craftsmanship.
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-[#d8b37a]/70 bg-[#d8b37a] px-8 py-3 text-sm font-medium text-[#1f1a14] transition hover:bg-[#e6c38e]"
            >
              Book Appointment
            </Link>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-white/10 bg-[#0d0c0a] px-6 py-14 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-4">
          <div>
            <p className="text-sm font-semibold tracking-[0.26em] text-[#f2e8d8]">TEAMHAIRPRO</p>
            <p className="mt-4 text-sm leading-relaxed text-[#a99f92]">
              Premium salon experiences focused on precision styling, confidence, and timeless grooming standards.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#d8b37a]">Navigate</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#c9bfb2]">
              <li><Link href="#services" className="transition hover:text-white">Services</Link></li>
              <li><Link href="#gallery" className="transition hover:text-white">Gallery</Link></li>
              <li><Link href="#stylists" className="transition hover:text-white">Stylists</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#d8b37a]">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#c9bfb2]">
              <li>123 Madison Avenue, New York</li>
              <li>(212) 555-0148</li>
              <li>hello@teamhairpro.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#d8b37a]">Follow</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#c9bfb2]">
              <li><Link href="#" className="transition hover:text-white">Instagram</Link></li>
              <li><Link href="#" className="transition hover:text-white">Facebook</Link></li>
              <li><Link href="#" className="transition hover:text-white">Pinterest</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
