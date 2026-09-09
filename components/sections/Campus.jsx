import Image from "next/image";
import Link from "next/link";

export default function Campus() {
  return (
    <section className="py-[clamp(48px,6vw,90px)] relative" id="campus">
      <div className="w-full max-w-(--container-wrap) mx-auto px-[clamp(20px,4vw,40px)]">
        <header className="sec-head">
          <p className="eyebrow reveal" data-reveal="up">Campus &amp; facilities</p>
          <h2 className="text-[clamp(30px,4.6vw,54px)] split" data-reveal="split">Spaces designed to keep children learning</h2>
        </header>

        <div className="bento grid grid-cols-3 gap-4.5 [grid-auto-rows:minmax(200px,auto)] max-[1080px]:grid-cols-2 max-[640px]:grid-cols-1">
          <article className="bento__card bento__card--tall tilt reveal" data-reveal="up" data-cursor="card">
            <Image src="/indo/classroom2.jpeg" alt="A classroom at Indo Valley Public School" width={900} height={1200} />
            <div className="bento__body">
              <h3>Bright, low-noise classrooms</h3>
              <p>Classrooms, laboratories and activity spaces are laid out to raise productivity and shield students from excessive noise and pollution.</p>
            </div>
          </article>

          <article className="bento__card tilt reveal" data-reveal="up" data-delay="90" data-cursor="card">
            <span className="bento__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" /></svg></span>
            <div className="bento__body">
              <h3>Computer studies from the early years</h3>
              <p>Computer Studies sits in the core subject list from the primary years upward, not as an optional extra.</p>
            </div>
          </article>

          <article className="bento__card tilt reveal" data-reveal="up" data-delay="180" data-cursor="card">
            <span className="bento__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v6.5L3.8 18A2 2 0 0 0 5.5 21h13a2 2 0 0 0 1.7-3L15 9.5V3" /><path d="M8 3h8" /><path d="M7 14h10" /></svg></span>
            <div className="bento__body">
              <h3>Science laboratory</h3>
              <p>Hands-on experiment work supports the constructivist teaching the curriculum asks for.</p>
            </div>
          </article>

          <article className="bento__card tilt reveal" data-reveal="up" data-delay="270" data-cursor="card">
            <span className="bento__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg></span>
            <div className="bento__body">
              <h3>Library &amp; reading room</h3>
              <p>A quiet room for curriculum study and for the reading nobody assigned.</p>
            </div>
          </article>

          <article className="bento__card tilt reveal" data-reveal="up" data-delay="210" data-cursor="card">
            <span className="bento__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18M3.5 9h17M3.5 15h17" /></svg></span>
            <div className="bento__body">
              <h3>Sports &amp; open ground</h3>
              <p>Daily movement, inter-house matches and athletics — physical activity treated as part of education, not a reward.</p>
            </div>
          </article>

          <article className="bento__card bento__card--wide tilt reveal" data-reveal="up" data-delay="120" data-cursor="card">
            <Image src="/indo/vehicles.jpeg" alt="The Indo Valley Public School transport fleet parked at the depot" width={1280} height={310} />
            <div className="bento__body">
              <h3>An excellent transport system</h3>
              <p>A maintained fleet on fixed routes across War and the surrounding villages, with named staff on every vehicle.</p>
              <Link className="link-arrow link-arrow--sm" href="/contact" data-cursor="link">Ask about your route
                <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </article>

          <article className="bento__card tilt reveal" data-reveal="up" data-delay="300" data-cursor="card">
            <span className="bento__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="2.5" /><circle cx="19" cy="13" r="2" /><circle cx="6" cy="12" r="2.5" /><path d="M12 22a9 9 0 1 1 9-9c0 2-2 2-3 2s-3 0-3 2 1 2 1 3-1.5 2-4 2z" /></svg></span>
            <div className="bento__body">
              <h3>Art, craft &amp; music</h3>
              <p>Dedicated periods for making things — paper craft, rangoli, drawing and performance — for every class, every week.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
