import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  image: string;
  to: string;
}

export default function ServiceCard({ title, description, image, to }: Props) {
  return (
    <Link to={to} className="group relative block overflow-hidden rounded-2xl">
      <div className="aspect-[4/5] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6">
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="mt-1 text-sm text-white/70">{description}</p>
        </div>
        <ArrowUpRight className="mt-1 shrink-0 text-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={22} />
      </div>
    </Link>
  );
}
