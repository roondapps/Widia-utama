import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow, Display, BodyLarge } from "@/components/ui/Typography";
import { CatalogDownloadButton } from "@/components/catalog/CatalogDownloadButton";

export function CatalogHero() {
  return (
    <Section tone="ink" className="pb-10 pt-8 md:pt-12">
      <Container>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Catalog" }]} />
        <Eyebrow className="mt-8">CATALOG</Eyebrow>
        <Display as="h1" className="mt-6 max-w-2xl">
          EXPLORE
          <br />
          OUR COLLECTION.
        </Display>
        <BodyLarge className="mt-6 max-w-lg">
          Lihat pilihan apparel PT Widia Utama dan temukan inspirasi untuk
          kebutuhan perusahaan Anda.
        </BodyLarge>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <CatalogDownloadButton />
          <ButtonLink href="/custom-order" variant="secondary" size="lg">
            Request a Quote
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
