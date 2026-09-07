"use client";

import { useEffect } from "react";

export default function ClientInteractions() {
  useEffect(() => {
    // Guard against React Strict Mode's dev double-invoke re-running this
    // whole imperative setup (duplicate observers/listeners/rAF loops).
    if (typeof window !== "undefined" && window.__ivpsInteractionsBooted) return;
    if (typeof window !== "undefined") window.__ivpsInteractionsBooted = true;

    var $ = function (s, c) { return (c || document).querySelector(s); };
    var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
    var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var FINE = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
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
    if (stored) {
      root.setAttribute("data-theme", stored);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      root.setAttribute("data-theme", "dark");
    }
    var themeBtn = $("#themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem("ivps-theme", next); } catch (e) {}
      });
    }

    /* ── Year ──────────────────────────────────────────────── */
    var y = $("#year"); if (y) y.textContent = new Date().getFullYear();

    /* ── Custom cursor ─────────────────────────────────────── */
    if (FINE && !REDUCED) {
      var cur = $("#cursor");
      var dot = $(".cursor__dot", cur);
      var ring = $(".cursor__ring", cur);
      var mx = window.innerWidth / 2, my = window.innerHeight / 2;
      var rx = mx, ry = my;

      document.addEventListener("mousemove", function (e) { mx = e.clientX; my = e.clientY; });
      (function loop() {
        rx += (mx - rx) * 0.16;
        ry += (my - ry) * 0.16;
        if (dot) dot.style.transform = "translate3d(" + mx + "px," + my + "px,0)";
        if (ring) ring.style.transform = "translate3d(" + rx + "px," + ry + "px,0)";
        requestAnimationFrame(loop);
      })();

      document.addEventListener("mouseover", function (e) {
        var t = e.target.closest("[data-cursor]");
        cur.classList.remove("is-link", "is-card", "is-zoom");
        if (t) cur.classList.add("is-" + t.getAttribute("data-cursor"));
      });
    }

    /* ── Magnetic buttons ──────────────────────────────────── */
    if (FINE && !REDUCED) {
      $$(".magnetic").forEach(function (el) {
        el.addEventListener("mousemove", function (e) {
          var r = el.getBoundingClientRect();
          var x = e.clientX - r.left - r.width / 2;
          var v = e.clientY - r.top - r.height / 2;
          el.style.transform = "translate(" + x * 0.22 + "px," + v * 0.32 + "px)";
        });
        el.addEventListener("mouseleave", function () { el.style.transform = ""; });
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

    /* ── Split-text headings ───────────────────────────────── */
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
      new IntersectionObserver(function (en, o) {
        if (en[0].isIntersecting) { h.classList.add("is-in"); o.disconnect(); }
      }, { threshold: 0.25 }).observe(h);
    });

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

    /* ── Hero word rotator ─────────────────────────────────── */
    (function () {
      var wrap = $("#rotator");
      if (!wrap || REDUCED) return;
      var items = $$("b", wrap);
      var i = 0;
      setInterval(function () {
        items[i].classList.remove("is-on");
        items[i].classList.add("is-out");
        var prev = items[i];
        setTimeout(function () { prev.classList.remove("is-out"); }, 650);
        i = (i + 1) % items.length;
        items[i].classList.add("is-on");
      }, 2600);
    })();

    /* ── Hero particles ────────────────────────────────────── */
    (function () {
      var cv = $("#particles");
      if (!cv || REDUCED) return;
      var ctx = cv.getContext("2d");
      var pts = [], W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);

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
        requestAnimationFrame(draw);
      }
      size(); draw();
      window.addEventListener("resize", size);
    })();

    /* ── Nav: stuck state, progress, active link, pill ─────── */
    var nav = $("#nav");
    var navProgress = $("#navProgress");
    var toTop = $("#toTop");
    var toTopRing = $("#toTopProgress");
    var sections = $$("main section[id]");
    var navLinks = $$("#navMenu a");

    function onScroll() {
      sweepReveals();
      var sc = window.scrollY || document.documentElement.scrollTop;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var pct = max > 0 ? sc / max : 0;

      if (nav) nav.classList.toggle("is-stuck", sc > 8);
      if (navProgress) navProgress.style.width = pct * 100 + "%";
      if (toTop) {
        toTop.classList.toggle("is-on", sc > 500);
        if (toTopRing) toTopRing.style.strokeDashoffset = String(126 - 126 * pct);
      }

      var current = "";
      sections.forEach(function (s) {
        if (s.getBoundingClientRect().top <= 140) current = s.id;
      });
      navLinks.forEach(function (a) {
        a.classList.toggle("is-active", a.getAttribute("href") === "#" + current);
      });

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
      }
      burger.addEventListener("click", function () { toggle(!mm.classList.contains("is-open")); });
      $$("a", mm).forEach(function (a) { a.addEventListener("click", function () { toggle(false); }); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") toggle(false); });
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
        new IntersectionObserver(function (en, o) {
          if (en[0].isIntersecting) { updateRail(); o.disconnect(); }
        }, { threshold: 0.2 }).observe(stagesWrap);
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

      shots.forEach(function (fig) {
        fig.addEventListener("click", function () { open(visible().indexOf(fig)); });
      });
      $("#lbClose").addEventListener("click", close);
      $("#lbPrev").addEventListener("click", function () { show(idx - 1); });
      $("#lbNext").addEventListener("click", function () { show(idx + 1); });
      lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
      document.addEventListener("keydown", function (e) {
        if (lb.hidden) return;
        if (e.key === "Escape") close();
        if (e.key === "ArrowLeft") show(idx - 1);
        if (e.key === "ArrowRight") show(idx + 1);
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
      $("#voicesPrev").addEventListener("click", function () { go(i - 1); restart(); });
      $("#voicesNext").addEventListener("click", function () { go(i + 1); restart(); });

      var x0 = null;
      var vp = $("#voicesViewport");
      vp.addEventListener("pointerdown", function (e) { x0 = e.clientX; });
      vp.addEventListener("pointerup", function (e) {
        if (x0 === null) return;
        var dx = e.clientX - x0;
        if (Math.abs(dx) > 45) { go(i + (dx < 0 ? 1 : -1)); restart(); }
        x0 = null;
      });

      go(0); restart();
    })();

    /* ── Enquiry form ──────────────────────────────────────── */
    (function () {
      var form = $("#enquiryForm");
      if (!form) return;
      var ok = $("#formOk");

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
          town = $("#f-town"), cls = $("#f-class");

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
        ok.hidden = false;
        form.reset();
        setTimeout(function () { ok.hidden = true; }, 8000);
      });
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

  return null;
}
