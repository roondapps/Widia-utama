export type ProjectType =
  | "Seragam Perusahaan"
  | "Apparel Promosi"
  | "Kebutuhan Custom"
  | "Lainnya";

export const projectTypeOptions: ProjectType[] = [
  "Seragam Perusahaan",
  "Apparel Promosi",
  "Kebutuhan Custom",
  "Lainnya",
];

export interface QuoteFormData {
  fullName: string;
  company: string;
  email: string;
  whatsapp: string;
  product: string;
  quantity: string;
  projectType: ProjectType | "";
  projectTypeOther: string;
  deadline: string;
  notes: string;
  /** File metadata only — the file itself is never uploaded (no backend yet). */
  designFileName: string | null;
}

export const emptyQuoteFormData: QuoteFormData = {
  fullName: "",
  company: "",
  email: "",
  whatsapp: "",
  product: "",
  quantity: "",
  projectType: "",
  projectTypeOther: "",
  deadline: "",
  notes: "",
  designFileName: null,
};

export type QuoteSubmitStatus = "idle" | "submitting" | "success" | "error";

export interface QuoteSubmitResult {
  ok: boolean;
  error?: string;
}

/**
 * Submit handler for the Request a Quote form.
 *
 * IMPORTANT — no backend or email API is connected yet. This function
 * currently simulates a network round-trip and always resolves
 * successfully, purely so the submit-state UI (idle/submitting/success/
 * error) can be reviewed end-to-end. No data is actually sent or stored
 * anywhere.
 *
 * To connect a real backend later, replace the body below with an actual
 * request, e.g.:
 *
 *   const res = await fetch("/api/quote", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify(data),
 *   });
 *   if (!res.ok) return { ok: false, error: "Gagal mengirim, coba lagi." };
 *   return { ok: true };
 *
 * The calling component only depends on the returned QuoteSubmitResult
 * shape, so no UI changes should be needed once a backend exists.
 */
export async function submitQuote(
  data: QuoteFormData
): Promise<QuoteSubmitResult> {
  // Simulated latency so the "submitting" state is visible in the UI.
  await new Promise((resolve) => setTimeout(resolve, 900));

  // eslint-disable-next-line no-console
  console.info(
    "[submitQuote] Mock submit — no backend connected yet. Data was not sent or stored.",
    data
  );

  return { ok: true };
}
