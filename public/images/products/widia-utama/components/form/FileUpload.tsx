"use client";

import { useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "application/pdf"];
const ACCEPTED_LABEL = "JPG, PNG, atau PDF";
const MAX_SIZE_MB = 10;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

interface FileUploadProps {
  label: string;
  onFileChange: (file: File | null) => void;
  error?: string;
}

export function FileUpload({ label, onFileChange, error }: FileUploadProps) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [localError, setLocalError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;

    if (!file) {
      setFileName(null);
      setLocalError(null);
      onFileChange(null);
      return;
    }

    if (!ACCEPTED_TYPES.includes(file.type)) {
      setLocalError(`Format file harus ${ACCEPTED_LABEL}.`);
      setFileName(null);
      onFileChange(null);
      if (inputRef.current) inputRef.current.value = "";
      return;
    }

    if (file.size > MAX_SIZE_BYTES) {
      setLocalError(`Ukuran file maksimal ${MAX_SIZE_MB}MB.`);
      setFileName(null);
      onFileChange(null);
      if (inputRef.current) inputRef.current.value = "";
      return;
    }

    setLocalError(null);
    setFileName(file.name);
    onFileChange(file);
  }

  function handleRemove() {
    setFileName(null);
    setLocalError(null);
    onFileChange(null);
    if (inputRef.current) inputRef.current.value = "";
  }

  const combinedError = error ?? localError ?? undefined;

  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className="text-sm text-paper-muted">
        {label}
      </label>

      <div
        className={cn(
          "border border-dashed border-ink-700 bg-ink-800/40 px-4 py-6 text-center transition-colors",
          combinedError && "border-red-400/60"
        )}
      >
        <input
          ref={inputRef}
          id={inputId}
          type="file"
          accept=".jpg,.jpeg,.png,.pdf,image/jpeg,image/png,application/pdf"
          onChange={handleChange}
          aria-describedby={`${inputId}-hint${combinedError ? ` ${inputId}-error` : ""}`}
          aria-invalid={combinedError ? "true" : undefined}
          className="block w-full cursor-pointer text-sm text-paper-muted file:mr-4 file:cursor-pointer file:border-0 file:bg-emerald-500 file:px-4 file:py-2 file:text-sm file:font-medium file:text-ink-950 hover:file:bg-emerald-400"
        />

        {fileName && (
          <div className="mt-3 flex items-center justify-center gap-3 text-sm text-paper">
            <span className="truncate">{fileName}</span>
            <button
              type="button"
              onClick={handleRemove}
              className="text-paper-faint underline underline-offset-2 hover:text-paper"
            >
              Hapus
            </button>
          </div>
        )}
      </div>

      <p id={`${inputId}-hint`} className="text-xs text-paper-faint">
        Format {ACCEPTED_LABEL}, maksimal {MAX_SIZE_MB}MB. File belum
        terkirim ke server — penyimpanan file belum terhubung ke backend.
      </p>

      {combinedError && (
        <p id={`${inputId}-error`} role="alert" className="text-xs text-red-400">
          {combinedError}
        </p>
      )}
    </div>
  );
}
