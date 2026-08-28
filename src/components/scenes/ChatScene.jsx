import React, { useEffect, useState } from "react";
import { Bot, User } from "lucide-react";
import { fontBody } from "../../theme.js";
import SceneShell from "./SceneShell.jsx";

const SCRIPT = [
  { from: "user", text: "Do you have anything open Friday?" },
  { from: "ai", text: "Yes — 2:00 PM or 4:30 PM work." },
  { from: "user", text: "4:30 works." },
  { from: "ai", text: "Booked. Confirmation sent." },
];

// Each script line becomes two steps: [typing, revealed] for AI lines,
// or just [revealed] for user lines. Then a pause, then loop.
const STEPS = SCRIPT.flatMap((msg, i) =>
  msg.from === "ai"
    ? [{ i, msg, typing: true }, { i, msg, typing: false }]
    : [{ i, msg, typing: false }]
);
const PAUSE_STEPS = 3; // extra ticks at the end before looping back to empty

function Bubble({ msg, typing }) {
  const isAi = msg.from === "ai";
  return (
    <div className="flex items-end gap-2 animate-[riseIn_0.4s_ease-out]" style={{ flexDirection: isAi ? "row" : "row-reverse" }}>
      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${isAi ? "bg-[#1E5FA8]/40" : "bg-white/15"}`}>
        {isAi ? <Bot className="w-3.5 h-3.5 text-[#7FC1FF]" /> : <User className="w-3.5 h-3.5 text-white/70" />}
      </div>
      <div
        style={fontBody}
        className={`max-w-[190px] rounded-2xl px-3.5 py-2 text-xs leading-snug ${
          isAi ? "bg-[#1E5FA8]/25 text-white rounded-bl-sm" : "bg-white/90 text-[#0B2E5C] rounded-br-sm"
        }`}
      >
        {typing ? (
          <span className="flex gap-1 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-bounce [animation-delay:-0.3s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-bounce [animation-delay:-0.15s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-bounce" />
          </span>
        ) : (
          msg.text
        )}
      </div>
    </div>
  );
}

/** Loops a short back-and-forth conversation, with a typing indicator before AI replies. */
export default function ChatScene({ light = false }) {
  const [step, setStep] = useState(0);
  const total = STEPS.length + PAUSE_STEPS;

  useEffect(() => {
    const t = setTimeout(() => setStep((s) => (s + 1) % total), 900);
    return () => clearTimeout(t);
  }, [step, total]);

  const activeSteps = STEPS.slice(0, Math.min(step + 1, STEPS.length));
  // Collapse to one entry per message index, keeping latest typing state
  const byIndex = new Map();
  for (const s of activeSteps) byIndex.set(s.i, s);
  const visible = [...byIndex.values()];

  return (
    <SceneShell light={light}>
      <div className="w-full max-w-[220px] flex flex-col gap-3">
        {visible.map((s) => (
          <Bubble key={s.i} msg={s.msg} typing={s.typing} />
        ))}
      </div>
      <style>{`@keyframes riseIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </SceneShell>
  );
}
