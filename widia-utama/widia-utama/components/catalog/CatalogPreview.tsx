import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { H3, Body, Small } from "@/components/ui/Typography";
import { CatalogDownloadButton } from "@/components/catalog/CatalogDownloadButton";
import { catalog } from "@/lib/data/catalog";
import { products } from "@/lib/data/products";

export function CatalogPreview() {
  return (
    <Section tone="ink" className="pt-0">
      <Container className="grid gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div className="flex aspect-[3/4] w-full flex-col items-center justify-center border border-dashed border-ink-700 bg-ink-800/40 text-center">
            <span className="font-display text-2xl tracking-wide text-paper-muted">
              CATALOG
            </span>
            <span className="mt-1 font-display text-sm uppercase tracking-[0.2em] text-paper-faint">
              Coming Soon
            </span>
            <Small className="mt-6 text-paper-faint">
              [CATALOG FILE — COMPANY DATA NEEDED]
            </Small>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <H3 as="h2" className="text-xl md:text-2xl">
            {catalog.title}
          </H3>
          <Body className="mt-3 max-w-sm">{catalog.description}</Body>

          <ul className="mt-6 space-y-1 text-sm text-paper-muted">
            {products.map((product) => (
              <li key={product.slug}>{product.name}</li>
            ))}
          </ul>

          <div className="mt-8">
            <CatalogDownloadButton />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
