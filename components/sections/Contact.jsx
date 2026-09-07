export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap contact__in">
        <div className="contact__info">
          <p className="eyebrow reveal" data-reveal="up"><span className="eyebrow__dot"></span> Contact us</p>
          <h2 className="h2 split" data-reveal="split">Come and see the school</h2>
          <p className="lede reveal" data-reveal="up" data-delay="120">
            The best way to judge a school is to walk through it on a normal Tuesday.
            Call ahead and we will keep the principal free for twenty minutes.
          </p>

          <ul className="contact__list">
            <li className="reveal" data-reveal="up" data-delay="180">
              <span className="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg></span>
              <div><strong>Campus</strong><p>Indo Valley Public School<br />Near DBGB Bank, War, Aurangabad, Bihar &ndash; 824103</p></div>
            </li>
            <li className="reveal" data-reveal="up" data-delay="240">
              <span className="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg></span>
              <div><strong>Telephone</strong><p><a href="tel:+916207417770">6207 417 770</a><br /><a href="tel:+918002730317">8002 730 317</a><br /><a href="tel:+919711333779">9711 333 779</a></p></div>
            </li>
            <li className="reveal" data-reveal="up" data-delay="300">
              <span className="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></svg></span>
              <div><strong>Email</strong><p><a href="mailto:ivps786@gmail.com">ivps786@gmail.com</a></p></div>
            </li>
            <li className="reveal" data-reveal="up" data-delay="360">
              <span className="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg></span>
              <div><strong>Office hours</strong><p>Monday to Saturday, 8:00 am &ndash; 2:00 pm</p></div>
            </li>
          </ul>
        </div>

        <div className="contact__form-wrap reveal" data-reveal="scale">
          <form className="form" id="enquiryForm" noValidate>
            <h3>Admission enquiry</h3>
            <p className="form__note">We reply to every enquiry within one working day.</p>

            <div className="field"><input type="text" id="f-name" name="name" placeholder=" " required /><label htmlFor="f-name">Full name</label><em></em></div>
            <div className="field-row">
              <div className="field"><input type="tel" id="f-phone" name="phone" placeholder=" " required /><label htmlFor="f-phone">Phone number</label><em></em></div>
              <div className="field"><input type="email" id="f-email" name="email" placeholder=" " /><label htmlFor="f-email">Email (optional)</label><em></em></div>
            </div>
            <div className="field-row">
              <div className="field"><input type="text" id="f-town" name="town" placeholder=" " required /><label htmlFor="f-town">Village / town</label><em></em></div>
              <div className="field field--select">
                <select id="f-class" name="class" defaultValue="" required>
                  <option value="" disabled></option>
                  <option>Nursery</option><option>LKG</option><option>UKG</option>
                  <option>Class I</option><option>Class II</option><option>Class III</option><option>Class IV</option>
                  <option>Class V</option><option>Class VI</option><option>Class VII</option><option>Class VIII</option>
                  <option>Class IX</option><option>Class X</option>
                </select>
                <label htmlFor="f-class">Class applying for</label><em></em>
              </div>
            </div>
            <div className="field"><textarea id="f-msg" name="message" rows="3" placeholder=" "></textarea><label htmlFor="f-msg">Anything you would like us to know</label><em></em></div>

            <button type="submit" className="btn btn--gold btn--lg btn--block magnetic" data-cursor="link"><span>Send enquiry</span></button>
            <p className="form__ok" id="formOk" hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m4 12 5 5L20 6" /></svg>
              Thank you — your enquiry has been recorded. Someone from the office will call you.
            </p>
            <p className="form__demo">Demo form &mdash; submissions are not sent anywhere yet.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
