import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, ChevronDown, ChevronRight, Workflow, CheckCircle2 } from "lucide-react";
import { fontDisplay, fontBody, fontMono } from "../../theme.js";
import Reveal from "../../components/Reveal.jsx";
import Button from "../../components/ui/Button.jsx";
import Card from "../../components/ui/Card.jsx";
import PageAnimation from "../../components/PageAnimation.jsx";
import Placeholder from "../Placeholder.jsx";
import { aiSoftware, solutions } from "../../data/sitemap.js";
import { aiSoftwareContent } from "../../data/aiSoftwareContent.js";
import { SOFTWARE_ANIMATIONS } from "../../data/animations.js";
import { SOFTWARE_ICONS } from "../../data/icons.js";
import Seo from "../../components/Seo.jsx";
import { organizationSchema, breadcrumbSchema, faqSchema, serviceSchema } from "../../lib/structuredData.js";
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

export default function AISoftwareDetail() {
  const { slug } = useParams();
  const softwareMeta = aiSoftware.find((a) => a.slug === slug);
  const content = aiSoftwareContent[slug];
  const path = `/ai-software/${slug}`;

  if (!content || !softwareMeta) {
    return (
      <Placeholder
        title={softwareMeta?.label || "AI Software"}
        breadcrumb={[{ label: "AI Software", path: "/ai-software" }, { label: softwareMeta?.label || "AI Software" }]}
        path={`/ai-software/${slug}`}
      />
    );
  }

  const Icon = SOFTWARE_ICONS[slug] || Workflow;
  const trail = [{ label: "AI Software", path: "/ai-software" }, { label: softwareMeta.label, path }];
  const relevantSolutions = content.relevantSolutions || [];

  return (
    <>
      <Seo
        path={path}
        title={content.metaTitle}
        description={content.metaDescription}
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema(trail),
          serviceSchema({ name: content.h1, description: content.metaDescription, path, serviceType: softwareMeta.label }),
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
            <Link to="/ai-software" className="text-white/40 hover:text-white transition-colors">AI Software</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white/80">{softwareMeta.label}</span>
          </nav>
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
            <Icon className="w-6 h-6 text-[#7FC1FF]" />
          </div>
          <span className="text-[#7FC1FF] text-eyebrow" style={fontMono}>{softwareMeta.label}</span>
          <h1 style={fontDisplay} className="text-h1 text-white mt-4 mb-5">{content.h1}</h1>
          <p style={fontBody} className="text-body-lg text-white/80 max-w-2xl mb-8">{renderInline(content.heroIntro)}</p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" icon={ArrowUpRight}>Book a Demo</Button>
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

      {/* THE SOFTWARE (longer-form "what it does" copy) */}
      {content.features && (
        <section className="section-padding bg-[#EAF4FD]">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>The software</span>
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

      {/* WHO IT'S FOR */}
      {content.whoFor && (
        <section className="section-padding bg-white">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>Who it's for</span>
              <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-10">{content.whoFor.heading}</h2>
            </Reveal>
            <div className="space-y-6">
              {content.whoFor.paragraphs.map((p, i) => (
                <Reveal key={i}>
                  <p style={fontBody} className="text-[#0B2E5C]/75 text-body leading-relaxed">{renderInline(p)}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROBLEM */}
      {content.problem && (
        <section className="section-padding bg-[#EAF4FD]">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>The problem</span>
              <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-10">{content.problem.heading}</h2>
            </Reveal>
            <div className="space-y-6">
              {content.problem.paragraphs.map((p, i) => (
                <Reveal key={i}>
                  <p style={fontBody} className="text-[#0B2E5C]/75 text-body leading-relaxed">{renderInline(p)}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AKA + DIFFERENTIATOR */}
      {(content.aka || content.differentiator) && (
        <section className="section-padding bg-white">
          <div className="max-w-3xl mx-auto space-y-16">
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
            {content.differentiator && (
              <div>
                <Reveal>
                  <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>Why it's different</span>
                  <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-8">{content.differentiator.heading}</h2>
                </Reveal>
                <div className="space-y-6">
                  {content.differentiator.paragraphs.map((p, i) => (
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

      {/* HOW IT WORKS */}
      {content.howItWorks && (
        <section className="section-padding bg-[#0B2E5C]">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_340px] gap-12 items-start">
            <div>
              <Reveal>
                <span className="text-[#7FC1FF] text-eyebrow" style={fontMono}>How it works</span>
                <h2 style={fontDisplay} className="text-h2 text-white mt-4 mb-14 max-w-2xl">{content.howItWorks.heading}</h2>
              </Reveal>
              <div className="grid sm:grid-cols-2 gap-8">
                {content.howItWorks.steps.map((step, i) => (
                  <Reveal key={step.title}>
                    <div style={fontMono} className="text-[#7FC1FF] text-3xl mb-3">0{i + 1}</div>
                    <h3 style={fontDisplay} className="text-white text-base uppercase tracking-tight mb-2">{step.title}</h3>
                    <p style={fontBody} className="text-white/60 text-sm leading-relaxed">{renderInline(step.body)}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal className="lg:sticky lg:top-28">
              <PageAnimation type={SOFTWARE_ANIMATIONS[slug]} light />
            </Reveal>
          </div>
        </section>
      )}

      {/* PRICING + DEMO */}
      {(content.pricing || content.demo) && (
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8">
            {content.pricing && (
              <Reveal>
                <Card className="h-full">
                  <h3 style={fontDisplay} className="text-[#0B2E5C] text-lg uppercase tracking-tight mb-3">{content.pricing.heading}</h3>
                  <p style={fontBody} className="text-[#0B2E5C]/70 text-sm leading-relaxed">{renderInline(content.pricing.body)}</p>
                </Card>
              </Reveal>
            )}
            {content.demo && (
              <Reveal>
                <Card className="h-full">
                  <h3 style={fontDisplay} className="text-[#0B2E5C] text-lg uppercase tracking-tight mb-3">{content.demo.heading}</h3>
                  <p style={fontBody} className="text-[#0B2E5C]/70 text-sm leading-relaxed mb-5">{renderInline(content.demo.body)}</p>
                  <Button href="/contact" variant="tertiary" icon={ArrowUpRight}>Book a Demo</Button>
                </Card>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* SCALE / CREDIBILITY */}
      {content.scale && (
        <section className="section-padding bg-[#EAF4FD]">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>Built to scale with you</span>
              <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-10">{content.scale.heading}</h2>
            </Reveal>
            <div className="space-y-6">
              {content.scale.paragraphs.map((p, i) => (
                <Reveal key={i}>
                  <p style={fontBody} className="text-[#0B2E5C]/75 text-body leading-relaxed">{renderInline(p)}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {content.faqs && (
        <section className="section-padding bg-white">
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
              {content.finalCta?.heading || `See ${softwareMeta.label} in action.`}
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

          {relevantSolutions.length > 0 && (
            <Reveal className="mt-16 pt-10 border-t border-white/10 text-left">
              <h3 style={fontDisplay} className="text-white/80 text-sm uppercase tracking-tight mb-4">Works with these Velnex AI solutions</h3>
              <div className="flex flex-wrap gap-3">
                {relevantSolutions.map((s) => {
                  const sol = solutions.find((x) => x.slug === s);
                  if (!sol) return null;
                  return (
                    <Link key={s} to={`/solutions/${s}`} className="inline-flex items-center gap-1.5 border border-white/20 hover:border-[#7FC1FF]/60 hover:bg-white/5 text-white text-sm px-4 py-2 rounded-full transition-colors">
                      {sol.label} <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  );
                })}
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
