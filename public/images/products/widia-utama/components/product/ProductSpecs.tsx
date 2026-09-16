import type { Product } from "@/lib/data/products";
import { H3, Body } from "@/components/ui/Typography";

interface ProductSpecsProps {
  product: Pick<
    Product,
    "material" | "customization" | "moq" | "sizes" | "specifications"
  >;
}

const PLACEHOLDER = "[PRODUCT DATA NEEDED]";

export function ProductSpecs({ product }: ProductSpecsProps) {
  const rows: { label: string; value: string }[] = [
    { label: "Material", value: product.material ?? PLACEHOLDER },
    {
      label: "Customization",
      value: product.customization ?? PLACEHOLDER,
    },
    { label: "MOQ", value: product.moq ?? PLACEHOLDER },
    {
      label: "Available Sizes",
      value: product.sizes && product.sizes.length > 0
        ? product.sizes.join(", ")
        : PLACEHOLDER,
    },
    ...(product.specifications ?? []),
  ];

  return (
    <div>
      <H3 as="h2" className="text-xl md:text-2xl">
        Product Specifications
      </H3>
      <dl className="mt-6 divide-y divide-ink-700 border-t border-ink-700">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-4"
          >
            <dt className="text-sm font-medium uppercase tracking-wide text-paper-faint">
              {row.label}
            </dt>
            <dd>
              <Body
                className={
                  row.value === PLACEHOLDER
                    ? "text-paper-faint"
                    : "text-paper-muted"
                }
              >
                {row.value}
              </Body>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
