"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/campus", label: "Campus" },
  { href: "/life", label: "School Life" },
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
            className="js-theme-toggle group/theme relative flex items-center justify-center flex-none w-10.5 h-10.5 rounded-xl border-[1.5px] border-solid border-line bg-card cursor-pointer transition-colors duration-300 hover:border-gold-500/50"
            aria-label="Toggle between light and dark theme"
            title="Toggle between light and dark theme"
          >
            <svg className="absolute w-[18px] h-[18px] text-gold-500 opacity-100 scale-100 rotate-0 dark:opacity-0 dark:scale-50 dark:rotate-90 transition-all duration-500 [transition-timing-function:var(--ease-ivps)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" />
              <path d="M12 2.5v2.4M12 19.1v2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7" />
            </svg>
            <svg className="absolute w-[17px] h-[17px] text-[#8fb2e8] opacity-0 scale-50 -rotate-90 dark:opacity-100 dark:scale-100 dark:rotate-0 transition-all duration-500 [transition-timing-function:var(--ease-ivps)]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
            </svg>
            <span className="pointer-events-none absolute top-full right-0 mt-2 whitespace-nowrap rounded-md bg-brand-900 px-2.5 py-1.5 text-[11px] font-semibold text-white opacity-0 translate-y-[-4px] transition-[opacity,transform] duration-200 group-hover/theme:opacity-100 group-hover/theme:translate-y-0 group-focus-visible/theme:opacity-100 group-focus-visible/theme:translate-y-0 z-50">
              Toggle theme
            </span>
          </button>
          <Link className="btn btn--gold btn--sm magnetic nav__cta max-[860px]:hidden" href="/admissions"><span>Apply Now</span></Link>
          <button className="burger max-[860px]:flex" id="burger" aria-label="Open menu" aria-expanded="false"><i></i><i></i><i></i></button>
        </div>
      </div>
    </header>
  );
}
