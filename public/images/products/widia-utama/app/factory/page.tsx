import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { H2, H3, Body, BodyLarge } from "@/components/ui/Typography";
import { FactoryHero } from "@/components/factory/FactoryHero";
import { FactoryGallery } from "@/components/factory/FactoryGallery";
import { QualityControl } from "@/components/factory/QualityControl";
import { ProductionProcess } from "@/components/home/ProductionProcess";
import { CTASection } from "@/components/cta/CTASection";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Factory & Production",
  description:
    "Kenali proses produksi PT Widia Utama dari konsultasi desain hingga pengiriman.",
  path: "/factory",
});

export default function FactoryPage() {
  return (
    <>
      <FactoryHero />

      <ProductionProcess />

      <QualityControl />

      <Section tone="ink">
        <Container className="grid gap-10 sm:grid-cols-2">
          <div>
            <H3 as="h2" className="text-xl md:text-2xl">
              Free Design Consultation
            </H3>
            <Body className="mt-3 max-w-sm">
              Setiap pelanggan mendapatkan konsultasi desain gratis sebelum
              proses produksi dimulai.
            </Body>
          </div>
          <div>
            <H3 as="h2" className="text-xl md:text-2xl">
              Design Assistance
            </H3>
            <Body className="mt-3 max-w-sm">
              Tim kami membantu menyiapkan desain sesuai kebutuhan perusahaan
              Anda.
            </Body>
          </div>
        </Container>
      </Section>

      <Section tone="navy">
        <Container>
          <H2>OUR FACILITY</H2>
          <BodyLarge className="mt-4 max-w-lg">
            Workshop, produksi, quality control, dan packing — bagian dari
            proses yang kami jalankan untuk setiap pesanan.
          </BodyLarge>
          <div className="mt-10">
            <FactoryGallery />
          </div>
        </Container>
      </Section>

      <CTASection
        title={
          <>
            HAVE A PROJECT
            <br />
            IN MIND?
          </>
        }
        description="Ceritakan kebutuhan apparel perusahaan Anda kepada kami."
      />
    </>
  );
}
