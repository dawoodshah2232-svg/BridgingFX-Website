"use client";

import { useState } from "react";
import Link from "next/link";
import { PACKAGES } from "@/data/packages";
import { FadeIn } from "@/components/Reveal";

/**
 * "Find your fit" quiz for /packages.
 * 5 questions; each answer adds points to one or more packages.
 * No fake data — pure recommendation logic over the 3 real packages.
 *
 * Scoring targets package indices:
 *   0 = Start-Up Accelerator (Entry)
 *   1 = Growth Catalyst (Professional, recommended)
 *   2 = Enterprise Institution (Elite)
 */

export function packageSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

type Scores = [number, number, number]; // [entry, professional, elite]

type QuizOption = {
  label: string;
  sub?: string;
  scores: Scores;
  why: string; // shown in the result as "Recommended because…"
};

type QuizQuestion = {
  question: string;
  options: QuizOption[];
};

const QUESTIONS: QuizQuestion[] = [
  {
    question: "Where is your business today?",
    options: [
      {
        label: "New launch",
        sub: "New brand, no clients yet",
        scores: [2, 0, 0],
        why: "you're launching fresh and need to prove the model fast, not overbuild",
      },
      {
        label: "Growing broker",
        sub: "Live, adding clients and volume",
        scores: [0, 2, 0],
        why: "you're past launch and scaling operations",
      },
      {
        label: "Established firm",
        sub: "Serious volume, institutional needs",
        scores: [0, 0, 2],
        why: "you're operating at institutional scale",
      },
    ],
  },
  {
    question: "What monthly trading volume are you targeting in year one?",
    options: [
      {
        label: "Under $1M",
        sub: "Proving the model first",
        scores: [2, 0, 0],
        why: "your year-one volumes fit lean, low-overhead infrastructure",
      },
      {
        label: "$1M – $10M",
        sub: "Steady, compounding growth",
        scores: [0, 2, 0],
        why: "your volume band needs real liquidity depth and growth tooling",
      },
      {
        label: "$10M+",
        sub: "High volume from day one",
        scores: [0, 0, 2],
        why: "your volume demands institutional-grade execution",
      },
    ],
  },
  {
    question: "How many trading platforms do you need?",
    options: [
      {
        label: "Just one",
        sub: "Keep the stack simple",
        scores: [2, 0, 0],
        why: "a single platform white label keeps your setup lean",
      },
      {
        label: "Two platforms",
        sub: "Give clients a choice",
        scores: [0, 2, 0],
        why: "dual platforms need the hybrid setup built for choice",
      },
      {
        label: "Multi-asset or custom build",
        sub: "Beyond standard white labels",
        scores: [0, 0, 2],
        why: "multi-asset or custom builds need dedicated engineering",
      },
    ],
  },
  {
    question: "What matters most to you right now?",
    options: [
      {
        label: "Lowest cost to get live",
        sub: "Minimum spend, maximum speed",
        scores: [2, 0, 0],
        why: "cost efficiency is your priority — entry tier gets you live fastest",
      },
      {
        label: "Features and growth tooling",
        sub: "Marketing, IBs, funnel",
        scores: [0, 2, 0],
        why: "you prioritised growth tooling — IB portals, KYC, marketing infrastructure",
      },
      {
        label: "Scale and execution quality",
        sub: "Low latency, deep liquidity",
        scores: [0, 0, 2],
        why: "you prioritised execution quality and low latency",
      },
    ],
  },
  {
    question: "What support do you expect from us?",
    options: [
      {
        label: "Launch assistance",
        sub: "Help us go live, then we run it",
        scores: [2, 0, 0],
        why: "you only need launch assistance — ongoing heavy support would be overkill",
      },
      {
        label: "Priority 24/7 tech support",
        sub: "Always-on technical backup",
        scores: [0, 2, 0],
        why: "you need priority 24/7 technical cover as you scale",
      },
      {
        label: "A dedicated team",
        sub: "Support, risk management, custom dev",
        scores: [0, 0, 2],
        why: "you need a dedicated team — support, risk, and custom development",
      },
    ],
  },
];

function pickWinner(totals: Scores): number {
  const max = Math.max(...totals);
  const leaders = [0, 1, 2].filter((i) => totals[i] === max);
  // Tie-break: the professional tier is the balanced middle ground;
  // otherwise fall back to the leaner tier.
  if (leaders.includes(1)) return 1;
  return leaders[0];
}

