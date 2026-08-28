import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Construction } from "lucide-react";
import { fontDisplay, fontBody, fontMono } from "../theme.js";
import Button from "../components/ui/Button.jsx";
import Seo from "../components/Seo.jsx";

/**
 * Generic shell page for any URL that exists in the sitemap but doesn't
 * have real content yet. Keeps every link on the site "live" (no 404s)
 * while content is being written page by page.
 *
 * Deliberately noindexed: this same boilerplate renders for many different
 * URLs, so indexing it as-is would be exactly the kind of thin,
 * auto-generated, near-duplicate content search engines penalize. It stays
 * crawlable (robots: noindex, follow) so internal links still get followed,
 * and flips to indexable automatically the moment real content replaces it
 * — see src/data/seoRoutes.js.
 */
export default function Placeholder({ title, breadcrumb = [], path }) {
  return (
    <div className="section-padding max-w-4xl mx-auto pt-32">
      <Seo
        path={path}
        title={`${title} | Velnex AI`}
        description={`${title} — this page is on Velnex AI's roadmap and its full content is being written next.`}
        noindex
      />
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 mb-8 text-xs" style={fontBody}>
        <Link to="/" className="text-[#0B2E5C]/50 hover:text-[#0B2E5C] transition-colors">
          Home
        </Link>
        {breadcrumb.map((b, i) => (
          <React.Fragment key={i}>
            <ChevronRight className="w-3 h-3 text-[#0B2E5C]/30" />
            {b.path ? (
              <Link to={b.path} className="text-[#0B2E5C]/50 hover:text-[#0B2E5C] transition-colors">
                {b.label}
              </Link>
            ) : (
              <span className="text-[#0B2E5C] font-medium">{b.label}</span>
            )}
          </React.Fragment>
        ))}
      </nav>

      <div className="flex items-center gap-2 mb-4" style={fontMono}>
        <span className="text-[#1E5FA8] text-eyebrow">Page in progress</span>
      </div>

      <h1 style={fontDisplay} className="text-h1 text-[#0B2E5C] mb-6">
        {title}
      </h1>

      <div className="card-flat flex items-start gap-4 mb-10">
        <Construction className="w-6 h-6 text-[#1E5FA8] shrink-0 mt-0.5" />
        <p style={fontBody} className="text-body text-[#0B2E5C]/70">
          This page's URL is live and its structure is in place — the full content for{" "}
          <span className="font-semibold text-[#0B2E5C]">{title}</span> is being written next.
        </p>
      </div>

      <Button href="/contact" variant="primary">
        Book a Demo
      </Button>
    </div>
  );
}
