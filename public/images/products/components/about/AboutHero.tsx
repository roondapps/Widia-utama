import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Eyebrow, Display, BodyLarge, Small } from "@/components/ui/Typography";

export function AboutHero() {
  return (
    <Section tone="ink" className="pb-10 pt-8 md:pt-12">
      <Container>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
        <Eyebrow className="mt-8">ABOUT WIDIA UTAMA</Eyebrow>
        <Display as="h1" className="mt-6 max-w-2xl">
          BUILT ON
          <br />
          EXPERIENCE.
        </Display>
        <BodyLarge className="mt-6 max-w-lg">
          PT Widia Utama merupakan perusahaan konveksi yang memproduksi
          pakaian untuk kebutuhan seragam kerja dan promosi sesuai kebutuhan
          pelanggan.
        </BodyLarge>
        <Small className="mt-6 inline-block border border-ink-700 px-3 py-1 tracking-wide text-paper-muted">
          SINCE 2005
        </Small>
      </Container>
    </Section>
  );
}
