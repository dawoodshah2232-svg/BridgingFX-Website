import { FadeIn } from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <FadeIn className={`flex max-w-3xl flex-col gap-4 sm:gap-5 ${alignCls}`}>
      <span className="eyebrow">
        <span className="inline-block h-px w-8 bg-fx-orange/70" aria-hidden="true" />
        {eyebrow}
        {align === "center" && (
          <span className="inline-block h-px w-8 bg-fx-orange/70" aria-hidden="true" />
        )}
      </span>
      <h2 className="display text-3xl leading-[1.08] sm:text-4xl lg:text-5xl">{title}</h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
