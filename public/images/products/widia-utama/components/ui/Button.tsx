import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-body font-medium transition-all duration-150 active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none disabled:active:scale-100";

const variants: Record<Variant, string> = {
  primary:
    "bg-emerald-500 text-ink-950 border border-transparent hover:bg-emerald-400",
  secondary:
    "bg-transparent text-paper border border-ink-700 hover:border-emerald-500 hover:text-emerald-300",
  ghost:
    "bg-transparent text-paper-muted border border-transparent hover:text-paper",
  whatsapp:
    "bg-emerald-500 text-ink-950 border border-transparent hover:bg-emerald-400",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm rounded",
  lg: "h-12 px-7 text-base rounded",
};

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.47 14.38c-.28-.14-1.67-.82-1.93-.92-.26-.09-.45-.14-.64.14-.19.28-.73.92-.9 1.11-.16.19-.33.21-.61.07-.28-.14-1.18-.43-2.24-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.53-.87-2.1-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.35-.26.28-1 .97-1 2.37s1.02 2.75 1.16 2.94c.14.19 2 3.05 4.84 4.28.68.29 1.2.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.67-.68 1.9-1.34.24-.66.24-1.22.16-1.34-.07-.12-.26-.19-.54-.33z" />
      <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.08-1.33A9.96 9.96 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2zm0 18.15c-1.62 0-3.13-.44-4.43-1.2l-.32-.19-3.02.79.81-2.94-.21-.31A8.13 8.13 0 0 1 3.85 12c0-4.5 3.67-8.15 8.17-8.15S20.19 7.5 20.19 12s-3.67 8.15-8.17 8.15z" />
    </svg>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {variant === "whatsapp" && <WhatsAppIcon />}
      {children}
    </button>
  )
);
Button.displayName = "Button";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {variant === "whatsapp" && <WhatsAppIcon />}
      {children}
    </a>
  )
);
ButtonLink.displayName = "ButtonLink";
