import type { Metadata } from "next";
import PortalDocuments from "@/components/portal/PortalDocuments";

export const metadata: Metadata = {
  title: "Documents — Client Portal",
  robots: { index: false, follow: false },
};

export default function PortalDocumentsPage() {
  return <PortalDocuments />;
}
