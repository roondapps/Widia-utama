export interface PortfolioProject {
  /** Literal placeholder text until a real project title is confirmed. */
  title: string;
  slug: string;
  client: string | null;
  product: string | null;
  year: string | null;
  quantity: string | null;
  customization: string | null;
  challenge: string | null;
  solution: string | null;
  result: string | null;
  /** Path under /public/images/portfolio/, null until real photography exists. */
  coverImage: string | null;
  gallery: string[];
  description: string | null;
}

const PLACEHOLDER = "[PORTFOLIO DATA NEEDED]";

/**
 * IMPORTANT: PT Widia Utama does not yet have a verified, client-approved
 * portfolio database. The entries below are structural placeholders only —
 * they exist so the grid/detail page templates can be built and reviewed,
 * not as real projects. Every field beyond `slug` must stay null/placeholder
 * until real, confirmed project data is provided. Do not invent client
 * names, years, quantities, or outcomes.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    title: PLACEHOLDER,
    slug: "project-1",
    client: null,
    product: null,
    year: null,
    quantity: null,
    customization: null,
    challenge: null,
    solution: null,
    result: null,
    coverImage: null,
    gallery: [],
    description: null,
  },
  {
    title: PLACEHOLDER,
    slug: "project-2",
    client: null,
    product: null,
    year: null,
    quantity: null,
    customization: null,
    challenge: null,
    solution: null,
    result: null,
    coverImage: null,
    gallery: [],
    description: null,
  },
  {
    title: PLACEHOLDER,
    slug: "project-3",
    client: null,
    product: null,
    year: null,
    quantity: null,
    customization: null,
    challenge: null,
    solution: null,
    result: null,
    coverImage: null,
    gallery: [],
    description: null,
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string): PortfolioProject[] {
  return portfolioProjects.filter((project) => project.slug !== slug);
}
