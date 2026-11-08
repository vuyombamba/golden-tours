interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
}

export default function SectionHeading({ eyebrow, title, description, light, align = "left" }: Props) {
  const alignCls = align === "center" ? "mx-auto text-center items-center" : "";
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignCls}`}>
      {eyebrow && (
        <span className={`text-sm font-semibold ${light ? "text-gold" : "text-gold-bronze"}`}>{eyebrow}</span>
      )}
      <h2 className={`text-3xl font-extrabold leading-tight tracking-tight md:text-5xl ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed md:text-lg ${light ? "text-white/70" : "text-navy/60"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
