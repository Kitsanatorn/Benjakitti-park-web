/* "Pick Your Benjakitti Favourite": a randomised knockout tournament.
   Each play draws 8 random photos from the pool in content.js:
   Quarter-finals (4) -> Semi-finals (2) -> Final (1) = 7 picks.
   The word wall uses storage.js. */

window.Game = (() => {
  const S = window.SITE;
  const MAX_BRACKET = 8;
  const ROUNDS = [
    { size: 8, name: "Quarter-final", short: "Quarters" },
    { size: 4, name: "Semi-final", short: "Semis" },
    { size: 2, name: "Final", short: "Final" }
  ];

  // Simple word filter (lowercase). Extend as needed.
  const BLOCKED = [
    "fuck", "shit", "bitch", "cunt", "dick", "pussy", "asshole", "bastard", "slut", "whore",
    "nigger", "nigga", "fag", "retard", "porn", "sex", "penis", "vagina",
    "เหี้ย", "ควย", "สัส", "เย็ด", "ระยำ"
  ];

  let root = null;
  let entrants = [];   // options still in the current round
  let winners = [];    // winners of the current round so far
  let match = 0;       // match index within the current round
  let played = 0;      // matches played overall
  let total = 15;      // matches in this bracket (bracket size - 1)
  let bracket = 16;    // photos in this bracket
  let champion = null;
  let feeling = "";
  let busy = false;
  let pollTimer = null;

  const { esc, photo, icon, reducedMotion } = window.UI;

  function shuffle(list) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const isBlocked = (text) => {
    const t = text.toLowerCase();
    return BLOCKED.some((w) => (/^[a-z]+$/.test(w) ? new RegExp(`\\b${w}`).test(t) : t.includes(w)));
  };

  // Keep focus inside the game when the screen re-renders (keyboard users).
  function show(html, focusSel) {
    const hadFocus = root.contains(document.activeElement);
    root.innerHTML = `<div class="game-screen">${html}</div>`;
    if (hadFocus) root.querySelector(focusSel)?.focus({ preventScroll: true });
  }

  const progress = (value, text) => `<div class="progress-row">
      <div class="progress" role="progressbar" aria-label="Tournament progress"
           aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${value}">
        <span style="transform:scaleX(${value / total})"></span>
      </div>
      <span class="progress-text">${text}</span>
    </div>`;

  // "Round 1 · Quarters · Semis · Final" with the current round highlighted
  const stepper = (size) => `<ol class="stepper" aria-hidden="true">
      ${ROUNDS.filter((r) => r.size <= bracket)
        .map((r) => `<li class="${r.size === size ? "is-current" : r.size > size ? "is-done" : ""}">${r.short}</li>`).join("")}
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
      const by = p.detail && /^\d+/.test(p.detail) ? `${p.name}, ${p.detail.match(/^\d+/)[0]}` : p.name;
      [p.quote, p.quote2].filter(Boolean).forEach((text) => quotes.push({ text, by }));
    });
    if (v.closingQuote) quotes.push(v.closingQuote);
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  /* ---------- Flow ---------- */
  function start() {
    stopPolling();
    const pool = S.game.pool;
    // Largest power of two that fits (16 normally; smaller if the pool is short)
    bracket = Math.min(MAX_BRACKET, 2 ** Math.floor(Math.log2(Math.max(2, pool.length))));
    total = bracket - 1;
    entrants = shuffle(pool).slice(0, bracket);
    winners = [];
    match = 0;
    played = 0;
    champion = null;
    feeling = "";
    renderMatch();
  }

  function renderMatch() {
    const size = entrants.length;
    const matchesInRound = size / 2;
    const round = ROUNDS.find((r) => r.size === size) || { name: "Round" };
    const roundText = matchesInRound > 1 ? `${round.name} ${match + 1} of ${matchesInRound}` : round.name;
    const pair = entrants.slice(match * 2, match * 2 + 2);

    const choices = pair
      .map((o, i) => `<button type="button" class="choice" data-pick="${i}" aria-label="Choose ${esc(o.label)}">
          ${photo(o.src, o.label, { eager: true, cls: "photo-choice" })}
          <span class="choice-shade" aria-hidden="true"></span>
          <span class="choice-label">${esc(o.label)}</span>
          <span class="choice-check" aria-hidden="true">${icon("check")}</span>
        </button>`)
      .join("");

    show(`
      <div class="wrap game-wrap">
        <header class="game-head">
          <h2 id="game-round" class="game-title" tabindex="-1">${esc(S.game.title)}</h2>
          <p class="game-intro">${esc(S.game.instruction)}</p>
          ${stepper(size)}
          ${progress(played, `Match ${played + 1} of ${total}<span class="sr-only"> (${esc(roundText)})</span>`)}
        </header>
        <div class="versus">${choices}<span class="vs" aria-hidden="true">or</span></div>
      </div>`, ".choice");
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
        return renderChampion();
      }
      entrants = winners;
      winners = [];
      match = 0;
      renderMatch();
    }, reducedMotion.matches ? 150 : 520);
  }

  function renderChampion() {
    const c = champion;
    const q = randomInterviewQuote();
    const quote = q
      ? `<figure class="champ-quote">
          <p class="label">From our interviews</p>
          <blockquote>“${esc(q.text)}”</blockquote>
          <figcaption>— ${esc(q.by)}</figcaption>
        </figure>`
      : "";
    const chips = S.game.chips
      .map((w) => `<button type="button" class="chip" data-word="${esc(w)}" aria-pressed="false">${esc(w)}</button>`)
      .join("");

    show(`
      <div class="wrap game-wrap">
        <header class="game-head">
          ${stepper(1)}
          ${progress(total, "Complete")}
        </header>
        <div class="champ-card">
          ${photo(c.src, c.label, { eager: true, cls: "photo-champ" })}
          <span class="choice-shade" aria-hidden="true"></span>
          <div class="champ-text">
            <p class="eyebrow eyebrow-light">Your Benjakitti favourite</p>
            <h2 id="game-champ" tabindex="-1">${esc(c.label)}</h2>
          </div>
        </div>
        ${quote}

        <form class="reflect" novalidate>
          <label for="feeling" class="reflect-label">${esc(S.game.feelingPrompt)}</label>
          <div class="field">
            <input id="feeling" name="feeling" type="text" maxlength="60" autocomplete="off"
                   enterkeyhint="send" placeholder="e.g. Calm" aria-describedby="feeling-error feeling-count">
            <span id="feeling-count" class="count">0/60</span>
          </div>
          <div class="chips" role="group" aria-label="Quick picks">${chips}</div>
          <p id="feeling-error" class="form-error" role="alert"></p>
          <button type="submit" class="btn btn-primary btn-block" disabled>Submit ${icon("arrowRight", "icon btn-icon")}</button>
        </form>
      </div>`, "#game-champ");

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
      chipsEls.forEach((c) => c.setAttribute("aria-pressed", String(c.dataset.word === value)));
      error.textContent = "";
    };

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
        error.textContent = "Please use a different word.";
        input.focus();
        return;
      }
      submit.disabled = true;
      feeling = value;
      await window.WordStore.saveWord(value, champion.id);
      renderClosing();
    });
  }

  async function renderClosing() {
    show(`
      <div class="wrap game-wrap closing">
        <header class="closing-head">
          <p class="eyebrow">Thank you</p>
          <h2 id="game-thanks" tabindex="-1">Thank you for playing.</h2>
          <p class="lead">You felt <em>${esc(feeling)}</em> about <strong>${esc(champion.label)}</strong>.</p>
        </header>
        <figure class="editorial editorial-compact">
          <blockquote>“${esc(S.takeaway)}”</blockquote>
          <figcaption>Key takeaway · ${esc(S.group)}</figcaption>
        </figure>
        <section class="wall" aria-labelledby="h-wall">
          <div class="wall-head">
            <h3 id="h-wall">Word wall</h3>
            <p>How visitors felt about their favourite${window.WordStore.isShared ? ' <span class="live">Live</span>' : ""}</p>
          </div>
          <ul class="wordwall is-entering" aria-live="polite"></ul>
        </section>
        <button type="button" class="btn btn-primary" data-action="again">${icon("replay", "icon btn-icon")} Play again</button>
      </div>`, "#game-thanks");

    await refreshWall();
    // Pills animate in once; later live refreshes update quietly
    setTimeout(() => root.querySelector(".wordwall")?.classList.remove("is-entering"), 2500);
    if (window.WordStore.isShared) pollTimer = setInterval(refreshWall, 5000);
  }

  async function refreshWall() {
    const list = root.querySelector(".wordwall");
    if (!list) return stopPolling();
    const words = await window.WordStore.getWords();

    // Group case-insensitively; more frequent = bigger
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
        const label = g.n > 1 ? `${g.text}, ${g.n} people` : g.text;
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

  return { mount };
})();
