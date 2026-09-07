export default function Lightbox() {
  return (
    <div className="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" hidden>
      <button className="lightbox__close" id="lbClose" aria-label="Close">&times;</button>
      <button className="lightbox__nav lightbox__nav--prev" id="lbPrev" aria-label="Previous photo">&#8249;</button>
      <button className="lightbox__nav lightbox__nav--next" id="lbNext" aria-label="Next photo">&#8250;</button>
      <figure className="lightbox__fig"><img id="lbImg" alt="" /><figcaption id="lbCap"></figcaption></figure>
    </div>
  );
}
