"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getSession, logout, type PortalUser } from "@/lib/portal-store";

const TABS = [
  { label: "Dashboard", href: "/portal/dashboard" },
  { label: "Documents", href: "/portal/documents" },
  { label: "Services", href: "/portal/services" },
  { label: "Track orders", href: "/portal/track" },
];

/**
 * Portal shell: auth guard + sub-navigation.
 * The login route (exactly /portal) renders without the shell chrome.
 */
export default function PortalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<PortalUser | null>(null);
  const [ready, setReady] = useState(false);

  // Normalize: strip trailing slashes and tolerate a basePath prefix,
  // so "/portal", "/portal/", "/BridgingFX-Website/portal/" all match.
  const cleanPath = (pathname || "").replace(/\/+$/, "");
  const isLogin = cleanPath === "/portal" || cleanPath.endsWith("/portal");

  useEffect(() => {
    setUser(getSession());
    setReady(true);
  }, [pathname]);

  useEffect(() => {
    if (ready && !isLogin && !user) router.replace("/portal");
  }, [ready, isLogin, user, router]);

  if (isLogin) return <>{children}</>;

  if (!ready || !user) {
    return (
      <div className="container-x pb-20 pt-32">
        <div className="glass mx-auto max-w-2xl animate-pulse rounded-[22px] p-10">
          <div className="h-6 w-1/2 rounded bg-white/10" />
          <div className="mt-4 h-4 w-3/4 rounded bg-white/5" />
        </div>
      </div>
    );
  }

  return (
    <div className="pb-20 pt-24 sm:pt-28">
      <div className="container-x">
        {/* Portal header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="eyebrow">Client portal</span>
            <h1 className="display mt-2 text-2xl sm:text-3xl">
              Welcome back, <span className="gradient-text">{user.name.split(" ")[0]}</span>
            </h1>
            <p className="mt-1 text-sm text-slate-400">{user.email}{user.company ? ` · ${user.company}` : ""}</p>
          </div>
          <button
            onClick={() => {
              logout();
              router.replace("/portal");
            }}
            className="btn-ghost !px-5 !py-2.5 !text-sm"
          >
            Log out
          </button>
        </div>

        {/* Sub-nav */}
        <nav aria-label="Portal" className="sticky top-[72px] z-30 -mx-5 mt-6 bg-ink-950/85 px-5 py-3 backdrop-blur-xl sm:-mx-8 sm:px-8">
          <ul className="flex gap-2 overflow-x-auto">
            {TABS.map((t) => {
              const active = pathname === t.href || pathname.startsWith(t.href + "/");
              return (
                <li key={t.href} className="shrink-0">
                  <Link
                    href={t.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                      active
                        ? "bg-fx-orange text-white shadow-glow"
                        : "border border-white/10 bg-white/5 text-slate-300 hover:border-fx-orange/40 hover:text-white"
                    }`}
                  >
                    {t.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
