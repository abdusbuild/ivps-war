import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="brand brand--light" href="#top">
              <span className="brand__mark">
                <Image src="/images/logo.jpeg" alt="Indo Valley Public School crest" width={40} height={40} />
              </span>
              <span className="brand__text"><strong>Indo Valley</strong><small>PUBLIC SCHOOL &middot; CBSE</small></span>
            </a>
            <p>An English-medium CBSE school in War, Aurangabad, Bihar, managed by the Indo Valley Foundation Trust. Nursery to Class X, planned up to 10+2.</p>
            <div className="footer__social">
              <a href="#" aria-label="Facebook" data-cursor="link"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" /></svg></a>
              <a href="#" aria-label="Instagram" data-cursor="link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></a>
              <a href="#" aria-label="YouTube" data-cursor="link"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3z" /></svg></a>
              <a href="https://wa.me/916207417770" aria-label="WhatsApp" data-cursor="link"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6a11 11 0 0 1-4.2-3.9c-.3-.5-.7-1.2-.7-2.2 0-1 .5-1.5.7-1.7.2-.2.5-.3.6-.3h.5c.2 0 .4 0 .6.4l.7 1.7c.1.2 0 .4-.1.5l-.3.4c-.1.1-.2.3-.1.5.2.4.7 1.1 1.4 1.7.9.8 1.6 1 1.8 1.1.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.4.3.1.2.1.6 0 .9z" /></svg></a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Explore</h4>
            <a href="#about">About us</a>
            <a href="#academics">Academics</a>
            <a href="#campus">Campus &amp; facilities</a>
            <a href="#life">School life</a>
            <a href="#news">News &amp; events</a>
          </div>

          <div className="footer__col">
            <h4>For parents</h4>
            <a href="#admissions">Admissions</a>
            <a href="#faq">Fees &amp; rules</a>
            <a href="#contact">Transport routes</a>
            <a href="#leaders">Leadership</a>
            <a href="#contact">Contact the office</a>
          </div>

          <div className="footer__col footer__col--contact">
            <h4>Reach us</h4>
            <p>Near DBGB Bank, War<br />Aurangabad, Bihar &ndash; 824103</p>
            <a href="tel:+916207417770">6207 417 770</a>
            <a href="tel:+918002730317">8002 730 317</a>
            <a href="mailto:ivps786@gmail.com">ivps786@gmail.com</a>
          </div>
        </div>

        <div className="footer__strip" aria-hidden="true">
          <span>INDO</span><i></i><span>VALLEY</span><i></i><span>PUBLIC</span><i></i><span>SCHOOL</span>
        </div>

        <div className="footer__bottom">
          <p>&copy; <span id="year">2026</span> Indo Valley Public School, War (Aurangabad), Bihar. Managed by Indo Valley Foundation Trust.</p>
          <nav><a href="#">Privacy policy</a><a href="#">Terms &amp; conditions</a><a href="#">Public disclosure</a></nav>
        </div>
      </div>
    </footer>
  );
}
