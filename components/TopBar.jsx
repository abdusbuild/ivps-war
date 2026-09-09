export default function TopBar() {
  return (
    <div className="relative z-60 bg-brand-900 text-white/[.82] text-[13px]" id="topbar">
      <div className="w-full max-w-(--container-wrap) mx-auto px-[clamp(20px,4vw,40px)] flex items-center justify-between gap-5 h-10 max-[860px]:justify-center max-[480px]:h-auto max-[480px]:py-2">
        <p className="m-0 flex items-center gap-[9px] flex-wrap justify-center text-center max-[480px]:gap-x-[6px] max-[480px]:gap-y-1 max-[480px]:text-[11.5px] max-[480px]:leading-[1.4]">
          <span className="pulse"></span> Admissions open for session <strong className="text-red-400">2026&ndash;27</strong> <span className="max-[480px]:hidden">&middot; limited seats per class</span>
        </p>
        <div className="flex gap-[22px] max-[860px]:hidden">
          <a href="tel:+918002730317" className="flex items-center gap-[7px] opacity-80 transition-opacity duration-200 hover:opacity-100 hover:text-gold-400">
            <svg className="w-[14px] h-[14px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
            8002 730 317
          </a>
          <a href="mailto:ivps786@gmail.com" className="flex items-center gap-[7px] opacity-80 transition-opacity duration-200 hover:opacity-100 hover:text-gold-400">
            <svg className="w-[14px] h-[14px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6.5h18v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11z" /><path d="m3.5 6.8 8.5 6.4 8.5-6.4" /></svg>
            ivps786@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
