"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { mailtoFor } from "@/data/site";

/**
 * Compact cinematic page hero — mobile-first.
 * Big but never overflowing: fluid clamp scale, one-screen presence.
 * Optional `image` renders a cinematic banner below the copy.
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  cta,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  cta?: { label: string; href: string };
  image?: { src: string; alt: string };
}) {
  return (
    <section className="relative overflow-hidden pb-14 pt-32 sm:pb-20 sm:pt-40">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="orb left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/3 bg-fx-orange/20 sm:h-[420px] sm:w-[420px]" aria-hidden="true" />
      <div className="orb -left-24 top-1/3 h-56 w-56 bg-blue-600/10 sm:h-72 sm:w-72" aria-hidden="true" />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center"
        >
          <span className="eyebrow justify-center">
            <span className="inline-block h-px w-8 bg-fx-orange/70" aria-hidden="true" />
            {eyebrow}
            <span className="inline-block h-px w-8 bg-fx-orange/70" aria-hidden="true" />
          </span>
          <h1 className="display text-4xl leading-[1.06] sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {description}
          </p>
          {cta && (
            <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href={cta.href} className="btn-primary w-full !py-4 sm:w-auto">
                {cta.label}
              </Link>
              <a
                href={mailtoFor(`Enquiry — ${eyebrow}`)}
                className="btn-ghost w-full !py-4 sm:w-auto"
              >
                Talk to an expert
              </a>
            </div>
          )}
        </motion.div>

        {image && (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mt-12 max-w-5xl sm:mt-16"
          >
            <div
              className="pointer-events-none absolute -inset-px rounded-[28px] bg-gradient-to-b from-fx-orange/40 via-white/10 to-transparent"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[28px] shadow-card">
              <Image
                src={image.src}
                alt={image.alt}
                width={1400}
                height={788}
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 90vw, 1024px"
                className="h-auto w-full object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
