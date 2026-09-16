import Link from "next/link";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { H3, Small } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import type { PortfolioProject } from "@/lib/data/portfolio";

const PLACEHOLDER = "[PORTFOLIO DATA NEEDED]";

interface PortfolioCardProps {
  project: PortfolioProject;
  /** Controls the image aspect ratio for the editorial grid rhythm. */
  aspect?: string;
  className?: string;
}

export function PortfolioCard({
  project,
  aspect = "aspect-[4/5]",
  className,
}: PortfolioCardProps) {
  const meta = [project.client, project.product, project.year].filter(
    (value): value is string => Boolean(value)
  );

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={cn("group block", className)}
    >
      <div className={cn("relative overflow-hidden border border-ink-700", aspect)}>
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={`Foto proyek: ${project.title}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <ImagePlaceholder
            folder="portfolio"
            alt={`Foto proyek: ${project.title}`}
            className="h-full w-full"
          />
        )}
      </div>

      <div className="mt-4">
        <H3 as="h3" className="text-lg">
          {project.title}
        </H3>
        <Small className="mt-1 block text-paper-faint">
          {meta.length > 0 ? meta.join(" · ") : PLACEHOLDER}
        </Small>
      </div>
    </Link>
  );
}
