import { ButtonLink } from "@/components/ui/Button";
import { H2, Body } from "@/components/ui/Typography";

interface QuoteSuccessProps {
  whatsappHref: string;
}

export function QuoteSuccess({ whatsappHref }: QuoteSuccessProps) {
  return (
    <div
      role="status"
      className="border border-ink-700 bg-ink-800/40 p-8 text-center md:p-12"
    >
      <H2 className="text-2xl md:text-3xl">REQUEST RECEIVED</H2>
      <Body className="mx-auto mt-4 max-w-sm">
        Terima kasih. Informasi kebutuhan Anda sudah siap untuk diproses.
      </Body>

      <ButtonLink
        href={whatsappHref}
        variant="whatsapp"
        size="lg"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8"
      >
        Continue to WhatsApp
      </ButtonLink>
    </div>
  );
}
