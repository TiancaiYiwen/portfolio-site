# Yiwen Li — Instructional Design Portfolio

A plain static site: HTML + one CSS file, no build step, no framework. Hosted free on GitHub Pages.

Live: https://tiancaiyiwen.github.io/portfolio-site/

## What's where

```
index.html                  Home
work/index.html             Selected Work (all three project cards)
work/<project>/index.html   Case studies (same template ×3)
about/  resume/  contact/   The other pages
courses/<project>/          Exported Storyline / Rise / job-aid files live here
assets/css/site.css         ALL styling. Colors, fonts and spacing are tokens at the top.
assets/js/site.js           Small optional extras (frame counter, highlighter). Site works without it.
assets/fonts/               Archivo (self-hosted, SIL Open Font License)
assets/img/                 Images (one subfolder per project for screenshots)
assets/Yiwen-Li-Resume.pdf  Résumé download (currently a placeholder)
.nojekyll                   Tells GitHub Pages to serve files as-is. Don't delete.
```

## How the design works

The whole site is styled like an instructional designer's **storyboard**. Every page is a stack of numbered frames:

```html
<section class="frame" id="..." data-frame="02" data-caption="Featured project">
  <p class="frame__num">…Frame 02…</p>        <!-- blue number column -->
  <div class="frame__screen">…</div>         <!-- main content -->
  <aside class="frame__notes">…</aside>      <!-- optional notes column -->
</section>
```

- Leave out the `<aside>` and add `frame--wide` to the section for a full-width frame.
- When you add or remove a frame, renumber the frames that come after it.
- Add `frame--measure` (yellow) **only** to frames about evaluation or measurement. A notes row gets the same treatment with `note note--measure`. Yellow means "how I'd measure it" and nothing else.
- Blue is only for structure: the name block, frame numbers and footer.

## Finding what still needs filling in

Every placeholder looks like `[[this]]` and shows up highlighted in yellow on the page.

```bash
grep -rn "\[\[" --include=*.html .
```

When a page is done, no `[[` should be left in it.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. (Opening the HTML files directly also mostly works, but folder links like `work/` need the server.)

## Deploy (GitHub Pages)

One-time setup: on GitHub go to **Settings → Pages**, set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`, and save.

After that, every push to `main` goes live in about a minute:

```bash
git add -A
git commit -m "Describe the change"
git push
```

## Adding a course export

The three "Launch project" buttons point to:

| Project | Folder | Launch file |
|---|---|---|
| Storyline simulation | `courses/flagship-simulation/` | `story.html` |
| Rise course | `courses/rise-course/` | `index.html` |
| Job aid / microlearning | `courses/job-aid/` | `index.html` |

1. In Storyline: **Publish → Web**. In Rise: **Export → Web**.
2. Delete the placeholder file in the matching folder and copy the *contents* of the export into it, so the launch file sits directly in that folder.
3. Preview locally, then push.

**Videos:** don't commit big video files. Upload to YouTube (unlisted) or Vimeo and embed the player. GitHub warns above 50 MB per file and refuses above 100 MB.

## Adding or renaming a project

1. Copy a folder in `work/` (e.g. `work/rise-course/` → `work/new-project/`) and edit the text.
2. Add a matching `courses/new-project/` folder.
3. Add a card to `work/index.html` (and `index.html` if it should be on the home page). Copy an existing `<li>…</li>` card.
4. Add it to the "Portfolio projects" list in `resume/index.html`.

## Screenshots

- Put them in `assets/img/<project>/`, e.g. `assets/img/flagship-simulation/screen-1.webp`.
- Export at ~1280 px wide, as WebP or JPEG. Aim for under 200 KB each.
- In the case study, replace the `media-placeholder` div with the commented-out `<img>` line below it and write real alt text describing what the screen shows.

## Custom domain (later)

1. Buy a domain (e.g. `yiwenli.com`).
2. GitHub **Settings → Pages → Custom domain**: enter it. This adds a `CNAME` file to the repo.
3. At the domain registrar, add DNS records following GitHub's "Managing a custom domain" docs (four `A` records for the apex, or a `CNAME` for `www` pointing to `tiancaiyiwen.github.io`).
4. Tick **Enforce HTTPS** once it's available.
5. Search and replace `https://tiancaiyiwen.github.io/portfolio-site/` with the new domain (used in the `canonical` and social-sharing tags).

All links inside the site are relative, so nothing else changes.

## To-do before sharing

- [ ] Replace every `[[placeholder]]`
- [ ] Real résumé PDF at `assets/Yiwen-Li-Resume.pdf`
- [ ] Social-sharing image at `assets/img/social-card.png` (1200×630)
- [ ] Remove the `.ph` highlight rule from `site.css` once no placeholders remain
