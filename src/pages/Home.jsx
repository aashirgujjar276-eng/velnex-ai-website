import React, { useState } from "react";
import {
  ArrowUpRight, Cpu, ShieldCheck, Workflow, MessageSquareCode,
  Database, BarChart3, Mail, MapPin, Send, Bot, Phone, Globe, Clock,
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
  const [form, setForm] = useState({
  name: "",
  email: "",
  message: "",
});

const [loading, setLoading] = useState(false);

const [status, setStatus] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setStatus("");

  try {
    const res = await fetch(
      "https://velnex-contact.aashirgujjar276.workers.dev/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    if (!res.ok) throw new Error();

    setStatus("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });

  } catch (err) {
    setStatus("Something went wrong. Please try again.");
  }

  setLoading(false);
};
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* HERO */}
      <section id="home" className="relative w-full min-h-screen overflow-hidden py-32 lg:py-0">
        {/* Blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#BEE3F8] via-[#4A8FDB] to-[#123B73]" />
        {/* Large dark navy circle, top-left */}
        <div className="absolute -top-24 -left-24 w-[460px] h-[460px] rounded-full bg-gradient-to-br from-[#0B2E5C] to-[#1E5FA8]" />
        {/* Small floating accent circle */}
        <div className="absolute top-[38%] right-10 sm:right-24 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#7FC1FF]/70" />
        <AgentNetworkCanvas />
     <div className="hidden lg:block absolute top-28 right-10 z-10 w-[600px]">
  <img
    src="/features.png"
    alt="Voice calls, multiple languages, 24/7 availability, enterprise security"
    className="w-full rounded-2xl shadow-2xl"
  />
</div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E5C]/50 via-transparent to-transparent" />

        <div className="relative z-10 flex flex-col justify-center h-full pt-8 lg:pt-36 px-6 sm:px-10 lg:px-16">
          

          

          <h1 className="fade-up-1 text-white uppercase leading-[0.92] tracking-tight drop-shadow-sm" style={{ ...fontDisplay, fontSize: "clamp(2.6rem, 8vw, 6.5rem)" }}>
            <span className="block">Deploy.</span>
            <span className="block">Automate.</span>
            <span className="block text-[#0B2E5C]">Scale.</span>
          </h1>

        <p className="fade-up-2 mt-6 lg:mt-8 text-white/85 text-sm sm:text-base leading-relaxed max-w-md font-medium" style={fontBody}>
  We build custom AI agents that work independently across your stack, handling tasks end-to-end —{" "}
  <span className="text-white font-bold">so your team doesn't have to.</span>
</p>
<div className="lg:hidden mt-6 fade-up-2">
  <img
    src="/features.png"
    alt="Voice calls, multiple languages, 24/7 availability, enterprise security"
    className="w-full rounded-xl shadow-lg"
  />
