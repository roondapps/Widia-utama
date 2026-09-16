"use client";

import { useState } from "react";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/utils";

interface PortfolioGalleryProps {
  title: string;
  coverImage: string | null;
  gallery?: string[];
}

export function PortfolioGallery({
  title,
  coverImage,
  gallery = [],
}: PortfolioGalleryProps) {
  const images = coverImage ? [coverImage, ...gallery] : [];
  const [active, setActive] = useState(0);

  if (images.length === 0) {
    return (
      <ImagePlaceholder
        folder="portfolio"
        alt={`Foto proyek: ${title}`}
        className="aspect-[16/9] w-full"
      />
    );
  }

  return (
    <div>
      <div className="relative aspect-[16/9] w-full overflow-hidden border border-ink-700">
        <Image
          src={images[active]}
          alt={`Foto proyek: ${title}`}
          fill
          sizes="100vw"
          className="object-cover"
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
              aria-label={`Lihat foto proyek ${title} ${index + 1}`}
              aria-current={index === active}
              className={cn(
                "relative h-16 w-24 shrink-0 overflow-hidden border transition-colors",
                index === active
                  ? "border-emerald-500"
                  : "border-ink-700 hover:border-ink-700/60"
              )}
            >
              <Image src={src} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
