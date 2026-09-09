import Link from "next/link";

const STEP_CLASS = "grid place-items-center w-[42px] h-[42px] rounded-[13px] mb-4 bg-[linear-gradient(135deg,var(--gold-500),var(--gold-400))] text-brand-900 font-display font-black text-[19px]";

export default function Admissions() {
  return (
    <section className="py-[clamp(48px,6vw,90px)] relative admissions" id="admissions">
      <div className="admissions__bg" aria-hidden="true"><span></span><span></span></div>
      <div className="w-full max-w-(--container-wrap) mx-auto px-[clamp(20px,4vw,40px)] relative z-2">
        <header className="sec-head sec-head--center sec-head--light">
          <p className="eyebrow eyebrow--light reveal" data-reveal="up">Admissions 2026&ndash;27</p>
          <h1 className="text-[clamp(30px,4.6vw,54px)] split text-white" data-reveal="split">Four steps, and we will walk you through each one</h1>
        </header>

        <ol className="steps">
          <li className="step reveal" data-reveal="up">
            <span className={STEP_CLASS}>1</span>
            <h3 className="text-[19px] mb-2">Enquire</h3>
            <p className="text-[14.2px] text-white/72 leading-[1.6] m-0">Send the enquiry form below or call the office. Tell us the class you are looking for and your village or locality.</p>
          </li>
          <li className="step reveal" data-reveal="up" data-delay="90">
            <span className={STEP_CLASS}>2</span>
            <h3 className="text-[19px] mb-2">Visit the campus</h3>
            <p className="text-[14.2px] text-white/72 leading-[1.6] m-0">Come and see the classrooms during a working day. Meet the class teacher and the principal, and ask the hard questions.</p>
          </li>
          <li className="step reveal" data-reveal="up" data-delay="180">
            <span className={STEP_CLASS}>3</span>
            <h3 className="text-[19px] mb-2">Interaction &amp; form</h3>
            <p className="text-[14.2px] text-white/72 leading-[1.6] m-0">A short, friendly interaction appropriate to the child&rsquo;s age, followed by the admission form, documents and fee details.</p>
          </li>
          <li className="step reveal" data-reveal="up" data-delay="270">
            <span className={STEP_CLASS}>4</span>
            <h3 className="text-[19px] mb-2">Welcome aboard</h3>
            <p className="text-[14.2px] text-white/72 leading-[1.6] m-0">Confirmation, uniform and book list, transport route allotment, and the first-day plan sent to you in writing.</p>
          </li>
        </ol>

        <div className="admissions__cta reveal" data-reveal="scale">
          <div>
            <h3>Seats are allotted class by class</h3>
            <p>Nursery, LKG and UKG fill first. If you are considering a mid-session transfer, call before you visit.</p>
          </div>
          <div className="admissions__btns">
            <Link className="btn btn--gold btn--lg magnetic" href="/contact" data-cursor="link"><span>Fill the enquiry form</span></Link>
            <a className="btn btn--outline-light btn--lg magnetic" href="tel:+918002730317" data-cursor="link"><span>Call 8002 730 317</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
