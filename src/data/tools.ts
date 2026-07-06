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
      { name: "Amortization Schedule Calculator", slug: "amortization-calculator", description: "Generate a full payment schedule showing interest and principal breakdown over time.", status: "live", keywords: ["amortization calculator", "loan amortization"] }
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
      { name: "QR Code Generator", slug: "qr-code-generator", description: "Generate custom QR codes instantly from URLs, text, or contacts.", status: "live", keywords: ["qr code generator", "create qr code"] }
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
    ]
  },
  {
    name: "Text & Content",
    slug: "text",
    description: "Word counters, text diff comparers, case text converters, and content clean utilities.",
    icon: "M4 6h16M4 12h16M4 18h7",
    tools: []
  },
  {
    name: "Marketing & SEO",
    slug: "marketing",
    description: "Optimize meta tags, analyze keyword densities, and generate redirects.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    tools: []
  },
  {
    name: "Health & Fitness",
    slug: "health",
    description: "BMI calculators, caloric targets, macro splitters, and target heart rates.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    tools: []
  },
  {
    name: "Legal & Employment",
    slug: "legal",
    description: "Calculate payroll timelines, severance, overtime, and contract terms.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    tools: []
  }
];
