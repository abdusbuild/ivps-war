export default function Lightbox() {
  return (
    <div
      className="lightbox fixed inset-0 z-9990 grid place-items-center backdrop-blur-[10px] bg-[rgba(4,9,20,.94)]"
      style={{ padding: "5vh 6vw" }}
      id="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      hidden
    >
      <button
        className="lightbox__close absolute top-[22px] right-[22px] w-[46px] h-[46px] text-[26px] leading-none rounded-full grid place-items-center cursor-pointer text-white bg-white/10 border border-white/16"
        id="lbClose"
        aria-label="Close"
      >
        &times;
      </button>
      <button
        className="lightbox__nav lightbox__nav--prev absolute top-1/2 -mt-[26px] left-[18px] w-[52px] h-[52px] text-[30px] leading-none rounded-full grid place-items-center cursor-pointer text-white bg-white/10 border border-white/16"
        id="lbPrev"
        aria-label="Previous photo"
      >
        &#8249;
      </button>
      <button
        className="lightbox__nav lightbox__nav--next absolute top-1/2 -mt-[26px] right-[18px] w-[52px] h-[52px] text-[30px] leading-none rounded-full grid place-items-center cursor-pointer text-white bg-white/10 border border-white/16"
        id="lbNext"
        aria-label="Next photo"
      >
        &#8250;
      </button>
      <figure className="lightbox__fig m-0 max-w-full max-h-full grid gap-3.5 justify-items-center">
        <img id="lbImg" alt="" className="rounded-md" />
        <figcaption id="lbCap" className="text-white/80 text-sm text-center"></figcaption>
      </figure>
    </div>
  );
}
