"use client";

import { useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { FieldWrapper, TextInput, TextArea, Select } from "@/components/form/FormField";
import { FileUpload } from "@/components/form/FileUpload";
import { QuoteSuccess } from "@/components/form/QuoteSuccess";
import { products } from "@/lib/data/products";
import {
  emptyQuoteFormData,
  projectTypeOptions,
  submitQuote,
  type QuoteFormData,
  type QuoteSubmitStatus,
} from "@/lib/quote/submitQuote";
import { buildQuoteWhatsAppLink } from "@/lib/quote/whatsapp";

type FormErrors = Partial<Record<keyof QuoteFormData, string>>;

function findMatchingProduct(value: string | null): string {
  if (!value) return "";
  const match = products.find(
    (p) => p.name.toLowerCase() === value.toLowerCase()
  );
  return match?.name ?? "";
}

function validate(data: QuoteFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) errors.fullName = "Nama lengkap wajib diisi.";
  if (!data.company.trim()) errors.company = "Nama perusahaan wajib diisi.";
  if (!data.email.trim()) {
    errors.email = "Email wajib diisi.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Format email tidak valid.";
  }
  if (!data.whatsapp.trim()) {
    errors.whatsapp = "Nomor WhatsApp wajib diisi.";
  }
  if (!data.product) errors.product = "Pilih produk yang dibutuhkan.";
  if (!data.quantity.trim()) {
    errors.quantity = "Perkiraan jumlah wajib diisi.";
  }
  if (!data.projectType) {
    errors.projectType = "Pilih kebutuhan Anda.";
  } else if (data.projectType === "Lainnya" && !data.projectTypeOther.trim()) {
    errors.projectTypeOther = "Ceritakan kebutuhan Anda secara singkat.";
  }

  return errors;
}

