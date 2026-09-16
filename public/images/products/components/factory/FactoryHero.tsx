import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Eyebrow, Display, BodyLarge } from "@/components/ui/Typography";

export function FactoryHero() {
  return (
    <>
      <Section tone="ink" className="pb-10 pt-8 md:pt-12">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Factory" }]} />
          <Eyebrow className="mt-8">OUR PRODUCTION</Eyebrow>
          <Display as="h1" className="mt-6 max-w-2xl">
            BEHIND
            <br />
            THE PRODUCTION.
          </Display>
          <BodyLarge className="mt-6 max-w-lg">
            Kenali proses dan perhatian terhadap kualitas di balik setiap
            produksi PT Widia Utama.
          </BodyLarge>
        </Container>
      </Section>

      <ImagePlaceholder
        folder="factory"
        alt="Foto workshop dan proses produksi Widia Utama"
        className="h-[50vh] w-full rounded-none border-x-0"
      />
    </>
  );
}
