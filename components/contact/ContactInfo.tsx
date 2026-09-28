import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { H2, H3, Body, Small } from "@/components/ui/Typography";

export function ContactInfo() {
  return (
    <Section tone="ink" className="pt-0">
      <Container>
        <Reveal className="grid gap-10 border-t border-ink-700 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Small className="text-paper-faint">WhatsApp / Phone</Small>
            <H3 as="p" className="mt-2 text-xl md:text-2xl">
              0813 3120 8737
            </H3>
            <ButtonLink
              href="https://wa.me/6281331208737"
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="md"
              className="mt-5"
            >
              Chat on WhatsApp
            </ButtonLink>
          </div>

          <div>
            <Small className="text-paper-faint">Email</Small>
            <H3 as="p" className="mt-2 break-all text-xl md:text-2xl">
              widiamerta@yahoo.com
            </H3>
            <ButtonLink
              href="mailto:widiamerta@yahoo.com"
              variant="secondary"
              size="md"
              className="mt-5"
            >
              Send Email
            </ButtonLink>
          </div>

          <div>
            <Small className="text-paper-faint">PT Widia Utama</Small>
            <Body className="mt-2 max-w-xs text-paper-muted">
              Perum Pondok Maritim Indah, Blok TT Kav.8 No.1
              <br />
              Balasklumprik, Wiyung
              <br />
              Surabaya 60222, Jawa Timur
            </Body>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-20">
          <H2>BASED IN SURABAYA</H2>
          <Body className="mt-4 max-w-md">
            Perum Pondok Maritim Indah, Blok TT Kav.8 No.1, Balasklumprik,
            Wiyung, Surabaya 60222, Jawa Timur.
          </Body>

          <div className="mt-8 aspect-[16/9] w-full overflow-hidden border border-ink-700 md:aspect-[16/6]">
  <iframe
    src="https://www.google.com/maps?q=MMGQ%2BF8+Balas+Klumprik+Surabaya&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen
    title="Lokasi PT Widia Utama"
  />
</div>
        </Reveal>
      </Container>
    </Section>
  );
}
