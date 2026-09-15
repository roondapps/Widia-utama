import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";
import { Eyebrow, Display, BodyLarge } from "@/components/ui/Typography";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink-900 sm:items-center">
      <img
  src="/images/hero/hero.jpg"
  alt="Foto hero — produksi apparel Widia Utama"
  className="absolute inset-0 w-full h-full object-cover z-0"
/>
      {/* Subtle dark overlay so type stays legible over any photo dropped in later */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/75 to-ink-900/30" />

      <Container className="relative animate-hero-in py-24 sm:py-32">
        <Eyebrow>WORKWEAR &amp; APPAREL MANUFACTURING</Eyebrow>
        <Display as="h1" className="mt-6 max-w-3xl">
          BUILT FOR
          <br />
          YOUR BUSINESS.
        </Display>
        <BodyLarge className="mt-6 max-w-lg">
          Solusi pakaian custom untuk kebutuhan perusahaan, seragam kerja,
          promosi, dan berbagai kebutuhan apparel bisnis.
        </BodyLarge>

        <div className="mt-10 flex flex-wrap gap-4">
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
        </div>
      </Container>
    </section>
  );
}
