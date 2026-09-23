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
    image: "/images/products/polo.jpg",
    gallery: ["/images/products/polo1.jpg"],
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
      "Kaos promosi dan seragam tim dengan opsi sablon, printing, atau bordir.",
    description:
      "T-shirt untuk kebutuhan seragam tim maupun kebutuhan promosi perusahaan, dapat disesuaikan melalui konsultasi desain dengan tim Widia Utama.",
    image: "/images/products/t-shirt.jpg",
    gallery: ["images/products/t-shirt1.jpg",
             "images/products/t-shirt2.jpg",],
    category: "Apparel Promosi",
    material: "jersy, catton, PE shoft,tc",
    customization: customizationNote,
    moq: "12pcs",
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
    image: "/images/products/kemeja.jpg",
    gallery: ["/images/products/kemeja1.jpg",
             "/images/products/kemeja2.jpg",
             "/images/products/kemeja3.jpg",],
    category: "Seragam Kerja, seragam sekolah, formal",
    material: "Drill, Oxfort, Catton, Tropical",
    customization: customizationNote,
    sizes: null,
    moq: "12pcs",
    specifications: null,
    faq: sharedFaq,
  },
  {
    name: "Celana",
    slug:"celana",
    shortDescription: "celana seragam ataupun formal",
    description: "celana untuk seragam kantor maupun apparel, dapat disesuaikan melalui konsultasi desain dengan tim widia utama ",
    image: "/images/products/celana.jpg",
    gallery: ["images/products/celana1.jpg",
             "images/products/celana2jpg",
             "images/peoducts/celana3.jpg"],
    category: "seragam kerja, apparel,",
    material: "drill, canvas, denim,",
    customization: customizationNote,
    sizes: null,
    moq: "12pcs",
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
    image: "/images/products/jaket-parasit.jpg",
    gallery: [],
    category: "Seragam Kerja",
    material: "taslan, Parasit, micro, fleece",
    customization: customizationNote,
    sizes: null,
    moq: "12pcs",
    specifications: null,
    faq: sharedFaq,
  },
  {
  name: "Rompi",
  slug: "rompi",
  shortDescription:"rompi kerja k3 atau comunitas",
  description:"rompi kerja k3 maupun comunitas  dapat di seduaikan malalui konsultasi desain dengan tim widia utama",
  image:"/images/products/rompi.jpg",
  gallery:["/images/products/rompi1.jpg",
          "/images/products/rompi2.jpg",
          "/images/products/rompi3.jpg"], 
  category: "Rompi",
  material:"taslan, denim, jala, drill,",
  customization: customizationNote,
  sizes: null,
  moq: "12pcs",
  specifications: null,
  faq: sharedFaq,
  },
  {
    name: "Topi",
    slug: "topi",
    shortDescription :"topi seragam atau comunitas yang di sesuaikan kebutuhan proyek",
    description: "topi seragam kerja maupun aparel promosi, dapat di sesuaikan melalui konsultasi desain dengan tim widia utama",
    image: "/images/products/topi.jpg",
    gallery:["/images/products/topi1.jpg",
            "/images/products/topi2.jpg",],
    category: "seragam kerja maupun comunitas",
    material: "canvas, drill, baby canvas",
    customization: customizationNote,
    sizes: null,
    moq:"12pcs",
    specifications: null,
    faq: sharedFaq,
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string): Product[] {
  return products.filter((product) => product.slug !== slug);
}
