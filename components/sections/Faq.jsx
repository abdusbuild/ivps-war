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
  {
    q: "What documents are needed for admission?",
    a: "Birth certificate, the previous school's transfer certificate and last report card (where applicable), address proof, and passport-size photographs of the child and parents. Bring originals plus one photocopy set for verification at the office.",
  },
  {
    q: "What is the school's fee structure like?",
    a: "Monthly fees are: Pre-Nursery & Nursery ₹600, LKG ₹700, UKG ₹800, Class One to Four ₹900, and Class Five to Eight ₹1,000. Admission fee, transport charges and other one-time charges, if applicable, are shared separately at the time of admission.",
  },
  {
    q: "Is there an entrance test for admission?",
    a: "There is no formal written entrance exam. Instead, we hold a short, age-appropriate interaction with the child to understand their comfort level, which also helps us place them in the right section.",
  },
  {
    q: "What is the school timing and working week?",
    a: "Classes run six days a week, Monday to Saturday, within standard school hours. Exact bell timings differ slightly by class group and are confirmed at admission along with the annual calendar.",
  },
  {
    q: "Are co-curricular activities and sports part of school life?",
    a: "Yes — art, music, dance, computer studies and sports periods are built into the weekly timetable, alongside annual events like the annual function, republic day and science exhibition that every class participates in.",
  },
  {
    q: "Is there a school uniform, and where do we get it?",
    a: "Yes, a set uniform (including sportswear for activity days) is compulsory. Details of the supplier and the uniform list are shared at the time of admission so you can get sizing sorted before the term starts.",
  },
];

export default function Faq() {
  return (
    <section className="py-[clamp(48px,6vw,90px)] relative" id="faq">
      <div className="w-full max-w-(--container-wrap) mx-auto px-[clamp(20px,4vw,40px)] faq__in grid grid-cols-[.85fr_1.15fr] gap-[clamp(34px,5vw,72px)] items-start max-[1080px]:grid-cols-1">
        <div className="faq__intro sticky top-[110px] max-[1080px]:static">
          <p className="eyebrow reveal" data-reveal="up">Questions</p>
          <h2 className="text-[clamp(30px,4.6vw,54px)] split" data-reveal="split">Answers to what parents ask first</h2>
          <p className="text-text-2 text-[clamp(16.5px,1.6vw,19px)] leading-[1.72] reveal" data-reveal="up" data-delay="120">If your question is not here, the office is open through the school day and someone will actually pick up.</p>
          <a className="btn btn--dark magnetic reveal mt-[22px] flex items-center gap-[9px]" data-reveal="up" data-delay="180" href="tel:+918002730317" data-cursor="link">
            <svg className="w-[15px] h-[15px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
            <span>8002 730 317</span>
          </a>
        </div>

        <div className="faq__list-wrap">
          <div className="faq__list grid gap-3">
            {FAQS.map((f, i) => (
              <details className="qa reveal" data-reveal="up" data-delay={i * 60} open={f.open} key={f.q}>
                <summary>{f.q}<i></i></summary>
                <div className="qa__body"><p>{f.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
