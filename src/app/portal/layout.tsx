import type { Metadata } from "next";
import PortalShell from "@/components/portal/PortalShell";

export const metadata: Metadata = {
  title: "Client Portal",
  description:
    "BridgingFX client portal — upload documents, choose services, pay, and track every order from request to delivery.",
  robots: { index: false, follow: false },
};

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return <PortalShell>{children}</PortalShell>;
}
