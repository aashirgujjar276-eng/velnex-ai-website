import React, { useState } from "react";
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { fontDisplay, fontBody, fontMono } from "../../theme.js";
import Reveal from "../../components/Reveal.jsx";
import Seo from "../../components/Seo.jsx";
import { organizationSchema, breadcrumbSchema } from "../../lib/structuredData.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("https://velnex-contact.aashirgujjar276.workers.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <>
      <Seo
        path="/contact"
        title="Contact | Velnex AI"
        description="Get in touch with Velnex AI by email, phone, or the contact form — a real person will get back to you."
        jsonLd={[organizationSchema(), breadcrumbSchema([{ label: "Contact", path: "/contact" }])]}
      />

      <section className="section-padding bg-[#0B2E5C]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <span className="text-[#7FC1FF] text-eyebrow" style={fontMono}>Contact</span>
            <h1 style={fontDisplay} className="text-h1 text-white mt-4 mb-8">Get in touch.</h1>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-12">
              <a href="mailto:info@velnexai.com" className="flex items-center gap-3 text-white/90 hover:text-white transition-colors" style={fontBody}>
                <Mail className="w-5 h-5 text-[#7FC1FF] shrink-0" />
                <span className="text-sm sm:text-base">info@velnexai.com</span>
              </a>
              <a href="tel:+14383462951" className="flex items-center gap-3 text-white/90 hover:text-white transition-colors" style={fontBody}>
                <Phone className="w-5 h-5 text-[#7FC1FF] shrink-0" />
                <span className="text-sm sm:text-base">+1 (438) 346-2951</span>
              </a>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit} style={fontBody}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-white/60 text-xs tracking-widest uppercase mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white text-sm rounded-lg placeholder:text-white/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-company" className="block text-white/60 text-xs tracking-widest uppercase mb-2">
                    Company
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white text-sm rounded-lg placeholder:text-white/30"
                    placeholder="Business name (optional)"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-white/60 text-xs tracking-widest uppercase mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white text-sm rounded-lg placeholder:text-white/30"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-white/60 text-xs tracking-widest uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white text-sm rounded-lg resize-none placeholder:text-white/30"
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-[#7FC1FF] hover:bg-white text-[#0B2E5C] px-7 py-4 text-xs tracking-widest uppercase font-bold rounded-lg transition-colors ember-focus disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              {status === "success" && (
                <p className="text-green-300 text-sm mt-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Message sent successfully — we'll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-300 text-sm mt-3">
                  Something went wrong. Please try again, or email us directly at{" "}
                  <a href="mailto:info@velnexai.com" className="underline">
                    info@velnexai.com
                  </a>
                  .
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
