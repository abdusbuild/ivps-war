export default function Contact() {
  return (
    <section className="py-[clamp(48px,6vw,90px)] relative" id="contact">
      <div className="w-full max-w-(--container-wrap) mx-auto px-[clamp(20px,4vw,40px)] contact__in grid grid-cols-[1fr_1.05fr] gap-[clamp(34px,5vw,72px)] items-start max-[1080px]:grid-cols-1">
        <div className="contact__info">
          <p className="eyebrow reveal" data-reveal="up">Contact us</p>
          <h1 className="text-[clamp(30px,4.6vw,54px)] split" data-reveal="split">Come and see the school</h1>
          <p className="text-text-2 text-[clamp(16.5px,1.6vw,19px)] leading-[1.72] reveal" data-reveal="up" data-delay="120">
            The best way to judge a school is to walk through it on a normal Tuesday.
            Call ahead and we will keep the principal free for twenty minutes.
          </p>

          <ul className="contact__list list-none mt-[30px] p-0 grid gap-5">
            <li className="reveal flex gap-4" data-reveal="up" data-delay="180">
              <span className="ci grid place-items-center w-11 h-11 rounded-[14px] bg-[color-mix(in_srgb,var(--brand-500)_10%,transparent)] text-brand-600 dark:text-gold-400"><svg className="w-[21px] h-[21px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg></span>
              <div><strong className="block font-display text-[16.5px] mb-0.5">Campus</strong><p className="text-[14.5px] text-muted m-0 leading-[1.55]">Indo Valley Public School<br />Near DBGB Bank, War, Aurangabad, Bihar &ndash; 824103</p></div>
            </li>
            <li className="reveal flex gap-4" data-reveal="up" data-delay="240">
              <span className="ci grid place-items-center w-11 h-11 rounded-[14px] bg-[color-mix(in_srgb,var(--brand-500)_10%,transparent)] text-brand-600 dark:text-gold-400"><svg className="w-[21px] h-[21px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg></span>
              <div><strong className="block font-display text-[16.5px] mb-0.5">Telephone</strong><p className="text-[14.5px] text-muted m-0 leading-[1.55]"><a className="transition-colors duration-300 hover:text-gold-600" href="tel:+918002730317">8002 730 317</a><br /><a className="transition-colors duration-300 hover:text-gold-600" href="tel:+919711333779">9711 333 779</a></p></div>
            </li>
            <li className="reveal flex gap-4" data-reveal="up" data-delay="300">
              <span className="ci grid place-items-center w-11 h-11 rounded-[14px] bg-[color-mix(in_srgb,var(--brand-500)_10%,transparent)] text-brand-600 dark:text-gold-400"><svg className="w-[21px] h-[21px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></svg></span>
              <div><strong className="block font-display text-[16.5px] mb-0.5">Email</strong><p className="text-[14.5px] text-muted m-0 leading-[1.55]"><a className="transition-colors duration-300 hover:text-gold-600" href="mailto:ivps786@gmail.com">ivps786@gmail.com</a></p></div>
            </li>
            <li className="reveal flex gap-4" data-reveal="up" data-delay="360">
              <span className="ci grid place-items-center w-11 h-11 rounded-[14px] bg-[color-mix(in_srgb,var(--brand-500)_10%,transparent)] text-brand-600 dark:text-gold-400"><svg className="w-[21px] h-[21px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg></span>
              <div><strong className="block font-display text-[16.5px] mb-0.5">Office hours</strong><p className="text-[14.5px] text-muted m-0 leading-[1.55]">Monday to Saturday, 8:00 am &ndash; 2:00 pm</p></div>
            </li>
          </ul>

          <div className="contact__map reveal mt-7 rounded-xl overflow-hidden border border-line-2 shadow-card-md" data-reveal="up" data-delay="420">
            <iframe
              src="https://www.google.com/maps?q=War+Bazar,+Aurangabad,+Bihar+824103&output=embed"
              width="100%"
              height="280"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Indo Valley Public School location map"
            />
          </div>
        </div>

        <div className="contact__form-wrap reveal sticky top-[110px] max-[1080px]:static" data-reveal="scale">
          <form className="form relative overflow-hidden p-[clamp(26px,3.4vw,40px)] bg-card border border-line-2 rounded-xl shadow-card-md" id="enquiryForm" noValidate>
            <h3 className="text-2xl mb-1.5">Admission enquiry</h3>
            <p className="form__note text-[13.5px] text-muted mb-6">We reply to every enquiry within one working day.</p>

            <div className="field"><input type="text" id="f-name" name="name" placeholder=" " required /><label htmlFor="f-name">Full name</label><em></em></div>
            <div className="field-row grid grid-cols-2 gap-3.5 max-[640px]:grid-cols-1">
              <div className="field"><input type="tel" id="f-phone" name="phone" placeholder=" " required /><label htmlFor="f-phone">Phone number</label><em></em></div>
              <div className="field"><input type="email" id="f-email" name="email" placeholder=" " /><label htmlFor="f-email">Email (optional)</label><em></em></div>
            </div>
            <div className="field-row grid grid-cols-2 gap-3.5 max-[640px]:grid-cols-1">
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

            <button type="submit" className="btn btn--gold btn--lg btn--block magnetic mt-1.5" data-cursor="link"><span>Send enquiry</span></button>
            <p className="form__ok flex items-center gap-2.5 mt-4 py-3.5 px-4 rounded-sm bg-[color-mix(in_srgb,var(--success-500)_13%,transparent)] text-[#0A7A6C] dark:text-[#5FE3D0] text-sm font-semibold" id="formOk" hidden>
              <svg className="w-[18px] h-[18px] flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m4 12 5 5L20 6" /></svg>
              Thank you! Your enquiry has been received — our admissions team will contact you soon.
            </p>
            <p className="form__err flex items-center gap-2.5 mt-4 py-3.5 px-4 rounded-sm bg-[color-mix(in_srgb,var(--danger-500,#dc2626)_13%,transparent)] text-[#B42318] dark:text-[#FDA29B] text-sm font-semibold" id="formErr" hidden>
              Something went wrong sending your enquiry. Please call us instead, or try again in a moment.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
