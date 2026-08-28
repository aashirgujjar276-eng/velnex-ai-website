import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight, ChevronDown, ChevronRight, Workflow, Clock, ShieldCheck,
  TrendingUp, Database,
} from "lucide-react";
import { fontDisplay, fontBody, fontMono } from "../theme.js";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";
import { solutions, industries } from "../data/sitemap.js";
import { SOLUTION_ICONS, SOLUTION_SUMMARIES, INDUSTRY_ICONS } from "../data/icons.js";
import Seo from "../components/Seo.jsx";
import { organizationSchema, breadcrumbSchema } from "../lib/structuredData.js";

const BENEFITS = [
  { icon: Clock, title: "Faster response", desc: "Every inquiry gets handled in seconds, not hours." },
  { icon: TrendingUp, title: "No lost volume", desc: "Handles busy periods and after-hours without dropping requests." },
  { icon: ShieldCheck, title: "Consistent quality", desc: "Every interaction follows the same guardrails, every time." },
];

const RELEVANT_INDUSTRIES = [
  "dental-practices", "real-estate", "law-firms", "home-services",
  "hotels-restaurants", "auto-repair-shops", "insurance-agencies", "salons-spas",
];

const FAQS = [
  { q: "Can I use just one solution instead of all seven?", a: "Yes. Each solution works independently — most businesses start with one (often AI Receptionist or AI Call Answering) and add others as needed." },
  { q: "Do these solutions work together automatically?", a: "Yes. When you use more than one, they share context — a call answered by AI Receptionist can hand straight into AI Appointment Booking without repeating information." },
  { q: "Will this replace my existing tools?", a: "No. These solutions connect to your existing calendar, CRM, and phone system rather than requiring you to switch platforms." },
  { q: "How is this different from a standard chatbot or IVR?", a: "These agents take action — booking, qualifying, updating records — rather than just answering from a script or routing through a phone menu." },
];

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

