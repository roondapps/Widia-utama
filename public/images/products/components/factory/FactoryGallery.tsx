import Image from "next/image";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Small } from "@/components/ui/Typography";

interface FactoryGalleryCategory {
  key: string;
  label: string;
  /** Path under /public/images/factory/, null until real photography exists. */
  image: string | null;
}

const categories: FactoryGalleryCategory[] = [
  { key: "workshop", label: "Workshop", image: null },
  { key: "production", label: "Production", image: null },
  { key: "quality-control", label: "Quality Control", image: null },
  { key: "packing", label: "Packing", image: null },
];

export function FactoryGallery() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {categories.map((category) => (
        <figure key={category.key}>
          {category.image ? (
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={category.image}
                alt={`Foto ${category.label} PT Widia Utama`}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <ImagePlaceholder
              folder="factory"
              alt={`Foto ${category.label} PT Widia Utama`}
              className="aspect-[4/5] w-full"
            />
          )}
          <figcaption className="mt-3">
            <Small className="text-paper-muted">{category.label}</Small>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
