// scripts/generate-sitemap.mjs
//
// Generates dist/sitemap.xml from src/data/seoRoutes.js — the single
// source of truth also used to decide indexability per page. Only routes
// marked indexable:true are included, so unbuilt/thin pages never end up
// in the sitemap even if they exist as a live (noindexed) URL.
//
// Runs automatically after `npm run build` via the "postbuild" script in
// package.json — no manual step required when a new solution, industry,
// or software page gets written.

import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { seoRoutes } from "../src/data/seoRoutes.js";
import { SITE_URL } from "../src/lib/seoConfig.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");

function escapeXml(s) {
  return s.replace(/&/g, "&amp;");
}

function buildSitemap(routes) {
  const urls = routes
    .filter((r) => r.indexable)
    .map(
      (r) => `  <url>
    <loc>${escapeXml(SITE_URL + r.path)}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

if (!existsSync(distDir)) mkdirSync(distDir, { recursive: true });

const xml = buildSitemap(seoRoutes);
writeFileSync(path.join(distDir, "sitemap.xml"), xml, "utf-8");

const included = seoRoutes.filter((r) => r.indexable).length;
const excluded = seoRoutes.length - included;
console.log(
  `[generate-sitemap] wrote dist/sitemap.xml — ${included} indexable URLs included, ${excluded} noindex/unbuilt URLs excluded.`
);
