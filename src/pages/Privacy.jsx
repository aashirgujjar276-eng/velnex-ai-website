import React from "react";
import { fontDisplay, fontBody, fontMono } from "../theme.js";

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 style={fontDisplay} className="text-[#0B2E5C] text-lg uppercase tracking-tight mb-3">{title}</h2>
    <div style={fontBody} className="text-[#123B73]/80 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function Privacy() {
  return (
    <div className="pt-32 pb-24 px-6 sm:px-10 lg:px-16 max-w-3xl mx-auto">
      <div className="flex items-center gap-2 mb-4" style={fontMono}>
        <span className="text-[#1E5FA8] text-xs tracking-[0.3em] uppercase">Legal</span>
      </div>
      <h1 style={fontDisplay} className="uppercase tracking-tight text-[#0B2E5C] text-[clamp(2rem,5vw,3rem)] mb-3">
        Privacy Policy
      </h1>
      <p style={fontBody} className="text-[#123B73]/50 text-xs mb-14">Effective Date: [Insert launch date]</p>

      <p style={fontBody} className="text-[#123B73]/80 text-sm leading-relaxed mb-10">
        Velnex AI ("we," "us," or "our") operates the website velnexai.com (the "Site"). This
        Privacy Policy explains how we collect, use, and protect your information when you visit
        our Site or interact with our services.
      </p>

      <Section title="1. Information We Collect">
        <p>We may collect the following information when you use our Site:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Contact information you provide voluntarily (name, email address, phone number, company name)</li>
          <li>Messages or details you submit through our contact form or live agent chat</li>
          <li>Basic technical data (IP address, browser type, pages visited) collected automatically for analytics purposes</li>
        </ul>
      </Section>

      <Section title="2. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Respond to inquiries and provide quotes for our services</li>
          <li>Communicate with you about our services, including follow-ups after a demo request</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>
      </Section>

      <Section title="3. How We Share Your Information">
        <p>We do not sell your personal information. We may share it with:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Third-party service providers who help us operate our business (e.g., email providers, hosting services), bound by confidentiality obligations</li>
          <li>Legal authorities, if required by law</li>
        </ul>
      </Section>

      <Section title="4. Data Retention">
        <p>We retain your information for as long as necessary to fulfill the purposes outlined in this policy, or as required by law.</p>
      </Section>

      <Section title="5. Your Rights">
        <p>Depending on your location, you may have the right to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Request access to the personal data we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Withdraw consent for communications at any time</li>
        </ul>
        <p>To exercise these rights, contact us at rehmans@velnexai.com.</p>
      </Section>

      <Section title="6. Cookies">
        <p>Our Site may use basic cookies for analytics and functionality. You can disable cookies through your browser settings, though this may affect Site functionality.</p>
      </Section>

      <Section title="7. Third-Party Links">
        <p>Our Site may contain links to third-party sites (e.g., our social media pages, demo video on YouTube). We are not responsible for the privacy practices of those sites.</p>
      </Section>

      <Section title="8. Changes to This Policy">
        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
      </Section>

      <Section title="9. Contact Us">
        <p>If you have questions about this Privacy Policy, contact us at:</p>
        <p>Email: rehmans@velnexai.com<br />Phone: +1 (438) 346-2951</p>
      </Section>
    </div>
  );
}
