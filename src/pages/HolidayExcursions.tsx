import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { holidayExcursions } from "../data/content";

export default function HolidayExcursions() {
  return (
    <>
      <section className="bg-navy pb-16 pt-32 text-white md:pt-40">
        <div className="container-wide">
          <SectionHeading
            light
            eyebrow="Holiday Excursions"
            title="Multi-day group trips."
            description="Fully arranged holiday packages for school groups — accommodation, meals and the key excursions included."
          />
        </div>
      </section>

      <section className="bg-offwhite py-20">
        <div className="container-wide space-y-16">
          {holidayExcursions.map((h, i) => (
            <div key={h.destination} className={`grid gap-10 md:grid-cols-2 md:items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="overflow-hidden rounded-2xl">
                <img src={h.image} alt={h.destination} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-gold-bronze">{h.nights} Nights</span>
                <h3 className="mt-1 text-2xl font-bold text-navy md:text-3xl">{h.destination}</h3>
                <ul className="mt-5 space-y-2">
                  {h.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                      <Check size={16} className="mt-0.5 shrink-0 text-gold-bronze" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 space-y-1">
                  {h.pricing.map((p) => (
                    <p key={p.label} className="text-sm">
                      <span className="font-bold text-navy">{p.price}</span>{" "}
                      <span className="text-navy/50">— {p.label}</span>
                    </p>
                  ))}
                </div>
                <Link
                  to="/contact"
                  state={{ packageType: "Holiday Excursion", destination: h.destination }}
                  className="btn-gold mt-6 inline-flex"
                >
                  Enquire about this trip
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
