import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/lib/data/products";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "Koleksi Polo Shirt, T-Shirt, Kemeja, dan Jaket dari PT Widia Utama yang dapat disesuaikan untuk kebutuhan seragam kerja dan apparel promosi perusahaan Anda.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <ProductHero />

      <Section tone="ink" className="pt-0">
        <Container>
          <h2 className="font-display text-sm font-medium uppercase tracking-wide text-paper-faint">
            Product Collection
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
