"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { NAV_LINKS, mailtoFor } from "@/data/site";

/** Animated hamburger → X. 48px touch target. */
function Hamburger({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur"
    >
      <span className="relative block h-4 w-5">
        <motion.span
          className="absolute left-0 top-0 block h-[2px] w-5 rounded bg-white"
          animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute left-0 top-[7px] block h-[2px] w-5 rounded bg-white"
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="absolute left-0 top-[14px] block h-[2px] w-5 rounded bg-white"
          animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        />
      </span>
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  // Close menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-ink-950/85 backdrop-blur-xl"
            : "border-b border-transparent bg-ink-950/40 backdrop-blur-md"
        }`}
      >
        <nav
          className="container-x flex h-[72px] items-center justify-between gap-3"
          aria-label="Primary"
        >
          <Link href="/" aria-label="BridgingFX home" className="shrink-0">
            <Logo width={132} />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`rounded-full px-3.5 py-2.5 text-[13.5px] font-medium transition-colors ${
                    pathname === l.href || pathname.startsWith(l.href + "/")
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Link
              href="/contact"
              className="btn-primary !px-6 !py-2.5 !text-[13.5px]"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <ThemeToggle />
            <Hamburger open={open} onClick={() => setOpen((v) => !v)} />
          </div>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-ink-950 lg:hidden"
          >
            <motion.nav
              aria-label="Mobile"
              className="container-x flex h-full flex-col justify-center gap-1 overflow-y-auto pb-28 pt-24"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
              }}
            >
              {[{ label: "Home", href: "/" }, ...NAV_LINKS].map((l) => (
                <motion.div
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, x: -18 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
                  }}
                >
                  <Link
                    href={l.href}
                    className="flex min-h-[52px] items-center justify-between border-b border-white/10 py-3 text-xl font-semibold tracking-tight text-white"
                  >
                    {l.label}
                    <span className="text-fx-orange" aria-hidden="true">→</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                }}
                className="pt-6"
              >
                <Link
                  href="/contact"
                  className="btn-primary w-full !py-4 !text-base"
                >
                  Get a Quote
                </Link>
                <a
                  href={mailtoFor("Callback request — BridgingFX")}
                  className="btn-ghost mt-3 w-full !py-4 !text-base"
                >
                  Request a Callback
                </a>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                }}
                className="flex justify-center pt-6"
              >
                <ThemeToggle label />
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
