# ToolzTotal SEO Refactor - Checklist

## Step 0: ToolSchema/breadcrumb/related-tools components sanity
- [x] Confirm components exist: `ToolSchema.astro`, `Breadcrumbs.astro`, `RelatedTools.astro`
- [x] Confirm ToolSchema deterministic URL building + FAQPage conditional emission

## Step 1: Fix `[category]/[tool].astro` (coming soon template prop mismatch)
- [x] Pass correct props into `ToolSchema`:
  - `toolSlug={tool.slug}`
  - `categorySlug={category.slug}`
  - ensure prop names match `ToolSchema.astro`
- [x] Fix Breadcrumbs call to match its props interface (removed `categoryHref`, added `categorySlug` + `toolSlug`)

## Step 2: Refactor live tool pages (only those matching inline `faqSchema` + Layout `faqJsonLd`)
- [ ] Remove inline FAQPage JSON-LD blocks (no duplication with ToolSchema)
- [ ] Replace inline breadcrumbs with `<Breadcrumbs />`
- [ ] Replace inline related-tools blocks with `<RelatedTools />` where pattern matches
- [ ] Replace/emit FAQPage via `<ToolSchema faqs={...} />` (never both)

## Step 3: Skip non-matching pages
- [ ] Document pages skipped + reasons

## Step 4: Validate
- [ ] `npm run build`
- [ ] Spot check Rich Results expectations (FAQPage + BreadcrumbList)
- [ ] Confirm canonical URLs are correct
