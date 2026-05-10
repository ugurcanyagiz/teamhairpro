import Link from "next/link";
import { ServicesCatalog } from "@/components/home/services-catalog";
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
    <div className="min-h-screen bg-[#f5f2ee] text-[#171412] antialiased">
      <ContactBanner />
      <Navbar />

      <main>
        <ServicesCatalog serviceCategories={serviceCategories} />

        <section className="px-5 pb-16 sm:px-6 sm:pb-20">
          <div className="mx-auto w-full max-w-3xl border border-[rgba(0,0,0,0.17)] bg-[#f2ece5] px-5 py-6 sm:px-6 sm:py-7">
            <SectionLabel>CUSTOM COLOR CONSULTATION</SectionLabel>
            <h2 className="mt-5 text-[1.4rem] font-medium uppercase leading-tight tracking-[0.07em] text-[#15110f]">Need a custom color transformation?</h2>
            <p className="mt-4 max-w-2xl text-[0.82rem] leading-6 text-[#3f3833] sm:text-[0.87rem]">
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
