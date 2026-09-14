import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { CTASection } from "@/components/cta/CTASection";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Hubungi PT Widia Utama untuk kebutuhan produksi apparel, seragam kerja, dan pakaian promosi.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <CTASection
        title="READY TO START?"
        description="Ceritakan kebutuhan apparel Anda kepada PT Widia Utama."
      />
    </>
  );
}
