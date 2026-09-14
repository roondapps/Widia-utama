import type { PortfolioProject } from "@/lib/data/portfolio";
import { Body } from "@/components/ui/Typography";

const PLACEHOLDER = "[PORTFOLIO DATA NEEDED]";

interface PortfolioMetaProps {
  project: Pick<
    PortfolioProject,
    "client" | "product" | "year" | "quantity" | "customization"
  >;
}

export function PortfolioMeta({ project }: PortfolioMetaProps) {
  const rows: { label: string; value: string }[] = [
    { label: "Client", value: project.client ?? PLACEHOLDER },
    { label: "Product", value: project.product ?? PLACEHOLDER },
    { label: "Year", value: project.year ?? PLACEHOLDER },
    { label: "Quantity", value: project.quantity ?? PLACEHOLDER },
    { label: "Customization", value: project.customization ?? PLACEHOLDER },
  ];

  return (
    <dl className="grid gap-4 sm:grid-cols-2">
      {rows.map((row) => (
        <div key={row.label} className="border-t border-ink-700 pt-3">
          <dt className="text-xs font-medium uppercase tracking-wide text-paper-faint">
            {row.label}
          </dt>
          <dd className="mt-1">
            <Body
              className={
                row.value === PLACEHOLDER ? "text-paper-faint" : "text-paper-muted"
              }
            >
              {row.value}
            </Body>
          </dd>
        </div>
      ))}
    </dl>
  );
}
