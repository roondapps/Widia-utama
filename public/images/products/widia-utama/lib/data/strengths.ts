export interface CompanyStrength {
  number: string;
  /** Short numbered-list title, as used on the About page. */
  title: string;
  /** Fuller sentence form, as used in the homepage "Why Widia Utama" list. */
  description: string;
}

export const companyStrengths: CompanyStrength[] = [
  {
    number: "01",
    title: "Konsultasi Cepat & Responsif",
    description: "Konsultasi cepat dan responsif",
  },
  {
    number: "02",
    title: "Pilihan Bahan",
    description: "Pilihan bahan sesuai kebutuhan",
  },
  {
    number: "03",
    title: "Sablon & Bordir",
    description: "Kualitas sablon dan bordir",
  },
  {
    number: "04",
    title: "Tenaga Kerja Terlatih",
    description: "Tenaga kerja terlatih",
  },
  {
    number: "05",
    title: "Quality Control",
    description: "Quality control",
  },
  {
    number: "06",
    title: "Packing Sebelum Pengiriman",
    description: "Packing sebelum pengiriman",
  },
  {
    number: "07",
    title: "Konsultasi Desain Gratis",
    description: "Konsultasi desain gratis",
  },
  {
    number: "08",
    title: "Bantuan Desain",
    description: "Bantuan desain",
  },
  {
    number: "09",
    title: "Pengiriman Cepat",
    description: "Pengiriman cepat",
  },
];
