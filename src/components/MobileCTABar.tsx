"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SITE, mailtoFor } from "@/data/site";

/**
 * Sticky mobile CTA bar — always within thumb reach.
 * Mobile only (md:hidden), appears after scrolling past the hero,
 * with safe-area padding for notched devices.
 */
export default function MobileCTABar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // WhatsApp number is a placeholder until the owner confirms — see CONTACT_TODO.md
  const waNumber = SITE.whatsapp.replace(/\D/g, "");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 34 }}
          className="fixed inset-x-0 bottom-0 z-30 px-4 md:hidden"
          style={{ paddingBottom: "max(0.9rem, env(safe-area-inset-bottom))" }}
        >
          <div className="glass flex items-center gap-2.5 rounded-2xl p-2.5 shadow-card">
            <Link
              href="/contact"
              className="btn-primary min-h-[48px] flex-1 !px-4 !py-3 !text-sm active:scale-[0.98]"
            >
              Get a Quote
            </Link>
            <a
              href={`https://wa.me/${waNumber}?text=${encodeURIComponent(
                "Hi BridgingFX, I'd like to discuss a project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded-full border border-white/15 bg-white/5 transition-transform active:scale-95"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-mint" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.2-.7.5-.9 1-.6 2.6.7 4.4a11.6 11.6 0 0 0 4.5 4c1.7.8 2.4.9 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.1-.5-.3z" />
              </svg>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
