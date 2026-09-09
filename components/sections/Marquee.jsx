const ITEMS = [
  "Smart classrooms",
  "Science and computer labs",
  "Library and reading room",
  "Sports and athletics",
  "Art, craft and music",
  "Safe transport",
  "Remedial support",
  "Value education",
];

function Set() {
  return (
    <div className="marquee__set flex items-center gap-7 pr-7">
      {ITEMS.flatMap((item, i) => [
        <span key={`s${i}`} className="font-display text-[clamp(17px,2vw,24px)] font-medium whitespace-nowrap opacity-90">{item}</span>,
        <i key={`i${i}`} className="text-gold-400 not-italic text-[13px]">&#10022;</i>,
      ])}
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="marquee bg-brand-900 text-white overflow-hidden py-4 border-y border-white/8" id="marquee" aria-hidden="true">
      <div className="marquee__track">
        <Set />
        <Set />
      </div>
    </section>
  );
}
