# A Visit to Benjakitti Forest Park

Interactive exhibition website for **GEN241 Module 3 (Real Aesthete)**, group **INT-33-03**, KMUTT. Theme: **Nature's Beauty**.

**Live site:** <!-- TODO: add Vercel link --> _coming soon_

## Features

- **Landing page:** park photos that crossfade every 5 seconds, with an "Explore" button.
- **EN / TH switch:** at the top right of the landing page and in the tab bar. English is the default, and each visitor's choice is remembered on their device.
- **Our Visit:**
  - An autoplay slideshow of our photos.
  - Interviews from both visits.
  - The common theme, visitor perceptions and our key takeaway.
- **Play: Pick Your Benjakitti Favourite.**
  - 8 random park photos, 3 rounds (quarterfinals, semifinal, final).
  - After the final, a short reflection and a word wall of how visitors felt.
- **The Park:** visiting info, a timeline, things to do and tips.

## Project structure

| Path | What it does |
| --- | --- |
| `index.html` | Page shell: landing screen, tab bar, the three tabs |
| `styles.css` | All styling (mobile-first, green and yellow theme, Thai fonts) |
| `app.js` | Tab routing (`#visit`, `#play`, `#park`), language switch, slideshow, Our Visit and The Park tabs |
| `content.js` | **All text and photo lists**, in English and Thai |
| `game.js` | The favourite-photo game, reflection and word wall |
| `storage.js` | Saves word-wall entries (localStorage, or Supabase if enabled) |
| `supabase.sql` | Optional table for a shared live word wall |
| `assets/hero.jpg` | First landing photo and blurred page background |
| `assets/landing/` | The other landing photos |
| `assets/visit/` | Slideshow photos (`01.jpg` … `25.jpg`) |
| `assets/game/` | Game photos (smaller, 1000 px) |

## How to edit

**Text and translations:** everything is in `content.js`. Each piece of text has two versions:

```js
caption: { en: "The shaded cycle path", th: "ทางจักรยานที่ร่มรื่น" }
```

- Edit the text inside the quotes.
- If the Thai version is empty, the English text is shown instead.
- Leave words in `{curly braces}` as they are. They're filled in automatically.
- Set `translated: false` on an interview that was given in Thai. That hides the "แปลจากภาษาอังกฤษ" note.

**Photos:**
1. Resize to about **1600 px wide** (game photos: 1000 px) and export as **JPG**, ideally 200–400 KB. [squoosh.app](https://squoosh.app) works well for this.
2. Put the file in the right `assets/` folder.
3. Add or update its entry in `content.js`. File names are case-sensitive on Vercel.

If a photo is missing, the site shows a labelled placeholder instead of a broken image.

## Word wall

By default, words are saved in each visitor's browser (`localStorage`), so everyone sees only their own words.

To show **everyone's words live** (for example during the presentation):
1. In the Supabase dashboard, open the SQL editor and run `supabase.sql`.
2. In `storage.js`, set `enabled: true`, then deploy.

Only the **public anon key** goes in front-end code. Never put a `service_role` or secret key in this repo.

## Run locally

```bash
npx serve .        # or: python -m http.server 8000
```

## Deploy

Plain static site with no build step. Push to the GitHub repo connected to Vercel and it deploys automatically.
