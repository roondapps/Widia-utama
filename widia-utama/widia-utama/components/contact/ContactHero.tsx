import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Eyebrow, Display, BodyLarge } from "@/components/ui/Typography";

export function ContactHero() {
  return (
    <Section tone="ink" className="pb-10 pt-8 md:pt-12">
      <Container>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
        <Eyebrow className="mt-8">CONTACT</Eyebrow>
        <Display as="h1" className="mt-6 max-w-2xl">
          LET&apos;S TALK
          <br />
          ABOUT YOUR PROJECT.
        </Display>
        <BodyLarge className="mt-6 max-w-lg">
          Punya kebutuhan apparel untuk perusahaan, organisasi, atau proyek
          Anda? Hubungi PT Widia Utama untuk mendiskusikan kebutuhan
          produksi Anda.
        </BodyLarge>
      </Container>
    </Section>
  );
}
