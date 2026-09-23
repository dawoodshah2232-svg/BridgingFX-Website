import Image from "next/image";

/**
 * Real BridgingFX logo — 157x51 PNG with light background.
 * The logo is seated inside a clean white pill (`paper` — pure white in
 * both themes, never recolored) so it stays crisp on dark and light UI.
 * Never displayed beyond ~2x natural size (314px) to avoid pixelation;
 * default 150px keeps it crisp.
 */
export default function Logo({
  width = 150,
  className = "",
}: {
  width?: number;
  className?: string;
}) {
  const height = Math.round((width * 51) / 157);
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full bg-paper px-4 py-2 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.6)] ${className}`}
    >
      <Image
        src="/logo.png"
        alt="BridgingFX — Empowering Forex Brokers, PropFirms, and Financial Institutions"
        width={width}
        height={height}
        priority
        className="h-auto w-auto"
        style={{ maxWidth: width, height: "auto" }}
      />
    </span>
  );
}
