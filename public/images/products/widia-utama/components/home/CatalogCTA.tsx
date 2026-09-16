import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { H2, Body, Small } from "@/components/ui/Typography";

export function CatalogCTA() {
  return (
    <Section tone="ink">
      <Container>
        <Reveal className="border border-ink-700 bg-gradient-to-br from-emerald-950/40 to-ink-800/40 p-10 text-center md:p-16">
          <H2 className="mx-auto max-w-2xl">
            READY TO
            <br />
            START YOUR PROJECT?
          </H2>
          <Body className="mx-auto mt-4 max-w-md">
            Lihat pilihan produk dan detail layanan kami di katalog, atau
            langsung ajukan penawaran untuk kebutuhan Anda.
          </Body>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="/catalog" variant="primary" size="lg">
              Download Catalog
            </ButtonLink>
            <ButtonLink href="/custom-order" variant="secondary" size="lg">
              Request a Quote
            </ButtonLink>
          </div>
          <Small className="mt-4 text-paper-faint">
            [CATALOG FILE — COMPANY DATA NEEDED]
          </Small>
        </Reveal>
      </Container>
    </Section>
  );
}
