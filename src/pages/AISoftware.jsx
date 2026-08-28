import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight, ChevronDown, ChevronRight, Workflow, Database, LayoutDashboard,
  Users, CalendarClock, PhoneForwarded, UserCheck, GitBranch, BarChart3,
  Sparkles, ShieldCheck, Eye, Lock,
} from "lucide-react";
import { fontDisplay, fontBody, fontMono } from "../theme.js";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";
import { aiSoftware, industries } from "../data/sitemap.js";
import Seo from "../components/Seo.jsx";
import { organizationSchema, breadcrumbSchema } from "../lib/structuredData.js";
import { INDUSTRY_ICONS } from "../data/icons.js";

const MODULES = [
  {
    slug: "ai-crm",
    icon: Database,
    title: "AI CRM",
    desc: "A central customer record built from every channel your AI agents cover — calls, chats, and bookings all land in one organized profile instead of scattered transcripts.",
  },
  {
    slug: null,
    icon: LayoutDashboard,
    title: "AI Dashboard",
    desc: "One real-time view of everything happening across your business — active calls, new bookings, incoming leads — without checking multiple tools.",
  },
  {
    slug: null,
    icon: Users,
    title: "Customer Management",
    desc: "A full profile for every customer, including their history, preferences, and every past interaction with your AI agents.",
  },
  {
    slug: "ai-appointment-management",
    icon: CalendarClock,
    title: "Appointment Management",
    desc: "A live calendar that syncs directly with AI Appointment Booking, so reschedules and cancellations are reflected immediately, not after a manual update.",
  },
  {
    slug: "ai-call-management",
    icon: PhoneForwarded,
    title: "Call Management",
    desc: "Every call is logged with a transcript and outcome, organized by customer and agent, so nothing is left to memory.",
  },
  {
    slug: "ai-lead-management",
    icon: UserCheck,
    title: "Lead Management",
    desc: "A pipeline view of every lead qualified by your AI agents, with status tracking from first contact to close.",
  },
  {
    slug: "ai-workflow-automation",
    icon: GitBranch,
    title: "Workflow Automation",
    desc: "Configurable rules that connect a trigger — like a new lead or missed call — to an action, like notifying staff or scheduling a follow-up.",
  },
  {
    slug: null,
    icon: BarChart3,
    title: "Reporting & Analytics",
    desc: "Call volume, booking rates, and response times over time, so you can see what's actually happening instead of guessing.",
  },
  {
    slug: null,
    icon: Sparkles,
    title: "AI Business Insights",
    desc: "Surfaces patterns across your interactions — like common questions or peak call times — to help inform business decisions.",
  },
];

const SECURITY_POINTS = [
  { icon: ShieldCheck, title: "Defined guardrails", desc: "Every agent operates within boundaries you set, not open-ended autonomy." },
  { icon: Eye, title: "Full action logging", desc: "Every call, booking, and update is recorded and reviewable." },
  { icon: Lock, title: "Access controls", desc: "You control who on your team can view or edit what inside the software." },
];

