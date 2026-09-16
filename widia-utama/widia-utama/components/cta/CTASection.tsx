import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { H2, Body } from "@/components/ui/Typography";

interface CTASectionProps {
  title: ReactNode;
  description?: string;
  /** Include a tertiary "Download Catalog" link alongside the two main CTAs. */
  showCatalogLink?: boolean;
}

export function CTASection({
  title,
  description,
  showCatalogLink = false,
}: CTASectionProps) {
  return (
    <div className="border-t border-ink-700 bg-navy-900">
      <Container className="flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center">
        <div className="max-w-xl">
          <H2 as="h2">{title}</H2>
          {description && <Body className="mt-3">{description}</Body>}
        </div>

        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/custom-order" variant="primary" size="lg">
            Request a Quote
          </ButtonLink>
          <ButtonLink
            href="https://wa.me/6281331208737"
            variant="whatsapp"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </ButtonLink>
          {showCatalogLink && (
            <ButtonLink href="/catalog" variant="ghost" size="lg">
              Download Catalog
            </ButtonLink>
          )}
        </div>
      </Container>
    </div>
  );
}
