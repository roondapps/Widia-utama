export interface ProcessStep {
  number: string;
  title: string;
}

export const productionSteps: ProcessStep[] = [
  { number: "01", title: "Konsultasi Desain" },
  { number: "02", title: "Layanan Desain Gratis" },
  { number: "03", title: "Produksi" },
  { number: "04", title: "Konfirmasi Pembayaran" },
  { number: "05", title: "Penerimaan Faktur" },
  { number: "06", title: "Pengiriman" },
];
