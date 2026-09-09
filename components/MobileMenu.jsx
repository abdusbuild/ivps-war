"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  const pathname = usePathname();

  return (
    <div className="mobile-menu" id="mobileMenu" aria-hidden="true">
      <div className="mobile-menu__glow" aria-hidden="true"></div>
      <div className="mobile-menu__body">
        <nav>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? "is-active" : ""}>
              <span>{l.label}</span>
              <svg className="mobile-menu__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__foot">
          <div className="mobile-menu__theme">
            <span>Theme</span>
            <button
              className="js-theme-toggle group/theme relative flex items-center gap-2 bg-transparent border-0 p-0 cursor-pointer"
              aria-label="Theme switch: change between light and dark mode"
              title="Theme switch: change between light and dark mode"
            >
              <svg className="w-[15px] h-[15px] flex-none text-gold-500 opacity-100 dark:opacity-35 transition-opacity duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" />
                <path d="M12 2.5v2.4M12 19.1v2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7" />
              </svg>
              <span className="block relative rounded-full border-[1.5px] border-solid border-line bg-card w-[50px] h-[27px] transition-[background,border-color] duration-[400ms]">
                <i className="absolute top-[2.5px] left-[3px] w-[19px] h-[19px] rounded-full bg-[linear-gradient(135deg,var(--gold-400),var(--gold-600))] shadow-[0_2px_6px_rgba(221,159,12,0.4)] transition-[transform,background] duration-[450ms] [transition-timing-function:var(--ease-ivps)] dark:translate-x-[21px] dark:bg-[linear-gradient(135deg,#dce6f7,#8fb2e8)] dark:shadow-[0_2px_6px_rgba(0,0,0,0.5)]"></i>
              </span>
              <svg className="w-[13px] h-[13px] flex-none text-muted opacity-35 dark:opacity-100 dark:text-[#8fb2e8] transition-opacity duration-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
              </svg>
            </button>
          </div>
          <Link href="/admissions" className="btn btn--gold mobile-menu__cta"><span>Apply Now</span></Link>
          <div className="mobile-menu__contacts">
            <a href="tel:+918002730317">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
              <span>8002 730 317</span>
            </a>
            <a href="mailto:ivps786@gmail.com">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6.5h18v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11z" /><path d="m3.5 6.8 8.5 6.4 8.5-6.4" /></svg>
              <span>ivps786@gmail.com</span>
            </a>
          </div>
          <p><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10.5c0 5.5-8 11.5-8 11.5s-8-6-8-11.5a8 8 0 1 1 16 0z" /><circle cx="12" cy="10.5" r="2.6" /></svg>War, Aurangabad, Bihar</p>
        </div>
      </div>
    </div>
  );
}
