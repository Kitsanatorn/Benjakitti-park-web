/* Main app: language (EN/TH), landing screen, hash routing, and the
   "Our Visit" + "The Park" tabs. All text comes from content.js.
   The game lives in game.js. */

(() => {
  const S = window.SITE;
  const TABS = ["visit", "play", "park"];
  const TAB_KEYS = { visit: "tabVisit", play: "tabPlay", park: "tabPark" };
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---------- Language ---------- */
  const LANGS = ["en", "th"];
  const LANG_KEY = "benjakitti-lang";
  let lang = (() => {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      return LANGS.includes(saved) ? saved : "en";
    } catch (e) {
      return "en";
    }
  })();
  document.documentElement.lang = lang;

  // Pick the current language from { en, th }; fall back to English if missing/empty.
  const isText = (v) => v && typeof v === "object" && ("en" in v || "th" in v);
  const t = (v) => {
    if (v == null) return "";
    if (!isText(v)) return String(v);
    const value = v[lang];
    return value != null && value !== "" ? value : (v.en ?? "");
  };
  const fill = (str, vars = {}) => str.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
  const ui = (key, vars) => fill(t(S.ui[key]) || key, vars);

  /* ---------- Shared helpers (also used by game.js) ---------- */
  const esc = (value) =>
    String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Minimal line icons (24×24, stroked with currentColor)
  const ICONS = {
    pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    train: '<rect x="5" y="3" width="14" height="13" rx="3"/><path d="M5 10h14M8.5 20l2-4M15.5 20l-2-4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    ticket: '<path d="M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v8a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2z"/><path d="M14 6.5v2M14 11v2M14 15.5v2"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/>',
    bridge: '<path d="M2 9h20M2 15h20M5 9v10M19 9v10M9 9v6M12 9v6M15 9v6"/>',
    pulse: '<path d="M3 12h4l3-7 4 14 3-7h4"/>',
    binoculars: '<circle cx="6.5" cy="16" r="3.5"/><circle cx="17.5" cy="16" r="3.5"/><path d="M10 16h4M4 13.5 6 5h3l1 8M20 13.5 18 5h-3l-1 8"/>',
    sunset: '<path d="M3 18h18M7 18a5 5 0 0 1 10 0M12 4v5M5.6 10.6 7 12M18.4 10.6 17 12M8 21.5h8"/>',
    route: '<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h7.5a3.5 3.5 0 0 0 0-7h-7a3.5 3.5 0 0 1 0-7H16"/>',
    landmark: '<path d="M3 21h18M5 21V10M9 21V10M15 21V10M19 21V10M2.5 10 12 4l9.5 6z"/>',
    camera: '<path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13.5" r="3.5"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-9 9"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    chevronLeft: '<path d="m15 5-7 7 7 7"/>',
    chevronRight: '<path d="m9 5 7 7-7 7"/>',
    pause: '<path d="M9 5v14M15 5v14"/>',
    play: '<path d="M7.5 5.5v13l11-6.5z"/>',
    replay: '<path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v5h5"/>'
  };
  const icon = (name, cls = "icon") =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICONS[name] || ""}</svg>`;

  // Image with a built-in labelled placeholder, shown if the file is missing.
  function photo(src, alt, { label = alt, eager = false, cls = "" } = {}) {
    const loading = eager ? 'fetchpriority="high"' : 'loading="lazy"';
    return `<div class="photo ${cls}">
      <img src="${esc(src)}" alt="${esc(alt)}" ${loading} decoding="async">
      ${placeholder(src, label)}
    </div>`;
  }
  const placeholder = (src, label) => `<span class="photo-missing" aria-hidden="true">
      ${icon("image", "photo-missing-icon")}
      <span>${esc(label)}</span>
      <small>${esc(ui("photoMissing", { src }))}</small>
    </span>`;

  // Escapes text, then turns **word** into a highlighted <strong>
  const emphasis = (text) => esc(text).replace(/\*\*(.+?)\*\*/g, '<strong class="hl">$1</strong>');

  // Small "แปลจากภาษาอังกฤษ" note under translated quotes (Thai only)
  const translatedNote = (translated) => {
    const note = translated && lang !== "en" ? ui("translatedNote") : "";
    return note && note !== "translatedNote" ? `<span class="tr-note">${esc(note)}</span>` : "";
  };

  // Monogram letter; skips Thai leading vowels (เ แ โ ใ ไ) so "เจ้าหน้าที่" gives "จ"
  const initial = (name) => name.replace(/^[เ-ไ]/, "").charAt(0);

  const markMissing = (img) => img.closest(".photo, .banner-photo")?.classList.add("is-missing");

  // Catch image load errors anywhere (errors don't bubble, so use capture).
  document.addEventListener(
    "error",
    (e) => { if (e.target instanceof HTMLImageElement) markMissing(e.target); },
    true
  );

  /* ---------- Fade/slide-in on scroll ---------- */
  const revealer = "IntersectionObserver" in window && !reducedMotion.matches
    ? new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          en.target.classList.add("is-visible");
          revealer.unobserve(en.target);
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 })
    : null;

  // instant = true when re-rendering for a language switch (no fade-in again)
  function observeReveals(root, instant = false) {
    root.querySelectorAll("[data-reveal]").forEach((el, i) => {
      if (!revealer || instant) return el.classList.add("is-visible");
      el.style.setProperty("--delay", `${(i % 3) * 70}ms`);
      revealer.observe(el);
    });
  }

  window.UI = { esc, photo, icon, reducedMotion, observeReveals, t, ui, fill, translatedNote, getLang: () => lang };

  /* ---------- Rendering ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);

  // Static HTML: elements marked data-ui / data-ui-aria get their text from content.js
  function renderChrome() {
    document.querySelectorAll("[data-ui]").forEach((el) => { el.textContent = ui(el.dataset.ui); });
    document.querySelectorAll("[data-ui-aria]").forEach((el) => { el.setAttribute("aria-label", ui(el.dataset.uiAria)); });
    document.querySelectorAll(".lang-switch [data-lang]").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    $("#footer").innerHTML = `<span>${esc(S.group)}</span><span aria-hidden="true">·</span><span>${esc(t(S.course))}</span>`;
  }

  // Landing photos are built once (so the crossfade keeps running); text is updated in place
  function renderLandingPhotos() {
    // All landing backgrounds load up front (eager) so the crossfade never flashes
    $("#landing-photo").innerHTML = S.landing.backgrounds
      .map((b, i) => `<div class="photo landing-slide${i === 0 ? " is-active" : ""}">
          <img src="${esc(b.src)}" alt="" ${i === 0 ? 'fetchpriority="high"' : ""} decoding="async">
          ${i === 0 ? placeholder(b.src, ui("heroPhoto")) : ""}
        </div>`)
      .join("");
    document.documentElement.style.setProperty("--bg-photo", `url("${encodeURI(S.backgroundPhoto)}")`);
  }

  function renderLandingText() {
    $("#landing-label").textContent = S.group;
    $("#landing-title").textContent = t(S.landing.title);
    $("#landing-subtitle").textContent = t(S.landing.subtitle);
    $("#explore-text").textContent = t(S.landing.button);
    $("#explore-icon").innerHTML = icon("arrowRight");
    $("#topbar-code").textContent = S.group;
    const first = $("#landing-photo .landing-slide img");
    if (first) first.alt = t(S.landing.backgrounds[0].alt);
    const ph = $("#landing-photo .photo-missing");
    if (ph) ph.outerHTML = placeholder(S.landing.backgrounds[0].src, ui("heroPhoto"));
  }

  const banner = (b) => `<header class="banner">
      <div class="banner-photo" aria-hidden="true"><img src="${esc(b.src)}" alt="" loading="lazy" decoding="async"></div>
      <div class="banner-text wrap">
        <p class="eyebrow eyebrow-light">${esc(t(b.eyebrow))}</p>
        <h2 class="banner-title">${esc(t(b.title))}</h2>
        <p class="banner-intro">${esc(t(b.intro))}</p>
      </div>
    </header>`;

  const sectionHead = (eyebrowKey, titleKey, id) => `<div class="section-head" data-reveal>
      <p class="eyebrow">${esc(ui(eyebrowKey))}</p>
      <h2 id="${id}">${esc(ui(titleKey))}</h2>
    </div>`;

  // Our Visit: the slideshow is built once; everything around it can be re-rendered
  function renderVisit() {
    const v = S.visit;
    const pad = (i) => String(i).padStart(2, "0");
    const slides = v.slides
      .map((s, i) => `<figure class="show-slide photo" data-i="${i}" aria-hidden="true">
          <img class="show-blur" data-src="${esc(s.src)}" alt="" decoding="async">
          <img class="show-img" data-src="${esc(s.src)}" alt="" decoding="async">
          ${placeholder(s.src, t(s.caption))}
        </figure>`)
      .join("");

    $("#panel-visit").innerHTML = `
      <div id="visit-banner"></div>
      <div class="wrap">
        <section class="section" aria-labelledby="h-photos">
          <div id="visit-photos-head"></div>
          <div class="show" role="region" data-reveal>
            <div class="show-stage" tabindex="0">
              ${slides}
              <div class="show-shade" aria-hidden="true"></div>
              <div class="show-progress" aria-hidden="true"><i></i></div>
              <p class="show-caption" aria-live="off"></p>
            </div>
            <div class="show-controls">
              <span class="show-count" aria-hidden="true"><b>01</b> / ${pad(v.slides.length)}</span>
              <div class="show-buttons">
                <button type="button" class="icon-btn" data-step="-1">${icon("chevronLeft")}</button>
                <button type="button" class="icon-btn" data-toggle>${icon("pause")}</button>
                <button type="button" class="icon-btn" data-step="1">${icon("chevronRight")}</button>
              </div>
            </div>
          </div>
        </section>
        <div id="visit-rest"></div>
      </div>`;

    slideshow = createSlideshow($("#panel-visit .show"), v.slides);
    observeReveals($("#panel-visit .section"));
    renderVisitText(false);
  }

  function renderVisitText(instant) {
    const v = S.visit;
    const card = (p) => `<article class="quote-card${p.story ? "" : " is-short"}" data-reveal>
          <div class="quote-main">
            <span class="qmark" aria-hidden="true">“</span>
            <blockquote class="quote-text">${esc(t(p.quote))}</blockquote>
            ${translatedNote(p.translated)}
            <div class="person">
              <span class="mono" aria-hidden="true">${esc(initial(t(p.name)))}</span>
              <div><strong>${esc(t(p.name))}</strong>${p.detail ? `<span>${esc(t(p.detail))}</span>` : ""}</div>
            </div>
          </div>
          ${p.story ? `<p class="said">${esc(t(p.story))}</p>` : ""}
          ${p.quote2 ? `<div class="quote-2-wrap"><blockquote class="quote-2">“${esc(t(p.quote2))}”</blockquote>${translatedNote(p.translated)}</div>` : ""}
          <div class="learned"><span class="label">${esc(ui("whatWeLearned"))}</span><p>${esc(t(p.takeaway))}</p></div>
        </article>`;

    // One block per fieldwork day; the grid gets as many columns as full cards (max 3)
    const groups = v.interviewGroups
      .map((g, gi) => {
        const cols = Math.min(3, Math.max(1, g.interviews.filter((p) => p.story).length));
        return `<div class="visit-group" aria-labelledby="h-visit-${gi}" role="group">
            <div class="visit-group-head" data-reveal>
              <h3 id="h-visit-${gi}" class="visit-pill">${esc(t(g.title))}</h3>
              ${g.date ? `<span class="visit-date">${esc(t(g.date))}</span>` : ""}
            </div>
            <div class="quote-grid" data-cols="${cols}">${g.interviews.map(card).join("")}</div>
          </div>`;
      })
      .join("");
    const cq = v.closingQuote;

    $("#visit-banner").innerHTML = banner(v.banner);
    $("#visit-photos-head").innerHTML = sectionHead("photosEyebrow", "photosTitle", "h-photos");
    $("#visit-rest").innerHTML = `
        <section class="section" aria-labelledby="h-interviews">
          ${sectionHead("interviewsEyebrow", "interviewsTitle", "h-interviews")}
          ${groups}
          <aside class="theme" data-reveal>
            <span class="label">${esc(ui("commonTheme"))}</span>
            <p>${emphasis(t(v.commonTheme))}</p>
          </aside>
          ${cq ? `<figure class="closing-quote" data-reveal>
            <blockquote>“${esc(t(cq.text))}”</blockquote>
            ${translatedNote(cq.translated)}
            <figcaption>— ${esc(t(cq.by))}</figcaption>
          </figure>` : ""}
        </section>

        <section class="section" aria-labelledby="h-perceptions">
          <div class="editorial-intro">
            ${sectionHead("reflectionEyebrow", "perceptionsTitle", "h-perceptions")}
            <p class="prose" data-reveal>${esc(t(v.perceptions))}</p>
          </div>
          <figure class="editorial" data-reveal>
            <blockquote>“${esc(t(S.takeaway))}”</blockquote>
            <figcaption>${esc(ui("keyTakeaway"))} · ${esc(S.group)}</figcaption>
          </figure>
        </section>`;

    ["#visit-banner", "#visit-photos-head", "#visit-rest"].forEach((sel) => observeReveals($(sel), instant));
    slideshow?.relabel();
  }

  function renderPark(instant = false) {
    const p = S.park;
    const info = p.info
      .map((i) => `<li class="info-card" data-reveal>
          <span class="icon-wrap">${icon(i.icon)}</span>
          <div><span class="label">${esc(t(i.label))}</span><p>${esc(t(i.value))}</p></div>
        </li>`)
      .join("");
    const timeline = p.timeline
      .map((x) => `<li data-reveal><span class="year">${esc(t(x.year))}</span><p>${esc(t(x.text))}</p></li>`)
      .join("");
    const todo = p.thingsToDo
      .map((x) => `<li class="todo-card" data-reveal><span class="icon-wrap">${icon(x.icon)}</span><span>${esc(t(x.text))}</span></li>`)
      .join("");
    const tips = p.tips.map((x) => `<li>${icon("check")}<span>${esc(t(x))}</span></li>`).join("");

    $("#panel-park").innerHTML = `
      ${banner(p.banner)}
      <div class="wrap">
        <section class="section" aria-labelledby="h-info">
          ${sectionHead("planEyebrow", "infoTitle", "h-info")}
          <ul class="info-grid">${info}</ul>
          <div data-reveal>
            <a class="btn btn-primary" href="${esc(p.mapsUrl)}" target="_blank" rel="noopener noreferrer">
              ${esc(ui("openMaps"))} ${icon("external", "icon btn-icon")}<span class="sr-only"> ${esc(ui("newTab"))}</span>
            </a>
          </div>
        </section>

        <section class="section" aria-labelledby="h-history">
          ${sectionHead("historyEyebrow", "historyTitle", "h-history")}
          <ol class="timeline">${timeline}</ol>
        </section>

        <section class="section" aria-labelledby="h-todo">
          ${sectionHead("todoEyebrow", "todoTitle", "h-todo")}
          <ul class="todo-grid">${todo}</ul>
        </section>

        <section class="section" aria-labelledby="h-tips">
          ${sectionHead("tipsEyebrow", "tipsTitle", "h-tips")}
          <ul class="tips" data-reveal>${tips}</ul>
        </section>
      </div>`;

    observeReveals($("#panel-park"), instant);
  }

  /* ---------- Slideshow: autoplay crossfade ---------- */
  const SLIDE_MS = 5000; // same rhythm as the landing backgrounds
  let slideshow = null;

  function createSlideshow(root, data) {
    const stage = $(".show-stage", root);
    const slides = [...root.querySelectorAll(".show-slide")];
    const progress = $(".show-progress", root);
    root.style.setProperty("--slide-ms", `${SLIDE_MS}ms`);
    const caption = $(".show-caption", root);
    const count = $(".show-count b", root);
    const toggle = $("[data-toggle]", root);
    const n = slides.length;
    const pauses = new Set(); // reasons: tab, hover, hold, hidden, user
    let current = -1;   // photo on screen
    let wanted = -1;    // photo we're moving to (may still be decoding)
    let token = 0;      // newest request wins if several arrive quickly
    let timer = 0, startedAt = 0, remaining = SLIDE_MS;

    const load = (i) => {
      slides[i].querySelectorAll("img[data-src]").forEach((img) => {
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
      });
      return slides[i].querySelector(".show-img");
    };

    function showCaption(i, animate) {
      const d = data[i];
      caption.classList.remove("is-in");
      caption.innerHTML = (d.visit ? `<span class="show-visit">${esc(t(d.visit))}</span>` : "") +
        `<span>${esc(t(d.caption))}</span>`;
      if (animate) {
        void caption.offsetWidth;
        caption.classList.add("is-in");
      } else {
        caption.style.opacity = "1";
      }
    }

    async function go(target, restart = false) {
      const i = ((target % n) + n) % n;
      if (i === wanted && !restart) return;
      wanted = i;
      const mine = ++token;
      const img = load(i);
      try { await img.decode(); } catch (e) { /* missing file: placeholder shows */ }
      if (mine !== token) return; // a newer click/swipe superseded this one
      if (current >= 0) {
        slides[current].classList.remove("is-active");
        slides[current].setAttribute("aria-hidden", "true");
      }
      current = i;
      slides[i].classList.add("is-active");
      slides[i].removeAttribute("aria-hidden");
      load((i + 1) % n); // preload the next photo so the crossfade never flashes

      caption.style.opacity = "";
      showCaption(i, true);
      count.textContent = String(i + 1).padStart(2, "0");

      // One thin bar for the whole show: it fills this photo's share while it's on screen
      progress.style.setProperty("--from", i / n);
      progress.style.setProperty("--to", (i + 1) / n);
      progress.classList.remove("run");
      void progress.offsetWidth;
      progress.classList.add("run");

      remaining = SLIDE_MS;
      schedule();
    }

    function schedule() {
      clearTimeout(timer);
      if (pauses.size) return;
      startedAt = performance.now();
      timer = setTimeout(() => go(wanted + 1), remaining);
    }

    function pause(reason) {
      if (!pauses.size) {
        clearTimeout(timer);
        remaining = Math.max(0, remaining - (performance.now() - startedAt));
      }
      pauses.add(reason);
      sync();
    }
    function resume(reason) {
      if (!pauses.delete(reason)) return;
      sync();
      if (!pauses.size) schedule();
    }
    function sync() {
      root.classList.toggle("is-paused", pauses.size > 0);
      const userPaused = pauses.has("user");
      toggle.innerHTML = icon(userPaused ? "play" : "pause");
      toggle.setAttribute("aria-label", ui(userPaused ? "playSlideshow" : "pauseSlideshow"));
      // Announce captions to screen readers only when not auto-advancing
      caption.setAttribute("aria-live", pauses.size ? "polite" : "off");
    }

    // Language switch: update labels, alt text and the caption without touching playback
    function relabel() {
      root.setAttribute("aria-label", ui("slideshowRegion"));
      stage.setAttribute("aria-label", ui("slideshowStage"));
      root.querySelector('[data-step="-1"]').setAttribute("aria-label", ui("prevPhoto"));
      root.querySelector('[data-step="1"]').setAttribute("aria-label", ui("nextPhoto"));
      slides.forEach((s, i) => {
        s.querySelector(".show-img").alt = t(data[i].alt || data[i].caption);
        s.querySelector(".photo-missing").outerHTML = placeholder(data[i].src, t(data[i].caption));
      });
      sync();
      if (current >= 0) showCaption(current, false);
    }

    // Temporary pauses: mouse hover and touch-hold. Both always resume by themselves.
    stage.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") pause("hover"); });
    stage.addEventListener("pointerleave", (e) => { if (e.pointerType === "mouse") resume("hover"); });

    // Touch-hold pauses; a horizontal swipe changes photo
    let downX = 0, downY = 0, holdGuard = 0;
    const endHold = () => { clearTimeout(holdGuard); resume("hold"); };
    stage.addEventListener("pointerdown", (e) => {
      downX = e.clientX; downY = e.clientY;
      pause("hold");
      // Safety net: if the browser never sends pointerup (e.g. a long-press menu), resume anyway
      clearTimeout(holdGuard);
      holdGuard = setTimeout(endHold, 4000);
    });
    stage.addEventListener("pointerup", (e) => {
      const dx = e.clientX - downX, dy = e.clientY - downY;
      endHold();
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
    });
    stage.addEventListener("pointercancel", endHold);
    stage.addEventListener("lostpointercapture", endHold);

    root.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      if (btn.dataset.step) step(Number(btn.dataset.step));
      if (btn.hasAttribute("data-toggle")) pauses.has("user") ? resume("user") : pause("user");
    });

    // Only stop while the browser tab itself is hidden (it resumes when you come back)
    document.addEventListener("visibilitychange", () => (document.hidden ? pause("hidden") : resume("hidden")));

    function step(d) { go((wanted >= 0 ? wanted : 0) + d); }

    // Called every time the Our Visit tab is shown: play from the first photo.
    // Nothing downloads before this, so the landing screen loads faster.
    function start() {
      clearTimeout(timer);
      remaining = SLIDE_MS;
      pauses.delete("user"); // default state is always "playing"
      sync();
      go(0, true);
    }

    return { step, pause, resume, start, relabel };
  }

  // Arrow keys change the photo while on the "Our Visit" tab (not while typing).
  document.addEventListener("keydown", (e) => {
    if (!slideshow || currentTab() !== "visit" || e.altKey || e.ctrlKey || e.metaKey) return;
    if (e.target.closest("input, textarea, select")) return;
    if (e.key === "ArrowRight") { slideshow.step(1); e.preventDefault(); }
    if (e.key === "ArrowLeft") { slideshow.step(-1); e.preventDefault(); }
  });

  /* ---------- Landing background rotation ---------- */
  const LANDING_MS = 5000;
  let landingTimer = 0;
  let landingIndex = 0;

  function startLanding() {
    const slides = document.querySelectorAll(".landing-slide");
    if (landingTimer || slides.length < 2) return;
    landingTimer = setInterval(() => {
      if (document.hidden) return;
      slides[landingIndex].classList.remove("is-active");
      landingIndex = (landingIndex + 1) % slides.length;
      slides[landingIndex].classList.add("is-active");
    }, LANDING_MS);
  }
  function stopLanding() {
    clearInterval(landingTimer);
    landingTimer = 0;
  }

  /* ---------- Routing ---------- */
  const currentTab = () => {
    const h = location.hash.slice(1);
    return TABS.includes(h) ? h : null;
  };

  function updateTitle() {
    const tab = currentTab();
    document.title = tab ? `${ui(TAB_KEYS[tab])} · ${ui("siteTitle")}` : ui("siteTitle");
  }

  function route() {
    const tab = currentTab();
    const landing = $("#landing");
    const app = $("#app");
    updateTitle();

    if (!tab) {
      app.hidden = true;
      landing.hidden = false;
      slideshow?.pause("tab");
      startLanding();
      return;
    }
    stopLanding();

    const wasLanding = !landing.hidden;
    landing.hidden = true;
    app.hidden = false;

    $(".tabs").style.setProperty("--i", TABS.indexOf(tab));
    document.querySelectorAll(".tab").forEach((a) => {
      if (a.dataset.tab === tab) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    document.querySelectorAll(".panel").forEach((p) => { p.hidden = p.dataset.panel !== tab; });

    if (tab === "visit") { slideshow?.start(); slideshow?.resume("tab"); }
    else slideshow?.pause("tab");
    if (tab === "play") window.Game.mount($("#panel-play"));

    window.scrollTo(0, 0);
    // Move focus to the new panel for keyboard / screen-reader users
    if (wasLanding || document.activeElement?.classList.contains("tab")) {
      $(`#panel-${tab}`).focus({ preventScroll: true });
    }
  }

  /* ---------- Switching language: instant, no reload, keeps slideshow & game state ---------- */
  function setLang(next) {
    if (!LANGS.includes(next) || next === lang) return;
    lang = next;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* private mode: just don't remember */ }
    document.documentElement.lang = lang;
    renderChrome();
    renderLandingText();
    renderVisitText(true);
    renderPark(true);
    window.Game.refresh();
    updateTitle();
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".lang-switch [data-lang]");
    if (btn) setLang(btn.dataset.lang);
  });

  // Frosted top bar gets a stronger background once the page scrolls
  window.addEventListener("scroll", () => {
    document.body.classList.toggle("is-scrolled", window.scrollY > 8);
  }, { passive: true });

  document.addEventListener("DOMContentLoaded", () => {
    renderChrome();
    renderLandingPhotos();
    renderLandingText();
    renderVisit();
    renderPark();
    $("#explore-btn").addEventListener("click", () => { location.hash = "visit"; });
    window.addEventListener("hashchange", route);
    route();

    // Images that failed before the listener could see them
    document.querySelectorAll(".photo img[src], .banner-photo img").forEach((img) => {
      if (img.complete && img.naturalWidth === 0) markMissing(img);
    });
  });
})();
