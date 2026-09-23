"use client";

import Link from "next/link";
import { PACKAGES } from "@/data/packages";
import { packageSlug } from "@/components/PackageQuiz";
import { FadeIn } from "@/components/Reveal";

/**
 * Side-by-side comparison of the 3 launch packages.
 * Values are derived from the package definitions in src/data/packages.ts.
 * Desktop: 4-column table. Mobile: horizontally scrollable table with a
 * sticky first column. The recommended tier column is highlighted.
 */

type CompareRow = { label: string; values: [string, string, string] };

const ROWS: CompareRow[] = [
  {
    label: "Platform",
    values: [
      "Standard cTrader or Wintrado white label",
      "Premium hybrid — cTrader + Wintrado",
      "Ultimate TM9 or full custom-build",
    ],
  },
  {
    label: "Liquidity tier",
    values: [
      "Tier 3 / mid-level FX feed",
      "Tier 2 aggregated FX/CFD liquidity",
      "Tier 1 direct connectivity, multi-asset",
    ],
  },
  {
    label: "CRM",
    values: [
      "BridgeX CRM access + secure hosting",
      "BridgeX CRM + launch onboarding",
      "BridgeX CRM, dedicated deployment",
    ],
  },
  {
    label: "Website",
    values: [
      "Basic website (up to 5 pages)",
      "Custom web development (5 pages)",
      "Custom integrations + development hours",
    ],
  },
  {
    label: "KYC & onboarding",
    values: ["—", "Full KYC integration", "Full KYC + institutional onboarding"],
  },
  {
    label: "IB & affiliate portal",
    values: ["—", "IB & affiliate portal included", "IB portal + partner management"],
  },
  {
    label: "Support level",
    values: [
      "Email support & launch assistance",
      "Priority 24/7 tech support",
      "24/7 outsourced customer support",
    ],
  },
  {
    label: "Risk management",
    values: ["—", "—", "Dedicated risk manager + institutional flow"],
  },
  {
    label: "Best for",
    values: [
      "New entities & market testing",
      "Established brokers expanding operations",
      "High-volume & institutional firms",
    ],
  },
  {
    label: "Setup speed",
    values: ["Live in weeks", "Standard launch timeline", "Scoped deployment"],
  },
  {
    label: "Upgrade path",
    values: [
      "Scales up — nothing rebuilt",
      "Scales up or down as you grow",
      "Top tier — fully tailored from here",
    ],
  },
];

export default function PackageCompare() {
  const recommendedIdx = PACKAGES.findIndex((p) => p.recommended);

  return (
    <FadeIn>
      <div className="overflow-x-auto rounded-[24px] border border-white/10" role="region" aria-label="Package comparison table" tabIndex={0}>
        <table className="w-full min-w-[760px] border-collapse bg-ink-800/60 text-left text-[15px]">
          <caption className="sr-only">Comparison of the three BridgingFX launch packages</caption>
          <thead>
            <tr>
              <th scope="col" className="sticky left-0 z-10 w-44 bg-ink-800 p-5 align-bottom text-xs font-bold uppercase tracking-[0.18em] text-slate-400 sm:w-52">
                Compare
              </th>
              {PACKAGES.map((p, i) => (
                <th
                  key={p.name}
                  scope="col"
                  className={`relative p-5 align-bottom ${i === recommendedIdx ? "bg-fx-orange/[0.07]" : ""}`}
                >
                  {i === recommendedIdx && (
                    <span className="absolute left-1/2 top-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-fx-orange px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-paper">
                      Recommended
                    </span>
                  )}
                  <span className="block pt-5 text-xs font-bold uppercase tracking-[0.18em] text-fx-orange">{p.tier}</span>
                  <span className="display mt-1 block text-lg leading-snug">{p.name}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, r) => (
              <tr key={row.label} className={`border-t border-white/10 ${r % 2 === 1 ? "bg-white/[0.02]" : ""}`}>
                <th scope="row" className="sticky left-0 z-10 bg-ink-800 p-5 text-sm font-semibold text-slate-300">
                  {row.label}
                </th>
                {row.values.map((v, i) => (
                  <td
                    key={`${row.label}-${i}`}
                    className={`p-5 align-top leading-relaxed ${i === recommendedIdx ? "bg-fx-orange/[0.07] text-white" : "text-slate-300"} ${v === "—" ? "text-slate-600" : ""}`}
                  >
                    {v}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="border-t border-white/10">
              <td className="sticky left-0 z-10 bg-ink-800 p-5" />
              {PACKAGES.map((p, i) => (
                <td key={p.name} className={`p-5 ${i === recommendedIdx ? "bg-fx-orange/[0.07]" : ""}`}>
                  <Link
                    href={`/contact?package=${packageSlug(p.name)}`}
                    className={`inline-flex min-h-[48px] w-full items-center justify-center rounded-full px-5 text-sm font-semibold transition-all duration-300 ${
                      i === recommendedIdx
                        ? "bg-fx-orange text-paper hover:bg-fx-ember"
                        : "border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
                    }`}
                  >
                    Choose {p.name}
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-center text-xs leading-relaxed text-slate-500">
        Exact scope is confirmed in writing before you commit — these tiers are starting points.
      </p>
    </FadeIn>
  );
}
