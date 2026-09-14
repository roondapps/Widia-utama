import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Display, BodyLarge } from "@/components/ui/Typography";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export function ProductHero() {
  return (
    <Section tone="ink" className="pb-10 pt-8 md:pt-12">
      <Container>
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Products" }]}
        />
        <Eyebrow className="mt-8">OUR PRODUCTS</Eyebrow>
        <Display as="h1" className="mt-6 max-w-2xl">
          APPAREL
          <br />
          FOR YOUR BUSINESS.
        </Display>
        <BodyLarge className="mt-6 max-w-lg">
          Koleksi pakaian yang dapat disesuaikan dengan kebutuhan perusahaan,
          seragam kerja, promosi, dan berbagai kebutuhan apparel.
        </BodyLarge>
      </Container>
    </Section>
  );
}
