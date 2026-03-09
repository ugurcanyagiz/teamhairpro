import Image from "next/image";
import Link from "next/link";
import { LogoCarousel } from "@/components/home/logo-carousel";
import { Navbar } from "@/components/home/navbar";
import { ReviewCarouselSection } from "@/components/home/review-carousel-section";

const instagramPosts = [
  {
    id: "1",
    image: "/ins1.png",
    caption: "Soft dimensional color with a polished, natural finish.",
    permalink: "https://instagram.com/teamhairpro",
    date: "Jan 12, 2026",
    type: "Color",
  },
  {
    id: "2",
    image: "/ins2.png",
    caption: "Refined styling designed for movement, shine, and balance.",
    permalink: "https://instagram.com/teamhairpro",
    date: "Jan 18, 2026",
    type: "Styling",
  },
  {
    id: "3",
    image: "/ins3.png",
    caption: "Bridal-ready texture with elegant detail and softness.",
    permalink: "https://instagram.com/teamhairpro",
    date: "Jan 24, 2026",
    type: "Bridal",
  },
  {
    id: "4",
    image: "/ins4.png",
    caption: "Healthy-hair-focused care with a luminous result.",
    permalink: "https://instagram.com/teamhairpro",
    date: "Jan 31, 2026",
    type: "Treatment",
  },
  {
    id: "5",
    image: "/ins5.png",
    caption: "A transformation tailored to facial harmony and tone.",
    permalink: "https://instagram.com/teamhairpro",
    date: "Feb 06, 2026",
    type: "Transformation",
  },
  {
    id: "6",
    image: "/ins6.png",
    caption: "Premium finishing work for a smooth and elevated look.",
    permalink: "https://instagram.com/teamhairpro",
    date: "Feb 12, 2026",
    type: "Finish",
  },
] as const;

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-[#f7f2eb] text-[#2b2622]">
      <Navbar overlay />

      <main>
        <section className="relative isolate w-full overflow-hidden border-b border-[#e8dfd4]" aria-labelledby="hero-title">
          <div className="absolute inset-0">
            <Image src="/andy.png" alt="TeamHairPro salon editorial scene" fill priority className="object-cover object-center" sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,25,20,0.38)_0%,rgba(39,30,24,0.24)_18%,rgba(247,242,235,0.78)_56%,rgba(247,242,235,0.9)_100%)]" />
          <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 pb-16 pt-28 sm:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-24 lg:pt-36">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f2e6d7]">Luxury Salon Experience</p>
              <h1 id="hero-title" className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-[#fffaf3]">Luxury Hair,</span>{" "}
                <span className="text-[#f3e4d3]">Beautifully Tailored</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#f3e8dc]">
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

        <section id="services" className="px-6 pb-20 lg:px-8 lg:pb-24" aria-labelledby="instagram-showcase-title">
          <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] border border-[#decdbe] bg-[radial-gradient(circle_at_20%_0%,#f8efe4_0%,#f2e7da_45%,#eee2d5_100%)] p-6 shadow-[0_35px_80px_rgba(74,53,34,0.11)] sm:p-8 lg:p-12">
            <div className="relative isolate overflow-hidden rounded-[1.6rem] border border-[#ddcbbb] bg-[#fdf8f2] p-6 sm:p-8">
              <div className="pointer-events-none absolute -left-16 -top-20 h-48 w-48 rounded-full bg-[#f3d8bd]/55 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 right-0 h-52 w-52 rounded-full bg-[#dcbba3]/45 blur-3xl" />

              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="inline-flex items-center rounded-full border border-[#d7bda7] bg-[#f7ebe0] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8c6846]">
                    Instagram Highlights
                  </p>
                  <h3 id="instagram-showcase-title" className="mt-4 text-3xl font-semibold tracking-tight text-[#2f2822] sm:text-4xl">
                    Live Looks, Fresh Energy
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#705f4f] sm:text-base">
                    Team Hair Pro&apos;nun en yeni dönüşümlerini tek bakışta keşfet.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-2 rounded-full border border-[#dcc4ad] bg-[#f9efe5] px-4 py-2 text-xs font-medium text-[#5f4c3b]">
                    <span className="h-2 w-2 rounded-full bg-[#be8459]" aria-hidden />
                    Haftalık yeni içerik
                  </div>
                  <Link
                    href="https://instagram.com/teamhairpro"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c79f7e] bg-[#bd8e69] px-5 py-2.5 text-sm font-medium text-[#fff8f2] shadow-[0_12px_24px_rgba(106,75,49,0.22)] transition hover:-translate-y-0.5 hover:bg-[#ae805c]"
                  >
                    @teamhairpro <span aria-hidden>↗</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {instagramPosts.map((post) => (
                <Link
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative isolate overflow-hidden rounded-[1.4rem] border border-[#dcc7b4] bg-[#ead7c6] shadow-[0_18px_40px_rgba(73,54,36,0.14)] transition duration-500 hover:-translate-y-1"
                  aria-label={`View Instagram post: ${post.caption}`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.caption}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover object-center transition duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(35,26,19,0.08)_0%,rgba(35,26,19,0.18)_40%,rgba(25,19,14,0.72)_100%)] transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(35,26,19,0.03)_0%,rgba(35,26,19,0.22)_38%,rgba(25,19,14,0.8)_100%)]" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-[#fffaf4]">
                    <div className="inline-flex items-center rounded-full border border-[#e7d8c7]/65 bg-[#f9eee1]/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] backdrop-blur-sm">
                      {post.type}
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs text-[#e6d8c9]">
                      <span>{post.date}</span>
                      <span className="inline-flex items-center gap-1 text-[#fff4e8] opacity-90 transition group-hover:translate-x-0.5">
                        İncele <span aria-hidden>→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
