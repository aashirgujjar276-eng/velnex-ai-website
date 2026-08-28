import React from "react";
import LegalLayout, { LegalSection } from "../../components/LegalLayout.jsx";

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="How Velnex AI collects, uses, and protects information from visitors, leads, and clients across our website and services."
      breadcrumbLabel="Privacy Policy"
    >
      <LegalSection id="info-we-collect" title="1. Information We Collect">
        <p>We may collect the following information when you use our Site:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Contact information you provide voluntarily (name, email address, phone number, company name)</li>
          <li>Messages or details you submit through our contact form or live agent chat</li>
          <li>Basic technical data (IP address, browser type, pages visited) collected automatically for analytics purposes</li>
        </ul>
      </LegalSection>

      <LegalSection id="how-we-use" title="2. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Respond to inquiries and provide quotes for our services</li>
          <li>Communicate with you about our services, including follow-ups after a demo request</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>
      </LegalSection>

      <LegalSection id="how-we-share" title="3. How We Share Your Information">
        <p>We do not sell your personal information. We may share it with:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Third-party service providers who help us operate our business (e.g., email providers, hosting services), bound by confidentiality obligations</li>
          <li>Legal authorities, if required by law</li>
        </ul>
      </LegalSection>

      <LegalSection id="retention" title="4. Data Retention">
        <p>
          We retain your information for as long as necessary to fulfill the
          purposes outlined in this policy, or as required by law.
        </p>
      </LegalSection>

      <LegalSection id="your-rights" title="5. Your Rights">
        <p>Depending on your location, you may have the right to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Request access to the personal data we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Withdraw consent for communications at any time</li>
        </ul>
        <p>To exercise these rights, contact us at info@velnexai.com.</p>
      </LegalSection>

      <LegalSection id="cookies" title="6. Cookies">
        <p>
          Our Site may use basic cookies for analytics and functionality. You
          can disable cookies through your browser settings, though this may
          affect Site functionality.
        </p>
      </LegalSection>

      <LegalSection id="third-party-links" title="7. Third-Party Links">
        <p>
          Our Site may contain links to third-party sites (e.g., our social
          media pages, demo video on YouTube). We are not responsible for the
          privacy practices of those sites.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="8. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Changes will
          be posted on this page with an updated effective date.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="9. Contact Us">
        <p>If you have questions about this Privacy Policy, contact us at:</p>
        <p>
          Email: <a href="mailto:info@velnexai.com" className="text-[#1E5FA8] underline underline-offset-4 hover:text-[#0B2E5C]">info@velnexai.com</a>
          <br />
          Phone: <a href="tel:+14383462951" className="text-[#1E5FA8] underline underline-offset-4 hover:text-[#0B2E5C]">+1 (438) 346-2951</a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
