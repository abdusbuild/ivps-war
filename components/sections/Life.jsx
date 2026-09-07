import Image from "next/image";

const SHOTS = [
  { cat: "celebration", src: "/images/resultDay1.jpeg", title: "Result Day Celebration", caption: "Graduation moment", alt: "A young student in a graduation cap receiving a certificate on Result Day" },
  { cat: "cultural", src: "/images/function8.jpeg", title: "Classical Dance", caption: "Independence Day programme", alt: "A student performing a classical dance on stage", tall: true },
  { cat: "campus", src: "/images/function1.jpeg", title: "Science Exhibition", caption: "Class III-A project display", alt: "Students presenting science exhibition models" },
  { cat: "celebration", src: "/images/independenceDay.jpeg", title: "Flag Hoisting", caption: "15 August", alt: "Staff and guests gathered for the Independence Day flag hoisting", tall: true },
  { cat: "cultural", src: "/images/function6.jpeg", title: "Ethnic Day", caption: "Saree walk, senior girls", alt: "Senior students dressed in sarees for Ethnic Day" },
  { cat: "celebration", src: "/images/GK-competition.jpeg", title: "GK Quiz Competition", caption: "Prize distribution", alt: "A student receiving a prize at the General Knowledge quiz competition" },
  { cat: "campus", src: "/images/hall.jpeg", title: "School corridor", caption: "Main block", alt: "A corridor inside the Indo Valley Public School building" },
  { cat: "campus", src: "/images/function2.jpeg", title: "Science Exhibition", caption: "Class VII project display", alt: "Class VII students with their science exhibition models and the principal" },
  { cat: "celebration", src: "/images/resultDay.jpeg", title: "Result Day Celebration", caption: "With parents", alt: "A student and parent receiving a certificate on Result Day" },
  { cat: "campus", src: "/images/books.jpeg", title: "Books & study material", caption: "School stock room", alt: "Shelves stacked with textbooks and workbooks" },
];

export default function Life() {
  return (
    <section className="section life" id="life">
      <div className="wrap">
        <header className="sec-head sec-head--split">
          <div>
            <p className="eyebrow reveal" data-reveal="up"><span className="eyebrow__dot"></span> Life at Indo Valley</p>
            <h2 className="h2 split" data-reveal="split">Photographs, not stock images</h2>
          </div>
          <div className="filters reveal" data-reveal="up" data-delay="120" role="tablist" aria-label="Gallery filters">
            <button className="filter is-active" data-filter="all" role="tab" aria-selected="true">All</button>
            <button className="filter" data-filter="celebration" role="tab" aria-selected="false">Celebrations</button>
            <button className="filter" data-filter="cultural" role="tab" aria-selected="false">Cultural</button>
            <button className="filter" data-filter="campus" role="tab" aria-selected="false">Campus</button>
          </div>
        </header>

        <div className="gallery" id="gallery">
          <figure className="shot" data-cat="campus" data-reveal="up" data-cursor="zoom">
            <video src="/video/video.mp4" muted loop playsInline autoPlay preload="metadata" />
            <figcaption><strong>A look around</strong><span>Campus video</span></figcaption>
          </figure>
          {SHOTS.map((s, i) => (
            <figure
              key={s.src}
              className={`shot${s.tall ? " shot--tall" : ""}`}
              data-cat={s.cat}
              data-reveal="up"
              data-delay={60 + i * 60}
              data-cursor="zoom"
            >
              <Image src={s.src} alt={s.alt} width={s.tall ? 900 : 1200} height={s.tall ? 1200 : 900} />
              <figcaption><strong>{s.title}</strong><span>{s.caption}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
