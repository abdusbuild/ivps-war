export default function Preloader() {
  return (
    <div className="preloader" id="preloader" aria-hidden="true">
      <div className="preloader__inner">
        <svg className="preloader__mark" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <path
            className="pl-shield"
            d="M50 6 L88 20 V50 C88 72 71 88 50 95 C29 88 12 72 12 50 V20 Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            className="pl-valley"
            d="M26 62 L40 40 L50 54 L62 32 L76 62"
            stroke="currentColor"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="preloader__word">
          <span>Indo</span> <span>Valley</span>
        </div>
        <div className="preloader__bar">
          <i></i>
        </div>
      </div>
    </div>
  );
}
