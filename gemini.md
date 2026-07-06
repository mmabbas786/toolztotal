Always Use:
- astro, tailwind-4-docs, web-design-guidelines these 3 skills for this project
- DESIGN.md for this project design

I have initialized a new AstroJS project for a multi-tool utility website. Use the astro-docs MCP server, 
the tailwind-4-docs skill, and the web-design-guidelines skill if available. Also reference @DESIGN.md 
(Vercel design system) for visual direction. Use MPA (multi-page application) architecture — no client-side 
routing framework, static HTML pages per route, for best SEO and Core Web Vitals.

PROJECT
Name: ToolzTotal
Domain: toolztotal.com
Tagline: Free online calculators and tools — no signup, no clutter, just answers.
Positioning: A clean, fast, privacy-first alternative to ad-cluttered calculator sites. Every tool 
runs client-side (nothing uploaded to a server), loads instantly, and requires no account.

COMPETITOR CONTEXT (analyze but do NOT copy design/UI from these — differentiate instead)
- calculator.net — huge tool library but visually dated and ad-cluttered
- omnicalculator.com — good breadth but slow JS hydration, cluttered layout
- bankrate.com / nerdwallet.com — finance tools buried in lead-gen forms and content
Our edge: minimal design, fast load, no email/signup gates anywhere, mobile-first.

===========================================
TASK: BUILD THE HOMEPAGE (index route) + SITE SCAFFOLD
===========================================

1. HERO SECTION
   - Headline built around primary keyword "free online calculators and tools"
   - Subheadline reinforcing: no signup, no ads-first clutter, instant results, mobile-friendly
   - A prominent search/filter input ("Search 60+ free tools...") — client-side JS filter over 
     the tool list rendered below (no backend needed)
   - Keep it clean and spacious, Vercel-style — lots of whitespace, one strong CTA scroll to tools

2. CATEGORY NAVIGATION
   Create a category grid/nav with these sections (used for both nav menu and homepage anchors):
   - Finance & Loans
   - Real Estate & Mortgage
   - Health & Fitness
   - Developer Tools
   - Text & Content
   - Marketing & SEO
   - Everyday / Life Utility
   - Legal & Employment
   Each category card: icon, name, short one-line description, tool count badge.

3. FEATURED TOOLS DIRECTORY (Phase 1 — 15 tools)
   Render these as cards grouped by category, each with: tool name, one-line description, and a link 
   to /category-slug/tool-slug (create the routes as placeholder pages with a "Tool launching soon" 
   state and an email-free "notify me" client-side placeholder — DO NOT build calculator logic yet).

   Finance & Loans:
   - Mortgage Payment Calculator (/finance/mortgage-calculator)
   - Loan Payment Calculator (/finance/loan-calculator)
   - ROI Calculator (/finance/roi-calculator)
   - Self-Employment Tax Calculator (/finance/self-employment-tax-calculator)
   - Compound Interest Calculator (/finance/compound-interest-calculator)
   - Payroll Tax Calculator (/finance/payroll-tax-calculator)
   - Break-Even Analysis Calculator (/finance/break-even-calculator)
   - Amortization Schedule Calculator (/finance/amortization-calculator)

   Real Estate & Mortgage:
   - Rental Property Cash Flow Calculator (/real-estate/rental-property-calculator)
   - Mortgage Affordability Calculator (/real-estate/mortgage-affordability-calculator)
   - Mortgage Refinance Calculator (/real-estate/mortgage-refinance-calculator)
   - Rent vs Buy Calculator (/real-estate/rent-vs-buy-calculator)

   Everyday / Life Utility:
   - Age Calculator (/utility/age-calculator)
   - Random Password Generator (/utility/password-generator)
   - QR Code Generator (/utility/qr-code-generator)

   Mark each card "Live" or "Coming Soon" with a simple status badge (all "Coming Soon" for now 
   except the homepage itself).

4. TRUST / WHY TOOLZTOTAL SECTION
   Three or four short trust pillars with icons:
   - "100% Client-Side" — nothing you enter is ever uploaded or stored
   - "No Signup, Ever" — every tool works instantly, no account required
   - "Built for Speed" — static site architecture, near-instant load times
   - "Always Free" — no paywalls, no premium tier

5. SEO TEXT BLOCK (place below the fold, ~600 words)
   Write an original ~600-word section about ToolzTotal for on-page SEO. 
   Primary keyword: "free online calculators and tools"
   Supporting keywords (weave naturally, do not keyword-stuff): mortgage calculator, loan calculator, 
   roi calculator, age calculator, password generator, qr code generator, online calculator tools, 
   free calculator website, no signup calculator tools
   Structure: what ToolzTotal is → who it's for → what makes it different from calculator.net/
   omnicalculator → brief mention of the category breadth → closing CTA to browse tools.

6. FAQ SECTION (JSON-LD structured data required)
   Add an SEO-friendly FAQ section for these questions, with FAQPage JSON-LD schema in the page head:
   - Are ToolzTotal's calculators really free?
   - Do I need to create an account to use the tools?
   - Is my data safe when I use these calculators?
   - How accurate are the mortgage and loan calculators?
   - Can I use ToolzTotal on my phone?
   - How often are new tools added?
   Use this JSON-LD format:
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "FAQPage",
     "mainEntity": [{
       "@type": "Question",
       "name": "...",
       "acceptedAnswer": { "@type": "Answer", "text": "..." }
     }]
   }
   </script>

7. FOOTER
   - Links to all 8 category pages
   - Links to: Privacy Policy, Terms & Conditions, About Us, Contact Us (create these as separate 
     MPA routes — stub content for now, but structurally complete and linked from homepage AND footer 
     so they're crawlable and visible for future AdSense review)
   - Copyright line, ToolzTotal name

8. TECHNICAL / SEO REQUIREMENTS
   - Clean URLs only (no query strings) — e.g. /finance/mortgage-calculator not /page?id=1
   - <title> tag containing "Free Online Calculators & Tools | ToolzTotal"
   - <meta description> under 160 characters containing primary keyword
   - Open Graph + Twitter Card meta tags for the homepage
   - All images/icons have descriptive alt attributes
   - Add a robots.txt referencing sitemap.xml
   - Generate sitemap.xml including homepage, all category pages, all Phase 1 tool placeholder 
     pages, and the four legal/info pages
   - Add custom 404 and 500 error pages (on-brand, with a link back to homepage and tool search)
   - Mobile responsive — test breakpoints for phone, tablet, desktop
   - Dark mode toggle (persisted via a simple client-side approach — no localStorage per Astro 
     hydration best practices if that's a constraint; use a cookie or system-preference detection 
     if localStorage isn't appropriate)
   - Add a placeholder Google Analytics script tag (I will paste my real tracking ID separately)

9. WHAT NOT TO BUILD YET
   - Do NOT implement any actual calculator logic (mortgage math, loan amortization, etc.) — 
     those are separate follow-up prompts, one tool at a time
   - Do NOT wire up a real backend, database, or CMS — this is a fully static site
   - Do NOT add AdSense script yet — that comes after we have traffic

After building, run the dev server and confirm the homepage renders correctly, all placeholder 
tool/category/legal routes resolve without errors, and there are no console warnings.