import type { Metadata } from "next";
import PortalDashboard from "@/components/portal/PortalDashboard";

export const metadata: Metadata = {
  title: "Dashboard — Client Portal",
  robots: { index: false, follow: false },
};

export default function PortalDashboardPage() {
  return <PortalDashboard />;
}
