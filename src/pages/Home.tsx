import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Plane, PartyPopper, Bus, ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import QuickEnquiryBar from "../components/QuickEnquiryBar";
import AnimatedCounter from "../components/AnimatedCounter";
import Newsletter from "../components/Newsletter";
import { holidayExcursions, schoolExcursions, galleryImages, business } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const categories = [
  {
    title: "School Excursions",
    description: "Curriculum-linked day trips across Science, Tourism, Social Science and Geography.",
    icon: GraduationCap,
    to: "/school-excursions",
  },
  {
    title: "Holiday Excursions",
    description: "Multi-day group trips to Durban, Mpumalanga and Cape Town.",
    icon: Plane,
    to: "/holiday-excursions",
  },
  {
    title: "Events & Programs",
    description: "Leadership camps, matric study camps, matric dinners and more.",
    icon: PartyPopper,
    to: "/events",
  },
  {
    title: "Transport",
    description: "Bus fleet and Gautrain-combination routes for school groups.",
    icon: Bus,
    to: "/transport",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex h-[88vh] min-h-[600px] w-full items-center overflow-hidden bg-navy-deep">
        <img
          src="https://images.unsplash.com/photo-1577948000111-9c970dfe3743?q=80&w=2000&auto=format&fit=crop"
          alt="School group on an excursion"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/40 to-navy-deep" />
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="container-wide relative z-10 text-center">
          <p className="eyebrow mx-auto text-gold">{business.region} · School Excursions &amp; Group Tours</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl">
            Unforgettable School Journeys, Planned With Care.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/75">
            Curriculum-linked excursions, holiday trips, matric events and group transport — organised end to end.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link to="/school-excursions" className="btn-gold">Explore Excursions</Link>
            <Link to="/contact" className="btn-outline">Request a Quote</Link>
          </div>
        </motion.div>
      </section>

      <div className="container-wide">
        <QuickEnquiryBar />
      </div>

      {/* EXPERIENCE COUNTER */}
      <section className="bg-navy pb-20 pt-24 md:pt-28">
        <div className="container-wide grid grid-cols-2 gap-8 md:grid-cols-4">
          <AnimatedCounter to={business.yearsExperience} suffix="+" label="Years Experience" />
          <AnimatedCounter to={230} suffix="" label="Learners per Group (max)" />
          <AnimatedCounter to={7} suffix="" label="Subjects Covered" />
          <AnimatedCounter to={3} suffix="" label="Holiday Destinations" />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-offwhite py-24 md:py-32">
        <div className="container-wide">
          <SectionHeading eyebrow="What We Offer" title="Everything your school needs for a trip." align="center" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.title}
                to={c.to}
                className="group flex flex-col items-start gap-4 rounded-2xl border border-navy/8 bg-white p-7 shadow-sm shadow-navy/5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/10"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-gold-bronze text-navy transition-transform group-hover:scale-105">
                  <c.icon size={26} strokeWidth={2} />
                </span>
                <h3 className="text-lg font-bold text-navy">{c.title}</h3>
                <p className="text-sm leading-relaxed text-navy/60">{c.description}</p>
                <span className="mt-1 text-sm font-semibold text-gold-bronze">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SCHOOL EXCURSIONS PREVIEW */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="School Day Excursions" title="Curriculum-linked trips, by subject." />
            <Link to="/school-excursions" className="btn-outline-dark">View all excursions</Link>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {schoolExcursions.slice(0, 3).map((ex) => (
              <div key={ex.subject + ex.grade} className="rounded-2xl border border-navy/8 bg-offwhite p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-gold-bronze">{ex.grade}</span>
                <h3 className="mt-1 text-lg font-bold text-navy">{ex.subject}</h3>
                <ul className="mt-3 space-y-1 text-sm text-navy/60">
                  {ex.stops.slice(0, 2).map((s) => <li key={s}>• {s}</li>)}
                </ul>
                <Link to="/school-excursions" className="mt-4 inline-block text-sm font-semibold text-gold-bronze">
                  View details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOLIDAY EXCURSIONS */}
      <section className="bg-navy py-24 text-white md:py-32">
        <div className="container-wide">
          <SectionHeading light eyebrow="Holiday Excursions" title="Multi-day trips learners remember." align="center" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {holidayExcursions.map((h) => (
              <div key={h.destination} className="overflow-hidden rounded-2xl bg-white/5">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={h.image} alt={h.destination} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white">{h.destination}</h3>
                  <p className="mt-1 text-sm text-white/60">{h.nights} nights</p>
                  <p className="mt-3 text-sm font-semibold text-gold">{h.pricing[0].price} {h.pricing[0].label.toLowerCase()}</p>
                  <Link to="/holiday-excursions" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gold-bronze">
                    View itinerary <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="bg-offwhite py-24 md:py-32">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Gallery" title="A glimpse of the journey." />
            <Link to="/gallery" className="btn-outline-dark">View full gallery</Link>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryImages.slice(0, 8).map((src, i) => (
              <div key={i} className={`overflow-hidden rounded-xl ${i % 5 === 0 ? "col-span-2 row-span-2" : ""}`}>
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA + NEWSLETTER */}
      <section className="bg-navy-deep py-24 text-white md:py-32">
        <div className="container-wide grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Let's Plan Your School's Next Trip.</h2>
            <p className="mt-5 max-w-lg text-white/70">
              Tell us the grade, the group size and the dates — we'll take it from there.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">Request a Quote</Link>
              <Link to="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </div>
          <Newsletter />
        </div>
      </section>
    </>
  );
}
