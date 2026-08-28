import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { fontDisplay, fontBody, fontMono } from "../theme.js";

/** Shared hero header for standalone pages (breadcrumb + eyebrow + H1 + subtext). */
export default function PageHero({ eyebrow, title, subtitle, breadcrumbLabel, children }) {
  return (
    <section className="relative pt-20 pb-10 lg:pt-24 lg:pb-14 px-6 sm:px-10 lg:px-16 bg-[#0B2E5C] overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#1E5FA8]/30 blur-3xl" />
      <div className="relative max-w-3xl">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-5 text-xs" style={fontBody}>
          <Link to="/" className="text-white/40 hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-white/30" />
          <span className="text-white/80">{breadcrumbLabel}</span>
        </nav>
        <span className="text-[#7FC1FF] text-eyebrow" style={fontMono}>{eyebrow}</span>
        <h1 style={fontDisplay} className="text-h1 text-white mt-4 mb-4">{title}</h1>
        {subtitle && <p style={fontBody} className="text-body-lg text-white/80 max-w-2xl mb-8">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
