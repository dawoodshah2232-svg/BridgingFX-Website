"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Faq } from "@/data/faqs";

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
      {faqs.map((f, i) => {
        const open = openIdx === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIdx(open ? null : i)}
              aria-expanded={open}
              className="flex min-h-[60px] w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-fx-orange sm:px-7"
            >
              <span className={`text-[15px] font-semibold tracking-tight sm:text-base ${open ? "text-white" : "text-slate-200"}`}>
                {f.q}
              </span>
              <motion.span
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-lg leading-none ${
                  open ? "border-fx-orange/60 bg-fx-orange/15 text-fx-orange" : "border-white/15 text-slate-400"
                }`}
                aria-hidden="true"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-6 text-sm leading-relaxed text-slate-400 sm:px-7 sm:text-[15px]">
                    {f.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
