# Manohar & Suneetha — Wedding Website

A free, static wedding invitation site (no server, no database). Hero photo, countdown, events with
add-to-calendar, gallery, Google Map and RSVP via WhatsApp or Google Form.

## 1. Customise
Open **`config.js`**. Set `side` to `"groom"` or `"bride"` (the bride's invitation swaps Pellikoduku for
Pellikuthuru — fill in its details and set `tba: false`). Event dates, times and venues are all in this file. Add more photos by copying them into `img/` and listing
them under `gallery`. Nothing else needs editing.

## 2. Preview locally
Double-click `index.html`, or run `python3 -m http.server` and open http://localhost:8000

## 3. Host free on GitHub Pages
1. Create a new **public** repository on GitHub (e.g. `wedding`).
2. Upload all files in this folder (drag & drop on the repo page → *Add file → Upload files*) and commit.
3. Go to **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   choose branch `main`, folder `/ (root)`, and Save.
4. After about a minute your site is live at `https://<your-username>.github.io/wedding/`.

Optional custom domain: add it under Settings → Pages → Custom domain.

## Tips
- Replace `img/og.jpg` (1200×630) to change the preview image shown when the link is shared.
- Inspired by the feature set of github.com/rampatra/wedding-website (GPL-3.0).
