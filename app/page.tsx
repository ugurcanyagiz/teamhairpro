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

const instagramFeed = Array.from({ length: 10 }, (_, index) => ({
  ...instagramPosts[index % instagramPosts.length],
  id: `feed-${index + 1}`,
}));

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

        <section id="services" className="border-t border-[#e2d8cc] bg-[#ededed] px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="instagram-showcase-title">
          <div className="mx-auto w-full max-w-6xl">
            <div className="overflow-hidden rounded-[1.65rem] border border-[#d7d7d7] bg-white shadow-[0_30px_60px_rgba(29,23,18,0.12)]">
              <div className="flex flex-col gap-5 border-b border-[#ececec] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[conic-gradient(from_140deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5,#feda75)] p-[2px]">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white">
                      <Image src="/andy.png" alt="Team Hair Pro Instagram profile" fill sizes="48px" className="object-cover" />
                    </div>
                  </div>
                  <div>
                    <h3 id="instagram-showcase-title" className="text-xl font-semibold tracking-tight text-[#1e1e1e] sm:text-2xl">
                      TEAM HAIR PRO
                    </h3>
                    <p className="text-sm text-[#7a7a7a]">@teamhairpro</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-5 text-sm text-[#303030] sm:gap-7">
                  <p>
                    <span className="text-base font-semibold text-[#171717]">740</span> Posts
                  </p>
                  <p>
                    <span className="text-base font-semibold text-[#171717]">3.3M</span> Followers
                  </p>
                  <p>
                    <span className="text-base font-semibold text-[#171717]">1.5K</span> Following
                  </p>
                  <Link
                    href="https://instagram.com/teamhairpro"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-lg bg-[#2e8de7] px-4 py-2 font-semibold text-white shadow-[0_8px_20px_rgba(40,114,194,0.34)] transition hover:bg-[#267ed1]"
                  >
                    Follow
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                  {instagramFeed.map((post, index) => (
                    <Link
                      key={post.id}
                      href={post.permalink}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative aspect-square overflow-hidden"
                      aria-label={`View Instagram post ${index + 1}: ${post.caption}`}
                    >
                      <Image
                        src={post.image}
                        alt={post.caption}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        className="object-cover object-center transition duration-500 group-hover:scale-[1.045]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent opacity-70 transition group-hover:opacity-100" />
                      <div className="absolute right-2 top-2 rounded-md bg-black/35 px-1.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
                        ◻︎
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="pointer-events-none absolute inset-y-0 left-2 hidden items-center md:flex">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-black/35 text-lg text-white">‹</span>
                </div>
                <div className="pointer-events-none absolute inset-y-0 right-2 hidden items-center md:flex">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-black/35 text-lg text-white">›</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e1d4c5] bg-[#f2e7db] px-6 py-10" aria-label="Site information">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8f7459]">Info</p>
            <h2 className="text-2xl font-semibold tracking-tight text-[#2d261f] sm:text-3xl">Crafted for a premium portfolio presence</h2>
            <p className="max-w-2xl text-sm leading-relaxed text-[#64574b] sm:text-base">
              Team Hair Pro showcases modern salon expertise with a polished editorial flow, blending elegant visuals and trusted service
              information in one refined experience.
            </p>
          </div>

          <div className="rounded-2xl border border-[#dbcbb9] bg-[#f8f1e8] px-5 py-4 text-sm text-[#5b4d40] shadow-[0_14px_30px_rgba(79,57,36,0.12)] md:max-w-xs">
            <p className="font-medium tracking-wide text-[#3c3128]">Powered by ugurcanyagiz.com</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#8f7459]">Digital Portfolio Integration</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
