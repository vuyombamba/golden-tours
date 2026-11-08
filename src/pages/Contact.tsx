import { useLocation } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import QuoteForm from "../components/QuoteForm";
import { business } from "../data/content";

interface LocationState {
  packageType?: string;
}

export default function Contact() {
  const location = useLocation();
  const state = (location.state ?? {}) as LocationState;

  return (
    <>
      <section className="bg-navy pb-16 pt-32 text-white md:pt-40">
        <div className="container-wide">
          <SectionHeading light eyebrow="Contact" title="Request a Quote." description="Tell us about your school trip and we'll get back to you with a tailored quote." />
        </div>
      </section>

      <section className="bg-offwhite py-20">
        <div className="container-wide grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-8">
            <div className="rounded-2xl bg-white p-8">
              <h3 className="text-lg font-bold text-navy">Get in touch</h3>
              <ul className="mt-5 space-y-4 text-sm text-navy/70">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-gold-bronze" />
                  <a href={business.phoneHref} className="hover:text-navy">{business.phone}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-gold-bronze" />
                  <a href={`mailto:${business.email}`} className="hover:text-navy">{business.email}</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-gold-bronze" />
                  {business.address}
                </li>
              </ul>
            </div>
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl bg-[#25D366] p-6 text-center font-semibold text-white transition-opacity hover:opacity-90"
            >
              Enquire on WhatsApp instead
            </a>
          </div>

          <QuoteForm defaultPackage={state.packageType} />
        </div>
      </section>
    </>
  );
}
