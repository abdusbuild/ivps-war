import Image from "next/image";
import Link from "next/link";

const COL_LINK_CLASS = "text-[14.3px] transition-[color,transform] duration-300 inline-block hover:text-gold-400 hover:translate-x-1";
const CONTACT_LINK_CLASS = "group flex items-center gap-[9px] text-[14.3px] transition-[color,transform] duration-300 hover:text-gold-400 hover:translate-x-1";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-900 text-white/68 pt-[clamp(56px,7vw,90px)]">
      <div className="w-full max-w-(--container-wrap) mx-auto px-[clamp(20px,4vw,40px)]">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr_1.1fr] gap-8 pb-[46px] max-[1080px]:grid-cols-2 max-[640px]:grid-cols-1 max-[640px]:gap-[30px]">
          <div>
            <Link className="group flex items-center gap-3" href="/">
              <span className="w-28 h-28 flex-none rounded-lg overflow-hidden transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-[1.06]">
                <Image src="/indo/logo.png" alt="Indo Valley Public School crest" width={112} height={112} className="w-full h-full object-contain" />
              </span>
              <span className="grid leading-[1.12] gap-[3px]">
                <strong className="font-display text-[19px] tracking-[-0.015em] text-white">Indo Valley</strong>
                <small className="font-bold text-[9.5px] tracking-[0.15em] text-white/55">PUBLIC SCHOOL &middot; CBSE</small>
              </span>
            </Link>
            <p className="text-[12px] leading-[1.55] my-4.5 mb-5 max-w-[42ch]">An English-medium CBSE school in War, Aurangabad, Bihar, managed by the Indo Valley Foundation Trust. Nursery to Class X, planned up to 10+2.</p>
            <div className="flex gap-2.5">
              <a href="https://www.facebook.com/profile.php?id=61594230002130" target="_blank" rel="noopener noreferrer" aria-label="Facebook" data-cursor="link" className="rounded-xl grid place-items-center text-white w-[38px] h-[38px] bg-white/[.07] border border-white/10 transition-all duration-[350ms] hover:bg-red-500 hover:text-white hover:-translate-y-[3px]"><svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46H16.5V4.34C16.24 4.3 15.36 4.22 14.33 4.22 12.17 4.22 10.7 5.53 10.7 8.15v2.35H8.25v3h2.45V21h2.8z" /></svg></a>
              <a href="https://www.instagram.com/indovalleypublicschool" target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-cursor="link" className="rounded-xl grid place-items-center text-white w-[38px] h-[38px] bg-white/[.07] border border-white/10 transition-all duration-[350ms] hover:bg-red-500 hover:text-white hover:-translate-y-[3px]"><svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" /></svg></a>
              <a href="https://wa.me/916207417770" aria-label="WhatsApp" data-cursor="link" className="rounded-xl grid place-items-center text-white w-[38px] h-[38px] bg-white/[.07] border border-white/10 transition-all duration-[350ms] hover:bg-red-500 hover:text-white hover:-translate-y-[3px]"><svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6a11 11 0 0 1-4.2-3.9c-.3-.5-.7-1.2-.7-2.2 0-1 .5-1.5.7-1.7.2-.2.5-.3.6-.3h.5c.2 0 .4 0 .6.4l.7 1.7c.1.2 0 .4-.1.5l-.3.4c-.1.1-.2.3-.1.5.2.4.7 1.1 1.4 1.7.9.8 1.6 1 1.8 1.1.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.4.3.1.2.1.6 0 .9z" /></svg></a>
            </div>
          </div>

          <details className="footer-acc grid gap-[11px] content-start" open>
            <summary className="font-body uppercase text-gold-400 font-extrabold text-xs tracking-[0.15em]">Explore<i></i></summary>
            <div className="footer-acc__body grid gap-[11px]">
              <Link className={COL_LINK_CLASS} href="/about">About us</Link>
              <Link className={COL_LINK_CLASS} href="/academics">Academics</Link>
              <Link className={COL_LINK_CLASS} href="/campus">Campus &amp; facilities</Link>
              <Link className={COL_LINK_CLASS} href="/life">School life</Link>
              <Link className={COL_LINK_CLASS} href="/faculty">Faculty</Link>
              <Link className={COL_LINK_CLASS} href="/#news">News &amp; events</Link>
            </div>
          </details>

          <details className="footer-acc grid gap-[11px] content-start" open>
            <summary className="font-body uppercase text-gold-400 font-extrabold text-xs tracking-[0.15em]">For parents<i></i></summary>
            <div className="footer-acc__body grid gap-[11px]">
              <Link className={COL_LINK_CLASS} href="/admissions">Admissions</Link>
              <Link className={COL_LINK_CLASS} href="/admissions#fee-structure">Fees &amp; rules</Link>
              <Link className={COL_LINK_CLASS} href="/contact">Transport routes</Link>
              <Link className={COL_LINK_CLASS} href="/about#leaders">Leadership</Link>
              <Link className={COL_LINK_CLASS} href="/contact">Contact the office</Link>
            </div>
          </details>

          <details className="footer-acc grid gap-[11px] content-start" open>
            <summary className="font-body uppercase text-gold-400 font-extrabold text-xs tracking-[0.15em]">Legal<i></i></summary>
            <div className="footer-acc__body grid gap-[11px]">
              <Link className={COL_LINK_CLASS} href="/privacy-policy">Privacy policy</Link>
              <Link className={COL_LINK_CLASS} href="/terms-and-conditions">Terms &amp; conditions</Link>
              <Link className={COL_LINK_CLASS} href="/public-disclosure">Public disclosure</Link>
            </div>
          </details>

          <div className="grid gap-[11px] content-start">
            <h4 className="font-body uppercase text-gold-400 font-extrabold text-xs tracking-[0.15em] mb-[5px]">Reach us</h4>
            <p className="text-[14.3px] m-0 leading-[1.6]">Near DBGB Bank, War<br />Aurangabad, Bihar &ndash; 824103</p>
            <a href="tel:+918002730317" className={CONTACT_LINK_CLASS}>
              <svg className="w-[15px] h-[15px] flex-none opacity-75 transition-opacity duration-300 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" /></svg>
              8002 730 317
            </a>
            <a href="tel:+919711333779" className={CONTACT_LINK_CLASS}>
              <svg className="w-[15px] h-[15px] flex-none opacity-75 transition-opacity duration-300 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" /></svg>
              9711 333 779
            </a>
            <a href="mailto:ivps786@gmail.com" className={CONTACT_LINK_CLASS}>
              <svg className="w-[15px] h-[15px] flex-none opacity-75 transition-opacity duration-300 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5" /><path d="m3 6 9 6.5L21 6" /></svg>
              ivps786@gmail.com
            </a>
          </div>
        </div>

        <div className="flex justify-between items-center gap-5 flex-wrap pt-[22px] pb-[26px] border-t border-white/[.09] text-[13px] max-[640px]:flex-col max-[640px]:items-start">
          <p className="m-0">&copy; Copyright <span id="year">2026</span>, all rights reserved with <Link href="/" className="font-bold text-gold-400 hover:underline">Indo Valley Public School</Link></p>
          <p>
            Designed &amp; developed by{" "}
            <a href="https://abdus-portfolio-rho.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-bold text-white/68 transition-colors duration-300 hover:text-gold-400">Abdus</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
