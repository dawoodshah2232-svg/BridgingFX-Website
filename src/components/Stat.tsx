"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";

/** Animated number counter — starts when scrolled into view. Mobile-safe.
 * Pass `animated={false}` for values that shouldn't count up (e.g. a year). */
export default function Stat({
  value,
  suffix = "",
  label,
  sub,
  animated = true,
}: {
  value: number;
  suffix?: string;
  label: string;
  sub?: string;
  animated?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1600, bounce: 0 });

  useEffect(() => {
    if (inView && animated) mv.set(value);
  }, [inView, value, mv, animated]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) {
        const el = ref.current.querySelector("[data-num]");
        if (el) el.textContent = `${Math.round(v)}${suffix}`;
      }
    });
    return unsub;
  }, [spring, suffix]);

  const labelBlock = (
    <>
      <span className="text-sm font-semibold text-white sm:text-base">{label}</span>
      {sub && <span className="max-w-[220px] text-xs leading-relaxed text-slate-500 sm:text-sm">{sub}</span>}
    </>
  );

  if (!animated) {
    return (
      <div className="flex flex-col items-center gap-1.5 text-center">
        <span className="gradient-text display text-4xl tabular-nums sm:text-5xl lg:text-6xl">
          {value}
          {suffix}
        </span>
        {labelBlock}
      </div>
    );
  }

  return (
    <div ref={ref} className="flex flex-col items-center gap-1.5 text-center">
      <motion.span
        data-num
        initial={{ opacity: 0, scale: 0.92 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="gradient-text display text-4xl tabular-nums sm:text-5xl lg:text-6xl"
      >
        0{suffix}
      </motion.span>
      {labelBlock}
    </div>
  );
}
