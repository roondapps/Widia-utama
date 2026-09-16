import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Eyebrow, Display, BodyLarge, H3 } from "@/components/ui/Typography";
import { QuoteForm } from "@/components/form/QuoteForm";
import { QuoteContactPanel } from "@/components/form/QuoteContactPanel";
import { productionSteps } from "@/lib/data/process";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Request a Quote",
  description:
    "Halaman permintaan penawaran PT Widia Utama untuk kebutuhan apparel dan pakaian custom perusahaan.",
  path: "/custom-order",
});

export default function CustomOrderPage() {
  return (
    <>
      <Section tone="ink" className="pb-0 pt-8">
        <Container>
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Custom Order" }]}
          />
        </Container>
      </Section>

      <Section tone="ink" className="pb-10 pt-8 md:pt-12">
        <Container>
          <Eyebrow>CUSTOM ORDER</Eyebrow>
          <Display as="h1" className="mt-6 max-w-2xl text-[clamp(2.25rem,4.5vw,3.5rem)]">
            LET&apos;S BUILD
            <br />
            YOUR PROJECT.
          </Display>
          <BodyLarge className="mt-6 max-w-lg">
            Ceritakan kebutuhan apparel perusahaan Anda kepada kami. Tim PT
            Widia Utama siap membantu dari konsultasi desain hingga produksi.
          </BodyLarge>
        </Container>
      </Section>

      <Section tone="ink" className="pt-0">
        <Container className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-16">
          <div className="space-y-8 md:order-1">
            <QuoteContactPanel />

            <div>
              <H3 as="h2" className="text-lg md:text-xl">
                Proses Kerja Kami
              </H3>
              <ol className="mt-4 space-y-3 border-t border-ink-700 pt-4">
                {productionSteps.map((step) => (
                  <li key={step.number} className="flex gap-3 text-sm">
                    <span className="font-display text-emerald-400">
                      {step.number}
                    </span>
                    <span className="text-paper-muted">{step.title}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="md:order-2">
            <H3 as="h2" className="text-lg md:text-xl">
              Request a Quote
            </H3>
            <div className="mt-6">
              <Suspense fallback={null}>
                <QuoteForm />
              </Suspense>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
