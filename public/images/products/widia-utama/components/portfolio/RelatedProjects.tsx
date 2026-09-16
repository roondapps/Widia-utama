import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { H3 } from "@/components/ui/Typography";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import type { PortfolioProject } from "@/lib/data/portfolio";

interface RelatedProjectsProps {
  projects: PortfolioProject[];
}

export function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <Section tone="navy">
      <Container>
        <H3 as="h2" className="text-xl md:text-2xl">
          More Projects
        </H3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <PortfolioCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
