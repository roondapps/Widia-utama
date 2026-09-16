import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { products } from "@/lib/data/products";

const navigation = [
  { href: "/custom-order", label: "Custom Order" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/factory", label: "Factory" },
  { href: "/about", label: "About" },
  { href: "/catalog", label: "Catalog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-700 bg-navy-900">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
        {/* Company */}
        <div>
          <p className="font-display text-lg font-medium text-paper">
            Widia Utama
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper-muted">
            Melayani Nusantara, Mengutamakan Anda. Apparel and workwear
            manufacturing partner sejak 2005.
          </p>
        </div>

        {/* Products */}
        <div>
          <p className="text-sm font-medium text-paper">Products</p>
          <ul className="mt-4 space-y-3">
            {products.map((product) => (
              <li key={product.slug}>
                <Link
                  href={`/products/${product.slug}`}
                  className="text-sm text-paper-muted hover:text-paper"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services / Navigation */}
        <div>
          <p className="text-sm font-medium text-paper">Navigation</p>
          <ul className="mt-4 space-y-3">
            {navigation.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-paper-muted hover:text-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-sm font-medium text-paper">Contact</p>
          <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-paper-muted">
            <p>PT Widia Utama</p>
            <p>Perum Pondok Maritim Indah, Blok TT Kav.8 No.1</p>
            <p>Balasklumprik, Wiyung, Surabaya 60222</p>
            <p className="mt-3">
              <a href="https://wa.me/6281331208737" className="hover:text-paper">
                WhatsApp: 0813 3120 8737
              </a>
            </p>
            <p>
              <a href="mailto:widiamerta@yahoo.com" className="hover:text-paper">
                widiamerta@yahoo.com
              </a>
            </p>
          </address>
        </div>
      </Container>

      <div className="border-t border-ink-700 py-6">
        <Container>
          <p className="text-xs text-paper-faint">
            &copy; {new Date().getFullYear()} PT Widia Utama. Seluruh hak
            cipta dilindungi.
          </p>
        </Container>
      </div>
    </footer>
  );
}
