export default function MobileMenu() {
  return (
    <div className="mobile-menu" id="mobileMenu" aria-hidden="true">
      <nav>
        <a href="#about"><span>01</span> About</a>
        <a href="#academics"><span>02</span> Academics</a>
        <a href="#campus"><span>03</span> Campus</a>
        <a href="#life"><span>04</span> School Life</a>
        <a href="#admissions"><span>05</span> Admissions</a>
        <a href="#news"><span>06</span> News</a>
        <a href="#contact"><span>07</span> Contact</a>
      </nav>
      <div className="mobile-menu__foot">
        <a href="tel:+916207417770" className="btn btn--gold"><span>Call the office</span></a>
        <p>War, Aurangabad, Bihar</p>
      </div>
    </div>
  );
}
