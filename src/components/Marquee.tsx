"use client";

/**
 * Infinite capabilities ticker — expo-style bordered marquee strip.
 * Uses the site's existing ticker-scroll animation; duplicated content
 * loops seamlessly, pauses on hover, and stays static for reduced motion.
 */
export default function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/[0.07] bg-ink-900/60 py-5 motion-reduce:[&_*]:!animate-none">
      <div className="flex w-max animate-ticker-scroll hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap" aria-hidden={i >= items.length}>
            <span className="px-8 text-sm font-bold uppercase tracking-[0.22em] text-slate-400">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-fx-orange/70" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
