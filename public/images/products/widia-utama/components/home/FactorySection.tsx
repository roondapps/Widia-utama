import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/Button";
import { H2, BodyLarge } from "@/components/ui/Typography";

export function FactorySection() {
  return (
    <Section tone="ink" className="!pb-0">
      <Container>
        <Reveal className="max-w-xl">
          <H2>
            BEHIND
            <br />
            THE PRODUCTION
          </H2>
          <BodyLarge className="mt-6">
            Setiap pesanan dikerjakan langsung oleh tim produksi kami di
            Surabaya, dari pemilihan bahan hingga quality control sebelum
            pengiriman.
          </BodyLarge>
          <ButtonLink href="/factory" variant="secondary" size="lg" className="mt-8">
            Explore Our Factory
          </ButtonLink>
        </Reveal>
      </Container>

      <Reveal delay={100} className="mt-14">
        <ImagePlaceholder
          folder="factory"
          alt="Foto workshop dan proses produksi Widia Utama"
          className="h-[60vh] w-full rounded-none border-x-0"
        />
      </Reveal>
    </Section>
  );
}
