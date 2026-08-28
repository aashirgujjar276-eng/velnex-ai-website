import {
  solutions,
  industries,
  aiSoftware,
  resources,
  company,
  legal,
} from "./sitemap.js";
import { blogPosts } from "./blogContent.js";
import { solutionsContent } from "./solutionsContent.js";
import { industriesContent } from "./industriesContent.js";
import { industryHubContent } from "./industryHubContent.js";
import { aiSoftwareContent } from "./aiSoftwareContent.js";

/**
 * Master list of every real URL on the site, with its indexability.
 *
 * A dynamic detail page (a solution/industry/software slug) is only
 * `indexable: true` once it has a real content entry — until then its
 * route falls back to the generic Placeholder component, which is
 * intentionally noindexed so half-written shell pages never enter the
 * index as thin/duplicate content. Flip a slug to indexable automatically
 * just by writing its content entry; no separate list to maintain.
 */
function today() {
  return new Date().toISOString().slice(0, 10);
}

export function buildSeoRoutes() {
  const routes = [];

  routes.push({ path: "/", changefreq: "weekly", priority: 1.0, indexable: true });
  routes.push({ path: "/pricing", changefreq: "monthly", priority: 0.9, indexable: true });
  routes.push({ path: "/solutions", changefreq: "monthly", priority: 0.9, indexable: true });
  routes.push({ path: "/industries", changefreq: "monthly", priority: 0.9, indexable: true });
  routes.push({ path: "/ai-software", changefreq: "monthly", priority: 0.9, indexable: true });
  routes.push({ path: "/resources", changefreq: "monthly", priority: 0.6, indexable: true });

  for (const s of solutions) {
    routes.push({
      path: `/solutions/${s.slug}`,
      changefreq: "monthly",
      priority: 0.8,
      indexable: Boolean(solutionsContent[s.slug]),
    });
  }

  // Industries: hub pages (with `children`) get one route per hub — indexable
  // once industryHubContent has an entry — plus one route per trade/child
  // page beneath it. Flat industries get a single route. A page only
  // becomes indexable once real content exists for it, so newly-scaffolded
  // structure stays out of the sitemap until written.
  for (const i of industries) {
    routes.push({
      path: `/industries/${i.slug}`,
      changefreq: "monthly",
      priority: 0.8,
      indexable: i.children ? Boolean(industryHubContent[i.slug]) : Boolean(industriesContent[i.slug]),
    });
    if (i.children) {
      for (const c of i.children) {
        routes.push({
          path: `/industries/${c.slug}`,
          changefreq: "monthly",
          priority: 0.7,
          indexable: Boolean(industriesContent[c.slug]),
        });
      }
    }
  }

  for (const a of aiSoftware) {
    routes.push({
      path: `/ai-software/${a.slug}`,
      changefreq: "monthly",
      priority: 0.8,
      indexable: Boolean(aiSoftwareContent[a.slug]),
    });
  }

  // Resources sub-pages: most aren't written yet (Placeholder shells) —
  // excluded from indexing until real content exists, same rule as
  // solutions/industries/software above. FAQs has real content now.
  for (const r of resources) {
    routes.push({ path: `/resources/${r.slug}`, changefreq: "weekly", priority: 0.5, indexable: r.slug === "faqs" || r.slug === "blog" });
  }
  for (const p of blogPosts) {
    routes.push({ path: `/resources/blog/${p.slug}`, changefreq: "monthly", priority: 0.5, indexable: true });
  }

  for (const c of company) {
    routes.push({ path: c.path, changefreq: "monthly", priority: c.slug === "contact" ? 0.9 : 0.6, indexable: true });
  }

  for (const l of legal) {
    routes.push({ path: l.path, changefreq: "yearly", priority: 0.3, indexable: true });
  }

  return routes.map((r) => ({ lastmod: today(), ...r }));
}

export const seoRoutes = buildSeoRoutes();
