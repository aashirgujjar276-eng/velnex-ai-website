import React, { useEffect, useState } from "react";
import { Phone, Bot, Check } from "lucide-react";
import { fontMono, fontBody } from "../../theme.js";
import SceneShell from "./SceneShell.jsx";

const LINES = ["Incoming call...", "AI answering...", "Booking appointment...", "Confirmed."];

/** Loops: phone rings -> AI answers -> waveform talks -> resolved with a check. */
export default function CallScene({ light = false }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const durations = [1400, 1200, 1800, 1600];
    const t = setTimeout(() => setStep((s) => (s + 1) % LINES.length), durations[step]);
    return () => clearTimeout(t);
  }, [step]);

  const ringing = step === 0;
  const answered = step >= 1;
  const talking = step === 1 || step === 2;
  const done = step === 3;

  return (
    <SceneShell light={light}>
      <div className="flex flex-col items-center gap-6 w-full">
        <div className="relative">
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center transition-colors duration-500 ${
              answered ? "bg-emerald-500/20" : "bg-[#1E5FA8]/30"
            }`}
          >
            {answered ? (
              <Bot className={`w-9 h-9 ${done ? "text-emerald-400" : "text-[#7FC1FF]"}`} />
            ) : (
              <Phone className="w-9 h-9 text-[#7FC1FF] animate-[wiggle_0.6s_ease-in-out_infinite]" />
            )}
          </div>
          {ringing && (
            <>
              <span className="absolute inset-0 rounded-full border-2 border-[#7FC1FF]/50 animate-ping" />
              <span className="absolute inset-0 rounded-full border-2 border-[#7FC1FF]/30 animate-ping [animation-delay:0.3s]" />
            </>
          )}
          {done && (
            <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center ring-4 ring-[#0B2E5C]">
              <Check className="w-3.5 h-3.5 text-white" />
            </span>
          )}
        </div>

        {/* waveform */}
        <div className="flex items-end gap-1 h-8">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className="w-1 rounded-full bg-[#7FC1FF]/70"
              style={{
                height: talking ? `${8 + ((i * 37) % 24)}px` : "4px",
                animation: talking ? `bar 0.9s ease-in-out ${i * 0.05}s infinite` : "none",
                transition: "height 0.3s ease",
              }}
            />
          ))}
        </div>

        <div style={fontMono} className="text-[11px] tracking-wide text-white/60 uppercase min-h-[1em]">
          {LINES[step]}
        </div>
      </div>

      <style>{`
        @keyframes bar { 0%,100% { transform: scaleY(0.4); } 50% { transform: scaleY(1); } }
        @keyframes wiggle { 0%,100% { transform: rotate(0deg); } 50% { transform: rotate(-12deg); } }
      `}</style>
    </SceneShell>
  );
}
