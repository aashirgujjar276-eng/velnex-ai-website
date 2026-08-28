import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { fontDisplay, fontBody, fontMono } from "../theme.js";
import { legal } from "../data/sitemap.js";
import Seo from "./Seo.jsx";
import { organizationSchema, breadcrumbSchema } from "../lib/structuredData.js";

/**
 * Shared shell for the two legal pages (Privacy Policy, Terms of Service).
 * Keeps typography, spacing, TOC behavior, and cross-linking between legal
 * pages consistent, and centralizes the "not legal advice" placeholder notice.
 */
export const LegalSection = ({ id, title, children }) => (
  <div id={id} className="mb-10 scroll-mt-28">
    <h2 style={fontDisplay} className="text-[#0B2E5C] text-lg uppercase tracking-tight mb-3">
      {title}
    </h2>
    <div style={fontBody} className="text-[#123B73]/80 text-sm leading-relaxed space-y-3">
      {children}
    </div>
  </div>
);

export const Placeholder = ({ children }) => (
  <span className="bg-[#FFE9B3] text-[#7A5300] px-1.5 py-0.5 rounded font-medium">
    [{children}]
  </span>
);

export default function LegalLayout({ eyebrow = "Legal", title, breadcrumbLabel, description, children }) {
  const entry = legal.find((l) => l.label === title);
  const path = entry?.path || "";
  const others = legal.filter((l) => l.label !== title);

  return (
    <div className="pt-32 pb-24 px-6 sm:px-10 lg:px-16 bg-[#EAF4FD]">
      <div className="max-w-3xl mx-auto">
        <Seo
          path={path}
          title={`${title} | Velnex AI`}
          description={description || `${title} for Velnex AI.`}
          jsonLd={[organizationSchema(), breadcrumbSchema([{ label: breadcrumbLabel || title, path }])]}
        />
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-4 text-xs" style={fontBody}>
          <Link to="/" className="text-[#0B2E5C]/50 hover:text-[#0B2E5C] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-[#0B2E5C]/30" />
          <span className="text-[#0B2E5C] font-medium">{breadcrumbLabel || title}</span>
        </nav>

        <span className="text-[#1E5FA8] text-xs tracking-[0.3em] uppercase" style={fontMono}>
          {eyebrow}
        </span>
        <h1 style={fontDisplay} className="uppercase tracking-tight text-[#0B2E5C] text-[clamp(2rem,5vw,3rem)] mt-3 mb-10">
          {title}
        </h1>

        {children}

        {/* Cross-links to other legal pages */}
        <div className="mt-16 pt-8 border-t border-[#0B2E5C]/10">
          <div style={fontDisplay} className="text-[#0B2E5C] text-xs uppercase tracking-widest mb-4">
            Other legal pages
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {others.map((l) => (
              <Link
                key={l.slug}
                to={l.path}
                style={fontBody}
                className="text-[#1E5FA8] hover:text-[#0B2E5C] text-sm underline underline-offset-4 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
