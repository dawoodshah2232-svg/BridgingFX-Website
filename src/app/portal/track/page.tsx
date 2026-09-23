import type { Metadata } from "next";
import PortalTrack from "@/components/portal/PortalTrack";

export const metadata: Metadata = {
  title: "Track orders — Client Portal",
  robots: { index: false, follow: false },
};

export default function PortalTrackPage() {
  return <PortalTrack />;
}
