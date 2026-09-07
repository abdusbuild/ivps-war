const STATS = [
  { count: 14, suffix: "", label: "Class levels,<br>Pre-Nursery to X" },
  { count: 850, suffix: "+", label: "Students<br>on roll" },
  { count: 28, suffix: "+", label: "Teachers &amp;<br>support staff" },
  { count: 100, suffix: "%", label: "English medium<br>teaching" },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="wrap stats__grid">
        {STATS.map((s, i) => (
          <div className="stat reveal" data-reveal="up" data-delay={i * 80} key={s.label}>
            <strong data-count={s.count} data-suffix={s.suffix}>0</strong>
            <span dangerouslySetInnerHTML={{ __html: s.label }} />
          </div>
        ))}
      </div>
    </section>
  );
}
