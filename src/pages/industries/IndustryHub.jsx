import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, ChevronDown, ChevronRight, Workflow, CheckCircle2 } from "lucide-react";
import { fontDisplay, fontBody, fontMono } from "../../theme.js";
import Reveal from "../../components/Reveal.jsx";
import Button from "../../components/ui/Button.jsx";
import Card from "../../components/ui/Card.jsx";
import Placeholder from "../Placeholder.jsx";
import { industries } from "../../data/sitemap.js";
import { industryHubContent } from "../../data/industryHubContent.js";
import { INDUSTRY_ICONS } from "../../data/icons.js";
import Seo from "../../components/Seo.jsx";
import { organizationSchema, breadcrumbSchema, faqSchema } from "../../lib/structuredData.js";
import { renderInline } from "../../lib/richText.jsx";

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#0B2E5C]/10 py-5">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between text-left gap-4 ember-focus"
        aria-expanded={open}
      >
        <span style={fontDisplay} className="text-[#0B2E5C] text-base sm:text-lg uppercase tracking-tight">{q}</span>
        <ChevronDown className={`w-5 h-5 text-[#1E5FA8] shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-64 mt-3" : "max-h-0"}`}>
        <p style={fontBody} className="text-[#0B2E5C]/70 text-sm leading-relaxed">{renderInline(a)}</p>
      </div>
    </div>
  );
}

/**
 * Generic template for an "industries" hub page — a parent industry
 * (e.g. Home Services, Salons & Spas, Hotels & Restaurants) that groups
 * several trade/business-type pages underneath it. Reads its structure
 * from `industries` in sitemap.js (via `children`) and its copy from
 * industryHubContent.js, so a new hub only needs data — no new component.
 */
