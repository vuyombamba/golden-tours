import { Link } from "react-router-dom";
import { Clock, Users2 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { schoolExcursions } from "../data/content";

export default function SchoolExcursions() {
  return (
    <>
      <section className="bg-navy pb-16 pt-32 text-white md:pt-40">
        <div className="container-wide">
          <SectionHeading
            light
            eyebrow="School Excursions"
            title="Curriculum-linked day trips."
            description="Day excursions organised by subject, with transport, timing and group-size guidance included. Exact pricing is confirmed on request."
          />
        </div>
      </section>

      <section className="bg-offwhite py-20">
        <div className="container-wide grid gap-6 md:grid-cols-2">
          {schoolExcursions.map((ex) => (
            <div key={ex.subject + (ex.grade ?? "")} className="rounded-2xl border border-navy/8 bg-white p-7">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-navy">{ex.subject}</h3>
                {ex.grade && (
                  <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-bronze">
                    {ex.grade}
                  </span>
                )}
              </div>

              <ul className="mt-4 space-y-1.5 text-sm text-navy/70">
                {ex.stops.map((s) => (
                  <li key={s} className="flex gap-2">
                    <span className="text-gold-bronze">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-4 text-xs text-navy/50">
                {(ex.depart || ex.returnTime) && (
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {ex.depart ? `Depart ${ex.depart}` : ""}{ex.depart && ex.returnTime ? " · " : ""}
                    {ex.returnTime ? (ex.returnTime.includes(":") ? `Return ${ex.returnTime}` : ex.returnTime) : ""}
                  </span>
                )}
                {ex.learners && (
                  <span className="flex items-center gap-1.5">
                    <Users2 size={14} /> {ex.learners}
                  </span>
                )}
              </div>

              {ex.note && <p className="mt-3 text-xs italic text-navy/50">{ex.note}</p>}

              <Link
                to="/contact"
                state={{ packageType: "School Day Excursion", excursion: ex.subject }}
                className="btn-outline-dark mt-6 inline-flex"
              >
                Enquire about this excursion
              </Link>
            </div>
          ))}
        </div>

        <div className="container-wide mt-16 rounded-2xl bg-navy p-10 text-center text-white md:p-16">
          <h2 className="text-2xl font-bold md:text-3xl">Don't see your subject or grade?</h2>
          <p className="mx-auto mt-3 max-w-md text-white/70">
            We can tailor an excursion to your curriculum requirements — get in touch to discuss.
          </p>
          <Link to="/contact" className="btn-gold mt-7 inline-flex">Request a Quote</Link>
        </div>
      </section>
    </>
  );
}
