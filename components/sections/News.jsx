import Image from "next/image";
import Link from "next/link";

const POST_CLASS = "post flex flex-col overflow-hidden bg-card border border-line-2 rounded-lg";
const IMG_WRAP_CLASS = "post__img overflow-hidden aspect-[16/10]";
const BODY_CLASS = "post__body p-[24px_24px_26px] flex flex-col flex-1";
const META_CLASS = "post__meta flex items-center gap-2.5 text-[12.5px] text-muted font-semibold mb-3";
const H3_CLASS = "text-xl leading-[1.24] mb-2.5";
const P_CLASS = "text-[14.3px] text-muted leading-[1.6]";

export default function News() {
  return (
    <section className="py-[clamp(48px,6vw,90px)] relative" id="news">
      <div className="w-full max-w-(--container-wrap) mx-auto px-[clamp(20px,4vw,40px)]">
        <header className="sec-head sec-head--split">
          <div>
            <p className="eyebrow reveal" data-reveal="up">News &amp; events</p>
            <h2 className="text-[clamp(30px,4.6vw,54px)] split" data-reveal="split">What has been happening on campus</h2>
          </div>
        </header>

        <div className="news__grid grid grid-cols-3 gap-6 max-[1080px]:grid-cols-2 max-[640px]:grid-cols-1">
          <article className={POST_CLASS + " reveal"} data-reveal="up" data-cursor="card">
            <div className={IMG_WRAP_CLASS}><Image src="/indo/certi-distribution.jpeg" alt="A student receiving a prize at the GK quiz competition" width={640} height={400} className="w-full h-full object-cover" /></div>
            <div className={BODY_CLASS}>
              <p className={META_CLASS}><span className="pill pill--red">Celebration</span> Quiz week</p>
              <h3 className={H3_CLASS}>General Knowledge quiz brings out the school&rsquo;s sharpest minds</h3>
              <p className={P_CLASS}>Students across classes competed in an organised GK quiz, with certificates and medals awarded on stage in front of the whole school.</p>
              <Link href="/life" className="link-arrow link-arrow--sm" data-cursor="link">Read more <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
            </div>
          </article>

          <article className={POST_CLASS + " reveal"} data-reveal="up" data-delay="120" data-cursor="card">
            <div className={IMG_WRAP_CLASS}><Image src="/indo/republicDay.jpeg" alt="Staff and guests at the Independence Day flag hoisting ceremony" width={640} height={400} className="w-full h-full object-cover" /></div>
            <div className={BODY_CLASS}>
              <p className={META_CLASS}><span className="pill">Assembly</span> 15 August</p>
              <h3 className={H3_CLASS}>Independence Day: flag hoisting, rangoli and a cultural programme</h3>
              <p className={P_CLASS}>Faculty, staff and guests gathered for the flag hoisting, followed by patriotic songs, dance performances and a rangoli made by the students.</p>
              <Link href="/life" className="link-arrow link-arrow--sm" data-cursor="link">Read more <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
            </div>
          </article>

          <article className={POST_CLASS + " reveal"} data-reveal="up" data-delay="240" data-cursor="card">
            <div className={IMG_WRAP_CLASS}><Image src="/indo/function1.jpeg" alt="Senior students dressed in sarees for Ethnic Day" width={640} height={400} className="w-full h-full object-cover" /></div>
            <div className={BODY_CLASS}>
              <p className={META_CLASS}><span className="pill">Cultural</span> Ethnic Day</p>
              <h3 className={H3_CLASS}>Ethnic Day turns the stage into a runway</h3>
              <p className={P_CLASS}>Senior students walked the stage in sarees and traditional wear, part of a cultural programme that ran alongside music and dance performances.</p>
              <Link href="/life" className="link-arrow link-arrow--sm" data-cursor="link">Read more <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
