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
          <div className="mt-5 flex flex-wrap gap-4 items-center justify-center">
  {[
    { src: "/images/clients/client.png", alt: "Pelindo" },
    { src: "/images/clients/client1.png", alt: "KT&G" },
    { src: "/images/clients/client2.png", alt: "Barry Callebaut" }
  ].map((logo) => (
    <div key={logo.alt} className="bg-white/90 rounded-xl p-3 h-16 w-28 flex items-center justify-center shadow-lg">
      <img
        src={logo.src}
        alt={logo.alt}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
