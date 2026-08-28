import { useEffect } from "react";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_LOCALE,
  TWITTER_HANDLE,
} from "../lib/seoConfig.js";

function setMeta(attr, key, content) {
  if (content == null) return;
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setLink(rel, href) {
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

function setJsonLd(id, data) {
  let tag = document.getElementById(id);
  if (!data) {
    if (tag) tag.remove();
    return;
  }
  if (!tag) {
    tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.id = id;
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify(data);
}

/**
 * Drop <Seo /> once near the top of every routed page.
 *
 * - path: the page's route, e.g. "/pricing" or `/solutions/${slug}` — used
 *   to build the canonical URL and og:url. Required for every real page.
 * - title / description: unique per page. If omitted, sitewide defaults are
 *   used (only acceptable for pages that intentionally share them, e.g. a
 *   generic placeholder shell).
 * - noindex: true for thin/unbuilt placeholder pages, internal-only pages,
 *   or the 404 page — keeps them out of Google's index without blocking
 *   crawling (so links on them still get followed).
 * - jsonLd: a single schema object, or an array of them (e.g.
 *   [organizationSchema(), breadcrumbSchema(trail), faqSchema(faqs)]).
 */
export default function Seo({
  path,
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  type = "website",
  jsonLd,
}) {
  useEffect(() => {
    const fullTitle = title || DEFAULT_TITLE;
    const url = `${SITE_URL}${path || ""}`;
    const absImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta(
      "name",
      "robots",
      noindex ? "noindex, follow" : "index, follow"
    );

    if (path) setLink("canonical", url);

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", absImage);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", url);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", DEFAULT_LOCALE);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", absImage);
    if (TWITTER_HANDLE) setMeta("name", "twitter:site", TWITTER_HANDLE);

    const schemas = Array.isArray(jsonLd) ? jsonLd.filter(Boolean) : jsonLd ? [jsonLd] : [];
    setJsonLd("seo-jsonld", schemas.length ? schemas : null);

    // Reset to sitewide defaults on unmount so a quick client-side nav away
    // (before the next page's <Seo/> effect runs) never leaves stale tags.
    return () => {
      setJsonLd("seo-jsonld", null);
    };
  }, [path, title, description, image, noindex, type, jsonLd]);

  return null;
}
