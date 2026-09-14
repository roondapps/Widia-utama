import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { H2, Body } from "@/components/ui/Typography";
import { companyStrengths } from "@/lib/data/strengths";

export function WhyWidiaUtama() {
  return (
    <Section tone="ink">
      <Container className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Reveal>
          <H2 className="md:sticky md:top-28">
            WHY
            <br />
            WIDIA UTAMA
          </H2>
        </Reveal>

        <Reveal delay={100}>
          <ul>
            {companyStrengths.map((strength) => (
              <li
                key={strength.number}
                className="flex items-baseline gap-5 border-t border-ink-700 py-5 first:border-t-0 md:first:border-t"
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] rounded-full bg-emerald-500"
                />
                <Body className="text-paper">{strength.description}</Body>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
