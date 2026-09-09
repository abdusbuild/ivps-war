const VOICES = [
  {
    quote:
      "My daughter joined in Class III barely speaking a sentence in English. Two years later she is reading storybooks on her own and correcting me. The teachers stayed after school with her without ever making it feel like punishment.",
    name: "Sunita Devi",
    role: "Parent, Class V",
  },
  {
    quote:
      "What convinced me was the visit. I saw the classrooms on an ordinary working day, not a special day arranged for parents. The children were busy, the rooms were clean, and the principal answered every question I had about the syllabus.",
    name: "Md. Irfan Ansari",
    role: "Parent, Class VIII",
  },
  {
    quote:
      "We live four kilometres out. The school vehicle picks him up at the same time every morning and the driver knows every family on the route. For a working household that reliability is worth as much as the teaching.",
    name: "Rekha Kumari",
    role: "Parent, Class II",
  },
  {
    quote:
      "My son was always quiet. He anchored the Children's Day quiz this year in front of the whole school. Nobody at Indo Valley pushed him — they just kept giving him small chances until he took one.",
    name: "Ajay Kumar Singh",
    role: "Parent, Class IX",
  },
];

export default function Voices() {
  return (
    <section className="py-[clamp(48px,6vw,90px)] relative bg-paper-2" id="voices">
      <div className="w-full max-w-(--container-wrap) mx-auto px-[clamp(20px,4vw,40px)]">
        <header className="sec-head sec-head--center">
          <p className="eyebrow reveal" data-reveal="up">Parent voices</p>
          <h2 className="text-[clamp(30px,4.6vw,54px)] split" data-reveal="split">What families in War tell us</h2>
        </header>

        <div className="slider reveal max-w-[900px] mx-auto" data-reveal="up" data-delay="120">
          <div className="slider__viewport overflow-hidden rounded-xl" id="voicesViewport">
            <div className="slider__track" id="voicesTrack">
              {VOICES.map((v) => (
                <blockquote className="voice flex-none w-full m-0 p-[clamp(28px,4vw,52px)] text-center bg-card border border-line-2 rounded-xl" key={v.name}>
                  <div className="voice__stars text-gold-500 tracking-[.22em] text-base mb-4.5" aria-label="5 out of 5">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  <p className="font-display text-[clamp(17px,2.1vw,24px)] leading-[1.5] text-text max-w-[60ch] mx-auto">{v.quote}</p>
                  <footer className="mt-5.5 grid gap-0.5">
                    <strong className="text-[15.5px]">{v.name}</strong>
                    <span className="text-[13px] text-muted">{v.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
          <div className="slider__ctrl flex items-center justify-center gap-4.5 mt-6.5">
            <button className="sbtn" id="voicesPrev" aria-label="Previous testimonial"><svg viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            <div className="slider__dots flex gap-2" id="voicesDots"></div>
            <button className="sbtn" id="voicesNext" aria-label="Next testimonial"><svg viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
          </div>
        </div>
      </div>
    </section>
  );
}
