const STATS = [
  { count: 14, suffix: "", label: "Class levels,<br>Pre-Nursery to X" },
  { count: 850, suffix: "+", label: "Students<br>on roll" },
  { count: 28, suffix: "+", label: "Teachers &amp;<br>support staff" },
  { count: 100, suffix: "%", label: "English medium<br>teaching" },
];

export default function Stats() {
  return (
    <section className="stats py-[clamp(46px,6vw,74px)] bg-paper-2">
      <div className="w-full max-w-(--container-wrap) mx-auto px-[clamp(20px,4vw,40px)] stats__grid grid grid-cols-4 gap-6 max-[860px]:grid-cols-2 max-[860px]:gap-x-4 max-[860px]:gap-y-[30px]">
        {STATS.map((s, i) => (
          <div className="stat reveal text-center p-2.5 relative" data-reveal="up" data-delay={i * 80} key={s.label}>
            <strong className="block font-display font-extrabold text-[clamp(38px,5.6vw,64px)] leading-none tracking-[-.03em]" data-count={s.count} data-suffix={s.suffix}>0</strong>
            <span className="block mt-2.5 text-[13.5px] text-muted font-semibold leading-[1.45]" dangerouslySetInnerHTML={{ __html: s.label }} />
          </div>
        ))}
      </div>
    </section>
  );
}
