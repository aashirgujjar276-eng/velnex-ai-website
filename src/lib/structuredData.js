import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "./seoConfig.js";
import { social } from "../data/sitemap.js";

/**
 * Structured data (JSON-LD) builders.
 * Every function here only uses data that already exists elsewhere on the
 * site (sitemap.js, page content) — nothing here invents ratings, reviews,
 * addresses, or certifications that aren't confirmed.
 */

/** Sitewide Organization schema. Emitted once, on every page. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    sameAs: social.map((s) => s.href),
  };
}

/**
 * BreadcrumbList schema for a page.
 * `trail` is an array of { label, path } ending with the current page.
 * Home is added automatically.
 */
export function breadcrumbSchema(trail = []) {
  const items = [{ label: "Home", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** FAQPage schema — only use with faqs that are actually rendered on the page. */
export function faqSchema(faqs = []) {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Service schema for a Solution / Industry / Software detail page. */
export function serviceSchema({ name, description, path, serviceType }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    ...(serviceType ? { serviceType } : {}),
  };
}