export default function PackageQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]); // chosen option index per question
  const done = answers.length === QUESTIONS.length;

  const choose = (optionIdx: number) => {
    setAnswers((a) => {
      const next = [...a];
      next[step] = optionIdx;
      return next;
    });
    setStep((s) => Math.min(s + 1, QUESTIONS.length));
  };

  const back = () => {
    setStep((s) => Math.max(s - 1, 0));
    setAnswers((a) => a.slice(0, step - 1 < 0 ? 0 : step - 1));
  };

  const restart = () => {
    setStep(0);
    setAnswers([]);
  };

  if (done) {
    const totals: Scores = [0, 0, 0];
    const reasons: string[] = [];
    answers.forEach((optIdx, qIdx) => {
      const opt = QUESTIONS[qIdx].options[optIdx];
      totals[0] += opt.scores[0];
      totals[1] += opt.scores[1];
      totals[2] += opt.scores[2];
    });
    const winner = pickWinner(totals);
    answers.forEach((optIdx, qIdx) => {
      const opt = QUESTIONS[qIdx].options[optIdx];
      if (opt.scores[winner] > 0 && !reasons.includes(opt.why)) reasons.push(opt.why);
    });
    const pkg = PACKAGES[winner];

    return (
      <FadeIn>
        <div className="glass relative overflow-hidden rounded-[28px] p-8 text-center sm:p-12">
          <div className="orb left-1/2 top-0 h-64 w-64 -translate-x-1/2 bg-fx-orange/20" aria-hidden="true" />
          <span className="eyebrow justify-center">Your recommendation</span>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-fx-orange">{pkg.tier}</p>
          <h3 className="display mx-auto mt-2 max-w-xl text-3xl leading-tight sm:text-4xl">
            {pkg.name}
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-400">
            {pkg.description}
          </p>

          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-7">
            <p className="text-sm font-bold uppercase tracking-widest text-white">Recommended because…</p>
            <ul className="mt-4 space-y-3">
              {reasons.slice(0, 4).map((r) => (
                <li key={r} className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-300">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fx-orange/15 text-xs font-bold text-fx-orange" aria-hidden="true">
                    ✓
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={`/contact?package=${packageSlug(pkg.name)}`} className="btn-primary w-full sm:w-auto">
              Get a quote for {pkg.name} <span aria-hidden="true">→</span>
            </Link>
            <button type="button" onClick={restart} className="btn-ghost w-full sm:w-auto">
              Retake quiz <span aria-hidden="true">↺</span>
            </button>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-slate-500">
            A starting point, not a verdict — every package is scoped in writing on a discovery call.
          </p>
        </div>
      </FadeIn>
    );
  }

  const q = QUESTIONS[step];
  const progress = ((step + 1) / QUESTIONS.length) * 100;

  return (
    <FadeIn>
      <div className="glass rounded-[28px] p-6 sm:p-10">
        {/* progress */}
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-slate-400" aria-live="polite">
            Question {step + 1} <span className="text-slate-500">of {QUESTIONS.length}</span>
          </p>
          {step > 0 && (
            <button
              type="button"
              onClick={back}
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-white/10 px-4 text-sm font-semibold text-slate-300 transition-colors hover:border-white/25 hover:text-white"
            >
              <span aria-hidden="true">←</span> Back
            </button>
          )}
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={QUESTIONS.length}>
          <div className="h-full rounded-full bg-fx-orange transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>

        {/* question */}
        <h3 className="display mt-7 text-2xl leading-tight sm:text-3xl">{q.question}</h3>

        <div className="mt-6 grid gap-3" role="group" aria-label={q.question}>
          {q.options.map((opt, i) => {
            const selected = answers[step] === i;
            return (
              <button
                key={opt.label}
                type="button"
                onClick={() => choose(i)}
                aria-pressed={selected}
                className={`flex min-h-[60px] w-full items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                  selected
                    ? "border-fx-orange/60 bg-fx-orange/10"
                    : "border-white/10 bg-white/[0.03] hover:border-fx-orange/35 hover:bg-white/[0.06]"
                }`}
              >
                <span>
                  <span className="block text-base font-semibold text-white">{opt.label}</span>
                  {opt.sub && <span className="mt-0.5 block text-sm text-slate-400">{opt.sub}</span>}
                </span>
                <span aria-hidden="true" className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg transition-colors ${selected ? "bg-fx-orange text-paper" : "bg-white/10 text-slate-400"}`}>
                  {selected ? "✓" : "→"}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-xs text-slate-500">Takes under a minute. No data is stored.</p>
          <button
            type="button"
            onClick={restart}
            className="inline-flex min-h-[44px] items-center rounded-full px-4 text-sm font-semibold text-slate-400 transition-colors hover:text-white"
          >
            Restart
          </button>
        </div>
      </div>
    </FadeIn>
  );
}
