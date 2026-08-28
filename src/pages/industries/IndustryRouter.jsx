import React from "react";
import { useParams } from "react-router-dom";
import { industries } from "../../data/sitemap.js";
import IndustryHub from "./IndustryHub.jsx";
import IndustryDetail from "./IndustryDetail.jsx";

/**
 * Single entry point for every /industries/:slug URL. Looks the slug up
 * once and decides which template it needs:
 *  - a hub industry (has `children`, e.g. Home Services, Salons & Spas,
 *    Hotels & Restaurants) -> IndustryHub
 *  - anything else (a flat industry, or a trade page nested under a hub)
 *    -> IndustryDetail
 *
 * This replaces separately-registered static routes for each hub slug.
 * Those looked like they'd take priority over the dynamic :slug route
 * (and they do, for matching purposes), but a *static* route has no
 * :slug segment in its own path pattern, so useParams() inside the
 * page component came back empty on those routes — the page would
 * fail to find its own content and fall back to a placeholder. Routing
 * every /industries/:slug request through one dynamic route fixes that,
 * since useParams() always resolves correctly for a dynamic segment.
 */
export default function IndustryRouter() {
  const { slug } = useParams();
  const top = industries.find((i) => i.slug === slug);
  if (top && top.children) return <IndustryHub />;
  return <IndustryDetail />;
}
