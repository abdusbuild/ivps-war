import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-[clamp(48px,6vw,90px)] relative" id="about">
      <div className="w-full max-w-(--container-wrap) mx-auto px-[clamp(20px,4vw,40px)] about__in grid grid-cols-[1fr_1.02fr] gap-[clamp(34px,5.5vw,80px)] items-center max-[1080px]:grid-cols-1">
        <div className="about__media relative pb-[90px] max-[1080px]:max-w-[600px] max-[1080px]:mx-auto max-[640px]:pb-0">
          <figure className="about__img reveal m-0 rounded-lg overflow-hidden shadow-card-md border border-line-2" data-reveal="mask" data-parallax="0.08">
            <Image src="/indo/school-building.jpeg" alt="Front elevation of the Indo Valley Public School building" width={1016} height={1270} className="w-full aspect-[4/5] object-cover" />
          </figure>
          <figure
            className="about__img about__img--small reveal m-0 rounded-md overflow-hidden shadow-card-lg border-[5px] border-paper absolute right-[-6%] bottom-0 w-[46%] max-[640px]:static max-[640px]:w-full max-[640px]:mt-3.5 max-[640px]:border-0"
            data-reveal="mask"
            data-delay="180"
            data-parallax="-0.05"
          >
            <Image src="/indo/computerLab.jpeg" alt="Students working on laptops in the computer lab" width={488} height={652} className="w-full aspect-[3/4] object-cover" />
          </figure>
          <div
            className="about__quote reveal absolute left-[-4%] bottom-[26px] max-w-[250px] p-[18px_20px] bg-brand-800 text-white rounded-md shadow-card-lg max-[640px]:static max-[640px]:max-w-none max-[640px]:mt-4"
            data-reveal="scale"
            data-delay="300"
          >
            <svg className="w-[22px] h-[22px] text-gold-400 mb-1.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v1a2 2 0 0 1-2 2H4v2h1a4 4 0 0 0 4-4V7zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v1a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V7z" /></svg>
            <p className="font-display text-[15.5px] leading-[1.42] m-0">A strong beginning sets the tone for everything that follows.</p>
          </div>
        </div>

        <div className="about__copy">
          <p className="eyebrow reveal" data-reveal="up">About our school</p>
          <h2 className="text-[clamp(30px,4.6vw,54px)] split" data-reveal="split">A school built around the child, not the timetable</h2>
          <p className="text-text-2 text-[clamp(16.5px,1.6vw,19px)] leading-[1.72] reveal" data-reveal="up" data-delay="120">
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

          <ul className="about__points list-none my-7 mb-[30px] p-0 grid gap-[18px]">
            <li className="reveal flex gap-3.5" data-reveal="up" data-delay="240">
              <span className="tick w-6.5 h-6.5 rounded-[9px] mt-0.5" aria-hidden="true"></span>
              <div><strong className="block font-display text-[17.5px] mb-0.5">Independent thinkers</strong><p className="text-[14.5px] text-muted m-0 leading-[1.55]">Constructivist teaching over rote learning, with hands-on work in every subject.</p></div>
            </li>
            <li className="reveal flex gap-3.5" data-reveal="up" data-delay="300">
              <span className="tick w-6.5 h-6.5 rounded-[9px] mt-0.5" aria-hidden="true"></span>
              <div><strong className="block font-display text-[17.5px] mb-0.5">Support that finds the child</strong><p className="text-[14.5px] text-muted m-0 leading-[1.55]">Tutorial and remedial sessions, in school and after hours, planned per learner.</p></div>
            </li>
            <li className="reveal flex gap-3.5" data-reveal="up" data-delay="360">
              <span className="tick w-6.5 h-6.5 rounded-[9px] mt-0.5" aria-hidden="true"></span>
              <div><strong className="block font-display text-[17.5px] mb-0.5">Confidence on and off the stage</strong><p className="text-[14.5px] text-muted m-0 leading-[1.55]">Faculty guide students in the classroom, the laboratory and the auditorium alike.</p></div>
            </li>
          </ul>

          <Link className="link-arrow reveal" data-reveal="up" data-delay="420" href="/academics" data-cursor="link">
            Explore the academic journey
            <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
