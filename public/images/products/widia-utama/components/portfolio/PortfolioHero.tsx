import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Display, BodyLarge } from "@/components/ui/Typography";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export function PortfolioHero() {
  return (
    <Section tone="ink" className="pb-10 pt-8 md:pt-12">
      <Container>
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
        />
        <Eyebrow className="mt-8">SELECTED WORK</Eyebrow>
        <Display as="h1" className="mt-6 max-w-2xl">
          BUILT FOR
          <br />
          REAL PROJECTS.
        </Display>
        <BodyLarge className="mt-6 max-w-lg">
          Lihat beberapa pekerjaan dan proyek apparel yang kami siapkan untuk
          berbagai kebutuhan pelanggan.
        </BodyLarge>
      </Container>
    </Section>
  );
}
