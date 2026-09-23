"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Stagger, StaggerItem } from "@/components/Reveal";
import type { Post } from "@/data/posts";

export default function BlogFilter({ posts }: { posts: Post[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts]
  );
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      {/* category filter */}
      <div
        className="-mx-5 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0"
        role="tablist"
        aria-label="Filter articles by category"
      >
        <div className="flex w-max gap-2 sm:w-full sm:flex-wrap">
          {categories.map((c) => {
            const isActive = c === active;
            const count =
              c === "All"
                ? posts.length
                : posts.filter((p) => p.category === c).length;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(c)}
                className={`inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-fx-orange text-paper shadow-[0_8px_30px_-8px_rgba(249,115,22,0.7)]"
                    : "glass text-slate-300 hover:border-fx-orange/40 hover:text-white"
                }`}
              >
                {c}
                <span
                  className={`rounded-full px-1.5 text-xs ${
                    isActive ? "bg-black/20" : "bg-white/5 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* cards */}
      <Stagger
        key={active}
        className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((p) => (
          <StaggerItem key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="glass card-hover group flex h-full flex-col overflow-hidden rounded-[24px]"
            >
              <div className="relative h-44 overflow-hidden sm:h-48">
                <Image
                  src={p.cover}
                  alt={p.coverAlt}
                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full bg-fx-orange/10 px-3 py-1 font-semibold text-fx-orange">
                    {p.category}
                  </span>
                  <span className="text-slate-500">{p.readTime}</span>
                </div>
                <h2 className="display mt-3 text-xl leading-snug transition-colors group-hover:text-white">
                  {p.title}
                </h2>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-400">
                  {p.excerpt}
                </p>
                {p.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] font-medium text-slate-500"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
                <span className="mt-5 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-fx-orange">
                  Read article{" "}
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </>
  );
}
