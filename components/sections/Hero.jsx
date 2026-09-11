import Image from "next/image";
import Link from "next/link";

const HERO_SLIDES = [
  { src: "/indo/school-building.jpeg", alt: "Indo Valley Public School campus building", pos: "object-[center_38%]", bgPos: "center 38%" },
  { src: "/indo/classroom1.jpeg", alt: "Students learning in a classroom", pos: "object-[center_32%]", bgPos: "center 32%" },
  { src: "/indo/computerLab.jpeg", alt: "Students in the computer lab", pos: "object-center", bgPos: "center" },
  { src: "/indo/hall.jpeg", alt: "School assembly in the main hall", pos: "object-[center_30%]", bgPos: "center 30%" },
  { src: "/indo/republicDay.jpeg", alt: "Independence Day celebration at school", pos: "object-[center_28%]", bgPos: "center 28%" },
];

export default function Hero() {
  return (
    <section
      className="hero relative overflow-hidden text-white flex items-center min-h-[clamp(560px,84vh,840px)] pt-[clamp(112px,15vw,150px)] pb-[clamp(70px,9vw,110px)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:z-3 before:bg-[linear-gradient(90deg,var(--red-500),var(--gold-500),var(--brand-500))]"
      id="hero"
    >
      <div className="hero__photo absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="hero__stage" id="heroStage">
          {HERO_SLIDES.map((s, i) => (
            <div
              className={"hero__slide" + (i === 0 ? " is-active" : "")}
              key={s.src}
              data-src={s.src}
              data-bg-pos={s.bgPos}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className={"object-cover " + s.pos}
              />
            </div>
          ))}
        </div>
        <div className="hero__chunks" id="heroChunks"></div>
      </div>
      <div
        className="hero__scrim absolute inset-0 z-1 pointer-events-none [background:linear-gradient(100deg,rgba(5,14,32,.95)_0%,rgba(5,14,32,.84)_34%,rgba(5,14,32,.46)_64%,rgba(5,14,32,.16)_100%),linear-gradient(0deg,rgba(5,14,32,.6)_0%,rgba(5,14,32,0)_38%)]"
        aria-hidden="true"
      ></div>
      <canvas id="particles" className="absolute inset-0 w-full h-full z-1" aria-hidden="true"></canvas>

      <button
        className="hero__arrow hero__arrow--side absolute z-3 left-[clamp(12px,2.5vw,28px)] top-1/2 -translate-y-1/2 hidden sm:grid"
        id="heroPrev"
        aria-label="Previous photo"
      >
        <svg viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <button
        className="hero__arrow hero__arrow--side absolute z-3 right-[clamp(12px,2.5vw,28px)] top-1/2 -translate-y-1/2 hidden sm:grid"
        id="heroNext"
        aria-label="Next photo"
      >
        <svg viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>

      <div
        className="hero__slider-nav reveal absolute z-3 right-[clamp(20px,4vw,40px)] bottom-[26px] hidden sm:flex items-center gap-3.5"
        data-reveal="up"
        data-delay="420"
      >
        <div className="hero__bars w-[104px]" id="heroBars">
          {HERO_SLIDES.map((_, i) => (
            <span className="hero__bar" key={i}><i /></span>
          ))}
        </div>
      </div>

      <div className="w-full max-w-(--container-wrap) mx-auto px-[clamp(20px,4vw,40px)] hero__in relative z-2 max-w-[740px]">
        <p className="eyebrow eyebrow--light reveal" data-reveal="up">
          English Medium &middot; CBSE Curriculum &middot; Nursery to Class X
        </p>

        <h1
          className="hero__title font-display text-white m-0 mb-6 text-[clamp(40px,6.4vw,78px)] leading-[1.03] tracking-[-.03em]"
          style={{ fontVariationSettings: '"SOFT" 20, "WONK" 1' }}
        >
          <span className="line"><span className="w">Where</span> <span className="w">curiosity</span></span>
          <span className="line"><span className="w">grows</span> <span className="w">deep</span> <span className="w gold">roots.</span></span>
        </h1>

        <p className="hero__lede reveal hidden sm:block max-w-[48ch] text-[clamp(16px,1.55vw,18.5px)] text-white/82 mb-[22px]" data-reveal="up" data-delay="120">
          In War, Aurangabad, children learn to think clearly, speak confidently
          and choose kindly — not just to clear an exam.
        </p>

        <div className="hero__rotator reveal flex items-baseline gap-2.5 font-display text-[clamp(19px,2.2vw,26px)] font-semibold mb-[30px] text-white" data-reveal="up" data-delay="200">
          <span>We build</span>
          <span className="rotator" id="rotator" aria-live="polite">
            <b className="is-on">confidence</b><b>character</b><b>curiosity</b><b>courage</b>
          </span>
        </div>

        <div className="hero__cta reveal flex flex-wrap gap-3.5 mb-7" data-reveal="up" data-delay="280">
          <Link className="btn btn--gold btn--lg magnetic" href="/admissions">
            <span>Start an admission enquiry</span>
            <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <Link className="btn btn--outline-light btn--lg magnetic" href="/life">
            <span className="play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
            <span>See school life</span>
          </Link>
        </div>
      </div>

    </section>
  );
}
