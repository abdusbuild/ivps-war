const PILLARS = [
  {
    icon: <path d="M12 3 2 8l10 5 10-5-10-5z" />,
    icon2: <path d="M6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5" />,
    icon3: <path d="M22 8v6" />,
    title: "Academics with a spine",
    text: "A CBSE-aligned curriculum taught by teachers who plan for competencies and learning outcomes, not for a syllabus checklist.",
  },
  {
    icon: <path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 22l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />,
    title: "Care before content",
    text: "Small enough that no child disappears in the crowd. Class teachers know every family by name and speak to them often.",
  },
  {
    icon: <>
      <path d="M12 2v4" /><path d="M12 18v4" /><path d="m4.9 4.9 2.9 2.9" /><path d="m16.2 16.2 2.9 2.9" />
      <path d="M2 12h4" /><path d="M18 12h4" /><path d="m4.9 19.1 2.9-2.9" /><path d="m16.2 7.8 2.9-2.9" />
    </>,
    title: "A full week, not just lessons",
    text: "Quizzes, cultural programmes, sports, art and craft, rangoli, celebrations — the calendar is designed to give every child a stage.",
  },
  {
    icon: <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
    </>,
    title: "Safety you can verify",
    text: "A supervised campus, a maintained transport fleet with fixed routes, and a front office that answers the phone.",
  },
];

export default function Pillars() {
  return (
    <section className="py-[clamp(48px,6vw,90px)] relative bg-paper-2" id="pillars">
      <div className="w-full max-w-(--container-wrap) mx-auto px-[clamp(20px,4vw,40px)]">
        <header className="sec-head">
          <p className="eyebrow reveal" data-reveal="up">Why families choose us</p>
          <h2 className="text-[clamp(30px,4.6vw,54px)] split" data-reveal="split">Four promises we keep every single day</h2>
        </header>

        <div className="pillars__grid grid grid-cols-4 gap-5 max-[1080px]:grid-cols-2 max-[640px]:grid-cols-1">
          {PILLARS.map((p, i) => (
            <article
              className="pillar tilt reveal p-[30px_26px_28px] bg-card border border-line-2 rounded-lg"
              data-reveal="up"
              data-delay={i * 90}
              data-cursor="card"
              key={p.title}
            >
              <span className="pillar__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="pillar__icon grid place-items-center w-[50px] h-[50px] rounded-[15px] mb-4.5 bg-[linear-gradient(140deg,var(--brand-700),var(--brand-900))] text-gold-400 shadow-[0_8px_20px_rgba(10,21,47,.22)]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {p.icon}{p.icon2}{p.icon3}
                </svg>
              </span>
              <h3 className="text-[19.5px] mb-2 relative">{p.title}</h3>
              <p className="text-[14.5px] text-muted m-0 leading-[1.6] relative">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
