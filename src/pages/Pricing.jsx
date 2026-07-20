import React from "react";
import { ArrowUpRight } from "lucide-react";
import { fontDisplay, fontBody, fontMono } from "../theme.js";
import Reveal from "../components/Reveal.jsx";
import { useNavigate } from "react-router-dom";

const FACTORS = [
  ["Complexity", "How many steps/decisions the agent needs to handle"],
  ["Integrations", "How many tools/systems it needs to connect to"],
  ["Volume", "How much it needs to process — tickets, records, transactions"],
  ["Ongoing support", "One-time build vs. continuous monitoring and refinement"],
];

const STEPS = [
  ["01", "Book a call", "Tell us what you want automated"],
  ["02", "Get a scoped quote", "Clear pricing based on your actual needs, no hidden fees"],
  ["03", "Approve and build", "We start once you're confident in the plan"],
];

export default function Pricing() {
  const navigate = useNavigate();
  const goToContact = () => {
    navigate("/");
    setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <div className="pt-32 pb-24 px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto">
      <Reveal>
        <div className="flex items-center gap-2 mb-4" style={fontMono}>
          <span className="text-[#FF7A45] text-xs tracking-[0.3em] uppercase">Pricing</span>
        </div>
        <h1 style={fontDisplay} className="uppercase leading-[0.95] tracking-tight text-white text-[clamp(2rem,6vw,4rem)] mb-6">
          Pricing built around your business, not a template.
        </h1>
        <p style={fontBody} className="text-white/70 text-base leading-relaxed max-w-2xl mb-16">
          Every agent we build is different — so is the cost. Tell us what you'd automate, and
          we'll give you a clear quote based on scope, complexity, and integration needs.
        </p>
      </Reveal>

      <Reveal>
        <h2 style={fontDisplay} className="text-white text-xl uppercase tracking-tight mb-4">Why custom pricing</h2>
        <p style={fontBody} className="text-white/70 text-sm leading-relaxed max-w-2xl mb-16">
          No two businesses automate the same way. A support agent handling 50 tickets a day is a
          different build than one managing 5,000 across ten integrations. Rather than force you
          into a generic tier that doesn't fit, we scope every project individually — so you only
          pay for what you actually need.
        </p>
      </Reveal>

      <Reveal>
        <h2 style={fontDisplay} className="text-white text-xl uppercase tracking-tight mb-6">What affects your quote</h2>
        <div className="grid sm:grid-cols-2 gap-px bg-white/10 mb-16">
          {FACTORS.map(([title, desc]) => (
            <div key={title} className="bg-[#0D0D10] p-6 lg:p-8">
              <div style={fontDisplay} className="text-white text-base uppercase tracking-tight mb-2">{title}</div>
              <div style={fontBody} className="text-white/50 text-sm leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <h2 style={fontDisplay} className="text-white text-xl uppercase tracking-tight mb-6">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {STEPS.map(([num, title, desc]) => (
            <div key={num}>
              <div style={fontMono} className="text-[#FF7A45] text-2xl mb-2">{num}</div>
              <div style={fontDisplay} className="text-white text-lg uppercase tracking-tight mb-2">{title}</div>
              <div style={fontBody} className="text-white/50 text-sm leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="border-t border-white/10 pt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <h2 style={fontDisplay} className="text-white text-2xl uppercase tracking-tight">
            Get a clear quote for your project.
          </h2>
          <button
            onClick={goToContact}
            style={fontBody}
            className="group flex items-center gap-2 bg-[#FF7A45] hover:bg-[#ff8c5f] text-black px-7 py-4 text-xs tracking-widest uppercase font-semibold transition-colors ember-focus w-fit"
          >
            Book a Demo
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </Reveal>
    </div>
  );
}
