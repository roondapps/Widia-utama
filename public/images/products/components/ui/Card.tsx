import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-sm border border-ink-700 bg-ink-800/60 backdrop-blur-sm p-6 md:p-8 transition-colors duration-200 hover:border-emerald-500/30",
        className
      )}
      {...props}
    />
  );
}
