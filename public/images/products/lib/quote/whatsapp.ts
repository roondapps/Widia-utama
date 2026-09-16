import type { QuoteFormData } from "@/lib/quote/submitQuote";

const WHATSAPP_NUMBER = "6281331208737";

export function buildQuoteWhatsAppMessage(data: QuoteFormData): string {
  const need =
    data.projectType === "Lainnya" && data.projectTypeOther.trim()
      ? `Lainnya — ${data.projectTypeOther.trim()}`
      : data.projectType || "-";

  // Required fields are guaranteed non-empty by QuoteForm validation before
  // this ever runs; the "-" fallback here is only a defensive backstop.
  const requiredFields: { label: string; value: string }[] = [
    { label: "Nama", value: data.fullName || "-" },
    { label: "Perusahaan", value: data.company || "-" },
    { label: "Produk", value: data.product || "-" },
    { label: "Jumlah", value: data.quantity || "-" },
    { label: "Kebutuhan", value: need },
  ];

  // Optional fields: omit the label+value pair entirely when empty, rather
  // than printing "undefined"/"null" or an empty placeholder line.
  const optionalFields: { label: string; value: string }[] = [];
  if (data.deadline.trim()) {
    optionalFields.push({ label: "Deadline", value: data.deadline.trim() });
  }
  if (data.notes.trim()) {
    optionalFields.push({ label: "Catatan", value: data.notes.trim() });
  }

  const fieldLines = [...requiredFields, ...optionalFields].flatMap((f) => [
    `${f.label}:`,
    f.value,
    "",
  ]);
  fieldLines.pop(); // drop the trailing blank line after the last field

  const lines = [
    "Halo PT Widia Utama,",
    "",
    "Saya ingin mengajukan kebutuhan apparel.",
    "",
    ...fieldLines,
    "",
    "Terima kasih.",
  ];

  return lines.join("\n");
}

export function buildQuoteWhatsAppLink(data: QuoteFormData): string {
  const message = buildQuoteWhatsAppMessage(data);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
