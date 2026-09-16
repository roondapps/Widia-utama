import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Tone = "ink" | "navy";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: Tone;
}

const tones: Record<Tone, string> = {
  ink: "bg-ink-900",
  navy: "bg-navy-900",
};

export function Section({ className, tone = "ink", ...props }: SectionProps) {
  return (
    <section
      className={cn("py-20 md:py-28", tones[tone], className)}
      {...props}
    />
  );
}
