import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, ChevronDown, ChevronRight, Workflow, Database, CheckCircle2 } from "lucide-react";
import { fontDisplay, fontBody, fontMono } from "../../theme.js";
import Reveal from "../../components/Reveal.jsx";
import Button from "../../components/ui/Button.jsx";
import Card from "../../components/ui/Card.jsx";
import PageAnimation from "../../components/PageAnimation.jsx";
import Placeholder from "../Placeholder.jsx";
import { solutions } from "../../data/sitemap.js";
import { solutionsContent } from "../../data/solutionsContent.js";
import { SOLUTION_ANIMATIONS } from "../../data/animations.js";
import { SOLUTION_ICONS, INDUSTRY_ICONS, SOFTWARE_ICONS } from "../../data/icons.js";
import Seo from "../../components/Seo.jsx";
import { organizationSchema, breadcrumbSchema, faqSchema, serviceSchema } from "../../lib/structuredData.js";

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
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 mt-3" : "max-h-0"}`}>
        <p style={fontBody} className="text-[#0B2E5C]/70 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function SolutionDetail() {
  const { slug } = useParams();
  const solutionMeta = solutions.find((s) => s.slug === slug);
  const content = solutionsContent[slug];
  const path = `/solutions/${slug}`;

  // Not yet written for this slug — fall back to the shell placeholder,
  // which is itself noindexed so this thin/unbuilt page never enters the index.
  if (!content || !solutionMeta) {
    return (
      <Placeholder
        title={solutionMeta?.label || "Solution"}
        breadcrumb={[{ label: "Solutions", path: "/solutions" }, { label: solutionMeta?.label || "Solution" }]}
        path={`/solutions/${slug}`}
      />
    );
  }

  const Icon = SOLUTION_ICONS[slug] || Workflow;
  const trail = [{ label: "Solutions", path: "/solutions" }, { label: solutionMeta.label, path }];

  return (
    <>
      <Seo
        path={path}
        title={content.metaTitle}
        description={content.metaDescription}
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema(trail),
          serviceSchema({ name: content.h1, description: content.metaDescription, path, serviceType: solutionMeta.label }),
          faqSchema(content.faqs),
        ]}
      />
      {/* 1. HERO — tightened so it reads fully on a laptop screen without scrolling */}
      <section className="relative pt-20 pb-10 lg:pt-24 lg:pb-14 px-6 sm:px-10 lg:px-16 bg-[#0B2E5C] overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#1E5FA8]/30 blur-3xl" />
        <div className="relative max-w-3xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-5 text-xs" style={fontBody}>
            <Link to="/" className="text-white/40 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <Link to="/solutions" className="text-white/40 hover:text-white transition-colors">Solutions</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white/80">{solutionMeta.label}</span>
          </nav>
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
            <Icon className="w-6 h-6 text-[#7FC1FF]" />
          </div>
          <span className="text-[#7FC1FF] text-eyebrow" style={fontMono}>{content.eyebrow}</span>
          <h1 style={fontDisplay} className="text-h1 text-white mt-4 mb-5">{content.h1}</h1>
          <p style={fontBody} className="text-body-lg text-white/80 max-w-2xl mb-8">{content.heroSub}</p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" icon={ArrowUpRight}>Book a Demo</Button>
            <Button href="#how-it-works" variant="secondary" className="!text-white !border-white/30 hover:!bg-white/10">
              See how it works
            </Button>
          </div>
        </div>
      </section>

      {/* 2. FEATURES (bullets) */}
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

      {/* 3. CONNECTION WITH VELNEX AI SOFTWARE */}
      <section className="section-padding bg-[#0B2E5C]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <Database className="w-8 h-8 text-[#7FC1FF] mx-auto mb-6" />
            <span className="text-[#7FC1FF] text-eyebrow" style={fontMono}>Backed by Velnex AI Software</span>
            <h2 style={fontDisplay} className="text-h2 text-white mt-4 mb-6">
              Every interaction syncs to your actual systems.
            </h2>
            <p style={fontBody} className="text-body-lg text-white/70 max-w-2xl mx-auto mb-8">
              {solutionMeta.label} connects directly to Velnex AI Software, so nothing lives only in a transcript.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {content.relatedSoftware.map((slug) => {
                const sw = { "ai-crm": "AI CRM Software", "ai-appointment-management": "AI Appointment Management Software", "ai-call-management": "AI Call Management Software", "ai-lead-management": "AI Lead Management Software", "ai-workflow-automation": "AI Workflow Automation Software" }[slug];
                return (
                  <Link
                    key={slug}
                    to={`/ai-software/${slug}`}
                    className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-full transition-colors"
                  >
                    {sw} <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. PROBLEM */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>The problem</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-14 max-w-2xl">
              What businesses run into without this.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {content.problems.map((p) => (
              <Reveal key={p.title}>
                <Card>
                  <h3 style={fontDisplay} className="text-[#0B2E5C] text-lg uppercase tracking-tight mb-2">{p.title}</h3>
                  <p style={fontBody} className="text-[#0B2E5C]/70 text-sm leading-relaxed">{p.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW THE SOLUTION WORKS */}
      <section id="how-it-works" className="section-padding bg-[#EAF4FD] scroll-mt-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_340px] gap-12 items-start">
          <div>
            <Reveal>
              <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>How it works</span>
              <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-14 max-w-2xl">
                Simple to understand, powerful in practice.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-6">
              {content.howItWorks.map((step, i) => (
                <Reveal key={step.title}>
                  <div style={fontMono} className="text-[#1E5FA8] text-3xl mb-3">0{i + 1}</div>
                  <h3 style={fontDisplay} className="text-[#0B2E5C] text-base uppercase tracking-tight mb-2">{step.title}</h3>
                  <p style={fontBody} className="text-[#0B2E5C]/60 text-sm leading-relaxed">{step.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="lg:sticky lg:top-28">
            <PageAnimation type={SOLUTION_ANIMATIONS[slug]} />
          </Reveal>
        </div>
      </section>

      {/* 5. KEY CAPABILITIES */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>Key capabilities</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-14 max-w-2xl">
              What's included.
            </h2>
          </Reveal>
          <Reveal className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {content.capabilities.map((c) => (
              <div key={c} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E5FA8] mt-2 shrink-0" />
                <span style={fontBody} className="text-[#0B2E5C]/80 text-sm leading-relaxed">{c}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 6. BENEFITS */}
      <section className="section-padding bg-[#EAF4FD]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>Benefits</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-14 max-w-2xl">
              What changes for your business.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {content.benefits.map((b) => (
              <Reveal key={b.title}>
                <Card variant="flat" className="h-full">
                  <h3 style={fontDisplay} className="text-[#0B2E5C] text-sm uppercase tracking-tight mb-2">{b.title}</h3>
                  <p style={fontBody} className="text-[#0B2E5C]/60 text-xs leading-relaxed">{b.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. EXAMPLE BUSINESS WORKFLOW */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>In practice</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-10">
              {content.workflowExample.title}
            </h2>
          </Reveal>
          <Reveal>
            <ol className="space-y-4">
              {content.workflowExample.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span style={fontMono} className="w-7 h-7 rounded-full bg-[#EAF4FD] text-[#1E5FA8] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span style={fontBody} className="text-[#0B2E5C]/80 text-sm sm:text-base leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 8. INDUSTRIES THAT CAN USE IT */}
      <section className="section-padding bg-[#EAF4FD]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>Who it's for</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-14 max-w-2xl">
              Industries that use {solutionMeta.label}.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {content.relatedIndustries.map((slug) => {
              const Ind = SOLUTION_ICONS; // unused, keeps lint happy
              const IconComp = INDUSTRY_ICONS[slug] || Workflow;
              return (
                <Reveal key={slug}>
                  <Link
                    to={`/industries/${slug}`}
                    className="flex flex-col items-center text-center gap-3 p-5 rounded-xl border border-[#0B2E5C]/10 bg-white hover:border-[#1E5FA8]/40 transition-colors h-full"
                  >
                    <IconComp className="w-6 h-6 text-[#1E5FA8]" />
                    <span style={fontBody} className="text-[#0B2E5C] text-sm font-medium leading-tight capitalize">
                      {slug.replace(/-/g, " ")}
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. WHY VELNEX AI */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>Why Velnex AI</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-6">
              {content.whyVelnexHeading || "Built around your business, not a script."}
            </h2>
            <p style={fontBody} className="text-body-lg text-[#0B2E5C]/70 whitespace-pre-line">
              {content.whyVelnexParagraph || (
                <>
                  {solutionMeta.label} is configured around how your business actually operates —
                  with clear guardrails, full visibility into every action, and a human always in
                  the loop where it matters.
                </>
              )}
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-2 gap-4">
            {[
              ["Custom-built", "Not templated"],
              ["Full visibility", "Every action logged"],
              ["Fast rollout", "Live in weeks"],
              ["Human-in-loop", "Where it matters"],
            ].map(([a, b]) => (
              <Card key={a} variant="flat">
                <div style={fontDisplay} className="text-[#0B2E5C] text-sm uppercase tracking-tight mb-1">{a}</div>
                <div style={fontBody} className="text-[#0B2E5C]/60 text-xs">{b}</div>
              </Card>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="section-padding bg-[#EAF4FD]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>FAQ</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-10">
              Questions about {solutionMeta.label}.
            </h2>
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

      {/* 11. BOOK DEMO CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mb-6">
              Ready to put {solutionMeta.label} to work?
            </h2>
            <p style={fontBody} className="text-body-lg text-[#0B2E5C]/70 max-w-xl mx-auto mb-10">
              Book a short call and we'll show you exactly how it would run inside your business.
            </p>
            <Button href="/contact" variant="primary" icon={ArrowUpRight}>Book a Demo</Button>
          </Reveal>

          {/* Related solutions — internal linking */}
          <Reveal className="mt-16 pt-10 border-t border-[#0B2E5C]/10 text-left">
            <h3 style={fontDisplay} className="text-[#0B2E5C] text-sm uppercase tracking-tight mb-4">Related solutions</h3>
            <div className="flex flex-wrap gap-3">
              {content.relatedSolutions.map((slug) => {
                const rel = solutions.find((s) => s.slug === slug);
                if (!rel) return null;
                return (
                  <Link
                    key={slug}
                    to={`/solutions/${slug}`}
                    className="inline-flex items-center gap-1.5 border border-[#0B2E5C]/15 hover:border-[#1E5FA8]/40 hover:bg-[#EAF4FD] text-[#0B2E5C] text-sm px-4 py-2 rounded-full transition-colors"
                  >
                    {rel.label} <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
