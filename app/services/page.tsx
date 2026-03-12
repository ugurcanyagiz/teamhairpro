import Link from "next/link";
import type { Metadata } from "next";
import { ContactBanner, SectionLabel } from "@/components/home/design-system";
import { Navbar } from "@/components/home/navbar";

type Service = {
  name: string;
  duration: string;
  price: string;
  description: string;
  consultationRequired?: boolean;
};

type ServiceCategory = {
  id: string;
  title: string;
  subtitle: string;
  services: Service[];
};

const serviceCategories: ServiceCategory[] = [
  {
    id: "styling-finish",
    title: "Styling & Finish",
    subtitle: "Polished finishing services tailored to your hair texture, event, and preferred level of hold.",
    services: [
      {
        name: "Blow Dry (30 min)",
        duration: "30 min",
        price: "$50",
        description: "A professional wash-and-blowout service using expert brushwork to deliver smooth body, movement, and a refined finish.",
      },
      {
        name: "Blow Dry (45 min)",
        duration: "45 min",
        price: "$75",
        description: "An extended blowout session for extra detailing, sleekness, and shine—ideal before events or when you want a long-lasting polished style.",
      },
      {
        name: "Blow Dry with Iron",
        duration: "45 min",
        price: "$75",
        description: "A smooth blow-dry enhanced with precision iron finishing for a sleek, glossy result with elevated definition and hold.",
      },
      {
        name: "Updo",
        duration: "60 min",
        price: "$150",
        description: "An elegant, occasion-focused updo designed for weddings, celebrations, and formal events with secure structure and refined detail.",
      },
    ],
  },
  {
    id: "haircuts",
    title: "Haircuts",
    subtitle: "Thoughtful cutting services shaped around face balance, lifestyle, and day-to-day styling ease.",
    services: [
      {
        name: "Men's Haircut",
        duration: "30 min",
        price: "$45",
        description: "A tailored men's haircut crafted to suit your features, routine, and personal style with clean, intentional finishing.",
      },
      {
        name: "Women's Haircut",
        duration: "60 min",
        price: "$120",
        description: "A personalized haircut and shape refinement designed to complement your face shape and support versatile at-home styling.",
      },
      {
        name: "Girl's Haircut (Ages 10–15)",
        duration: "45 min",
        price: "$70",
        description: "A gentle, age-appropriate haircut for young guests with attention to comfort, natural movement, and easy maintenance.",
      },
      {
        name: "Clean-Up Cut",
        duration: "30 min",
        price: "$70",
        description: "A quick refresh trim to maintain your current shape, remove split ends, and keep hair looking healthy and polished between major cuts.",
      },
    ],
  },
  {
    id: "color-services",
    title: "Color Services",
    subtitle: "Dimensional and all-over color options customized by tone goals, coverage needs, and maintenance preferences.",
    services: [
      {
        name: "L'Oréal INOA Color",
        duration: "75 min",
        price: "$120",
        description: "A premium INOA color application for rich, even tone and luminous shine while helping preserve overall hair comfort.",
      },
      {
        name: "L'Oréal Majirel Color",
        duration: "75 min",
        price: "$100",
        description: "Long-wear Majirel color service delivering vibrant depth, dependable coverage, and a smooth, radiant finish.",
      },
      {
        name: "Highlights",
        duration: "180 min",
        price: "$225–$350",
        description: "A dimensional highlighting service to add brightness and movement with a customized placement strategy.",
        consultationRequired: true,
      },
      {
        name: "Balayage",
        duration: "180 min",
        price: "$225–$350",
        description: "A soft, blended balayage technique for natural-looking transitions, depth, and lived-in elegance.",
        consultationRequired: true,
      },
      {
        name: "Partial Highlights",
        duration: "120 min",
        price: "$225",
        description: "Targeted highlights focused on key zones for subtle brightness and dimension without a full-head color commitment.",
        consultationRequired: true,
      },
      {
        name: "Partial Balayage",
        duration: "120 min",
        price: "$225",
        description: "Selective balayage placement that softly lifts and contours specific areas for a naturally enhanced result.",
        consultationRequired: true,
      },
    ],
  },
  {
    id: "treatments",
    title: "Treatments",
    subtitle: "Conditioning and smoothing services designed to restore softness, strength, and long-lasting manageability.",
    services: [
      {
        name: "Nourishing Treatment",
        duration: "15 min",
        price: "$35",
        description: "A conditioning boost that improves softness, shine, and manageability while supporting healthier-looking hair.",
      },
      {
        name: "Keratin Complex",
        duration: "180 min",
        price: "$350",
        description: "A smoothing treatment to reduce frizz, enhance shine, and improve daily styling control with lasting results.",
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "Salon Services | TeamHairPro",
  description: "Explore Team Hair Pro salon services including cuts, styling, color, and restorative treatments with transparent pricing and timing.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#111111] antialiased">
      <ContactBanner />
      <Navbar overlay />

      <main>
        <section className="border-b border-[rgba(0,0,0,0.1)] px-5 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-16">
          <div className="mx-auto w-full max-w-3xl">
            <div className="inline-flex border border-[#111] bg-[#111] px-2 py-0.5">
              <span className="text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-[#f2eee9]">Hair Service Descriptions</span>
            </div>

            <h1 className="mt-6 text-[clamp(1.95rem,4.2vw,3.1rem)] font-medium uppercase tracking-[0.07em] text-[#111111]">Our Services</h1>
            <p className="mt-4 max-w-2xl text-[0.92rem] leading-7 text-[#2d2d2d] sm:text-[0.97rem]">
              Team Hair Pro offers tailored salon services designed around your hair goals, schedule, and maintenance preferences.
            </p>

            <nav aria-label="Service categories" className="mt-6 flex flex-wrap gap-2.5">
              {serviceCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`#${category.id}`}
                  className="inline-flex border border-[rgba(0,0,0,0.24)] bg-transparent px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#111111] transition hover:bg-[rgba(0,0,0,0.04)]"
                >
                  {category.title}
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-6 sm:py-14">
          <div className="mx-auto w-full max-w-3xl">
            {serviceCategories.map((category, categoryIndex) => (
              <section key={category.id} id={category.id} className={`scroll-mt-32 ${categoryIndex > 0 ? "mt-10" : ""}`}>
                <header className="border-b border-[rgba(0,0,0,0.16)] pb-3">
                  <h2 className="text-[1.5rem] font-medium uppercase tracking-[0.08em] text-[#111111]">{category.title}</h2>
                  <p className="mt-2 text-[0.72rem] leading-5 tracking-[0.01em] text-[#3f3f3f]">{category.subtitle}</p>
                </header>

                <div className="divide-y divide-[rgba(0,0,0,0.12)]">
                  {category.services.map((service) => (
                    <article key={service.name} className="py-5 sm:py-6">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <h3 className="text-[1.06rem] font-medium uppercase leading-6 tracking-[0.1em] text-[#111111]">{service.name}</h3>
                          <p className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.08em] text-[#444444]">{service.duration}</p>
                        </div>
                        <p className="shrink-0 text-right text-[0.83rem] font-semibold tracking-[0.04em] text-[#111111]">{service.price}</p>
                      </div>

                      <p className="mt-3 max-w-2xl text-[0.72rem] leading-[1.6] text-[#2f2f2f] sm:text-[0.74rem]">{service.description}</p>

                      {service.consultationRequired ? (
                        <div className="mt-3 inline-flex items-center gap-2 border border-[rgba(0,0,0,0.2)] bg-[rgba(0,0,0,0.03)] px-2.5 py-1">
                          <span className="text-[0.55rem] font-semibold uppercase tracking-[0.11em] text-[#2f2f2f]">Consultation Required</span>
                        </div>
                      ) : null}
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="px-5 pb-16 sm:px-6 sm:pb-20">
          <div className="mx-auto w-full max-w-3xl border border-[rgba(0,0,0,0.17)] bg-[#fcfcfc] px-5 py-6 sm:px-6 sm:py-7">
            <SectionLabel>CUSTOM COLOR CONSULTATION</SectionLabel>
            <h2 className="mt-5 text-[1.4rem] font-medium uppercase leading-tight tracking-[0.07em] text-[#111111]">Need a custom color transformation?</h2>
            <p className="mt-4 max-w-2xl text-[0.82rem] leading-6 text-[#2f2f2f] sm:text-[0.87rem]">
              Book a consultation for highlights and balayage services to confirm your personalized plan, final timing, and pricing.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link
                href="tel:2019271711"
                className="inline-flex items-center justify-center border border-[#14110f] bg-[#14110f] px-5 py-2.5 text-[0.61rem] font-semibold uppercase tracking-[0.16em] text-[#f2ece5] transition hover:bg-[#090807]"
              >
                Schedule Now
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center border border-[rgba(0,0,0,0.3)] px-5 py-2.5 text-[0.61rem] font-semibold uppercase tracking-[0.16em] text-[#1d1917] transition hover:bg-[rgba(0,0,0,0.05)]"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
