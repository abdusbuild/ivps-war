export default function OurStory() {
  return (
    <section className="py-[clamp(48px,6vw,90px)] relative border-t border-line-2" id="our-story">
      <div className="w-full max-w-(--container-wrap) mx-auto px-[clamp(20px,4vw,40px)]">
        <header className="max-w-[74ch]">
          <p className="eyebrow reveal" data-reveal="up">Our story</p>
          <h2 className="text-[clamp(30px,4.6vw,54px)] split" data-reveal="split">
            A CBSE school built for War, Aurangabad — and the children who call it home
          </h2>
        </header>

        <div className="grid gap-5 max-w-[74ch] mt-6">
          <p className="text-text-2 text-[clamp(16.5px,1.6vw,19px)] leading-[1.72] reveal" data-reveal="up" data-delay="120">
            Indo Valley Public School was founded in 2016 on a simple idea: families in War and
            across Aurangabad, Bihar should not have to send their children far from home for a
            genuinely good education. As a CBSE-affiliated school, we bring a national curriculum
            to a campus that stays close to the community it serves.
          </p>
          <p className="reveal" data-reveal="up" data-delay="180">
            Since then, we have grown into one of the region&apos;s trusted names in schooling —
            not by chasing scale, but by investing steadily in classrooms, laboratories and
            faculty who know every student by name. Our campus and teaching methods are built
            around how children actually learn, not around an average timetable.
          </p>
          <p className="reveal" data-reveal="up" data-delay="240">
            We believe in nurturing not just scholars, but well-rounded individuals prepared for
            what comes after school. A balanced curriculum — academic rigor alongside sport, art
            and activity — gives every child room to discover and develop their own potential.
          </p>
          <p className="reveal" data-reveal="up" data-delay="300">
            Recognised by the relevant education authorities, we hold ourselves to that standard
            every year: reviewing what we teach and how we teach it, so the school keeps pace
            with what modern education actually demands of its students.
          </p>
        </div>
      </div>
    </section>
  );
}
