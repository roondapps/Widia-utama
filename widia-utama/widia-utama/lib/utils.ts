import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names and resolves conflicting Tailwind utilities (e.g. a
 * component's default "p-6" being overridden by a caller's "p-0") so the
 * last one specified always wins, regardless of Tailwind's internal
 * stylesheet ordering.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
