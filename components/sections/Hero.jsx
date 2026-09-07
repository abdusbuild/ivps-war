import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="blob blob--1"></div>
        <div className="blob blob--2"></div>
        <div className="blob blob--3"></div>
        <div className="hero__grid"></div>
        <canvas id="particles"></canvas>
      </div>

      <div className="wrap hero__in">
        <div className="hero__copy">
          <p className="eyebrow reveal" data-reveal="up">
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
            <a className="btn btn--gold btn--lg magnetic" href="#admissions" data-cursor="link">
              <span>Start an admission enquiry</span>
              <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a className="btn btn--ghost btn--lg magnetic" href="#life" data-cursor="link">
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

        <div className="hero__visual">
          <figure className="hero__frame reveal" data-reveal="scale">
            <Image
              src="/images/school-building.jpeg"
              alt="The Indo Valley Public School campus building in War, Aurangabad"
              width={1280}
              height={800}
              priority
            />
            <figcaption>Our campus &middot; War, Aurangabad</figcaption>
          </figure>

          <div className="hero__badge" aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <defs><path id="circPath" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" /></defs>
              <text><textPath href="#circPath">CBSE CURRICULUM &middot; NURSERY TO CLASS X &middot; WAR, AURANGABAD &middot; </textPath></text>
            </svg>
            <span className="hero__badge-core">IV</span>
          </div>

          <div className="hero__float hero__float--a reveal" data-reveal="left" data-delay="300">
            <strong>Nursery&ndash;X</strong>
            <span>One continuous<br />learning journey</span>
          </div>
          <div className="hero__float hero__float--b reveal" data-reveal="right" data-delay="420">
            <Image src="/images/function8.jpeg" alt="A student performing a classical dance at the Independence Day cultural programme" width={290} height={387} />
          </div>
        </div>
      </div>

      <a className="hero__scroll" href="#marquee" aria-label="Scroll to next section"><span></span>scroll</a>
    </section>
  );
}
