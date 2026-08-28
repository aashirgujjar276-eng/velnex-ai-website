import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronDown, ChevronRight, MessageSquare } from "lucide-react";
import { fontDisplay, fontBody, fontMono } from "../../theme.js";
import Reveal from "../../components/Reveal.jsx";
import Button from "../../components/ui/Button.jsx";
import Seo from "../../components/Seo.jsx";
import { organizationSchema, breadcrumbSchema, faqSchema } from "../../lib/structuredData.js";
import { renderInline } from "../../lib/richText.jsx";

const CATEGORIES = [
  {
    title: "About Velnex AI",
    faqs: [
      { q: "What does Velnex AI actually do?", a: "We build AI agents and the software behind them — receptionists, voice agents, chatbots, and scheduling tools — that answer calls, book appointments, and follow up with customers automatically for small businesses." },
      { q: "Is this the same as a chatbot I'd build myself with a template tool?", a: "No. Every setup is configured around your actual business, your services, your tools, and how you already operate, not a generic script you train yourself." },
      { q: "What kind of businesses use Velnex AI?", a: "Small businesses across services, healthcare, real estate, legal, hospitality, and retail — anywhere calls, bookings, or customer questions are currently being handled manually." },
    ],
  },
  {
    title: "How Setup Works",
    faqs: [
      { q: "How long does it take to get set up?", a: "Most businesses are live within days, not weeks. Setup involves connecting your phone line and calendar, then training the system on your services and common questions." },
      { q: "Do I need to change my phone number or existing tools?", a: "No. Everything connects to what you already use — your existing number, calendar, and CRM — instead of replacing them." },
      { q: "Can I make changes after it's live?", a: "Yes. Scripts, scheduling rules, and answers can be adjusted anytime, and the system gets refined based on real conversations after launch." },
    ],
  },
  {
    title: "Pricing",
    faqs: [
      { q: "How much does this cost?", a: "Pricing depends on what you're automating and your call or booking volume, so we scope it to your business rather than publishing a flat rate. See our [[Pricing|/pricing]] page for details." },
      { q: "Is there a long-term contract?", a: "No long-term contract is required to get started." },
    ],
  },
  {
    title: "Data & Reliability",
    faqs: [
      { q: "Is my customer data secure?", a: "Yes. Data is handled according to standard security practices, and healthcare-related setups follow HIPAA requirements specifically." },
      { q: "What happens if the AI can't answer something?", a: "Anything outside what it's trained to handle gets routed to your team, with a summary of what was asked, so nothing gets stuck or ignored." },
      { q: "Does it actually sound natural, or like a robot?", a: "It's built to hold a real conversation, not read from a fixed script — that's the difference between this and a basic phone tree or chatbot." },
    ],
  },
  {
    title: "Choosing the Right Solution",
    faqs: [
      { q: "What's the difference between an AI Receptionist and an AI Voice Agent?", a: "A Receptionist answers and routes incoming calls. A Voice Agent does that too, but also makes outbound calls — reminders, follow-ups, and sales conversations." },
      { q: "Do I need a chatbot, a voice agent, or both?", a: "It depends on how customers reach you. Businesses that get more calls than website traffic usually start with voice; those with heavy website traffic often start with chat. Many use both." },
      { q: "Can I start small and add more later?", a: "Yes. You can start with basic call answering and add booking, chat, or CRM features later as your needs grow." },
    ],
  },
  {
    title: "Support",
    faqs: [
      { q: "What happens if something goes wrong?", a: "Your team can reach ours directly, and issues get resolved without you needing to troubleshoot the system yourself." },
      { q: "Can I cancel if it's not working for my business?", a: "Yes — there's no long-term lock-in, so you're not stuck with something that isn't a fit." },
    ],
  },
];

const ALL_FAQS = CATEGORIES.flatMap((c) => c.faqs);

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
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48 mt-3" : "max-h-0"}`}>
        <p style={fontBody} className="text-[#0B2E5C]/70 text-sm leading-relaxed">{renderInline(a)}</p>
      </div>
    </div>
  );
}

export default function FAQs() {
  const path = "/resources/faqs";
  const trail = [{ label: "Resources", path: "/resources" }, { label: "FAQs", path }];

  return (
    <>
      <Seo
        path={path}
        title="Frequently Asked Questions | Velnex AI"
        description="Answers to common questions about how Velnex AI works, what it costs, how setup happens, and how your data is handled."
        jsonLd={[organizationSchema(), breadcrumbSchema(trail), faqSchema(ALL_FAQS)]}
      />

      {/* HERO */}
      <section className="relative pt-20 pb-10 lg:pt-24 lg:pb-14 px-6 sm:px-10 lg:px-16 bg-[#0B2E5C] overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#1E5FA8]/30 blur-3xl" />
        <div className="relative max-w-4xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-6 text-xs" style={fontBody}>
            <Link to="/" className="text-white/40 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <Link to="/resources" className="text-white/40 hover:text-white transition-colors">Resources</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white/80">FAQs</span>
          </nav>
          <span className="text-[#7FC1FF] text-eyebrow" style={fontMono}>Resources</span>
          <h1 style={fontDisplay} className="text-h1 text-white mt-4 mb-6">Frequently Asked Questions</h1>
          <p style={fontBody} className="text-body-lg text-white/80 max-w-2xl flex items-start gap-2.5">
            <MessageSquare className="w-5 h-5 text-[#7FC1FF] shrink-0 mt-1" />
            <span>Prefer to just ask? Talk to the AI agent on this page — it's the same technology your customers would experience.</span>
          </p>
        </div>
      </section>

      {/* FAQ CATEGORIES */}
      {CATEGORIES.map((cat, i) => (
        <section key={cat.title} className={`section-padding ${i % 2 === 0 ? "bg-white" : "bg-[#EAF4FD]"}`}>
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mb-8">{cat.title}</h2>
            </Reveal>
            <Reveal>
              <div>
                {cat.faqs.map((f) => (
                  <FAQItem key={f.q} q={f.q} a={f.a} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-[#0B2E5C]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 style={fontDisplay} className="text-h2 text-white mb-6">Still have a question?</h2>
            <p style={fontBody} className="text-body-lg text-white/70 max-w-xl mx-auto mb-10">
              Book a free demo and we'll walk through exactly how Velnex AI would work for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" icon={ArrowUpRight}>Book a Demo</Button>
              <Button href="/contact" variant="secondary" className="!text-white !border-white/30 hover:!bg-white/10">
                Contact Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
