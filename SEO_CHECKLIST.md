# ToolzTotal SEO Deployment Checklist

## Pre-deploy
- [ ] All schema blocks validated in Google Rich Results Test (sample 5 random pages)
- [ ] No TypeScript errors: `npx astro check` reports 0
- [ ] Build passes: `npm run build` exits 0
- [ ] Lighthouse mobile score ≥ 90 on homepage and a sample tool page

## Post-deploy (within 1 hour)
- [ ] Verify Google Search Console ownership (DNS TXT record OR HTML file upload)
- [ ] Submit sitemap: https://toolztotal.com/sitemap.xml
- [ ] Use URL Inspection API to request indexing for top 20 tool pages:
  /finance/mortgage-calculator
  /finance/loan-calculator
  /finance/compound-interest-calculator
  /finance/percentage-calculator
  /real-estate/mortgage-affordability-calculator
  /real-estate/rent-vs-buy-calculator
  /utility/age-calculator
  /utility/password-generator
  /utility/qr-code-generator
  /dev/json-formatter
  /dev/regex-tester
  /dev/uuid-generator
  /health/bmi-calculator
  /health/calorie-calculator
  /health/pregnancy-calculator
  /marketing/headline-analyzer
  /marketing/serp-preview
  /text/word-counter
  /education/gpa-calculator
- [ ] Verify GA4 (G-R7HNNJFVY8) is firing on all pages

## Daily for first 7 days
- [ ] Check GSC for crawl errors
- [ ] Check GSC for indexing status of submitted URLs
- [ ] Monitor GA4 real-time for traffic
- [ ] Submit any new pages for indexing same-day

## Weekly for first 12 weeks
- [ ] Review GSC Performance tab → identify which queries are showing impressions
- [ ] Review GSC Coverage tab → fix any excluded pages
- [ ] Publish 2-3 new blog posts
- [ ] Build 1-2 new tool pages
- [ ] Submit new URLs for indexing
