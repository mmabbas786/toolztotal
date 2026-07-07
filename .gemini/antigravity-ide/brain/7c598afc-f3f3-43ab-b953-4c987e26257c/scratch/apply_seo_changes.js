const fs = require('fs');
const path = require('path');

// Import batch data
const batch1 = require('./seo_data_batch1.js');
const batch2 = require('./seo_data_batch2.js');
const batch3 = require('./seo_data_batch3.js');

const seoDataMap = {
  ...batch1,
  ...batch2,
  ...batch3
};

// Custom expansion paragraphs to ensure all articles exceed 600 words
const expansions = {
  "finance/sales-tax-calculator.astro": `
        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">E-Commerce Compliance and Tax Automation</h3>
        <p>
          For modern digital sellers, managing sales tax compliance has become increasingly complex. Economic nexus rules mean that merchants must track their sales volumes across dozens of different states, counties, and local municipalities. Many businesses use automated sales tax software to calculate tax rates at checkout, file monthly returns, and monitor their nexus thresholds. This tool provides a quick manual alternative to check individual transactions and verify that tax software is calculating rates correctly.
        </p>
        <p>
          Additionally, keeping clear records of taxable and non-taxable sales is essential for tax audit preparation. During a tax audit, assessors examine invoices, resale certificates, and exemption logs. Maintaining an itemized breakdown of each sale helps prove that you collected the correct tax amount and applied exemptions legally, protecting your business from penalties.
        </p>
  `,
  "finance/property-tax-calculator.astro": `
        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Real Estate Investing and Escrow Management</h3>
        <p>
          For real estate investors, property taxes represent a major operating expense that directly impacts net operating income (NOI) and cap rates. When analyzing a potential rental property, investors must research the local millage rates and assessment guidelines to estimate tax liabilities accurately. Underestimating property taxes can turn a cash-flowing asset into a monthly liability.
        </p>
        <p>
          Additionally, most residential mortgage lenders require borrowers to maintain a property tax escrow account. Each month, a portion of the homeowner's mortgage payment is set aside in an escrow account, and the lender pays the property tax bill directly to the county when it comes due. This protects the lender's interest in the property, as unpaid property taxes can lead to tax liens and foreclosure.
        </p>
  `,
  "finance/net-worth-calculator.astro": `
        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Tracking Net Worth Progress and Financial Goals</h3>
        <p>
          Calculating your net worth once provides a snapshot of your current financial position, but the true value comes from tracking this metric over time. Many people use a net worth tracker to monitor their progress toward long-term goals, such as buying a home, paying off debt, or retiring early. Seeing your net worth grow month over month is highly motivating and validates your saving and investing strategies.
        </p>
        <p>
          For those pursuing the Financial Independence, Retire Early (FIRE) movement, net worth tracking is essential. The standard rule of thumb is that you can retire when your net worth reaches 25 times your annual expenses. At that point, you can theoretically withdraw 4% of your portfolio annually to cover your living costs without depleting your capital, making net worth the ultimate metric for financial freedom.
        </p>
  `,
  "finance/inflation-calculator.astro": `
        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Inflation, Wage Growth, and Cost of Living</h3>
        <p>
          Inflation also impacts wage negotiations and cost-of-living adjustments (COLA). If a worker's salary remains flat while inflation runs at 4% annually, they are experiencing a real wage decrease. To maintain the same standard of living, salaries must increase at a rate that matches or exceeds inflation. Many union contracts and government programs, such as Social Security, automatically adjust benefits based on the CPI to protect recipients' purchasing power.
        </p>
        <p>
          For long-term financial planning, factoring in inflation is critical. A nest egg that seems substantial today will buy far less in thirty years. When projecting future expenses, financial planners typically assume a historical average inflation rate of 3% per year, helping clients build inflation-adjusted retirement goals that ensure long-term security.
        </p>
  `,
  "finance/percentage-calculator.astro": `
        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Percentages in Financial Returns and Performance</h3>
        <p>
          In the investment world, percentages are the universal language for measuring performance. Whether you are tracking stock market returns, bond yields, or savings account interest, everything is expressed as an annual percentage yield (APY) or compound annual growth rate (CAGR). Comparing absolute gains (e.g., earning $1,000) is meaningless without knowing the percentage return relative to the initial capital invested.
        </p>
        <p>
          Percentages also help businesses monitor margins. The gross profit margin (gross profit divided by revenue) and net profit margin are key indicators of operational efficiency. Monitoring these percentages allows companies to see if rising costs are eating into profits, helping them adjust pricing or reduce expenses before profits collapse.
        </p>
  `,
  "finance/cac-ltv-calculator.astro": `
        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Optimizing SaaS Growth Loops and Expansion Revenue</h3>
        <p>
          To improve unit economics, SaaS businesses focus on two main strategies: reducing CAC and increasing LTV. Reducing CAC involves optimizing marketing channels, improving landing page conversion rates, and leveraging organic search engine optimization (SEO) to acquire customers without paying for advertising.
        </p>
        <p>
          Increasing LTV is achieved by lowering churn and driving expansion revenue. Expansion revenue refers to additional revenue generated from existing customers through upselling (upgrading accounts to higher tiers) and cross-selling (selling add-on features or seats). If expansion revenue exceeds the revenue lost from churned accounts, the company achieves "net negative churn," which is the ultimate growth driver for SaaS businesses.
        </p>
        <p>
          By maintaining a healthy LTV:CAC ratio and shortening the payback period, startups can reinvest their profits into customer acquisition safely, building a compounding growth engine that leads to long-term market leadership.
        </p>
  `,
  "dev/subnet-calculator.astro": `
        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Subnetting in Cloud Infrastructure</h3>
        <p>
          Subnetting principles remain identical in modern cloud platforms like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). When you create a Virtual Private Cloud (VPC), you must define its IP range using CIDR notation (e.g., 10.0.0.0/16). Within this VPC, you divide the address space into public subnets (which connect to the internet via an internet gateway) and private subnets (which host databases and backend services securely).
        </p>
        <p>
          Understanding subnet boundaries is crucial for configure routing tables, security groups, and network access control lists (NACLs) in the cloud. Wasting IP space in a VPC can cause issues when peering different VPCs together, as overlapping subnets cannot communicate. Using an accurate subnet calculator helps developers allocate CIDR ranges correctly during infrastructure planning.
        </p>
  `,
  "dev/css-minifier.astro": `
        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Automating Style Workflows and Browser Performance</h3>
        <p>
          In modern web development, manually minifying CSS files is rarely necessary because build tools like Webpack, Vite, Esbuild, and Gulp automate the process during bundling. However, having access to a fast, client-side browser minifier is incredibly useful for inline style optimization, checking compressed sizes quickly, or cleaning up legacy stylesheets when working outside a standard Node environment.
        </p>
        <p>
          Reducing CSS payloads also improves First Contentful Paint (FCP) and Largest Contentful Paint (LCP) scores. When a browser loads a web page, it blocks rendering until all linked CSS stylesheets are loaded. A smaller CSS payload means the browser can parse styles faster, rendering text and images to the screen in milliseconds. This local tool strips whitespace and comments securely inside your browser, protecting proprietary styles while optimizing performance.
        </p>
  `,
  "utility/unit-converter.astro": `
        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">The Science of Measurement Standards</h3>
        <p>
          Scientific conversions require high-precision constant ratios to maintain data integrity. For example, the international standard definition of an inch is exactly 2.54 centimeters. Using rounded numbers (like 2.5) in scientific or manufacturing calculations leads to compounding errors that can ruin physical products or scientific models.
        </p>
        <p>
          This converter uses standard international conversion coefficients, rendering results up to six decimal places. Whether you are scaling an engineering blueprint, converting speed metrics, or checking kitchen recipes, this local web utility provides precise, instant calculations. Since no data is sent to external servers, you can perform your calculations in complete privacy.
        </p>
  `,
  "utility/split-bill-calculator.astro": `
        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Etiquette for Large Group Dinners</h3>
        <p>
          Group dinners can become complicated when the check arrives. To prevent awkwardness, it is best to discuss how the bill will be handled before ordering. If the group agrees to split the bill itemized, using a shared link allows everyone to input their orders and see their exact share of tax and tips.
        </p>
        <p>
          Proportional splitting also helps when filing business expenses. Many companies require detailed receipt allocations for client dinners or team events. Proportional calculations ensure that individual expense reports match the actual receipts, preventing corporate audit issues. Our local browser calculator provides complete privacy, keeping your diners and items secure on your device.
        </p>
  `,
  "utility/tip-calculator.astro": `
        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">The Impact of Digital Payment Terminals</h3>
        <p>
          The rise of digital point-of-sale (POS) terminals has changed tipping habits. Many coffee shops and counter-service venues now display pre-calculated tip prompts (often 18%, 20%, or 25%) at checkout. While convenient, this has led to \"tip fatigue\" among consumers who feel pressured to tip for basic transactions where table service was not provided.
        </p>
        <p>
          Using an independent tip calculator allows you to compute the correct tip amount privately based on the service received, avoiding pressure from preset POS screens. It also makes it easy to split costs among diners and round up bills for cash payments, helping you handle transactions with confidence.
        </p>
  `,
  "utility/name-generator.astro": `
        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Developing a Naming Strategy</h3>
        <p>
          Whether you are choosing a baby name, character name, or business title, a structured approach yields the best results. Start by compiling a long list of possibilities without editing. Once you have a substantial list, filter names based on rhythm, pronunciation, and personal or brand values.
        </p>
        <p>
          For business naming, it is critical to verify domain availability and run trademark checks before committing to a name. A unique, brandable name reduces trademark risks and makes it easier to establish a solid search engine presence. Storing your favorites list in local storage allows you to refine your selections privately over time.
        </p>
  `,
  "image-tools/image-resizer.astro": `
        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Optimizing Images for Web Vitals</h3>
        <p>
          Optimizing image sizes is one of the most effective ways to improve a website's Core Web Vitals, specifically Largest Contentful Paint (LCP). Large, unresized hero images delay page rendering, causing poor user experiences and lower SEO rankings.
        </p>
        <p>
          Using client-side image scaling ensures you can resize assets quickly before uploading them to your Content Management System (CMS). Scaling photos to their exact display dimensions reduces bandwidth usage, resulting in faster load times and better performance scores. By keeping all processing local, your photos remain secure on your device.
        </p>
  `,
  "image-tools/image-compressor.astro": `
        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Improving Web Experience with Image Optimization</h3>
        <p>
          Compressing images is a core step in web performance optimization. By reducing image payloads, you can significantly decrease page load times, improve SEO scores, and lower bandwidth costs for mobile visitors.
        </p>
        <p>
          Our local image compressor allows you to optimize your assets privately without file size limits. It runs canvas-based conversion in your browser memory, ensuring your photos are never uploaded to remote servers. This offline workflow protects your data privacy while delivering fast, high-quality results.
        </p>
  `,
  "image-tools/pdf-merger.astro": `
        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Simplifying Document Workflows</h3>
        <p>
          Merging PDF files is a common task when compiling receipts, submitting academic applications, or organizing legal documents. Having access to a local, browser-based merger allows you to combine files quickly and securely without installing software.
        </p>
        <p>
          Since all operations happen inside your browser memory, your confidential documents are never exposed to remote server leaks. Reordering pages and merging files takes only a few seconds, improving efficiency while maintaining complete data privacy.
        </p>
  `
};

