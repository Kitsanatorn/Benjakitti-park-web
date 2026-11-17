/* =====================================================================
   WORD WALL STORAGE: a small swappable module.

   API used by the game:
     WordStore.saveWord(word, championId)  -> Promise<void>
     WordStore.getWords()                  -> Promise<Array<{ word, champion }>>
     WordStore.isShared                    -> true when a shared backend is on

   By default, words are saved in this browser only (localStorage).

   To show EVERYONE's words live during the exhibition (optional):
     1. In the Supabase dashboard, open the SQL editor and run supabase.sql
        (it creates the "word_wall" table with safe read/insert-only rules).
     2. Set SHARED.enabled = true below and deploy.
   Only the PUBLIC anon/publishable key belongs here, never a service_role
   or secret key.
   ===================================================================== */

window.WordStore = (() => {
  const SHARED = {
    enabled: false,
    url: "https://apwtyfekyznrgzydflco.supabase.co",
    anonKey: "sb_publishable_b_xVCXDzVKfhxfGqPYotrg_8HZFgakQ",
    table: "word_wall"
  };

  const LS_KEY = "benjakitti-wordwall-v1";
  const MAX_LOCAL = 500;

  const local = {
    get() {
      try {
        const list = JSON.parse(localStorage.getItem(LS_KEY) || "[]");
        return Array.isArray(list) ? list : [];
      } catch (e) {
        return [];
      }
    },
    add(entry) {
      try {
        const list = local.get();
        list.push(entry);
        localStorage.setItem(LS_KEY, JSON.stringify(list.slice(-MAX_LOCAL)));
      } catch (e) {
        /* storage full or blocked (private mode): ignore */
      }
    }
  };

  const isShared = Boolean(SHARED.enabled && SHARED.url && SHARED.anonKey);
  const endpoint = `${SHARED.url}/rest/v1/${SHARED.table}`;
  const headers = { apikey: SHARED.anonKey, "Content-Type": "application/json" };

  async function saveWord(word, championId) {
    const entry = { word, champion: championId };
    local.add(entry);
    if (!isShared) return;
    try {
      await fetch(endpoint, {
        method: "POST",
        headers: { ...headers, Prefer: "return=minimal" },
        body: JSON.stringify(entry)
      });
    } catch (e) {
      /* offline or backend down: the local copy is kept */
    }
  }

  async function getWords() {
    if (isShared) {
      try {
        const res = await fetch(`${endpoint}?select=word,champion&order=created_at.desc&limit=500`, { headers });
        if (res.ok) return await res.json();
      } catch (e) {
        /* fall back to local words */
      }
    }
    return local.get();
  }

  return { saveWord, getWords, isShared };
})();
