import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { H2, H3 } from "@/components/ui/Typography";
import { companyStrengths } from "@/lib/data/strengths";

export function CompanyStrengths() {
  return (
    <Section tone="navy">
      <Container>
        <Reveal className="max-w-xl">
          <H2>WHY WIDIA UTAMA</H2>
        </Reveal>

        <Reveal delay={100}>
          <ol className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {companyStrengths.map((strength) => (
              <li key={strength.number} className="border-t border-ink-700 pt-4">
                <span className="font-display text-sm text-emerald-400">
                  {strength.number}
                </span>
                <H3 as="h3" className="mt-2 text-base md:text-lg">
                  {strength.title}
                </H3>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </Section>
  );
}
