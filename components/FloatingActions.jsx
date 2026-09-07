export default function FloatingActions() {
  return (
    <>
      <a className="fab fab--call magnetic" href="tel:+916207417770" aria-label="Call the school" data-cursor="link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
        <span>Enquire</span>
      </a>

      <button className="totop" id="toTop" aria-label="Back to top" data-cursor="link">
        <svg className="totop__ring" viewBox="0 0 44 44"><circle cx="22" cy="22" r="20" /><circle cx="22" cy="22" r="20" id="toTopProgress" /></svg>
        <svg className="totop__arrow" viewBox="0 0 24 24" fill="none"><path d="M12 19V5m-7 7 7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </>
  );
}
