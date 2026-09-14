import type { Metadata } from "next";

export const siteConfig = {
  name: "PT Widia Utama",
  locale: "id_ID",
  /**
   * No production domain has been confirmed yet. Set the
   * NEXT_PUBLIC_SITE_URL environment variable once one exists — every
   * canonical/Open Graph URL in this project reads from this single
   * constant, so nothing else needs to change. Left undefined (not a
   * fabricated domain) until then.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL,
  /**
   * Path under /public once a real Open Graph share image is designed,
   * e.g. "/og-image.jpg". Left null (not a fabricated path) until then —
   * pages simply omit `openGraph.images` while this is null.
   */
  ogImage: null as string | null,
};

interface PageMetadataInput {
  title: string;
  description?: string;
  /** Site-relative path, e.g. "/products" or "/products/polo-shirt". */
  path: string;
}

/**
 * Builds a consistent Metadata object (title, description, canonical,
 * Open Graph) for a single route. Centralizing this avoids repeating the
 * same openGraph/alternates boilerplate — and the same omit-if-unknown
 * rules (no fake domain, no fake OG image) — on every page.
 */
export function buildMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      siteName: siteConfig.name,
      type: "website",
      locale: siteConfig.locale,
      url: path,
      ...(siteConfig.ogImage ? { images: [{ url: siteConfig.ogImage }] } : {}),
    },
  };
}
