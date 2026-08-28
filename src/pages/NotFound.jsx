import React from "react";
import { Link } from "react-router-dom";
import { Compass } from "lucide-react";
import { fontDisplay, fontBody, fontMono } from "../theme.js";
import Button from "../components/ui/Button.jsx";
import Seo from "../components/Seo.jsx";

const HELPFUL_LINKS = [
  { label: "Home", path: "/" },
  { label: "Solutions", path: "/solutions" },
  { label: "Industries", path: "/industries" },
  { label: "AI Software", path: "/ai-software" },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact", path: "/contact" },
];

/**
 * True catch-all 404. Noindexed so a mistyped or dead URL never enters the
 * index, but still gives a real visitor (or a crawler following a stale
 * backlink) a clear way back into the site instead of a dead end.
 *
 * Note: on Cloudflare's SPA asset mode this still returns an HTTP 200 (a
 * known tradeoff of client-side routing on a static host) — the noindex
 * meta tag is what keeps it out of Google, since the HTTP status alone
 * can't be relied on here.
 */
export default function NotFound() {
  return (
    <div className="section-padding max-w-2xl mx-auto pt-40 text-center">
      <Seo
        path={typeof window !== "undefined" ? window.location.pathname : undefined}
        title="Page Not Found | Velnex AI"
        description="This page doesn't exist. Find your way back to Velnex AI's solutions, industries, pricing, or contact page."
        noindex
      />
      <div className="w-14 h-14 rounded-xl bg-[#0B2E5C]/5 flex items-center justify-center mx-auto mb-6">
        <Compass className="w-7 h-7 text-[#1E5FA8]" />
      </div>
      <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>404</span>
      <h1 style={fontDisplay} className="text-h1 text-[#0B2E5C] mt-4 mb-4">
        This page doesn't exist.
      </h1>
      <p style={fontBody} className="text-body text-[#0B2E5C]/70 mb-10">
        The link might be outdated, or the page may have moved. Here's where you can go instead:
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {HELPFUL_LINKS.map((l) => (
          <Link
            key={l.path}
            to={l.path}
            className="px-4 py-2 rounded-lg border border-[#0B2E5C]/15 text-[#0B2E5C] text-sm hover:bg-[#0B2E5C]/5 transition-colors"
            style={fontBody}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <Button href="/contact" variant="primary">
        Book a Demo
      </Button>
    </div>
  );
}