const FAQS = [
  { q: "Do I need to already have a CRM to use this?", a: "No. Velnex AI Software works as your CRM and operations system from day one — you don't need to bring an existing one." },
  { q: "Does this replace tools I already use?", a: "It's built to connect to your existing calendar and phone systems rather than force a full switch. It becomes the organized record behind what your AI agents handle." },
  { q: "Can I export my data?", a: "Yes — your customer, call, and lead data belongs to your business, not the software." },
  { q: "Is my business's data secure?", a: "Every part of the software operates with defined access controls and full logging, so you always know who did what and when." },
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

export default function AISoftware() {
  return (
    <>
      <Seo
        path="/ai-software"
        title="Velnex AI Software | Velnex AI"
        description="Velnex AI Software is the CRM, dashboard, and operations system that works together with Velnex AI agents to organize and act on every customer interaction."
        jsonLd={[organizationSchema(), breadcrumbSchema([{ label: "AI Software", path: "/ai-software" }])]}
      />
      {/* 1. HERO */}
      <section className="relative pt-20 pb-10 lg:pt-24 lg:pb-14 px-6 sm:px-10 lg:px-16 bg-[#0B2E5C] overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#1E5FA8]/30 blur-3xl" />
        <div className="relative max-w-4xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-6 text-xs" style={fontBody}>
            <Link to="/" className="text-white/40 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white/80">Velnex AI Software</span>
          </nav>
          <span className="text-[#7FC1FF] text-eyebrow" style={fontMono}>Velnex AI Software</span>
          <h1 style={fontDisplay} className="text-h1 text-white mt-4 mb-6">
            The software that runs behind every Velnex AI agent.
          </h1>
          <p style={fontBody} className="text-body-lg text-white/80 max-w-2xl mb-10">
            Velnex AI Software is the CRM, dashboard, and operations system your AI agents
            connect to — turning every call, chat, and booking into an organized, actionable
            record instead of a transcript that goes nowhere.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" icon={ArrowUpRight}>Book a Demo</Button>
            <Button href="#modules" variant="secondary" className="!text-white !border-white/30 hover:!bg-white/10">
              See what's included
            </Button>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS VELNEX AI SOFTWARE */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>What it is</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-6">
              What is Velnex AI Software?
            </h2>
            <p style={fontBody} className="text-body-lg text-[#0B2E5C]/70 mb-4">
              An AI agent that answers a call or books an appointment needs somewhere for that
              information to go. Velnex AI Software is that place — the underlying system that
              stores, organizes, and helps you act on everything your AI agents handle.
            </p>
            <p style={fontBody} className="text-body text-[#0B2E5C]/70">
              Instead of conversations disappearing into transcripts, they become customer
              records, booked appointments, and tracked leads inside one connected system.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. HOW THE SOFTWARE CONNECTS WITH AI AGENTS */}
      <section className="section-padding bg-[#EAF4FD]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>How it connects</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-14 max-w-2xl">
              Agents handle the conversation. The software handles the record.
            </h2>
          </Reveal>
          <Reveal>
            <div className="flex flex-col lg:flex-row items-stretch gap-4">
              {[
                ["An AI agent handles an interaction", "A call, chat, or booking request comes through one of your Velnex AI agents."],
                ["Details flow into the software", "Contact info, call outcome, and booking details are captured automatically."],
                ["It's organized into the right module", "CRM, Appointment Management, Call Management, or Lead Management, depending on what happened."],
                ["You see it on the Dashboard", "A clear, real-time view instead of digging through transcripts."],
              ].map(([title, desc], i, arr) => (
                <React.Fragment key={title}>
                  <div className="flex-1 bg-white rounded-2xl p-6 border border-[#0B2E5C]/10">
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

      {/* 4-12. MODULES */}
      <section id="modules" className="section-padding bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>What's included</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-14 max-w-2xl">
              Nine modules, one connected system.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MODULES.map((m) => {
              const body = (
                <Card className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF4FD] flex items-center justify-center mb-5">
                    <m.icon className="w-6 h-6 text-[#1E5FA8]" />
                  </div>
                  <h3 style={fontDisplay} className="text-[#0B2E5C] text-base uppercase tracking-tight mb-2">{m.title}</h3>
                  <p style={fontBody} className="text-[#0B2E5C]/60 text-sm leading-relaxed">{m.desc}</p>
                  {m.slug && (
                    <span className="text-[#1E5FA8] text-xs font-semibold inline-flex items-center gap-1 mt-4">
                      Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  )}
                </Card>
              );
              return (
                <Reveal key={m.title}>
                  {m.slug ? <Link to={`/ai-software/${m.slug}`} className="block h-full">{body}</Link> : body}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. EXAMPLE BUSINESS WORKFLOW */}
      <section className="section-padding bg-[#EAF4FD]">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>In practice</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-10">
              Example: a call comes in
            </h2>
          </Reveal>
          <Reveal>
            <ol className="space-y-4">
              {[
                "A customer calls and the AI Receptionist answers.",
                "The call is logged with a full transcript in Call Management.",
                "If it's a new contact, a profile is created automatically in the AI CRM.",
                "If they request a booking, it's scheduled directly in Appointment Management.",
                "If they're a new lead, they're added to the pipeline in Lead Management, and a workflow rule notifies your team.",
                "You see the whole thing summarized on the Dashboard, with trends visible in Reporting & Analytics.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span style={fontMono} className="w-7 h-7 rounded-full bg-white text-[#1E5FA8] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span style={fontBody} className="text-[#0B2E5C]/80 text-sm sm:text-base leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 14. INDUSTRIES THAT CAN USE THE SOFTWARE */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>Who it's for</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-14 max-w-2xl">
              Built to organize any industry's customer interactions.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind) => {
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
        </div>
      </section>

      {/* 15. SECURITY AND RELIABILITY */}
      <section className="section-padding bg-[#0B2E5C]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#7FC1FF] text-eyebrow" style={fontMono}>Security</span>
            <h2 style={fontDisplay} className="text-h2 text-white mt-4 mb-14 max-w-2xl">
              Security and reliability.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {SECURITY_POINTS.map((p) => (
              <Reveal key={p.title}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <p.icon className="w-6 h-6 text-[#7FC1FF] mb-4" />
                  <h3 style={fontDisplay} className="text-white text-sm uppercase tracking-tight mb-2">{p.title}</h3>
                  <p style={fontBody} className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 16. FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>FAQ</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-10">
              Common questions.
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

      {/* 17. BOOK DEMO CTA */}
      <section className="section-padding bg-[#EAF4FD]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mb-6">
              See Velnex AI Software running with your agents.
            </h2>
            <p style={fontBody} className="text-body-lg text-[#0B2E5C]/70 max-w-xl mx-auto mb-10">
              Book a short call and we'll walk through exactly how it organizes your business.
            </p>
            <Button href="/contact" variant="primary" icon={ArrowUpRight}>Book a Demo</Button>
          </Reveal>

          <Reveal className="mt-16 pt-10 border-t border-[#0B2E5C]/15 grid sm:grid-cols-3 gap-6 text-left">
            <Link
              to="/solutions"
              className="block p-5 rounded-xl border border-[#0B2E5C]/10 bg-white hover:border-[#1E5FA8]/40 transition-colors"
            >
              <div style={fontDisplay} className="text-[#0B2E5C] text-sm uppercase tracking-tight mb-1">
                See the AI Solutions it runs
              </div>
              <p style={fontBody} className="text-[#0B2E5C]/60 text-xs leading-relaxed">
                The receptionist, chat, and voice agents that feed this software.
              </p>
            </Link>
            <Link
              to="/industries"
              className="block p-5 rounded-xl border border-[#0B2E5C]/10 bg-white hover:border-[#1E5FA8]/40 transition-colors"
            >
              <div style={fontDisplay} className="text-[#0B2E5C] text-sm uppercase tracking-tight mb-1">
                Browse by industry
              </div>
              <p style={fontBody} className="text-[#0B2E5C]/60 text-xs leading-relaxed">
                See how it's configured for your specific type of business.
              </p>
            </Link>
            <Link
              to="/pricing"
              className="block p-5 rounded-xl border border-[#0B2E5C]/10 bg-white hover:border-[#1E5FA8]/40 transition-colors"
            >
              <div style={fontDisplay} className="text-[#0B2E5C] text-sm uppercase tracking-tight mb-1">
                View pricing
              </div>
              <p style={fontBody} className="text-[#0B2E5C]/60 text-xs leading-relaxed">
                Get a straightforward quote scoped to your business.
              </p>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
