# A Visit to Benjakitti Forest Park

Group exhibition website for **GEN241 Module 3 "Interactive Exhibition: Real Aesthete"** (KMUTT), theme **Nature's Beauty**.
It's a static site built with plain HTML, CSS and JavaScript. There is no build step and no backend is required.

## Run locally

From the project folder, start any static server and open the address it prints:

```bash
npx serve .            # or
python -m http.server 8000
```

(Opening `index.html` directly also works, but a server matches how Vercel serves the site.)

## Edit the content → `content.js`

All the text is in **`content.js`**: group code, titles, tab banners, slideshow captions, interview cards, perceptions, the takeaway quote, the 8 game options, the feeling chips, and the park info, timeline, things to do and tips.
Icons in The Park are minimal line icons chosen by name. The available names are listed in a comment in `content.js`.
To change something, edit the text between the quotes and save.

## Add photos → `assets/`

```
assets/hero.jpg              1st landing photo; also the blurred page background
assets/landing/              2nd and 3rd landing photos (entrance.jpg, railing.jpg); crossfade every 5 s
assets/visit/01.jpg … 25.jpg slideshow in the order we took the photos (Visit 1, then Visit 2);
                             starts by itself when the tab opens, every 5 s; list + captions in content.js → visit.slides
assets/game/                 game photos (1000 px, about 200 KB, so matches load fast). The game draws
                             8 random photos from content.js → game.pool (needs at least 8)
```

- File names must match `content.js` exactly (they're case-sensitive on Vercel).
- Resize photos to **max 1600 px wide** (game photos: 1000 px) and export as JPG at ~75–80% quality (for example with [squoosh.app](https://squoosh.app)). Aim for about 200–400 KB each.
- The raw originals live in `benjakitti-photos-raw/`, which is git-ignored and never deployed.
- If a photo is missing, the site shows a neat labelled placeholder instead of a broken image.

## Word wall (Play tab)

By default, words are saved in each visitor's own browser (`localStorage`), so each person sees only their own words.
To show **everyone's words live** during the presentation:

1. In the Supabase dashboard, open the SQL editor and run `supabase.sql`.
2. In `storage.js`, set `SHARED.enabled = true`, then deploy.

The wall refreshes every 5 seconds on the thank-you screen.
Only the public anon/publishable key goes in `storage.js`. **Never** put a `service_role` or secret key in front-end code.
To use a different backend (for example Firebase), rewrite `saveWord()` and `getWords()` in `storage.js`. Nothing else needs to change.

## Deploy

**Vercel:** push to the connected GitHub repo and it deploys automatically. There is no config or build command. Static hosts like Netlify and GitHub Pages also work: just upload the folder.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page shell: landing screen, tab bar, panels |
| `content.js` | **All editable content** |
| `app.js` | Hash routing (`#visit`, `#play`, `#park`), slideshow, Our Visit + The Park tabs |
| `game.js` | "Pick Your Benjakitti Favourite" tournament, reflection, word wall |
| `storage.js` | Word wall storage (localStorage, optional Supabase) |
| `styles.css` | All styling (mobile-first) |
| `supabase.sql` | Optional table for the shared word wall |
