import React, { useEffect, useState } from "react";
import { Calendar, Check } from "lucide-react";
import { fontMono, fontBody } from "../../theme.js";
import SceneShell from "./SceneShell.jsx";

const SLOTS = ["9:00", "11:30", "2:00", "4:30"];

/** Loops: calendar shows open slots -> one gets selected -> confirmed with a check. */
export default function BookingScene({ light = false }) {
  const [step, setStep] = useState(0); // 0 idle, 1 selecting, 2 confirmed, 3 hold
  const picked = 2; // index into SLOTS that gets "booked"

  useEffect(() => {
    const durations = [1000, 900, 1800, 900];
    const t = setTimeout(() => setStep((s) => (s + 1) % 4), durations[step]);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <SceneShell light={light}>
      <div className="flex flex-col items-center gap-5 w-full">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#7FC1FF]" />
          <span style={fontMono} className="text-[11px] tracking-wide text-white/60 uppercase">
            Friday, Aug 14
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 w-full max-w-[220px]">
          {SLOTS.map((slot, i) => {
            const isPicked = i === picked;
            const active = isPicked && step >= 1;
            const confirmed = isPicked && step >= 2;
            return (
              <div
                key={slot}
                style={fontBody}
                className={`relative rounded-lg py-2.5 text-center text-xs font-medium transition-all duration-500 border ${
                  confirmed
                    ? "bg-emerald-500/20 border-emerald-400/50 text-emerald-300"
                    : active
                    ? "bg-[#1E5FA8]/40 border-[#7FC1FF]/60 text-white scale-105"
                    : "bg-white/5 border-white/10 text-white/50"
                }`}
              >
                {slot}
                {confirmed && (
                  <Check className="w-3.5 h-3.5 text-emerald-300 absolute -top-1.5 -right-1.5 bg-[#0B2E5C] rounded-full" />
                )}
              </div>
            );
          })}
        </div>

        <div style={fontMono} className="text-[11px] tracking-wide text-white/60 uppercase min-h-[1em]">
          {step === 0 && "Checking availability..."}
          {step === 1 && "Selecting 2:00 PM..."}
          {step >= 2 && "Appointment confirmed"}
        </div>
      </div>
    </SceneShell>
  );
}
