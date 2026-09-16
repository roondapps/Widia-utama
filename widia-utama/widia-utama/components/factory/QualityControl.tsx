import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { H2, BodyLarge } from "@/components/ui/Typography";

export function QualityControl() {
  return (
    <Section tone="navy">
      <Container>
        <Reveal className="max-w-xl">
          <H2>
            QUALITY
            <br />
            MATTERS.
          </H2>
          <BodyLarge className="mt-6">
            Quality control dilakukan sebagai bagian dari proses sebelum
            produk dipacking dan dikirim.
          </BodyLarge>
        </Reveal>
      </Container>
    </Section>
  );
}
