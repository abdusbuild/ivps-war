export default function Admissions() {
  return (
    <section className="section admissions" id="admissions">
      <div className="admissions__bg" aria-hidden="true"><span></span><span></span></div>
      <div className="wrap">
        <header className="sec-head sec-head--center sec-head--light">
          <p className="eyebrow eyebrow--light reveal" data-reveal="up"><span className="eyebrow__dot"></span> Admissions 2026&ndash;27</p>
          <h2 className="h2 split" data-reveal="split">Four steps, and we will walk you through each one</h2>
        </header>

        <ol className="steps">
          <li className="step reveal" data-reveal="up">
            <span className="step__n">1</span>
            <h3>Enquire</h3>
            <p>Send the enquiry form below or call the office. Tell us the class you are looking for and your village or locality.</p>
          </li>
          <li className="step reveal" data-reveal="up" data-delay="90">
            <span className="step__n">2</span>
            <h3>Visit the campus</h3>
            <p>Come and see the classrooms during a working day. Meet the class teacher and the principal, and ask the hard questions.</p>
          </li>
          <li className="step reveal" data-reveal="up" data-delay="180">
            <span className="step__n">3</span>
            <h3>Interaction &amp; form</h3>
            <p>A short, friendly interaction appropriate to the child&rsquo;s age, followed by the admission form, documents and fee details.</p>
          </li>
          <li className="step reveal" data-reveal="up" data-delay="270">
            <span className="step__n">4</span>
            <h3>Welcome aboard</h3>
            <p>Confirmation, uniform and book list, transport route allotment, and the first-day plan sent to you in writing.</p>
          </li>
        </ol>

        <div className="admissions__cta reveal" data-reveal="scale">
          <div>
            <h3>Seats are allotted class by class</h3>
            <p>Nursery, LKG and UKG fill first. If you are considering a mid-session transfer, call before you visit.</p>
          </div>
          <div className="admissions__btns">
            <a className="btn btn--gold btn--lg magnetic" href="#contact" data-cursor="link"><span>Fill the enquiry form</span></a>
            <a className="btn btn--outline-light btn--lg magnetic" href="tel:+916207417770" data-cursor="link"><span>Call 6207 417 770</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
