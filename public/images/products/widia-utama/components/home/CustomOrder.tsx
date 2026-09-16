import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/Button";
import { H2, BodyLarge } from "@/components/ui/Typography";

export function CustomOrder() {
  return (
    <Section tone="navy">
      <Container>
        <Reveal className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <ImagePlaceholder
            folder="products"
            alt="Contoh hasil produksi custom Widia Utama"
            className="aspect-[4/5] order-2 md:order-1"
          />

          <div className="order-1 md:order-2">
            <H2>
              YOUR DESIGN.
              <br />
              OUR PRODUCTION.
            </H2>
            <BodyLarge className="mt-6 max-w-md">
              Dari konsultasi desain hingga produksi, kami membantu
              menyiapkan apparel yang sesuai dengan kebutuhan proyek Anda.
            </BodyLarge>
            <ButtonLink
              href="/custom-order"
              variant="primary"
              size="lg"
              className="mt-8 inline-flex"
            >
              Start Your Project
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
