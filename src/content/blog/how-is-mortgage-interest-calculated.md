---
title: "How is Mortgage Interest Calculated? (2026 Formula + Examples)"
description: "Learn how lenders calculate mortgage interest, why the payment split changes over time, and how to estimate your real costs."
pubDate: 2026-07-08
author: sarah-chen
category: finance
relatedTools: ['mortgage-calculator', 'amortization-calculator', 'mortgage-refinance-calculator']
faq:
  - question: "Why does the interest portion of my mortgage payment decrease over time?"
    answer: "Mortgage interest is calculated based on the outstanding principal balance at the beginning of each monthly cycle. Because your monthly payments slowly reduce the principal balance, the interest charge for the subsequent month is calculated on a smaller number, leaving more of your fixed payment to pay down the remaining principal."
  - question: "Is a fixed-rate mortgage better than an adjustable-rate mortgage (ARM)?"
    answer: "A fixed-rate mortgage offers stability because the rate and total monthly payment never change. An ARM usually starts with a lower promotional rate but can adjust upward later based on index rates, presenting higher risk if market rates rise."
  - question: "How much total interest will I pay on a 30-year mortgage?"
    answer: "At a 6.8% rate on a $400,000 mortgage, the total interest paid over 30 years is $523,948—which actually exceeds the original purchase amount of the loan itself. This shows why amortization strategies are critical."
  - question: "Does making extra payments directly reduce my interest cost?"
    answer: "Yes. Extra payments applied directly to the principal balance reduce the baseline amount used for monthly interest calculations. This shortens the mortgage term and can save you tens of thousands of dollars in interest over the loan life."
  - question: "Should I choose a 15-year or a 30-year mortgage?"
    answer: "A 15-year mortgage has higher monthly payments but lower interest rates and amortizes twice as fast, saving significant interest. A 30-year mortgage has lower, more flexible monthly payments but accumulates far more interest over time."
---

When you receive a monthly mortgage statement, the largest number on the breakdown is almost always the interest payment. For the first decade of a thirty-year loan, only a small fraction of your hard-earned payment goes toward building home equity, while the rest goes directly to the lender as interest.

To gain control of your home finances, it is critical to understand the math behind how mortgage interest is calculated. In this guide, we will break down the exact mathematical formulas lenders use, walk through a step-by-step example using a $400,000 loan balance at a 6.8% interest rate, and look at how amortization splits your payments.

---

## The Basic Monthly Interest Formula

Unlike some consumer loans that calculate interest annually, mortgages use **simple interest calculated monthly on the outstanding balance**. 

The calculation uses three variables:
1. **Outstanding Principal ($P$):** The total amount of loan balance remaining at the start of the monthly cycle.
2. **Annual Interest Rate ($r$):** The annual rate quoted by the lender, expressed as a decimal (e.g., 6.8% becomes $0.068$).
3. **Monthly Rate:** The annual interest rate divided by the 12 months in a year ($r / 12$).

Each month, the interest charge ($I_m$) is calculated using the following formula:

$$I_m = P \times \left(\frac{r}{12}\right)$$

### Step-by-Step Monthly Calculation Example
Let's calculate the interest charge for the very first month of a **$400,000 mortgage** at an annual interest rate of **6.8%**.

1. **Convert the annual rate to a decimal:**
   $$r = 6.8\% = 0.068$$
2. **Calculate the monthly interest factor:**
   $$\text{Monthly Rate} = \frac{0.068}{12} = 0.0056667 \text{ (or } 0.5667\% \text{)}$$
3. **Multiply by the outstanding principal:**
   $$I_m = \$400,000 \times 0.0056667 = \$2,266.68$$

Lenders charge **$2,266.68 in interest** for the first month alone. Every penny of your first monthly payment above this interest amount goes to paying down your principal.

---

## How Monthly Payments are Split: The Amortization Process

Most home loans are **fully amortizing fixed-rate mortgages**. This means you pay a fixed amount every month, but the internal split between principal and interest changes dynamically.

Lenders calculate your fixed monthly payment ($M$) using the standard amortization formula:

$$M = P \times \frac{i(1+i)^n}{(1+i)^n - 1}$$

