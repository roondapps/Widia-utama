import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow, Display, BodyLarge, Body, Small, H3 } from "@/components/ui/Typography";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductSpecs } from "@/components/product/ProductSpecs";
import { SizeChart } from "@/components/product/SizeChart";
import { ProductFAQ } from "@/components/product/ProductFAQ";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { products, getProductBySlug, getRelatedProducts } from "@/lib/data/products";
import { buildMetadata } from "@/lib/site-config";

interface ProductPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  return buildMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/products/${product.slug}`,
  });
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    ...(product.image ? { image: product.image } : {}),
    brand: {
      "@type": "Organization",
      name: "PT Widia Utama",
    },
  };

  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section tone="ink" className="pb-0 pt-8">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: product.name },
            ]}
          />
        </Container>
      </Section>

      <Section tone="ink" className="pt-8 md:pt-10">
        <Container className="grid gap-10 md:grid-cols-2 md:gap-16">
          <ProductGallery
            productName={product.name}
            image={product.image}
            gallery={product.gallery}
          />

          <div>
            <Eyebrow>{product.category}</Eyebrow>
            <Display as="h1" className="mt-4 text-[clamp(2rem,4vw,3rem)]">
              {product.name}
            </Display>
            <BodyLarge className="mt-4 max-w-md">
              {product.shortDescription}
            </BodyLarge>

            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink
                href={`/custom-order?product=${encodeURIComponent(product.name)}`}
                variant="primary"
                size="lg"
              >
                Request a Quote
              </ButtonLink>
              <ButtonLink
                href="https://wa.me/6281331208737"
                variant="whatsapp"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="ink" className="pt-0">
        <Container className="grid gap-16 md:grid-cols-2">
          <div>
            <H3 as="h2" className="text-xl md:text-2xl">
              Product Overview
            </H3>
            <Small className="mt-4 font-medium uppercase tracking-wide text-paper-faint">
              Description
            </Small>
            <Body className="mt-2 max-w-md">{product.description}</Body>
          </div>

          <ProductSpecs product={product} />
        </Container>
      </Section>

      <Section tone="navy">
        <Container>
          <SizeChart />
        </Container>
      </Section>

      <Section tone="ink">
        <Container>
          <ProductFAQ items={product.faq} />
        </Container>
      </Section>

      <RelatedProducts products={related} />
    </>
  );
}
