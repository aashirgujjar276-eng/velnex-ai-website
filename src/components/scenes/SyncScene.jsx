import React, { useEffect, useState } from "react";
import { Phone, Database, RefreshCw } from "lucide-react";
import { fontMono, fontBody } from "../../theme.js";
import SceneShell from "./SceneShell.jsx";

const FIELDS = [
  { label: "Name", value: "J. Alvarez" },
  { label: "Last contact", value: "Today, 2:14 PM" },
  { label: "Status", value: "Booked" },
];

/** Loops: an interaction happens -> flows into a record -> fields update live. */
export default function SyncScene({ light = false }) {
  const [step, setStep] = useState(0); // 0 idle, 1 flowing, 2..2+len updating, then hold

  useEffect(() => {
    const max = 2 + FIELDS.length;
    const durations = [1000, 800];
    const dur = step < durations.length ? durations[step] : step === max ? 1400 : 500;
    const t = setTimeout(() => setStep((s) => (s + 1) % (max + 1)), dur);
    return () => clearTimeout(t);
  }, [step]);

  const flowing = step === 1;
  const filledCount = Math.max(0, step - 2);

  return (
    <SceneShell light={light}>
      <div className="flex flex-col items-center gap-6 w-full">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-[#1E5FA8]/30 flex items-center justify-center">
            <Phone className="w-5 h-5 text-[#7FC1FF]" />
          </div>
          <div className="flex items-center gap-0.5 w-14 overflow-hidden">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`h-0.5 flex-1 rounded-full ${flowing ? "bg-[#7FC1FF]" : "bg-white/15"}`}
                style={{
                  animation: flowing ? `flow 1s ease-in-out ${i * 0.12}s infinite` : "none",
                }}
              />
            ))}
          </div>
          <div className="w-11 h-11 rounded-xl bg-emerald-500/20 flex items-center justify-center">
            <Database className="w-5 h-5 text-emerald-300" />
          </div>
        </div>

        <div className="w-full max-w-[210px] bg-white/5 border border-white/10 rounded-xl p-3.5 space-y-2">
          {FIELDS.map((f, i) => (
            <div key={f.label} className="flex items-center justify-between text-[11px]">
              <span style={fontMono} className="text-white/40 uppercase tracking-wide">{f.label}</span>
              <span
                style={fontBody}
                className={`transition-all duration-500 ${
                  filledCount > i ? "text-white opacity-100" : "text-white/20 opacity-40"
                }`}
              >
                {filledCount > i ? f.value : "—"}
              </span>
            </div>
          ))}
        </div>

        {step >= 2 + FIELDS.length && (
          <div style={fontMono} className="flex items-center gap-1.5 text-[10px] text-emerald-300 uppercase tracking-wide">
            <RefreshCw className="w-3 h-3" /> Synced
          </div>
        )}
      </div>

      <style>{`@keyframes flow { 0%,100% { opacity: 0.25; } 50% { opacity: 1; } }`}</style>
    </SceneShell>
  );
}
