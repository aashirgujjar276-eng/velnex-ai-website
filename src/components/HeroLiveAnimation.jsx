import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Bot, PhoneOff, Mic, Search, Bell } from "lucide-react";
import { fontMono, fontBody, fontDisplay } from "../theme.js";

// ---------------------------------------------------------------------
// Shared coordinate space. Every position below is expressed in this
// 1000 x 560 grid; the outer container is locked to that exact aspect
// ratio (className="aspect-[1000/560]"), so percentage-positioned HTML
// nodes and the SVG's viewBox line up pixel-for-pixel at any size.
// ---------------------------------------------------------------------
const ROBOT = { x: 500, y: 232 };
const CHAT_ANCHOR = { x: 300, y: 232 };
const CALL_ANCHOR = { x: 700, y: 232 };
const LAPTOP_ANCHOR = { x: 500, y: 372 };

const pct = (v, total) => `${(v / total) * 100}%`;

function quadPoint(t, p0, c, p1) {
  const x = (1 - t) ** 2 * p0.x + 2 * (1 - t) * t * c.x + t ** 2 * p1.x;
  const y = (1 - t) ** 2 * p0.y + 2 * (1 - t) * t * c.y + t ** 2 * p1.y;
  return { x, y };
}

function buildCurve(p0, c, p1, steps = 8) {
  const pts = [];
  for (let i = 0; i <= steps; i++) pts.push(quadPoint(i / steps, p0, c, p1));
  return pts;
}

const CURVES = [
  { id: "chat", control: { x: 400, y: 130 }, end: CHAT_ANCHOR, delay: 0 },
  { id: "call", control: { x: 600, y: 130 }, end: CALL_ANCHOR, delay: 0.7 },
  { id: "laptop", control: { x: 500, y: 300 }, end: LAPTOP_ANCHOR, delay: 1.4 },
].map((c) => ({ ...c, points: buildCurve(ROBOT, c.control, c.end) }));

// ---------------------------------------------------------------------
// Connecting lines + traveling light pulses
// ---------------------------------------------------------------------
function ConnectorLines({ reduced }) {
  return (
    <svg viewBox="0 0 1000 560" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
      {CURVES.map((c) => (
        <path
          key={`line-${c.id}`}
          d={`M ${ROBOT.x} ${ROBOT.y} Q ${c.control.x} ${c.control.y} ${c.end.x} ${c.end.y}`}
          fill="none"
          stroke="#1E5FA8"
          strokeOpacity="0.35"
          strokeWidth="2"
        />
      ))}
      {!reduced &&
        CURVES.map((c) => (
          <motion.circle
            key={`pulse-${c.id}`}
            r="5"
            fill="#7FC1FF"
            initial={{ opacity: 0 }}
            animate={{
              cx: c.points.map((p) => p.x),
              cy: c.points.map((p) => p.y),
              opacity: [0, 1, 1, 1, 1, 1, 1, 1, 0],
            }}
            transition={{ duration: 2.2, repeat: Infinity, delay: c.delay, ease: "linear" }}
            style={{ filter: "drop-shadow(0 0 4px #7FC1FF)" }}
          />
        ))}
    </svg>
  );
}

