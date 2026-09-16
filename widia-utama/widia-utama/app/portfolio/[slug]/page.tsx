import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Display, Body, H3 } from "@/components/ui/Typography";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { PortfolioMeta } from "@/components/portfolio/PortfolioMeta";
import { RelatedProjects } from "@/components/portfolio/RelatedProjects";
import { CTASection } from "@/components/cta/CTASection";
import {
  portfolioProjects,
  getProjectBySlug,
  getRelatedProjects,
} from "@/lib/data/portfolio";
import { buildMetadata } from "@/lib/site-config";

const PLACEHOLDER = "[PORTFOLIO DATA NEEDED]";

interface PortfolioPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PortfolioPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return buildMetadata({
    title: `${project.title} | Portfolio`,
    description: project.description ?? undefined,
    path: `/portfolio/${project.slug}`,
  });
}

export default function PortfolioDetailPage({ params }: PortfolioPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.slug);

  const sections = [
    { heading: "The Project", body: project.description },
    { heading: "The Challenge", body: project.challenge },
    { heading: "Our Approach", body: project.solution },
    { heading: "The Result", body: project.result },
  ];

  return (
    <>
      <Section tone="ink" className="pb-0 pt-8">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Portfolio", href: "/portfolio" },
              { label: project.title },
            ]}
          />
        </Container>
      </Section>

      <Section tone="ink" className="pt-8 md:pt-10">
        <Container>
          <PortfolioGallery
            title={project.title}
            coverImage={project.coverImage}
            gallery={project.gallery}
          />

          <Display as="h1" className="mt-8 text-[clamp(2rem,4vw,3rem)]">
            {project.title}
          </Display>

          <div className="mt-8">
            <PortfolioMeta project={project} />
          </div>
        </Container>
      </Section>

      <Section tone="ink" className="pt-0">
        <Container className="grid gap-12 md:grid-cols-2">
          {sections.map((section) => (
            <div key={section.heading}>
              <H3 as="h2" className="text-xl md:text-2xl">
                {section.heading}
              </H3>
              <Body
                className={`mt-3 max-w-md ${
                  section.body ? "" : "text-paper-faint"
                }`}
              >
                {section.body ?? PLACEHOLDER}
              </Body>
            </div>
          ))}
        </Container>
      </Section>

      <RelatedProjects projects={related} />

      <CTASection
        title="HAVE A PROJECT IN MIND?"
        description="Ceritakan kebutuhan apparel perusahaan Anda kepada PT Widia Utama."
      />
    </>
  );
}
