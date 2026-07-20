import React from "react";
import {
  ArrowUpRight, Cpu, ShieldCheck, Workflow, MessageSquareCode,
  Database, BarChart3, Mail, MapPin, Send, Bot,
} from "lucide-react";
import { fontDisplay, fontBody, fontMono } from "../theme.js";
import Reveal from "../components/Reveal.jsx";
import AgentNetworkCanvas from "../components/AgentNetworkCanvas.jsx";

const SERVICES = [
  { icon: Workflow, title: "Workflow agents", desc: "Agents that run your internal processes end-to-end — data entry, reporting, approvals — without a human touching each step." },
  { icon: MessageSquareCode, title: "Support agents", desc: "Conversational agents that resolve customer queries 24/7, escalate what actually needs a human, and learn from every ticket." },
  { icon: Database, title: "Data agents", desc: "Agents that pull, clean, and structure data across your tools, so decisions are made on what's current, not what's convenient." },
  { icon: BarChart3, title: "Ops agents", desc: "Agents that monitor operations, flag anomalies, and take predefined actions — the work that used to eat someone's whole day." },
];

export default function Home() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* HERO */}
      <section id="home" className="relative w-full h-screen min-h-[640px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0C] via-[#0A0A0C] to-[#111014]" />
        <AgentNetworkCanvas />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-10 lg:px-16">
          <div className="fade-up flex items-center gap-2 mb-4" style={fontMono}>
            <Cpu className="w-4 h-4 text-[#FF7A45]" />
            <span className="text-white/60 text-xs sm:text-sm tracking-[0.3em] uppercase">Autonomous agents, real outcomes</span>
          </div>

          <div className="fade-up flex items-center gap-2 mb-6 lg:mb-8 text-white/50 text-xs" style={fontBody}>
            <Bot className="w-3.5 h-3.5 text-[#FF7A45]" />
            <span>A live AI agent is available in the bottom-right corner — try it anytime.</span>
          </div>

          <h1 className="fade-up-1 text-white uppercase leading-[0.92] tracking-tight" style={{ ...fontDisplay, fontSize: "clamp(2.6rem, 8vw, 6.5rem)" }}>
            <span className="block">Deploy.</span>
            <span className="block">Automate.</span>
            <span className="block text-[#FF7A45]">Scale.</span>
          </h1>

          <p className="fade-up-2 mt-6 lg:mt-8 text-white/70 text-sm sm:text-base leading-relaxed max-w-md" style={fontBody}>
            We build custom AI agents that work independently across your stack, handling tasks end-to-end —{" "}
            <span className="text-white font-semibold">so your team doesn't have to.</span>
          </p>

          <div className="fade-up-3 mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <button onClick={() => scrollTo("contact")} style={fontBody} className="group flex items-center gap-2 bg-[#FF7A45] hover:bg-[#ff8c5f] text-black px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase font-semibold transition-colors ember-focus">
              See an agent in action
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <div className="hidden sm:flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-white/50" />
              <div style={fontBody} className="leading-tight">
                <div className="text-white/60 text-xs tracking-wider uppercase">Enterprise</div>
                <div className="text-white/60 text-xs tracking-wider uppercase">Ready</div>
              </div>
            </div>
          </div>

          <div className="fade-up-4 mt-8 sm:mt-10 lg:mt-14 flex flex-wrap gap-6 sm:gap-12 lg:gap-16">
            {[["40+", "Agents deployed"], ["98%", "Task success rate"], ["24/7", "Autonomous operation"]].map(([value, label]) => (
              <div key={label}>
                <div style={fontMono} className="text-white text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight">{value}</div>
                <div style={fontBody} className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative px-6 sm:px-10 lg:px-16 py-24 lg:py-32 border-t border-white/10">
        <Reveal>
          <div className="flex items-center gap-2 mb-4" style={fontMono}>
            <span className="text-[#FF7A45] text-xs tracking-[0.3em] uppercase">What we build</span>
          </div>
          <h2 style={fontDisplay} className="uppercase leading-[0.95] tracking-tight text-white mb-14 lg:mb-20">
            <span className="block text-[clamp(2rem,5vw,3.5rem)]">Agents built for</span>
            <span className="block text-[clamp(2rem,5vw,3.5rem)] text-[#FF7A45]">how you actually work.</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-px bg-white/10">
          {SERVICES.map((s) => (
            <Reveal key={s.title} className="bg-[#0A0A0C] p-8 lg:p-10 hover:bg-[#111014] transition-colors">
              <s.icon className="w-8 h-8 text-[#FF7A45] mb-6" />
              <h3 style={fontDisplay} className="text-xl lg:text-2xl uppercase mb-3 tracking-tight">{s.title}</h3>
              <p style={fontBody} className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative px-6 sm:px-10 lg:px-16 py-24 lg:py-32 border-t border-white/10 bg-[#0D0D10]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="flex items-center gap-2 mb-4" style={fontMono}>
              <span className="text-[#FF7A45] text-xs tracking-[0.3em] uppercase">Why Velnex AI</span>
            </div>
            <h2 style={fontDisplay} className="uppercase leading-[0.95] tracking-tight text-white text-[clamp(2rem,5vw,3.2rem)] mb-6">
              Automation that acts, not just assists.
            </h2>
            <p style={fontBody} className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
              Most "AI tools" wait for a prompt. Our agents don't. We design, train, and deploy
              custom AI agents that take real actions inside your business — resolving tickets,
              moving data, running processes — with clear guardrails and full visibility into
              every decision they make.
            </p>
            <p style={fontBody} className="text-white/70 text-sm sm:text-base leading-relaxed max-w-lg">
              Every agent is built around your actual workflows, not a generic template — so it
              fits the way your team already operates, from day one.
            </p>
          </Reveal>

          <Reveal className="grid grid-cols-2 gap-px bg-white/10">
            {[["Custom-built", "Not templated"], ["Full visibility", "Every action logged"], ["Fast rollout", "Live in weeks"], ["Human-in-loop", "Where it matters"]].map(([a, b]) => (
              <div key={a} className="bg-[#0D0D10] p-6 lg:p-8">
                <div style={fontDisplay} className="text-white text-base lg:text-lg uppercase tracking-tight mb-1">{a}</div>
                <div style={fontBody} className="text-white/50 text-xs tracking-wide">{b}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative px-6 sm:px-10 lg:px-16 py-24 lg:py-32 border-t border-white/10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <Reveal>
            <div className="flex items-center gap-2 mb-4" style={fontMono}>
              <span className="text-[#FF7A45] text-xs tracking-[0.3em] uppercase">Get started</span>
            </div>
            <h2 style={fontDisplay} className="uppercase leading-[0.95] tracking-tight text-white text-[clamp(2rem,5vw,3.2rem)] mb-6">
              Tell us what you'd automate first.
            </h2>
            <p style={fontBody} className="text-white/70 text-sm sm:text-base leading-relaxed max-w-md mb-10">
              Book a short call and we'll map out where an agent could take real work off your
              team's plate — no obligation, no jargon.
            </p>

            <div className="space-y-4" style={fontBody}>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Mail className="w-4 h-4 text-[#FF7A45]" />
                rehmans@velnexai.com
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-[#FF7A45]" />
                Remote-first, working worldwide
              </div>
            </div>
          </Reveal>

          <Reveal>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()} style={fontBody}>
              <div>
                <label className="block text-white/50 text-xs tracking-widest uppercase mb-2">Name</label>
                <input type="text" required className="w-full bg-transparent border border-white/20 px-4 py-3 text-white text-sm transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-white/50 text-xs tracking-widest uppercase mb-2">Work email</label>
                <input type="email" required className="w-full bg-transparent border border-white/20 px-4 py-3 text-white text-sm transition-colors" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-white/50 text-xs tracking-widest uppercase mb-2">What would you automate?</label>
                <textarea rows={4} className="w-full bg-transparent border border-white/20 px-4 py-3 text-white text-sm transition-colors resize-none" placeholder="Tell us a bit about the task or process..." />
              </div>
              <button type="submit" className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FF7A45] hover:bg-[#ff8c5f] text-black px-7 py-4 text-xs tracking-widest uppercase font-semibold transition-colors ember-focus">
                Send message
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
