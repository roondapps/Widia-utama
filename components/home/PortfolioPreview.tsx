import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/Button";
import { H2, BodyLarge } from "@/components/ui/Typography";

const previewSlots = [
  { key: "portfolio-1", aspect: "aspect-[4/5]" },
  { key: "portfolio-2", aspect: "aspect-square" },
  { key: "portfolio-3", aspect: "aspect-[4/5]" },
];

export function PortfolioPreview() {
  return (
    <Section tone="navy">
      <Container>
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-lg">
            <H2>SELECTED WORK</H2>
            <BodyLarge className="mt-4">
              Sebagian hasil produksi yang pernah kami kerjakan untuk
              kebutuhan seragam dan apparel promosi.
            </BodyLarge>
          </div>
          <ButtonLink href="/portfolio" variant="secondary" size="lg" className="shrink-0">
            View All Projects
          </ButtonLink>
        </Reveal>

        <Reveal delay={100} className="mt-12 grid gap-6 md:grid-cols-3">
          {previewSlots.map((slot) => (
            <ImagePlaceholder
              key={slot.key}
              folder="portfolio"
              alt="Contoh hasil produksi dalam portfolio Widia Utama"
              className={slot.aspect}
            />
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
