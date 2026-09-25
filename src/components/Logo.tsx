import Image from "next/image";

/**
 * Official BridgingFX logo, used consistently in dark and light themes.
 * Natural size is 157x51, so the default stays crisp while reading larger
 * in the header and footer.
 */
export default function Logo({
  width = 210,
  className = "",
}: {
  width?: number;
  className?: string;
}) {
  const height = Math.round((width * 51) / 157);
  return (
    <span className={`inline-flex shrink-0 items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="BridgingFX"
        width={width}
        height={height}
        className="h-auto"
        style={{ width: `${width}px` }}
        priority
      />
    </span>
  );
}
