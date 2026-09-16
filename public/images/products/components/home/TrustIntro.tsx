import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { H2, BodyLarge, Small } from "@/components/ui/Typography";

export function TrustIntro() {
  return (
    <Section tone="ink">
      <Container>
        <Reveal className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <H2>
              APPAREL BUILT
              <br />
              AROUND YOUR NEEDS.
            </H2>
            <BodyLarge className="mt-6 max-w-md">
              PT Widia Utama merupakan perusahaan konveksi yang memproduksi
              pakaian untuk kebutuhan seragam kerja dan promosi sesuai
              kebutuhan pelanggan.
            </BodyLarge>
          </div>

          <div className="flex flex-col justify-center gap-8 border-t border-ink-700 pt-8 md:border-t-0 md:border-l md:pl-16 md:pt-0">
            <div>
              <p className="font-display text-3xl text-paper">Since 2005</p>
              <Small className="mt-1">Beroperasi dari Surabaya, Jawa Timur</Small>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-16 border-t border-ink-700 pt-10">
          <Small className="text-paper-faint">Dipercaya oleh klien di berbagai kota</Small>
          <div className="mt-5 flex flex-wrap gap-8 items-center justify-center">
  <img
    src="/images/clients/client.png"
    alt="Pelindo"
    className="h-12 w-auto object-contain"
  />
  <img
    src="/images/clients/client1.png"
    alt="Klien 1"
    className="h-12 w-auto object-contain"
  />
  <img
    src="/images/clients/client2.png"
    alt="Klien 2"
    className="h-12 w-auto object-contain"
  />
  <img
    src="/images/clients/client3.png"
    alt="ecco indonesia"
    className="h-12 w-auto object-contain"
  />
  <img
    src="/images/clients/client4.png"
    alt="klien 4"
    className="h-12 w-auto object-contain"
  />
</div>
        </Reveal>
      </Container>
    </Section>
  );
}
