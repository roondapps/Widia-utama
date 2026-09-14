import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type TextProps = HTMLAttributes<HTMLElement>;

interface HeadingProps extends TextProps {
  /** Semantic tag to render (h1–h4). Defaults to a sensible level per component,
   * but the page should only ever have one real h1 — override this to match
   * where the heading sits in the document outline. */
  as?: ElementType;
}

export function Eyebrow({ className, ...props }: TextProps) {
  return (
    <p
      className={cn(
        "font-body text-xs font-medium text-emerald-400",
        className
      )}
      {...props}
    />
  );
}

export function Display({ className, as: Tag = "h1", ...props }: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-tightest text-paper",
        className
      )}
      {...props}
    />
  );
}

export function H1({ className, as: Tag = "h1", ...props }: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.1] text-paper",
        className
      )}
      {...props}
    />
  );
}

export function H2({ className, as: Tag = "h2", ...props }: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display text-[clamp(1.6rem,2.6vw,2.25rem)] font-medium leading-[1.15] text-paper",
        className
      )}
      {...props}
    />
  );
}

export function H3({ className, as: Tag = "h3", ...props }: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display text-xl font-medium leading-snug text-paper md:text-2xl",
        className
      )}
      {...props}
    />
  );
}

export function BodyLarge({ className, ...props }: TextProps) {
  return (
    <p
      className={cn(
        "font-body text-lg leading-relaxed text-paper-muted",
        className
      )}
      {...props}
    />
  );
}

export function Body({ className, ...props }: TextProps) {
  return (
    <p
      className={cn(
        "font-body text-base leading-relaxed text-paper-muted",
        className
      )}
      {...props}
    />
  );
}

export function Small({ className, ...props }: TextProps) {
  return (
    <p
      className={cn(
        "font-body text-sm leading-normal text-paper-faint",
        className
      )}
      {...props}
    />
  );
}
