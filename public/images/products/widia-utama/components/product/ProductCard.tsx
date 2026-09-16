import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { H3, Body } from "@/components/ui/Typography";
import type { Product } from "@/lib/data/products";

interface ProductCardProps {
  product: Pick<Product, "name" | "slug" | "shortDescription" | "image">;
}

export function ProductCard({ product }: ProductCardProps) {
  const { name, slug, shortDescription, image } = product;

  return (
    <Card className="group p-0">
      <div className="relative aspect-[4/5] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={`Foto produk ${name} — PT Widia Utama`}
            fill
            sizes="(min-width: 768px) 25vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <ImagePlaceholder
            folder="products"
            alt={`Foto produk ${name}`}
            className="h-full w-full"
          />
        )}
      </div>
      <div className="p-6">
        <H3 as="h3" className="text-lg">
          {name}
        </H3>
        <Body className="mt-2 text-sm">{shortDescription}</Body>
        <Link
          href={`/products/${slug}`}
          className="mt-4 inline-block text-sm text-emerald-400 transition-colors hover:text-emerald-300"
        >
          View Product
        </Link>
      </div>
    </Card>
  );
}
