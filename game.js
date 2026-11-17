/* "Pick Your Benjakitti Favourite": a randomised knockout tournament.
   Each play draws 8 random photos from the pool in content.js:
   Quarter-finals (4) -> Semi-finals (2) -> Final (1) = 7 picks.
   All text is bilingual (EN/TH) via content.js. The word wall uses storage.js. */

window.Game = (() => {
  const S = window.SITE;
  const MAX_BRACKET = 8;
  const ROUNDS = [
    { size: 8, name: "roundQuarter", short: "stepQuarter" },
    { size: 4, name: "roundSemi", short: "stepSemi" },
    { size: 2, name: "roundFinal", short: "stepFinal" }
  ];

  // Simple word filter (lowercase). Extend as needed.
  const BLOCKED = [
    "fuck", "shit", "bitch", "cunt", "dick", "pussy", "asshole", "bastard", "slut", "whore",
    "nigger", "nigga", "fag", "retard", "porn", "sex", "penis", "vagina",
    "เหี้ย", "ควย", "สัส", "เย็ด", "ระยำ"
  ];

  let root = null;
  let screen = "";     // "match" | "champion" | "closing"
  let entrants = [];   // options still in the current round
  let winners = [];    // winners of the current round so far
  let match = 0;       // match index within the current round
  let played = 0;      // matches played overall
  let total = 7;       // matches in this bracket (bracket size - 1)
  let bracket = 8;     // photos in this bracket
  let champion = null;
  let champQuote = null; // chosen once per win, so switching language keeps the same quote
  let feeling = "";
  let busy = false;
  let pollTimer = null;

  const { esc, photo, icon, reducedMotion, t, ui, fill, translatedNote } = window.UI;

  function shuffle(list) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const isBlocked = (text) => {
    const s = text.toLowerCase();
    return BLOCKED.some((w) => (/^[a-z]+$/.test(w) ? new RegExp(`\\b${w}`).test(s) : s.includes(w)));
  };

  // relabel = re-render for a language switch: no entrance animations, focus stays put
  function show(html, focusSel, relabel = false) {
    const active = document.activeElement;
    const hadFocus = root.contains(active);
    const keepId = relabel && hadFocus ? active.id : "";
    root.classList.toggle("is-relabel", relabel);
    root.innerHTML = `<div class="game-screen">${html}</div>`;
    if (keepId) root.querySelector(`#${keepId}`)?.focus({ preventScroll: true });
    else if (hadFocus && !relabel) root.querySelector(focusSel)?.focus({ preventScroll: true });
  }

  const progress = (value, text) => `<div class="progress-row">
      <div class="progress" role="progressbar" aria-label="${esc(ui("progressLabel"))}"
           aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${value}">
        <span style="transform:scaleX(${value / total})"></span>
      </div>
      <span class="progress-text">${text}</span>
    </div>`;

  // "Quarters · Semis · Final" with the current round highlighted
  const stepper = (size) => `<ol class="stepper" aria-hidden="true">
      ${ROUNDS.filter((r) => r.size <= bracket)
        .map((r) => `<li class="${r.size === size ? "is-current" : r.size > size ? "is-done" : ""}">${esc(ui(r.short))}</li>`).join("")}
    </ol>`;

  // Load the next match's photos in the background so they appear instantly
  function preloadNext() {
    const next = entrants.slice((match + 1) * 2, (match + 1) * 2 + 2);
    next.forEach((o) => { new Image().src = o.src; });
  }

  function randomInterviewQuote() {
    const v = S.visit;
    const quotes = [];
    v.interviewGroups.flatMap((g) => g.interviews).forEach((p) => {
      const by = p.attribution || p.name;
      [p.quote, p.quote2].filter(Boolean).forEach((text) => quotes.push({ text, by, translated: p.translated }));
    });
    if (v.closingQuote) quotes.push(v.closingQuote);
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  /* ---------- Flow ---------- */
  function start() {
    stopPolling();
    const pool = S.game.pool;
    // Largest power of two that fits (8 normally; smaller if the pool is short)
    bracket = Math.min(MAX_BRACKET, 2 ** Math.floor(Math.log2(Math.max(2, pool.length))));
    total = bracket - 1;
    entrants = shuffle(pool).slice(0, bracket);
    winners = [];
    match = 0;
    played = 0;
    champion = null;
    champQuote = null;
    feeling = "";
    renderMatch();
  }

  function renderMatch(relabel = false) {
    screen = "match";
    const size = entrants.length;
    const matchesInRound = size / 2;
    const round = ROUNDS.find((r) => r.size === size) || ROUNDS[ROUNDS.length - 1];
    const roundText = matchesInRound > 1
      ? ui("roundOf", { label: ui(round.name), x: match + 1, n: matchesInRound })
      : ui(round.name);
    const pair = entrants.slice(match * 2, match * 2 + 2);

    const choices = pair
      .map((o, i) => `<button type="button" class="choice" data-pick="${i}" aria-label="${esc(ui("choose", { label: t(o.label) }))}">
          ${photo(o.src, t(o.label), { eager: true, cls: "photo-choice" })}
          <span class="choice-shade" aria-hidden="true"></span>
          <span class="choice-label">${esc(t(o.label))}</span>
          <span class="choice-check" aria-hidden="true">${icon("check")}</span>
        </button>`)
      .join("");

    show(`
      <div class="wrap game-wrap">
        <header class="game-head">
          <h2 id="game-round" class="game-title" tabindex="-1">${esc(t(S.game.title))}</h2>
          <p class="game-intro">${esc(t(S.game.instruction))}</p>
          ${stepper(size)}
          ${progress(played, `${esc(ui("matchOf", { x: played + 1, n: total }))}<span class="sr-only"> (${esc(roundText)})</span>`)}
        </header>
        <div class="versus">${choices}<span class="vs" aria-hidden="true">${esc(ui("or"))}</span></div>
      </div>`, ".choice", relabel);
    preloadNext();
  }

  function pick(index, button) {
    if (busy) return;
    busy = true;
    const pair = entrants.slice(match * 2, match * 2 + 2);
    winners.push(pair[index]);
    played++;

    root.querySelector(".versus").classList.add("is-decided");
    root.querySelectorAll(".choice").forEach((b) => b.classList.add(b === button ? "picked" : "dimmed"));
    const bar = root.querySelector(".progress span");
    if (bar) bar.style.transform = `scaleX(${played / total})`;

    setTimeout(() => {
      busy = false;
      match++;
      if (match * 2 < entrants.length) return renderMatch();
      if (winners.length === 1) {
        champion = winners[0];
        champQuote = randomInterviewQuote();
        return renderChampion();
      }
      entrants = winners;
      winners = [];
      match = 0;
      renderMatch();
    }, reducedMotion.matches ? 150 : 520);
  }

  function renderChampion(relabel = false) {
    screen = "champion";
    const c = champion;
    const q = champQuote;
    const typed = relabel ? (root.querySelector("#feeling")?.value ?? "") : "";
    const quote = q
      ? `<figure class="champ-quote">
          <p class="label">${esc(ui("fromInterviews"))}</p>
          <blockquote>“${esc(t(q.text))}”</blockquote>
          ${translatedNote(q.translated)}
          <figcaption>— ${esc(t(q.by))}</figcaption>
        </figure>`
      : "";
    const chips = S.game.chips
      .map((w) => `<button type="button" class="chip" data-word="${esc(t(w))}" aria-pressed="false">${esc(t(w))}</button>`)
      .join("");

    show(`
      <div class="wrap game-wrap">
        <header class="game-head">
          ${stepper(1)}
          ${progress(total, esc(ui("complete")))}
        </header>
        <div class="champ-card">
          ${photo(c.src, t(c.label), { eager: true, cls: "photo-champ" })}
          <span class="choice-shade" aria-hidden="true"></span>
          <div class="champ-text">
            <p class="eyebrow eyebrow-light">${esc(ui("yourFavourite"))}</p>
            <h2 id="game-champ" tabindex="-1">${esc(t(c.label))}</h2>
          </div>
        </div>
        ${quote}

        <form class="reflect" novalidate>
          <label for="feeling" class="reflect-label">${esc(t(S.game.feelingPrompt))}</label>
          <div class="field">
            <input id="feeling" name="feeling" type="text" maxlength="60" autocomplete="off"
                   enterkeyhint="send" placeholder="${esc(ui("feelingPlaceholder"))}" aria-describedby="feeling-error feeling-count">
            <span id="feeling-count" class="count">0/60</span>
          </div>
          <div class="chips" role="group" aria-label="${esc(ui("quickPicks"))}">${chips}</div>
          <p id="feeling-error" class="form-error" role="alert"></p>
          <button type="submit" class="btn btn-primary btn-block" disabled>${esc(ui("submit"))} ${icon("arrowRight", "icon btn-icon")}</button>
        </form>
      </div>`, "#game-champ", relabel);

    const form = root.querySelector(".reflect");
    const input = form.querySelector("#feeling");
    const submit = form.querySelector("[type=submit]");
    const error = form.querySelector(".form-error");
    const count = form.querySelector(".count");
    const chipsEls = [...form.querySelectorAll(".chip")];

    const sync = () => {
      const value = input.value.trim();
      submit.disabled = value.length === 0;
      count.textContent = `${input.value.length}/60`;
      chipsEls.forEach((el) => el.setAttribute("aria-pressed", String(el.dataset.word === value)));
      error.textContent = "";
    };

    input.value = typed; // keep whatever was typed before a language switch
    sync();
    input.addEventListener("input", sync);
    form.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      input.value = chip.dataset.word;
      sync();
    });
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const value = input.value.trim().replace(/\s+/g, " ");
      if (!value) return;
      if (isBlocked(value)) {
        error.textContent = ui("differentWord");
        input.focus();
        return;
      }
      submit.disabled = true;
      feeling = value;
      await window.WordStore.saveWord(value, champion.id);
      renderClosing();
    });
  }

  async function renderClosing(relabel = false) {
    screen = "closing";
    stopPolling();
    // Template like "You felt {feeling} about {place}." with the parts emphasised
    const lead = fill(esc(t(S.ui.youFelt)), {
      feeling: `<em>${esc(feeling)}</em>`,
      place: `<strong>${esc(t(champion.label))}</strong>`
    });
    show(`
      <div class="wrap game-wrap closing">
        <header class="closing-head">
          <p class="eyebrow">${esc(ui("thanksEyebrow"))}</p>
          <h2 id="game-thanks" tabindex="-1">${esc(ui("thanksTitle"))}</h2>
          <p class="lead">${lead}</p>
        </header>
        <figure class="editorial editorial-compact">
          <blockquote>“${esc(t(S.takeaway))}”</blockquote>
          <figcaption>${esc(ui("keyTakeaway"))} · ${esc(S.group)}</figcaption>
        </figure>
        <section class="wall" aria-labelledby="h-wall">
          <div class="wall-head">
            <h3 id="h-wall">${esc(ui("wordWall"))}</h3>
            <p>${esc(ui("wordWallSub"))}${window.WordStore.isShared ? ` <span class="live">${esc(ui("live"))}</span>` : ""}</p>
          </div>
          <ul class="wordwall${relabel ? "" : " is-entering"}" aria-live="polite"></ul>
        </section>
        <button type="button" class="btn btn-primary" data-action="again">${icon("replay", "icon btn-icon")} ${esc(ui("playAgain"))}</button>
      </div>`, "#game-thanks", relabel);

    await refreshWall();
    // Pills animate in once; later live refreshes update quietly
    setTimeout(() => root.querySelector(".wordwall")?.classList.remove("is-entering"), 2500);
    if (window.WordStore.isShared) pollTimer = setInterval(refreshWall, 5000);
  }

  async function refreshWall() {
    const list = root.querySelector(".wordwall");
    if (!list) return stopPolling();
    const words = await window.WordStore.getWords();

    // Words are shown exactly as visitors typed them (never translated).
    // Grouped case-insensitively; more frequent = bigger
    const groups = new Map();
    for (const { word } of words) {
      if (!word || isBlocked(word)) continue;
      const key = word.trim().toLowerCase();
      const g = groups.get(key) || { text: word.trim(), n: 0 };
      g.n++;
      groups.set(key, g);
    }
    const sorted = [...groups.entries()].sort((a, b) => b[1].n - a[1].n).slice(0, 60);
    const max = sorted.length ? sorted[0][1].n : 1;
    const mine = feeling.toLowerCase();

    // Biggest words in the middle for a balanced cloud
    const cloud = [];
    sorted.forEach((item, i) => (i % 2 ? cloud.push(item) : cloud.unshift(item)));

    list.innerHTML = cloud
      .map(([key, g], i) => {
        const size = 0.95 + (max > 1 ? (g.n - 1) / (max - 1) : 0) * 1.25; // 0.95rem .. 2.2rem
        const label = g.n > 1 ? ui("people", { label: g.text, count: g.n }) : g.text;
        return `<li class="${key === mine ? "is-mine" : ""}" style="font-size:${size.toFixed(2)}rem;--d:${i * 40}ms" aria-label="${esc(label)}">${esc(g.text)}</li>`;
      })
      .join("");
  }

  function stopPolling() {
    clearInterval(pollTimer);
    pollTimer = null;
  }

  /* ---------- Public ---------- */
  function mount(el) {
    if (root === el) return; // keep progress when switching tabs
    root = el;
    root.addEventListener("click", (e) => {
      const choice = e.target.closest(".choice");
      if (choice) return pick(Number(choice.dataset.pick), choice);
      if (e.target.closest('[data-action="again"]')) {
        start();
        window.scrollTo(0, 0);
        root.querySelector("#game-round")?.focus({ preventScroll: true });
      }
    });
    start();
  }

  // Language switch: redraw the current screen in the new language, keeping all game state.
  // (If a pick animation is running, the next screen is drawn in the new language anyway.)
  function refresh() {
    if (!root || busy) return;
    if (screen === "match") renderMatch(true);
    else if (screen === "champion") renderChampion(true);
    else if (screen === "closing") renderClosing(true);
  }

  return { mount, refresh };
})();
