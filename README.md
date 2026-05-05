# SugarTree Guitars

Content + commerce site for SugarTree Guitars. Built with Next.js (App Router),
Tailwind, MDX content, and Stripe Checkout. Deployed via AWS Amplify Hosting.

## Stack

- **Next.js 15** (App Router) + React 19
- **Tailwind CSS** with brand palette built around bark `#593219`
- **MDX in `/content`** for builds and stories — git is the CMS
- **Stripe Checkout** for full-payment guitar reservations (no cart, no inventory system)
- **AWS Amplify Hosting** via `amplify.yml`

## Develop

```bash
cp .env.local.example .env.local   # add Stripe sandbox keys
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Stripe

- Use sandbox/test keys in development
- `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET`
- Webhook endpoint: `/api/stripe/webhook`
- Checkout endpoint: `/api/checkout` (POST `{ slug }`)

For local webhook testing:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

## Content

Build pages live in `content/builds/*.mdx`. Frontmatter drives the spec table
and status badge:

- `status`: `in-progress` | `available` | `sold` | `experimental` | `given`
- `price` (number) + `currency` (default USD) — only used when `status: available`
- `top`, `back_sides`, `neck`, `fretboard`, `bridge`, `bracing`, `scale`, `frets_to_body`, `nut_width`, `string_set`, `glue`, `construction`, `year`, `serial`, `summary`

To list a guitar for sale, set `status: available` and add `price`. The build
page will show a Stripe Checkout button.

## Brand assets

- `public/brand/sugartree-mark.svg` — circular tree mark (favicon, icon)
- `public/brand/sugartree-lockup.svg` — full lockup with type
- Brand color: `#593219` (Tailwind: `bark-600`)

Photographs go in `public/images/` — slot them into pages by replacing
`<ImagePlaceholder />` with `<Image src="/images/..." />`.

## Deploy

Connect the repo to AWS Amplify Hosting. The `amplify.yml` file handles the
build. Set Stripe and `NEXT_PUBLIC_SITE_URL` env vars per branch — sandbox keys
on preview branches, live keys on `main`.

