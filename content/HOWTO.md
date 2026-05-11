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
  - /images/filename-front.jpeg
  - /images/filename-back.jpeg
  - /images/filename-detail.jpeg
---

Body copy in markdown. Use `##` for section headings.
```

6. Commit directly to `main`.
7. Done. The site rebuilds and the new guitar appears at `/builds`.

### Add photos to a guitar

1. On github.com, navigate to `public/images/`.
2. **Add file → Upload files** → drag the photos in.
3. Use clean filenames like `koa-000-front.jpeg`, `koa-000-back.jpeg`.
4. In the guitar's MDX file, add or extend the `photos:` list:

```yaml
photos:
  - /images/koa-000-front.jpeg
  - /images/koa-000-back.jpeg
  - /images/koa-000-detail.jpeg
```

The first photo is the hero on both the list page and the detail page.
Additional photos appear in a gallery below the specs section.

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
