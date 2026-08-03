export interface Tool {
  name: string;
  slug: string;
  description: string;
  status: 'live' | 'coming-soon';
  keywords: string[];
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string; // Heroicon path
  tools: Tool[];
}

export const toolCatalog: Category[] = [
  {
    name: "Finance & Loans",
    slug: "finance",
    description: "Calculate mortgage payments, loan rates, self-employment taxes, and interest compound growths.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    tools: [
      { name: "Mortgage Payment Calculator", slug: "mortgage-calculator", description: "Estimate monthly mortgage payments, interest rates, and loan terms.", status: "live", keywords: ["mortgage calculator", "home loan"] },
      { name: "Loan Payment Calculator", slug: "loan-calculator", description: "Calculate monthly payments and interest costs for personal, auto, or student loans.", status: "live", keywords: ["loan calculator", "monthly payments"] },
      { name: "ROI Calculator", slug: "roi-calculator", description: "Compute the return on investment (ROI) for business projects or investments.", status: "live", keywords: ["roi calculator", "investment return"] },
      { name: "Self-Employment Tax Calculator", slug: "self-employment-tax-calculator", description: "Estimate self-employment tax liabilities (FICA, Medicare) for freelancers.", status: "live", keywords: ["self-employment tax", "tax calculator"] },
      { name: "Compound Interest Calculator", slug: "compound-interest-calculator", description: "Visualize the growth of savings and investments through compounding interest over time.", status: "live", keywords: ["compound interest", "interest calculator"] },
      { name: "Payroll Tax Calculator", slug: "payroll-tax-calculator", description: "Calculate take-home pay, federal taxes, and state deductions from payroll.", status: "live", keywords: ["payroll tax", "tax calculator"] },
      { name: "Paycheck Calculator", slug: "paycheck-calculator", description: "Estimate hourly and overtime take-home pay after federal, state, and FICA taxes per pay period.", status: "live", keywords: ["paycheck calculator", "hourly paycheck", "overtime pay"] },
      { name: "Break-Even Analysis Calculator", slug: "break-even-calculator", description: "Determine the sales volume or revenue needed to cover fixed and variable costs.", status: "live", keywords: ["break-even", "roi calculator"] },
      { name: "Amortization Schedule Calculator", slug: "amortization-calculator", description: "Generate a full payment schedule showing interest and principal breakdown over time.", status: "live", keywords: ["amortization calculator", "loan amortization"] },
      { name: "Auto Loan Calculator", slug: "auto-loan-calculator", description: "Calculate auto loan monthly payments, total interest, and amortization schedule with trade-in and taxes.", status: "live", keywords: ["auto loan calculator", "car payment", "car loan"] },
      { name: "Sales Tax Calculator", slug: "sales-tax-calculator", description: "Calculate sales tax, reverse sales tax, and run multi-item receipts with state average lookups.", status: "live", keywords: ["sales tax calculator", "sales tax", "reverse sales tax"] },
      { name: "Property Tax Calculator", slug: "property-tax-calculator", description: "Estimate annual property taxes by state with homestead exemption adjustments.", status: "live", keywords: ["property tax calculator", "property tax", "homestead exemption"] },
      { name: "Net Worth Calculator", slug: "net-worth-calculator", description: "Track your assets and liabilities dynamically to determine your net worth. Anonymous and local.", status: "live", keywords: ["net worth calculator", "assets and liabilities", "net worth"] },
      { name: "Inflation Calculator", slug: "inflation-calculator", description: "Calculate the purchasing power of money over time using historical CPI data.", status: "live", keywords: ["inflation calculator", "cpi inflation", "purchasing power"] },
      { name: "Percentage Calculator", slug: "percentage-calculator", description: "Calculate percentages, percentage change, and rates with custom visual graphs.", status: "live", keywords: ["percentage calculator", "percentage change", "percent of"] },
      { name: "SaaS CAC:LTV Calculator", slug: "cac-ltv-calculator", description: "Calculate customer acquisition cost (CAC), lifetime value (LTV), LTV:CAC ratios, and payback periods.", status: "live", keywords: ["cac ltv calculator", "ltv cac ratio", "payback period"] },
      { name: "DTI Calculator", slug: "dti-calculator", description: "Calculate your Debt-to-Income (DTI) ratio for mortgage qualification. See front-end and back-end DTI and lender classification.", status: "live", keywords: ["dti calculator", "debt to income", "mortgage qualification"] },
      { name: "HELOC Calculator", slug: "heloc-calculator", description: "Calculate home equity line of credit payments, borrowing limit, and total interest across draw and repayment periods.", status: "live", keywords: ["heloc calculator", "home equity line of credit", "heloc payment"] },
      { name: "Salary Calculator", slug: "salary-calculator", description: "Calculate your take-home pay after federal, state, and FICA taxes. See monthly, bi-weekly, and weekly amounts for any salary and state.", status: "live", keywords: ["salary calculator", "take home pay", "tax calculator"] },
      { name: "Student Loan Repayment Calculator", slug: "student-loan-repayment-calculator", description: "Compare student loan repayment plans including Standard, Graduated, Extended, and income-driven (IBR, PAYE, REPAYE, ICR).", status: "live", keywords: ["student loan calculator", "student loan repayment", "idr calculator"] },
      { name: "Credit Card Payoff Calculator", slug: "credit-card-payoff-calculator", description: "Estimate your payoff timeline, total interest charges, and see how much you save by paying extra each month.", status: "live", keywords: ["credit card payoff calculator", "payoff timeline", "credit card interest"] },
      { name: "Stripe Fee Calculator", slug: "stripe-fee-calculator", description: "Calculate domestic, international, and instant payout Stripe processing fees, plus reverse fee calculations.", status: "live", keywords: ["stripe fee calculator", "stripe fees", "reverse stripe calculator"] },
      { name: "PayPal Fee Calculator", slug: "paypal-fee-calculator", description: "Calculate PayPal merchant, Goods & Services, Friends & Family, and international transaction fees with reverse calculations.", status: "live", keywords: ["paypal fee calculator", "paypal fees", "reverse paypal fee calculator"] },
      { name: "APR Calculator", slug: "apr-calculator", description: "Calculate effective Annual Percentage Rate (APR) for loans with origination fees and credit card interest rate conversions.", status: "live", keywords: ["apr calculator", "loan apr", "credit card apr"] },
      { name: "FIRE Calculator", slug: "fire-calculator", description: "Calculate your Financial Independence Retire Early (FIRE) number, savings rate, portfolio growth, and target age.", status: "live", keywords: ["fire calculator", "financial independence", "retire early calculator"] },
      { name: "Business Loan Calculator", slug: "business-loan-calculator", description: "Calculate monthly payments, origination fees, interest costs, and full amortization schedules for SBA and commercial business loans.", status: "live", keywords: ["business loan calculator", "sba loan calculator", "commercial loan payment"] }
    ]
  },
  {
    name: "Real Estate & Mortgage",
    slug: "real-estate",
    description: "Determine affordability, refinance benefits, and rental property yields.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    tools: [
      { name: "Rental Property Cash Flow Calculator", slug: "rental-property-calculator", description: "Evaluate rental yield, cash-on-cash return, and net operating income.", status: "live", keywords: ["rental property", "real estate yield"] },
      { name: "Mortgage Affordability Calculator", slug: "mortgage-affordability-calculator", description: "Determine the maximum home price you can afford based on income and debts.", status: "live", keywords: ["mortgage affordability", "how much home can I afford"] },
      { name: "Mortgage Refinance Calculator", slug: "mortgage-refinance-calculator", description: "See if refinancing your home mortgage will save you money on interest and payments.", status: "live", keywords: ["mortgage refinance", "refinance calculator"] },
      { name: "Rent vs Buy Calculator", slug: "rent-vs-buy-calculator", description: "Compare the long-term financial costs of renting versus buying a home.", status: "live", keywords: ["rent vs buy", "mortgage calculator"] },
      { name: "Cap Rate Calculator", slug: "cap-rate-calculator", description: "Calculate capitalization rates, Net Operating Income (NOI), target property valuations, and ROI for commercial and residential real estate.", status: "live", keywords: ["cap rate calculator", "capitalization rate", "property noi calculator"] },
      { name: "Closing Cost Calculator", slug: "closing-cost-calculator", description: "Estimate buyer and seller closing costs, title fees, escrow, transfer taxes, and prepayments by state.", status: "live", keywords: ["closing cost calculator", "buyer closing costs", "seller closing costs"] },
      { name: "Mortgage Points Calculator", slug: "mortgage-points-calculator", description: "Calculate discount points costs, interest rate reductions, monthly savings, and break-even timelines.", status: "live", keywords: ["mortgage points calculator", "discount points", "mortgage break even"] }
    ]
  },
  {
    name: "Everyday / Life Utility",
    slug: "utility",
    description: "Secure, local random password generators, instant age calculations, and QR codes.",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
    tools: [
      { name: "Age Calculator", slug: "age-calculator", description: "Calculate your exact age in years, months, weeks, days, and hours.", status: "live", keywords: ["age calculator", "how old am I"] },
      { name: "Random Password Generator", slug: "password-generator", description: "Generate secure, high-entropy random passwords client-side.", status: "live", keywords: ["password generator", "secure password"] },
      { name: "QR Code Generator", slug: "qr-code-generator", description: "Generate custom QR codes instantly from URLs, text, or contacts.", status: "live", keywords: ["qr code generator", "create qr code"] },
      { name: "Unit Converter (All-in-One)", slug: "unit-converter", description: "Convert between metric and imperial units of length, weight, area, volume, and temperature with smart search.", status: "live", keywords: ["unit converter", "metric conversion", "inches to cm"] },
      { name: "Split Bill Calculator", slug: "split-bill-calculator", description: "Calculate itemized bill splits, allocate tax and tip per person, and generate shareable allocation links.", status: "live", keywords: ["split bill calculator", "bill splitter", "split restaurant bill"] },
      { name: "Tip Calculator", slug: "tip-calculator", description: "Calculate restaurant tip splits, round up totals, and review global tipping etiquette guides.", status: "live", keywords: ["tip calculator", "how much to tip", "bill tip splitter"] },
      { name: "Random Name Generator", slug: "name-generator", description: "Generate random names for babies, fantasy characters, pets, or businesses with origin filters.", status: "live", keywords: ["random name generator", "baby name generator", "fantasy name creator"] }
    ]
  },
  {
    name: "Developer Tools",
    slug: "dev",
    description: "Formatters, encoders, regex testers, and color converters built for developers.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    tools: [
      { name: "JSON Formatter & Validator", slug: "json-formatter", description: "Beautify, minify, and validate JSON with syntax highlighting and optional schema validation.", status: "live", keywords: ["json formatter", "json validator", "json beautifier"] },
      { name: "Regex Tester", slug: "regex-tester", description: "Test and debug regular expressions with live match highlighting, capture group extraction, and plain-English pattern explanation.", status: "live", keywords: ["regex tester", "regex tool", "regular expression test"] },
      { name: "UUID/GUID Generator", slug: "uuid-generator", description: "Generate v1, v4, and v7 UUIDs in bulk with options for casing, dashes, and copy-to-clipboard.", status: "live", keywords: ["uuid generator", "guid generator", "random uuid"] },
      { name: "Base64 Encoder/Decoder", slug: "base64-encoder-decoder", description: "Encode and decode Base64 strings, images, and files with drag-and-drop support and data URI preview.", status: "live", keywords: ["base64 encode", "base64 decode", "base64 image"] },
      { name: "Diff Checker", slug: "diff-checker", description: "Compare text and code side-by-side or inline with line-level and word-level diff highlighting.", status: "live", keywords: ["diff checker", "text compare", "code diff tool"] },
      { name: "Color Picker & Converter", slug: "color-picker", description: "Pick, convert, and analyze colors with HEX/RGB/HSL support, WCAG contrast checker, palette generator, and CSS gradient builder.", status: "live", keywords: ["color picker", "hex to rgb", "color contrast checker"] },
      { name: "Subnet Calculator", slug: "subnet-calculator", description: "Calculate network address, broadcast, subnet mask, usable host ranges, and wildcard masks for IPv4/IPv6 CIDR blocks.", status: "live", keywords: ["subnet calculator", "cidr calculator", "ip subnet planner"] },
      { name: "CSS Minifier / Beautifier", slug: "css-minifier", description: "Minify or beautify your CSS stylesheets, strip comments, and visualize code compression metrics.", status: "live", keywords: ["css minifier", "css beautifier", "minify css online"] },
      { name: "Hash Generator", slug: "hash-generator", description: "Generate MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hashes from text or files — all client-side.", status: "live", keywords: ["hash generator", "md5 generator", "sha256 hash"] },
      { name: "JWT Decoder & Validator", slug: "jwt-decoder", description: "Decode and validate JSON Web Tokens, inspecting the header, payload claims, and signature safely in your browser.", status: "live", keywords: ["jwt decoder", "jwt validator", "decode jwt"] },
      { name: "Markdown to HTML Converter", slug: "markdown-to-html", description: "Convert Markdown to HTML with a live preview, GitHub Flavored Markdown support, and copy/download options.", status: "live", keywords: ["markdown to html", "markdown converter", "md to html"] },
      { name: "Timestamp Converter", slug: "timestamp-converter", description: "Convert Unix timestamps to dates and dates to timestamps with seconds/milliseconds, timezones, and relative time.", status: "live", keywords: ["timestamp converter", "unix timestamp", "epoch converter"] },
      { name: "URL Encoder / Decoder", slug: "url-encoder-decoder", description: "Percent-encode and decode URLs with live preview, byte counts, and query-string quick actions.", status: "live", keywords: ["url encoder", "url decoder", "percent encoding"] },
      { name: "SQL Formatter & Beautifier", slug: "sql-formatter", description: "Format, beautify, and minify SQL queries across PostgreSQL, MySQL, SQLite, T-SQL, and Oracle dialects.", status: "live", keywords: ["sql formatter", "sql beautifier", "format sql online"] },
      { name: "JavaScript Formatter & Minifier", slug: "javascript-formatter", description: "Beautify, indent, and compress JavaScript code with line count and file size reduction analytics.", status: "live", keywords: ["javascript formatter", "js minifier", "beautify javascript"] },
      { name: "cURL to Fetch Converter", slug: "curl-to-fetch-converter", description: "Convert cURL commands directly into modern JavaScript fetch API code (async/await and Promises).", status: "live", keywords: ["curl to fetch converter", "curl to js fetch", "convert curl to javascript"] },
      { name: "Cron Expression Generator", slug: "cron-expression-generator", description: "Build custom 5-part cron expressions visually with live plain-English schedule translations and presets.", status: "live", keywords: ["cron expression generator", "cron generator", "cron schedule builder"] },
      { name: "Cron Expression Parser", slug: "cron-parser", description: "Parse 5-part cron syntax into plain English with a schedule breakdown and next 10 execution dates.", status: "live", keywords: ["cron parser", "parse cron expression", "cron schedule explainer"] }
    ]
  },
  {
    name: "Text & Content",
    slug: "text",
    description: "Word counters, text diff comparers, case text converters, and content clean utilities.",
    icon: "M4 6h16M4 12h16M4 18h7",
    tools: [
      { name: "Word Counter", slug: "word-counter", description: "Count words, characters, sentences, estimated reading/speaking times, and estimate readability score in real-time.", status: "live", keywords: ["word counter", "word count tool", "character counter online"] },
      { name: "Character Counter", slug: "character-counter", description: "Count characters and paragraph spaces. Social media platform limits (X, Instagram, LinkedIn) with live over-limit warnings.", status: "live", keywords: ["character counter", "char count checker", "social media character limits"] },
      { name: "Readability Score Checker", slug: "readability-checker", description: "Analyze text readability using Flesch Reading Ease, Flesch-Kincaid Grade, Gunning Fog, SMOG, and Coleman-Liau indexes.", status: "live", keywords: ["readability score checker", "readability checker", "flesch reading ease formula"] },
      { name: "Case Converter", slug: "case-converter", description: "Convert text casing between Sentence case, UPPERCASE, lowercase, camelCase, PascalCase, snake_case, and kebab-case.", status: "live", keywords: ["case converter", "camelcase converter", "uppercase lowercase checker"] },
      { name: "Keyword Density Checker", slug: "keyword-density-checker", description: "Calculate word and 2-3 word phrase frequencies. Evaluates density percentages to warn against search engine over-optimization.", status: "live", keywords: ["keyword density checker", "keyword count", "seo keyword density check"] }
    ]
  },
  {
    name: "Marketing & SEO",
    slug: "marketing",
    description: "Optimize meta tags, analyze keyword densities, and generate redirects.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    tools: [
      { name: "UTM Link Builder", slug: "utm-builder", description: "Generate tracking URLs with custom campaign UTM parameters, campaign presets, and instant QR code download.", status: "live", keywords: ["utm builder", "utm tracking", "google analytics link builder"] },
      { name: "Meta Tag Generator", slug: "meta-tag-generator", description: "Generate meta tags, Open Graph tags, and Twitter Cards with real-time Google and social preview mockups.", status: "live", keywords: ["meta tag generator", "og tags", "twitter card generator"] },
      { name: "SERP Snippet Preview Tool", slug: "serp-preview", description: "Preview how your page appears in Google search results on desktop and mobile. Checks pixel width clipping limits.", status: "live", keywords: ["serp preview", "google search preview", "serp snippet checker"] },
      { name: "Email Subject Line Tester", slug: "email-subject-tester", description: "Test your email subject lines for character limits, spam trigger words, and get alternative A/B testing suggestions.", status: "live", keywords: ["email subject tester", "subject line checker", "email spam scanner"] },
      { name: "Headline Analyzer", slug: "headline-analyzer", description: "Analyze your headlines for Emotional Marketing Value (EMV) score, power words, sentiment, and length optimizations.", status: "live", keywords: ["headline analyzer", "headline analyzer tool", "emv score checker"] },
      { name: "Robots.txt Generator", slug: "robots-txt-generator", description: "Generate custom robots.txt files with AI crawler blocks, crawl delays, disallow rules, and sitemap directives.", status: "live", keywords: ["robots.txt generator", "create robots txt", "robots txt builder"] },
      { name: "XML Sitemap Generator", slug: "xml-sitemap-generator", description: "Generate valid XML sitemaps for multi-URL lists with priority, change frequency, and lastmod controls.", status: "live", keywords: ["xml sitemap generator", "sitemap generator", "generate sitemap xml"] },
      { name: "Schema Markup Generator", slug: "schema-markup-generator", description: "Generate structured JSON-LD schema markup for Organization, Local Business, FAQ, Product, Article, Event, and more.", status: "live", keywords: ["schema markup generator", "json-ld generator", "faq schema generator"] },
      { name: "Open Graph Meta Generator", slug: "open-graph-generator", description: "Generate Open Graph and Twitter Card meta tags with live visual previews for Facebook, X, LinkedIn, and Discord.", status: "live", keywords: ["open graph generator", "og meta generator", "twitter card generator"] },
      { name: "JSON to CSV Converter", slug: "json-to-csv-converter", description: "Convert JSON arrays or objects into CSV format with custom delimiter choices, table previews, and client-side downloads.", status: "live", keywords: ["json to csv converter", "json to csv", "convert json to csv"] }
    ]
  },
  {
    name: "Health & Fitness",
    slug: "health",
    description: "BMI calculators, caloric targets, macro splitters, and target heart rates.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    tools: [
      { name: "Calorie Calculator", slug: "calorie-calculator", description: "Estimate daily calorie needs (TDEE) and BMR based on physical stats and goals.", status: "live", keywords: ["calorie calculator", "tdee calculator", "bmr calculator"] },
      { name: "Macro Calculator", slug: "macro-calculator", description: "Calculate macronutrient targets (grams and calories of protein, carbs, fats) for cut, maintain, or bulk.", status: "live", keywords: ["macro calculator", "macronutrient target", "keto macro calculator"] },
      { name: "BMI Calculator", slug: "bmi-calculator", description: "Calculate Body Mass Index (BMI), BMI Prime, and Ponderal Index instantly.", status: "live", keywords: ["bmi calculator", "bmi prime", "ponderal index"] },
      { name: "Pregnancy Due Date Calculator", slug: "pregnancy-calculator", description: "Estimate pregnancy due date, gestational age, and view week-by-week milestones.", status: "live", keywords: ["pregnancy calculator", "pregnancy due date", "baby due date"] },
      { name: "Body Fat Percentage Calculator", slug: "body-fat-calculator", description: "Estimate body fat percentage using Navy circumference and BMI methods side-by-side.", status: "live", keywords: ["body fat calculator", "body fat percentage", "navy body fat method"] },
      { name: "Ideal Weight Calculator", slug: "ideal-weight-calculator", description: "Find your ideal weight range based on gender, height, and multiple clinical formulas side-by-side.", status: "live", keywords: ["ideal weight calculator", "ideal body weight", "devine formula"] }
    ]
  },
  {
    name: "Legal & Employment",
    slug: "legal",
    description: "Calculate payroll timelines, severance, overtime, and contract terms.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    tools: [
      { name: "Severance Pay Calculator", slug: "severance-calculator", description: "Estimate severance payouts based on service duration, salary parameters, and WARN Act checkmarks.", status: "live", keywords: ["severance pay calculator", "severance calculator", "warn act check"] },
      { name: "Overtime Pay Calculator", slug: "overtime-calculator", description: "Calculate overtime pay based on FLSA guidelines (1.5x regular rate and double-time policies).", status: "live", keywords: ["overtime calculator", "overtime pay calculator", "flsa overtime rules"] },
      { name: "Hours Calculator / Time Card", slug: "hours-calculator", description: "Track weekly work hours with automatic lunch breaks deductions and overtime alerts. Export to CSV.", status: "live", keywords: ["hours calculator", "time card calculator", "work hours checker"] },
      { name: "Retirement Savings Calculator", slug: "retirement-calculator", description: "Estimate retirement growth based on monthly contributions and expected rate of return.", status: "live", keywords: ["retirement calculator", "retirement savings calculator", "retirement growth"] }
    ]
  },
  {
    name: "Education & Academics",
    slug: "education",
    description: "GPA calculators, final grade planners, weighted grade solvers, and citation formatters.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    tools: [
      { name: "GPA Calculator", slug: "gpa-calculator", description: "Calculate weighted and unweighted GPA across multiple scales, set cumulative goals, and plan targets.", status: "live", keywords: ["gpa calculator", "weighted gpa calculator", "cumulative gpa calculator"] },
      { name: "Final Grade Calculator", slug: "final-grade-calculator", description: "Solve what score you need on your final exam to achieve your target class grade.", status: "live", keywords: ["final grade calculator", "final exam grade solver", "grade calculator"] },
      { name: "Grade Calculator (Weighted)", slug: "grade-calculator", description: "Calculate class grades using custom weighted categories (exams, quizzes, homework).", status: "live", keywords: ["grade calculator", "weighted grade calculator", "class grade solver"] },
      { name: "Citation Generator", slug: "citation-generator", description: "Generate accurate citations in APA 7th, MLA 9th, and Chicago 17th formats instantly.", status: "live", keywords: ["citation generator", "apa citation generator", "mla citation format"] }
    ]
  },
  {
    name: "Image & PDF Tools",
    slug: "image-tools",
    description: "Client-side image resizers, compressors, and PDF mergers. Fully private, no server uploads.",
    icon: "M4 16l4.586-4.586a1 1 0 011.414 0L16 17m-2-2l1.586-1.586a1 1 0 011.414 0L20 16m-7-2a1 1 0 00-1-1H3a1 1 0 00-1 1v5a1 1 0 001 1h18a1 1 0 001-1v-5a1 1 0 00-1-1h-6z",
    tools: [
      { name: "Image Resizer", slug: "image-resizer", description: "Resize images to custom dimensions or social media presets completely in your browser.", status: "live", keywords: ["image resizer", "resize image online", "crop image"] },
      { name: "Image Compressor", slug: "image-compressor", description: "Compress JPEG, PNG, and WebP images client-side to reduce file size without quality loss.", status: "live", keywords: ["image compressor", "compress image", "shrink image size"] },
      { name: "PDF Merger", slug: "pdf-merger", description: "Combine multiple PDF documents into a single file securely inside your browser.", status: "live", keywords: ["pdf merger", "merge pdf", "combine pdf files"] },
      { name: "HEIC to JPG Converter", slug: "heic-to-jpg", description: "Convert Apple HEIC/HEIF images to JPG or PNG formats 100% client-side with zero server uploads.", status: "live", keywords: ["heic to jpg", "heic converter", "convert heic to jpg"] },
      { name: "PDF Splitter", slug: "pdf-splitter", description: "Split PDF pages or extract custom page ranges client-side using WebAssembly and pdf-lib.", status: "live", keywords: ["pdf splitter", "split pdf", "extract pdf pages"] },
      { name: "PDF Compressor", slug: "pdf-compressor", description: "Compress PDF documents client-side by optimizing page streams and graphics without server uploads.", status: "live", keywords: ["pdf compressor", "compress pdf", "shrink pdf size"] },
      { name: "PDF to JPG Converter", slug: "pdf-to-jpg", description: "Render PDF pages into high-resolution JPG images client-side in your web browser.", status: "live", keywords: ["pdf to jpg", "convert pdf to jpg", "pdf to image"] },
      { name: "JPG to PDF Converter", slug: "jpg-to-pdf", description: "Convert JPG, PNG, and WebP images into a clean multi-page PDF document 100% locally.", status: "live", keywords: ["jpg to pdf", "image to pdf", "convert jpg to pdf"] },
      { name: "WebP to PNG Converter", slug: "webp-to-png", description: "Convert WebP images to lossless PNG format with transparent background preservation.", status: "live", keywords: ["webp to png", "convert webp to png", "webp converter"] },
      { name: "PNG to WebP Converter", slug: "png-to-webp", description: "Convert PNG images to lightweight WebP format with quality compression sliders.", status: "live", keywords: ["png to webp", "convert png to webp", "compress png to webp"] },
      { name: "JPG to PNG Converter", slug: "jpg-to-png", description: "Convert JPG images to PNG format with custom canvas scaling and loss-free export.", status: "live", keywords: ["jpg to png", "convert jpg to png", "jpg converter"] },
      { name: "Image Cropper", slug: "image-cropper", description: "Crop images with interactive aspect ratios (1:1, 16:9, 4:3, 9:16) and pixel dimensions.", status: "live", keywords: ["image cropper", "crop image online", "photo cropper"] },
      { name: "Image Resizer by File Size", slug: "resize-image-by-size", description: "Resize and compress images to hit target file sizes (under 100KB, 50KB, 20KB) for government & portal uploads.", status: "live", keywords: ["resize image to 100kb", "resize image to 50kb", "resize image to 20kb"] },
      { name: "All-in-One Image Converter", slug: "image-converter", description: "Convert between PNG, JPG, WEBP, BMP, GIF, and HEIC image formats completely in your browser.", status: "live", keywords: ["image converter", "convert image format", "online image converter"] },
      { name: "Advanced PDF Merger", slug: "advanced-pdf-merger", description: "Merge, reorder, and combine multiple PDF files with visual page arrangement and page deletion options.", status: "live", keywords: ["merge pdf", "pdf joiner", "combine pdf files"] }
    ]
  },
  {
    name: "AI Tools",
    slug: "ai",
    description: "Token calculators, API pricing models, prompt formatters, and AI utility tools for LLM developers and creators.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    tools: [
      { name: "AI Token Calculator", slug: "token-calculator", description: "Estimate token counts, context window consumption, and cost across GPT-5, GPT-4o, Claude 3.5, and Gemini 2.0.", status: "live", keywords: ["ai token calculator", "token count estimator", "llm token calculator"] },
      { name: "OpenAI API Cost Calculator", slug: "openai-cost-calculator", description: "Calculate monthly API bills across GPT-4o, GPT-4o-mini, o1, o3-mini, and text-embedding models.", status: "live", keywords: ["openai cost calculator", "gpt-4 cost calculator", "openai api pricing"] },
      { name: "Claude API Cost Calculator", slug: "claude-cost-calculator", description: "Calculate Anthropic Claude 3.5 Sonnet, Claude 3 Opus, and Haiku API costs with prompt caching discounts.", status: "live", keywords: ["claude api pricing calculator", "claude 3.5 sonnet cost", "anthropic api pricing"] },
      { name: "Gemini API Cost Calculator", slug: "gemini-cost-calculator", description: "Calculate Google Gemini 1.5 Pro, Flash, and Gemini 2.0 API costs based on token throughput.", status: "live", keywords: ["gemini api pricing calculator", "gemini 1.5 pro cost", "google ai api pricing"] },
      { name: "Prompt Token Counter", slug: "prompt-token-counter", description: "Count real-time tokens, words, and characters for your AI prompts with instant cost estimations.", status: "live", keywords: ["prompt token counter", "count tokens", "gpt prompt length"] },
      { name: "Prompt Formatter", slug: "prompt-formatter", description: "Structure and format LLM system prompts with XML tags, markdown headers, and variable placeholders.", status: "live", keywords: ["prompt formatter", "format ai prompt", "system prompt builder"] },
      { name: "Markdown Prompt Generator", slug: "markdown-prompt-generator", description: "Generate structured Markdown prompts with Role, Context, Constraints, and Few-shot examples.", status: "live", keywords: ["markdown prompt", "markdown prompt generator", "structured ai prompt"] },
      { name: "AI Character Counter", slug: "ai-character-counter", description: "Track character limits, word bounds, and context window percentages for AI chat inputs.", status: "live", keywords: ["ai character counter", "prompt character limit", "token size checker"] },
      { name: "JSON Prompt Formatter", slug: "json-prompt-formatter", description: "Format and validate structured JSON schemas for LLM function calling and JSON mode responses.", status: "live", keywords: ["json prompt formatter", "llm json schema", "openai function call format"] },
      { name: "AI Prompt Cleaner", slug: "prompt-cleaner", description: "Strip boilerplate text, duplicate instructions, redundant white spaces, and optimize token efficiency.", status: "live", keywords: ["prompt cleaner", "clean ai prompt", "optimize prompt tokens"] }
    ]
  },
  {
    name: "Startup & SaaS",
    slug: "startup",
    description: "MRR/ARR calculators, burn rate estimators, SaaS valuation tools, and subscription metrics.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    tools: [
      { name: "MRR Calculator", slug: "mrr-calculator", description: "Calculate Monthly Recurring Revenue (New MRR, Expansion MRR, Churn MRR, Net New MRR).", status: "live", keywords: ["mrr calculator", "monthly recurring revenue", "net mrr"] },
      { name: "ARR Calculator", slug: "arr-calculator", description: "Calculate Annual Recurring Revenue and Annual Contract Value (ACV) for SaaS growth tracking.", status: "live", keywords: ["arr calculator", "annual recurring revenue", "saas arr"] },
      { name: "Burn Rate Calculator", slug: "burn-rate-calculator", description: "Calculate Gross Burn vs Net Burn rates based on monthly revenues and operating expenditures.", status: "live", keywords: ["burn rate calculator", "startup burn rate", "net burn rate"] },
      { name: "Startup Runway Calculator", slug: "runway-calculator", description: "Estimate cash runway in months based on cash balance, net burn rate, and revenue growth.", status: "live", keywords: ["runway calculator startup", "startup runway", "cash runway months"] },
      { name: "Churn Rate Calculator", slug: "churn-rate-calculator", description: "Calculate Customer Churn Rate % and Revenue Churn Rate % to measure SaaS retention.", status: "live", keywords: ["churn rate calculator", "customer churn", "revenue churn rate"] },
      { name: "SaaS Valuation Calculator", slug: "saas-valuation-calculator", description: "Estimate SaaS company valuation using ARR revenue multiples adjusted for growth rate and margins.", status: "live", keywords: ["saas valuation calculator", "saas valuation multiple", "arr valuation"] },
      { name: "SaaS Pricing Calculator", slug: "pricing-calculator", description: "Model SaaS pricing tiers, seat pricing, usage thresholds, and target gross margin per customer.", status: "live", keywords: ["pricing calculator", "saas pricing model", "subscription pricing"] },
      { name: "Gross Margin Calculator", slug: "gross-margin-calculator", description: "Calculate Gross Profit, Gross Margin %, and COGS for SaaS and digital subscription businesses.", status: "live", keywords: ["gross margin calculator", "gross profit margin", "saas cogs"] },
      { name: "Subscription Revenue Calculator", slug: "subscription-revenue-calculator", description: "Forecast multi-year compounding subscription revenue growth with churn and expansion variables.", status: "live", keywords: ["subscription revenue calculator", "recurring revenue forecast", "subscription growth"] },
      { name: "CAC Payback Calculator", slug: "cac-payback-calculator", description: "Calculate Customer Acquisition Cost (CAC) payback period in months and gross margin payback.", status: "live", keywords: ["cac payback calculator", "cac payback period", "months to recover cac"] }
    ]
  }
];

