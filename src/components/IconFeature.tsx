import { Compass, Plane, Car, Briefcase, Heart, Users, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

const icons: Record<string, LucideIcon> = { Compass, Plane, Car, Briefcase, Heart, Users };

interface Props {
  icon: string;
  title: string;
  description: string;
  to: string;
}

export default function IconFeature({ icon, title, description, to }: Props) {
  const Icon = icons[icon] ?? Compass;
  return (
    <Link
      to={to}
      className="group flex flex-col items-start gap-4 rounded-2xl border border-navy/8 bg-white p-7 shadow-sm shadow-navy/5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/10"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-gold-bronze text-navy transition-transform group-hover:scale-105">
        <Icon size={26} strokeWidth={2} />
      </span>
      <h3 className="text-lg font-bold text-navy">{title}</h3>
      <p className="text-sm leading-relaxed text-navy/60">{description}</p>
      <span className="mt-1 text-sm font-semibold text-gold-bronze">Learn more →</span>
    </Link>
  );
}
