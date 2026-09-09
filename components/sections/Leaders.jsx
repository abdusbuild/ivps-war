import Image from "next/image";
import Link from "next/link";

export default function Leaders({ aboutCtaHref }) {
  const isPreview = Boolean(aboutCtaHref);

  return (
    <section className="py-[clamp(48px,6vw,90px)] relative bg-paper-2" id="leaders">
      <div className="w-full max-w-(--container-wrap) mx-auto px-[clamp(20px,4vw,40px)]">
        <header className="sec-head sec-head--center">
          <p className="eyebrow reveal" data-reveal="up">People behind the vision</p>
          <h2 className="text-[clamp(30px,4.6vw,54px)] split" data-reveal="split">Two messages worth reading</h2>
        </header>

        <div className="leaders__grid">
          <article className="leader reveal" data-reveal="up" data-cursor="card">
            <div className="leader__head">
              <div className="leader__photo">
                <Image src="/indo/indo-valley-director.jpeg" alt="Nehal Khan, Director of Indo Valley Public School" width={176} height={176} style={{ objectPosition: "62% 30%" }} />
              </div>
              <div className="leader__id">
                <p className="leader__role">Director&rsquo;s message</p>
                <strong>Nehal Khan</strong>
                <span>Indo Valley Foundation Trust</span>
              </div>
              <svg className="leader__mark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v1a2 2 0 0 1-2 2H4v2h1a4 4 0 0 0 4-4V7zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v1a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V7z" /></svg>
            </div>
            <div className="leader__body">
              <blockquote>
                <p>Dear Parents and Students,</p>
                <p>Education is not just a path to academic achievement; it is a powerful force that shapes character and opens doors to opportunity.</p>
                {!isPreview && (
                  <>
                    <p>At Indo Valley Public School we remain dedicated to recognising the unique potential of every learner and fostering a genuine love for learning.</p>
                    <p>Our aim has always been to provide a warm, inclusive and forward-looking environment where students feel motivated, confident and prepared to embrace the future. In today&rsquo;s ever-evolving world, it is essential that our children grow not only in knowledge but also in values, resilience and responsibility.</p>
                  </>
                )}
              </blockquote>
              {isPreview && (
                <Link className="link-arrow link-arrow--sm mt-3" href={`${aboutCtaHref}#leaders`} data-cursor="link">
                  See more
                  <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              )}
            </div>
          </article>

          <article className="leader reveal" data-reveal="up" data-delay="140" data-cursor="card">
            <div className="leader__head">
              <div className="leader__photo">
                <Image src="/indo/principal.jpeg" alt="Mr Dhananjay Pandit, Principal of Indo Valley Public School" width={176} height={176} style={{ objectPosition: "center 15%" }} />
              </div>
              <div className="leader__id">
                <p className="leader__role">Principal&rsquo;s message</p>
                <strong>Mr Dhananjay Pandit</strong>
                <span>Principal</span>
              </div>
              <svg className="leader__mark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v1a2 2 0 0 1-2 2H4v2h1a4 4 0 0 0 4-4V7zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v1a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V7z" /></svg>
            </div>
            <div className="leader__body">
              <blockquote>
                <p>Dear Parents and Students,</p>
                <p>Education is a journey of gaining knowledge, skills, values and the habits that shape one&rsquo;s character.</p>
                {!isPreview && (
                  <>
                    <p>Its true purpose goes beyond securing a livelihood — it teaches us how to lead life with meaning and purpose.</p>
                    <p>A teacher&rsquo;s role is to spark curiosity so that children continue to learn long after they leave the classroom. I believe every child must have the freedom to make mistakes, for it is through those mistakes that real learning happens. Over the years our commitment has shown in board results, in sport and in a calendar full of co-curricular life.</p>
                  </>
                )}
              </blockquote>
              {isPreview && (
                <Link className="link-arrow link-arrow--sm mt-3" href={`${aboutCtaHref}#leaders`} data-cursor="link">
                  See more
                  <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              )}
            </div>
          </article>
        </div>

        {aboutCtaHref && (
          <div className="text-center mt-[clamp(28px,4vw,44px)]">
            <Link className="link-arrow reveal" data-reveal="up" href={aboutCtaHref} data-cursor="link">
              Read more on the About Us page
              <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
