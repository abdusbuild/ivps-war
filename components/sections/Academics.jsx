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

export default function Academics() {
  return (
    <section className="section academics" id="academics">
      <div className="wrap">
        <header className="sec-head sec-head--center">
          <p className="eyebrow reveal" data-reveal="up"><span className="eyebrow__dot"></span> The academic journey</p>
          <h2 className="h2 split" data-reveal="split">Twelve years of school, four clear stages</h2>
          <p className="lede reveal" data-reveal="up" data-delay="120">
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

        <div className="curr-note reveal" data-reveal="up">
          <div>
            <h3>How we teach</h3>
            <p>Constructivist rather than rote — hands-on experience first. Critical and creative thinking, aligned to 21st-century skills, is built into ordinary classroom practice rather than added on as a workshop.</p>
          </div>
          <a className="btn btn--dark magnetic" href="#contact" data-cursor="link"><span>Request the curriculum outline</span></a>
        </div>
      </div>
    </section>
  );
}
