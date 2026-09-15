import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-white">
      {/* Gambar Poster Utuh */}
      <img
        src="/images/hero/hero.jpg"
        alt="Widia Utama - Konveksi Profesional Sejak 2005"
        className="absolute inset-0 w-full h-full object-contain z-0"
      />

      {/* Tombol Aksi (diletakkan di bawah poster agar tidak menutupi teks) */}
      <div className="relative z-10 mt-[60vh] flex flex-wrap gap-4 justify-center">
        <ButtonLink href="/custom-order" variant="primary" size="lg">
          Request a Quote
        </ButtonLink>
        <ButtonLink
          href="https://wa.me/6281331208737"
          variant="whatsapp"
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </ButtonLink>
      </div>
    </section>
  );
}