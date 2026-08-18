# Art-Chinor site

Static site, no build step. This folder itself is the publish root.

- `index.html` — home page
- `menu.html` — full menu
- `css/style.css`, `js/i18n.js` — shared styles/lang switch
- `about`, `links`, `location`, `menu/` (photos) — your source research, not part of the built site

## Deploy to Netlify

**Option A — drag & drop (fastest, no CLI/login needed from here):**
1. Go to https://app.netlify.com/drop
2. Drag this whole `art-chinor` folder onto the page.
3. Done — live URL appears immediately.

**Option B — Netlify CLI (from this folder):**
```
npx netlify-cli login
npx netlify-cli deploy --dir=.          # draft preview
npx netlify-cli deploy --dir=. --prod   # production
```

**Option C — Git-connected (auto-deploys on push):**
1. Push this folder to a GitHub repo.
2. In Netlify: Add new site → Import an existing project → pick the repo.
3. Build command: (leave empty) — Publish directory: `.` (root).
