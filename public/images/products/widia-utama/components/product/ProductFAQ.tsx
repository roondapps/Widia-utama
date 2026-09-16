import type { ProductFAQItem } from "@/lib/data/products";
import { H3, Body } from "@/components/ui/Typography";

interface ProductFAQProps {
  items: ProductFAQItem[];
}

export function ProductFAQ({ items }: ProductFAQProps) {
  if (items.length === 0) return null;

  return (
    <div>
      <H3 as="h2" className="text-xl md:text-2xl">
        Frequently Asked Questions
      </H3>
      <div className="mt-6 divide-y divide-ink-700 border-t border-ink-700">
        {items.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-paper marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="font-medium">{item.question}</span>
              <span
                aria-hidden="true"
                className="shrink-0 text-lg text-emerald-400 transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <Body className="mt-3 max-w-2xl text-sm">{item.answer}</Body>
          </details>
        ))}
      </div>
    </div>
  );
}
