"use client";

import { useState } from "react";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  productName: string;
  /** Main image path, or null if no photography has been supplied yet. */
  image: string | null;
  /** Additional images beyond the main one. */
  gallery?: string[];
}

export function ProductGallery({
  productName,
  image,
  gallery = [],
}: ProductGalleryProps) {
  const images = image ? [image, ...gallery] : [];
  const [active, setActive] = useState(0);

  if (images.length === 0) {
    return (
      <ImagePlaceholder
        folder="products"
        alt={`Foto produk ${productName}`}
        className="aspect-[4/5] w-full"
      />
    );
  }

  return (
    <div>
      <div className="relative aspect-[4/5] w-full overflow-hidden border border-ink-700">
        <Image
          src={images[active]}
          alt={`Foto produk ${productName}`}
          fill
          sizes="(min-width: 768px) 45vw, 100vw"
          className="object-contain"
          priority
        />
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Lihat foto ${productName} ${index + 1}`}
              aria-current={index === active}
              className={cn(
                "relative h-20 w-16 shrink-0 overflow-hidden border transition-colors",
                index === active
                  ? "border-emerald-500"
                  : "border-ink-700 hover:border-ink-700/60"
              )}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="64px"
                className="object-contain"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
