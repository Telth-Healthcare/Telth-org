import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine and intelligently merge Tailwind class names.
 * Example: cn("p-2", condition && "text-primary")
 */
export function cn(...inputs: (string | false | null | undefined)[]) {
  return twMerge(clsx(inputs));
}
