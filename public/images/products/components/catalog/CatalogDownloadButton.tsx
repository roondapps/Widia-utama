import { Button, ButtonLink } from "@/components/ui/Button";
import { Small } from "@/components/ui/Typography";
import { catalog } from "@/lib/data/catalog";
import { cn } from "@/lib/utils";

interface CatalogDownloadButtonProps {
  size?: "md" | "lg";
  className?: string;
}

export function CatalogDownloadButton({
  size = "lg",
  className,
}: CatalogDownloadButtonProps) {
  if (catalog.available) {
    return (
      <ButtonLink
        href={catalog.file}
        download
        variant="primary"
        size={size}
        className={className}
      >
        Download Catalog
      </ButtonLink>
    );
  }

  return (
    <div className={cn("inline-flex flex-col items-start gap-2", className)}>
      <Button
        type="button"
        variant="primary"
        size={size}
        disabled
        aria-disabled="true"
      >
        Download Catalog
      </Button>
      <Small className="text-paper-faint">
        Catalog file is not available yet.
      </Small>
    </div>
  );
}
