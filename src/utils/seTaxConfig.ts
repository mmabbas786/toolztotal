/**
 * Self-Employment Tax Configuration
 * ============================================================
 * All annual figures are isolated here so they can be updated
 * each tax year without touching the calculator UI code.
 *
 * Last reviewed: 2024 tax year
 * ============================================================
 */

export const SE_TAX_CONFIG = {
  /**
   * Net Earnings Multiplier — STABLE (not annually updated)
   * Per IRS Schedule SE: multiply net SE income by 92.35% before
   * computing SE tax. This accounts for the employer-equivalent
   * deduction (you can deduct half of SE tax from net earnings).
   */
  NET_EARNINGS_MULTIPLIER: 0.9235,

  /**
   * Social Security Tax Rate (12.4%)
   * Applies only up to the annual Social Security wage base limit below.
   */
  SS_RATE: 0.124,

  /**
   * UPDATE ANNUALLY — Social Security Wage Base Limit
   * See: https://www.ssa.gov/oact/cola/cbb.html
   * 2024 limit: $168,600
   */
  SS_WAGE_BASE: 168_600,

  /**
   * Medicare Tax Rate (2.9%)
   * Applies to ALL net SE earnings — no wage cap.
   */
  MEDICARE_RATE: 0.029,

  /**
   * Additional Medicare Tax Rate (0.9%)
   * Applies to net SE earnings ABOVE the thresholds below.
   * VERIFY ANNUALLY — see https://www.irs.gov/taxtopics/tc560
   */
  ADDITIONAL_MEDICARE_RATE: 0.009,

  /**
   * VERIFY ANNUALLY — Additional Medicare Tax Thresholds
   * These are the combined income thresholds above which the
   * extra 0.9% Medicare tax kicks in.
   * 2024 thresholds (these have been stable for several years):
   */
  ADDITIONAL_MEDICARE_THRESHOLD_SINGLE: 200_000,
  ADDITIONAL_MEDICARE_THRESHOLD_MFJ: 250_000,

  /**
   * Standard federal income tax brackets for rough estimation only.
   * VERIFY ANNUALLY — see https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments
   * These are the 2024 single-filer marginal rates.
   * NOTE: Used only for rough "estimated income tax" feature —
   * clearly labeled as estimates in the UI.
   */
  INCOME_TAX_BRACKETS_SINGLE: [
    { rate: 0.10,  upTo: 11_600 },
    { rate: 0.12,  upTo: 47_150 },
    { rate: 0.22,  upTo: 100_525 },
    { rate: 0.24,  upTo: 191_950 },
    { rate: 0.32,  upTo: 243_725 },
    { rate: 0.35,  upTo: 609_350 },
    { rate: 0.37,  upTo: Infinity },
  ],

  INCOME_TAX_BRACKETS_MFJ: [
    { rate: 0.10,  upTo: 23_200 },
    { rate: 0.12,  upTo: 94_300 },
    { rate: 0.22,  upTo: 201_050 },
    { rate: 0.24,  upTo: 383_900 },
    { rate: 0.32,  upTo: 487_450 },
    { rate: 0.35,  upTo: 731_200 },
    { rate: 0.37,  upTo: Infinity },
  ],

  /**
   * Standard deduction amounts for rough income tax estimation.
   * UPDATE ANNUALLY
   */
  STANDARD_DEDUCTION_SINGLE: 14_600,
  STANDARD_DEDUCTION_MFJ: 29_200,

  /**
   * SE net income floor below which SE tax is not owed.
   * Per IRS: you must file Schedule SE if net earnings ≥ $400.
   * VERIFY ANNUALLY — see irs.gov
   */
  SE_FILING_THRESHOLD: 400,
};
