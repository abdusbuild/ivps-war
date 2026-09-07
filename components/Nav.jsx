"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/campus", label: "Campus" },
  { href: "/life", label: "Life" },
  { href: "/faculty", label: "Faculty" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="nav" id="nav">
      <div className="nav__progress" id="navProgress"></div>
      <div className="wrap nav__in">
        <a className="brand" href="/">
          <span className="brand__mark">
            <Image src="/images/logo.jpeg" alt="Indo Valley Public School crest" width={40} height={40} />
          </span>
          <span className="brand__text">
            <strong>Indo Valley</strong>
            <small>PUBLIC SCHOOL &middot; CBSE</small>
          </span>
        </a>

        <nav className="nav__menu" id="navMenu" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className={pathname === l.href ? "is-active" : ""}>
              {l.label}
            </a>
          ))}
          <span className="nav__pill" id="navPill" aria-hidden="true"></span>
        </nav>

        <div className="nav__side">
          <button className="theme-toggle" id="themeToggle" aria-label="Switch colour theme">
            <span className="theme-toggle__track"><i></i></span>
          </button>
          <a className="btn btn--gold btn--sm magnetic nav__cta" href="/admissions"><span>Apply Now</span></a>
          <button className="burger" id="burger" aria-label="Open menu" aria-expanded="false"><i></i><i></i><i></i></button>
        </div>
      </div>
    </header>
  );
}
