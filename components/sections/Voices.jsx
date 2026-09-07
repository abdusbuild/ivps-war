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
    <section className="section voices" id="voices">
      <div className="wrap">
        <header className="sec-head sec-head--center">
          <p className="eyebrow reveal" data-reveal="up"><span className="eyebrow__dot"></span> Parent voices</p>
          <h2 className="h2 split" data-reveal="split">What families in War tell us</h2>
        </header>

        <div className="slider reveal" data-reveal="up" data-delay="120">
          <div className="slider__viewport" id="voicesViewport">
            <div className="slider__track" id="voicesTrack">
              {VOICES.map((v) => (
                <blockquote className="voice" key={v.name}>
                  <div className="voice__stars" aria-label="5 out of 5">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  <p>{v.quote}</p>
                  <footer><strong>{v.name}</strong><span>{v.role}</span></footer>
                </blockquote>
              ))}
            </div>
          </div>
          <div className="slider__ctrl">
            <button className="sbtn" id="voicesPrev" aria-label="Previous testimonial"><svg viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            <div className="slider__dots" id="voicesDots"></div>
            <button className="sbtn" id="voicesNext" aria-label="Next testimonial"><svg viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
          </div>
        </div>
      </div>
    </section>
  );
}
