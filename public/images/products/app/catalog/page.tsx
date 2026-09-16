import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { H2, BodyLarge, Small } from "@/components/ui/Typography";
import { CatalogHero } from "@/components/catalog/CatalogHero";
import { CatalogPreview } from "@/components/catalog/CatalogPreview";
import { CatalogProducts } from "@/components/catalog/CatalogProducts";
import { ProductionProcess } from "@/components/home/ProductionProcess";
import { CTASection } from "@/components/cta/CTASection";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Catalog",
  description:
    "Lihat katalog apparel PT Widia Utama untuk kebutuhan seragam kerja dan pakaian promosi.",
  path: "/catalog",
});

export default function CatalogPage() {
  return (
    <>
      <CatalogHero />
      <CatalogPreview />

      <Section tone="navy">
        <Container>
          <Reveal className="max-w-xl">
            <H2>WHAT&apos;S INSIDE</H2>
            <BodyLarge className="mt-4">
              Katalog dapat digunakan untuk melihat pilihan apparel PT Widia
              Utama.
            </BodyLarge>
            <Small className="mt-4 block text-paper-faint">
              [CATALOG CONTENT DATA NEEDED]
            </Small>
          </Reveal>
        </Container>
      </Section>

      <CatalogProducts />

      <ProductionProcess title="HOW TO ORDER" />

      <CTASection
        title="READY TO START?"
        description="Ceritakan kebutuhan apparel perusahaan Anda kepada PT Widia Utama."
      />
    </>
  );
}
