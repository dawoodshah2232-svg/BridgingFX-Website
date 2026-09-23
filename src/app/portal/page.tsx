import type { Metadata } from "next";
import PortalLogin from "@/components/portal/PortalLogin";

export const metadata: Metadata = {
  title: "Log in — Client Portal",
  robots: { index: false, follow: false },
};

export default function PortalPage() {
  return <PortalLogin />;
}
