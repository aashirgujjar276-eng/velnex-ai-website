import React, { useState } from "react";
import { fontBody, fontMono } from "../theme.js";
import Reveal from "../components/Reveal.jsx";
import Seo from "../components/Seo.jsx";
import { organizationSchema, breadcrumbSchema } from "../lib/structuredData.js";

export default function Pricing() {
  const [form, setForm] = useState({
    businessName: "",
    phone: "",
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("https://velnex-contact.aashirgujjar276.workers.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          enquiryType: "sales",
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.businessName,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ businessName: "", phone: "", name: "", email: "" });
    } catch (err) {
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <>
      <Seo
        path="/pricing"
        title="Pricing | Velnex AI"
        description="Every business is different, so pricing is too. Tell us about your business and we'll follow up with a straightforward quote — no obligation."
        jsonLd={[organizationSchema(), breadcrumbSchema([{ label: "Pricing", path: "/pricing" }])]}
      />

      <section className="section-padding bg-[#0B2E5C]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <p style={fontBody} className="text-body-lg text-white/80 mb-5">
              Every business is different, so pricing is too. There's no flat rate here, because a
              single AI receptionist and a full custom-built system running voice, chat, scheduling,
              and CRM together aren't the same job.
            </p>
            <p style={fontBody} className="text-body-lg text-white/80 mb-5">
              Your price depends on what you're automating, your call and booking volume, and
              whether you need a standard setup or something fully custom built around your
              existing tools and workflow.
            </p>
            <p style={fontBody} className="text-body-lg text-white/80 mb-10">
              Tell us about your business and we'll follow up with a straightforward quote — no
              obligation.
            </p>

            {status === "success" ? (
              <div className="bg-white/5 border border-white/20 rounded-lg p-6 text-center">
                <p style={fontBody} className="text-white text-sm">
                  Thanks — we've got your details and will follow up with a quote shortly.
                </p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleQuoteSubmit} style={fontBody}>
                <div>
                  <label htmlFor="quote-business" className="block text-white/60 text-xs tracking-widest uppercase mb-2">
                    Business name
                  </label>
                  <input
                    id="quote-business"
                    type="text"
                    required
                    value={form.businessName}
                    onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white text-sm rounded-lg placeholder:text-white/30"
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <label htmlFor="quote-phone" className="block text-white/60 text-xs tracking-widest uppercase mb-2">
                    Phone number
                  </label>
                  <input
                    id="quote-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white text-sm rounded-lg placeholder:text-white/30"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="quote-name" className="block text-white/60 text-xs tracking-widest uppercase mb-2">
                      Your name
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white text-sm rounded-lg placeholder:text-white/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-email" className="block text-white/60 text-xs tracking-widest uppercase mb-2">
                      Email
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white text-sm rounded-lg placeholder:text-white/30"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                {status === "error" && (
                  <p style={fontBody} className="text-red-300 text-sm">
                    Something went wrong sending that — please try again, or reach out on our Contact page.
                  </p>
                )}

                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex items-center justify-center gap-2 bg-[#7FC1FF] hover:bg-white text-[#0B2E5C] px-7 py-4 text-xs tracking-widest uppercase font-bold rounded-lg transition-colors ember-focus disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Get a Quote"}
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
