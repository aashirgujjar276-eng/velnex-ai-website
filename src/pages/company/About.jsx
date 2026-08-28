import React, { useEffect } from "react";
import { ArrowUpRight, Target, Eye, ShieldCheck, Lightbulb, HeartHandshake } from "lucide-react";
import { fontDisplay, fontBody, fontMono } from "../../theme.js";
import Reveal from "../../components/Reveal.jsx";
import Button from "../../components/ui/Button.jsx";
import Card from "../../components/ui/Card.jsx";
import PageHero from "../../components/PageHero.jsx";
import Seo from "../../components/Seo.jsx";
import { organizationSchema, breadcrumbSchema } from "../../lib/structuredData.js";

const VALUES = [
  { icon: Target, title: "Outcomes over demos", desc: "We measure success by what actually changes for a business, not how impressive a feature looks." },
  { icon: ShieldCheck, title: "Transparency by default", desc: "Every action our agents take should be visible and explainable — no black boxes." },
  { icon: Lightbulb, title: "Practical AI", desc: "We build for real workflows, not AI for its own sake." },
  { icon: HeartHandshake, title: "Customer-first", desc: "We build around how businesses actually operate, not the other way around." },
];

export default function About() {

  return (
    <>
      <Seo
        path="/about"
        title="About Velnex AI | Velnex AI"
        description="Velnex AI exists to close the gap between businesses and the customers trying to reach them — with agents that answer, book, and follow up, not just chat."
        jsonLd={[organizationSchema(), breadcrumbSchema([{ label: "About", path: "/about" }])]}
      />
      <PageHero
        eyebrow="About Velnex AI"
        breadcrumbLabel="About"
        title="We're building AI that takes real action for businesses."
        subtitle="Velnex AI exists to close the gap between businesses and the customers trying to reach them — with agents that answer, book, and follow up, not just chat."
      >
        <Button href="/contact" variant="primary" icon={ArrowUpRight}>Book a Demo</Button>
      </PageHero>

      {/* MISSION & VISION */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6">
          <Reveal>
            <Card>
              <Target className="w-6 h-6 text-[#1E5FA8] mb-4" />
              <h2 style={fontDisplay} className="text-[#0B2E5C] text-lg uppercase tracking-tight mb-3">Our mission</h2>
              <p style={fontBody} className="text-[#0B2E5C]/70 text-sm leading-relaxed">
                To give every business — not just the largest ones — access to AI agents that
                actually handle communication and operations, instead of just answering questions.
              </p>
            </Card>
          </Reveal>
          <Reveal>
            <Card>
              <Eye className="w-6 h-6 text-[#1E5FA8] mb-4" />
              <h2 style={fontDisplay} className="text-[#0B2E5C] text-lg uppercase tracking-tight mb-3">Our vision</h2>
              <p style={fontBody} className="text-[#0B2E5C]/70 text-sm leading-relaxed">
                A future where no customer call goes unanswered and no lead goes unfollowed,
                regardless of the size of the team on the other end.
              </p>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="section-padding bg-[#EAF4FD]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>Our story</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-6">The Velnex AI story.</h2>
            <p style={fontBody} className="text-body-lg text-[#0B2E5C]/70">
              Velnex AI started with a simple observation: most businesses don't lose customers
              because of bad service — they lose them because a call went unanswered, a message
              sat unread, or a lead never got a follow-up. That gap costs real revenue, and it
              usually isn't a hiring problem so much as a coverage problem. We build AI agents and
              the software behind them to close exactly that gap, so busy teams stop losing
              business to a ringing phone.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>What we stand for</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-14 max-w-2xl">Our core values.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES.map((v) => (
              <Reveal key={v.title}>
                <Card variant="flat" className="h-full">
                  <v.icon className="w-6 h-6 text-[#1E5FA8] mb-4" />
                  <h3 style={fontDisplay} className="text-[#0B2E5C] text-sm uppercase tracking-tight mb-2">{v.title}</h3>
                  <p style={fontBody} className="text-[#0B2E5C]/60 text-xs leading-relaxed">{v.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="section-padding bg-[#0B2E5C]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 style={fontDisplay} className="text-h2 text-white mb-6">Want to learn more?</h2>
            <Button href="/contact" variant="primary" icon={ArrowUpRight}>Book a Demo</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
