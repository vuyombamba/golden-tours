import { MessageCircle, MapPin } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { transportRoutes, fleet, business } from "../data/content";

export default function Transport() {
  return (
    <>
      <section className="bg-navy pb-16 pt-32 text-white md:pt-40">
        <div className="container-wide">
          <SectionHeading
            light
            eyebrow="Transport"
            title="Buses, and Gautrain-combination routes."
            description="Our own bus fleet, paired with Gautrain connections for specific routes into Sandton and Johannesburg."
          />
        </div>
      </section>

      <section className="bg-offwhite py-20">
        <div className="container-wide">
          <SectionHeading eyebrow="Our Fleet" title="Vehicles matched to your group size." />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {fleet.map((f) => (
              <div key={f.name} className="rounded-2xl border border-navy/8 bg-white p-6">
                <h3 className="text-lg font-bold text-navy">{f.name}</h3>
                <p className="mt-2 text-sm text-navy/60">{f.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="container-wide mt-16">
          <SectionHeading eyebrow="Gautrain-Combination Routes" title="Specific tours with Gautrain transfers." />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {transportRoutes.map((r) => (
              <div key={r.title} className="rounded-2xl border border-navy/8 bg-white p-7">
                <h3 className="text-lg font-bold text-navy">{r.title}</h3>
                <p className="mt-2 text-sm text-navy/70">{r.route}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-gold-bronze">{r.grade}</p>
                <a
                  href={business.whatsappHref + r.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-dark mt-5 inline-flex"
                >
                  <MessageCircle size={16} /> Enquire on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="container-wide mt-16 flex flex-col items-center gap-2 rounded-2xl bg-navy p-10 text-center text-white">
          <MapPin className="text-gold" size={22} />
          <p className="text-sm text-white/70">Based at</p>
          <p className="text-lg font-semibold">{business.address}</p>
        </div>
      </section>
    </>
  );
}
