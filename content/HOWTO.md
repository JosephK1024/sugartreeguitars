# Managing Content

There are two ways to change what's on the site. Both end up doing the same
thing — committing a file to `main` on GitHub, which makes AWS Amplify rebuild
the site (~2 minutes).

1. **The admin (Keystatic)** — a web form at `/keystatic`. Easier, harder to
   get wrong, and it handles photos for you. Use this unless you have a reason
   not to.
2. **Editing the files by hand** on github.com. Everything lives as MDX in
   `content/builds/` and `content/articles/`. Useful for bulk edits, or for the
   one field the admin doesn't expose.

---

## The admin

Open **`sugartreeguitars.com/keystatic`** and sign in with GitHub. Anything you
save is committed to `main` as you, and the site rebuilds itself.

Running the site locally (`npm run dev`) instead? Then `localhost:3000/keystatic`
needs no login and edits the files on your own machine.

The sidebar has two collections:

- **Guitars** → the build pages at `/builds`
- **Notes** → the articles at `/articles`

Click a collection to see everything in it, click an entry to edit it, or use
**New** to add one. The editor puts the long-form text on the left and all the
fields on the right. **Save** (top right) commits. The trash icon beside it
deletes the entry.

---

## Guitars

### Add a new guitar

**Guitars → New.** Fill in what you know and Save. The only field the admin
actually insists on is the **Slug**; everything else can be left blank and
filled in later.

That's forgiving by design — a blank spec is simply left out of the spec table
rather than showing an empty row. So a guitar you've only just started can
carry a title, a status, and nothing else. For a page that reads as finished,
though, you want at least: Body shape, Top wood, Back & sides, Neck, Fretboard,
Bridge, Year, and a Summary.

The **Title** generates the URL slug (`Hawaiian Koa 000 — 12 Fret` becomes
`/builds/koa-000-12fret`). You can edit it yourself in the Slug field just
below. Changing the slug later changes the URL and breaks any existing links to
that page, so pick it once and leave it.

### Add photos

Scroll to **Photos** and click **Add**, then choose a file. Add as many as you
like and drag them into order — **the first photo is the hero** on both the
guitars list and the guitar's own page; the rest become a gallery below the
specs.

The admin files each photo under `public/images/<guitar-slug>/` automatically.
That per-guitar folder is the layout the site and the admin both expect, so if
you ever add photos by hand, match it — see [By hand](#by-hand) below.

**Hero image caption** is the alt text for the hero photo — worth filling in.

### Add a video

Paste a YouTube or Vimeo link into **Video URL**. A "Hear it played" section
with an embedded player appears at the bottom of the guitar's page.

### Put a guitar up for sale

Set **Status** to `Available` and make sure **Price (USD)** is filled in. The
page then shows the price and a Stripe checkout button. Both are needed — an
available guitar with no price shows no button.

### Mark one sold, or given

Set **Status** to `Sold` or `Given`. The page stays up as a portfolio record
with the matching badge, and the checkout button disappears.

### Hide a guitar without deleting it

Uncheck **Published**. It vanishes from the site — list pages, its own URL, the
homepage — but the file and all its content stay put. Check it again to bring
it back. This is the safe way to park a draft.

### Delete one for good

Open the entry and click the trash icon in the top-right toolbar. The page and
its file are gone. Prefer unchecking Published unless you really mean it.

### Status values

| Status | Shows on | Checkout button |
|---|---|---|
| `In Progress` | `/builds` | no |
| `Available` | `/builds` | yes — needs a price |
| `Sold` | `/builds` | no |
| `Experimental` | `/builds`, `/experimental` | no |
| `Given` | `/builds` | no |

Guitars are ordered in-progress → available → experimental → sold → given, and
the homepage shows the **first three in that order** — so what lands on the
homepage depends on what you have, not on any single status.

There is also a separate **Experimental build** checkbox. It puts a guitar on
`/experimental` *while keeping whatever status it has*, so a guitar can be both
`Available` and experimental. Setting Status to `Experimental` is the other way
onto that page, but it gives up the sale.

---

## Notes

### Add an article

**Notes → New.** Title and Date are required — Date defaults to today and
drives the ordering, newest first. Summary shows on the `/articles` list.

Write the body in the large editor on the left. `##` gives you a section
heading; a blank line starts a new paragraph.

### Add a photo

Choose a file in the **Photo** field. One photo per article — it runs as a wide
banner under the title. **Photo caption** appears beneath it.

### Hide an article

Uncheck **Published**, same as guitars.

---

## By hand

Everything above can be done by editing files on github.com instead. Commit
directly to `main`.

### Where things live

```
content/builds/<slug>.mdx        one file per guitar
content/articles/<slug>.mdx      one file per article
public/images/<slug>/            that entry's photos
public/images/*.jpeg             shared site photos (homepage, about, …)
```

### Guitar template

Create `content/builds/slug-of-the-guitar.mdx` (lowercase, hyphens, no
spaces — the filename *is* the URL):

```mdx
---
title: "Body Type — Wood Combo"
status: "in-progress"
body: "000"
top: "Adirondack spruce"
back_sides: "Bolivian rosewood"
neck: "Spanish cedar with carbon fiber tube"
fretboard: "Ebony"
bridge: "Relieved ebony pyramid"
bracing: "Forward shifted scalloped X"
scale: "25.4\""
frets_to_body: 14
year: 2026
summary: "One-line description shown on the build page hero."
photos:
  - front.jpeg
  - back.jpeg
  - detail.jpeg
---

Body copy in markdown. Use `##` for section headings.
```

### Article template

Create `content/articles/slug-of-the-article.mdx`:

```mdx
---
title: "Article Title"
date: "2026-05-01"
photo: photo.jpeg
photo_caption: "Optional caption shown under the photo."
summary: "One or two sentence summary shown on the Notes list page."
---

Write the article body in markdown. Use `##` for section headings.
```

### Adding photos by hand

Photos go in a folder named after the entry — `public/images/koa-000-12fret/`
for `content/builds/koa-000-12fret.mdx`.

1. Navigate to `public/images/`.
2. **Add file → Create new file**. In the filename box type the slug, then `/`,
   then a filename — `koa-000-12fret/front.jpeg`. Typing the `/` creates the
   folder. If the folder already exists, open it and use **Upload files**.
3. Use clean filenames: `front.jpeg`, `back.jpeg`, `detail.jpeg`.
4. List them in the frontmatter by **bare filename**:

```yaml
photos:
  - front.jpeg
  - back.jpeg
```

A bare filename is looked up in that entry's own folder, so you never repeat
the slug. To point at a shared photo that doesn't belong to one guitar, give
the full path and it is used as-is:

```yaml
photos:
  - /images/wood-drying.jpeg
```

### Frontmatter reference

**Guitars** — required: `title`, `status`, `body`, `top`, `back_sides`, `neck`,
`fretboard`, `bridge`.

Optional: `bracing`, `scale`, `frets_to_body`, `nut_width`, `string_set`,
`glue`, `construction`, `year`, `serial`, `summary`, `price`, `currency`
(defaults to `USD`), `experimental` (boolean), `published` (boolean, defaults
to true), `photos` (list), `video_url`, `hero_caption`.

**Articles** — required: `title`, `date` (`YYYY-MM-DD`).

Optional: `photo`, `photo_caption`, `summary`, `published`.

### The one field the admin doesn't expose

`currency`. It defaults to `USD`, so unless you're pricing a guitar in
something else, ignore it — and if you are, set it by hand.
