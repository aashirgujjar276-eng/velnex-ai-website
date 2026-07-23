import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { fontDisplay, fontBody } from "./theme.js";
import FloatingAgent from "./components/FloatingAgent.jsx";

const NAV_LINKS = [
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToSection = (id) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goHome = () => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#EAF4FD] text-[#0B2E5C]">
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 transition-colors duration-300 ${
          scrolled || location.pathname !== "/" ? "bg-[#0B2E5C]/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
      >
        <button onClick={goHome} style={fontDisplay} className="text-white font-bold uppercase text-xl sm:text-2xl tracking-wider ember-focus">
          Velnex<span className="text-[#7FC1FF]">AI</span>
        </button>

        <div className="hidden md:flex items-center gap-10" style={fontBody}>
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => goToSection(l.id)} className="text-white/80 text-sm tracking-widest uppercase hover:text-white transition-colors ember-focus">
              {l.label}
            </button>
          ))}
          <Link to="/pricing" className="text-white/80 text-sm tracking-widest uppercase hover:text-white transition-colors ember-focus">
            Pricing
          </Link>
        </div>

        <button
          onClick={() => goToSection("contact")}
          style={fontBody}
          className="hidden md:flex items-center gap-2 border border-white/30 hover:border-[#7FC1FF]/70 hover:bg-white/5 px-6 py-3 text-xs tracking-widest uppercase transition-colors ember-focus text-white"
        >
          Book a demo <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        <button onClick={() => setMenuOpen(true)} className="md:hidden text-white ember-focus" aria-label="Open menu">
          <Menu className="w-7 h-7" />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-50 bg-[#0B2E5C]/98 backdrop-blur-sm transition-all duration-500 md:hidden ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="flex items-center justify-between px-6 py-5">
          <span style={fontDisplay} className="text-white font-bold uppercase text-xl tracking-wider">
            Velnex<span className="text-[#7FC1FF]">AI</span>
          </span>
          <button onClick={() => setMenuOpen(false)} className="text-white ember-focus" aria-label="Close menu"><X className="w-7 h-7" /></button>
        </div>
        <div className="flex flex-col items-center justify-center h-[calc(100%-88px)] gap-8">
          {NAV_LINKS.map((l, i) => (
            <button
              key={l.id}
              onClick={() => goToSection(l.id)}
              style={{ ...fontDisplay, transitionDelay: `${i * 80 + 100}ms`, opacity: menuOpen ? 1 : 0, transform: menuOpen ? "translateY(0)" : "translateY(20px)" }}
              className="text-white uppercase text-4xl transition-all duration-500 ember-focus"
            >
              {l.label}
            </button>
          ))}
          <Link
            to="/pricing"
            onClick={() => setMenuOpen(false)}
            style={{ ...fontDisplay, transitionDelay: `${NAV_LINKS.length * 80 + 100}ms`, opacity: menuOpen ? 1 : 0, transform: menuOpen ? "translateY(0)" : "translateY(20px)" }}
            className="text-white uppercase text-4xl transition-all duration-500 ember-focus"
          >
            Pricing
          </Link>
        </div>
      </div>

      <Outlet />

      <FloatingAgent />

      {/* FOOTER */}
      <footer className="px-6 sm:px-10 lg:px-16 py-10 border-t border-[#0B2E5C]/10 bg-[#0B2E5C] flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span style={fontDisplay} className="text-white font-bold uppercase text-lg tracking-wider">
            Velnex<span className="text-[#7FC1FF]">AI</span>
          </span>
          <div className="flex items-center gap-6 flex-wrap justify-center" style={fontBody}>
            <Link to="/pricing" className="text-white/60 hover:text-white text-xs tracking-wide transition-colors ember-focus">Pricing</Link>
            <Link to="/privacy-policy" className="text-white/60 hover:text-white text-xs tracking-wide transition-colors ember-focus">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-white/60 hover:text-white text-xs tracking-wide transition-colors ember-focus">Terms of Service</Link>
            <a href="https://www.instagram.com/velnex_ai/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white text-xs tracking-wide transition-colors ember-focus">Instagram</a>
            <a href="https://www.facebook.com/people/VelnexAi/61591784258710/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white text-xs tracking-wide transition-colors ember-focus">Facebook</a>
          </div>
        </div>
        <span style={fontBody} className="text-white/40 text-xs tracking-wide text-center sm:text-left">© 2026 Velnex AI. All rights reserved.</span>
      </footer>
    </div>
  );
}
