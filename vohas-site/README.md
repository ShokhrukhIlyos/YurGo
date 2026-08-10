# Vohas Restaurant Website

A static one-page site for Vohas (Termez, Uzbekistan): hero, about, menu, Instagram gallery, and location/contact.

Files:
- `index.html`
- `style.css`
- `script.js`
- `netlify.toml`

No build step — plain HTML/CSS/JS.

## Preview locally

Open `index.html` directly in a browser, or serve it:

```
npx serve .
```

## Deploy to Netlify

**Option A — Drag and drop (fastest, no account setup beyond signing in):**
1. Go to https://app.netlify.com/drop
2. Drag the `vohas-site` folder onto the page.
3. Netlify gives you a live URL immediately. You can rename the site (Site settings → change site name) or attach a custom domain later.

**Option B — Netlify CLI:**
```
npm install -g netlify-cli
cd vohas-site
netlify deploy          # preview deploy
netlify deploy --prod   # production deploy
```
The CLI will prompt you to log in to Netlify and either link to an existing site or create a new one.

**Option C — Git-based (auto-deploys on push):**
1. Push this folder to a GitHub repo.
2. In Netlify: "Add new site" → "Import an existing project" → pick the repo.
3. Build command: leave empty. Publish directory: `.` (or the folder path if the repo has more than this site).

## Table feedback (QR code)

Each table's QR code links to `menu.html?t=NN`. On that page a "Feedback" button opens a rating + comment form. Submissions are stored via a Netlify Function (`netlify/functions/feedback.mjs`) backed by Netlify Blobs — no external database needed.

**Setup after deploying to Netlify:**
1. In Site settings → Environment variables, add `FEEDBACK_ADMIN_KEY` with a private value you choose (this is the admin password).
2. Redeploy so the function picks up the variable.
3. Visit `/admin.html`, enter that key to view stats and all submitted feedback (total count, average rating, rating breakdown, per-table breakdown, filterable list).

Keep the admin key private — anyone with it can read all feedback. `admin.html` is not linked from the site navigation and is marked `noindex`.

## Notes

- Menu prices/hours are sourced from internal research notes and should be re-confirmed with the restaurant before treating them as final.
- The gallery embeds live Instagram posts from `@vohas.rest` via Instagram's official embed widget — nothing is downloaded or re-hosted, so if a post is deleted the embed will simply stop rendering.
