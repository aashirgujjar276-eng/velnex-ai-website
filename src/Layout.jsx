import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { fontDisplay, fontBody, fontMono } from "./theme.js";
import FloatingAgent from "./components/FloatingAgent.jsx";
import Button from "./components/ui/Button.jsx";
import {
  solutions, industries, aiSoftware, aiSoftwareNav, resources, resourcesNav,
  companyFooter, legal, social,
} from "./data/sitemap.js";

/* ---------- Top-level nav config ----------
   The logo already links home, so "Home" isn't repeated in the nav.
   "Company" is intentionally not a dropdown here — it's a single
   Contact link; the fuller Company section still lives in the footer. */
const NAV = [
  { label: "Solutions", megaMenu: "solutions" },
  { label: "Industries", megaMenu: "industries" },
  { label: "AI Software", megaMenu: "aiSoftware" },
  { label: "Pricing", path: "/pricing" },
  { label: "Resources", megaMenu: "resources" },
  { label: "Contact", path: "/contact" },
];

function MegaPanel({ type }) {
  if (type === "solutions") {
    return (
      <div className="grid grid-cols-2 gap-x-10 gap-y-2 p-6 w-[520px]">
        {solutions.map((s) => (
          <Link
            key={s.slug}
            to={`/solutions/${s.slug}`}
            className="text-[#0B2E5C]/80 hover:text-[#1E5FA8] hover:bg-[#EAF4FD] text-sm py-2 px-3 rounded-lg transition-colors"
          >
            {s.label}
          </Link>
        ))}
        <Link
          to="/solutions"
          className="col-span-2 mt-2 pt-3 border-t border-[#0B2E5C]/10 text-[#1E5FA8] text-sm font-semibold flex items-center gap-1"
        >
          View all Solutions →
        </Link>
      </div>
    );
  }

  if (type === "industries") {
    return (
      <div className="p-6 w-[720px]">
        <div className="grid grid-cols-2 gap-x-10 gap-y-3 max-h-[420px] overflow-y-auto pr-2">
          {industries.map((ind) => (
            <div key={ind.slug}>
              <Link
                to={`/industries/${ind.slug}`}
                className="block text-[#0B2E5C]/80 hover:text-[#1E5FA8] hover:bg-[#EAF4FD] text-sm font-semibold py-2 px-3 rounded-lg transition-colors"
              >
                {ind.label}
              </Link>
              {ind.children && (
                <div className="flex flex-col pl-3 border-l border-[#0B2E5C]/10 ml-3 mt-0.5">
                  {ind.children.map((child) => (
                    <Link
                      key={child.slug}
                      to={`/industries/${child.slug}`}
                      className="text-[#0B2E5C]/55 hover:text-[#1E5FA8] hover:bg-[#EAF4FD] text-xs py-1.5 px-3 rounded-lg transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <Link
          to="/industries"
          className="block mt-3 pt-3 border-t border-[#0B2E5C]/10 text-[#1E5FA8] text-sm font-semibold"
        >
          View all Industries →
        </Link>
      </div>
    );
  }

  if (type === "aiSoftware") {
    return (
      <div className="p-6 w-[440px]">
        <Link
          to="/ai-software"
          className="block text-[#0B2E5C] hover:text-[#1E5FA8] hover:bg-[#EAF4FD] text-sm font-semibold py-2 px-3 rounded-lg transition-colors mb-1"
        >
          Velnex AI Software (Overview)
        </Link>
        {aiSoftwareNav.map((a) => (
          <Link
            key={a.slug}
            to={`/ai-software/${a.slug}`}
            className="block text-[#0B2E5C]/80 hover:text-[#1E5FA8] hover:bg-[#EAF4FD] text-sm py-2 px-3 rounded-lg transition-colors"
          >
            {a.label}
          </Link>
        ))}
      </div>
    );
  }

  if (type === "resources") {
    return (
      <div className="p-6 w-[280px]">
        {resourcesNav.map((r) => (
          <Link
            key={r.slug}
            to={`/resources/${r.slug}`}
            className="block text-[#0B2E5C]/80 hover:text-[#1E5FA8] hover:bg-[#EAF4FD] text-sm py-2 px-3 rounded-lg transition-colors"
          >
            {r.label}
          </Link>
        ))}
      </div>
    );
  }

  return null;
}

function DesktopNavItem({ item }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const handleEnter = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  if (!item.megaMenu) {
    return (
      <Link
        to={item.path}
        className="text-white/80 text-sm tracking-widest uppercase whitespace-nowrap hover:text-white transition-colors ember-focus"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        className="flex items-center gap-1 text-white/80 text-sm tracking-widest uppercase whitespace-nowrap hover:text-white transition-colors ember-focus"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
          open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
        }`}
      >
        <div className="bg-white rounded-xl shadow-2xl border border-[#0B2E5C]/10 overflow-hidden">
          <MegaPanel type={item.megaMenu} />
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({ item, onNavigate }) {
  const [open, setOpen] = useState(false);

  if (!item.megaMenu) {
    return (
      <Link
        to={item.path}
        onClick={onNavigate}
        style={fontDisplay}
        className="block text-white uppercase text-2xl py-3 border-b border-white/10"
      >
        {item.label}
      </Link>
    );
  }

  const links =
    item.megaMenu === "solutions"
      ? solutions.map((s) => ({ label: s.label, path: `/solutions/${s.slug}` }))
      : item.megaMenu === "industries"
      ? industries.flatMap((i) => [
          { label: i.label, path: `/industries/${i.slug}` },
          ...(i.children ? i.children.map((c) => ({ label: c.label, path: `/industries/${c.slug}`, indent: true })) : []),
        ])
      : item.megaMenu === "aiSoftware"
      ? [
          { label: "Velnex AI Software (Overview)", path: "/ai-software" },
          ...aiSoftwareNav.map((a) => ({ label: a.label, path: `/ai-software/${a.slug}` })),
        ]
      : item.megaMenu === "resources"
      ? resourcesNav.map((r) => ({ label: r.label, path: `/resources/${r.slug}` }))
      : [];

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen((o) => !o)}
        style={fontDisplay}
        className="w-full flex items-center justify-between text-white uppercase text-2xl py-3"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[400px] overflow-y-auto" : "max-h-0"}`}>
        <div className="pb-3 pl-2">
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={onNavigate}
              style={fontBody}
              className={
                l.indent
                  ? "block text-white/50 text-xs py-1.5 pl-4"
                  : "block text-white/70 text-sm py-2"
              }
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

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

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  const goHome = () => navigate("/");

  return (
    <div className="w-full min-h-screen bg-[#EAF4FD] text-[#0B2E5C] flex flex-col">
      {/* SKIP LINK (accessibility) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] bg-white text-[#0B2E5C] px-4 py-2 rounded-lg"
      >
        Skip to content
      </a>

      {/* HEADER */}
      <nav
        className={`fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 sm:px-10 lg:px-16 h-16 lg:h-[72px] transition-colors duration-300 ${
          scrolled || location.pathname !== "/" ? "bg-[#0B2E5C]/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
      >
        <button onClick={goHome} style={fontDisplay} className="text-white font-bold uppercase text-xl sm:text-2xl tracking-wider ember-focus shrink-0">
          Velnex<span className="text-[#7FC1FF]">AI</span>
        </button>

        <div className="hidden lg:flex items-center gap-9" style={fontBody}>
          {NAV.map((item) => (
            <DesktopNavItem key={item.label} item={item} />
          ))}
        </div>

        <div className="hidden lg:block shrink-0">
          <Button href="/contact" variant="secondary" className="!text-white !border-white/30 hover:!border-[#7FC1FF]/70">
            Book a Demo
          </Button>
        </div>

        <button onClick={() => setMenuOpen(true)} className="lg:hidden text-white ember-focus" aria-label="Open menu">
          <Menu className="w-7 h-7" />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 bg-[#0B2E5C]/98 backdrop-blur-sm transition-all duration-500 lg:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16">
          <span style={fontDisplay} className="text-white font-bold uppercase text-xl tracking-wider">
            Velnex<span className="text-[#7FC1FF]">AI</span>
          </span>
          <button onClick={() => setMenuOpen(false)} className="text-white ember-focus" aria-label="Close menu">
            <X className="w-7 h-7" />
          </button>
        </div>
        <div className="px-6 overflow-y-auto h-[calc(100%-64px)] pb-28">
          {NAV.map((item) => (
            <MobileAccordion key={item.label} item={item} onNavigate={() => setMenuOpen(false)} />
          ))}
        </div>
        {/* Sticky bottom CTA bar (mobile) */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#0B2E5C] border-t border-white/10 p-4 flex gap-3">
          <Button href="/contact" variant="primary" className="flex-1 !bg-[#7FC1FF] !text-[#0B2E5C]">
            Book a Demo
          </Button>
        </div>
      </div>

      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      <FloatingAgent />

      {/* FOOTER */}
      <footer className="border-t border-[#0B2E5C]/10 bg-[#0B2E5C]">
        {/* Link columns */}
        <div className="px-6 sm:px-10 lg:px-16 py-14 max-w-6xl mx-auto">
          <div className="mb-10">
            <span style={fontDisplay} className="text-white font-bold uppercase text-xl tracking-wider">
              Velnex<span className="text-[#7FC1FF]">AI</span>
            </span>
            <p style={fontBody} className="text-white/50 text-sm mt-2 max-w-sm">
              Automate your business with intelligent AI agents.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            <FooterColumn title="Solutions" items={solutions.map((s) => ({ label: s.label, path: `/solutions/${s.slug}` }))} viewAll="/solutions" />
            <FooterColumn title="Industries" items={industries.map((i) => ({ label: i.label, path: `/industries/${i.slug}` }))} viewAll="/industries" />
            <FooterColumn title="AI Software" items={aiSoftware.map((a) => ({ label: a.label, path: `/ai-software/${a.slug}` }))} viewAll="/ai-software" />
            <FooterColumn title="Resources" items={resources.map((r) => ({ label: r.label, path: `/resources/${r.slug}` }))} viewAll="/resources" />
            <FooterColumn title="Company" items={[{ label: "Pricing", path: "/pricing" }, ...companyFooter.map((c) => ({ label: c.label, path: c.path }))]} />
            <FooterColumn title="Legal" items={legal.map((l) => ({ label: l.label, path: l.path }))} />
          </div>
        </div>

        {/* Contact & social */}
        <div className="border-t border-white/10 px-6 sm:px-10 lg:px-16 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm" style={fontBody}>
              <span>info@velnexai.com</span>
            </div>
            <div className="flex items-center gap-5">
              {social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer nofollow" className="text-white/60 hover:text-white text-sm transition-colors">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 px-6 sm:px-10 lg:px-16 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <Button href="/contact" variant="primary" className="!px-5 !py-2.5">Book a Demo</Button>
              <Link to="/contact" className="text-white/60 hover:text-white text-xs uppercase tracking-wide">Support</Link>
            </div>
            <span style={fontBody} className="text-white/40 text-xs text-center sm:text-right">
              © 2026 Velnex AI. All rights reserved. &middot;{" "}
              <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link> &middot;{" "}
              <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterColumn({ title, items, viewAll }) {
  return (
    <div>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace" }} className="text-[#7FC1FF] text-eyebrow mb-4">
        {title}
      </div>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.path}>
            <Link to={item.path} className="text-white/60 hover:text-white text-sm transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {viewAll && (
        <Link to={viewAll} className="inline-block mt-3 text-[#7FC1FF] hover:text-white text-xs font-semibold uppercase tracking-wide">
          View all →
        </Link>
      )}
    </div>
  );
}
