import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight, ShieldCheck, Workflow, Users, Clock, DollarSign, TrendingUp,
  Eye, Zap, ChevronDown, Mail, MapPin, Bot, MessageCircle, Database,
} from "lucide-react";
import { fontDisplay, fontBody, fontMono } from "../theme.js";
import Reveal from "../components/Reveal.jsx";
import HeroLiveAnimation from "../components/HeroLiveAnimation.jsx";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";
import { solutions, aiSoftware, industries } from "../data/sitemap.js";
import { SOLUTION_ICONS, SOFTWARE_ICONS, INDUSTRY_ICONS } from "../data/icons.js";
import Seo from "../components/Seo.jsx";
import { organizationSchema } from "../lib/structuredData.js";
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "../lib/seoConfig.js";

const PROBLEMS = [
  {
    title: "Missed calls and lost opportunities",
    desc: "Every unanswered call is a customer who might just call the next business on the list. Front desks and small teams can't be everywhere at once, especially outside business hours.",
  },
  {
    title: "Slow lead response",
    desc: "The business that replies first usually wins the customer. A lead that waits hours for a reply has usually already cooled off.",
  },
  {
    title: "Manual appointment scheduling",
    desc: "Back-and-forth booking by phone or email eats up time your team could spend on higher-value work — and it's an easy place for mistakes and no-shows to creep in.",
  },
  {
    title: "Repetitive daily tasks",
    desc: "Confirming bookings, answering the same five questions, and updating spreadsheets don't need a person doing them one at a time.",
  },
];

const BENEFITS = [
  { icon: Zap, title: "Respond faster", desc: "Calls and messages get answered immediately instead of sitting in a queue." },
  { icon: Clock, title: "Save staff time", desc: "Your team spends less time on repetitive scheduling and follow-up, and more time on work that needs a human." },
  { icon: TrendingUp, title: "Capture more leads", desc: "Fewer inquiries fall through the cracks when every call and message gets a response." },
  { icon: Users, title: "Book more appointments", desc: "Customers can schedule on their own time, without waiting for a callback." },
  { icon: DollarSign, title: "Reduce repetitive work", desc: "Routine questions and administrative tasks are handled automatically." },
  { icon: Eye, title: "Improve customer experience", desc: "Every AI Customer Support interaction feels quick, consistent, and on-brand, whether it happens over Voice AI or chat." },
];

const WHY_US = [
  { title: "Built around your business", desc: "Every Custom AI Solutions build starts with your actual services and booking process — not a template with your logo dropped on top." },
  { title: "AI + human oversight", desc: "Whether it's Voice AI on the phone or Conversational AI in a chat window, anything that needs a human touch gets handed to your team, not left for the AI to guess at." },
  { title: "Connected to your existing tools", desc: "Real AI Integration means your agent works with the calendar and CRM you already use — you don't have to change how your business runs to adopt it." },
  { title: "Scalable automation", desc: "Good AI Process Automation performs the same whether you're handling ten calls a day or a hundred, without needing to hire and train more staff." },
];

const FAQS = [
  {
    q: "What is an AI automation agency and what does it actually do?",
    a: "As an AI Agency, we build AI-powered systems — voice agents, chatbots, and workflow automation — that handle tasks like answering calls, qualifying leads, and booking appointments for a business.",
  },
  {
    q: "Is Velnex AI a good fit for a small business?",
    a: "Yes. Velnex AI was built specifically for companies that need real call and lead coverage but don't have the budget or need for enterprise software.",
  },
  {
    q: "What AI automation services for small business does Velnex AI provide?",
    a: "Our AI automation services for small business include AI receptionists, voice agents, chatbots, appointment scheduling, lead qualification, and workflow automation connecting it all to your existing tools.",
  },
  {
    q: "How do I hire AI automation agency support for my business?",
    a: "Book a demo. We'll walk through your calls, leads, and booking process, then show you exactly how the automation would work before you commit to anything.",
  },
  {
    q: "Is Velnex AI the best AI automation agency for my industry?",
    a: "That depends on your workflows, but we build every project around your specific business rather than a one-size-fits-all script — book a call and we'll tell you honestly if it's a fit.",
  },
  {
    q: "Can AI agents for business automation actually replace manual work?",
    a: "For repetitive tasks like answering calls, booking appointments, and qualifying leads — yes. Anything that genuinely needs a human is routed to your team.",
  },
  {
    q: "Do you build custom AI automation solutions, or use the same template for everyone?",
    a: "Every build is custom. We configure your AI agent around your actual services, tone, and booking process rather than deploying a generic script.",
  },
  {
    q: "Can Velnex AI integrate with my existing business systems?",
    a: "Yes. We connect AI agents to the calendar, CRM, and communication tools you already use, so information stays in sync automatically.",
  },
];

