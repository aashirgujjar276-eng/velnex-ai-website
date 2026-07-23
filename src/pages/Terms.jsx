import React from "react";
import { fontDisplay, fontBody, fontMono } from "../theme.js";

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 style={fontDisplay} className="text-[#0B2E5C] text-lg uppercase tracking-tight mb-3">{title}</h2>
    <div style={fontBody} className="text-[#123B73]/80 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function Terms() {
  return (
    <div className="pt-32 pb-24 px-6 sm:px-10 lg:px-16 max-w-3xl mx-auto">
      <div className="flex items-center gap-2 mb-4" style={fontMono}>
        <span className="text-[#1E5FA8] text-xs tracking-[0.3em] uppercase">Legal</span>
      </div>
      <h1 style={fontDisplay} className="uppercase tracking-tight text-[#0B2E5C] text-[clamp(2rem,5vw,3rem)] mb-3">
        Terms of Service
      </h1>
      <p style={fontBody} className="text-[#123B73]/50 text-xs mb-14">Effective Date: [Insert launch date]</p>

      <p style={fontBody} className="text-[#123B73]/80 text-sm leading-relaxed mb-10">
        Welcome to velnexai.com. By accessing or using our Site, you agree to be bound by these
        Terms of Service ("Terms"). If you do not agree, please do not use our Site.
      </p>

      <Section title="1. Use of Our Site">
        <p>You agree to use our Site only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use of, this Site by any third party.</p>
      </Section>

      <Section title="2. Services">
        <p>Velnex AI provides custom AI agent development and automation services for businesses. Details, scope, and pricing for any specific project are agreed upon separately between Velnex AI and the client, typically following an initial consultation.</p>
      </Section>

      <Section title="3. No Guarantee of Results">
        <p>While we design our AI agents to perform reliably within defined parameters, we do not guarantee specific business outcomes, as results depend on factors including but not limited to the client's data, systems, and use case.</p>
      </Section>

      <Section title="4. Intellectual Property">
        <p>All content on this Site — including text, graphics, logos, and design — is the property of Velnex AI unless otherwise stated, and may not be reproduced without permission.</p>
      </Section>

      <Section title="5. Third-Party Tools">
        <p>Our Site may feature or link to third-party tools (including a live AI agent demo). Use of these tools is subject to their own respective terms, and Velnex AI is not responsible for their availability or performance.</p>
      </Section>

      <Section title="6. Limitation of Liability">
        <p>To the fullest extent permitted by law, Velnex AI shall not be liable for any indirect, incidental, or consequential damages arising from your use of this Site or our services.</p>
      </Section>

      <Section title="7. Changes to These Terms">
        <p>We may revise these Terms at any time. Continued use of the Site after changes constitutes acceptance of the updated Terms.</p>
      </Section>

      <Section title="8. Governing Law">
        <p>These Terms are governed by the laws of [Insert your country/province], without regard to conflict of law principles.</p>
      </Section>

      <Section title="9. Contact Us">
        <p>Questions about these Terms can be sent to:</p>
        <p>Email: rehmans@velnexai.com<br />Phone: +1 (438) 346-2951</p>
      </Section>
    </div>
  );
}
