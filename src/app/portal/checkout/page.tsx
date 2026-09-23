import type { Metadata } from "next";
import PortalCheckout from "@/components/portal/PortalCheckout";

export const metadata: Metadata = {
  title: "Payment — Client Portal",
  robots: { index: false, follow: false },
};

export default function PortalCheckoutPage() {
  return <PortalCheckout />;
}
