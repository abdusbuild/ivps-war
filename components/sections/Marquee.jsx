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
    <div className="marquee__set">
      {ITEMS.flatMap((item, i) => [
        <span key={`s${i}`}>{item}</span>,
        <i key={`i${i}`}>&#10022;</i>,
      ])}
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="marquee" id="marquee" aria-hidden="true">
      <div className="marquee__track">
        <Set />
        <Set />
      </div>
    </section>
  );
}