export default function IndustryHub() {
  const { slug } = useParams();
  const hub = industries.find((i) => i.slug === slug && i.children);
  const path = `/industries/${slug}`;
  const content = industryHubContent[slug];

  if (!hub) {
    return (
      <Placeholder
        title="Industry"
        breadcrumb={[{ label: "Industries", path: "/industries" }]}
        path={path}
      />
    );
  }

  if (!content) {
    return (
      <Placeholder
        title={hub.label}
        breadcrumb={[{ label: "Industries", path: "/industries" }, { label: hub.label }]}
        path={path}
      />
    );
  }

  const HubIcon = INDUSTRY_ICONS[slug] || Workflow;
  const trail = [{ label: "Industries", path: "/industries" }, { label: hub.label, path }];

  return (
    <>
      <Seo
        path={path}
        title={content.metaTitle}
        description={content.metaDescription}
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema(trail),
          ...(content.faqs ? [faqSchema(content.faqs)] : []),
        ]}
      />

      {/* HERO — tightened so it reads fully on a laptop screen without scrolling */}
      <section className="relative pt-20 pb-10 lg:pt-24 lg:pb-14 px-6 sm:px-10 lg:px-16 bg-[#0B2E5C] overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#1E5FA8]/30 blur-3xl" />
        <div className="relative max-w-3xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-5 text-xs" style={fontBody}>
            <Link to="/" className="text-white/40 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <Link to="/industries" className="text-white/40 hover:text-white transition-colors">Industries</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white/80">{hub.label}</span>
          </nav>
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
            <HubIcon className="w-6 h-6 text-[#7FC1FF]" />
          </div>
          <span className="text-[#7FC1FF] text-eyebrow" style={fontMono}>{hub.label}</span>
          <h1 style={fontDisplay} className="text-h1 text-white mt-4 mb-5">{content.h1}</h1>
          <p style={fontBody} className="text-body-lg text-white/80 max-w-2xl mb-8">{renderInline(content.heroIntro)}</p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" icon={ArrowUpRight}>Book a Demo</Button>
            <a
              href="#trade-pages"
              className="btn-secondary !text-white !border-white/30 hover:!bg-white/10"
            >
              Browse Business Types
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES (bullets) */}
      {content.featureBullets && (
        <section className="section-padding bg-white">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>What it does</span>
              <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-12 max-w-2xl">
                {content.featureBullets.heading}
              </h2>
            </Reveal>
            <Reveal className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
              {content.featureBullets.bullets.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1E5FA8] mt-0.5 shrink-0" />
                  <span style={fontBody} className="text-[#0B2E5C]/80 text-sm sm:text-base leading-relaxed">{b}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* SOFTWARE BEHIND IT */}
      {content.software && (
        <section className="section-padding bg-[#EAF4FD]">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>The software behind it</span>
              <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-10">{content.software.heading}</h2>
            </Reveal>
            <div className="space-y-6">
              {content.software.paragraphs.map((p, i) => (
                <Reveal key={i}>
                  <p style={fontBody} className="text-[#0B2E5C]/75 text-body leading-relaxed">{renderInline(p)}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OVERVIEW (original longer-form "what it does" copy) */}
      {content.features && (
        <section className="section-padding bg-white">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>More on how it works</span>
              <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-10">{content.features.heading}</h2>
            </Reveal>
            <div className="space-y-6">
              {content.features.paragraphs.map((p, i) => (
                <Reveal key={i}>
                  <p style={fontBody} className="text-[#0B2E5C]/75 text-body leading-relaxed">{renderInline(p)}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ONE SYSTEM / AKA */}
      {(content.oneSystem || content.aka) && (
        <section className="section-padding bg-[#EAF4FD]">
          <div className="max-w-3xl mx-auto space-y-16">
            {content.oneSystem && (
              <div>
                <Reveal>
                  <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>One system</span>
                  <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-8">{content.oneSystem.heading}</h2>
                </Reveal>
                <div className="space-y-6">
                  {content.oneSystem.paragraphs.map((p, i) => (
                    <Reveal key={i}>
                      <p style={fontBody} className="text-[#0B2E5C]/75 text-body leading-relaxed">{renderInline(p)}</p>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}
            {content.aka && (
              <div>
                <Reveal>
                  <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>Also known as</span>
                  <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-8">{content.aka.heading}</h2>
                </Reveal>
                <div className="space-y-6">
                  {content.aka.paragraphs.map((p, i) => (
                    <Reveal key={i}>
                      <p style={fontBody} className="text-[#0B2E5C]/75 text-body leading-relaxed">{renderInline(p)}</p>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* TRADE / BUSINESS-TYPE GRID */}
      <section id="trade-pages" className="section-padding bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>Business types</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-6 max-w-2xl">
              {content.tradesHeading || `${hub.label} — by business type.`}
            </h2>
            {content.tradesIntro && (
              <p style={fontBody} className="text-[#0B2E5C]/70 text-body max-w-2xl mb-8">{renderInline(content.tradesIntro)}</p>
            )}
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {hub.children.map((child) => {
              const ChildIcon = INDUSTRY_ICONS[child.slug] || Workflow;
              const blurb = content.tradeBlurbs?.[child.slug];
              return (
                <Reveal key={child.slug}>
                  <Link to={`/industries/${child.slug}`} className="block h-full">
                    <Card className="h-full flex flex-col">
                      <div className="w-12 h-12 rounded-xl bg-[#EAF4FD] flex items-center justify-center mb-5">
                        <ChildIcon className="w-6 h-6 text-[#1E5FA8]" />
                      </div>
                      <h3 style={fontDisplay} className="text-[#0B2E5C] text-base uppercase tracking-tight mb-2">
                        {child.label}
                      </h3>
                      {blurb && (
                        <p style={fontBody} className="text-[#0B2E5C]/65 text-sm leading-relaxed mb-4">{renderInline(blurb)}</p>
                      )}
                      <span className="text-[#1E5FA8] text-xs font-semibold inline-flex items-center gap-1 mt-auto">
                        See how it works for {child.label.toLowerCase()} <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </Card>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {content.faqs && (
        <section className="section-padding bg-[#EAF4FD]">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>FAQ</span>
              <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-10">Frequently Asked Questions</h2>
            </Reveal>
            <Reveal>
              <div>
                {content.faqs.map((f) => (
                  <FAQItem key={f.q} q={f.q} a={f.a} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="section-padding bg-[#0B2E5C]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 style={fontDisplay} className="text-h2 text-white mb-6">
              {content.finalCta?.heading || "Don't see your exact business type listed?"}
            </h2>
            {content.finalCta?.intro && (
              <p style={fontBody} className="text-body-lg text-white/70 max-w-2xl mx-auto mb-10">
                {renderInline(content.finalCta.intro)}
              </p>
            )}
            {content.finalCta?.bullets && (
              <ul className="grid sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto mb-10">
                {content.finalCta.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-white/80 text-sm leading-relaxed" style={fontBody}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7FC1FF] mt-2 shrink-0" />
                    {renderInline(b)}
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" icon={ArrowUpRight}>Book a Demo</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
