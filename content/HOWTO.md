# Managing Content (via GitHub web)

The site is content-driven. Guitars are MDX files in `content/builds/`.
Articles (Notes) are MDX files in `content/articles/`.
Edit on github.com from any device — no tools to install. Push the commit and
AWS Amplify rebuilds automatically (~2 minutes).

---

## Guitars (Builds)

### Add a new guitar

1. Open the repo on github.com.
2. Navigate to `content/builds/`.
3. Click **Add file → Create new file**.
4. Name it `slug-of-the-guitar.mdx` (lowercase, hyphens, no spaces). The slug
   becomes the URL: `sugartreeguitars.com/builds/slug-of-the-guitar`.
5. Paste this template and edit:

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

6. Commit directly to `main`.
7. Done. The site rebuilds and the new guitar appears at `/builds`.

### Add photos to a guitar

Every guitar's photos live in **their own folder, named after the guitar's
file**. A guitar at `content/builds/koa-000-12fret.mdx` keeps its photos in
`public/images/koa-000-12fret/`. This is not just for tidiness — it's the
layout the CMS reads and writes, so photos added either way stay compatible.

**The easy way — use the CMS.** Open `/keystatic`, edit the guitar, and drag
photos into the Photos field. It creates the folder, files the photos in it,
and writes the paths for you. Nothing else to do.

**By hand on github.com:**

1. Navigate to `public/images/`.
2. **Add file → Create new file**. In the filename box type the guitar's
   slug, then `/`, then a filename — e.g.
   `koa-000-12fret/front.jpeg`. Typing the `/` creates the folder.
   (If the folder already exists, just open it and use **Upload files**.)
3. Use clean filenames: `front.jpeg`, `back.jpeg`, `detail.jpeg`.
4. In the guitar's MDX file, list them by bare filename:

```yaml
photos:
  - front.jpeg
  - back.jpeg
  - detail.jpeg
```

A bare filename is looked up in that guitar's own folder, so you never have to
repeat the slug. The first photo is the hero on both the list page and the
detail page; the rest appear in a gallery below the specs.

To reuse a shared photo that isn't specific to one guitar — a shop shot, say —
give the full path instead, and it's used as-is:

```yaml
photos:
  - /images/wood-drying.jpeg
```

Articles work the same way: `public/images/<article-slug>/photo.jpeg`.

### Add a video to a guitar

Add a `video_url:` field pointing to a YouTube or Vimeo link:

```yaml
video_url: "https://youtu.be/VIDEO_ID"
```

A "Hear it played" section with an embedded player appears at the bottom of the
build page. YouTube and Vimeo links both work.

### Mark a guitar available for sale

Edit the guitar's `.mdx` file, set:

```yaml
status: "available"
price: 8500
```

The build page now shows price and a Stripe Checkout button.

### Mark a guitar sold

Change `status: "available"` → `status: "sold"`. The page stays as a portfolio
record with a "Sold" badge.

### Mark a guitar given

Change `status: "given"`. The build appears under both `/builds` and the
giving page.

### Delete a guitar entirely

In `content/builds/`, click the file → trash icon → commit. The page is gone.

### Status values reference

| Status | Where it shows | Buy button? |
|---|---|---|
| `in-progress` | `/builds` | no |
| `available` | `/builds`, home page | yes (needs `price`) |
| `sold` | `/builds` | no |
| `experimental` | `/builds`, `/experimental` | no |
| `given` | `/builds`, `/giving` (story) | no |

### Build frontmatter fields

Required: `title`, `status`, `body`, `top`, `back_sides`, `neck`, `fretboard`, `bridge`.

Optional: `bracing`, `scale`, `frets_to_body`, `nut_width`, `string_set`,
`glue`, `construction`, `year`, `serial`, `summary`, `price`, `currency`
(defaults to `USD`), `experimental` (boolean), `photos` (list of image paths),
`video_url` (YouTube or Vimeo link), `hero_caption` (alt text for the hero image).

---

## Notes (Articles)

### Add a new article

1. Open the repo on github.com.
2. Navigate to `content/articles/`.
3. Click **Add file → Create new file**.
4. Name it `slug-of-the-article.mdx` (lowercase, hyphens, no spaces). The slug
   becomes the URL: `sugartreeguitars.com/articles/slug-of-the-article`.
5. Paste this template and edit:

```mdx
---
title: "Article Title"
date: "2026-05-01"
photo: /images/filename.jpeg
photo_caption: "Optional caption shown under the photo."
summary: "One or two sentence summary shown on the Notes list page."
---

Write the article body in markdown. Use `##` for section headings.

Each paragraph is just a blank line between blocks of text.
```

6. Commit directly to `main`.
7. Done. The article appears at `/articles` in reverse-date order.

### Article frontmatter fields

Required: `title`, `date` (ISO format: `YYYY-MM-DD`).

Optional: `photo` (path to image in `public/`), `photo_caption`, `summary`.

### Add a photo to an article

1. Upload the photo to `public/images/` on github.com.
2. Reference it in the frontmatter: `photo: /images/filename.jpeg`.

One photo per article — it displays as a wide banner below the title.
