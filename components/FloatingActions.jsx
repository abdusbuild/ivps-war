export default function FloatingActions() {
  return (
    <>
      <div
        className="enquire-panel"
        id="enquirePanel"
        role="dialog"
        aria-label="Contact options"
        hidden
      >
        <button type="button" className="enquire-panel__close" id="enquireClose" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>

        <strong className="enquire-panel__title">Need Help?</strong>
        <p className="enquire-panel__lede">Choose how you'd like to reach us:</p>

        <div className="enquire-panel__list">
          <a className="enquire-opt" href="tel:+918002730317" data-cursor="link">
            <span className="enquire-opt__icon enquire-opt__icon--call">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
            </span>
            <span className="enquire-opt__copy">
              <strong>Call Us</strong>
              <small>8002 730 317</small>
            </span>
          </a>

          <a className="enquire-opt" href="https://wa.me/918002730317" target="_blank" rel="noopener noreferrer" data-cursor="link">
            <span className="enquire-opt__icon enquire-opt__icon--whatsapp">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.92 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2zm5.8 14.1c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.11.11-1.8-.11-.41-.13-.94-.3-1.62-.6-2.86-1.24-4.72-4.12-4.87-4.31-.14-.2-1.17-1.55-1.17-2.96 0-1.4.74-2.09 1-2.38.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.48-.14.14-.28.29-.12.56.16.28.71 1.18 1.53 1.91 1.05.94 1.94 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.18-.28.35-.23.6-.14.24.09 1.55.73 1.82.87.26.14.44.2.5.32.07.12.07.68-.17 1.35z" /></svg>
            </span>
            <span className="enquire-opt__copy">
              <strong>WhatsApp</strong>
              <small>Chat with us instantly</small>
            </span>
          </a>

          <a className="enquire-opt" href="mailto:ivps786@gmail.com" data-cursor="link">
            <span className="enquire-opt__icon enquire-opt__icon--mail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" /><path d="m3.5 6 8.5 7 8.5-7" /></svg>
            </span>
            <span className="enquire-opt__copy">
              <strong>Email Us</strong>
              <small>ivps786@gmail.com</small>
            </span>
          </a>
        </div>

        <span className="enquire-panel__foot">We're here to help! 🎓</span>
      </div>

      <button
        type="button"
        className="fab fab--call magnetic"
        id="enquireToggle"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="enquirePanel"
        data-cursor="link"
      >
        <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
        <span>Enquire</span>
      </button>

      <button className="totop" id="toTop" aria-label="Back to top" data-cursor="link">
        <svg className="totop__ring" viewBox="0 0 44 44"><circle cx="22" cy="22" r="20" /><circle cx="22" cy="22" r="20" id="toTopProgress" /></svg>
        <svg className="totop__arrow w-[18px] h-[18px] relative text-text" viewBox="0 0 24 24" fill="none"><path d="M12 19V5m-7 7 7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </>
  );
}
