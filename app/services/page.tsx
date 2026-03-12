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
    <div className="min-h-screen bg-[#f5f2ee] text-[#201d1b] antialiased">
      <ContactBanner />
      <Navbar overlay />

      <main>
        <section className="border-b border-[rgba(0,0,0,0.08)] px-5 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <SectionLabel>SALON SERVICES</SectionLabel>
            <h1 className="mt-8 text-[clamp(2rem,4.6vw,3.6rem)] font-medium leading-[1.08] tracking-[0.03em] text-[#161311]">Our Services</h1>
            <p className="mt-6 max-w-3xl text-[1.02rem] leading-8 text-[#4f4944] sm:text-lg">
              Team Hair Pro offers tailored hair and beauty services designed around your goals, hair type, and lifestyle. Browse by category to compare timing,
              pricing, and treatment options at a glance.
            </p>

            <nav aria-label="Service categories" className="mt-10 flex flex-wrap gap-2.5 sm:gap-3">
              {serviceCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`#${category.id}`}
                  className="inline-flex rounded-full border border-[rgba(29,22,18,0.16)] bg-[#f8f4ef] px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#2f2925] transition duration-300 hover:border-[rgba(29,22,18,0.3)] hover:bg-[#f1e9e1]"
                >
                  {category.title}
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-6 sm:py-18">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-9 sm:gap-11">
            {serviceCategories.map((category) => (
              <section key={category.id} id={category.id} className="scroll-mt-32 rounded-3xl border border-[rgba(0,0,0,0.08)] bg-[#f7f4f0] p-5 shadow-[0_8px_26px_rgba(25,19,16,0.05)] sm:p-7 lg:p-8">
                <header className="border-b border-[rgba(0,0,0,0.08)] pb-5 sm:pb-6">
                  <h2 className="text-[clamp(1.4rem,2.4vw,2rem)] font-medium tracking-[0.02em] text-[#171311]">{category.title}</h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[#5b534c] sm:text-base">{category.subtitle}</p>
                </header>

                <div className="mt-5 grid gap-3.5 sm:mt-6 sm:gap-4">
                  {category.services.map((service) => (
                    <article key={service.name} className="rounded-2xl border border-[rgba(0,0,0,0.09)] bg-[#fbf9f6] p-4 transition duration-300 hover:border-[rgba(33,27,23,0.18)] sm:p-5">
                      <div className="flex flex-col gap-3 sm:gap-3.5">
                        <div className="flex flex-wrap items-start justify-between gap-2.5">
                          <h3 className="text-lg font-medium tracking-[0.01em] text-[#181310] sm:text-[1.23rem]">{service.name}</h3>
                          {service.consultationRequired ? (
                            <span className="inline-flex rounded-full border border-[rgba(122,78,49,0.24)] bg-[#efe1d3] px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[#6b4c37]">
                              Consultation Required
                            </span>
                          ) : null}
                        </div>

                        <div className="flex flex-wrap gap-x-5 gap-y-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#6d6258] sm:gap-x-6">
                          <span>Duration: {service.duration}</span>
                          <span>Price: {service.price}</span>
                        </div>

                        <p className="text-sm leading-7 text-[#4b4440] sm:text-[0.96rem]">{service.description}</p>
                        {service.consultationRequired ? (
                          <p className="text-xs leading-6 tracking-[0.02em] text-[#68584c]">Final price and timing are confirmed during your consultation based on hair length, density, and desired result.</p>
                        ) : null}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="px-5 pb-18 sm:px-6 sm:pb-24">
          <div className="mx-auto w-full max-w-6xl rounded-[1.8rem] border border-[rgba(0,0,0,0.12)] bg-[linear-gradient(130deg,#1f1915,#2d241e)] p-7 text-[#f5ede4] shadow-[0_20px_60px_rgba(18,14,12,0.35)] sm:p-10">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[#d9c1ad]">Custom Color Consultation</p>
            <h2 className="mt-4 text-[clamp(1.6rem,3.2vw,2.5rem)] font-medium tracking-[0.02em]">Need a custom color transformation?</h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-[#efe3d8] sm:text-base">
              For highlights and balayage services, we recommend scheduling a consultation first. Your stylist will create a personalized color plan and confirm
              exact timing and pricing before your appointment.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="tel:2019271711"
                className="inline-flex items-center justify-center rounded-full border border-[#f3e7da] bg-[#f3e7da] px-7 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#1e1713] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ead9c8]"
              >
                Book Consultation
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(245,237,228,0.5)] px-7 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#f5ede4] transition duration-300 hover:border-[#f5ede4] hover:bg-[rgba(245,237,228,0.08)]"
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
