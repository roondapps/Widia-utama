import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Small } from "@/components/ui/Typography";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { portfolioProjects } from "@/lib/data/portfolio";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Beberapa pekerjaan dan proyek apparel yang disiapkan PT Widia Utama untuk berbagai kebutuhan pelanggan.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />

      <Section tone="ink" className="pt-0">
        <Container>
          <h2 className="font-display text-sm font-medium uppercase tracking-wide text-paper-faint">
            Project Collection
          </h2>
          <div className="mt-8">
            <PortfolioGrid projects={portfolioProjects} />
          </div>
          <Small className="mt-8 block text-paper-faint">
            Detail proyek (client, tahun, jumlah, hasil) akan diperbarui
            begitu data yang terverifikasi tersedia.
          </Small>
        </Container>
      </Section>
    </>
  );
}
