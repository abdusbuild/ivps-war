import Link from "next/link";
import LegalLayout from "./LegalLayout";

const TOC = [
  { id: "acceptance", label: "Acceptance of terms" },
  { id: "use-of-site", label: "Use of this website" },
  { id: "accuracy", label: "Accuracy of information" },
  { id: "admissions", label: "Admissions & fees" },
  { id: "ip", label: "Intellectual property" },
  { id: "submissions", label: "Content you submit" },
  { id: "links", label: "Third-party links" },
  { id: "liability", label: "Limitation of liability" },
  { id: "law", label: "Governing law" },
  { id: "changes", label: "Changes to these terms" },
  { id: "contact", label: "Contact us" },
];

export default function TermsConditions() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms &amp; Conditions"
      lede="These terms govern your use of this website. By browsing this site or submitting an enquiry through it, you agree to the terms below."
      updated="7 September 2026"
      toc={TOC}
    >
      <section id="acceptance">
        <h2>1. Acceptance of terms</h2>
        <p>
          This website is operated by Indo Valley Public School, War (Aurangabad), Bihar, managed by the
          Indo Valley Foundation Trust ("the School", "we", "us"). By accessing or using this website, you
          agree to be bound by these Terms &amp; Conditions and our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>. If you do not agree with any part of these terms,
          please discontinue use of this website.
        </p>
      </section>

      <section id="use-of-site">
        <h2>2. Use of this website</h2>
        <p>
          This website is provided for general information about the School — its academics, admissions
          process, campus, faculty and school life. You may browse this website and share links to it for
          personal, non-commercial purposes. You agree not to misuse the site, attempt unauthorised access
          to any part of it, or use it to transmit harmful or unlawful content.
        </p>
      </section>

      <section id="accuracy">
        <h2>3. Accuracy of information</h2>
        <p>
          We make reasonable efforts to keep the content on this website — fees, admission timelines,
          faculty details, facilities and events — accurate and current. However, school policies,
          schedules, staff and fee structures may change during the academic year. In case of any
          conflict between information on this website and information provided by the school office in
          writing, the school office's information will apply.
        </p>
      </section>

      <section id="admissions">
        <h2>4. Admissions &amp; fees</h2>
        <p>
          Submitting an enquiry through this website does not guarantee admission. All admissions are
          subject to seat availability, the School's admission process, and verification of documents at
          the school office. Fee amounts, structures and payment schedules are set and communicated
          separately by the school administration and are not binding merely by appearing (or not
          appearing) on this website.
        </p>
      </section>

      <section id="ip">
        <h2>5. Intellectual property</h2>
        <p>
          The School's name, crest/logo, photographs, and written content on this website are the
          property of Indo Valley Public School / Indo Valley Foundation Trust unless otherwise credited,
          and may not be reproduced, distributed or used commercially without prior written permission.
        </p>
      </section>

      <section id="submissions">
        <h2>6. Content you submit</h2>
        <p>
          Any information you submit through the admission enquiry form (or otherwise send us) is provided
          voluntarily and is used as described in our <Link href="/privacy-policy">Privacy Policy</Link>. You
          are responsible for ensuring the accuracy of the information you submit.
        </p>
      </section>

      <section id="links">
        <h2>7. Third-party links</h2>
        <p>
          This website may contain links to third-party services such as WhatsApp, Google Maps, and social
          media platforms. We are not responsible for the content, accuracy or practices of these external
          sites, and linking to them does not imply endorsement.
        </p>
      </section>

      <section id="liability">
        <h2>8. Limitation of liability</h2>
        <p>
          This website is provided on an "as is" basis. To the extent permitted by law, the School shall
          not be liable for any direct or indirect loss arising from the use of, or inability to use, this
          website or reliance on information published on it. Nothing in these terms limits any liability
          that cannot be excluded under applicable law.
        </p>
      </section>

      <section id="law">
        <h2>9. Governing law</h2>
        <p>
          These terms are governed by the laws of India. Any dispute arising from the use of this website
          shall be subject to the jurisdiction of the courts at Aurangabad, Bihar.
        </p>
      </section>

      <section id="changes">
        <h2>10. Changes to these terms</h2>
        <p>
          We may revise these Terms &amp; Conditions from time to time. The "Last updated" date at the top
          of this page shows when it was last revised. Continued use of the website after changes are
          posted means you accept the revised terms.
        </p>
      </section>

      <section id="contact">
        <h2>11. Contact us</h2>
        <p>Questions about these terms can be sent to:</p>
        <p>
          <strong>Indo Valley Public School</strong>
          <br />
          Near DBGB Bank, War, Aurangabad, Bihar &ndash; 824103
          <br />
          Phone: <a href="tel:+918002730317">8002 730 317</a> / <a href="tel:+919711333779">9711 333 779</a>
          <br />
          Email: <a href="mailto:ivps786@gmail.com">ivps786@gmail.com</a>
        </p>
      </section>
    </LegalLayout>
  );
}
