"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";

interface NavLink {
  href: string;
  label: string;
}

export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Tutup menu" : "Buka menu"}
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded"
      >
        <span
          className={`h-px w-5 bg-paper transition-transform duration-200 ${
            open ? "translate-y-[6px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-px w-5 bg-paper transition-opacity duration-200 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-px w-5 bg-paper transition-transform duration-200 ${
            open ? "-translate-y-[6px] -rotate-45" : ""
          }`}
        />
      </button>

      <div
        id="mobile-nav-panel"
        className={`absolute inset-x-0 top-full z-40 border-b border-ink-700 bg-ink-900/98 backdrop-blur transition-[max-height,opacity] duration-200 ease-out ${
          open
            ? "max-h-[calc(100vh-5rem)] overflow-y-auto opacity-100"
            : "pointer-events-none max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base text-paper-muted transition-colors hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-3 border-t border-ink-700 px-6 py-6">
          <ButtonLink href="/custom-order" variant="secondary" size="md">
            Request a Quote
          </ButtonLink>
          <ButtonLink
            href="https://wa.me/6281331208737"
            variant="whatsapp"
            size="md"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
