import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { H2, Body, Small } from "@/components/ui/Typography";

const PLACEHOLDER = "[COMPANY DATA NEEDED]";

const facts: { label: string; value: string }[] = [
  { label: "Founded", value: "2005" },
  { label: "Location", value: "Surabaya, Jawa Timur" },
  { label: "Coverage", value: "Proyek kecil hingga besar di berbagai kota di Indonesia" },
  { label: "Founder", value: PLACEHOLDER },
  { label: "Team Size", value: PLACEHOLDER },
  { label: "Facility Size", value: PLACEHOLDER },
];

export function CompanyStory() {
  return (
    <Section tone="ink">
      <Container className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Reveal>
          <H2 className="md:sticky md:top-28">OUR STORY</H2>
        </Reveal>

        <Reveal delay={100}>
          <Body className="max-w-xl">
            PT Widia Utama merupakan perusahaan konveksi yang memproduksi
            pakaian untuk kebutuhan seragam kerja dan promosi sesuai
            kebutuhan pelanggan. Perusahaan telah beroperasi sejak 2005 dan
            berlokasi di Surabaya, Jawa Timur, melayani kebutuhan proyek
            kecil hingga besar di berbagai kota di Indonesia.
          </Body>

          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.label} className="border-t border-ink-700 pt-3">
                <dt className="text-xs font-medium uppercase tracking-wide text-paper-faint">
                  {fact.label}
                </dt>
                <dd className="mt-1">
                  <Small
                    className={
                      fact.value === PLACEHOLDER ? "text-paper-faint" : "text-paper-muted"
                    }
                  >
                    {fact.value}
                  </Small>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </Section>
  );
}
