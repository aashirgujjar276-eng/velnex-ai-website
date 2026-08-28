import React, { useEffect, useState } from "react";
import { Zap, ArrowRight, Check } from "lucide-react";
import { fontMono } from "../../theme.js";
import SceneShell from "./SceneShell.jsx";

const NODES = ["Trigger", "AI Decision", "Action"];

/** Loops: a trigger fires -> flows through decision node -> completes an action. */
export default function WorkflowScene({ light = false }) {
  const [active, setActive] = useState(0); // which node is currently "lit"

  useEffect(() => {
    const t = setTimeout(() => setActive((a) => (a + 1) % (NODES.length + 1)), active === NODES.length ? 1400 : 900);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <SceneShell light={light}>
      <div className="flex items-center gap-2 sm:gap-3 w-full justify-center">
        {NODES.map((label, i) => {
          const lit = active > i || active === NODES.length;
          const current = active === i;
          return (
            <React.Fragment key={label}>
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                    active === NODES.length
                      ? "bg-emerald-500/20 border-emerald-400/50"
                      : current
                      ? "bg-[#1E5FA8]/50 border-[#7FC1FF]/60 scale-110"
                      : lit
                      ? "bg-[#1E5FA8]/25 border-white/20"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  {active === NODES.length ? (
                    <Check className="w-5 h-5 text-emerald-300" />
                  ) : (
                    <Zap className={`w-5 h-5 ${current ? "text-white" : "text-[#7FC1FF]/70"}`} />
                  )}
                </div>
                <span style={fontMono} className="text-[9px] text-white/50 uppercase tracking-wide text-center leading-tight">
                  {label}
                </span>
              </div>
              {i < NODES.length - 1 && (
                <ArrowRight className={`w-4 h-4 shrink-0 transition-colors duration-500 ${active > i ? "text-[#7FC1FF]" : "text-white/15"}`} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </SceneShell>
  );
}
