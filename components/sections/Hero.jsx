import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__photo" aria-hidden="true">
        <Image
          src="/images/school-building.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero__scrim" aria-hidden="true"></div>
      <canvas id="particles" aria-hidden="true"></canvas>

      <div className="wrap hero__in">
        <p className="eyebrow eyebrow--light reveal" data-reveal="up">
          <span className="eyebrow__dot"></span> English Medium &middot; CBSE Curriculum &middot; Nursery to Class X
        </p>

        <h1 className="hero__title">
          <span className="line"><span className="w">Where</span> <span className="w">curiosity</span></span>
          <span className="line"><span className="w">grows</span> <span className="w">deep</span> <span className="w gold">roots.</span></span>
        </h1>

        <p className="hero__lede reveal" data-reveal="up" data-delay="120">
          At Indo Valley Public School in War, Aurangabad, children are not prepared for
          one examination — they are prepared for a life of thinking clearly, speaking
          confidently and choosing kindly.
        </p>

        <div className="hero__rotator reveal" data-reveal="up" data-delay="200">
          <span>We build</span>
          <span className="rotator" id="rotator" aria-live="polite">
            <b className="is-on">confidence</b><b>character</b><b>curiosity</b><b>courage</b>
          </span>
        </div>

        <div className="hero__cta reveal" data-reveal="up" data-delay="280">
          <a className="btn btn--gold btn--lg magnetic" href="/admissions">
            <span>Start an admission enquiry</span>
            <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <a className="btn btn--outline-light btn--lg magnetic" href="/life">
            <span className="play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
            <span>See school life</span>
          </a>
        </div>

        <ul className="hero__chips reveal" data-reveal="up" data-delay="360">
          <li>Managed by Indo Valley Foundation Trust</li>
          <li>Planned up to 10+2</li>
          <li>Own transport fleet</li>
        </ul>
      </div>

      <a className="hero__scroll" href="#marquee" aria-label="Scroll to next section"><span></span>scroll</a>
    </section>
  );
}
