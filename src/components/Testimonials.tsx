"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/data/testimonials";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const total = TESTIMONIALS.length;

  const go = useCallback(
    (next: number, d: number) => {
      setDir(d);
      setIdx((next + total) % total);
    },
    [total]
  );

  // Gentle auto-advance; pauses on interaction via reset of timer
  useEffect(() => {
    const t = setInterval(() => go(idx + 1, 1), 7000);
    return () => clearInterval(t);
  }, [idx, go]);

  const t = TESTIMONIALS[idx];

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="glass relative min-h-[260px] overflow-hidden rounded-[28px] p-7 sm:min-h-[240px] sm:p-10">
        <div className="orb -right-16 -top-16 h-48 w-48 bg-fx-orange/15" aria-hidden="true" />
        <AnimatePresence mode="wait" custom={dir}>
          <motion.figure
            key={idx}
            custom={dir}
            initial={{ opacity: 0, x: 40 * dir }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 * dir }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="mb-5 flex gap-1" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, s) => (
                <svg key={s} viewBox="0 0 20 20" className="h-4 w-4 fill-amber-400" aria-hidden="true">
                  <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.9L10 14.9 4.8 17.7l1-5.9L1.5 7.7l5.9-.9L10 1.5z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-lg font-medium leading-relaxed tracking-tight text-white sm:text-xl">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-5 text-sm font-semibold text-fx-orange">
              {t.role}
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* Controls — 48px touch targets */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={() => go(idx - 1, -1)}
          aria-label="Previous testimonial"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-white transition-colors hover:border-fx-orange/50"
        >
          ←
        </button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > idx ? 1 : -1)}
              aria-label={`Go to testimonial ${i + 1}`}
              className="flex h-12 items-center px-1"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  i === idx ? "w-8 bg-fx-orange" : "w-2 bg-white/20"
                }`}
              />
            </button>
          ))}
        </div>
        <button
          onClick={() => go(idx + 1, 1)}
          aria-label="Next testimonial"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-white transition-colors hover:border-fx-orange/50"
        >
          →
        </button>
      </div>
    </div>
  );
}
