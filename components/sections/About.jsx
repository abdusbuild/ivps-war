import Image from "next/image";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap about__in">
        <div className="about__media">
          <figure className="about__img reveal" data-reveal="mask" data-parallax="0.08">
            <Image src="/images/school-building.jpeg" alt="Front elevation of the Indo Valley Public School building" width={1016} height={1270} />
          </figure>
          <figure className="about__img about__img--small reveal" data-reveal="mask" data-delay="180" data-parallax="-0.05">
            <Image src="/images/computerLab.jpeg" alt="Students working on laptops in the computer lab" width={488} height={652} />
          </figure>
          <div className="about__quote reveal" data-reveal="scale" data-delay="300">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v1a2 2 0 0 1-2 2H4v2h1a4 4 0 0 0 4-4V7zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v1a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V7z" /></svg>
            <p>A strong beginning sets the tone for everything that follows.</p>
          </div>
        </div>

        <div className="about__copy">
          <p className="eyebrow reveal" data-reveal="up"><span className="eyebrow__dot"></span> About our school</p>
          <h2 className="h2 split" data-reveal="split">A school built around the child, not the timetable</h2>
          <p className="lede reveal" data-reveal="up" data-delay="120">
            Education is a lifelong journey, and the first years decide how far a child is
            willing to travel. Our classrooms, laboratories and activity spaces are designed
            to keep children productive and calm — away from excessive noise and pollution,
            close to the things that make them wonder.
          </p>
          <p className="reveal" data-reveal="up" data-delay="180">
            We teach children to think independently and to sharpen their analytical and
            problem-solving abilities. Tutorial and remedial sessions run during and after
            school hours, arranged around what each child actually needs — not around an
            average. English, Hindi, Mathematics, E.V.S., General Knowledge and Computer
            Studies form the core, while a wide band of co-curricular activity carries the
            rest of the child forward.
          </p>

          <ul className="about__points">
            <li className="reveal" data-reveal="up" data-delay="240">
              <span className="tick" aria-hidden="true"></span>
              <div><strong>Independent thinkers</strong><p>Constructivist teaching over rote learning, with hands-on work in every subject.</p></div>
            </li>
            <li className="reveal" data-reveal="up" data-delay="300">
              <span className="tick" aria-hidden="true"></span>
              <div><strong>Support that finds the child</strong><p>Tutorial and remedial sessions, in school and after hours, planned per learner.</p></div>
            </li>
            <li className="reveal" data-reveal="up" data-delay="360">
              <span className="tick" aria-hidden="true"></span>
              <div><strong>Confidence on and off the stage</strong><p>Faculty guide students in the classroom, the laboratory and the auditorium alike.</p></div>
            </li>
          </ul>

          <a className="link-arrow reveal" data-reveal="up" data-delay="420" href="/academics" data-cursor="link">
            Explore the academic journey
            <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
