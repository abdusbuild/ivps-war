import Link from "next/link";

const FEES = [
  { cls: "Pre-Nursery & Nursery", amount: "₹600 / month" },
  { cls: "LKG", amount: "₹700 / month" },
  { cls: "UKG", amount: "₹800 / month" },
  { cls: "Class One to Four", amount: "₹900 / month" },
  { cls: "Class Five to Eight", amount: "₹1000 / month" },
];

export default function FeeStructure() {
  return (
    <section className="py-[clamp(48px,6vw,90px)] relative bg-paper-2" id="fee-structure">
      <div className="w-full max-w-(--container-wrap) mx-auto px-[clamp(20px,4vw,40px)]">
        <header className="sec-head sec-head--center">
          <p className="eyebrow reveal" data-reveal="up">Transparent pricing</p>
          <h2 className="text-[clamp(30px,4.6vw,54px)] split" data-reveal="split">Fee structure</h2>
          <p className="text-text-2 text-[clamp(16.5px,1.6vw,19px)] leading-[1.72] reveal" data-reveal="up" data-delay="120">
            Monthly fees for the 2026&ndash;27 session, by class. No hidden charges beyond what is listed here.
          </p>
        </header>

        <div className="max-w-[640px] mx-auto reveal" data-reveal="up" data-delay="180">
          <div className="legal__table-wrap">
            <table className="legal__table">
              <tbody>
                {FEES.map((f) => (
                  <tr key={f.cls}>
                    <th>{f.cls}</th>
                    <td>{f.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="legal__note">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
              <path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
            </svg>
            <span>
              Admission fee, transport charges and other one-time charges, if applicable, are communicated
              separately by the school office at the time of admission. Fee concessions are available for
              eligible students. Full details are also published on our{" "}
              <Link href="/public-disclosure#fees">Public Disclosure</Link> page.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
