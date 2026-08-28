import React from "react";

/**
 * Shared visual frame for every animated "scene". Keeps sizing, border,
 * and background consistent so CallScene / ChatScene / BookingScene /
 * SyncScene / WorkflowScene all drop into a page the same way.
 */
export default function SceneShell({ children, className = "", light = false }) {
  return (
    <div
      className={`relative w-full aspect-[4/3] sm:aspect-[5/4] rounded-2xl border overflow-hidden shadow-xl ${
        light ? "bg-white/5 border-white/15" : "bg-[#0B2E5C] border-white/10"
      } ${className}`}
      aria-hidden="true"
    >
      <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#1E5FA8]/30 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#1E5FA8]/20 blur-3xl" />
      <div className="relative w-full h-full flex items-center justify-center p-6">
        {children}
      </div>
    </div>
  );
}