export function QuoteForm() {
  const searchParams = useSearchParams();
  const prefillProduct = findMatchingProduct(searchParams.get("product"));

  const [data, setData] = useState<QuoteFormData>({
    ...emptyQuoteFormData,
    product: prefillProduct,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<QuoteSubmitStatus>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const whatsappHref = useMemo(() => buildQuoteWhatsAppLink(data), [data]);

  function update<K extends keyof QuoteFormData>(key: K, value: QuoteFormData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nextErrors = validate(data);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstErrorField = Object.keys(nextErrors)[0];
      const el = formRef.current?.querySelector<HTMLElement>(
        `[name="${firstErrorField}"]`
      );
      el?.focus();
      return;
    }

    setStatus("submitting");
    setSubmitError(null);

    const result = await submitQuote(data);

    if (result.ok) {
      setStatus("success");
    } else {
      setStatus("error");
      setSubmitError(
        result.error ?? "Gagal mengirim. Silakan coba lagi atau hubungi kami via WhatsApp."
      );
    }
  }

  if (status === "success") {
    return <QuoteSuccess whatsappHref={whatsappHref} />;
  }

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit} className="space-y-6">
      <FieldWrapper label="Nama Lengkap" htmlFor="fullName" required error={errors.fullName}>
        <TextInput
          id="fullName"
          name="fullName"
          value={data.fullName}
          onChange={(e) => update("fullName", e.target.value)}
          aria-invalid={Boolean(errors.fullName)}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          autoComplete="name"
        />
      </FieldWrapper>

      <FieldWrapper label="Nama Perusahaan" htmlFor="company" required error={errors.company}>
        <TextInput
          id="company"
          name="company"
          value={data.company}
          onChange={(e) => update("company", e.target.value)}
          aria-invalid={Boolean(errors.company)}
          aria-describedby={errors.company ? "company-error" : undefined}
          autoComplete="organization"
        />
      </FieldWrapper>

      <div className="grid gap-6 sm:grid-cols-2">
        <FieldWrapper label="Email" htmlFor="email" required error={errors.email}>
          <TextInput
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            autoComplete="email"
          />
        </FieldWrapper>

        <FieldWrapper label="Nomor WhatsApp" htmlFor="whatsapp" required error={errors.whatsapp}>
          <TextInput
            id="whatsapp"
            name="whatsapp"
            type="tel"
            inputMode="tel"
            value={data.whatsapp}
            onChange={(e) => update("whatsapp", e.target.value)}
            aria-invalid={Boolean(errors.whatsapp)}
            aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
            autoComplete="tel"
          />
        </FieldWrapper>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FieldWrapper label="Produk yang Dibutuhkan" htmlFor="product" required error={errors.product}>
          <Select
            id="product"
            name="product"
            value={data.product}
            onChange={(e) => update("product", e.target.value)}
            aria-invalid={Boolean(errors.product)}
            aria-describedby={errors.product ? "product-error" : undefined}
          >
            <option value="">Pilih produk</option>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
          </Select>
        </FieldWrapper>

        <FieldWrapper
          label="Perkiraan Jumlah"
          htmlFor="quantity"
          required
          error={errors.quantity}
          hint="Belum ada minimum pemesanan resmi — isi perkiraan Anda."
        >
          <TextInput
            id="quantity"
            name="quantity"
            value={data.quantity}
            onChange={(e) => update("quantity", e.target.value)}
            aria-invalid={Boolean(errors.quantity)}
            aria-describedby={
              [errors.quantity ? "quantity-error" : "", "quantity-hint"]
                .filter(Boolean)
                .join(" ") || undefined
            }
            placeholder="mis. 50 pcs"
          />
        </FieldWrapper>
      </div>

      <FieldWrapper label="Kebutuhan" htmlFor="projectType" required error={errors.projectType}>
        <Select
          id="projectType"
          name="projectType"
          value={data.projectType}
          onChange={(e) =>
            update("projectType", e.target.value as QuoteFormData["projectType"])
          }
          aria-invalid={Boolean(errors.projectType)}
          aria-describedby={errors.projectType ? "projectType-error" : undefined}
        >
          <option value="">Pilih kebutuhan</option>
          {projectTypeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </FieldWrapper>

      {data.projectType === "Lainnya" && (
        <FieldWrapper
          label="Jelaskan Kebutuhan Lainnya"
          htmlFor="projectTypeOther"
          required
          error={errors.projectTypeOther}
        >
          <TextInput
            id="projectTypeOther"
            name="projectTypeOther"
            value={data.projectTypeOther}
            onChange={(e) => update("projectTypeOther", e.target.value)}
            aria-invalid={Boolean(errors.projectTypeOther)}
            aria-describedby={
              errors.projectTypeOther ? "projectTypeOther-error" : undefined
            }
          />
        </FieldWrapper>
      )}

      <FieldWrapper
        label="Target Penggunaan / Deadline"
        htmlFor="deadline"
        hint="Opsional"
      >
        <TextInput
          id="deadline"
          name="deadline"
          type="date"
          value={data.deadline}
          onChange={(e) => update("deadline", e.target.value)}
          aria-describedby="deadline-hint"
        />
      </FieldWrapper>

      <FileUpload
        label="Upload Design (opsional)"
        onFileChange={(file) => update("designFileName", file?.name ?? null)}
      />

      <FieldWrapper label="Ceritakan Kebutuhan Anda" htmlFor="notes" hint="Opsional">
        <TextArea
          id="notes"
          name="notes"
          value={data.notes}
          onChange={(e) => update("notes", e.target.value)}
          placeholder="Contoh: kebutuhan seragam untuk tim perusahaan, model, warna, bordir/sablon, dan informasi lain yang sudah Anda miliki."
          aria-describedby="notes-hint"
        />
      </FieldWrapper>

      {status === "error" && submitError && (
        <p role="alert" className="text-sm text-red-400">
          {submitError}
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Mengirim..." : "Request a Quote"}
      </Button>
    </form>
  );
}
