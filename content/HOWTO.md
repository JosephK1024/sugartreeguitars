# Managing Guitars (via GitHub web)

The site is content-driven. Every guitar is one MDX file in `content/builds/`.
Edit on github.com from any device — no tools to install. Push the commit and
AWS Amplify rebuilds automatically (~2 minutes).

## Add a new guitar

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
---

Body copy in markdown. Use `##` for section headings.
```

6. Commit directly to `main`.
7. Done. The site rebuilds and the new guitar appears at `/builds`.

## Mark a guitar available for sale

Edit the guitar's `.mdx` file, set:

```yaml
status: "available"
price: 8500
```

The build page now shows price and a Stripe Checkout button.

## Mark a guitar sold

Change `status: "available"` → `status: "sold"`. The page stays as a portfolio
record with a "Sold" badge.

## Mark a guitar given

Change `status: "given"`. The build appears under both `/builds` and the
giving page.

## Delete a guitar entirely

In `content/builds/`, click the file → trash icon → commit. The page is gone.

## Add photos

1. On github.com, navigate to `public/images/`.
2. **Add file → Upload files** → drag the photo in.
3. Use a clean filename like `koa-000-front.jpeg`.
4. Reference it in the build page (or update the build-photo map — ask your
   dev to centralize this if you find yourself doing it often).

## Status values reference

| Status | Where it shows | Buy button? |
|---|---|---|
| `in-progress` | `/builds` | no |
| `available` | `/builds`, home page | yes (needs `price`) |
| `sold` | `/builds` | no |
| `experimental` | `/builds`, `/experimental` | no |
| `given` | `/builds`, `/giving` (story) | no |

## Frontmatter fields

Required: `title`, `status`, `body`, `top`, `back_sides`, `neck`, `fretboard`,
`bridge`.

Optional: `bracing`, `scale`, `frets_to_body`, `nut_width`, `string_set`,
`glue`, `construction`, `year`, `serial`, `summary`, `price`, `currency`
(defaults to `USD`), `experimental` (boolean).
