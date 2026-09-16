import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { H2, H3, Body } from "@/components/ui/Typography";
import { productionSteps } from "@/lib/data/process";

interface ProductionProcessProps {
  title?: ReactNode;
}

export function ProductionProcess({
  title = (
    <>
      FROM IDEA
      <br />
      TO DELIVERY.
    </>
  ),
}: ProductionProcessProps) {
  return (
    <Section tone="ink">
      <Container>
        <Reveal className="max-w-xl">
          <H2>{title}</H2>
        </Reveal>

        {/* Mobile: vertical list with a connecting rule. Desktop: horizontal timeline. */}
        <Reveal delay={100}>
          <ol className="mt-14 flex flex-col divide-y divide-ink-700 md:flex-row md:divide-x md:divide-y-0">
            {productionSteps.map((step) => (
              <li key={step.number} className="flex-1 py-6 pl-5 md:border-t-2 md:border-emerald-500 md:py-0 md:pl-0 md:pr-6 md:pt-6">
                <p className="font-display text-sm text-emerald-400">
                  {step.number}
                </p>
                <H3 as="h3" className="mt-2 text-base md:text-lg">
                  {step.title}
                </H3>
              </li>
            ))}
          </ol>
        </Reveal>

        <Body className="mt-8 max-w-md text-paper-faint">
          Pembayaran uang muka 50% dilakukan setelah desain dan bahan
          dikonfirmasi.
        </Body>
      </Container>
    </Section>
  );
}
