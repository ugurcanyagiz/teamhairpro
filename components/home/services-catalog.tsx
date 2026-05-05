"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

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

function normalize(value: string) {
  return value.toLocaleLowerCase("en-US").trim();
}

export function ServicesCatalog({ serviceCategories }: { serviceCategories: ServiceCategory[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    const normalizedQuery = normalize(searchQuery);

    if (!normalizedQuery) {
      return serviceCategories;
    }

    return serviceCategories
      .map((category) => {
        const categoryMatches = normalize(category.title).includes(normalizedQuery) || normalize(category.subtitle).includes(normalizedQuery);
        const services = category.services.filter((service) =>
          [service.name, service.description, service.duration, service.price].some((field) => normalize(field).includes(normalizedQuery)),
        );

        if (categoryMatches) {
          return {
            ...category,
            services: category.services,
          };
        }

        return {
          ...category,
          services,
        };
      })
      .filter((category) => category.services.length > 0);
  }, [searchQuery, serviceCategories]);

  return (
    <>
      <section className="border-b border-[rgba(0,0,0,0.1)] px-5 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-16">
        <div className="mx-auto w-full max-w-3xl">
          <div className="inline-flex border border-[#111] bg-[#111] px-2 py-0.5">
            <span className="text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-[#f2eee9]">Hair Service Descriptions</span>
          </div>

          <h1 className="mt-6 text-[clamp(1.95rem,4.2vw,3.1rem)] font-medium uppercase tracking-[0.07em] text-[#14110f]">Our Services</h1>
          <p className="mt-4 max-w-2xl text-[0.92rem] leading-7 text-[#403833] sm:text-[0.97rem]">
            Team Hair Pro offers tailored salon services designed around your hair goals, schedule, and maintenance preferences.
          </p>

          <div className="mt-6">
            <label htmlFor="services-search" className="mb-2 block text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#1a1614]">
              Search Services
            </label>
            <input
              id="services-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search by service name, description, duration, or price"
              className="w-full border border-[rgba(0,0,0,0.24)] bg-white px-3 py-2 text-[0.8rem] text-[#1a1614] outline-none transition placeholder:text-[#7d736c] focus:border-[#14110f]"
            />
          </div>

          <nav aria-label="Service categories" className="mt-6 flex flex-wrap gap-2.5">
            {filteredCategories.map((category) => (
              <Link
                key={category.id}
                href={`#${category.id}`}
                className="inline-flex border border-[rgba(0,0,0,0.24)] bg-transparent px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#1a1614] transition hover:bg-[rgba(0,0,0,0.04)]"
              >
                {category.title}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-6 sm:py-14">
        <div className="mx-auto w-full max-w-3xl">
          {filteredCategories.length === 0 ? (
            <div className="border border-[rgba(0,0,0,0.16)] bg-[#f2ece5] px-4 py-5">
              <p className="text-[0.78rem] text-[#3f3833]">No services match your search. Try another keyword.</p>
            </div>
          ) : null}

          {filteredCategories.map((category, categoryIndex) => (
            <section key={category.id} id={category.id} className={`scroll-mt-32 ${categoryIndex > 0 ? "mt-10" : ""}`}>
              <header className="border-b border-[rgba(0,0,0,0.16)] pb-3">
                <h2 className="text-[1.5rem] font-medium uppercase tracking-[0.08em] text-[#14110f]">{category.title}</h2>
                <p className="mt-2 text-[0.72rem] leading-5 tracking-[0.01em] text-[#6a5f56]">{category.subtitle}</p>
              </header>

              <div className="divide-y divide-[rgba(0,0,0,0.12)]">
                {category.services.map((service) => (
                  <article key={service.name} className="py-5 sm:py-6">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h3 className="text-[1.06rem] font-medium uppercase leading-6 tracking-[0.1em] text-[#14110f]">{service.name}</h3>
                        <p className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.08em] text-[#534a43]">{service.duration}</p>
                      </div>
                      <p className="shrink-0 text-right text-[0.83rem] font-semibold tracking-[0.04em] text-[#14110f]">{service.price}</p>
                    </div>

                    <p className="mt-3 max-w-2xl text-[0.72rem] leading-[1.6] text-[#3e3732] sm:text-[0.74rem]">{service.description}</p>

                    {service.consultationRequired ? (
                      <div className="mt-3 inline-flex items-center gap-2 border border-[rgba(0,0,0,0.2)] bg-[rgba(0,0,0,0.03)] px-2.5 py-1">
                        <span className="text-[0.55rem] font-semibold uppercase tracking-[0.11em] text-[#4a3f37]">Consultation Required</span>
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
