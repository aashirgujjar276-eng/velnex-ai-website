import React, { useEffect, useState } from "react";
import { Bot, Sparkles, X } from "lucide-react";
import { fontBody, fontMono, AGENT_URL } from "../theme.js";

export default function FloatingAgent() {
  const [open, setOpen] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowLabel(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Chat panel */}
      <div
        className={`fixed z-[60] bottom-24 right-4 sm:right-8 w-[92vw] sm:w-[380px] h-[70vh] sm:h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-black/10 overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right ${
          open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-[#0A0A0C]" style={fontBody}>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Bot className="w-5 h-5 text-[#FF7A45]" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full ring-2 ring-[#0A0A0C]" />
            </div>
            <div>
              <div className="text-white text-sm font-semibold leading-tight">Velnex AI Agent</div>
              <div className="text-white/50 text-[10px] leading-tight">Live AI &middot; not a human</div>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white ember-focus" aria-label="Close agent chat">
            <X className="w-5 h-5" />
          </button>
        </div>
        <iframe
          title="Velnex AI Agent"
          src={AGENT_URL}
          className="flex-1 w-full"
          style={{ border: "none" }}
          loading="lazy"
        />
      </div>

      {/* Label bubble */}
      <div
        className={`fixed z-[59] bottom-24 right-20 sm:right-28 transition-all duration-500 ${
          showLabel && !open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setOpen(true)}
          style={fontBody}
          className="flex items-center gap-2 bg-white text-[#14120F] text-sm font-medium pl-3 pr-4 py-2.5 rounded-full shadow-xl border border-black/10 hover:scale-[1.03] transition-transform ember-focus"
        >
          <Sparkles className="w-4 h-4 text-[#FF7A45]" />
          Chat with our AI Agent
        </button>
      </div>

      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open Velnex AI Agent chat"
        className="fixed z-[60] bottom-6 right-4 sm:right-8 w-16 h-16 rounded-full bg-[#FF7A45] hover:bg-[#ff8c5f] shadow-2xl flex items-center justify-center transition-transform hover:scale-105 ember-focus"
      >
        {open ? (
          <X className="w-6 h-6 text-black" />
        ) : (
          <div className="relative">
            <Bot className="w-7 h-7 text-black" />
            <span className="absolute inset-0 rounded-full animate-ping bg-black/10" />
          </div>
        )}
      </button>
      {!open && (
        <span
          style={fontMono}
          className="fixed z-[60] bottom-[74px] right-[26px] sm:right-[50px] bg-emerald-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide pointer-events-none"
        >
          AI
        </span>
      )}
    </>
  );
}
