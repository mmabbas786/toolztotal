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
      { name: "Break-Even Analysis Calculator", slug: "break-even-calculator", description: "Determine the sales volume or revenue needed to cover fixed and variable costs.", status: "live", keywords: ["break-even", "roi calculator"] },
      { name: "Amortization Schedule Calculator", slug: "amortization-calculator", description: "Generate a full payment schedule showing interest and principal breakdown over time.", status: "live", keywords: ["amortization calculator", "loan amortization"] },
      { name: "Sales Tax Calculator", slug: "sales-tax-calculator", description: "Calculate sales tax, reverse sales tax, and run multi-item receipts with state average lookups.", status: "live", keywords: ["sales tax calculator", "sales tax", "reverse sales tax"] },
      { name: "Property Tax Calculator", slug: "property-tax-calculator", description: "Estimate annual property taxes by state with homestead exemption adjustments.", status: "live", keywords: ["property tax calculator", "property tax", "homestead exemption"] },
      { name: "Net Worth Calculator", slug: "net-worth-calculator", description: "Track your assets and liabilities dynamically to determine your net worth. Anonymous and local.", status: "live", keywords: ["net worth calculator", "assets and liabilities", "net worth"] },
      { name: "Inflation Calculator", slug: "inflation-calculator", description: "Calculate the purchasing power of money over time using historical CPI data.", status: "live", keywords: ["inflation calculator", "cpi inflation", "purchasing power"] },
      { name: "Percentage Calculator", slug: "percentage-calculator", description: "Calculate percentages, percentage change, and rates with custom visual graphs.", status: "live", keywords: ["percentage calculator", "percentage change", "percent of"] },
      { name: "SaaS CAC:LTV Calculator", slug: "cac-ltv-calculator", description: "Calculate customer acquisition cost (CAC), lifetime value (LTV), LTV:CAC ratios, and payback periods.", status: "live", keywords: ["cac ltv calculator", "ltv cac ratio", "payback period"] }
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
      { name: "Rent vs Buy Calculator", slug: "rent-vs-buy-calculator", description: "Compare the long-term financial costs of renting versus buying a home.", status: "live", keywords: ["rent vs buy", "mortgage calculator"] }
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
      { name: "CSS Minifier / Beautifier", slug: "css-minifier", description: "Minify or beautify your CSS stylesheets, strip comments, and visualize code compression metrics.", status: "live", keywords: ["css minifier", "css beautifier", "minify css online"] }
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
      { name: "Headline Analyzer", slug: "headline-analyzer", description: "Analyze your headlines for Emotional Marketing Value (EMV) score, power words, sentiment, and length optimizations.", status: "live", keywords: ["headline analyzer", "headline analyzer tool", "emv score checker"] }
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
      { name: "PDF Merger", slug: "pdf-merger", description: "Combine multiple PDF documents into a single file securely inside your browser.", status: "live", keywords: ["pdf merger", "merge pdf", "combine pdf files"] }
    ]
  }
];

