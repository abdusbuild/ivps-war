"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function WelcomeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let shown = false;
    try {
      shown = sessionStorage.getItem("ivps-welcome-shown") === "1";
    } catch (e) {}
    if (shown) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Show 2-3 minutes after the visitor lands, not right on load.
    const delay = reduced ? 150 : 120000 + Math.random() * 60000;
    const timer = setTimeout(() => setOpen(true), delay);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.classList.add("welcome-modal-lock");
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("welcome-modal-lock");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function close() {
    setOpen(false);
    try {
      sessionStorage.setItem("ivps-welcome-shown", "1");
    } catch (e) {}
  }

  if (!open) return null;

  return (
    <div
      className="welcome-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcomeModalTitle"
    >
      <button
        className="welcome-modal__backdrop"
        aria-label="Close"
        tabIndex={-1}
        onClick={close}
      />
      <div className="welcome-modal__card">
        <button className="welcome-modal__close" aria-label="Close" onClick={close}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>

        <div className="welcome-modal__media">
          <Image
            src="/indo/school-building.jpeg"
            alt="Indo Valley Public School campus"
            fill
            sizes="(max-width: 760px) 100vw, 40vw"
            className="welcome-modal__img"
            priority
          />
          <div className="welcome-modal__media-veil" />
          <span className="welcome-modal__crest">
            <Image src="/indo/logo.png" alt="" width={56} height={56} />
          </span>
          <div className="welcome-modal__media-copy">
            <span className="welcome-modal__session">Session</span>
            <span className="welcome-modal__year">2026&ndash;27</span>
          </div>
        </div>

        <div className="welcome-modal__body">
          <span className="eyebrow">
            <span className="eyebrow__dot" />
            Admissions Open
          </span>
          <h2 id="welcomeModalTitle" className="welcome-modal__title">
            Begin their story at&nbsp;Indo&nbsp;Valley
          </h2>
          <p className="welcome-modal__lede">
            An English-medium CBSE school in War, Aurangabad &mdash; Nursery
            through Class X, with a limited number of seats remaining for the
            2026&ndash;2027 session.
          </p>

          <ul className="welcome-modal__points">
            <li>CBSE affiliated</li>
            <li>Nursery &ndash; Class X</li>
            <li>Transport available</li>
          </ul>

          <div className="welcome-modal__actions">
            <Link href="/admissions" className="btn btn--gold" onClick={close}>
              <span>Enquire now</span>
            </Link>
            <Link href="/admissions" className="btn btn--ghost" onClick={close}>
              <span>View admissions</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
