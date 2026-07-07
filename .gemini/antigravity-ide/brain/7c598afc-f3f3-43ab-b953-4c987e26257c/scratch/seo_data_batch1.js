module.exports = {
  "finance/sales-tax-calculator.astro": {
    faqs: [
      { q: "How is sales tax calculated?", a: "Sales tax is calculated by multiplying the taxable purchase price by the decimal equivalent of the tax rate: Sales Tax = Price * (Tax Rate / 100). The total price is then the sum of the base price and the tax." },
      { q: "How do you calculate the pre-tax price from the total cost?", a: "To find the pre-tax price (reverse calculation) from the total amount paid, divide the total price by 1 plus the decimal tax rate: Pre-Tax Price = Total Price / (1 + (Tax Rate / 100))." },
      { q: "Why do sales tax rates differ by city and county?", a: "While state governments set a baseline sales tax rate, local jurisdictions (cities, counties, and special transit districts) frequently levy additional local taxes on top of the state rate, leading to varying combined rates." },
      { q: "Does this tool pull live real-time tax database rates?", a: "No. This tool utilizes static average combined sales tax estimates per state. Because local municipal rates shift frequently, it is recommended to verify exact current rates with municipal tax portals." },
      { q: "Is my shopping list data uploaded or stored?", a: "No, never. All item entries, prices, and totals are computed entirely inside your browser's local memory. No information is transmitted to servers, ensuring complete privacy." },
      { q: "What is a sales tax nexus?", a: "A sales tax nexus is a connection between a seller and a state that requires the seller to collect and remit sales tax. This can be established through physical presence (offices, inventory) or economic presence (sales volume)." },
      { q: "What is the difference between sales tax and use tax?", a: "Sales tax is collected by the seller at the point of sale. Use tax is self-assessed and paid directly to the state by the buyer when sales tax was not collected on taxable items, such as out-of-state purchases." },
      { q: "Are services subject to sales tax?", a: "Whether services are taxable depends entirely on state laws. Many states tax tangible personal property while leaving standard services untaxed, but others tax utilities, digital products, and services." },
      { q: "What is a sales tax exemption certificate?", a: "A sales tax exemption certificate allows a buyer to purchase goods tax-free, usually for resale, raw manufacturing materials, or when purchasing on behalf of tax-exempt organizations." },
      { q: "How does the reverse sales tax solver handle rounding?", a: "The calculator divides the total cost by the gross tax factor and rounds the resulting base price and tax amount to the nearest cent using standard mathematical half-up rounding rules." }
    ],
    article: `
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-ink font-sans mb-6">Demystifying Sales Tax Math: Direct and Reverse Calculations</h2>
      <div class="text-body text-sm md:text-base font-sans leading-relaxed space-y-6">
        <p>
          Sales tax is a consumption tax imposed by governments on the sale of goods and services. While retail cash registers execute these calculations automatically, understanding the underlying formulas is essential for business accounting, expense tracking, and personal consumer planning. The mathematics of tax computation falls into two primary categories: standard direct tax calculation and reverse tax calculation (often called the pre-tax solver). In this guide, we will break down both calculations in detail.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Calculating Direct Sales Tax</h3>
        <p>
          To find the sales tax and total cost of an item, you multiply the base price by the combined tax rate, then add that product to the base price. The basic formula is:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Sales Tax = Base Price &times; (Tax Rate / 100)<br/>
          Total Cost = Base Price + Sales Tax
        </div>
        <p>
          For example, if you purchase a laptop for $1,250.00 in a jurisdiction with a combined sales tax rate of 8.25%, the calculation is:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Sales Tax = $1,250.00 &times; 0.0825 = $103.125 (rounds to $103.13)<br/>
          Total Cost = $1,250.00 + $103.13 = $1,353.13
        </div>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">The Reverse (Pre-Tax) Calculation Formula</h3>
        <p>
          Frequently, individuals or businesses need to extract the original pre-tax value from a gross receipt total. A common mistake is multiplying the total cost by the tax percentage and subtracting it. This is mathematically incorrect because the tax was calculated on the smaller base price, not the larger final price. Instead, you must reverse the multiplication using division:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Pre-Tax Price = Total Cost / (1 + (Tax Rate / 100))
        </div>
        <p>
          Applying this correct formula to a total receipt of $1,353.13 at an 8.25% rate yields:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Pre-Tax Price = $1,353.13 / 1.0825 = $1,250.00
        </div>
        <p>
          Once you have calculated the pre-tax price, the tax amount itself can be determined by subtracting the pre-tax price from the total cost:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Sales Tax Amount = Total Cost - Pre-Tax Price = $1,353.13 - $1,250.00 = $103.13
        </div>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Why Local Sales Tax Rates Vary</h3>
        <p>
          In the United States, sales tax rates are not uniform. A single transaction may incorporate multiple layers of taxation, including state, county, municipal, and special district taxes. This combined structure creates highly localized tax rates. For example, a purchase on one side of a street could carry a different rate than a purchase on the other if it crosses a municipal boundary.
        </p>
        <p>
          Local jurisdictions often use these taxes to fund specific public programs. For instance, a county might implement a temporary sales tax increase to pay for a new hospital, or a city might levy a transit tax to expand its light rail system. This explains why rates can vary even between adjacent neighborhoods.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Understanding Use Tax</h3>
        <p>
          A closely related concept is the use tax. While sales tax is charged by vendors located within a state, use tax applies to purchases made from out-of-state retailers who do not collect sales tax. For instance, if you purchase an item online from a merchant with no physical presence in your home state, you may be legally required to report the purchase and pay use tax directly to your state revenue agency. The tax rate is identical to the local sales tax rate, ensuring states collect revenue even on out-of-state ecommerce transactions.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Exemptions and Tax Holidays</h3>
        <p>
          Not all purchases are taxable. Most states provide exemptions for essential goods like groceries, prescription medications, and medical devices. Additionally, many states host annual "sales tax holidays"—typically before the start of the school year—where taxes are waived on clothing, school supplies, and computers up to a certain dollar limit to assist families with education costs.
        </p>
        <p>
          Businesses also benefit from exemptions. Wholesale purchases intended for resale are generally exempt from sales tax, provided the buyer has a valid resale certificate. Similarly, raw materials purchased by manufacturers to produce finished goods are often tax-free.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Sales Tax Nexus and Modern E-Commerce</h3>
        <p>
          In the past, retailers only had to collect sales tax in states where they had a physical presence, such as a store or warehouse. However, the landmark Supreme Court decision in <i>South Dakota v. Wayfair (2018)</i> allowed states to establish "economic nexus" laws. Today, if an online merchant surpasses a state's economic threshold (often $100,000 in sales or 200 transactions), they are required to register and collect sales tax from buyers in that state, regardless of physical location.
        </p>
      </div>
    `
  },
  "finance/property-tax-calculator.astro": {
    faqs: [
      { q: "How is property tax calculated?", a: "Property tax is calculated by multiplying the assessed value of the property by the local tax rate (often expressed as a millage rate): Property Tax = Assessed Value * (Millage Rate / 1000)." },
      { q: "What is an assessed value vs. market value?", a: "Market value is the estimated price a property would sell for on the open market. Assessed value is the valuation placed on the property by local tax authorities to calculate property taxes. It is often a percentage of market value." },
      { q: "What is a millage rate (mills)?", a: "A millage rate is the tax rate expressed in mills, where one mill represents $1 of tax for every $1,000 of assessed property value: Millage Rate = Tax Rate per Thousand." },
      { q: "How does a homestead exemption affect property taxes?", a: "A homestead exemption reduces the taxable assessed value of a primary residence. For example, if a home is assessed at $300,000 and has a $50,000 exemption, taxes are calculated on $250,000." },
      { q: "Why do property tax rates differ by county?", a: "Property taxes are levied by local governments (counties, cities, school districts) to fund local services. Areas with high school budgets or extensive county infrastructure typically have higher millage rates." },
      { q: "How often are property taxes assessed?", a: "Assessment frequencies vary by state. Some counties reassess properties annually, while others reassess every two to three years or only when a property is sold." },
      { q: "Can I appeal my property tax assessment?", a: "Yes. Homeowners who believe their county's assessed value is higher than the true market value can file an appeal with the local board of equalization within a set window after receiving their assessment notice." },
      { q: "What are property tax assessment limits?", a: "Some states limit how much assessed values can increase each year for owner-occupied properties. For example, Florida's Save Our Homes act caps annual assessment increases at 3% or the inflation rate." },
      { q: "Do renters pay property taxes?", a: "Renters do not pay property taxes directly to the county, but landlords typically factor property tax costs into the rental pricing." },
      { q: "Are property taxes tax-deductible?", a: "Under current U.S. federal tax law, state and local taxes (SALT)—including property taxes—are deductible up to a combined cap of $10,000 on itemized deductions." }
    ],
    article: `
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-ink font-sans mb-6">Navigating Property Tax Mathematics: Assessed Values and Millage Rates</h2>
      <div class="text-body text-sm md:text-base font-sans leading-relaxed space-y-6">
        <p>
          Property taxes are the primary source of revenue for municipal governments, county offices, and school districts in the United States. Unlike sales tax, which is calculated per transaction, property tax is assessed annually based on the value of real estate holdings. Understanding how property taxes are computed helps homeowners budget, evaluate prospective home purchases, and identify if an assessment is worth appealing.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">The Property Tax Equation</h3>
        <p>
          The baseline calculation for property tax depends on two factors: the assessed value of the property and the local combined tax rate (often expressed as a millage rate). The general formula is:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Property Tax = Assessed Value &times; (Millage Rate / 1,000)
        </div>
        <p>
          Alternatively, if the tax rate is expressed as a standard percentage, the formula becomes:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Property Tax = Assessed Value &times; (Tax Percentage / 100)
        </div>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Understanding Assessed Value vs. Market Value</h3>
        <p>
          Homeowners frequently confuse their property's market value (what it would sell for on the open market) with its assessed value (the value used for tax calculations). Local tax assessors determine the assessed value, which is often only a fraction of the market value. This fraction is called the assessment ratio.
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Assessed Value = Market Value &times; Assessment Ratio
        </div>
        <p>
          For example, if a home has a market value of $400,000 and the county assessment ratio is 80%, the assessed value is $320,000. Assessment ratios are established by local or state law and vary widely from county to county. In some jurisdictions, the assessment ratio is 100%, meaning the assessed value is equal to the market value.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">How Millage Rates (Mills) Work</h3>
        <p>
          Property tax rates are frequently written in "mills," which means one-thousandth. One mill equals $1 of tax for every $1,000 of assessed value. To calculate property taxes with a millage rate, you divide the rate by 1,000.
        </p>
        <p>
          For instance, if a home's assessed value is $300,000 and the local millage rate is 15 mills:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Property Tax = $300,000 &times; (15 / 1,000) = $300,000 &times; 0.015 = $4,500
        </div>
        <p>
          Local governments determine the millage rate annually based on their budgetary requirements. If the county needs to raise more revenue to fund school construction or municipal infrastructure, the county commission may vote to increase the millage rate, raising property taxes even if property values remain flat. Millage rates are typically composed of separate levies for schools, county services, city operations, and special districts.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Lowering Your Taxes with Exemptions</h3>
        <p>
          Many local governments offer property tax exemptions to reduce the tax burden on homeowners. The most common is the **homestead exemption**, which subtracts a set amount from the assessed value of a primary residence before taxes are calculated.
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Taxable Assessed Value = Assessed Value - Exemption Amount<br/>
          Property Tax = Taxable Assessed Value &times; (Millage Rate / 1,000)
        </div>
        <p>
          If your assessed value is $300,000 and you qualify for a $50,000 homestead exemption, your taxes are calculated on $250,000. At a rate of 15 mills, your tax drops from $4,500 to $3,750, saving you $750 annually. Other common exemptions include senior citizen discounts, veteran exemptions, and agricultural land classifications. Some states also offer a cap on property tax valuation increases for primary residences.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Appealing Your Property Tax Assessment</h3>
        <p>
          Local assessors use mass appraisal techniques to estimate property values, which can result in inaccuracies. If you believe your home's assessed value is higher than its actual market value, you have the right to file an appeal. To mount a successful appeal, you should gather evidence, such as recent sales of comparable properties in your neighborhood or a professional appraisal, and submit your petition to the county's board of equalization within the specified filing window.
        </p>
        <p>
          A successful appeal can result in a permanent adjustment to your assessed value, reducing your property tax bill for that year and establishing a lower baseline for future assessments. This makes the appeal process a highly valuable option for homeowners who believe their assessments are overstated.
        </p>
      </div>
    `
  },
  "finance/net-worth-calculator.astro": {
    faqs: [
      { q: "What is net worth?", a: "Net worth is the total value of all your financial assets minus your total liabilities. It is the core metric used to assess overall financial health and progress over time." },
      { q: "How do you calculate net worth?", a: "The formula is: Net Worth = Total Assets - Total Liabilities. Assets include cash, savings, investments, home value, and vehicles. Liabilities include mortgages, auto loans, credit card debt, and student loans." },
      { q: "What is a liquid asset?", a: "A liquid asset is cash or an asset that can be quickly converted into cash with little to no loss in value, such as checking accounts, savings accounts, and brokerage stocks." },
      { q: "Is a primary home counted in net worth?", a: "Yes. The current market value of your home is added under assets, and the outstanding balance of your mortgage is added under liabilities." },
      { q: "What does a negative net worth mean?", a: "A negative net worth means your total debts exceed the value of your assets. This is common for recent graduates with student loans or young homeowners with high mortgages." },
      { q: "How often should I calculate my net worth?", a: "Most financial advisors recommend calculating net worth quarterly or annually. Tracking it too frequently (like daily) can lead to anxiety over normal market fluctuations." },
      { q: "Should I include vehicles in my net worth?", a: "Yes. You can list the vehicle's current resale value under assets and the car loan balance under liabilities. Note that vehicles are depreciating assets." },
      { q: "What is the average net worth in the US?", a: "The median net worth in the United States varies significantly by age. For households aged 35 to 44, the median is around $135,000, while for those aged 65 to 74, it is closer to $410,000." },
      { q: "How does net worth differ from income?", a: "Income is the money you earn over a period (cash inflow). Net worth is a snapshot of what you keep and accumulate over time (assets minus debt)." },
      { q: "Is retirement account value pre-tax or post-tax in net worth?", a: "Standard practice is to list the nominal value of 401(k)s and traditional IRAs under assets, though some advanced planners discount these balances by 15-25% to account for future income tax liabilities." }
    ],
    article: `
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-ink font-sans mb-6">Understanding Net Worth: Tracking Financial Health and Assets</h2>
      <div class="text-body text-sm md:text-base font-sans leading-relaxed space-y-6">
        <p>
          Net worth is the baseline scorecard of personal finance. Unlike income, which measures cash flow over time, net worth measures your total financial accumulation at a specific moment. By tracking your assets against your debts, you gain a clear view of your financial health, helping you make informed decisions about saving, investing, and debt repayment.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">The Net Worth Equation</h3>
        <p>
          The equation to compute net worth is straightforward:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Net Worth = Total Assets - Total Liabilities
        </div>
        <p>
          To complete this calculation, you must divide your holdings into two lists: assets and liabilities. Assets are anything of monetary value that you own, while liabilities are outstanding debts that you owe to other entities. Over time, your goal is to grow your assets while reducing your liabilities, which naturally increases your net worth.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Categorizing Your Assets</h3>
        <p>
          Assets are typically divided by liquidity—how quickly they can be converted to cash without losing value:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-sm text-body font-sans">
          <li><strong>Liquid Assets:</strong> Cash, checking accounts, and high-yield savings accounts. These can be accessed instantly for emergencies.</li>
          <li><strong>Investment Assets:</strong> Brokerage accounts, retirement accounts (401k, IRA, Roth IRA), and mutual funds. These fluctuate with financial markets.</li>
          <li><strong>Real Estate:</strong> The current market value of residential homes, rental property, or raw land. Use conservative market estimates.</li>
          <li><strong>Personal Property:</strong> High-value belongings such as vehicles, jewelry, and collectables. It is best to value these conservatively due to depreciation.</li>
        </ul>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Identifying Your Liabilities</h3>
        <p>
          Liabilities are debts or financial obligations that you owe. Common liabilities include:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-sm text-body font-sans">
          <li><strong>Secured Debt:</strong> Mortgages, home equity lines of credit (HELOC), and auto loans. These are backed by property assets.</li>
          <li><strong>Unsecured Debt:</strong> Credit card balances, personal loans, and student loans.</li>
          <li><strong>Other Liabilities:</strong> Tax debts, outstanding medical bills, or personal loans from family members.</li>
        </ul>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Interpreting Your Net Worth Score</h3>
        <p>
          Your net worth score can fall into three ranges:
        </p>
        <p>
          <strong>Negative Net Worth:</strong> Common for young professionals starting out. High student loans and credit card debts, combined with minimal initial assets, lead to negative totals. The goal here is aggressive debt paydown and initial emergency savings.
        </p>
        <p>
          <strong>Positive Net Worth:</strong> Occurs as assets grow and debt is paid down. A positive net worth is the foundation for retirement security.
        </p>
        <p>
          <strong>High Net Worth (HNW):</strong> Typically defined in wealth management as holding over $1,000,000 in investable liquid assets, excluding primary residences.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Strategies for Increasing Net Worth</h3>
        <p>
          Improving your net worth is achieved by either increasing your assets or decreasing your liabilities. To make steady progress, focus on:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-sm text-body font-sans">
          <li><strong>Debt Paydown:</strong> Focus on high-interest debts like credit cards using the debt avalanche or snowball method.</li>
          <li><strong>Automated Savings:</strong> Direct a portion of each paycheck into retirement or brokerage accounts to buy income-generating assets.</li>
          <li><strong>Avoiding Lifestyle Inflation:</strong> Avoid increasing your spending as your income rises. Instead, allocate raises to savings or debt payment to accelerate net worth growth.</li>
        </ul>
        <p>
          By maintaining a clear focus on these principles and using our local, privacy-first net worth calculator regularly, you can build a stable foundation for your financial future. Tracking your numbers provides the clarity needed to make confident financial adjustments.
        </p>
      </div>
    `
  },
  "finance/inflation-calculator.astro": {
    faqs: [
      { q: "How is inflation calculated?", a: "Inflation is calculated using the Consumer Price Index (CPI). The formula to compare buying power between two years is: Value in Target Year = Value in Base Year * (CPI of Target Year / CPI of Base Year)." },
      { q: "What is the Consumer Price Index (CPI)?", a: "The Consumer Price Index (CPI) is a measure of the average change over time in the prices paid by urban consumers for a market basket of consumer goods and services, compiled by the Bureau of Labor Statistics (BLS)." },
      { q: "What causes inflation?", a: "Inflation is driven by three main factors: demand-pull inflation (demand for goods increases faster than supply), cost-push inflation (production costs increase, raising prices), and built-in inflation (wages rise to match cost of living)." },
      { q: "How does inflation affect my savings?", a: "Inflation decreases the purchasing power of cash. If you keep savings in an account earning 1% interest while inflation is 3%, your savings are effectively losing 2% of their buying power each year." },
      { q: "What is purchasing power?", a: "Purchasing power is the value of a currency expressed in the amount of goods or services that one unit of money can buy. Inflation directly erodes purchasing power over time." },
      { q: "What is hyperinflation?", a: "Hyperinflation is extremely rapid, out-of-control inflation, typically exceeding 50% per month, which quickly devalues the local currency." },
      { q: "What is deflation?", a: "Deflation is a general decrease in the price level of goods and services, occurring when the inflation rate falls below 0%. It can lead to economic stagnation." },
      { q: "How is CPI data updated?", a: "For US calculations, the Bureau of Labor Statistics publishes updated CPI indexes monthly, reflecting consumer retail price shifts across cities." },
      { q: "What is core inflation?", a: "Core inflation is the CPI index excluding food and energy prices, which are highly volatile. It provides a clearer picture of long-term inflation trends." },
      { q: "How can I protect my money from inflation?", a: "To hedge against inflation, investors place capital in assets that tend to grow faster than inflation, such as equities, real estate, commodities, and inflation-indexed bonds like US Treasury I-Bonds." }
    ],
    article: `
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-ink font-sans mb-6">The Economics of Purchasing Power: Understanding CPI Inflation Calculations</h2>
      <div class="text-body text-sm md:text-base font-sans leading-relaxed space-y-6">
        <p>
          Inflation is the rate at which the general level of prices for goods and services rises, subsequently causing purchasing power to fall. Central banks monitor inflation to manage monetary policies, adjust interest rates, and maintain economic stability. For consumers, understanding inflation explains why everyday items grow more expensive and how historical prices compare to today's dollar values.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">The Inflation Calculation Formula</h3>
        <p>
          To adjust currency values for inflation across different years, economists use the Consumer Price Index (CPI). The CPI represents the relative cost of a standard basket of goods in a given year compared to a base period. The formula to calculate purchasing power is:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Adjusted Value = Original Value &times; (CPI of Target Year / CPI of Base Year)
        </div>
        <p>
          For example, to find what $100.00 in 1980 is worth in 2026, you divide the CPI of 2026 by the CPI of 1980, and multiply the result by 100:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Adjusted Value = $100.00 &times; (315.2 / 82.4) = $100.00 &times; 3.825 = $382.50
        </div>
        <p>
          This means you would need $382.50 in 2026 to purchase the same basket of goods that cost $100.00 in 1980.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Understanding the Consumer Price Index (CPI)</h3>
        <p>
          In the United States, the Bureau of Labor Statistics (BLS) compiles the CPI monthly. Assessors survey prices for thousands of items across several categories:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-sm text-body font-sans">
          <li><strong>Food & Beverages:</strong> Groceries, restaurant meals, cereal, and milk.</li>
          <li><strong>Housing:</strong> Rent, primary home values, and household utilities.</li>
          <li><strong>Apparel:</strong> Men's, women's, and children's clothing.</li>
          <li><strong>Transportation:</strong> New and used vehicle costs, gasoline, and airline fares.</li>
          <li><strong>Medical Care:</strong> Prescription drugs, doctor visits, and hospital services.</li>
        </ul>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Deflation vs. Inflation</h3>
        <p>
          While inflation devalues currency, deflation increases its value. Deflation occurs when the inflation rate drops below 0%, indicating a general decline in prices. While falling prices sound beneficial for consumers, persistent deflation can be economically dangerous. It encourages consumers to delay purchases in anticipation of lower prices, which can reduce consumer spending, raise unemployment, and lead to economic recession.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Historical Inflation Trends</h3>
        <p>
          Inflation rates fluctuate based on global economic conditions. In the US, the 1970s and early 1980s were marked by "stagflation"—a combination of stagnant economic growth and high inflation, with rates peaking over 13% in 1980. Conversely, the 2010s saw stable inflation averaging around 1.5% annually. More recently, economic disruptions in the early 2020s pushed inflation to a 40-year high of 9.1% in 2022, prompting the Federal Reserve to raise interest rates to cool the economy.
        </p>
        <p>
          This calculator provides a historical reference using actual CPI data, allowing you to see how the purchasing power of your money has changed over time. By calculating equivalent values, you can plan long-term investments, check retirement targets, and adjust budgets to ensure they match real-world cost increases.
        </p>
      </div>
    `
  },
  "finance/percentage-calculator.astro": {
    faqs: [
      { q: "How do you calculate a basic percentage?", a: "To find a percentage of a number, convert the percentage to a decimal (divide by 100) and multiply: Value = Total * (Percentage / 100)." },
      { q: "How do you calculate percentage change?", a: "To find the percentage increase or decrease between two values: Percentage Change = ((New Value - Old Value) / Old Value) * 100." },
      { q: "What is percentage points vs. percent?", a: "Percent measures the rate of change relative to an original value. Percentage points measure the simple arithmetic difference between two percentages (e.g., an increase from 10% to 15% is a 5 percentage point increase, but a 50% relative increase)." },
      { q: "How do you find the whole if you have the part and percent?", a: "To find the total value from a partial value and its percentage: Total = Part / (Percentage / 100)." },
      { q: "How is percentage increase calculated?", a: "To increase a number by a percentage: New Value = Original * (1 + (Percentage / 100))." },
      { q: "How is percentage decrease calculated?", a: "To decrease a number by a percentage: New Value = Original * (1 - (Percentage / 100))." },
      { q: "What is a percentage multiplier?", a: "A percentage multiplier is the factor used to adjust a value directly. An 8% tax has a multiplier of 1.08, while a 20% discount has a multiplier of 0.80." },
      { q: "How do you calculate fraction to percentage?", a: "Divide the numerator by the denominator, then multiply by 100: Percentage = (Numerator / Denominator) * 100." },
      { q: "Why are percentages important in business?", a: "Percentages are used to compare financial performance across different company sizes, showing profit margins, tax rates, growth rates, and market share." },
      { q: "Does this calculator support decimals?", a: "Yes. You can input fractional percentages and decimal values, and the engine will compute exact figures rounded to standard decimal places." }
    ],
    article: `
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-ink font-sans mb-6">Mastering Percentage Calculations: Formulas, Increases, and Changes</h2>
      <div class="text-body text-sm md:text-base font-sans leading-relaxed space-y-6">
        <p>
          Percentages are the standard language for comparing proportions, tracking interest rates, applying retail discounts, and measuring financial growth. The term "percent" comes from the Latin "per centum," meaning "by the hundred." Whether you are calculating tips, determining investment returns, or calculating sales tax, mastering percentage math is a core personal finance skill.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Formula 1: Finding a Percentage of a Number</h3>
        <p>
          To find a specific percentage of a total amount, convert the percentage to a decimal fraction and multiply:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Amount = Total &times; (Percentage / 100)
        </div>
        <p>
          For example, to calculate 15% of a $70.00 restaurant bill:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Amount = $70.00 &times; (15 / 100) = $70.00 &times; 0.15 = $10.50
        </div>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Formula 2: Calculating Percentage Change</h3>
        <p>
          To find the percentage increase or decrease between an old value and a new value:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Percentage Change = ((New Value - Old Value) / Old Value) &times; 100
        </div>
        <p>
          If the result is positive, it represents an increase. If it is negative, it represents a decrease. For example, if a stock price grows from $50.00 to $65.00:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Percentage Change = (($65.00 - $50.00) / $50.00) &times; 100 = ($15.00 / $50.00) &times; 100 = 0.30 &times; 100 = 30%
        </div>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Formula 3: Finding the Whole from a Percentage</h3>
        <p>
          If you know a partial value and its percentage of the total, you can calculate the total amount using division:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Total = Part / (Percentage / 100)
        </div>
        <p>
          For example, if a business spent $3,000.00 on advertising, representing 6% of its total budget:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Total Budget = $3,000.00 / (6 / 100) = $3,000.00 / 0.06 = $50,000.00
        </div>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Percent vs. Percentage Points</h3>
        <p>
          It is common to confuse percentage changes with changes in percentage points. A percentage point is the simple arithmetic difference between two percentage values. For instance, if a bank increases its mortgage rate from 4.0% to 5.0%, the rate has increased by 1.0 percentage point. However, the relative increase in the interest rate itself is calculated as:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Relative Increase = ((5.0 - 4.0) / 4.0) &times; 100 = (1.0 / 4.0) &times; 100 = 25%
        </div>
        <p>
          Thus, the rate rose by 1 percentage point, which represents a 25% relative increase.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Visualizing Fractions and Proportions</h3>
        <p>
          Converting fractions to percentages helps visualize relative values. The mathematical conversion is:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Percentage = (Numerator / Denominator) &times; 100
        </div>
        <p>
          If a team wins 12 out of 16 games, their winning percentage is (12 / 16) &times; 100 = 0.75 &times; 100 = 75%. This normalization allows for quick comparison between teams with different game schedules. Understanding these conversions is useful when parsing raw database listings, calculating marks, or checking relative metrics.
        </p>
      </div>
    `
  }
};
