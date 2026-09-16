import { forwardRef } from "react";
import type {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  SelectHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full border border-ink-700 bg-ink-800/60 px-4 py-3 text-sm text-paper placeholder:text-paper-faint transition-colors focus:border-emerald-500 focus:outline-none aria-[invalid=true]:border-red-400";

interface FieldWrapperProps {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}

export function FieldWrapper({
  label,
  htmlFor,
  error,
  required,
  hint,
  children,
}: FieldWrapperProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="text-sm text-paper-muted">
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-emerald-400">
            *
          </span>
        )}
      </label>
      {hint && (
        <p id={`${htmlFor}-hint`} className="text-xs text-paper-faint">
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p
          id={`${htmlFor}-error`}
          role="alert"
          className="text-xs text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export const TextInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn(fieldBase, "rounded", className)} {...props} />
));
TextInput.displayName = "TextInput";

export const TextArea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, rows = 5, ...props }, ref) => (
  <textarea
    ref={ref}
    rows={rows}
    className={cn(fieldBase, "rounded resize-none", className)}
    {...props}
  />
));
TextArea.displayName = "TextArea";

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(fieldBase, "rounded appearance-none", className)}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";
