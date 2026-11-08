import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { dayPrograms, matricDinners, staffFunction, business } from "../data/content";

export default function Events() {
  return (
    <>
      <section className="bg-navy pb-16 pt-32 text-white md:pt-40">
        <div className="container-wide">
          <SectionHeading
            light
            eyebrow="Events & Programs"
            title="Camps, dances and functions."
            description="From leadership camps to the matric dinner, organised with the same care as a day excursion."
          />
        </div>
      </section>

      {/* DAY PROGRAMS & CAMPS */}
      <section className="bg-offwhite py-20">
        <div className="container-wide">
          <SectionHeading eyebrow="Programs & Camps" title="Leadership, awareness and study camps." />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {dayPrograms.map((p) => (
              <div key={p.title} className="rounded-2xl border border-navy/8 bg-white p-7">
                <span className="text-xs font-semibold uppercase tracking-wide text-gold-bronze">{p.tag}</span>
                <h3 className="mt-1 text-xl font-bold text-navy">{p.title}</h3>
                {p.grade && <p className="mt-1 text-sm text-navy/50">{p.grade}</p>}
                {p.venue && <p className="mt-1 text-sm font-medium text-navy/70">{p.venue}</p>}
                <ul className="mt-4 space-y-1.5 text-sm text-navy/70">
                  {p.details.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span className="text-gold-bronze">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-navy/50">
                  {p.dates && <span>{p.dates}</span>}
                  {p.time && <span>{p.time}</span>}
                </div>
                {p.price && <p className="mt-3 text-sm font-bold text-navy">{p.price}</p>}
                {p.cta === "whatsapp" ? (
                  <a
                    href={business.whatsappHref + p.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-dark mt-5 inline-flex"
                  >
                    <MessageCircle size={16} /> Enquire on WhatsApp
                  </a>
                ) : (
                  <Link to="/contact" state={{ packageType: p.title }} className="btn-outline-dark mt-5 inline-flex">
                    Request a Quote
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATRIC DINNER */}
      <section className="bg-navy py-20 text-white">
        <div className="container-wide">
          <SectionHeading light eyebrow="Matric Dinner / Farewell" title="Three venue options." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {matricDinners.map((v) => (
              <div key={v.venue} className="rounded-2xl bg-white/5 p-6">
                <h3 className="text-lg font-bold text-white">{v.venue}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-white/60">
                  {v.details.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span className="text-gold">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-bold text-gold">{v.price}</p>
                <Link
                  to="/contact"
                  state={{ packageType: "Matric Dinner / Farewell", venue: v.venue }}
                  className="btn-outline mt-5 inline-flex"
                >
                  Enquire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STAFF FUNCTION */}
      <section className="bg-offwhite py-20">
        <div className="container-wide max-w-2xl">
          <SectionHeading eyebrow="Staff Function" title={staffFunction.title} />
          <ul className="mt-5 space-y-2">
            {staffFunction.details.map((d) => (
              <li key={d} className="flex gap-2 text-sm text-navy/70">
                <span className="text-gold-bronze">•</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-base font-bold text-navy">{staffFunction.price}</p>
          <Link
            to="/contact"
            state={{ packageType: "Staff Year-End Function" }}
            className="btn-gold mt-6 inline-flex"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
