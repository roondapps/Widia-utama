export interface ProductFAQItem {
  question: string;
  answer: string;
}

export interface Product {
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  /** Path under /public/images/products/, e.g. "/images/products/polo-shirt-1.jpg".
   * Null until real photography is supplied — components must fall back to ImagePlaceholder. */
  image: string | null;
  /** Additional gallery images beyond the main `image`. Empty until supplied. */
  gallery: string[];
  category: string;
  /** Fabric/material composition — null until confirmed, never guessed. */
  material: string | null;
  /** What can be customized on this product. Grounded in the company's stated
   * general customization capability (consultasi desain, pemilihan bahan
   * disesuaikan) — not a product-specific technical claim. */
  customization: string | null;
  /** Minimum order quantity — null until confirmed, never guessed. */
  moq: string | null;
  /** Available sizes — null until confirmed, never guessed. */
  sizes: string[] | null;
  /** Any additional spec rows beyond material/customization/moq/sizes. */
  specifications: { label: string; value: string }[] | null;
  faq: ProductFAQItem[];
}

const sharedFaq: ProductFAQItem[] = [
  {
    question: "Apakah produk dapat dibuat sesuai desain perusahaan?",
    answer:
      "Ya. Kami menyediakan konsultasi desain gratis dan bantuan desain untuk menyesuaikan produk dengan kebutuhan perusahaan Anda.",
  },
  {
    question: "Apakah pemilihan bahan bisa disesuaikan?",
    answer:
      "Bisa. Pemilihan material disesuaikan melalui konsultasi dengan tim kami sesuai kebutuhan dan anggaran proyek.",
  },
  {
    question: "Apakah tersedia sablon dan bordir?",
    answer: "Ya, kami menyediakan layanan sablon dan bordir.",
  },
  {
    question: "Berapa minimum jumlah pemesanan (MOQ)?",
    answer: "[PRODUCT DATA NEEDED]",
  },
  {
    question: "Ukuran apa saja yang tersedia?",
    answer: "[PRODUCT DATA NEEDED]",
  },
];

const customizationNote =
  "Warna, bahan, dan detail desain (termasuk sablon/bordir) dapat disesuaikan melalui konsultasi desain sesuai kebutuhan perusahaan Anda.";

export const products: Product[] = [
  {
    name: "Polo Shirt",
    slug: "polo-shirt",
    shortDescription:
      "Seragam kerja custom dengan pilihan bahan dan warna sesuai identitas perusahaan.",
    description:
      "Polo shirt untuk kebutuhan seragam kerja maupun apparel promosi, dapat disesuaikan melalui konsultasi desain dengan tim Widia Utama.",
    image: null,
    gallery: [],
    category: "Seragam Kerja",
    material: null,
    customization: customizationNote,
    moq: null,
    sizes: null,
    specifications: null,
    faq: sharedFaq,
  },
  {
    name: "T-Shirt",
    slug: "t-shirt",
    shortDescription:
      "Kaos promosi dan seragam tim dengan opsi sablon atau bordir.",
    description:
      "T-shirt untuk kebutuhan seragam tim maupun kebutuhan promosi perusahaan, dapat disesuaikan melalui konsultasi desain dengan tim Widia Utama.",
    image: null,
    gallery: [],
    category: "Apparel Promosi",
    material: null,
    customization: customizationNote,
    moq: null,
    sizes: null,
    specifications: null,
    faq: sharedFaq,
  },
  {
    name: "Kemeja",
    slug: "kemeja",
    shortDescription:
      "Kemeja formal maupun kasual untuk kebutuhan kantor dan acara perusahaan.",
    description:
      "Kemeja untuk kebutuhan seragam kantor maupun acara perusahaan, dapat disesuaikan melalui konsultasi desain dengan tim Widia Utama.",
    image: null,
    gallery: [],
    category: "Seragam Kerja",
    material: null,
    customization: customizationNote,
    moq: null,
    sizes: null,
    specifications: null,
    faq: sharedFaq,
  },
  {
    name: "Jaket",
    slug: "jaket",
    shortDescription:
      "Jaket seragam dan promosi dengan konstruksi yang disesuaikan kebutuhan proyek.",
    description:
      "Jaket untuk kebutuhan seragam kerja maupun apparel promosi, dapat disesuaikan melalui konsultasi desain dengan tim Widia Utama.",
    image: "/images/products/jaket-parasit.png",
    gallery: [],
    category: "Seragam Kerja",
    material: null,
    customization: customizationNote,
    moq: null,
    sizes: null,
    specifications: null,
    faq: sharedFaq,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string): Product[] {
  return products.filter((product) => product.slug !== slug);
}
