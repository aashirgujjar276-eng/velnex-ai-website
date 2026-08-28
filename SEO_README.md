# Velnex AI — SEO System (Section 16)

This documents the technical/on-page SEO layer added across the whole site.
Nothing in the visible copy was rewritten — this is infrastructure only.

## How to add SEO to a new page

Every routed page renders `<Seo />` once, near the top of its JSX, before
any content:

```jsx
import Seo from "../components/Seo.jsx";
import { organizationSchema, breadcrumbSchema } from "../lib/structuredData.js";

<Seo
  path="/your-path"
  title="Unique Title | Velnex AI"
  description="One or two sentences, unique to this page, under ~160 characters."
  jsonLd={[organizationSchema(), breadcrumbSchema([{ label: "Your Page", path: "/your-path" }])]}
/>
```

That one component sets: `<title>`, meta description, canonical link,
`robots`, all Open Graph tags, all Twitter card tags, and any JSON-LD you
pass in. You never need to touch `document.title` or create `<meta>` tags
by hand again.

## Indexability is automatic, not a checklist

`src/data/seoRoutes.js` builds the full list of real URLs on the site and
decides which ones are indexable:

- Static pages (Home, Pricing, Solutions hub, Contact, legal pages, etc.)
  are always indexable.
- A **solution / industry / AI software detail page** (`/solutions/:slug`
  etc.) is indexable **only if it has a real content entry** in
  `solutionsContent.js` / `industriesContent.js` / `aiSoftwareContent.js`.
  Write the content entry, and the page automatically becomes indexable and
  appears in the sitemap on the next build — nothing else to update.
- Anything still rendered by the generic `Placeholder.jsx` shell (unbuilt
  slugs, unbuilt Resources sub-pages) is `noindex` on purpose. It's the
  same boilerplate on many URLs — indexing it would be exactly the "thin,
  auto-generated" content Google penalizes. It stays crawlable so internal
  links still get followed, it just doesn't enter the index.

This is also what the sitemap generator reads from, so the sitemap and the
site's actual `noindex` tags can never drift out of sync.

## Sitemap

`scripts/generate-sitemap.mjs` runs automatically after `npm run build`
(via the `postbuild` script in `package.json`) and writes
`dist/sitemap.xml` from `seoRoutes.js`. Only `indexable: true` routes are
included. No manual step needed as new pages get built.

## robots.txt

`public/robots.txt` allows all crawling and points to the sitemap. Per-page
`noindex` is handled via the meta robots tag (through `<Seo noindex />`),
**not** `Disallow` — blocking a page from crawling would also block Google
from ever seeing its `noindex` tag, which is the opposite of what we want
for the placeholder pages.

## Redirects

`src/data/redirects.js` is the source of truth for any URL that has moved
(currently: the old `/legal/...` paths from before the section 15
restructure). Two things read from it conceptually:

1. **`public/_redirects`** — real edge-level 301s on Cloudflare. This is
   what search engines and old backlinks actually want, and fires before
   the app even loads.
2. **`main.jsx`** — a client-side `<Navigate>` fallback for each entry, in
   case a cached SPA shell ever navigates to an old path in-app.

When a URL changes in the future, add one line to `_redirects` and one
entry to `redirects.js`.

## 404 handling

`src/pages/NotFound.jsx` is the catch-all route — noindexed, with links
back into the real site instead of a dead end.

**Known limitation:** this site is deployed as a client-side SPA on
Cloudflare (`wrangler.toml` → `not_found_handling = "single-page-application"`).
That means any unmatched URL returns an HTTP **200**, not a real 404 — a
standard tradeoff for SPA routing, since Cloudflare can't tell a mistyped
URL from a valid dynamic route like `/solutions/ai-receptionist` without
knowing the app's routes. The `noindex` meta tag on `NotFound.jsx` is what
actually keeps these URLs out of Google, since the HTTP status can't be
relied on here.

## Structured data (JSON-LD)

`src/lib/structuredData.js` has four builders, all using only data that's
already real elsewhere on the site — nothing invented:

- `organizationSchema()` — emitted once, statically, in `index.html` (so
  it's visible even to crawlers that don't run JS), name/url/logo/sameAs only.
- `breadcrumbSchema(trail)` — emitted per page, matches the visible breadcrumb.
- `faqSchema(faqs)` — only on pages with a real, visible FAQ accordion
  (solution/industry/software detail pages, Book a Demo).
- `serviceSchema(...)` — on solution/industry/software detail pages.

No ratings, reviews, addresses, or certifications are declared anywhere —
we don't have confirmed data for those, and inventing them would violate
Google's structured data guidelines.

## Known limitation: social share previews on client-rendered pages

Facebook, Twitter/X, LinkedIn, and WhatsApp's link-preview bots generally
**don't execute JavaScript**. That means when someone shares a specific
page (e.g. `/solutions/ai-receptionist`), those bots will currently see the
**static homepage OG tags in `index.html`**, not that page's own title/image
— because the per-page tags only get set once React mounts and `<Seo />`
runs.

Googlebot itself isn't affected (it renders JS before indexing), so search
rankings and search snippets are fine. This only affects how a shared link
*looks* in a chat app or social feed.

**If accurate per-page social previews matter**, the fix is prerendering:
generate a static HTML file per route with that page's own meta tags baked
in (a build step, not a rewrite of the app). That's a reasonable follow-up
project but was out of scope here — flagging it now so it's a known,
deliberate gap rather than a surprise.

## Page speed changes made

- Fonts load via `<link rel="preconnect">` + `<link rel="stylesheet">` in
  `index.html` instead of a CSS `@import`, so the browser can start
  fetching them immediately instead of waiting on `index.css` to parse.
- Every route is code-split with `React.lazy()` (see `main.jsx`) — a visit
  to `/pricing` no longer downloads the code for every solution/industry
  page. Confirmed in a real build: each page is its own small chunk
  (2–24 kB) instead of one large bundle.
- The homepage hero image has explicit `width`/`height` (prevents layout
  shift) and `fetchpriority="high"` (it's almost certainly the LCP element).

## What was intentionally left alone

- No visible page copy was rewritten — per the brief, this was
  infrastructure only.
- No fake certifications, ratings, addresses, or reviews were added
  anywhere, including in structured data.
- Pages without real content yet were **not** filled in with placeholder
  SEO copy just to "have something" — they're correctly marked `noindex`
  instead, which is the honest way to handle unbuilt pages.
