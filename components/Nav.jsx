"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="nav" id="nav">
      <div className="nav__progress" id="navProgress"></div>
      <div className="w-full max-w-(--container-wrap) mx-auto px-[clamp(20px,4vw,40px)] nav__in">
        <Link className="group flex items-center gap-3" href="/">
          <span className="w-20 h-20 flex-none rounded-lg overflow-hidden transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-[1.06]">
            <Image src="/indo/logo.png" alt="Indo Valley Public School crest" width={80} height={80} className="w-full h-full object-contain" />
          </span>
          <span className="grid leading-[1.12] gap-[3px]">
            <strong className="font-display text-[19px] tracking-[-0.015em]">Indo Valley</strong>
            <small className="text-muted font-bold text-[9.5px] tracking-[0.15em]">PUBLIC SCHOOL &middot; CBSE</small>
          </span>
        </Link>

        <nav className="nav__menu max-[860px]:hidden" id="navMenu" aria-label="Primary">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? "is-active" : ""}>
              {l.label}
            </Link>
          ))}
          <span className="nav__pill" id="navPill" aria-hidden="true"></span>
        </nav>

        <div className="flex items-center gap-3">
          <button
            className="js-theme-toggle group/theme relative items-center gap-2 bg-transparent border-0 p-0 cursor-pointer hidden min-[641px]:flex"
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
            <span className="pointer-events-none absolute top-full right-0 mt-2 whitespace-nowrap rounded-md bg-brand-900 px-2.5 py-1.5 text-[11px] font-semibold text-white opacity-0 translate-y-[-4px] transition-[opacity,transform] duration-200 group-hover/theme:opacity-100 group-hover/theme:translate-y-0 group-focus-visible/theme:opacity-100 group-focus-visible/theme:translate-y-0 z-50">
              Light / dark theme switch
            </span>
          </button>
          <Link className="btn btn--gold btn--sm magnetic nav__cta max-[860px]:hidden" href="/admissions"><span>Apply Now</span></Link>
          <button className="burger max-[860px]:flex" id="burger" aria-label="Open menu" aria-expanded="false"><i></i><i></i><i></i></button>
        </div>
      </div>
    </header>
  );
}
