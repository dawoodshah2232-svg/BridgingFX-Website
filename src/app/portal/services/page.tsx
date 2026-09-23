import type { Metadata } from "next";
import PortalServices from "@/components/portal/PortalServices";

export const metadata: Metadata = {
  title: "Choose services — Client Portal",
  robots: { index: false, follow: false },
};

export default function PortalServicesPage() {
  return <PortalServices />;
}
