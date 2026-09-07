const FAQS = [
  {
    q: "Which board does the school follow?",
    a: "Indo Valley Public School follows an English-medium CBSE curriculum. Teaching is planned around the competencies and learning outcomes the board sets, with hands-on, constructivist practice rather than rote learning.",
    open: true,
  },
  {
    q: "Which classes are offered?",
    a: "Nursery, LKG and UKG through to Class X at present, with senior secondary (10+2) planned as the school grows. The enquiry form lets you indicate any class from Nursery to XII so we can record your interest.",
  },
  {
    q: "What are the core subjects?",
    a: "English, Hindi, Mathematics, E.V.S., General Knowledge and Computer Studies form the core in the primary years, branching into Science and Social Science in the middle and secondary years — alongside a full band of co-curricular activity.",
  },
  {
    q: "Is extra academic help available?",
    a: "Yes. Tutorial and remedial sessions run both during school hours and after them, arranged according to each child's needs rather than on a fixed timetable for everyone.",
  },
  {
    q: "Does the school provide transport?",
    a: "The school runs its own fleet on fixed routes across War and the surrounding area. Route availability depends on where you live — call the office with your locality and we will confirm the nearest stop and timing.",
  },
  {
    q: "How do I apply?",
    a: "Start with the enquiry form on our contact page or a phone call. We will invite you for a campus visit, hold a short age-appropriate interaction with your child, and then share the admission form, document list and fee structure.",
  },
];

export default function Faq() {
  return (
    <section className="section faq" id="faq">
      <div className="wrap faq__in">
        <div className="faq__intro">
          <p className="eyebrow reveal" data-reveal="up"><span className="eyebrow__dot"></span> Questions</p>
          <h2 className="h2 split" data-reveal="split">Answers to what parents ask first</h2>
          <p className="lede reveal" data-reveal="up" data-delay="120">If your question is not here, the office is open through the school day and someone will actually pick up.</p>
          <a className="btn btn--dark magnetic reveal" data-reveal="up" data-delay="180" href="tel:+916207417770" data-cursor="link"><span>6207 417 770</span></a>
        </div>

        <div className="faq__list">
          {FAQS.map((f, i) => (
            <details className="qa reveal" data-reveal="up" data-delay={i * 60} open={f.open} key={f.q}>
              <summary>{f.q}<i></i></summary>
              <div className="qa__body"><p>{f.a}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
