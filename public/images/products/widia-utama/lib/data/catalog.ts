export interface CatalogFile {
  title: string;
  description: string;
  /** Intended path under /public/catalog/ once the real PDF is added.
   * The path is pre-configured so enabling download later only requires
   * adding the file and flipping `available` to true — no other code
   * changes needed. No file exists at this path yet. */
  file: string;
  available: boolean;
}

export const catalog: CatalogFile = {
  title: "PT Widia Utama — Company Catalog",
  description: "Katalog produk apparel PT Widia Utama.",
  file: "/catalog/company-catalog.pdf",
  available: false,
};
