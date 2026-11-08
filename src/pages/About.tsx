import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { business } from "../data/content";

export default function About() {
  return (
    <>
      <section className="relative flex h-[55vh] min-h-[420px] items-end bg-navy-deep">
        <img
          src="https://images.unsplash.com/photo-1577948000111-9c970dfe3743?q=80&w=2000&auto=format&fit=crop"
          alt="Golden Tours guide and school group"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
        <div className="container-wide relative z-10 pb-16">
          <p className="eyebrow text-gold">About Us</p>
          <h1 className="mt-3 text-4xl font-extrabold text-white md:text-6xl">Golden Tours.</h1>
        </div>
      </section>

      <section className="bg-offwhite py-24 md:py-32">
        <div className="container-wide grid gap-14 md:grid-cols-2 md:items-center">
          <SectionHeading
            eyebrow="Our Approach"
            title="School trips, organised with care."
            description={`With over ${business.yearsExperience} years' experience, Golden Tours organises curriculum-linked school excursions, holiday trips, matric events and group transport across ${business.region} and beyond. We handle the logistics — transport, timing and bookings — so staff can focus on the learners.`}
          />
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=1200&auto=format&fit=crop"
              alt="School group on tour"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-navy py-24 text-white md:py-32">
        <div className="container-wide grid gap-10 md:grid-cols-3">
          {[
            { title: `${business.yearsExperience}+ Years' Experience`, body: "A long-standing track record of organising school excursions and group trips." },
            { title: "Curriculum-Linked", body: "Excursions matched to subject and grade, from Natural Sciences to Social Science." },
            { title: "End-to-End Planning", body: "Transport, bookings and logistics handled so your staff don't have to." },
          ].map((b) => (
            <div key={b.title} className="border-t border-white/15 pt-6">
              <h3 className="text-xl font-bold">{b.title}</h3>
              <p className="mt-2 text-sm text-white/60">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-deep py-24 text-center text-white md:py-32">
        <div className="container-wide">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Let's Plan Your Next Journey.</h2>
          <Link to="/contact" className="btn-gold mt-8 inline-flex">Request a Quote</Link>
        </div>
      </section>
    </>
  );
}