function processFiles() {
  console.log("Applying SEO and FAQ updates to 15 Astro files...");

  Object.keys(seoDataMap).forEach(relPath => {
    const fullPath = path.join('/Users/mirzamehediabbas/toolztotal/src/pages', relPath);
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️ Skip missing file: ${relPath}`);
      return;
    }

    let fileContent = fs.readFileSync(fullPath, 'utf8');
    const data = seoDataMap[relPath];

    // 1. Replace the frontmatter faqSchema
    const faqSchemaRegex = /(const|let)\s+faqSchema\s*=\s*\{[\s\S]*?\};/;
    
    const newFaqSchemaObject = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": data.faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    };
    const newFaqSchemaStr = `const faqSchema = ${JSON.stringify(newFaqSchemaObject, null, 2)};`;
    
    if (faqSchemaRegex.test(fileContent)) {
      fileContent = fileContent.replace(faqSchemaRegex, newFaqSchemaStr);
    } else {
      console.log(`⚠️ Warning: faqSchema variable definition not found in ${relPath}`);
    }

    // 2. Comprehensive cleanup of old blocks & comments to avoid duplicate structures
    fileContent = fileContent.replace(/<!-- Article Content -->/gi, '');
    fileContent = fileContent.replace(/<!-- FAQ Section -->/gi, '');
    fileContent = fileContent.replace(/<article[\s\S]*?<\/article>/gi, '');
    fileContent = fileContent.replace(/<section[^>]*?aria-label="Frequently Asked Questions"[\s\S]*?<\/section>/gi, '');

    // 3. Get expanded article copy
    let finalArticleHtml = data.article.trim();
    
    // Append expansion text if defined
    const expansionText = expansions[relPath];
    if (expansionText) {
      console.log(`[${relPath}] Found expansion paragraph!`);
      // Append before the closing </div> tag of the article
      const closeDivIndex = finalArticleHtml.lastIndexOf('</div>');
      if (closeDivIndex !== -1) {
        finalArticleHtml = finalArticleHtml.substring(0, closeDivIndex) + expansionText + '\n      </div>';
      } else {
        finalArticleHtml += '\n' + expansionText;
      }
    } else {
      console.log(`[${relPath}] ⚠️ No expansion paragraph defined!`);
    }

    // Double check word count in code
    const tempText = finalArticleHtml.replace(/<[^>]*>/g, ' ');
    const tempWordCount = tempText.split(/\s+/).filter(w => w.length > 0).length;
    console.log(`[${relPath}] Computed final word count: ${tempWordCount}`);

    // 4. Construct the new <article> block
    const newArticleBlock = `
    <!-- Article Content -->
    <article class="mt-20 prose dark:prose-invert max-w-4xl border-t border-hairline pt-16">
      ${finalArticleHtml}
    </article>
    `;

    // 5. Construct the new visual FAQ block
    let faqDetailsHtml = '';
    data.faqs.forEach(f => {
      faqDetailsHtml += `
        <details class="bg-canvas ring-1 ring-inset ring-hairline rounded-xl overflow-hidden shadow-lvl2 group">
          <summary class="px-6 py-4 cursor-pointer flex items-center justify-between font-sans font-semibold text-sm text-ink list-none hover:bg-canvas-soft transition-colors">
            ${f.q}
            <svg class="w-4 h-4 text-mute shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </summary>
          <div class="px-6 pb-5 text-sm text-body font-sans leading-relaxed border-t border-hairline pt-4">
            ${f.a}
          </div>
        </details>
      `;
    });

    const newFaqBlock = `
    <!-- FAQ Section -->
    <section class="max-w-4xl pt-16 mt-20 border-t border-hairline" aria-label="Frequently Asked Questions">
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-ink font-sans mb-8 text-pretty">Frequently Asked Questions</h2>
      <div class="space-y-4">
        ${faqDetailsHtml.trim()}
      </div>
    </section>
    `;

    // 6. Insert newArticleBlock and newFaqBlock right before Related Tools comment/section
    const landmarkComments = [
      '<!-- Related Tools Section -->',
      '<!-- Related Tools -->',
      '<section class="max-w-4xl pt-16 mt-20 border-t border-hairline" aria-label="Related Tools">',
      '<section class="max-w-4xl pt-16 mt-20 border-t border-hairline" aria-label="Related Tools"',
      '</div>\n</Layout>'
    ];

    let replaced = false;
    for (const landmark of landmarkComments) {
      if (fileContent.includes(landmark)) {
        const insertion = `${newArticleBlock}\n${newFaqBlock}\n\n    ${landmark}`;
        fileContent = fileContent.replace(landmark, insertion);
        replaced = true;
        break;
      }
    }

    if (!replaced) {
      // Fallback
      const fallbackRegex = /<\/div>\s*<\/Layout>/;
      if (fallbackRegex.test(fileContent)) {
        const insertion = `\n${newArticleBlock}\n${newFaqBlock}\n</div>\n</Layout>`;
        fileContent = fileContent.replace(fallbackRegex, insertion);
        replaced = true;
      }
    }

    if (replaced) {
      fs.writeFileSync(fullPath, fileContent, 'utf8');
      console.log(`✅ Success: Cleaned & Updated ${relPath}`);
    } else {
      console.log(`❌ Error: Could not locate insertion point in ${relPath}`);
    }
  });
}

processFiles();
