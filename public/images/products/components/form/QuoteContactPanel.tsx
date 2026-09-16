import { H3, Body, Small } from "@/components/ui/Typography";

export function QuoteContactPanel() {
  return (
    <div className="border border-ink-700 bg-ink-800/40 p-6 md:p-8">
      <H3 as="h2" className="text-lg md:text-xl">
        PT Widia Utama
      </H3>
      <Body className="mt-1 text-sm">Surabaya, Jawa Timur</Body>

      <dl className="mt-6 space-y-4 text-sm">
        <div>
          <dt className="text-paper-faint">WhatsApp</dt>
          <dd className="mt-1 text-paper">
            <a href="https://wa.me/6281331208737" className="hover:text-emerald-300">
              0813 3120 8737
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-paper-faint">Email</dt>
          <dd className="mt-1 text-paper">
            <a href="mailto:widiamerta@yahoo.com" className="hover:text-emerald-300">
              widiamerta@yahoo.com
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-paper-faint">Alamat</dt>
          <dd className="mt-1 text-paper-muted">
            Perum Pondok Maritim Indah, Blok TT Kav.8 No.1
            <br />
            Balasklumprik, Wiyung, Surabaya 60222
          </dd>
        </div>
      </dl>

      <Small className="mt-6 block text-paper-faint">
        Tim kami akan menghubungi Anda melalui WhatsApp atau email setelah
        menerima informasi kebutuhan Anda.
      </Small>
    </div>
  );
}
