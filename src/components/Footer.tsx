import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { business, navLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-4">
        <div>
          <img src="/images/golden-tours-logo.png" alt="Golden Tours" className="h-14 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            School excursions, holiday tours and group transport across {business.region} and beyond,
            backed by {business.yearsExperience}+ years of experience.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Explore</h4>
          <ul className="mt-4 space-y-2">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-white/60 transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-gold" />
              <a href={business.phoneHref} className="hover:text-gold">{business.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-gold" />
              <a href={`mailto:${business.email}`} className="hover:text-gold">{business.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              {business.address}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Legal</h4>
          <ul className="mt-4 space-y-2">
            <li><Link to="/privacy" className="text-sm text-white/60 hover:text-gold">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-sm text-white/60 hover:text-gold">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="container-wide text-xs text-white/40">
          © {new Date().getFullYear()} Golden Tours. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
