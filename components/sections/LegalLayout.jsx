export default function LegalLayout({ eyebrow, title, lede, updated, toc = [], children }) {
  return (
    <section className="py-[clamp(48px,6vw,90px)] relative">
      <div className="w-full max-w-(--container-wrap) mx-auto px-[clamp(20px,4vw,40px)]">
        <header className="legal__head">
          <p className="eyebrow reveal" data-reveal="up">
            {eyebrow}
          </p>
          <h1 className="text-[clamp(30px,4.6vw,54px)] split" data-reveal="split">{title}</h1>
          {lede && (
            <p className="text-text-2 text-[clamp(16.5px,1.6vw,19px)] leading-[1.72] reveal" data-reveal="up" data-delay="120">
              {lede}
            </p>
          )}
          {updated && (
            <p className="legal__updated reveal" data-reveal="up" data-delay="180">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              Last updated {updated}
            </p>
          )}
        </header>

        <div className="legal__in">
          {toc.length > 0 && (
            <nav className="legal__toc reveal" data-reveal="up" aria-label="Sections on this page">
              <span>On this page</span>
              {toc.map((t) => (
                <a key={t.id} href={`#${t.id}`}>
                  {t.label}
                </a>
              ))}
            </nav>
          )}

          <div className="legal__body reveal max-w-[74ch]" data-reveal="up" data-delay="120">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
