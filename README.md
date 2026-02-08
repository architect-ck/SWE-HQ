# Chandrakant Sahu – Portfolio

Single-page portfolio (React + Vite) with resume content and **SWE HQ** YouTube integration. Deployable to **GitHub Pages**.

## Sections

- **Hero** – Name, tagline, CTAs (View work, Watch SWE HQ, Contact)
- **About** – Summary, location, interests
- **Experience** – PayU (SDE II, SDE I, Intern)
- **Work highlights** – 4 project case studies
- **Education** – IIIT-B M.Tech, CSVTU B.Tech
- **Skills** – Languages, frameworks, tools, databases
- **SWE HQ** – YouTube channel embed + subscribe CTA
- **Certifications & Achievements**
- **Contact & Links** – Email, phone, LinkedIn, LeetCode, HackerRank, EyeEm, YouTube

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deploy to GitHub Pages

### Option A: Project site (e.g. `username.github.io/swe-hq`)

1. Set the correct `base` in `vite.config.js` to your repo name:
   ```js
   const base = '/swe-hq/'   // use your repo name
   ```
2. In `package.json`, set `homepage` so `gh-pages` deploys to the right URL:
   ```json
   "homepage": "https://<your-username>.github.io/swe-hq"
   ```
3. Install and deploy:
   ```bash
   npm install
   npm run build
   npx gh-pages -d dist
   ```
4. In the repo: **Settings → Pages → Source** = “Deploy from a branch”. Branch: **gh-pages**, folder: **/ (root)**. Save.

Your site will be at `https://<your-username>.github.io/swe-hq`.

### Option B: User site (e.g. `username.github.io`)

1. Keep `base: '/'` in `vite.config.js`.
2. Set `homepage` in `package.json` to `https://<your-username>.github.io`.
3. Run `npm run build` then `npx gh-pages -d dist`.
4. In repo **Settings → Pages**: branch **gh-pages**, folder **/ (root)**.

## SWE HQ video embed

To show a featured video in the SWE HQ section, set your YouTube video ID in `src/components/SWEHQ.jsx`:

```js
const FEATURED_VIDEO_ID = 'YOUR_VIDEO_ID'  // from youtube.com/watch?v=YOUR_VIDEO_ID
```

Leave it empty (`''`) to hide the embed and only show the “Watch on YouTube · Subscribe” button.

## Tech

- React 18, Vite 6
- CSS (variables, no framework)
- Dark/light theme toggle
- Responsive layout
