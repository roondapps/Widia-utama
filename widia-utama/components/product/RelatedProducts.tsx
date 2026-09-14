import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/product/ProductCard";
import { H3 } from "@/components/ui/Typography";
import type { Product } from "@/lib/data/products";

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <Section tone="navy">
      <Container>
        <H3 as="h2" className="text-xl md:text-2xl">
          You May Also Like
        </H3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
