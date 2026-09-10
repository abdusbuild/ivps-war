import Image from "next/image";

const SHOTS = [
  { cat: "campus", src: "/indo/science-Exhibition.jpeg", title: "Science Exhibition", caption: "Project display", alt: "Students presenting science exhibition models with their teachers" },
  { cat: "cultural", src: "/indo/girl-performing-dance.jpeg", title: "Classical Dance", caption: "Independence Day programme", alt: "A student performing a classical dance on stage", tall: true },
  { cat: "celebration", src: "/indo/republicDay.jpeg", title: "Flag Hoisting", caption: "15 August", alt: "Staff and students gathered for the Independence Day flag hoisting" },
  { cat: "cultural", src: "/indo/function1.jpeg", title: "Ethnic Day", caption: "Saree walk, senior girls", alt: "Senior students dressed in sarees for Ethnic Day" },
  { cat: "celebration", src: "/indo/certi-distribution.jpeg", title: "Prize Distribution", caption: "Sports & games day", alt: "A student receiving a prize certificate on stage" },
  { cat: "campus", src: "/indo/hall.jpeg", title: "School corridor", caption: "Main block", alt: "A corridor inside the Indo Valley Public School building" },
  { cat: "campus", src: "/indo/books.jpeg", title: "Books & study material", caption: "School stock room", alt: "Shelves stacked with textbooks and workbooks" },
  { cat: "cultural", src: "/indo/anualFunction.jpeg", title: "Annual Function", caption: "Cultural programme", alt: "Students performing at the school's annual function" },
  { cat: "celebration", src: "/indo/result-distribution.jpeg", title: "Result Day Celebration", caption: "Certificate distribution", alt: "A student receiving a certificate from staff on Result Day" },
  { cat: "celebration", src: "/indo/independenceDay-performing.jpeg", title: "Independence Day", caption: "Tricolour stage performance", alt: "A group of students in tricolour outfits on stage for Independence Day", tall: true },
];

export default function Life() {
  return (
    <section className="py-[clamp(48px,6vw,90px)] relative" id="life">
      <div className="w-full max-w-(--container-wrap) mx-auto px-[clamp(20px,4vw,40px)]">
        <header className="sec-head sec-head--split">
          <div>
            <p className="eyebrow reveal" data-reveal="up">Life at Indo Valley</p>
            <h1 className="text-[clamp(30px,4.6vw,54px)] split" data-reveal="split">Photographs, not stock images</h1>
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
            <video src="/video/video.mp4" muted loop playsInline autoPlay preload="metadata" className="aspect-[4/3] w-full object-cover" />
            <figcaption><strong className="font-display text-[17px]">A look around</strong><span className="text-xs opacity-80">Campus video</span></figcaption>
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
              <Image src={s.src} alt={s.alt} width={s.tall ? 900 : 1200} height={s.tall ? 1200 : 900} className={s.tall ? "aspect-[3/4] w-full object-cover" : "aspect-[4/3] w-full object-cover"} />
              <span className="shot__view" aria-hidden="true">
                <i>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </i>
              </span>
              <figcaption><strong className="font-display text-[17px]">{s.title}</strong><span className="text-xs opacity-80">{s.caption}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