Where:
* $P$ = principal loan amount (\$400,000)
* $i$ = monthly interest rate ($0.068 / 12 = 0.0056667$)
* $n$ = total number of monthly payments (30 years $\times$ 12 months = 360 payments)

Plugging in our numbers:

$$M = \$400,000 \times \frac{0.0056667(1.0056667)^{360}}{(1.0056667)^{360} - 1} \approx \$2,607.72$$

So, your total fixed monthly payment is **$2,607.72**.

### Month 1: Principal vs. Interest Split
Now that we have both the total payment and the interest portion, we can find out how much principal is paid in Month 1:

* **Total Payment:** \$2,607.72
* **Interest Charged (Month 1):** \$2,266.68
* **Principal Reduction:**
  $$\text{Principal} = \text{Total Payment} - \text{Interest}$$
  $$\text{Principal} = \$2,607.72 - \$2,266.68 = \$341.04$$

In Month 1, only **$341.04** goes to equity, while **$2,266.68** goes to interest.

### Month 2: The Compound Effect of Principal Reduction
At the beginning of Month 2, the outstanding principal balance is no longer \$400,000. It has been reduced:

$$\text{New Principal} = \$400,000 - \$341.04 = \$399,658.96$$

Now, let's recalculate the interest charge for Month 2 using the new principal:

$$I_2 = \$399,658.96 \times \left(\frac{0.068}{12}\right) = \$2,264.75$$

* **Month 2 Interest:** \$2,264.75 (down \$1.93 from Month 1)
* **Month 2 Principal:**
  $$\text{Principal} = \$2,607.72 - \$2,264.75 = \$342.97$$

Because the interest charge dropped, your principal reduction increased from \$341.04 to \$342.97. This compounding process repeats over 360 months until the loan balance is zero.

---

## Fixed-Rate vs. Adjustable-Rate Mortgages (ARMs)

The math above applies directly to fixed-rate loans, where the interest rate ($r$) remains constant. Adjustable-rate mortgages (ARMs) use the exact same monthly formula, but the rate adjusts periodically.

* **Hybrid ARMs (e.g., 5/1 ARM):** The rate is locked for the first 5 years (60 months) and adjusts annually after that.
* **How ARMs adjust:** Lenders add a standard variable index rate (like SOFR) to a set margin (like 2.5%). If index rates rise, your monthly interest rate increases, which adjusts your total payment upwards.

---

## Real 30-Year Amortization Schedule Breakdown

To see how the numbers play out over the life of a $400,000 loan at 6.8% interest, look at the transition points below:

| Year | Annual Payments | Interest Paid | Principal Paid | Remaining Balance |
|---|---|---|---|---|
| **Year 1** | \$31,293 | \$27,049 | \$4,244 | \$395,756 |
| **Year 5** | \$31,293 | \$25,364 | \$5,929 | \$373,755 |
| **Year 10** | \$31,293 | \$22,763 | \$8,530 | \$334,602 |
| **Year 15** | \$31,293 | \$19,111 | \$12,182 | \$279,625 |
| **Year 20** | \$31,293 | \$13,982 | \$17,311 | \$202,423 |
| **Year 25** | \$31,293 | \$6,782 | \$24,511 | \$92,971 |
| **Year 30** | \$31,293 | \$1,529 | \$29,764 | \$0 |

### Key Milestones:
* **The Tipping Point:** It takes until **Year 19** before the amount of principal you pay in a year exceeds the interest paid.
* **Total Cost:** Over 30 years, you will pay **$523,948 in interest** on a \$400,000 loan, for a total payout of **$923,948**.

---

## How Extra Payments Directly Save Interest

Because interest is calculated on the outstanding balance, any extra payment applied directly to your principal immediately reduces future interest charges.

For example, if you pay an extra **$200 per month** starting in Month 1:
1. The principal drops faster.
2. The interest charge drops faster on subsequent months.
3. You pay off the loan **5 years and 8 months early**.
4. You save **$124,561 in total interest**.

Lenders calculate mortgage interest based on your remaining balance. Understanding this math helps you make informed decisions about refinancing, extra payments, and loan terms. Use our calculators to run these scenarios yourself.
