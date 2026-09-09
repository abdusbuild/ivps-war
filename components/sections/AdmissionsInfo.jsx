const INFO = [
  {
    title: "Age criteria",
    text: "Students must meet the age requirements as per state board guidelines for their respective classes.",
    icon: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18" /><path d="M8 3v4" /><path d="M16 3v4" /></>,
  },
  {
    title: "Admission test",
    text: "An entrance assessment will be conducted to evaluate the student's academic level and readiness.",
    icon: <><path d="M9 12h6" /><path d="M9 16h4" /><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /></>,
  },
  {
    title: "Limited seats",
    text: "Admissions are granted on a first-come, first-served basis. Early application is recommended.",
    icon: <><circle cx="9" cy="8" r="3" /><path d="M2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1" /><path d="M17 11a3 3 0 1 0 0-6" /><path d="M22 21v-1a5.5 5.5 0 0 0-3.5-5.1" /></>,
  },
  {
    title: "Fee structure",
    text: "Detailed fee structure will be provided during the admission process. Fee concessions are available for eligible students.",
    icon: <><circle cx="12" cy="12" r="9" /><path d="M9.5 15.2c.4.7 1.3 1.2 2.3 1.2 1.4 0 2.5-.8 2.5-1.9s-1-1.7-2.5-2c-1.5-.3-2.5-.9-2.5-2 0-1 1.1-1.9 2.5-1.9 1 0 1.9.5 2.3 1.2" /><path d="M12 7.3v1.1" /><path d="M12 15.6v1.1" /></>,
  },
];

const DOCUMENTS = [
  "Birth certificate (original and photocopy)",
  "Transfer certificate from previous school",
  "Previous year mark sheets / report cards",
  "Passport size photographs (4 copies)",
  "Aadhar card copy (student and parents)",
  "Caste certificate (if applicable)",
  "Income certificate (for fee concession)",
];

export default function AdmissionsInfo() {
  return (
    <section className="py-[clamp(48px,6vw,90px)] relative bg-paper-2" id="admissions-info">
      <div className="w-full max-w-(--container-wrap) mx-auto px-[clamp(20px,4vw,40px)]">
        <header className="sec-head sec-head--center">
          <p className="eyebrow reveal" data-reveal="up">Before you apply</p>
          <h2 className="text-[clamp(30px,4.6vw,54px)] split" data-reveal="split">Important information</h2>
        </header>

        <div className="info__grid grid grid-cols-4 gap-5 max-[1080px]:grid-cols-2 max-[640px]:grid-cols-1">
          {INFO.map((item, i) => (
            <article
              className="pillar tilt reveal p-[30px_26px_28px] bg-card border border-line-2 rounded-lg"
              data-reveal="up"
              data-delay={i * 90}
              data-cursor="card"
              key={item.title}
            >
              <span className="pillar__icon grid place-items-center w-[50px] h-[50px] rounded-[15px] mb-4.5 bg-[linear-gradient(140deg,var(--brand-700),var(--brand-900))] text-gold-400 shadow-[0_8px_20px_rgba(10,21,47,.22)]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {item.icon}
                </svg>
              </span>
              <h3 className="text-[19.5px] mb-2 relative">{item.title}</h3>
              <p className="text-[14.5px] text-muted m-0 leading-[1.6] relative">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-[clamp(48px,6vw,72px)] grid grid-cols-[1.1fr_.9fr] gap-[clamp(28px,4vw,56px)] items-start max-[900px]:grid-cols-1">
          <div className="reveal" data-reveal="up">
            <h3 className="text-[26px] mb-4">Required documents</h3>
            <ul className="doc-list list-none m-0 p-0 grid grid-cols-2 gap-x-6 gap-y-3.5 max-[520px]:grid-cols-1">
              {DOCUMENTS.map((doc) => (
                <li className="flex items-start gap-2.5 text-[14.5px] text-muted leading-[1.5]" key={doc}>
                  <svg className="w-[18px] h-[18px] flex-none mt-0.5 text-brand-600 dark:text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m4 12 5 5L20 6" /></svg>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="curr-note reveal" data-reveal="up">
            <div>
              <h3>Need assistance?</h3>
              <p>Our admissions team is here to help you through the process. Feel free to reach out to us.</p>
            </div>
            <a className="btn btn--dark magnetic" href="tel:+918002730317" data-cursor="link"><span>Call us</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
