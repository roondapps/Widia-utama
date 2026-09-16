import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { H2, BodyLarge } from "@/components/ui/Typography";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/lib/data/products";

export function ProductCategories() {
  return (
    <Section tone="navy">
      <Container>
        <Reveal className="max-w-xl">
          <H2>WHAT WE MAKE</H2>
          <BodyLarge className="mt-4">
            Pilihan apparel yang dapat disesuaikan dengan kebutuhan
            perusahaan dan proyek Anda.
          </BodyLarge>
        </Reveal>

        <Reveal delay={100} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
