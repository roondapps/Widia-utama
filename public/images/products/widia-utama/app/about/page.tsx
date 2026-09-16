import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { H2, BodyLarge, Body, Small } from "@/components/ui/Typography";
import { AboutHero } from "@/components/about/AboutHero";
import { CompanyStory } from "@/components/about/CompanyStory";
import { CompanyStrengths } from "@/components/about/CompanyStrengths";
import { ProductCard } from "@/components/product/ProductCard";
import { CTASection } from "@/components/cta/CTASection";
import { products } from "@/lib/data/products";

import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Informasi tentang PT Widia Utama, perusahaan konveksi berbasis di Surabaya yang memproduksi pakaian untuk kebutuhan seragam kerja dan promosi.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />

      <Section tone="ink">
        <Container>
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-lg">
              <H2>WHAT WE DO</H2>
              <BodyLarge className="mt-4">
                PT Widia Utama memproduksi pakaian untuk kebutuhan seragam
                kerja dan promosi sesuai kebutuhan pelanggan.
              </BodyLarge>
            </div>
            <Link
              href="/products"
              className="shrink-0 text-sm text-emerald-400 transition-colors hover:text-emerald-300"
            >
              View All Products →
            </Link>
          </Reveal>

          <Reveal
            delay={100}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </Reveal>
        </Container>
      </Section>

      <CompanyStrengths />

      <Section tone="ink">
        <Container className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <H2>BASED IN SURABAYA</H2>
            <Body className="mt-4 max-w-sm">Surabaya, Jawa Timur</Body>
            <Body className="mt-2 max-w-sm text-paper-muted">
              Perum Pondok Maritim Indah, Blok TT Kav.8 No.1
              <br />
              Balasklumprik, Wiyung, Surabaya 60222
            </Body>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex aspect-[4/3] items-center justify-center border border-dashed border-ink-700 bg-ink-800/40">
              <Small className="text-paper-faint">
                [MAP INTEGRATION — OPTIONAL]
              </Small>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection
        title="WORK WITH US"
        description="Ceritakan kebutuhan apparel perusahaan Anda kepada PT Widia Utama."
      />
    </>
  );
}
