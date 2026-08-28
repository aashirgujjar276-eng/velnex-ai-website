import React from "react";
import LegalLayout, { LegalSection, Placeholder } from "../../components/LegalLayout.jsx";

export default function Terms() {
  return (
    <LegalLayout
      title="Terms of Service"
      description="The terms that govern use of the Velnex AI website and engagement of our AI agent development services."
      breadcrumbLabel="Terms of Service"
    >
      <LegalSection id="use-of-site" title="1. Use of Our Site">
        <p>
          You agree to use our Site only for lawful purposes and in a way
          that does not infringe the rights of, or restrict or inhibit the
          use of, this Site by any third party.
        </p>
      </LegalSection>

      <LegalSection id="services" title="2. Services">
        <p>
          Velnex AI provides custom AI agent development and automation
          services for businesses. Details, scope, and pricing for any
          specific project are agreed upon separately between Velnex AI and
          the client, typically following an initial consultation.
        </p>
      </LegalSection>

      <LegalSection id="no-guarantee" title="3. No Guarantee of Results">
        <p>
          While we design our AI agents to perform reliably within defined
          parameters, we do not guarantee specific business outcomes, as
          results depend on factors including but not limited to the
          client's data, systems, and use case.
        </p>
      </LegalSection>

      <LegalSection id="ip" title="4. Intellectual Property">
        <p>
          All content on this Site — including text, graphics, logos, and
          design — is the property of Velnex AI unless otherwise stated, and
          may not be reproduced without permission.
        </p>
      </LegalSection>

      <LegalSection id="third-party-tools" title="5. Third-Party Tools">
        <p>
          Our Site may feature or link to third-party tools (including a
          live AI agent demo). Use of these tools is subject to their own
          respective terms, and Velnex AI is not responsible for their
          availability or performance.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="6. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Velnex AI shall not be
          liable for any indirect, incidental, or consequential damages
          arising from your use of this Site or our services.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="7. Changes to These Terms">
        <p>
          We may revise these Terms at any time. Continued use of the Site
          after changes constitutes acceptance of the updated Terms.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" title="8. Governing Law">
        <p>
          These Terms are governed by the laws of{" "}
          <Placeholder>Insert your country/province</Placeholder>, without
          regard to conflict of law principles.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="9. Contact Us">
        <p>Questions about these Terms can be sent to:</p>
        <p>
          Email: <a href="mailto:info@velnexai.com" className="text-[#1E5FA8] underline underline-offset-4 hover:text-[#0B2E5C]">info@velnexai.com</a>
          <br />
          Phone: <a href="tel:+14383462951" className="text-[#1E5FA8] underline underline-offset-4 hover:text-[#0B2E5C]">+1 (438) 346-2951</a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
