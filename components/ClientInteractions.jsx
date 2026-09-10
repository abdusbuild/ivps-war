"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ClientInteractions() {
  const sweepRef = useRef(function () {});
  const pathname = usePathname();

  // ── One-time, page-independent setup (persistent layout: preloader,
  // theme toggle, mobile menu, sticky nav / scroll progress). Runs once
  // for the life of the app shell, never re-fires on client-side route
  // changes because these elements live in the root layout, not in the
  // per-page `children`.
  useEffect(() => {
    // Guard against React Strict Mode's dev double-invoke re-running this
    // whole imperative setup (duplicate observers/listeners/rAF loops).
    if (typeof window !== "undefined" && window.__ivpsInteractionsBooted) return;
    if (typeof window !== "undefined") window.__ivpsInteractionsBooted = true;

    var $ = function (s, c) { return (c || document).querySelector(s); };
    var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
    var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var root = document.documentElement;

    /* ── Preloader ─────────────────────────────────────────── */
    function bootDone() {
      var pl = $("#preloader");
      if (pl) pl.classList.add("is-done");
      document.body.classList.add("is-ready");
    }
    window.addEventListener("load", function () {
      setTimeout(bootDone, REDUCED ? 0 : 1500);
    });
    setTimeout(function () {
      if (!document.body.classList.contains("is-ready")) bootDone();
    }, 4200);

    /* ── Theme ─────────────────────────────────────────────── */
    var stored = null;
    try { stored = localStorage.getItem("ivps-theme"); } catch (e) {}
    root.setAttribute("data-theme", stored === "dark" ? "dark" : "light");
    $$(".js-theme-toggle").forEach(function (themeBtn) {
      themeBtn.addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem("ivps-theme", next); } catch (e) {}
      });
    });

    /* ── Year ──────────────────────────────────────────────── */
    var y = $("#year"); if (y) y.textContent = new Date().getFullYear();

    /* ── Nav: stuck state, progress, pill, back-to-top, parallax ── */
    var nav = $("#nav");
    var navProgress = $("#navProgress");
    var toTop = $("#toTop");
    var toTopRing = $("#toTopProgress");
    var navLinks = $$("#navMenu a");

    function onScroll() {
      sweepRef.current();
      var sc = window.scrollY || document.documentElement.scrollTop;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var pct = max > 0 ? sc / max : 0;

      if (nav) nav.classList.toggle("is-stuck", sc > 8);
      if (navProgress) navProgress.style.width = pct * 100 + "%";
      if (toTop) {
        toTop.classList.toggle("is-on", sc > 500);
        if (toTopRing) toTopRing.style.strokeDashoffset = String(126 - 126 * pct);
      }

      $$("[data-parallax]").forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > window.innerHeight + 200) return;
        var amt = parseFloat(el.getAttribute("data-parallax"));
        var off = (r.top + r.height / 2 - window.innerHeight / 2) * amt;
        el.style.setProperty("--py", off.toFixed(1) + "px");
        if (!REDUCED) el.style.transform = "translateY(" + off.toFixed(1) + "px)";
      });
    }
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { onScroll(); ticking = false; });
    }, { passive: true });
    onScroll();

    if (toTop) toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: REDUCED ? "auto" : "smooth" });
    });

    (function () {
      var menu = $("#navMenu"), pill = $("#navPill");
      if (!menu || !pill) return;
      navLinks.forEach(function (a) {
        a.addEventListener("mouseenter", function () {
          pill.style.width = a.offsetWidth + "px";
          pill.style.transform = "translateX(" + a.offsetLeft + "px)";
        });
      });
    })();

    /* ── Mobile menu ───────────────────────────────────────── */
    (function () {
      var burger = $("#burger"), mm = $("#mobileMenu");
      if (!burger || !mm) return;
      function toggle(open) {
        burger.classList.toggle("is-open", open);
        mm.classList.toggle("is-open", open);
        mm.setAttribute("aria-hidden", open ? "false" : "true");
        burger.setAttribute("aria-expanded", open ? "true" : "false");
        document.body.classList.toggle("is-locked", open);
        document.body.classList.toggle("nav-open", open);
      }
      burger.addEventListener("click", function () { toggle(!mm.classList.contains("is-open")); });
      $$("a", mm).forEach(function (a) { a.addEventListener("click", function () { toggle(false); }); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") toggle(false); });
    })();

    /* ── Enquire popup ─────────────────────────────────────── */
    (function () {
      var btn = $("#enquireToggle"), panel = $("#enquirePanel"), closeBtn = $("#enquireClose");
      if (!btn || !panel) return;
      function toggle(open) {
        panel.hidden = !open;
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        btn.classList.toggle("is-open", open);
      }
      btn.addEventListener("click", function () { toggle(panel.hidden); });
      if (closeBtn) closeBtn.addEventListener("click", function () { toggle(false); });
      document.addEventListener("click", function (e) {
        if (panel.hidden || panel.contains(e.target) || btn.contains(e.target)) return;
        toggle(false);
      });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") toggle(false); });
    })();

    /* ── Smooth anchor scrolling with sticky-nav offset ────── */
    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top: top, behavior: REDUCED ? "auto" : "smooth" });
    });
  }, []);

  // ── Per-route setup: everything that reads or wires up content from
  // the current page (`children`). Next.js keeps this component mounted
  // across client-side navigations, so anything that only queried the
  // DOM once at first mount would silently stop working for pages other
  // than the one the user first loaded (reveal-on-scroll, count-up,
  // accordions, gallery filter/lightbox, the testimonial slider, the
  // enquiry form, hero-only widgets). Re-running this on every pathname
  // change — and fully tearing down what it wired up beforehand — keeps
  // it correct no matter which page was loaded first.
  useEffect(() => {
    var $ = function (s, c) { return (c || document).querySelector(s); };
    var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
    var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var FINE = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    var root = document.documentElement;
    var cleanups = [];

    /* ── Swipe helper (touch + mouse drag, via Pointer Events) ── */
    function bindSwipe(el, onSwipe) {
      if (!el) return function () {};
      var x0 = null, y0 = null, id = null;

      function down(e) {
        x0 = e.clientX; y0 = e.clientY; id = e.pointerId;
        try { el.setPointerCapture(id); } catch (err) {}
      }
      function up(e) {
        if (x0 === null || e.pointerId !== id) return;
        var dx = e.clientX - x0, dy = e.clientY - y0;
        x0 = null; y0 = null; id = null;
        if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) onSwipe(dx < 0 ? 1 : -1);
      }
      function cancel() { x0 = null; y0 = null; id = null; }

      el.addEventListener("pointerdown", down);
      el.addEventListener("pointerup", up);
      el.addEventListener("pointercancel", cancel);
      return function () {
        el.removeEventListener("pointerdown", down);
        el.removeEventListener("pointerup", up);
        el.removeEventListener("pointercancel", cancel);
      };
    }

    /* ── Magnetic buttons ──────────────────────────────────── */
    if (FINE && !REDUCED) {
      $$(".magnetic").forEach(function (el) {
        function onMove(e) {
          var r = el.getBoundingClientRect();
          var x = e.clientX - r.left - r.width / 2;
          var v = e.clientY - r.top - r.height / 2;
          el.style.transform = "translate(" + x * 0.22 + "px," + v * 0.32 + "px)";
        }
        function onLeave() { el.style.transform = ""; }
        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);
        cleanups.push(function () {
          el.removeEventListener("mousemove", onMove);
          el.removeEventListener("mouseleave", onLeave);
          el.style.transform = "";
        });
      });
    }

    /* ── Reveal on scroll ──────────────────────────────────── */
    var pendingReveals = $$(".reveal");

    function fire(el) {
      var i = pendingReveals.indexOf(el);
      if (i === -1) return;
      pendingReveals.splice(i, 1);
      revealIO.unobserve(el);
      var d = parseInt(el.getAttribute("data-delay") || "0", 10);
      setTimeout(function () { el.classList.add("is-in"); }, REDUCED ? 0 : d);
    }

    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting || en.boundingClientRect.bottom < 0) fire(en.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px" });
    pendingReveals.forEach(function (el) { revealIO.observe(el); });

    function sweepReveals() {
      for (var i = pendingReveals.length - 1; i >= 0; i--) {
        var r = pendingReveals[i].getBoundingClientRect();
        if (r.top < window.innerHeight * 0.88) fire(pendingReveals[i]);
      }
    }
    sweepRef.current = sweepReveals;
    sweepReveals();
    cleanups.push(function () {
      revealIO.disconnect();
      sweepRef.current = function () {};
    });

    /* ── Split-text headings ───────────────────────────────── */
    var splitObservers = [];
    $$('[data-reveal="split"]').forEach(function (h) {
      var words = h.textContent.trim().split(/\s+/);
      h.textContent = "";
      words.forEach(function (w, wi) {
        var span = document.createElement("span");
        span.style.display = "inline-block";
        span.style.whiteSpace = "nowrap";
        w.split("").forEach(function (c, ci) {
          var ch = document.createElement("span");
          ch.className = "ch";
          ch.textContent = c;
          ch.style.transitionDelay = (wi * 3 + ci) * 14 + "ms";
          span.appendChild(ch);
        });
        h.appendChild(span);
        if (wi < words.length - 1) h.appendChild(document.createTextNode(" "));
      });
      var io = new IntersectionObserver(function (en, o) {
        if (en[0].isIntersecting) { h.classList.add("is-in"); o.disconnect(); }
      }, { threshold: 0.25 });
      io.observe(h);
      splitObservers.push(io);
    });
    cleanups.push(function () { splitObservers.forEach(function (io) { io.disconnect(); }); });

    /* ── Count-up ──────────────────────────────────────────── */
    var countIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        var target = parseFloat(el.getAttribute("data-count"));
        var suffix = el.getAttribute("data-suffix") || "";
        var dur = 1600, t0 = null;
        function step(ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 4);
          el.textContent = Math.round(target * eased).toLocaleString("en-IN") + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        if (REDUCED) el.textContent = target.toLocaleString("en-IN") + suffix;
        else requestAnimationFrame(step);
        countIO.unobserve(el);
      });
    }, { threshold: 0.5 });
    $$("[data-count]").forEach(function (el) { countIO.observe(el); });
    cleanups.push(function () { countIO.disconnect(); });

    /* ── Hero word rotator ─────────────────────────────────── */
    (function () {
      var wrap = $("#rotator");
      if (!wrap || REDUCED) return;
      var items = $$("b", wrap);
      var i = 0;
      var timer = setInterval(function () {
        items[i].classList.remove("is-on");
        items[i].classList.add("is-out");
        var prev = items[i];
        setTimeout(function () { prev.classList.remove("is-out"); }, 650);
        i = (i + 1) % items.length;
        items[i].classList.add("is-on");
      }, 2600);
      cleanups.push(function () { clearInterval(timer); });
    })();

    /* ── Hero particles ────────────────────────────────────── */
    (function () {
      var cv = $("#particles");
      if (!cv || REDUCED) return;
      var ctx = cv.getContext("2d");
      var pts = [], W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
      var rafId = null;

      function size() {
        var r = cv.getBoundingClientRect();
        W = r.width; H = r.height;
        cv.width = W * dpr; cv.height = H * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        var n = Math.round(Math.min(60, W / 22));
        pts = [];
        for (var i = 0; i < n; i++) {
          pts.push({
            x: Math.random() * W, y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
            r: Math.random() * 1.9 + 0.7, a: Math.random() * 0.4 + 0.18,
          });
        }
      }
      function draw() {
        ctx.clearRect(0, 0, W, H);
        var dark = root.getAttribute("data-theme") === "dark";
        for (var i = 0; i < pts.length; i++) {
          var p = pts[i];
          p.x += p.vx; p.y += p.vy;
          if (p.x < -10) p.x = W + 10; if (p.x > W + 10) p.x = -10;
          if (p.y < -10) p.y = H + 10; if (p.y > H + 10) p.y = -10;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = dark ? "rgba(255,209,102," + p.a + ")" : "rgba(28,78,158," + p.a + ")";
          ctx.fill();
        }
        rafId = requestAnimationFrame(draw);
      }
      size(); draw();
      function onResize() { size(); }
      window.addEventListener("resize", onResize);
      cleanups.push(function () {
        if (rafId) cancelAnimationFrame(rafId);
        window.removeEventListener("resize", onResize);
      });
    })();

    /* ── Hero image slider ─────────────────────────────────── */
    (function () {
      var track = $("#heroTrack");
      if (!track) return;
      var slides = $$(".hero__slide", track);
      var bars = $$("#heroBars i");
      var countEl = $("#heroCount");
      var prevBtn = $("#heroPrev"), nextBtn = $("#heroNext");
      var i = 0, timer = null, DUR = 6000;

      function pad(n) { return n < 10 ? "0" + n : "" + n; }

      function render() {
        track.style.transform = "translateX(" + -i * 100 + "%)";
        if (countEl) countEl.textContent = pad(i + 1) + " / " + pad(slides.length);
        bars.forEach(function (bar, k) {
          bar.style.transition = "none";
          bar.style.width = k < i ? "100%" : "0%";
        });
      }

      function playBar() {
        if (REDUCED || !bars[i]) return;
        var bar = bars[i];
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            bar.style.transition = "width " + DUR + "ms linear";
            bar.style.width = "100%";
          });
        });
      }

      function go(n) {
        i = (n + slides.length) % slides.length;
        render();
        playBar();
      }

      function restart() {
        clearInterval(timer);
        if (!REDUCED) timer = setInterval(function () { go(i + 1); }, DUR);
      }

      function onPrev() { go(i - 1); restart(); }
      function onNext() { go(i + 1); restart(); }
      if (prevBtn) prevBtn.addEventListener("click", onPrev);
      if (nextBtn) nextBtn.addEventListener("click", onNext);

      var unbindSwipe = bindSwipe(track, function (dir) { go(i + dir); restart(); });

      go(0); restart();
      cleanups.push(function () {
        clearInterval(timer);
        if (prevBtn) prevBtn.removeEventListener("click", onPrev);
        if (nextBtn) nextBtn.removeEventListener("click", onNext);
        unbindSwipe();
      });
    })();

    /* ── Card tilt + glow-follow ───────────────────────────── */
    if (FINE && !REDUCED) {
      $$(".tilt").forEach(function (card) {
        card.addEventListener("mousemove", function (e) {
          var r = card.getBoundingClientRect();
          var px = (e.clientX - r.left) / r.width;
          var py = (e.clientY - r.top) / r.height;
          card.style.setProperty("--mx", px * 100 + "%");
          card.style.setProperty("--my", py * 100 + "%");
          card.style.transform =
            "perspective(900px) rotateX(" + ((0.5 - py) * 5).toFixed(2) + "deg) rotateY(" +
            ((px - 0.5) * 5).toFixed(2) + "deg) translateY(-4px)";
        });
        card.addEventListener("mouseleave", function () { card.style.transform = ""; });
      });
    }

    /* ── Academic stages accordion + rail ──────────────────── */
    (function () {
      var stages = $$(".stage");
      var rail = $("#stageProgress");
      if (!stages.length) return;

      function updateRail() {
        var open = stages.filter(function (s) { return s.classList.contains("is-open"); });
        var idx = open.length ? stages.indexOf(open[open.length - 1]) : -1;
        var pct = ((idx + 1) / stages.length) * 100;
        if (rail) rail.style.height = pct + "%";
      }

      stages.forEach(function (st) {
        var head = $(".stage__head", st);
        head.addEventListener("click", function () {
          var open = st.classList.contains("is-open");
          stages.forEach(function (o) {
            o.classList.remove("is-open");
            $(".stage__head", o).setAttribute("aria-expanded", "false");
          });
          if (!open) {
            st.classList.add("is-open");
            head.setAttribute("aria-expanded", "true");
          }
          updateRail();
        });
      });

      var stagesWrap = $("#stages");
      if (stagesWrap) {
        var io = new IntersectionObserver(function (en, o) {
          if (en[0].isIntersecting) { updateRail(); o.disconnect(); }
        }, { threshold: 0.2 });
        io.observe(stagesWrap);
        cleanups.push(function () { io.disconnect(); });
      }
    })();

    /* ── Gallery filter ────────────────────────────────────── */
    (function () {
      var filters = $$(".filter");
      var shots = $$(".shot");
      if (!filters.length) return;
      filters.forEach(function (btn) {
        btn.addEventListener("click", function () {
          filters.forEach(function (b) { b.classList.remove("is-active"); b.setAttribute("aria-selected", "false"); });
          btn.classList.add("is-active");
          btn.setAttribute("aria-selected", "true");
          var f = btn.getAttribute("data-filter");
          shots.forEach(function (s, i) {
            var show = f === "all" || s.getAttribute("data-cat") === f;
            if (show) {
              s.classList.remove("is-hidden");
              s.style.opacity = "0";
              s.style.transform = "scale(.95)";
              setTimeout(function () { s.style.opacity = ""; s.style.transform = ""; }, 30 + i * 35);
            } else {
              s.style.opacity = "0";
              s.style.transform = "scale(.95)";
              setTimeout(function () { s.classList.add("is-hidden"); }, 260);
            }
          });
        });
      });
    })();

    /* ── Lightbox (image shots only — the video tile plays inline) */
    (function () {
      var lb = $("#lightbox"), img = $("#lbImg"), cap = $("#lbCap");
      if (!lb) return;
      var shots = $$(".shot").filter(function (s) { return $("img", s); });
      var idx = 0;

      function visible() { return shots.filter(function (s) { return !s.classList.contains("is-hidden"); }); }
      function show(i) {
        var list = visible();
        if (!list.length) return;
        idx = (i + list.length) % list.length;
        var fig = list[idx];
        var im = $("img", fig);
        img.src = im.src;
        img.alt = im.alt;
        var t = $("figcaption strong", fig), s = $("figcaption span", fig);
        cap.textContent = (t ? t.textContent : "") + (s ? " — " + s.textContent : "");
      }
      function open(i) { show(i); lb.hidden = false; document.body.classList.add("is-locked"); }
      function close() { lb.hidden = true; document.body.classList.remove("is-locked"); }

      var shotHandlers = shots.map(function (fig) {
        function onClick() { open(visible().indexOf(fig)); }
        fig.addEventListener("click", onClick);
        return { fig: fig, onClick: onClick };
      });

      var closeBtn = $("#lbClose"), prevBtn = $("#lbPrev"), nextBtn = $("#lbNext");
      function onPrev() { show(idx - 1); }
      function onNext() { show(idx + 1); }
      function onBackdropClick(e) { if (e.target === lb) close(); }
      function onKeydown(e) {
        if (lb.hidden) return;
        if (e.key === "Escape") close();
        if (e.key === "ArrowLeft") show(idx - 1);
        if (e.key === "ArrowRight") show(idx + 1);
      }
      if (closeBtn) closeBtn.addEventListener("click", close);
      if (prevBtn) prevBtn.addEventListener("click", onPrev);
      if (nextBtn) nextBtn.addEventListener("click", onNext);
      lb.addEventListener("click", onBackdropClick);
      document.addEventListener("keydown", onKeydown);

      cleanups.push(function () {
        shotHandlers.forEach(function (h) { h.fig.removeEventListener("click", h.onClick); });
        if (closeBtn) closeBtn.removeEventListener("click", close);
        if (prevBtn) prevBtn.removeEventListener("click", onPrev);
        if (nextBtn) nextBtn.removeEventListener("click", onNext);
        lb.removeEventListener("click", onBackdropClick);
        document.removeEventListener("keydown", onKeydown);
      });
    })();

    /* ── Testimonial slider ────────────────────────────────── */
    (function () {
      var track = $("#voicesTrack"), dotsWrap = $("#voicesDots");
      if (!track) return;
      var slides = $$(".voice", track);
      var i = 0, timer = null;

      slides.forEach(function (_, n) {
        var b = document.createElement("button");
        b.type = "button";
        b.setAttribute("aria-label", "Testimonial " + (n + 1));
        b.addEventListener("click", function () { go(n); restart(); });
        dotsWrap.appendChild(b);
      });
      var dots = $$("button", dotsWrap);

      function go(n) {
        i = (n + slides.length) % slides.length;
        track.style.transform = "translateX(" + -i * 100 + "%)";
        dots.forEach(function (d, k) { d.classList.toggle("is-on", k === i); });
      }
      function restart() {
        clearInterval(timer);
        if (!REDUCED) timer = setInterval(function () { go(i + 1); }, 6500);
      }
      var prevBtn = $("#voicesPrev"), nextBtn = $("#voicesNext");
      function onPrev() { go(i - 1); restart(); }
      function onNext() { go(i + 1); restart(); }
      if (prevBtn) prevBtn.addEventListener("click", onPrev);
      if (nextBtn) nextBtn.addEventListener("click", onNext);

      var vp = $("#voicesViewport");
      var unbindSwipe = bindSwipe(vp, function (dir) { go(i + dir); restart(); });

      go(0); restart();
      cleanups.push(function () {
        clearInterval(timer);
        if (prevBtn) prevBtn.removeEventListener("click", onPrev);
        if (nextBtn) nextBtn.removeEventListener("click", onNext);
        unbindSwipe();
      });
    })();

    /* ── Enquiry form ──────────────────────────────────────── */
    (function () {
      var form = $("#enquiryForm");
      if (!form) return;
      var ok = $("#formOk");
      var err = $("#formErr");
      var submitBtn = $("button[type=submit]", form);

      function fail(field, msg) {
        field.closest(".field").classList.add("is-bad");
        $("em", field.closest(".field")).textContent = msg;
      }
      function clear(field) {
        field.closest(".field").classList.remove("is-bad");
        $("em", field.closest(".field")).textContent = "";
      }
      $$("input,select,textarea", form).forEach(function (f) {
        f.addEventListener("input", function () { clear(f); });
        f.addEventListener("change", function () { clear(f); });
      });

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var bad = false;
        var name = $("#f-name"), phone = $("#f-phone"), email = $("#f-email"),
          town = $("#f-town"), cls = $("#f-class"), msg = $("#f-msg");

        if (name.value.trim().length < 2) { fail(name, "Please enter the full name."); bad = true; }
        if (!/^[0-9+\-\s()]{10,15}$/.test(phone.value.trim())) { fail(phone, "Enter a valid phone number."); bad = true; }
        if (email.value.trim() && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim())) { fail(email, "Enter a valid email address."); bad = true; }
        if (town.value.trim().length < 2) { fail(town, "Which village or town?"); bad = true; }
        if (!cls.value) { fail(cls, "Choose a class."); bad = true; }

        if (bad) {
          var first = $(".field.is-bad input, .field.is-bad select", form);
          if (first) first.focus();
          return;
        }

        if (err) err.hidden = true;
        if (submitBtn) submitBtn.disabled = true;

        fetch("/api/enquiry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.value.trim(),
            phone: phone.value.trim(),
            email: email.value.trim(),
            town: town.value.trim(),
            class: cls.value,
            message: msg ? msg.value.trim() : "",
          }),
        })
          .then(function (res) { return res.json().then(function (data) { return { ok: res.ok, data: data }; }); })
          .then(function (result) {
            if (!result.ok) throw new Error((result.data && result.data.error) || "Send failed.");
            ok.hidden = false;
            form.reset();
            setTimeout(function () { ok.hidden = true; }, 8000);
          })
          .catch(function () {
            if (err) err.hidden = false;
          })
          .finally(function () {
            if (submitBtn) submitBtn.disabled = false;
          });
      });
    })();

    return function () {
      cleanups.forEach(function (fn) { fn(); });
    };
  }, [pathname]);

  return null;
}