</div>

          <div className="fade-up-3 mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <button onClick={() => scrollTo("contact")} style={fontBody} className="group flex items-center gap-2 bg-[#0B2E5C] hover:bg-[#123B73] text-white px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase font-semibold transition-colors ember-focus">
              See an agent in action
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <div className="hidden sm:flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-white/70" />
              <div style={fontBody} className="leading-tight">
                <div className="text-white/80 text-xs tracking-wider uppercase font-semibold">Enterprise</div>
<div className="text-white/80 text-xs tracking-wider uppercase font-semibold">Ready</div>
              </div>
            </div>
          </div>

          <div className="fade-up-4 mt-6 sm:mt-8 lg:mt-10 flex flex-wrap gap-6 sm:gap-12 lg:gap-16">
           {[["40+", "Agents deployed"], ["98%", "Task success rate"], ["24/7", "Autonomous operation"]].map(([value, label]) => (
  <div key={label}>
    <div style={fontMono} className="text-white text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight">{value}</div>
    <div style={fontBody} className="text-white/70 text-[9px] sm:text-xs tracking-widest uppercase mt-1 font-semibold">{label}</div>
  </div>
))}
          </div>
        </div>
      </section>
      {/* DEMO VIDEO */}
<section className="relative px-6 sm:px-10 lg:px-16 py-24 lg:py-32 bg-white">
  <Reveal>
    <div className="flex items-center gap-2 mb-4" style={fontMono}>
      <span className="text-[#1E5FA8] text-xs tracking-[0.3em] uppercase font-semibold">See it in action</span>
    </div>
    <h2 style={fontDisplay} className="uppercase leading-[0.95] tracking-tight text-[#0B2E5C] text-[clamp(2rem,5vw,3.5rem)] mb-4">
      Watch an agent handle a real task, start to finish.
    </h2>
    <p style={fontBody} className="text-[#0B2E5C]/70 text-sm sm:text-base leading-relaxed max-w-lg mb-10">
      No mockups. This is an actual Velnex AI agent completing a workflow end-to-end.
    </p>
  </Reveal>

  <Reveal>
    <div className="w-full aspect-video rounded-xl overflow-hidden border border-[#0B2E5C]/10 shadow-lg">
      <iframe
        title="Velnex AI Demo"
        src="https://www.youtube-nocookie.com/embed/w2H0ltp8-x8"
        className="w-full h-full"
        style={{ border: "none" }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  </Reveal>
</section>

      {/* SERVICES */}
      <section id="services" className="relative px-6 sm:px-10 lg:px-16 py-24 lg:py-32 bg-[#EAF4FD]">
        <Reveal>
          <div className="flex items-center gap-2 mb-4" style={fontMono}>
            <span className="text-[#1E5FA8] text-xs tracking-[0.3em] uppercase font-semibold">What we build</span>
          </div>
          <h2 style={fontDisplay} className="uppercase leading-[0.95] tracking-tight text-[#0B2E5C] mb-14 lg:mb-20">
            <span className="block text-[clamp(2rem,5vw,3.5rem)]">Agents built for</span>
            <span className="block text-[clamp(2rem,5vw,3.5rem)] text-[#1E5FA8]">how you actually work.</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {SERVICES.map((s) => (
            <Reveal key={s.title} className="bg-white p-8 lg:p-10 rounded-2xl border border-[#0B2E5C]/10 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 rounded-xl bg-[#EAF4FD] flex items-center justify-center mb-6">
                <s.icon className="w-7 h-7 text-[#1E5FA8]" />
              </div>
              <h3 style={fontDisplay} className="text-xl lg:text-2xl uppercase mb-3 tracking-tight text-[#0B2E5C]">{s.title}</h3>
              <p style={fontBody} className="text-[#0B2E5C]/70 text-sm leading-relaxed">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative px-6 sm:px-10 lg:px-16 py-24 lg:py-32 bg-white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="flex items-center gap-2 mb-4" style={fontMono}>
              <span className="text-[#1E5FA8] text-xs tracking-[0.3em] uppercase font-semibold">Why Velnex AI</span>
            </div>
            <h2 style={fontDisplay} className="uppercase leading-[0.95] tracking-tight text-[#0B2E5C] text-[clamp(2rem,5vw,3.2rem)] mb-6">
              Automation that acts, not just assists.
            </h2>
            <p style={fontBody} className="text-[#0B2E5C]/70 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
              Most "AI tools" wait for a prompt. Our agents don't. We design, train, and deploy
              custom AI agents that take real actions inside your business — resolving tickets,
              moving data, running processes — with clear guardrails and full visibility into
              every decision they make.
            </p>
            <p style={fontBody} className="text-[#0B2E5C]/70 text-sm sm:text-base leading-relaxed max-w-lg">
              Every agent is built around your actual workflows, not a generic template — so it
              fits the way your team already operates, from day one.
            </p>
          </Reveal>

          <Reveal className="grid grid-cols-2 gap-4">
            {[["Custom-built", "Not templated"], ["Full visibility", "Every action logged"], ["Fast rollout", "Live in weeks"], ["Human-in-loop", "Where it matters"]].map(([a, b]) => (
              <div key={a} className="bg-[#EAF4FD] rounded-xl p-6 lg:p-8">
                <div style={fontDisplay} className="text-[#0B2E5C] text-base lg:text-lg uppercase tracking-tight mb-1">{a}</div>
                <div style={fontBody} className="text-[#0B2E5C]/60 text-xs tracking-wide">{b}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative px-6 sm:px-10 lg:px-16 py-24 lg:py-32 bg-[#0B2E5C]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <Reveal>
            <div className="flex items-center gap-2 mb-4" style={fontMono}>
              <span className="text-[#7FC1FF] text-xs tracking-[0.3em] uppercase font-semibold">Get started</span>
            </div>
            <h2 style={fontDisplay} className="uppercase leading-[0.95] tracking-tight text-white text-[clamp(2rem,5vw,3.2rem)] mb-6">
              Tell us what you'd automate first.
            </h2>
            <p style={fontBody} className="text-white/70 text-sm sm:text-base leading-relaxed max-w-md mb-10">
              Book a short call and we'll map out where an agent could take real work off your
              team's plate — no obligation, no jargon.
            </p>

            <div className="space-y-4" style={fontBody}>
              <div className="flex items-center gap-3 text-white/80 text-sm">
                <Mail className="w-4 h-4 text-[#7FC1FF]" />
                rehmans@velnexai.com
              </div>
              <div className="flex items-center gap-3 text-white/80 text-sm">
                <MapPin className="w-4 h-4 text-[#7FC1FF]" />
                Remote-first, working worldwide
              </div>
            </div>
          </Reveal>

          <Reveal>
            <form
  className="space-y-5"
  onSubmit={handleSubmit}
  style={fontBody}
>
              <div>
                <label className="block text-white/60 text-xs tracking-widest uppercase mb-2">Name</label>
                <input
  type="text"
  required
  value={form.name}
  onChange={(e) =>
    setForm({ ...form, name: e.target.value })
  }
  className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white text-sm rounded-lg transition-colors placeholder:text-white/30"
  placeholder="Your name"
/>
              </div>
              <div>
                <label className="block text-white/60 text-xs tracking-widest uppercase mb-2">Work email</label>
                <input
  type="email"
  required
  value={form.email}
  onChange={(e) =>
    setForm({ ...form, email: e.target.value })
  }
  className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white text-sm rounded-lg transition-colors placeholder:text-white/30"
  placeholder="you@company.com"
/>
              </div>
              <div>
                <label className="block text-white/60 text-xs tracking-widest uppercase mb-2">What would you automate?</label>
                <textarea
  rows={4}
  value={form.message}
  onChange={(e) =>
    setForm({ ...form, message: e.target.value })
  }
  className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white text-sm rounded-lg transition-colors resize-none placeholder:text-white/30"
  placeholder="Tell us a bit about the task or process..."
/>
              </div>
              <button
  type="submit"
  disabled={loading}
  className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-[#7FC1FF] hover:bg-white text-[#0B2E5C] px-7 py-4 text-xs tracking-widest uppercase font-bold rounded-lg transition-colors ember-focus disabled:opacity-60"
>
  {loading ? "Sending..." : "Send Message"}
  <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
</button>
{status && (
  <p className="text-green-300 text-sm mt-3">
    {status}
  </p>
)}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
