import Image from "next/image";

export default function Nav() {
  return (
    <header className="nav" id="nav">
      <div className="nav__progress" id="navProgress"></div>
      <div className="wrap nav__in">
        <a className="brand" href="#top" data-cursor="link">
          <span className="brand__mark">
            <Image src="/images/logo.jpeg" alt="Indo Valley Public School crest" width={40} height={40} />
          </span>
          <span className="brand__text">
            <strong>Indo Valley</strong>
            <small>PUBLIC SCHOOL &middot; CBSE</small>
          </span>
        </a>

        <nav className="nav__menu" id="navMenu" aria-label="Primary">
          <a href="#about" data-cursor="link">About</a>
          <a href="#academics" data-cursor="link">Academics</a>
          <a href="#campus" data-cursor="link">Campus</a>
          <a href="#life" data-cursor="link">Life</a>
          <a href="#admissions" data-cursor="link">Admissions</a>
          <a href="#contact" data-cursor="link">Contact</a>
          <span className="nav__pill" id="navPill" aria-hidden="true"></span>
        </nav>

        <div className="nav__side">
          <button className="theme-toggle" id="themeToggle" aria-label="Switch colour theme" data-cursor="link">
            <span className="theme-toggle__track"><i></i></span>
          </button>
          <a className="btn btn--gold btn--sm magnetic nav__cta" href="#admissions" data-cursor="link"><span>Apply Now</span></a>
          <button className="burger" id="burger" aria-label="Open menu" aria-expanded="false"><i></i><i></i><i></i></button>
        </div>
      </div>
    </header>
  );
}
