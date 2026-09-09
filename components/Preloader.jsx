import Image from "next/image";

export default function Preloader() {
  return (
    <div className="preloader" id="preloader" aria-hidden="true">
      <div className="preloader__glow" />
      <div className="preloader__inner">
        <div className="preloader__mark">
          <span className="preloader__ring preloader__ring--outer"></span>
          <span className="preloader__ring preloader__ring--inner"></span>
          <span className="preloader__logo-frame">
            <Image
              src="/indo/logo.png"
              alt="Indo Valley Public School crest"
              width={220}
              height={220}
              priority
              className="preloader__logo"
            />
          </span>
        </div>

        <div className="preloader__word">
          <div className="preloader__word-row">
            <span>Indo</span>
            <span>Valley</span>
          </div>
          <div className="preloader__word-row preloader__word-row--sub">
            <span>Public</span>
            <span>School</span>
          </div>
        </div>

        <div className="preloader__tag">English Medium &middot; CBSE</div>

        <div className="preloader__bar">
          <i></i>
        </div>
      </div>
    </div>
  );
}
