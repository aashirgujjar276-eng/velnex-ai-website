import React, { useEffect } from "react";
import { ArrowUpRight, ShieldCheck, Eye, Users, Zap } from "lucide-react";
import { fontDisplay, fontBody, fontMono } from "../../theme.js";
import Reveal from "../../components/Reveal.jsx";
import Button from "../../components/ui/Button.jsx";
import Card from "../../components/ui/Card.jsx";
import PageHero from "../../components/PageHero.jsx";
import Seo from "../../components/Seo.jsx";
import { organizationSchema, breadcrumbSchema } from "../../lib/structuredData.js";

const COMPARISONS = [
  { title: "vs. generic AI chatbots", desc: "Most chatbots answer questions from a script. Velnex AI agents take action — booking, qualifying, and updating your systems, not just replying." },
  { title: "vs. hiring more staff", desc: "Scaling coverage with headcount is slow and expensive. An AI agent covers volume and after-hours gaps without a new salary." },
  { title: "vs. traditional software", desc: "Traditional tools wait for someone to log in and use them. Velnex AI agents act continuously, in real time, on their own." },
];

const TRUST_SIGNALS = [
  { icon: ShieldCheck, title: "Defined guardrails", desc: "You set the boundaries for what every agent can and can't do." },
  { icon: Eye, title: "Full visibility", desc: "Every action is logged and reviewable, not hidden in a black box." },
  { icon: Users, title: "Human-in-the-loop", desc: "Clear escalation points keep a person in control where it matters." },
  { icon: Zap, title: "Fast to deploy", desc: "Live in weeks, not quarters." },
];

export default function WhyVelnexAI() {

  return (
    <>
      <Seo
        path="/why-velnex-ai"
        title="Why Velnex AI | Velnex AI"
        description="Most AI tools wait for a prompt. Velnex AI agents don't — they take real action inside your business, with clear guardrails and full visibility into every decision."
        jsonLd={[organizationSchema(), breadcrumbSchema([{ label: "Why Velnex AI", path: "/why-velnex-ai" }])]}
      />
      <PageHero
        eyebrow="Why Velnex AI"
        breadcrumbLabel="Why Velnex AI"
        title="Automation that acts, not just assists."
        subtitle="Most AI tools wait for a prompt. Velnex AI agents don't — they take real action inside your business, with clear guardrails and full visibility into every decision."
      >
        <Button href="/contact" variant="primary" icon={ArrowUpRight}>Book a Demo</Button>
      </PageHero>

      {/* COMPARISONS */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>How we're different</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-14 max-w-2xl">The comparison that actually matters.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {COMPARISONS.map((c) => (
              <Reveal key={c.title}>
                <Card>
                  <h3 style={fontDisplay} className="text-[#0B2E5C] text-base uppercase tracking-tight mb-3">{c.title}</h3>
                  <p style={fontBody} className="text-[#0B2E5C]/70 text-sm leading-relaxed">{c.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="section-padding bg-[#0B2E5C]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#7FC1FF] text-eyebrow" style={fontMono}>Trust</span>
            <h2 style={fontDisplay} className="text-h2 text-white mt-4 mb-14 max-w-2xl">Built to earn trust, not just claim it.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRUST_SIGNALS.map((t) => (
              <Reveal key={t.title}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <t.icon className="w-6 h-6 text-[#7FC1FF] mb-4" />
                  <h3 style={fontDisplay} className="text-white text-sm uppercase tracking-tight mb-2">{t.title}</h3>
                  <p style={fontBody} className="text-white/60 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#EAF4FD]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mb-6">See it for yourself.</h2>
            <p style={fontBody} className="text-body-lg text-[#0B2E5C]/70 max-w-xl mx-auto mb-10">
              Book a short call and we'll show you exactly how it would run in your business.
            </p>
            <Button href="/contact" variant="primary" icon={ArrowUpRight}>Book a Demo</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
