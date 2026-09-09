# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for Indo Valley Public School (CBSE school, War, Aurangabad, Bihar), built with Next.js 15 (App Router), React 19, and Tailwind CSS 4. The repo was recently converted from a static single-page `index.html` site (see `git log`) into multi-page Next.js routing — legacy static assets (`assets/`, `index.html`) are deleted but may still show in `git status` until committed.

## Commands

```
npm run dev      # start dev server (next dev)
npm run build    # production build
npm run start    # serve production build
npm run lint     # next lint
```

There is no test suite configured in this repo.

## Architecture

**Routing**: Every route under `app/*/page.js` is a thin wrapper — it sets route `metadata` (title/description) and composes one or more section components from `components/sections/`. Page components themselves contain no markup logic; all real content and layout lives in the section component.

**Persistent shell vs. per-page content**: `app/layout.js` renders the app chrome once (Preloader, TopBar, Nav, MobileMenu, Footer, FloatingActions, Lightbox, ClientInteractions) around `{children}`. Because this chrome is mounted at the root, it does **not** remount on client-side navigation between pages — only `children` (the page content) changes.

**`components/ClientInteractions.jsx` is the imperative interaction layer for the whole site.** It's a single client component with two `useEffect` blocks, and this split is deliberate:
- The first effect (empty deps `[]`) wires up things that belong to the persistent shell and must only ever run once: preloader timing, theme toggle, sticky-nav/scroll-progress, mobile menu, smooth-anchor scrolling. It guards against React Strict Mode's dev double-invoke via a `window.__ivpsInteractionsBooted` flag.
- The second effect (deps `[pathname]`, from `usePathname()`) wires up everything that depends on the current page's DOM — reveal-on-scroll, split-text headings, count-up numbers, hero slider/particles, card tilt, accordions, gallery filter + lightbox, testimonial slider, the enquiry form. It fully tears down all listeners/observers/timers via a `cleanups` array on every route change and re-runs, because these elements differ per page.

When adding a new interactive widget to a section component, hook it into the **second** effect (and add its teardown to `cleanups`) unless it's part of the fixed site chrome, in which case it belongs in the first.

All DOM wiring uses vanilla `querySelector`/`IntersectionObserver`/class toggling against `id`/`data-*` attributes and CSS classes (e.g. `.reveal`, `[data-reveal="split"]`, `[data-count]`, `.stage`, `.shot`, `.magnetic`, `.tilt`) rather than React state — section components just render the markup with the right ids/classes/data-attributes for this script to find.

**Styling**: Tailwind 4 via `@import "tailwindcss"` in `app/globals.css` (no `tailwind.config.js` — v4 uses CSS-based config). Design tokens (brand navy/gold/red palette, spacing, shadows) are CSS custom properties under `:root` in `globals.css`. Dark mode is **not** the OS `prefers-color-scheme` — it's a manual `data-theme="dark"` attribute on `<html>` toggled by the theme button in `Nav.jsx` / handled in `ClientInteractions.jsx`, backed by a `@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *))` override of Tailwind's default dark variant. Persisted to `localStorage` under `ivps-theme`.

**Path alias**: `@/*` maps to the repo root (`jsconfig.json`), e.g. `@/components/Nav`.

**Legal pages**: `app/privacy-policy`, `app/public-disclosure`, `app/terms-and-conditions` share a common `components/sections/LegalLayout.jsx` wrapper (eyebrow/title/lede/updated-date/table-of-contents/body) — new legal/policy pages should use this rather than building layout from scratch.

**Images**: `public/indo/` is the current image set referenced by components (e.g. `Nav.jsx` uses `/indo/logo.jpeg`). `public/images/` is an older/parallel image set — check which one a component actually references before assuming an asset is unused.
