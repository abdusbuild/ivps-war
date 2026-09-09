import Link from "next/link";

const STAGES = [
  {
    label: "Foundational",
    range: "Nursery &ndash; Class II",
    text: "Play, phonics, number sense and a great deal of talking. Children learn the shape of a school day: how to sit with a book, how to ask, how to wait, how to share.",
    tags: ["Phonics &amp; early reading", "Number sense", "Rhymes &amp; storytelling", "Motor skills", "Circle time"],
    open: true,
  },
  {
    label: "Preparatory",
    range: "Class III &ndash; V",
    text: "The move from learning to read into reading to learn. Written expression, structured mathematics and the first real experiments in E.V.S.",
    tags: ["English", "Hindi", "Mathematics", "E.V.S.", "General Knowledge", "Computer Studies"],
  },
  {
    label: "Middle",
    range: "Class VI &ndash; VIII",
    text: "Subjects separate and deepen. Laboratory work, project work and presentation become part of ordinary assessment, alongside 21st-century skills of critical and creative thinking.",
    tags: ["Science", "Social Science", "Mathematics", "Languages", "Computer Studies", "Projects &amp; labs"],
  },
  {
    label: "Secondary",
    range: "Class IX &ndash; X",
    text: "Board preparation done properly: practice papers, doubt clinics, remedial sessions after school and a steady conversation with parents about progress. Senior secondary (10+2) is planned as the next step.",
    tags: ["Board practice", "Doubt clinics", "Remedial hours", "Career conversations"],
  },
];

const CORE_SUBJECTS = [
  "English Language &amp; Literature",
  "Hindi Language &amp; Literature",
  "Mathematics",
  "Science (Physics, Chemistry, Biology)",
  "Social Studies (History, Geography, Civics)",
  "Computer Science",
  "Physical Education",
  "Art &amp; Craft",
];

const TIMETABLE = [
  { time: "8:00 AM &ndash; 8:45 AM", period: "Assembly &amp; Morning Activities" },
  { time: "8:45 AM &ndash; 9:30 AM", period: "First Period" },
  { time: "9:30 AM &ndash; 10:15 AM", period: "Second Period" },
  { time: "10:15 AM &ndash; 10:30 AM", period: "Short Break" },
  { time: "10:30 AM &ndash; 11:15 AM", period: "Third Period" },
  { time: "11:15 AM &ndash; 12:00 PM", period: "Fourth Period" },
  { time: "12:00 PM &ndash; 12:45 PM", period: "Lunch Break" },
  { time: "12:45 PM &ndash; 1:30 PM", period: "Fifth Period" },
  { time: "1:30 PM &ndash; 2:15 PM", period: "Sixth Period" },
];

export default function Academics() {
  return (
    <section className="py-[clamp(48px,6vw,90px)] relative" id="academics">
      <div className="w-full max-w-(--container-wrap) mx-auto px-[clamp(20px,4vw,40px)]">
        <header className="sec-head sec-head--center">
          <p className="eyebrow reveal" data-reveal="up">The academic journey</p>
          <h2 className="text-[clamp(30px,4.6vw,54px)] split" data-reveal="split">Twelve years of school, four clear stages</h2>
          <p className="text-text-2 text-[clamp(16.5px,1.6vw,19px)] leading-[1.72] mt-5 reveal" data-reveal="up" data-delay="120">
            The curriculum is the sum of every planned experience a school gives a learner —
            objectives, competencies, subjects, teaching practice and assessment. Here is how
            ours is staged.
          </p>
        </header>

        <div className="stages" id="stages">
          <div className="stages__rail"><i id="stageProgress"></i></div>

          {STAGES.map((s, i) => (
            <article className={`stage reveal${s.open ? " is-open" : ""}`} data-reveal="up" data-delay={i * 80} key={s.label}>
              <button className="stage__head" aria-expanded={s.open ? "true" : "false"}>
                <span className="stage__dot"></span>
                <span className="stage__label">{s.label}</span>
                <span className="stage__range" dangerouslySetInnerHTML={{ __html: s.range }} />
                <span className="stage__chev" aria-hidden="true"></span>
              </button>
              <div className="stage__body">
                <div className="stage__inner">
                  <p>{s.text}</p>
                  <ul className="tags">
                    {s.tags.map((t) => (
                      <li key={t} dangerouslySetInnerHTML={{ __html: t }} />
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4.5 mb-[clamp(28px,4vw,44px)] max-[900px]:grid-cols-1">
          <div className="reveal rounded-lg bg-card border border-line-2" data-reveal="up" style={{ padding: "28px 30px" }}>
            <h3 className="font-display text-[clamp(18px,2vw,22px)] mb-4">Core Subjects</h3>
            <ul className="tags" style={{ paddingBottom: 0 }}>
              {CORE_SUBJECTS.map((s) => (
                <li key={s} dangerouslySetInnerHTML={{ __html: s }} />
              ))}
            </ul>
          </div>

          <div className="reveal rounded-lg bg-card border border-line-2" data-reveal="up" data-delay="100" style={{ padding: "28px 30px" }}>
            <h3 className="font-display text-[clamp(18px,2vw,22px)] mb-4">Sample Timetable</h3>
            <div className="legal__table-wrap" style={{ marginBottom: 0 }}>
              <table className="legal__table">
                <tbody>
                  {TIMETABLE.map((row) => (
                    <tr key={row.time}>
                      <th dangerouslySetInnerHTML={{ __html: row.time }} />
                      <td dangerouslySetInnerHTML={{ __html: row.period }} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="curr-note reveal" data-reveal="up">
          <div>
            <h3>How we teach</h3>
            <p>Constructivist rather than rote — hands-on experience first. Critical and creative thinking, aligned to 21st-century skills, is built into ordinary classroom practice rather than added on as a workshop.</p>
          </div>
          <Link className="btn btn--dark magnetic" href="/contact" data-cursor="link"><span>Request the curriculum outline</span></Link>
        </div>

        <div className="curr-note reveal mt-[clamp(20px,3vw,28px)]" data-reveal="up">
          <div>
            <h3>Our Dedicated Faculty</h3>
            <p>Our team of over 50 experienced educators brings passion, expertise, and dedication to the classroom. With qualifications from premier institutions and years of teaching experience, our faculty members are committed to nurturing each student&rsquo;s potential. They employ innovative teaching methods, provide personalized attention, and create an engaging learning environment that inspires curiosity and academic excellence.</p>
          </div>
          <Link className="btn btn--dark magnetic" href="/faculty" data-cursor="link"><span>Meet our faculty</span></Link>
        </div>
      </div>
    </section>
  );
}