// ---------------------------------------------------------------------
// Central robot
// ---------------------------------------------------------------------
function RobotAvatar({ reduced }) {
  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
      style={{ left: pct(ROBOT.x, 1000), top: pct(ROBOT.y, 560) }}
      animate={reduced ? {} : { y: [0, -8, 0] }}
      transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* head */}
      <div className="relative w-16 h-14 sm:w-20 sm:h-16 rounded-2xl bg-gradient-to-b from-white to-[#D7E8FA] border border-white shadow-lg flex items-center justify-center">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-3 rounded-full bg-[#B8D4F2]" />
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#7FC1FF] shadow-[0_0_6px_#7FC1FF]" />
        <div className="w-11 h-6 sm:w-14 sm:h-7 rounded-lg bg-[#0B2E5C] flex items-center justify-center gap-2">
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-[#7FC1FF]"
            animate={reduced ? {} : { opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            style={{ boxShadow: "0 0 5px #7FC1FF" }}
          />
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-[#7FC1FF]"
            animate={reduced ? {} : { opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: 0.15 }}
            style={{ boxShadow: "0 0 5px #7FC1FF" }}
          />
        </div>
      </div>
      {/* torso + core */}
      <div className="relative -mt-1 w-20 h-14 sm:w-24 sm:h-16 rounded-2xl bg-gradient-to-b from-[#E7F1FC] to-[#C3DCF5] border border-white shadow-lg flex items-center justify-center">
        <span className="absolute -left-2.5 top-3 w-3 h-6 rounded-full bg-[#D7E8FA] border border-white" />
        <span className="absolute -right-2.5 top-3 w-3 h-6 rounded-full bg-[#D7E8FA] border border-white" />
        <motion.div
          className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0B2E5C] flex items-center justify-center"
          animate={reduced ? {} : { scale: [1, 1.12, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#7FC1FF]" style={{ boxShadow: "0 0 10px 2px #7FC1FF" }} />
        </motion.div>
      </div>
      <span
        style={fontMono}
        className="mt-2 text-[9px] sm:text-[10px] tracking-widest text-[#0B2E5C]/60 bg-white/70 border border-white rounded-full px-2 py-0.5 uppercase"
      >
        Velnex Agent
      </span>
    </motion.div>
  );
}

// ---------------------------------------------------------------------
// Phone frame wrapper
// ---------------------------------------------------------------------
function PhoneFrame({ children, style, delay = 0, reduced }) {
  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2 w-[150px] sm:w-[178px]"
      style={style}
      animate={reduced ? {} : { y: [0, -10, 0] }}
      transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div className="rounded-[22px] bg-[#0B2E5C] p-1.5 shadow-2xl border border-white/10">
        <div className="rounded-[16px] bg-white overflow-hidden aspect-[9/18.5] flex flex-col">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------
// Live chat screen
// ---------------------------------------------------------------------
const CHAT_MESSAGES = [
  { from: "user", text: "Do you have anything open Thursday?" },
  { from: "bot", text: "Yes — 2:30 PM works. Want me to book it?" },
  { from: "user", text: "Yes please!" },
  { from: "bot", text: "Booked. See you Thursday ✓" },
];

function ChatPhoneContent({ reduced }) {
  const [visible, setVisible] = useState(1);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (reduced) return;
    let cancelled = false;
    async function loop() {
      while (!cancelled) {
        for (let n = 1; n <= CHAT_MESSAGES.length; n++) {
          const nextIsBot = CHAT_MESSAGES[n - 1]?.from === "bot";
          if (nextIsBot) {
            setTyping(true);
            await new Promise((r) => setTimeout(r, 900));
            if (cancelled) return;
            setTyping(false);
          }
          setVisible(n);
          await new Promise((r) => setTimeout(r, 1500));
          if (cancelled) return;
        }
        await new Promise((r) => setTimeout(r, 1400));
        if (cancelled) return;
        setVisible(1);
        await new Promise((r) => setTimeout(r, 600));
      }
    }
    loop();
    return () => {
      cancelled = true;
    };
  }, [reduced]);

  const shown = reduced ? CHAT_MESSAGES : CHAT_MESSAGES.slice(0, visible);

  return (
    <>
      <div className="bg-[#0B2E5C] px-3 pt-3 pb-2.5 flex items-center gap-2 shrink-0">
        <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
          <Bot className="w-3.5 h-3.5 text-[#7FC1FF]" />
        </div>
        <div style={fontBody} className="text-white text-[10px] font-semibold leading-tight">
          AI Assistant Chat
          <div className="flex items-center gap-1 text-[8px] text-emerald-300 font-normal">
            <span className="w-1 h-1 rounded-full bg-emerald-400" /> Online
          </div>
        </div>
      </div>
      <div className="flex-1 bg-[#F3F7FC] px-2.5 py-2.5 flex flex-col gap-1.5 overflow-hidden">
        {shown.map((m, i) => (
          <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            <span
              style={fontBody}
              className={`text-[8.5px] leading-snug px-2 py-1.5 rounded-xl max-w-[85%] ${
                m.from === "user" ? "bg-[#1E5FA8] text-white rounded-br-sm" : "bg-white text-[#0B2E5C] rounded-bl-sm shadow-sm"
              }`}
            >
              {m.text}
            </span>
          </div>
        ))}
        {typing && !reduced && (
          <div className="flex justify-start">
            <span className="bg-white shadow-sm rounded-xl rounded-bl-sm px-2.5 py-1.5 flex items-center gap-0.5">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1 h-1 rounded-full bg-[#0B2E5C]/40"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </span>
          </div>
        )}
      </div>
    </>
  );
}

// ---------------------------------------------------------------------
// Live voice call screen
// ---------------------------------------------------------------------
function CallPhoneContent({ reduced }) {
  const [seconds, setSeconds] = useState(4);

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setSeconds((s) => (s >= 59 ? 0 : s + 1)), 1000);
    return () => clearInterval(t);
  }, [reduced]);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="flex-1 bg-gradient-to-b from-[#123B73] to-[#0B2E5C] flex flex-col items-center justify-between px-3 py-4">
      <div style={fontMono} className="text-white/50 text-[8px] tracking-widest uppercase">Live Call</div>

      <div className="flex flex-col items-center gap-2">
        <div className="relative w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
          <Bot className="w-6 h-6 text-[#7FC1FF]" />
          {!reduced && (
            <motion.span
              className="absolute inset-0 rounded-full border border-[#7FC1FF]/50"
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </div>
        <div style={fontBody} className="text-white text-[10px] font-semibold">AI Voice Agent</div>
        <div style={fontMono} className="text-white/60 text-[9px]">{mm}:{ss}</div>
      </div>

      <div className="flex items-end gap-[3px] h-6">
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="w-[2.5px] rounded-full bg-[#7FC1FF]"
            style={{
              height: reduced ? "6px" : `${5 + ((i * 29) % 18)}px`,
              animation: reduced ? "none" : `heroWave 1s ease-in-out ${i * 0.06}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="flex items-center gap-4 pb-1">
        <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
          <Mic className="w-3 h-3 text-white/80" />
        </div>
        <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
          <PhoneOff className="w-3.5 h-3.5 text-white" />
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------
// Live laptop dashboard
// ---------------------------------------------------------------------
function useTickingNumber(target, reduced, step = 1, intervalMs = 700) {
  const [n, setN] = useState(Math.max(0, target - 8));
  useEffect(() => {
    if (reduced) {
      setN(target);
      return;
    }
    const t = setInterval(() => {
      setN((prev) => (prev >= target ? Math.max(0, target - 8) : prev + step));
    }, intervalMs);
    return () => clearInterval(t);
  }, [reduced, target, step, intervalMs]);
  return n;
}

const CHART_FRAMES = [
  [30, 45, 38, 55, 48, 62, 58],
  [35, 40, 50, 46, 60, 54, 66],
  [28, 48, 42, 58, 52, 64, 60],
];

const CONTACTS = [
  { name: "Sarah M.", color: "bg-emerald-500" },
  { name: "David K.", color: "bg-[#1E5FA8]" },
  { name: "Laura P.", color: "bg-[#7FC1FF]" },
];

function LaptopContent({ reduced }) {
  const calls = useTickingNumber(1258, reduced, 3, 650);
  const bookings = useTickingNumber(96, reduced, 1, 900);
  const [frame, setFrame] = useState(0);
  const [activeContact, setActiveContact] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setFrame((f) => (f + 1) % CHART_FRAMES.length), 1800);
    return () => clearInterval(t);
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setActiveContact((a) => (a + 1) % CONTACTS.length), 1500);
    return () => clearInterval(t);
  }, [reduced]);

  const bars = reduced ? CHART_FRAMES[0] : CHART_FRAMES[frame];

  return (
    <div className="w-full h-full flex flex-col bg-[#F3F7FC]">
      <div className="flex items-center justify-between px-3 py-2 bg-white border-b border-[#0B2E5C]/10 shrink-0">
        <div className="flex items-center gap-1.5 text-[#0B2E5C]/50">
          <Search className="w-3 h-3" />
          <span style={fontBody} className="text-[8px]">Search</span>
        </div>
        <div style={fontDisplay} className="text-[#0B2E5C] text-[10px] uppercase tracking-tight">Dashboard</div>
        <Bell className="w-3 h-3 text-[#0B2E5C]/50" />
      </div>

      <div className="flex-1 grid grid-cols-3 gap-2 p-2.5">
        <div className="col-span-2 flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white rounded-lg p-2 shadow-sm">
              <div style={fontMono} className="text-[7px] text-[#0B2E5C]/50 uppercase tracking-wide">Calls Handled</div>
              <div style={fontDisplay} className="text-[#0B2E5C] text-sm">{calls.toLocaleString()}</div>
            </div>
            <div className="bg-white rounded-lg p-2 shadow-sm">
              <div style={fontMono} className="text-[7px] text-[#0B2E5C]/50 uppercase tracking-wide">Booked</div>
              <div style={fontDisplay} className="text-emerald-600 text-sm">{bookings}</div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-2 shadow-sm flex-1 flex items-end gap-[3px]">
            {bars.map((h, i) => (
              <motion.span
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-[#1E5FA8] to-[#7FC1FF]"
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                style={{ minHeight: 2 }}
              />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-2 shadow-sm flex flex-col gap-1.5">
          <div style={fontMono} className="text-[7px] text-[#0B2E5C]/50 uppercase tracking-wide mb-0.5">Recent</div>
          {CONTACTS.map((c, i) => (
            <div
              key={c.name}
              className={`flex items-center justify-between rounded px-1 py-1 transition-colors ${
                activeContact === i ? "bg-[#EAF4FD]" : ""
              }`}
            >
              <span style={fontBody} className="text-[7.5px] text-[#0B2E5C]/80 truncate">{c.name}</span>
              <span className={`w-1.5 h-1.5 rounded-full ${c.color} shrink-0`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LaptopFrame({ reduced }) {
  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[280px]"
      style={{ left: pct(LAPTOP_ANCHOR.x, 1000), top: pct(LAPTOP_ANCHOR.y + 60, 560) }}
      animate={reduced ? {} : { y: [0, -7, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
    >
      <div className="rounded-t-lg bg-[#0B2E5C] p-1.5 shadow-2xl border border-white/10 aspect-[16/10.5]">
        <div className="rounded bg-white overflow-hidden w-full h-full">
          <LaptopContent reduced={reduced} />
        </div>
      </div>
      <div className="h-2 bg-gradient-to-b from-[#0B2E5C] to-[#123B73] rounded-b-md mx-2" />
      <div className="h-1 bg-[#081F3D]/60 rounded-b-lg mx-6" />
    </motion.div>
  );
}

// ---------------------------------------------------------------------
// Light-theme ambient background
// ---------------------------------------------------------------------
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: 1.5 + Math.random() * 2,
  duration: 6 + Math.random() * 8,
  delay: Math.random() * 6,
}));

function AmbientBackground({ reduced }) {
  return (
    <>
      <motion.div
        className="absolute w-[420px] h-[420px] -top-32 -left-20 rounded-full bg-gradient-to-br from-[#BEE3F8] to-[#7FC1FF] opacity-50 blur-3xl"
        animate={reduced ? {} : { x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[380px] h-[380px] top-10 -right-24 rounded-full bg-gradient-to-br from-[#7FC1FF] to-[#4A8FDB] opacity-40 blur-3xl"
        animate={reduced ? {} : { x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      {!reduced &&
        PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
            animate={{ opacity: [0.15, 0.6, 0.15], y: [0, -14, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          />
        ))}
    </>
  );
}

// ---------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------
export default function HeroLiveAnimation() {
  const prefersReducedMotion = useReducedMotion();
  const reduced = Boolean(prefersReducedMotion);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <AmbientBackground reduced={reduced} />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-[780px] aspect-[1000/560]">
          <ConnectorLines reduced={reduced} />
          <RobotAvatar reduced={reduced} />

          <PhoneFrame style={{ left: pct(CHAT_ANCHOR.x - 60, 1000), top: pct(CHAT_ANCHOR.y, 560) }} reduced={reduced}>
            <ChatPhoneContent reduced={reduced} />
          </PhoneFrame>

          <PhoneFrame style={{ left: pct(CALL_ANCHOR.x + 60, 1000), top: pct(CALL_ANCHOR.y, 560) }} delay={0.6} reduced={reduced}>
            <CallPhoneContent reduced={reduced} />
          </PhoneFrame>

          <LaptopFrame reduced={reduced} />
        </div>
      </div>

      <style>{`
        @keyframes heroWave { 0%, 100% { transform: scaleY(0.5); } 50% { transform: scaleY(1); } }
      `}</style>
    </div>
  );
}
