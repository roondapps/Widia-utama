import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { products } from "@/lib/data/products";
import { portfolioProjects } from "@/lib/data/portfolio";

/**
 * Lists every route that actually exists in the app today. Built from the
 * same route list this project's pages render, plus the same product/
 * portfolio data sources used elsewhere — never a hand-maintained second
 * copy that could drift out of sync.
 *
 * URLs are prefixed with siteConfig.url when it's set. Until a real
 * production domain is confirmed (NEXT_PUBLIC_SITE_URL), paths are left
 * domain-relative rather than guessing one — see lib/site-config.ts.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url ?? "";

  const staticPaths = [
    "/",
    "/products",
    "/custom-order",
    "/portfolio",
    "/about",
    "/factory",
    "/catalog",
    "/contact",
  ];

  const productPaths = products.map((product) => `/products/${product.slug}`);
  const portfolioPaths = portfolioProjects.map(
    (project) => `/portfolio/${project.slug}`
  );

  const allPaths = [...staticPaths, ...productPaths, ...portfolioPaths];

  return allPaths.map((path) => ({
    url: `${base}${path}`,
  }));
}
