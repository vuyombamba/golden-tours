import { Mail, Phone, Clock } from "lucide-react";
import { business } from "../data/content";

export default function TopBar() {
  return (
    <div className="hidden bg-navy-deep text-white/70 lg:block">
      <div className="container-wide flex h-10 items-center justify-between text-xs">
        <div className="flex items-center gap-6">
          <a href={business.phoneHref} className="flex items-center gap-1.5 hover:text-gold">
            <Phone size={13} /> {business.phone}
          </a>
          <a href={`mailto:${business.email}`} className="flex items-center gap-1.5 hover:text-gold">
            <Mail size={13} /> {business.email}
          </a>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock size={13} />
          <span>Enquiries by appointment — request a quote anytime</span>
        </div>
      </div>
    </div>
  );
}