const SOLUTION_DESCRIPTIONS = {
  "ai-receptionist": "An AI Receptionist answers every incoming call, handles the common questions, and routes anything urgent to your team — so no call goes unanswered, even after hours.",
  "ai-voice-agents": "An AI Voice Assistant holds a natural phone conversation, captures the caller's details, and moves things toward an outcome instead of a voicemail. Your AI Calling Agent handles the outgoing calls too — reminders, confirmations, and follow-ups.",
  "ai-chatbots": "Our AI Chatbots engage website visitors the moment they land, answer their questions, and guide them toward booking instead of bouncing off the page.",
  "ai-workflow-automation": "We connect the tools you already use so information flows automatically between your calls, forms, calendar, and CRM — no manual re-entry required.",
  "ai-appointment-booking": "Customers can book, reschedule, or cancel through AI Appointment Scheduling that checks real-time availability and updates your calendar instantly.",
  "ai-call-answering": "Think of it as an AI Answering Service that can actually hold a conversation, not just take a message and pass it along.",
  "ai-lead-qualification": "AI Lead Qualification asks the right questions upfront, so your team spends time on leads that are actually ready to buy. An AI Sales Agent follows up automatically, so your sales team spends their time closing, not chasing.",
};

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

export default function Home() {
  return (
    <>
      <Seo path="/" title={DEFAULT_TITLE} description={DEFAULT_DESCRIPTION} jsonLd={organizationSchema()} />
      {/* ================= 1. HERO ================= */}
      <section className="relative w-full min-h-screen overflow-hidden bg-[#EAF4FD]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EAF4FD] via-[#BEE3F8] to-[#4A8FDB]" />

        {/* Live animation — confined to a bounded box on the right side only,
            clear of the (transparent, floating) header above and the text
            column on the left. Desktop/tablet-landscape only; on smaller
            screens there isn't room for it without collisions, so it's
            hidden there rather than fought into place. */}
        <div className="hidden lg:block absolute top-28 right-6 xl:right-16 bottom-32 left-[48%] xl:left-[44%] 2xl:left-[40%] pointer-events-none">
          <HeroLiveAnimation />
        </div>

        {/* Scrim for text legibility — confined to roughly the left column
            where the text actually sits, so it doesn't wash out the
            animation on the right, which has nothing behind it to protect. */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E5C]/35 via-transparent to-transparent" />
        <div className="absolute inset-y-0 left-0 w-full lg:w-[58%] xl:w-[52%] bg-gradient-to-r from-[#0B2E5C]/70 via-[#0B2E5C]/25 to-transparent" />

        <div className="absolute inset-0 z-10 flex flex-col justify-end pt-24 pb-16 lg:pb-24 px-6 sm:px-10 lg:px-16">
          <div className="lg:max-w-sm xl:max-w-lg">
            <h1 style={{ ...fontDisplay, fontSize: "clamp(2rem, 4.6vw, 3.4rem)" }} className="text-white uppercase leading-[1.02] tracking-tight drop-shadow-sm max-w-2xl">
              AI Automation For Businesses
            </h1>

            <p className="mt-5 lg:mt-6 text-white/90 text-base sm:text-lg leading-relaxed max-w-xl font-medium" style={fontBody}>
              Velnex AI builds AI voice agents and chatbots that answer calls, book appointments,
              and follow up automatically — so nothing falls through the cracks.
            </p>

            <div className="mt-7 lg:mt-8 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary" icon={ArrowUpRight}>
                Book a Demo
              </Button>
              <Button href="/solutions" variant="secondary" className="!text-white !border-white/40 hover:!bg-white/10">
                Explore AI Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. TRUST / CREDIBILITY ================= */}
      <section className="section-padding-sm bg-white border-b border-[#0B2E5C]/10">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, title: "Enterprise-grade security", desc: "Guardrails and access controls built into every agent." },
            { icon: Eye, title: "Full action visibility", desc: "Every call, chat, and task is logged and reviewable." },
            { icon: Users, title: "Human-in-the-loop by design", desc: "AI handles volume; people stay in control of judgment calls." },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <item.icon className="w-6 h-6 text-[#1E5FA8] shrink-0 mt-0.5" />
              <div>
                <div style={fontDisplay} className="text-[#0B2E5C] text-sm uppercase tracking-tight">{item.title}</div>
                <div style={fontBody} className="text-[#0B2E5C]/60 text-sm mt-1">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 3. BUSINESS PROBLEMS ================= */}
      <section className="section-padding bg-[#EAF4FD]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>The challenge</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-4 max-w-2xl">
              Your business shouldn't lose customers to manual work.
            </h2>
            <p style={fontBody} className="text-body-lg text-[#0B2E5C]/70 max-w-2xl mb-14">
              Most businesses aren't losing customers because of bad service. They're losing
              them because nobody picked up the phone, a lead sat unanswered overnight, or a
              simple booking request fell through the cracks during a busy day. These aren't
              people problems — they're workflow problems, and they're solvable.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {PROBLEMS.map((p) => (
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

      {/* ================= 4. VELNEX AI SOLUTION ================= */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>The solution</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-6">
              AI automation solutions built around your business.
            </h2>
            <p style={fontBody} className="text-body-lg text-[#0B2E5C]/70 mb-4">
              Velnex AI doesn't hand you a generic chatbot script. We build AI agents around
              your actual workflows — your services, your booking process, your tools — so the
              automation fits how your business really runs.
            </p>
            <p style={fontBody} className="text-body text-[#0B2E5C]/70">
              Your team stays focused on the work that actually needs a person, while the AI
              handles the volume around it.
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-2 gap-4">
            {WHY_US.slice(0, 4).map((w) => (
              <Card key={w.title} variant="flat">
                <div style={fontDisplay} className="text-[#0B2E5C] text-sm uppercase tracking-tight mb-1">{w.title}</div>
                <div style={fontBody} className="text-[#0B2E5C]/60 text-xs">{w.desc}</div>
              </Card>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ================= 5. AI SOLUTIONS OVERVIEW ================= */}
      <section className="section-padding bg-[#EAF4FD]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>AI solutions</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-4">
              AI agents for every point of contact.
            </h2>
            <p style={fontBody} className="text-body-lg text-[#0B2E5C]/70 max-w-2xl mb-14">
              Each solution can run on its own or work together as a full front line for your business.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((s) => {
              const Icon = SOLUTION_ICONS[s.slug] || Workflow;
              return (
                <Reveal key={s.slug}>
                  <Link to={`/solutions/${s.slug}`}>
                    <Card className="h-full">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6 text-[#1E5FA8]" />
                      </div>
                      <h3 style={fontDisplay} className="text-[#0B2E5C] text-base uppercase tracking-tight mb-2">{s.label}</h3>
                      <p style={fontBody} className="text-[#0B2E5C]/60 text-sm leading-relaxed mb-4">
                        {SOLUTION_DESCRIPTIONS[s.slug]}
                      </p>
                      <span className="text-[#1E5FA8] text-xs font-semibold inline-flex items-center gap-1">
                        Explore {s.label} <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
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

      {/* ================= 5b. AI AUTOMATION SERVICES ================= */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>AI automation services</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-6">
              AI automation services that take action.
            </h2>
            <p style={fontBody} className="text-body-lg text-[#0B2E5C]/70 mb-4">
              There's a real difference between a basic chatbot that answers FAQs and an AI
              agent that actually gets things done. As a conversational AI automation company,
              Velnex AI builds agents that understand requests, qualify leads, book
              appointments, update your business systems, trigger follow-up actions, and hand
              off to a human when a conversation needs one — all while keeping a clear record
              of every interaction.
            </p>
            <p style={fontBody} className="text-body text-[#0B2E5C]/70">
              There's a real gap between a basic AI tool and true AI Business Automation. Our AI
              Agent Development process is built around Conversational AI that actually
              understands what a customer is asking, not just one that replies to keywords.
              Through{" "}
              <Link to="/solutions/ai-workflow-automation" className="text-[#1E5FA8] underline underline-offset-4 hover:text-[#0B2E5C]">
                AI Workflow Automation
              </Link>{" "}
              we connect your calls, forms, and calendar so information moves on its own
              instead of someone re-entering it by hand — real AI Integration with the tools
              you already run your business on, not a chatbot that lives in its own bubble.
              Whether it's AI Chatbot Development for your website or a voice-based automation
              package for your phone line, Velnex AI works as an AI Automation Company that
              also builds the software behind it — see how our{" "}
              <Link to="/solutions/ai-lead-qualification" className="text-[#1E5FA8] underline underline-offset-4 hover:text-[#0B2E5C]">
                AI Lead Qualification
              </Link>{" "}
              agents keep your pipeline moving.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= 6. HOW VELNEX AI WORKS ================= */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>How it works</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-14 max-w-2xl">
              Turn repetitive work into automated workflows.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["01", "Understand your business", "We start by learning how your business actually operates: your call volume, booking process, common customer questions, and the tools your team already uses."],
              ["02", "Build your AI agent", "We configure your AI receptionist, voice agent, or chatbot around your real workflows and train it on your services, policies, and tone."],
              ["03", "Connect your systems", "Your AI agent is integrated with your calendar, CRM, and communication channels, so actions taken during a conversation actually update your systems."],
              ["04", "Launch and optimize", "Once live, we monitor performance and refine the automation based on real conversations and outcomes, so it keeps improving over time."],
            ].map(([num, title, desc]) => (
              <Reveal key={num}>
                <div style={fontMono} className="text-[#1E5FA8] text-3xl mb-3">{num}</div>
                <h3 style={fontDisplay} className="text-[#0B2E5C] text-base uppercase tracking-tight mb-2">{title}</h3>
                <p style={fontBody} className="text-[#0B2E5C]/60 text-sm leading-relaxed">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 7. AI SOFTWARE OVERVIEW ================= */}
      <section className="section-padding bg-[#0B2E5C]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#7FC1FF] text-eyebrow" style={fontMono}>AI software</span>
            <h2 style={fontDisplay} className="text-h2 text-white mt-4 mb-4">
              The software running behind every agent.
            </h2>
            <p style={fontBody} className="text-body-lg text-white/70 max-w-2xl mb-14">
              Velnex AI isn't just AI agents answering calls or chatting on your website — we're
              an AI Automation Company that also builds the software behind it. We build custom
              AI automation solutions for business owners who want more than a chatbot in a
              box: tools for organizing leads, tracking call outcomes, monitoring automation
              performance, and reporting on results, so you always know what your AI agents are
              doing and what impact they're having.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiSoftware.map((a) => {
              const Icon = SOFTWARE_ICONS[a.slug] || Database;
              return (
                <Reveal key={a.slug}>
                  <Link to={`/ai-software/${a.slug}`}>
                    <div className="bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl p-6 lg:p-8 h-full transition-colors">
                      <Icon className="w-7 h-7 text-[#7FC1FF] mb-5" />
                      <h3 style={fontDisplay} className="text-white text-base uppercase tracking-tight mb-2">{a.label}</h3>
                      <span className="text-[#7FC1FF] text-xs font-semibold inline-flex items-center gap-1">
                        Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-8">
            <Button href="/ai-software" variant="secondary" className="!text-white !border-white/30 hover:!bg-white/10" icon={ArrowUpRight}>
              Explore Velnex AI Software
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ================= 8. INDUSTRIES WE SERVE ================= */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>Industries</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-4 max-w-2xl">
              AI automation for your industry.
            </h2>
            <p style={fontBody} className="text-body-lg text-[#0B2E5C]/70 max-w-2xl mb-14">
              Every industry runs differently, which is why AI for Business only works when
              it's shaped around how you actually operate. We build Custom AI Solutions and
              adapt our AI agents and automation around how each type of business actually
              functions — including{" "}
              <Link to="/industries/ai-for-home-services" className="text-[#1E5FA8] underline underline-offset-4 hover:text-[#0B2E5C]">
                home service businesses
              </Link>{" "}
              like plumbers, electricians, HVAC, and roofing companies.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((ind) => {
              const Icon = INDUSTRY_ICONS[ind.slug] || Workflow;
              return (
                <Reveal key={ind.slug}>
                  <Link
                    to={`/industries/${ind.slug}`}
                    className="flex flex-col items-center text-center gap-3 p-5 rounded-xl border border-[#0B2E5C]/10 hover:border-[#1E5FA8]/40 hover:bg-[#EAF4FD] transition-colors h-full"
                  >
                    <Icon className="w-6 h-6 text-[#1E5FA8]" />
                    <span style={fontBody} className="text-[#0B2E5C] text-sm font-medium leading-tight">{ind.label.replace("AI for ", "")}</span>
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

      {/* ================= 9. KEY BUSINESS BENEFITS ================= */}
      <section className="section-padding bg-[#EAF4FD]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>Benefits</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-14 max-w-2xl">
              What actually changes once Velnex AI is running.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      {/* ================= 10. WHY VELNEX AI ================= */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="text-[#1E5FA8] text-eyebrow" style={fontMono}>Why Velnex AI</span>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mt-4 mb-6">
              Why choose Velnex AI?
            </h2>
            <p style={fontBody} className="text-body-lg text-[#0B2E5C]/70 mb-4">
              Most "AI tools" wait for a prompt. Velnex AI agents don't — they take real action
              inside your business, with clear guardrails and full visibility into every
              decision they make.
            </p>
            <p style={fontBody} className="text-body text-[#0B2E5C]/70">
              Every interaction is logged, so you can see exactly what your AI agent is doing,
              what it's resolving, and where a human should step in.
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-2 gap-4">
            {WHY_US.map((w) => (
              <Card key={w.title} variant="flat">
                <div style={fontDisplay} className="text-[#0B2E5C] text-sm uppercase tracking-tight mb-1">{w.title}</div>
                <div style={fontBody} className="text-[#0B2E5C]/60 text-xs">{w.desc}</div>
              </Card>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ================= 11. PLATFORM WORKFLOW VISUALIZATION ================= */}
      <section className="section-padding bg-[#0B2E5C] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[#7FC1FF] text-eyebrow" style={fontMono}>How it flows</span>
            <h2 style={fontDisplay} className="text-h2 text-white mt-4 mb-16 max-w-2xl">
              One system, from first contact to closed task.
            </h2>
          </Reveal>

          <Reveal>
            <div className="flex flex-col lg:flex-row items-stretch gap-4">
              {[
                { icon: MessageCircle, label: "Customer reaches out", desc: "Call, chat, or booking request comes in" },
                { icon: Bot, label: "AI agent responds", desc: "Understands intent, answers, or takes action" },
                { icon: Database, label: "Synced to your software", desc: "CRM, calendar, and records update automatically" },
                { icon: TrendingUp, label: "Business outcome", desc: "Booked, resolved, or handed to your team" },
              ].map((step, i, arr) => (
                <React.Fragment key={step.label}>
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6">
                    <step.icon className="w-7 h-7 text-[#7FC1FF] mb-4" />
                    <div style={fontDisplay} className="text-white text-sm uppercase tracking-tight mb-1">{step.label}</div>
                    <div style={fontBody} className="text-white/50 text-xs leading-relaxed">{step.desc}</div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center text-white/30">
                      <ArrowUpRight className="w-5 h-5 rotate-90 lg:rotate-0" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= 12. FAQ ================= */}
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

      {/* ================= 13. FINAL CTA ================= */}
      <section className="section-padding bg-[#EAF4FD]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mb-6">
              Ready to automate your business with an AI automation agency you can trust?
            </h2>
            <p style={fontBody} className="text-body-lg text-[#0B2E5C]/70 max-w-xl mx-auto mb-10">
              Book a free demo and we'll walk through your calls, leads, and booking process —
              then show you exactly how Velnex AI's approach would work for your business, with
              no pressure to commit on the spot.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary" icon={ArrowUpRight}>Book a Demo</Button>
              <Button href="/contact" variant="secondary">Contact Us</Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-sm" style={fontBody}>
              <Link to="/resources" className="text-[#1E5FA8] hover:text-[#0B2E5C] underline underline-offset-4 transition-colors">
                Browse resources and guides
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact info strip — trimmed from a full duplicate form. The
          full contact form lives on its own dedicated page: /contact. */}
      <section id="contact" className="section-padding-sm bg-[#0B2E5C]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-center sm:text-left">
          <div className="flex items-center gap-3 text-white/80 text-sm" style={fontBody}>
            <Mail className="w-4 h-4 text-[#7FC1FF]" /> info@velnexai.com
          </div>
          <div className="flex items-center gap-3 text-white/80 text-sm" style={fontBody}>
            <MapPin className="w-4 h-4 text-[#7FC1FF]" /> Remote-first, working worldwide
          </div>
        </div>
      </section>
    </>
  );
}
