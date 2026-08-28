import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight, Workflow, Database, ShieldCheck, Layers, Puzzle } from "lucide-react";
import { fontDisplay, fontBody, fontMono } from "../theme.js";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";
import { industries, solutions } from "../data/sitemap.js";
import { INDUSTRY_ICONS, SOLUTION_ICONS, SOLUTION_SUMMARIES } from "../data/icons.js";
import Seo from "../components/Seo.jsx";
import { organizationSchema, breadcrumbSchema } from "../lib/structuredData.js";

const ADAPT_POINTS = [
  { icon: Puzzle, title: "Trained on your workflow", desc: "Agents are configured around how your specific industry actually operates, not a generic script." },
  { icon: ShieldCheck, title: "Aware of industry standards", desc: "Handles the language and expectations specific to fields like healthcare, legal, or real estate." },
  { icon: Layers, title: "Fits your existing tools", desc: "Connects to the scheduling, CRM, and phone systems your industry already relies on." },
];

export default function Industries() {
  return (
    <>
      <Seo
        path="/industries"
        title="Industries | Velnex AI"
        description="AI agents built to fit how dental practices, law firms, real estate, home services, and other industries actually operate — not a generic chatbot."
        jsonLd={[organizationSchema(), breadcrumbSchema([{ label: "Industries", path: "/industries" }])]}
      />
      {/* HERO */}
      <section className="relative pt-20 pb-10 lg:pt-24 lg:pb-14 px-6 sm:px-10 lg:px-16 bg-[#0B2E5C] overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#1E5FA8]/30 blur-3xl" />
        <div className="relative max-w-4xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-6 text-xs" style={fontBody}>
            <Link to="/" className="text-white/40 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white/80">Industries</span>
          </nav>
          <span className="text-[#7FC1FF] text-eyebrow" style={fontMono}>Industries</span>
          <h1 style={fontDisplay} className="text-h1 text-white mt-4 mb-6">
            AI built to fit how your industry actually works.
          </h1>
          <p style={fontBody} className="text-body-lg text-white/80 max-w-2xl mb-10">
            The same underlying AI solutions, configured around the language, workflows, and
            expectations specific to your business.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" icon={ArrowUpRight}>Book a Demo</Button>
            <Button href="#industry-cards" variant="secondary" className="!text-white !border-white/30 hover:!bg-white/10">
              Browse Industries
            </Button>
          </div>
        </div>
      </section>

      {/* INDUSTRY INTRODUCTION */}
      <section className="section-padding-sm bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p style={fontBody} className="text-body-lg text-[#0B2E5C]/70">
              No two industries handle calls, bookings, or leads the same way. A dental practice
              deals with appointment reminders and emergencies; a law firm deals with intake and
              confidentiality; a home services business deals with dispatching and quotes. Velnex
              AI is configured for each — not deployed as one generic assistant.
            </p>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section id="industry-cards" className="section-padding bg-[#EAF4FD] scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>All industries</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-14 max-w-2xl">
              Industries we build for.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind) => {
              const Icon = INDUSTRY_ICONS[ind.slug] || Workflow;
              return (
                <Reveal key={ind.slug}>
                  <Link to={`/industries/${ind.slug}`} className="block h-full">
                    <Card className="h-full flex flex-col">
                      <div className="w-12 h-12 rounded-xl bg-[#EAF4FD] flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6 text-[#1E5FA8]" />
                      </div>
                      <h3 style={fontDisplay} className="text-[#0B2E5C] text-base uppercase tracking-tight mb-2">{ind.label}</h3>
                      {ind.children && (
                        <p style={fontBody} className="text-[#0B2E5C]/50 text-xs mb-3">
                          Includes {ind.children.length} specialized business types
                        </p>
                      )}
                      <span className="text-[#1E5FA8] text-xs font-semibold inline-flex items-center gap-1 mt-auto">
                        Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </Card>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW VELNEX AI ADAPTS */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>How it adapts</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-14 max-w-2xl">
              How Velnex AI adapts to different businesses.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {ADAPT_POINTS.map((p) => (
              <Reveal key={p.title}>
                <Card>
                  <p.icon className="w-6 h-6 text-[#1E5FA8] mb-4" />
                  <h3 style={fontDisplay} className="text-[#0B2E5C] text-base uppercase tracking-tight mb-2">{p.title}</h3>
                  <p style={fontBody} className="text-[#0B2E5C]/60 text-sm leading-relaxed">{p.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI SOLUTIONS ACROSS INDUSTRIES */}
      <section className="section-padding bg-[#EAF4FD]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>Same solutions, every industry</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-14 max-w-2xl">
              The AI solutions behind every industry page.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((s) => {
              const Icon = SOLUTION_ICONS[s.slug] || Workflow;
              return (
                <Reveal key={s.slug}>
                  <Link to={`/solutions/${s.slug}`} className="block h-full">
                    <Card className="h-full flex flex-col">
                      <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-[#1E5FA8]" />
                      </div>
                      <h3 style={fontDisplay} className="text-[#0B2E5C] text-sm uppercase tracking-tight mb-2">{s.label}</h3>
                      <p style={fontBody} className="text-[#0B2E5C]/60 text-xs leading-relaxed">{SOLUTION_SUMMARIES[s.slug]}</p>
                    </Card>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-8">
            <Button href="/solutions" variant="tertiary" icon={ArrowUpRight}>View all Solutions</Button>
          </Reveal>
        </div>
      </section>

      {/* AI SOFTWARE */}
      <section className="section-padding bg-[#0B2E5C]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <Database className="w-8 h-8 text-[#7FC1FF] mx-auto mb-6" />
            <span className="text-[#7FC1FF] text-eyebrow" style={fontMono}>Runs on Velnex AI Software</span>
            <h2 style={fontDisplay} className="text-h2 text-white mt-4 mb-6">
              Whatever your industry, it runs on the same reliable software.
            </h2>
            <p style={fontBody} className="text-body-lg text-white/70 max-w-2xl mx-auto mb-10">
              Every call, chat, and booking syncs into Velnex AI's CRM, appointment management,
              and workflow automation software — built to fit your industry's data, not replace it.
            </p>
            <Button href="/ai-software" variant="secondary" className="!text-white !border-white/30 hover:!bg-white/10" icon={ArrowUpRight}>
              Explore Velnex AI Software
            </Button>
          </Reveal>
        </div>
      </section>

      {/* BOOK DEMO CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mb-6">
              Don't see your exact industry listed?
            </h2>
            <p style={fontBody} className="text-body-lg text-[#0B2E5C]/70 max-w-xl mx-auto mb-10">
              Velnex AI is configured individually for every business — book a call and we'll
              show you how it fits yours.
            </p>
            <Button href="/contact" variant="primary" icon={ArrowUpRight}>Book a Demo</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
