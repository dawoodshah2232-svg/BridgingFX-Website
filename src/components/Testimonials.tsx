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

  // Gentle auto-advance; pauses while hovered
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(idx + 1, 1), 7000);
    return () => clearInterval(t);
  }, [idx, go, paused]);

  const t = TESTIMONIALS[idx];

  return (
    <div
      className="relative mx-auto max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="glass relative min-h-[280px] overflow-hidden rounded-[28px] p-7 sm:min-h-[260px] sm:p-10">
        <div className="orb -right-16 -top-16 h-48 w-48 bg-fx-orange/15" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-3 left-5 select-none font-serif text-[96px] leading-none text-fx-orange/15 sm:left-7"
          aria-hidden="true"
        >
          &ldquo;
        </div>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.figure
            key={idx}
            custom={dir}
            initial={{ opacity: 0, x: 40 * dir }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 * dir }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative pt-6"
          >
            <blockquote className="text-lg font-medium leading-relaxed tracking-tight text-white sm:text-xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="h-px w-8 bg-fx-orange/70" aria-hidden="true" />
              <span className="text-sm font-semibold text-fx-orange">{t.role}</span>
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
