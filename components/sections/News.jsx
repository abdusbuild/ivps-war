import Image from "next/image";

export default function News() {
  return (
    <section className="section news" id="news">
      <div className="wrap">
        <header className="sec-head sec-head--split">
          <div>
            <p className="eyebrow reveal" data-reveal="up"><span className="eyebrow__dot"></span> News &amp; events</p>
            <h2 className="h2 split" data-reveal="split">What has been happening on campus</h2>
          </div>
        </header>

        <div className="news__grid">
          <article className="post reveal" data-reveal="up" data-cursor="card">
            <div className="post__img"><Image src="/images/GK-competition.jpeg" alt="A student receiving a prize at the GK quiz competition" width={640} height={400} /></div>
            <div className="post__body">
              <p className="post__meta"><span className="pill pill--red">Celebration</span> Quiz week</p>
              <h3>General Knowledge quiz brings out the school&rsquo;s sharpest minds</h3>
              <p>Students across classes competed in an organised GK quiz, with certificates and medals awarded on stage in front of the whole school.</p>
              <span className="link-arrow link-arrow--sm">Read more <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            </div>
          </article>

          <article className="post reveal" data-reveal="up" data-delay="120" data-cursor="card">
            <div className="post__img"><Image src="/images/independenceDay.jpeg" alt="Staff and guests at the Independence Day flag hoisting ceremony" width={640} height={400} /></div>
            <div className="post__body">
              <p className="post__meta"><span className="pill">Assembly</span> 15 August</p>
              <h3>Independence Day: flag hoisting, rangoli and a cultural programme</h3>
              <p>Faculty, staff and guests gathered for the flag hoisting, followed by patriotic songs, dance performances and a rangoli made by the students.</p>
              <span className="link-arrow link-arrow--sm">Read more <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            </div>
          </article>

          <article className="post reveal" data-reveal="up" data-delay="240" data-cursor="card">
            <div className="post__img"><Image src="/images/function6.jpeg" alt="Senior students dressed in sarees for Ethnic Day" width={640} height={400} /></div>
            <div className="post__body">
              <p className="post__meta"><span className="pill">Cultural</span> Ethnic Day</p>
              <h3>Ethnic Day turns the stage into a runway</h3>
              <p>Senior students walked the stage in sarees and traditional wear, part of a cultural programme that ran alongside music and dance performances.</p>
              <span className="link-arrow link-arrow--sm">Read more <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