export default function Solutions() {
  return (
    <>
      <Seo
        path="/solutions"
        title="AI Solutions | Velnex AI"
        description="Seven purpose-built AI solutions — receptionist, voice agents, chatbots, workflow automation, appointment booking, call answering, and lead qualification."
        jsonLd={[organizationSchema(), breadcrumbSchema([{ label: "Solutions", path: "/solutions" }])]}
      />
      {/* HERO — shortened copy, tightened so it reads fully on a laptop screen without scrolling */}
      <section className="relative pt-20 pb-10 lg:pt-24 lg:pb-14 px-6 sm:px-10 lg:px-16 bg-[#0B2E5C] overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#1E5FA8]/30 blur-3xl" />
        <div className="relative max-w-3xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-5 text-xs" style={fontBody}>
            <Link to="/" className="text-white/40 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white/80">Solutions</span>
          </nav>
          <span className="text-[#7FC1FF] text-eyebrow" style={fontMono}>AI Solutions</span>
          <h1 style={fontDisplay} className="text-h1 text-white mt-4 mb-5">
            AI Agents For Your Front Line.
          </h1>
          <p style={fontBody} className="text-body-lg text-white/80 max-w-2xl mb-8">
            Seven AI solutions that answer, book, and follow up automatically —
            on their own, or working together as one system.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" icon={ArrowUpRight}>Book a Demo</Button>
            <Button href="#all-solutions" variant="secondary" className="!text-white !border-white/30 hover:!bg-white/10">
              See all Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section-padding-sm bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p style={fontBody} className="text-body-lg text-[#0B2E5C]/70">
              Every business loses time and revenue to the same small set of gaps — missed calls,
              slow replies, manual scheduling, and leads that never get followed up. Each Velnex AI
              solution below targets one of those gaps directly, and can be deployed on its own or
              combined into a complete communication system.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ALL AI SOLUTIONS */}
      <section id="all-solutions" className="section-padding bg-[#EAF4FD] scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>All solutions</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-14 max-w-2xl">
              Seven ways Velnex AI handles your front line.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((s) => {
              const Icon = SOLUTION_ICONS[s.slug] || Workflow;
              return (
                <Reveal key={s.slug}>
                  <Link to={`/solutions/${s.slug}`} className="block h-full">
                    <Card className="h-full flex flex-col">
                      <div className="w-12 h-12 rounded-xl bg-[#EAF4FD] flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6 text-[#1E5FA8]" />
                      </div>
                      <h3 style={fontDisplay} className="text-[#0B2E5C] text-base uppercase tracking-tight mb-2">{s.label}</h3>
                      <p style={fontBody} className="text-[#0B2E5C]/60 text-sm leading-relaxed mb-4 flex-1">
                        {SOLUTION_SUMMARIES[s.slug]}
                      </p>
                      <span className="text-[#1E5FA8] text-xs font-semibold inline-flex items-center gap-1">
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

      {/* HOW THE SOLUTIONS WORK TOGETHER */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>Working together</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-14 max-w-2xl">
              Built to hand off to each other, not just sit side by side.
            </h2>
          </Reveal>
          <Reveal>
            <div className="flex flex-col lg:flex-row items-stretch gap-4">
              {[
                ["A call comes in", "AI Receptionist or AI Call Answering picks up instantly"],
                ["The conversation happens", "AI Voice Agents or AI Chatbots handle the back-and-forth"],
                ["Action gets taken", "AI Appointment Booking books the slot, or AI Lead Qualification scores the inquiry"],
                ["Everything's recorded", "Details sync to your CRM and workflows automatically"],
              ].map(([title, desc], i, arr) => (
                <React.Fragment key={title}>
                  <div className="flex-1 bg-[#EAF4FD] rounded-2xl p-6">
                    <div style={fontMono} className="text-[#1E5FA8] text-xs mb-2">STEP {i + 1}</div>
                    <div style={fontDisplay} className="text-[#0B2E5C] text-sm uppercase tracking-tight mb-2">{title}</div>
                    <div style={fontBody} className="text-[#0B2E5C]/60 text-xs leading-relaxed">{desc}</div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center text-[#0B2E5C]/20">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* BUSINESS BENEFITS */}
      <section className="section-padding bg-[#EAF4FD]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>Benefits</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-14 max-w-2xl">
              What changes once these are running.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {BENEFITS.map((b) => (
              <Reveal key={b.title}>
                <Card>
                  <b.icon className="w-6 h-6 text-[#1E5FA8] mb-4" />
                  <h3 style={fontDisplay} className="text-[#0B2E5C] text-base uppercase tracking-tight mb-2">{b.title}</h3>
                  <p style={fontBody} className="text-[#0B2E5C]/60 text-sm leading-relaxed">{b.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES USING THESE SOLUTIONS */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>Who uses these</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-14 max-w-2xl">
              Industries these solutions are built for.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries
              .filter((ind) => RELEVANT_INDUSTRIES.includes(ind.slug))
              .map((ind) => {
                const Icon = INDUSTRY_ICONS[ind.slug] || Workflow;
                return (
                  <Reveal key={ind.slug}>
                    <Link
                      to={`/industries/${ind.slug}`}
                      className="flex flex-col items-center text-center gap-3 p-5 rounded-xl border border-[#0B2E5C]/10 hover:border-[#1E5FA8]/40 hover:bg-[#EAF4FD] transition-colors h-full"
                    >
                      <Icon className="w-6 h-6 text-[#1E5FA8]" />
                      <span style={fontBody} className="text-[#0B2E5C] text-sm font-medium leading-tight">
                        {ind.label.replace("AI for ", "")}
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
          </div>
          <Reveal className="mt-8">
            <Button href="/industries" variant="tertiary" icon={ArrowUpRight}>View all Industries</Button>
          </Reveal>
        </div>
      </section>

      {/* AI SOFTWARE CONNECTION */}
      <section className="section-padding bg-[#0B2E5C]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <Database className="w-8 h-8 text-[#7FC1FF] mx-auto mb-6" />
            <span className="text-[#7FC1FF] text-eyebrow" style={fontMono}>Runs on Velnex AI Software</span>
            <h2 style={fontDisplay} className="text-h2 text-white mt-4 mb-6">
              Every solution is backed by real software, not just conversation.
            </h2>
            <p style={fontBody} className="text-body-lg text-white/70 max-w-2xl mx-auto mb-10">
              Calls, chats, bookings, and leads all sync into Velnex AI's CRM, appointment
              management, and workflow automation software — so nothing lives only in a
              transcript.
            </p>
            <Button href="/ai-software" variant="secondary" className="!text-white !border-white/30 hover:!bg-white/10" icon={ArrowUpRight}>
              Explore Velnex AI Software
            </Button>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>FAQ</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-10">
              Common questions about our solutions.
            </h2>
          </Reveal>
          <Reveal>
            <div>
              {FAQS.map((f) => (
                <FAQItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* BOOK DEMO CTA */}
      <section className="section-padding bg-[#EAF4FD]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mb-6">
              Not sure which solution fits first?
            </h2>
            <p style={fontBody} className="text-body-lg text-[#0B2E5C]/70 max-w-xl mx-auto mb-10">
              Book a short call and we'll figure out where an AI agent makes the biggest
              difference for your business.
            </p>
            <Button href="/contact" variant="primary" icon={ArrowUpRight}>Book a Demo</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
