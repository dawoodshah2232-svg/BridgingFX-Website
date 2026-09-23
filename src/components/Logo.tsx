import Image from "next/image";

/**
 * Official BridgingFX logo — 157x51 JPEG with black background baked in.
 *
 * Theme-aware (pure CSS, no JS — shows the right skin before hydration):
 * - Dark theme: logo displayed directly with NO white pill. The black
 *   background blends seamlessly into the dark UI.
 * - Light theme: the same logo seated in a dark rounded container so the
 *   treatment looks intentional and premium on white.
 *
 * Which skin shows is controlled by `.logo-dark-skin` / `.logo-light-skin`
 * in globals.css via `[data-theme]`.
 *
 * Never displayed beyond ~2x natural size (314px) to avoid pixelation;
 * default 150px keeps it crisp. The old light-background `public/logo.png`
 * is kept as a fallback/alternate.
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
    <>
      {/* Dark theme skin — direct, no pill */}
      <span className={`logo-dark-skin shrink-0 items-center ${className}`}>
        <Image
          src="/logo-dark.jpg"
          alt="BridgingFX"
          width={width}
          height={height}
          className="h-auto w-auto"
          priority
        />
      </span>
      {/* Light theme skin — dark rounded container */}
      <span
        className={`logo-light-skin shrink-0 items-center rounded-full bg-neutral-950 px-4 py-2 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.45)] ${className}`}
      >
        <Image
          src="/logo-dark.jpg"
          alt="BridgingFX"
          width={width}
          height={height}
          className="h-auto w-auto"
          priority
        />
      </span>
    </>
  );
}
