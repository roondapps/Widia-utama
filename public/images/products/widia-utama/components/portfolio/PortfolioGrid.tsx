import { Reveal } from "@/components/ui/Reveal";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import type { PortfolioProject } from "@/lib/data/portfolio";

interface PortfolioGridProps {
  projects: PortfolioProject[];
}

/** Repeats every 3 items: large feature, medium, full-width strip. */
function getSpan(index: number) {
  switch (index % 3) {
    case 0:
      return { span: "md:col-span-7", aspect: "aspect-[4/5]" };
    case 1:
      return { span: "md:col-span-5", aspect: "aspect-[4/5]" };
    default:
      return { span: "md:col-span-12", aspect: "aspect-[21/9]" };
  }
}

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  return (
    <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-12">
      {projects.map((project, index) => {
        const { span, aspect } = getSpan(index);
        return (
          <PortfolioCard
            key={project.slug}
            project={project}
            aspect={aspect}
            className={span}
          />
        );
      })}
    </Reveal>
  );
}
