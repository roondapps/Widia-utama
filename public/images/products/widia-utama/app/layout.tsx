import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site-config";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const defaultTitle = "PT Widia Utama | Workwear & Apparel Manufacturing";
const defaultDescription =
  "PT Widia Utama adalah konveksi di Surabaya yang membuat pakaian custom, seragam kerja, dan apparel promosi sesuai kebutuhan perusahaan Anda.";

export const metadata: Metadata = {
  // Only set once a real production domain is confirmed via
  // NEXT_PUBLIC_SITE_URL — never a fabricated one. See lib/site-config.ts.
  metadataBase: siteConfig.url ? new URL(siteConfig.url) : undefined,
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    siteName: siteConfig.name,
    type: "website",
    locale: siteConfig.locale,
    url: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  email: "widiamerta@yahoo.com",
  telephone: "+6281331208737",
  foundingDate: "2005",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Perum Pondok Maritim Indah, Blok TT Kav.8 No.1, Balasklumprik, Wiyung",
    addressLocality: "Surabaya",
    addressRegion: "Jawa Timur",
    postalCode: "60222",
    addressCountry: "ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>
        {/* eslint-disable-next-line react/no-danger */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
