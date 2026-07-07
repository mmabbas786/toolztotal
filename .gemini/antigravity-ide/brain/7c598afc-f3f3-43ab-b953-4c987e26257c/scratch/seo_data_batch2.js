module.exports = {
  "finance/cac-ltv-calculator.astro": {
    faqs: [
      { q: "What is Customer Acquisition Cost (CAC)?", a: "Customer Acquisition Cost (CAC) is the total expense incurred to acquire a new customer, calculated by dividing total sales and marketing costs by the number of new customers acquired during a set period." },
      { q: "What is Customer Lifetime Value (LTV)?", a: "Customer Lifetime Value (LTV) is the total projected revenue or gross profit a business expects to earn from a single customer account over the duration of their relationship." },
      { q: "Why is the LTV:CAC ratio important?", a: "The LTV:CAC ratio measures marketing efficiency and SaaS viability. A ratio of 3:1 is widely considered the industry benchmark for healthy, sustainable growth." },
      { q: "How is LTV calculated for subscription companies?", a: "For SaaS companies, LTV = Average Revenue Per User (ARPU) * Gross Margin / User Churn Rate. Churn rate is the percentage of customers canceling their subscription each period." },
      { q: "What is the payback period?", a: "The payback period is the number of months required for a customer to generate enough gross profit to cover their acquisition cost: Payback Period = CAC / (Monthly ARPU * Gross Margin)." },
      { q: "What is churn rate?", a: "Churn rate is the percentage of subscribers who cancel their service during a given timeframe. Lowering churn is the most effective way to increase customer lifetime value." },
      { q: "What is a healthy payback period?", a: "For early-stage SaaS startups, a payback period under 12 months is considered healthy. High-performing enterprise SaaS businesses can sustain longer payback periods if capital is cheap." },
      { q: "Does this tool store my SaaS financials?", a: "No, never. All calculations are executed locally within your browser tab. Your startup metrics are kept completely private and are never uploaded to our servers." },
      { q: "What costs should be included in CAC?", a: "CAC should include all marketing ad spend, sales commissions, salaries of sales and marketing employees, software subscriptions, and overhead costs allocated to customer acquisition." },
      { q: "How do you calculate customer lifespan?", a: "Average customer lifespan is calculated by dividing 1 by the churn rate: Lifespan = 1 / Churn Rate. A monthly churn of 2% implies a average lifespan of 50 months." }
    ],
    article: `
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-ink font-sans mb-6">Evaluating SaaS Unit Economics: The Mathematics of LTV and CAC</h2>
      <div class="text-body text-sm md:text-base font-sans leading-relaxed space-y-6">
        <p>
          In subscription-based software-as-a-service (SaaS) business models, unit economics are the foundational check of corporate health. While growth in monthly recurring revenue (MRR) is a key headline metric, sustainable growth requires understanding the relationship between customer acquisition cost (CAC) and customer lifetime value (LTV). Calculating and tracking these metrics helps founders and operators make informed decisions about hiring, ad spend, pricing tiers, and expansion strategies.
        </p>
        <p>
          Understanding unit economics is also critical for raising venture capital or securing debt financing. Investors analyze these metrics to determine if a business has a viable path to profitability or if it is simply burning capital to acquire unprofitable customers. By evaluating the ratio between LTV and CAC, you can determine if your current business model is sustainable.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Calculating Customer Acquisition Cost (CAC)</h3>
        <p>
          Customer Acquisition Cost represents the average price paid to secure a single customer. It includes all marketing campaigns, sales salaries, tools, and advertising costs over a period, divided by the volume of new logos signed:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          CAC = Total Sales & Marketing Costs / New Customers Acquired
        </div>
        <p>
          For example, if a SaaS startup spends $30,000 on Google Ads, sales commissions, and marketing software in Q1, and secures 150 new customers, the CAC is:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          CAC = $30,000 / 150 = $200.00 per customer
        </div>
        <p>
          When calculating CAC, it is vital to include all fully loaded costs. This means you must account for the salaries of your sales representatives, marketing managers, and design teams, alongside direct ad spend. Neglecting these overhead and headcount costs leads to an artificially low CAC, which can skew financial projections and lead to poor business decisions.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Calculating Customer Lifetime Value (LTV)</h3>
        <p>
          Customer Lifetime Value projects the gross profit generated by an account over its expected lifespan. The standard SaaS LTV calculation incorporates Average Revenue Per User (ARPU), gross margins, and user churn:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          LTV = (ARPU &times; Gross Margin) / Churn Rate
        </div>
        <p>
          If your customers pay an average of $50.00 per month, your gross cost of goods sold (hosting, support) leaves an 80% gross margin, and your monthly churn rate is 2.5%:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          LTV = ($50.00 &times; 0.80) / 0.025 = $40.00 / 0.025 = $1,600.00
        </div>
        <p>
          LTV is highly sensitive to churn. If your churn rate increases from 2.5% to 5.0%, your LTV is cut in half ($800 instead of $1,600). This highlights why customer retention is often the most important factor in SaaS profitability.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Interpreting the LTV:CAC Ratio</h3>
        <p>
          Once LTV and CAC are computed, the relationship is expressed as a ratio:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          LTV:CAC Ratio = LTV / CAC
        </div>
        <p>
          Using our example figures ($1,600 / $200), the LTV:CAC ratio is 8:1. This represents a highly efficient sales and marketing engine. General benchmarks suggest:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-sm text-body font-sans">
          <li><strong>Less than 1:1:</strong> The company is losing money on every customer acquired. The business model is unsustainable without drastic adjustments.</li>
          <li><strong>1:1 to 2:1:</strong> Marginal unit economics. High risk of cash depletion as overhead costs eat up the margin.</li>
          <li><strong>3:1:</strong> The standard industry target for mature, venture-backed SaaS startups.</li>
          <li><strong>Over 5:1:</strong> Extremely profitable unit economics, suggesting you may be under-investing in marketing and could grow faster by spending more to acquire customers.</li>
        </ul>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Payback Period and Cash Flow Management</h3>
        <p>
          Another critical metric related to unit economics is the CAC Payback Period. This indicates how many months it takes for a customer to generate enough gross profit to cover their acquisition cost. A shorter payback period improves cash flow and reduces the amount of capital required to scale the business.
        </p>
        <p>
          The formula to calculate the payback period is:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Payback Period (Months) = CAC / (Monthly ARPU &times; Gross Margin)
        </div>
        <p>
          If your CAC is $200, ARPU is $50, and Gross Margin is 80%, the payback period is $200 / ($50 &times; 0.80) = $200 / $40 = 5 months. This means you recover your marketing investment in 5 months.
        </p>
        <p>
          For venture-backed startups, recovering CAC in under 12 months is generally considered excellent. Longer payback periods require significant upfront cash reserves to support customer growth, which can increase the risk of cash shortages.
        </p>
      </div>
    `
  },
  "dev/subnet-calculator.astro": {
    faqs: [
      { q: "What is IP subnetting?", a: "Subnetting is the practice of dividing a single large physical network into multiple smaller, logically segmented sub-networks (subnets) to improve routing efficiency and security." },
      { q: "What is CIDR notation?", a: "CIDR (Classless Inter-Domain Routing) notation represents an IP address and its routing prefix length in bits. It is written as the IP followed by a slash and prefix length (e.g. 192.168.1.0/24)." },
      { q: "How many usable hosts are in a /24 subnet?", a: "A /24 subnet has 256 total IP addresses. However, two addresses are reserved (the network address at the start and the broadcast address at the end), leaving 254 usable host IP addresses." },
      { q: "What is a subnet mask?", a: "A subnet mask is a 32-bit number that masks an IP address, dividing the address into network bits and host bits. For example, a /24 prefix has a subnet mask of 255.255.255.0." },
      { q: "What is a wildcard mask?", a: "A wildcard mask is the bitwise inverse of a subnet mask. It is used in routers to define address ranges in access control lists (ACLs). A subnet mask of 255.255.255.0 has a wildcard mask of 0.0.0.255." },
      { q: "How is the network address determined?", a: "The network address is calculated by performing a bitwise AND operation between the IP address and the subnet mask, setting all host bits to 0." },
      { q: "How is the broadcast address determined?", a: "The broadcast address is calculated by performing a bitwise OR operation between the network address and the wildcard mask, setting all host bits to 1." },
      { q: "What is the difference between IPv4 and IPv6 subnetting?", a: "IPv4 subnets use 32-bit addresses and subnet masks. IPv6 subnets use 128-bit addresses and prefix lengths, and do not use traditional broadcast addresses (replacing them with multicast)." },
      { q: "Can I use the first and last IP of a subnet?", a: "In standard network routing, the first IP (network ID) and last IP (broadcast ID) are reserved and cannot be assigned to individual network cards (NICs)." },
      { q: "Does this tool support subnetting divisions?", a: "Yes. Our tool calculates address ranges, host availability, and subnet structures for any standard CIDR prefix value instantly." }
    ],
    article: `
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-ink font-sans mb-6">IP Network Engineering: Understanding Subnetting and CIDR Address Math</h2>
      <div class="text-body text-sm md:text-base font-sans leading-relaxed space-y-6">
        <p>
          In computer networking, IP addresses are the coordinates that allow devices to route packets across local networks and the global internet. Because assigning a single flat network to an entire enterprise is inefficient, network engineers divide large blocks of IP space into smaller segments called subnets. Subnetting limits broadcast traffic, organizes departments logically, and enhances network security.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Understanding Subnet Masks and IP Segmentation</h3>
        <p>
          An IPv4 address consists of 32 binary bits divided into four 8-bit octets. A subnet mask defines which portion of those 32 bits belongs to the network routing ID and which portion belongs to individual host interfaces. The mask consists of contiguous binary 1s followed by contiguous binary 0s:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-sm text-body font-sans">
          <li><strong>Network Bits (1s):</strong> Define the routing address that routers use to direct traffic to the correct network segment.</li>
          <li><strong>Host Bits (0s):</strong> Represent the addresses available for computers, servers, and printer interfaces within that subnet.</li>
        </ul>
        <p>
          For example, a subnet mask of 255.255.255.0 has 24 bits set to 1 and 8 bits set to 0. This means the first three octets identify the network, and the last octet identifies the host. If a device has an IP of 192.168.1.50, the network ID is 192.168.1.0 and the host ID is 50.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">CIDR Notation and Host Calculations</h3>
        <p>
          Classless Inter-Domain Routing (CIDR) replaced the outdated Class A, B, and C addressing systems in 1993. Instead of rigid subnets, CIDR specifies the exact number of network bits using a slash suffix. For example:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          192.168.1.0/24 &rarr; Subnet Mask: 255.255.255.0 (24 network bits, 8 host bits)
        </div>
        <p>
          To calculate the total number of IP addresses in a CIDR block, you use the formula:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Total IPs = 2^(32 - Prefix Length)
        </div>
        <p>
          For a /24 subnet, the calculation is 2^(32 - 24) = 2^8 = 256. Because the first address (network ID) and the last address (broadcast ID) are reserved, the usable host capacity is:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Usable Hosts = 2^(32 - Prefix) - 2 = 256 - 2 = 254 usable hosts
        </div>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Determining Network Boundaries</h3>
        <p>
          To find the network boundaries for an IP address, routers perform binary logic:
        </p>
        <p>
          <strong>Network Address (Bitwise AND):</strong> Compares the IP address bits to the subnet mask. Any bit that is a 1 in both numbers remains a 1; others become 0. This yields the start of the subnet.
        </p>
        <p>
          <strong>Broadcast Address (Bitwise OR):</strong> Takes the network address and combines it with the inverse of the subnet mask (wildcard mask), setting all host bits to 1. This yields the end of the subnet.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Subnet Division and IP Allocation Best Practices</h3>
        <p>
          Designing an IP plan requires careful planning. Network architects must forecast host requirements for each segment (such as office workstations, server pools, VoIP lines, and guest Wi-Fi). By designing subnets that align with these requirements, you can prevent IP address exhaustion and ensure efficient routing.
        </p>
        <p>
          For instance, using a /24 subnet for a small department with only 10 devices wastes 244 usable IP addresses. In this scenario, a /28 subnet (which provides 14 usable IP addresses) is a much more efficient allocation. This practice of matching subnet sizes to actual requirements is known as Variable Length Subnet Masking (VLSM).
        </p>
        <p>
          Proper subnetting also improves network performance. By breaking a large network into smaller broadcast domains, you limit the spread of broadcast traffic, which can consume significant bandwidth on larger networks. This segregation also makes it easier to apply firewall rules and access control lists (ACLs) to manage traffic between different departments or security zones.
        </p>
      </div>
    `
  },
  "dev/css-minifier.astro": {
    faqs: [
      { q: "What is CSS minification?", a: "CSS minification is the process of removing unnecessary characters from a stylesheet—such as white spaces, line breaks, indentation, and comments—to reduce file size without changing how the CSS renders." },
      { q: "Why should I minify CSS?", a: "Minifying CSS reduces page payload sizes, decreasing download times for website visitors. This improves page load speed metrics like Largest Contentful Paint (LCP) and enhances SEO rankings." },
      { q: "Does minifying CSS alter page designs?", a: "No. Minification only strips formatting whitespace and comments. The browser interprets the code identically, so your design remains unchanged." },
      { q: "What is the difference between minification and compression?", a: "Minification strips characters from the source code. Compression (like Gzip or Brotli) uses server algorithms to encode the file during network transit." },
      { q: "Does this CSS minifier support SCSS or LESS?", a: "Yes. It handles basic nesting and strips standard CSS/SCSS comments (/* */ and //), though it does not compile SCSS variables into standard CSS." },
      { q: "Is my source CSS uploaded to a server?", a: "No. This tool operates 100% client-side in your web browser. Your stylesheets are minified locally and never transmitted over the internet." },
      { q: "What is the average file size reduction from minification?", a: "Typical stylesheets see a 20% to 50% file size reduction, depending on how much spacing, indentation, and documentation comments the original file contained." },
      { q: "Can I undo minification?", a: "Yes, you can use the 'Beautifier' mode in this tool or a CSS formatter to restore line breaks and indentation, though deleted comments cannot be recovered." },
      { q: "What is a source map?", a: "A source map is a file that maps minified code back to the original source code, allowing developers to debug their stylesheets inside browser dev tools." },
      { q: "Should I minify CSS in development?", a: "It is best to keep CSS formatted in development for readability, and automate minification as part of your build pipeline before deploying to production." }
    ],
    article: `
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-ink font-sans mb-6">Optimizing Web Delivery: The Role of CSS Minification in Frontend Performance</h2>
      <div class="text-body text-sm md:text-base font-sans leading-relaxed space-y-6">
        <p>
          Web page loading speed is a core factor in modern user experience and search engine optimization. Search engines prioritize websites that render content quickly. Among the factors affecting page load speeds, CSS files represent a common bottleneck. Because browsers block rendering until all linked stylesheets are downloaded and parsed, optimizing CSS is a developer priority.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">The Mechanics of Minification</h3>
        <p>
          When developers write CSS, they use formatting to make the code readable:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-sm text-body font-sans">
          <li><strong>Indentation & Newlines:</strong> Create hierarchical tabs showing parent-child classes.</li>
          <li><strong>Comments:</strong> Document variables, sections, and responsive breakpoints.</li>
          <li><strong>Trailing Semicolons:</strong> Added for formatting consistency.</li>
        </ul>
        <p>
          While helpful for humans, browsers do not require this formatting. Minification strips these characters, converting a 100-line formatted document into a single dense line of text.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Quantifying the Benefits of CSS Optimization</h3>
        <p>
          A typical unminified stylesheet can range from 50 KB to over 200 KB. By removing whitespace and comments, file size can often be reduced by 30% or more. Combined with server-level compression (like Gzip or Brotli), this significantly reduces the bytes transferred over the network, allowing the browser to parse styles and render pages faster.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Minification vs. Compression</h3>
        <p>
          It is important to distinguish minification from network compression. Minification modifies the code itself before it is stored on the server. Compression, such as Gzip, is an automated server process that bundles files before sending them to the browser, which then unpacks them. For optimal web performance, developers should use both minification and server compression.
        </p>
        <p>
          Furthermore, minified CSS files require less parsing time from the browser's rendering engine. When a browser processes a stylesheet, it builds the CSS Object Model (CSSOM). A smaller, minified file reduces the CPU time required to construct this model, resulting in faster rendering paths and a more responsive interface.
        </p>
        <p>
          Minifying your CSS also makes it harder for others to copy your code, as the formatting is stripped away. While not a secure encryption method, it acts as a basic layer of obfuscation. Modern build tools compile and minify CSS automatically, but having an on-demand browser-based minifier is incredibly useful for quick tests, debugging inline styles, or converting legacy assets quickly without booting up a full terminal build environment.
        </p>
      </div>
    `
  },
  "utility/unit-converter.astro": {
    faqs: [
      { q: "How does the smart search unit converter work?", a: "The converter parses natural language inputs (like '5 ft to cm' or '100 c to f') to identify the value, source unit, and target unit, performing the conversion instantly." },
      { q: "Can I convert between metric and imperial units?", a: "Yes. The tool supports conversions between the US Imperial system and the International Metric system across all categories." },
      { q: "What categories of units are supported?", a: "It supports conversions for length, mass/weight, area, volume, temperature, speed, time, and common cooking measurements." },
      { q: "Is temperature conversion linear?", a: "No. Unlike length or weight conversions that use a simple multiplier, temperature conversion requires offset math (e.g. Fahrenheit to Celsius: C = (F - 32) * 5/9)." },
      { q: "How accurate are the conversion ratios?", a: "Conversions use high-precision floating-point constants based on standard international conversion benchmarks, rounded to 6 decimal places." },
      { q: "Can I use this tool offline?", a: "Yes. All conversion logic and dictionary definitions are compiled locally in the page bundle. The tool requires no internet connection to operate." },
      { q: "What is the metric prefix system?", a: "The metric system uses base-10 prefixes (kilo-, hecto-, deca-, deci-, centi-, milli-) to scale base units (meters, grams) up or down by powers of 10." },
      { q: "How do I convert cups to milliliters?", a: "One US cup is equivalent to approximately 236.588 milliliters. The converter performs this cooking calculation instantly." },
      { q: "Does the search parser ignore case?", a: "Yes. The natural language engine is case-insensitive, allowing inputs like '5FT TO CM' or '5ft to cm' to resolve identically." },
      { q: "Is my conversion query history stored?", a: "No. Your query history is stored only in your browser's local sessionStorage to provide quick navigation during your session. No data is saved on our servers." }
    ],
    article: `
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-ink font-sans mb-6">Scientific Unit Conversions: Metric and Imperial Systems Explained</h2>
      <div class="text-body text-sm md:text-base font-sans leading-relaxed space-y-6">
        <p>
          Measurement systems provide a standard framework for science, commerce, and daily life. Historically, localized measurement systems led to confusion and trade barriers. Today, the world relies on two primary systems: the International System of Units (Metric) and the US Customary System (Imperial). Converting values between these systems is essential for global travel, scientific research, cooking, and manufacturing.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Understanding the Metric System</h3>
        <p>
          The Metric system, established during the French Revolution, is designed around the base-10 decimal system. Every unit scales by factors of 10, using standard prefixes:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-sm text-body font-sans">
          <li><strong>Kilo- (k):</strong> 1,000 times the base unit (e.g., 1 kilometer = 1,000 meters).</li>
          <li><strong>Centi- (c):</strong> One-hundredth of the base unit (e.g., 1 centimeter = 0.01 meters).</li>
          <li><strong>Milli- (m):</strong> One-thousandth of the base unit (e.g., 1 milligram = 0.001 grams).</li>
        </ul>
        <p>
          This consistent structure makes the metric system simple to scale. It is the global standard for science, medicine, and international trade, allowing researchers to communicate data without conversion errors.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">The US Customary (Imperial) System</h3>
        <p>
          The US Customary system evolved from historical British units. Unlike the metric system, it uses non-decimal scaling factors:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          12 Inches = 1 Foot<br/>
          3 Feet = 1 Yard<br/>
          5,280 Feet = 1 Mile
        </div>
        <p>
          These non-uniform conversion factors make calculations more complex, requiring specific multipliers for each unit pair. For instance, converting 5 miles into feet requires multiplying 5 by 5,280, whereas converting 5 kilometers to meters simply requires multiplying by 1,000.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">The Math of Temperature Conversions</h3>
        <p>
          While length, mass, and volume conversions use simple multiplication, temperature conversions require offset math because the Celsius and Fahrenheit scales place their zero points differently. The conversion formulas are:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Celsius to Fahrenheit: F = (C &times; 9/5) + 32<br/>
          Fahrenheit to Celsius: C = (F - 32) &times; 5/9
        </div>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Applications of Accurate Conversions</h3>
        <p>
          Precision in unit conversion is critical across many industries. In medicine, incorrect conversions between milligrams and micrograms can lead to serious dosing errors. In aerospace engineering, a famous mix-up between metric and imperial units caused the loss of the Mars Climate Orbiter in 1999. In daily life, precise conversions are useful when reading international recipes, tracking travel speeds, or purchasing imported building materials.
        </p>
        <p>
          Having access to a fast, reliable converter that accepts natural language inputs removes the friction of manual conversion math. It allows you to quickly query values without checking reference tables, improving efficiency in both professional and casual workflows.
        </p>
      </div>
    `
  },
  "utility/split-bill-calculator.astro": {
    faqs: [
      { q: "How do you calculate a split bill?", a: "To split a bill, sum all base items, calculate the combined tax and tip percentage, apply that percentage to each person's items, and calculate individual totals." },
      { q: "What is itemized bill splitting?", a: "Itemized splitting assigns specific menu items to the individuals who ordered them, rather than dividing the total bill equally. This ensures everyone pays only for what they consumed." },
      { q: "How are shared items handled when splitting a bill?", a: "Shared items (like appetizers) are divided equally among the participants, with the cost added to each person's individual subtotal." },
      { q: "How should tax and tips be distributed?", a: "Tax and tips should be distributed proportionally based on each person's subtotal, rather than divided equally. This ensures that someone who ordered a small salad doesn't pay tax on someone else's steak." },
      { q: "Can I share the split bill results?", a: "Yes. This tool encodes the item assignments and totals into the URL parameters, allowing you to copy and share the link with group members via messaging apps." },
      { q: "Does this tool save my guest list or receipt details?", a: "No. All calculation data is stored in the URL parameters and processed locally. Your receipt details are never saved on a server." },
      { q: "Is tip calculated before or after tax?", a: "Standard etiquette is to calculate the tip percentage on the pre-tax food and beverage subtotal, though some consumers calculate it on the post-tax total for simplicity." },
      { q: "How do I allocate a flat discount to a split bill?", a: "Discounts should be applied proportionally. Reduce each person's subtotal by their percentage share of the discount before calculating tax and tip." },
      { q: "Does this tool support rounding?", a: "Yes. The calculator rounds final individual shares to the nearest cent using standard mathematical rounding rules." },
      { q: "Can this tool handle tax and tip values together?", a: "Yes. You can input the tax rate and tip percentage separately, and the engine will calculate and add both to the individual subtotals." }
    ],
    article: `
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-ink font-sans mb-6">Fair Shared Dining: The Math and Etiquette of Splitting Bills</h2>
      <div class="text-body text-sm md:text-base font-sans leading-relaxed space-y-6">
        <p>
          Dining out with friends or colleagues is a common social activity, but resolving the bill at the end of the meal can be awkward. While dividing the total bill equally is simple, it can be unfair if there is a large difference in what guests ordered. Itemized bill splitting provides a fairer solution by ensuring everyone pays only for what they consumed.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">The Problem with Equal Splits</h3>
        <p>
          Dividing a bill equally is simple, but it can lead to friction when orders vary significantly. For example, if one guest orders a salad and water ($15.00) while another orders a steak and cocktails ($60.00), an equal split forces the first guest to subsidize the second. Itemized splitting solves this by calculating individual shares, ensuring everyone pays their fair share of the food and beverage cost.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">The Math of Proportional Tax and Tip Allocation</h3>
        <p>
          To split an itemized bill correctly, tax and tips must be allocated proportionally based on each person's subtotal. The calculation steps are:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-sm text-body font-sans">
          <li><strong>Step 1:</strong> Sum the individual items to find each person's subtotal.</li>
          <li><strong>Step 2:</strong> Calculate the shared items and distribute the cost evenly to the subtotals.</li>
          <li><strong>Step 3:</strong> Determine the tax and tip ratio: Tax & Tip Ratio = Total Bill / Sum of Subtotals.</li>
          <li><strong>Step 4:</strong> Multiply each person's subtotal by the Tax & Tip Ratio to find their final total.</li>
        </ul>
        <p>
          This method ensures that tax and tips are distributed fairly relative to what each person ordered, rather than divided equally.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Modern Tipping and Dining Etiquette</h3>
        <p>
          When using an itemized bill splitter, it is important to communicate with your group beforehand to avoid confusion. Agreeing on a tipping percentage and how to handle shared appetizers or bottles of wine ensures a smooth transaction. Our tool also supports sharing your calculations via a generated link, allowing everyone to verify their breakdown locally on their own devices.
        </p>
        <p>
          Splitting bills proportionally is especially helpful in business settings where expenses need to be accurately recorded and cataloged. Proportional splitting ensures that expense reports reflect true individual spending, preventing disputes and keeping company audits clean. By keeping all calculations browser-local, this calculator guarantees complete privacy, ensuring your receipts and diner list are never saved on external servers.
        </p>
      </div>
    `
  }
};
