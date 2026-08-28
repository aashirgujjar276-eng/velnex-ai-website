import React, { useEffect } from "react";
import { ArrowUpRight, Compass, HeartHandshake, TrendingUp } from "lucide-react";
import { fontDisplay, fontBody, fontMono } from "../../theme.js";
import Reveal from "../../components/Reveal.jsx";
import Button from "../../components/ui/Button.jsx";
import Card from "../../components/ui/Card.jsx";
import PageHero from "../../components/PageHero.jsx";
import Seo from "../../components/Seo.jsx";
import { organizationSchema, breadcrumbSchema } from "../../lib/structuredData.js";

const CULTURE_POINTS = [
  { icon: Compass, title: "Ownership", desc: "Small team, real responsibility — everyone's work has visible impact." },
  { icon: HeartHandshake, title: "Customer-close", desc: "We stay directly connected to the businesses using what we build." },
  { icon: TrendingUp, title: "Early-stage growth", desc: "Joining now means shaping how the company operates as it scales." },
];

export default function Careers() {

  return (
    <>
      <Seo
        path="/careers"
        title="Careers | Velnex AI"
        description="We're a small, early team — here's what it's like to work with us."
        jsonLd={[organizationSchema(), breadcrumbSchema([{ label: "Careers", path: "/careers" }])]}
      />
      <PageHero
        eyebrow="Careers"
        breadcrumbLabel="Careers"
        title="Help build the AI layer businesses run on."
        subtitle="We're a small, early team — here's what it's like to work with us."
      />

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>Culture</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-14 max-w-2xl">Life at Velnex AI.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {CULTURE_POINTS.map((c) => (
              <Reveal key={c.title}>
                <Card>
                  <c.icon className="w-6 h-6 text-[#1E5FA8] mb-4" />
                  <h3 style={fontDisplay} className="text-[#0B2E5C] text-base uppercase tracking-tight mb-2">{c.title}</h3>
                  <p style={fontBody} className="text-[#0B2E5C]/70 text-sm leading-relaxed">{c.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#EAF4FD]">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>Open positions</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-6">No open positions right now.</h2>
            <p style={fontBody} className="text-body-lg text-[#0B2E5C]/70">
              Check back soon, or reach out directly if you think you'd be a strong fit.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mb-6">Think you'd be a good fit?</h2>
            <Button href="/contact" variant="primary" icon={ArrowUpRight}>Get in Touch</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
