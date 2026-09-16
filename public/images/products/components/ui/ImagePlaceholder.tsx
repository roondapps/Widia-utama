import { cn } from "@/lib/utils";

type ImageFolder =
  | "logo"
  | "hero"
  | "products"
  | "factory"
  | "portfolio"
  | "clients"
  | "team"
  | "catalog";

interface ImagePlaceholderProps {
  /** Which /public/images/<folder> this asset belongs to — keeps naming consistent
   * so real photography can be dropped in later without touching the component. */
  folder: ImageFolder;
  /** Accessible description of what the image will show once uploaded. */
  alt: string;
  className?: string;
  /** Optional short label shown on the placeholder surface, e.g. "Foto Pabrik". */
  label?: string;
}

/**
 * Renders a real <img> when `src` is provided by the caller via className/background
 * later; for now (no photography supplied yet) it renders an elegant, clearly-marked
 * placeholder instead of a random stock photo, per the project's image rule.
 */
export function ImagePlaceholder({
  folder,
  alt,
  className,
  label,
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative flex items-center justify-center overflow-hidden border border-ink-700 bg-gradient-to-br from-ink-800 to-navy-900",
        className
      )}
    >
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(45deg,theme(colors.paper.DEFAULT)_1px,transparent_1px)] [background-size:16px_16px]" />
      <span className="relative font-body text-xs tracking-wide text-paper-faint">
        {label ?? `[COMPANY DATA NEEDED — ${folder}]`}
      </span>
    </div>
  );
}
