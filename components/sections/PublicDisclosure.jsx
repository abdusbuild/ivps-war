import Link from "next/link";
import LegalLayout from "./LegalLayout";

const TOC = [
  { id: "general", label: "A. General information" },
  { id: "documents", label: "B. Documents & undertakings" },
  { id: "academics", label: "C. Academic session" },
  { id: "staff", label: "D. Staff details" },
  { id: "infrastructure", label: "E. School infrastructure" },
  { id: "fees", label: "F. Fee structure" },
];

const Pending = ({ children = "To be updated by the school administration" }) => (
  <em className="legal__pending">{children}</em>
);

export default function PublicDisclosure() {
  return (
    <LegalLayout
      eyebrow="Legal · CBSE mandatory disclosure"
      title="Public Disclosure"
      lede="As a CBSE-affiliated school, Indo Valley Public School publishes the information below in line with the Board's Mandatory Public Disclosure requirements."
      updated="7 September 2026"
      toc={TOC}
    >
      <section id="general">
        <h2>A. General information</h2>
        <div className="legal__table-wrap">
          <table className="legal__table">
            <tbody>
              <tr><th>School name</th><td>Indo Valley Public School</td></tr>
              <tr><th>Complete address</th><td>Near DBGB Bank, War, Aurangabad, Bihar &ndash; 824103</td></tr>
              <tr><th>Principal name</th><td>Mr. Dhananjay Pandit</td></tr>
              <tr><th>School email</th><td><a href="mailto:ivps786@gmail.com">ivps786@gmail.com</a></td></tr>
              <tr><th>School phone</th><td><a href="tel:+918002730317">8002 730 317</a> / <a href="tel:+919711333779">9711 333 779</a></td></tr>
              <tr><th>Managed by</th><td>Indo Valley Foundation Trust</td></tr>
              <tr><th>Year of establishment</th><td><Pending /></td></tr>
              <tr><th>Area of school campus</th><td><Pending /></td></tr>
            </tbody>
          </table>
        </div>
        <p className="legal__note">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
          </svg>
          <span>
            Fields marked <strong>"to be updated"</strong> require official figures and document numbers
            from the school office (affiliation certificate, society registration, etc.) before they can be
            published here. Please share these with the office so this page can be completed in full, as
            required under the CBSE affiliation bye-laws.
          </span>
        </p>
      </section>

      <section id="documents">
        <h2>B. Documents &amp; undertakings</h2>
        <p>
          Under CBSE's Mandatory Public Disclosure norms, an affiliated school must publish copies of the
          following. Links will be added here as scanned copies are made available by the school office:
        </p>
        <ul>
          <li>Affiliation / upgradation letter</li>
          <li>Trust / Society registration certificate</li>
          <li>No Objection Certificate (NOC) from the State Government</li>
          <li>Recognition certificate from the state/education department</li>
          <li>Building safety certificate</li>
          <li>Fire safety certificate</li>
          <li>Water, health &amp; sanitation certificate</li>
          <li>Certificate of Class X &amp; XII exam results (as applicable)</li>
        </ul>
        <p className="legal__note">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
          </svg>
          <span><Pending children="Scanned copies of these documents have not yet been uploaded." /></span>
        </p>
      </section>

      <section id="academics">
        <h2>C. Academic session</h2>
        <div className="legal__table-wrap">
          <table className="legal__table">
            <tbody>
              <tr><th>Board affiliation</th><td>CBSE</td></tr>
              <tr><th>Medium of instruction</th><td>English</td></tr>
              <tr><th>Classes offered</th><td>Nursery to Class X, planned expansion up to 10+2</td></tr>
              <tr><th>Academic session</th><td>2026&ndash;27</td></tr>
              <tr><th>Session start month</th><td>April</td></tr>
              <tr><th>Working days per week</th><td>Monday to Saturday</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="staff">
        <h2>D. Staff details</h2>
        <p>
          The School currently has 28 teaching and support staff across the Pre-Primary, Primary and
          Middle wings, each assigned to a named class, plus specialist and leadership staff. Full,
          class-wise details of every teacher and their qualification are published on our{" "}
          <Link href="/faculty">Faculty page</Link>.
        </p>
        <div className="legal__table-wrap">
          <table className="legal__table">
            <tbody>
              <tr><th>Total teaching staff</th><td>28</td></tr>
              <tr><th>Pupil-teacher ratio</th><td>30:1</td></tr>
              <tr><th>Teacher qualifications</th><td>See <Link href="/faculty">Faculty page</Link></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="infrastructure">
        <h2>E. School infrastructure</h2>
        <p>The campus includes the following facilities; full detail is on our <Link href="/campus">Campus &amp; facilities page</Link>.</p>
        <ul>
          <li>Bright, low-noise classrooms across all wings</li>
          <li>Computer studies lab, from the primary years upward</li>
          <li>Science laboratory for hands-on experiment work</li>
          <li>Library &amp; reading room</li>
          <li>Open playground for sports and daily physical activity</li>
          <li>Dedicated art, craft &amp; music spaces</li>
          <li>School transport fleet covering War and surrounding villages</li>
        </ul>
        <div className="legal__table-wrap">
          <table className="legal__table">
            <tbody>
              <tr><th>Number of classrooms</th><td>22</td></tr>
              <tr><th>Number of laboratories</th><td>2</td></tr>
              <tr><th>Drinking water &amp; sanitation</th><td>Available</td></tr>
              <tr><th>First aid / medical facility</th><td>Available</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="fees">
        <h2>F. Fee structure</h2>
        <p>Monthly fee structure for session 2026&ndash;27 is as follows:</p>
        <div className="legal__table-wrap">
          <table className="legal__table">
            <tbody>
              <tr><th>Pre-Nursery &amp; Nursery</th><td>&#8377;600 / month</td></tr>
              <tr><th>LKG</th><td>&#8377;700 / month</td></tr>
              <tr><th>UKG</th><td>&#8377;800 / month</td></tr>
              <tr><th>Class One to Four</th><td>&#8377;900 / month</td></tr>
              <tr><th>Class Five to Eight</th><td>&#8377;1000 / month</td></tr>
            </tbody>
          </table>
        </div>
        <p className="legal__note">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
          </svg>
          <span>Admission fee, transport charges and other one-time charges, if applicable, are communicated separately by the school office at the time of admission.</span>
        </p>
      </section>
    </LegalLayout>
  );
}
