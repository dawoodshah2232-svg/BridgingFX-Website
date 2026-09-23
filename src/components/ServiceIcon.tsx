import type { IconName } from "@/data/services";

const PATHS: Record<IconName, React.ReactNode> = {
  code: (
    <path d="M8 6 3 12l5 6M16 6l5 6-5 6M13 4l-2 16" strokeLinecap="round" strokeLinejoin="round" />
  ),
  shield: (
    <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" strokeLinejoin="round" />
  ),
  chart: (
    <path d="M4 20V10M10 20V4M16 20v-8M21 20H3" strokeLinecap="round" />
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.4-2.2-.7-1.4-.2-3.1 1.4-3.6H17a4 4 0 0 0 4-4c0-4.4-4-8.2-9-8.2z" strokeLinejoin="round" />
      <circle cx="7.5" cy="11.5" r="1" fill="currentColor" />
      <circle cx="11" cy="7.5" r="1" fill="currentColor" />
      <circle cx="15.5" cy="8.5" r="1" fill="currentColor" />
    </>
  ),
  megaphone: (
    <path d="M3 11v3l4 1 2 5h2l-1.5-4.5L20 19V5L9 9H5a2 2 0 0 0-2 2z" strokeLinejoin="round" />
  ),
  cloud: (
    <path d="M7 18a4 4 0 1 1 .6-7.96A5.5 5.5 0 0 1 18.3 12H18a3 3 0 0 1 0 6H7z" strokeLinejoin="round" />
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 4.6a3.5 3.5 0 0 1 0 6.8M18.5 14.6c2 .8 3.5 2.7 3.5 5.4" strokeLinecap="round" />
    </>
  ),
  rocket: (
    <path d="M12 3c3 2 5 6 5 10l-3 3c-4 0-8-2-10-5l3-3c0-2 2-4 5-5zM9 16l-4 4m7-11h.01" strokeLinecap="round" strokeLinejoin="round" />
  ),
  banknote: (
    <>
      <rect x="3" y="7" width="18" height="10" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6.5 10.5h.01M17.5 13.5h.01" strokeLinecap="round" />
    </>
  ),
  headset: (
    <path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v6H5a1 1 0 0 1-1-1v-5zm16 0h-3v6h2a1 1 0 0 0 1-1v-5zM18 20a4 4 0 0 1-4 2h-2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  filecheck: (
    <>
      <path d="M7 3h7l4 4v14H7V3z" strokeLinejoin="round" />
      <path d="M14 3v4h4M10 14l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  mobile: (
    <>
      <rect x="8" y="3" width="8" height="18" rx="2" />
      <path d="M11 18h2" strokeLinecap="round" />
    </>
  ),
  puzzle: (
    <path d="M10 3h4v4h4v4h-4v2a2 2 0 1 0 2 2v2h-4v4h-4v-4H4v-2a2 2 0 1 1 2-2h4V3z" strokeLinejoin="round" />
  ),
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" strokeLinecap="round" />
    </>
  ),
  refresh: (
    <path d="M20 12a8 8 0 1 1-2.3-5.6M20 4v5h-5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  brain: (
    <path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 1 5 3 3 0 0 0 4 3v-2m3-14a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-1 5 3 3 0 0 1-4 3v-2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  server: (
    <>
      <rect x="4" y="4" width="16" height="6" rx="1.5" />
      <rect x="4" y="14" width="16" height="6" rx="1.5" />
      <path d="M8 7h.01M8 17h.01" strokeLinecap="round" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
    </>
  ),
};

export default function ServiceIcon({
  name,
  className = "h-6 w-6",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
