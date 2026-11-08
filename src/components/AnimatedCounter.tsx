import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  to: number;
  suffix?: string;
  label: string;
  durationMs?: number;
}

export default function AnimatedCounter({ to, suffix = "", label, durationMs = 1400 }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let frame: number;
    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / durationMs);
      setValue(Math.round(progress * to));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, durationMs]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-5xl font-extrabold tracking-tight text-gold md:text-6xl">
        {value}{suffix}
      </div>
      <p className="mt-2 text-sm font-medium text-white/60">{label}</p>
    </motion.div>
  );
}
