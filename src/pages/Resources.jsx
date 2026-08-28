import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight, HelpCircle, Newspaper } from "lucide-react";
import { fontDisplay, fontBody, fontMono } from "../theme.js";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";
import Seo from "../components/Seo.jsx";
import { organizationSchema, breadcrumbSchema } from "../lib/structuredData.js";

export default function Resources() {
  return (
    <>
      <Seo
        path="/resources"
        title="Resources | Velnex AI"
        description="Answers to the questions we hear most often about Velnex AI's AI agents and automation."
        jsonLd={[organizationSchema(), breadcrumbSchema([{ label: "Resources", path: "/resources" }])]}
      />
      {/* HERO */}
      <section className="relative pt-20 pb-10 lg:pt-24 lg:pb-14 px-6 sm:px-10 lg:px-16 bg-[#0B2E5C] overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#1E5FA8]/30 blur-3xl" />
        <div className="relative max-w-3xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-5 text-xs" style={fontBody}>
            <Link to="/" className="text-white/40 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white/80">Resources</span>
          </nav>
          <span className="text-[#7FC1FF] text-eyebrow" style={fontMono}>Resources</span>
          <h1 style={fontDisplay} className="text-h1 text-white mt-4 mb-5">
            Answers, straight up.
          </h1>
          <p style={fontBody} className="text-body-lg text-white/80 max-w-2xl mb-8">
            Straight answers to the questions we hear most often about Velnex AI.
          </p>
          <Button href="/contact" variant="primary" icon={ArrowUpRight}>Book a Demo</Button>
        </div>
      </section>

      {/* FAQ + BLOG CARDS */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>Start here</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-14 max-w-2xl">
              Browse by type.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
            <Reveal>
              <Link to="/resources/faqs" className="block h-full">
                <Card className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF4FD] flex items-center justify-center mb-5">
                    <HelpCircle className="w-6 h-6 text-[#1E5FA8]" />
                  </div>
                  <h3 style={fontDisplay} className="text-[#0B2E5C] text-base uppercase tracking-tight mb-2">FAQs</h3>
                  <p style={fontBody} className="text-[#0B2E5C]/60 text-sm leading-relaxed mb-4">
                    Straight answers to the questions we hear most often.
                  </p>
                  <span className="text-[#1E5FA8] text-xs font-semibold inline-flex items-center gap-1">
                    Browse FAQs <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </Card>
              </Link>
            </Reveal>
            <Reveal>
              <Link to="/resources/blog" className="block h-full">
                <Card className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF4FD] flex items-center justify-center mb-5">
                    <Newspaper className="w-6 h-6 text-[#1E5FA8]" />
                  </div>
                  <h3 style={fontDisplay} className="text-[#0B2E5C] text-base uppercase tracking-tight mb-2">Blog</h3>
                  <p style={fontBody} className="text-[#0B2E5C]/60 text-sm leading-relaxed mb-4">
                    Practical thinking on AI receptionists, voice agents, and automation.
                  </p>
                  <span className="text-[#1E5FA8] text-xs font-semibold inline-flex items-center gap-1">
                    Read the Blog <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </Card>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EXPLORE THE PRODUCT */}
      <section className="section-padding bg-[#EAF4FD]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>Explore</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-4 max-w-2xl">
              Explore Velnex AI directly.
            </h2>
            <p style={fontBody} className="text-body text-[#0B2E5C]/70 max-w-2xl mb-10">
              The fastest way to understand what Velnex AI does is to look at the product pages themselves.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            <Reveal>
              <Link to="/solutions" className="block h-full">
                <Card className="h-full">
                  <h3 style={fontDisplay} className="text-[#0B2E5C] text-base uppercase tracking-tight mb-2">
                    See all AI Solutions
                  </h3>
                  <p style={fontBody} className="text-[#0B2E5C]/60 text-sm leading-relaxed">
                    Receptionist, voice agents, chatbots, and more — what each one actually does.
                  </p>
                </Card>
              </Link>
            </Reveal>
            <Reveal>
              <Link to="/industries" className="block h-full">
                <Card className="h-full">
                  <h3 style={fontDisplay} className="text-[#0B2E5C] text-base uppercase tracking-tight mb-2">
                    Find your industry
                  </h3>
                  <p style={fontBody} className="text-[#0B2E5C]/60 text-sm leading-relaxed">
                    How Velnex AI is configured for businesses like yours.
                  </p>
                </Card>
              </Link>
            </Reveal>
            <Reveal>
              <Link to="/ai-software" className="block h-full">
                <Card className="h-full">
                  <h3 style={fontDisplay} className="text-[#0B2E5C] text-base uppercase tracking-tight mb-2">
                    Understand the software
                  </h3>
                  <p style={fontBody} className="text-[#0B2E5C]/60 text-sm leading-relaxed">
                    The CRM and dashboard layer that runs behind every agent.
                  </p>
                </Card>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BOOK DEMO CTA */}
      <section className="section-padding bg-[#0B2E5C]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 style={fontDisplay} className="text-h2 text-white mb-6">
              Have a question this page can't answer?
            </h2>
            <p style={fontBody} className="text-body-lg text-white/70 max-w-xl mx-auto mb-10">
              Book a short call and we'll walk you through it directly.
            </p>
            <Button href="/contact" variant="secondary" className="!text-white !border-white/30 hover:!bg-white/10" icon={ArrowUpRight}>
              Book a Demo
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
