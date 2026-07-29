export interface TrustSource {
  label: string;
  url: string;
}

export interface RegulatedToolMetadata {
  toolSlug: string;
  asOfLabel: string;
  effectiveDate: string; // ISO format: YYYY-MM-DD
  lastUpdated: string; // ISO format: YYYY-MM-DD
  expiryDate?: string; // ISO format: YYYY-MM-DD
  sources: TrustSource[];
  outdatedWarningMessage?: string;
  statusOverride?: 'current' | 'review-recommended' | 'outdated';
}

export interface FreshnessStatus {
  status: 'current' | 'review-recommended' | 'outdated';
  label: 'Current' | 'Review Recommended' | 'Outdated';
  badgeClass: string;
  dotClass: string;
  warningMessage: string | null;
}

export function getFreshnessStatus(
  meta: RegulatedToolMetadata,
  referenceDate: Date = new Date()
): FreshnessStatus {
  if (meta.statusOverride) {
    return createStatusResponse(meta.statusOverride, meta);
  }

  const refTime = referenceDate.getTime();

  // Expiry check
  if (meta.expiryDate) {
    const expTime = new Date(meta.expiryDate).getTime();
    if (refTime > expTime) {
      return createStatusResponse('outdated', meta);
    }
  }

  // Age calculation based on lastUpdated or effectiveDate
  const updateTime = new Date(meta.lastUpdated || meta.effectiveDate).getTime();
  const daysDiff = (refTime - updateTime) / (1000 * 60 * 60 * 24);

  if (daysDiff > 547) { // > 18 months
    return createStatusResponse('outdated', meta);
  } else if (daysDiff > 365) { // > 1 year
    return createStatusResponse('review-recommended', meta);
  }

  return createStatusResponse('current', meta);
}

function createStatusResponse(
  status: 'current' | 'review-recommended' | 'outdated',
  meta: RegulatedToolMetadata
): FreshnessStatus {
  if (status === 'outdated') {
    return {
      status: 'outdated',
      label: 'Outdated',
      badgeClass: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30',
      dotClass: 'bg-rose-500',
      warningMessage:
        meta.outdatedWarningMessage ||
        `⚠ This calculator uses older data (${meta.asOfLabel}). New rates or statutory adjustments may have been announced. Please verify with official sources.`
    };
  }
  if (status === 'review-recommended') {
    return {
      status: 'review-recommended',
      label: 'Review Recommended',
      badgeClass: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
      dotClass: 'bg-amber-500',
      warningMessage:
        meta.outdatedWarningMessage ||
        `⚠ This calculator uses ${meta.asOfLabel} figures. Annual updates or legislative revisions may be pending.`
    };
  }
  return {
    status: 'current',
    label: 'Current',
    badgeClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    dotClass: 'bg-emerald-500',
    warningMessage: null
  };
}

export const regulatedMetadataCatalog: Record<string, RegulatedToolMetadata> = {
  // --- FINANCE & TAX CALCULATORS ---
  'self-employment-tax-calculator': {
    toolSlug: 'self-employment-tax-calculator',
    asOfLabel: 'Tax Year 2026',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-01-15',
    expiryDate: '2026-12-31',
    sources: [
      { label: 'IRS Schedule SE (Form 1040)', url: 'https://www.irs.gov/forms-pubs/about-schedule-se-form-1040' },
      { label: 'Social Security Administration (SSA) Wage Base', url: 'https://www.ssa.gov/oact/cola/cbb.html' }
    ]
  },
  'mortgage-calculator': {
    toolSlug: 'mortgage-calculator',
    asOfLabel: 'Rates as of 2026',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-06-01',
    sources: [
      { label: 'Consumer Financial Protection Bureau (CFPB)', url: 'https://www.consumerfinance.gov/owning-a-home/' },
      { label: 'Federal Reserve Bank Interest Rates', url: 'https://www.federalreserve.gov/releases/h15/' }
    ]
  },
  'payroll-tax-calculator': {
    toolSlug: 'payroll-tax-calculator',
    asOfLabel: 'Tax Year 2026',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-01-15',
    expiryDate: '2026-12-31',
    sources: [
      { label: "IRS Pub 15 (Circular E) Employer's Tax Guide", url: 'https://www.irs.gov/publications/p15' }
    ]
  },
  'salary-calculator': {
    toolSlug: 'salary-calculator',
    asOfLabel: 'Tax Year 2026',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-01-15',
    expiryDate: '2026-12-31',
    sources: [
      { label: 'IRS Income Tax Withholding Assistant', url: 'https://www.irs.gov/individuals/tax-withholding-estimator' },
      { label: 'U.S. Bureau of Labor Statistics (BLS)', url: 'https://www.bls.gov/oes/' }
    ]
  },
  'paycheck-calculator': {
    toolSlug: 'paycheck-calculator',
    asOfLabel: 'Tax Year 2026',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-01-15',
    expiryDate: '2026-12-31',
    sources: [
      { label: "IRS Form W-4 Employee's Withholding Certificate", url: 'https://www.irs.gov/forms-pubs/about-form-w-4' }
    ]
  },
  'property-tax-calculator': {
    toolSlug: 'property-tax-calculator',
    asOfLabel: '2026 State Benchmark',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-03-01',
    sources: [
      { label: 'U.S. Census Bureau State & Local Government Finances', url: 'https://www.census.gov/programs-surveys/gov-finances.html' }
    ]
  },
  'sales-tax-calculator': {
    toolSlug: 'sales-tax-calculator',
    asOfLabel: 'Rates as of Q2 2026',
    effectiveDate: '2026-04-01',
    lastUpdated: '2026-04-15',
    sources: [
      { label: 'Federation of Tax Administrators (FTA)', url: 'https://www.taxadmin.org/state-tax-agencies' }
    ]
  },
  'loan-calculator': {
    toolSlug: 'loan-calculator',
    asOfLabel: '2026 TILA Basis',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-05-10',
    sources: [
      { label: 'Federal Reserve Regulation Z (Truth in Lending)', url: 'https://www.consumerfinance.gov/rules-policy/regulations/1026/' }
    ]
  },
  'auto-loan-calculator': {
    toolSlug: 'auto-loan-calculator',
    asOfLabel: 'Rates as of 2026',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-05-10',
    sources: [
      { label: 'CFPB Auto Financing Guide', url: 'https://www.consumerfinance.gov/consumer-tools/auto-loans/' }
    ]
  },
  'student-loan-repayment-calculator': {
    toolSlug: 'student-loan-repayment-calculator',
    asOfLabel: 'Effective: July 2026',
    effectiveDate: '2026-07-01',
    lastUpdated: '2026-07-01',
    expiryDate: '2027-06-30',
    sources: [
      { label: 'Federal Student Aid (U.S. Dept of Education)', url: 'https://studentaid.gov/manage-loans/repayment/plans' }
    ]
  },
  'compound-interest-calculator': {
    toolSlug: 'compound-interest-calculator',
    asOfLabel: '2026 SEC Formula',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-01-10',
    sources: [
      { label: 'U.S. Securities & Exchange Commission (Investor.gov)', url: 'https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator' }
    ]
  },
  'amortization-calculator': {
    toolSlug: 'amortization-calculator',
    asOfLabel: '2026 Amortization Basis',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-02-01',
    sources: [
      { label: 'Federal Reserve Banking Guidance', url: 'https://www.federalreserve.gov/consumerspec.htm' }
    ]
  },
  'break-even-calculator': {
    toolSlug: 'break-even-calculator',
    asOfLabel: '2026 SBA Guidance',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-01-10',
    sources: [
      { label: 'U.S. Small Business Administration (SBA)', url: 'https://www.sba.gov/business-guide/manage-your-business/manage-your-finances' }
    ]
  },
  'roi-calculator': {
    toolSlug: 'roi-calculator',
    asOfLabel: '2026 Financial Standard',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-01-10',
    sources: [
      { label: 'Financial Accounting Standards Board (FASB)', url: 'https://www.fasb.org/' }
    ]
  },
  'inflation-calculator': {
    toolSlug: 'inflation-calculator',
    asOfLabel: 'CPI Data as of June 2026',
    effectiveDate: '2026-06-01',
    lastUpdated: '2026-07-15',
    sources: [
      { label: 'U.S. Bureau of Labor Statistics CPI', url: 'https://www.bls.gov/cpi/' }
    ]
  },
  'dti-calculator': {
    toolSlug: 'dti-calculator',
    asOfLabel: 'Fannie Mae 2026 Rules',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-03-15',
    sources: [
      { label: 'Fannie Mae Single Family Selling Guide', url: 'https://singlefamily.fanniemae.com/originating-underwriting/selling-guide' },
      { label: 'CFPB Ability-to-Repay / Qualified Mortgage Rule', url: 'https://www.consumerfinance.gov/rules-policy/regulations/1026/43/' }
    ]
  },
  'heloc-calculator': {
    toolSlug: 'heloc-calculator',
    asOfLabel: '2026 Prime Basis',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-05-15',
    sources: [
      { label: 'Federal Reserve H.15 Selected Interest Rates', url: 'https://www.federalreserve.gov/releases/h15/' }
    ]
  },
  'credit-card-payoff-calculator': {
    toolSlug: 'credit-card-payoff-calculator',
    asOfLabel: 'CARD Act 2026 Rules',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-02-15',
    sources: [
      { label: 'CFPB CARD Act Regulation Z Disclosures', url: 'https://www.consumerfinance.gov/rules-policy/credit-card-rules/' }
    ]
  },
  'net-worth-calculator': {
    toolSlug: 'net-worth-calculator',
    asOfLabel: '2026 Personal Finance Standards',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-01-10',
    sources: [
      { label: 'Federal Reserve Survey of Consumer Finances', url: 'https://www.federalreserve.gov/econres/scfindex.htm' }
    ]
  },
  'percentage-calculator': {
    toolSlug: 'percentage-calculator',
    asOfLabel: 'Mathematical Standard',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-01-01',
    sources: [
      { label: 'National Institute of Standards & Technology (NIST)', url: 'https://www.nist.gov/' }
    ]
  },
  'cac-ltv-calculator': {
    toolSlug: 'cac-ltv-calculator',
    asOfLabel: '2026 SaaS Metrics Standard',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-01-10',
    sources: [
      { label: 'Corporate Finance Institute (CFI)', url: 'https://corporatefinanceinstitute.com/' }
    ]
  },

  // --- REAL ESTATE CALCULATORS ---
  'mortgage-affordability-calculator': {
    toolSlug: 'mortgage-affordability-calculator',
    asOfLabel: '2026 Underwriting Rules',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-03-20',
    sources: [
      { label: 'CFPB Home Equity & Mortgage Affordability Standards', url: 'https://www.consumerfinance.gov/owning-a-home/' }
    ]
  },
  'mortgage-refinance-calculator': {
    toolSlug: 'mortgage-refinance-calculator',
    asOfLabel: '2026 Refinance Benchmarks',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-05-01',
    sources: [
      { label: 'Freddie Mac Primary Mortgage Market Survey', url: 'https://www.freddiemac.com/pmms' }
    ]
  },
  'rent-vs-buy-calculator': {
    toolSlug: 'rent-vs-buy-calculator',
    asOfLabel: '2026 Real Estate Benchmarks',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-04-10',
    sources: [
      { label: 'U.S. Dept of Housing & Urban Development (HUD)', url: 'https://www.hud.gov/' },
      { label: 'National Association of Realtors (NAR)', url: 'https://www.nar.realtor/' }
    ]
  },
  'rental-property-calculator': {
    toolSlug: 'rental-property-calculator',
    asOfLabel: '2026 Tax & Yield Rules',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-03-01',
    sources: [
      { label: 'IRS Publication 527 (Residential Rental Property)', url: 'https://www.irs.gov/publications/p527' }
    ]
  },

  // --- LEGAL & EMPLOYMENT CALCULATORS ---
  'severance-calculator': {
    toolSlug: 'severance-calculator',
    asOfLabel: '2026 WARN & FLSA Rules',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-02-01',
    sources: [
      { label: 'U.S. Dept of Labor Worker Adjustment & Retraining Notification (WARN)', url: 'https://www.dol.gov/agencies/eta/layoffs/warn' }
    ]
  },
  'overtime-calculator': {
    toolSlug: 'overtime-calculator',
    asOfLabel: '2026 FLSA Overtime Rules',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-01-15',
    sources: [
      { label: 'U.S. Dept of Labor Wage & Hour Division (FLSA Overtime)', url: 'https://www.dol.gov/agencies/whd/overtime' }
    ]
  },
  'hours-calculator': {
    toolSlug: 'hours-calculator',
    asOfLabel: '2026 DOL Timekeeping Rules',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-01-15',
    sources: [
      { label: 'U.S. Department of Labor Fact Sheet #21', url: 'https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping' }
    ]
  },
  'retirement-calculator': {
    toolSlug: 'retirement-calculator',
    asOfLabel: '2026 IRA/401(k) Limits',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-01-15',
    expiryDate: '2026-12-31',
    sources: [
      { label: 'IRS Retirement Topics - Contribution Limits', url: 'https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-contribution-limits' }
    ]
  },

  // --- HEALTH & FITNESS CALCULATORS ---
  'bmi-calculator': {
    toolSlug: 'bmi-calculator',
    asOfLabel: 'CDC & WHO Standards 2026',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-01-10',
    sources: [
      { label: 'Centers for Disease Control and Prevention (CDC) BMI Guide', url: 'https://www.cdc.gov/bmi/index.html' },
      { label: 'World Health Organization (WHO) BMI Classification', url: 'https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight' }
    ]
  },
  'body-fat-calculator': {
    toolSlug: 'body-fat-calculator',
    asOfLabel: 'US Navy Fitness Standard',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-01-10',
    sources: [
      { label: 'U.S. Navy Physical Readiness Program Instruction', url: 'https://www.navy-fitness.com/' },
      { label: 'National Institutes of Health (NIH)', url: 'https://www.nih.gov/' }
    ]
  },
  'calorie-calculator': {
    toolSlug: 'calorie-calculator',
    asOfLabel: 'Mifflin-St Jeor Standard',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-01-10',
    sources: [
      { label: 'National Institutes of Health (NIH) Daily Energy Needs', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5026338/' }
    ]
  },
  'ideal-weight-calculator': {
    toolSlug: 'ideal-weight-calculator',
    asOfLabel: 'Clinical Standard Formulas',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-01-10',
    sources: [
      { label: 'NIH / Clinical Nutrition Guidelines (Devine & Robinson)', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3183530/' }
    ]
  },
  'macro-calculator': {
    toolSlug: 'macro-calculator',
    asOfLabel: '2026 USDA Guidelines',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-01-10',
    sources: [
      { label: 'Dietary Guidelines for Americans (USDA & HHS)', url: 'https://www.dietaryguidelines.gov/' }
    ]
  },
  'pregnancy-calculator': {
    toolSlug: 'pregnancy-calculator',
    asOfLabel: 'ACOG Clinical Standard',
    effectiveDate: '2026-01-01',
    lastUpdated: '2026-01-10',
    sources: [
      { label: 'American College of Obstetricians and Gynecologists (ACOG)', url: 'https://www.acog.org/' }
    ]
  }
};

export function getRegulatedMetadata(slug: string): RegulatedToolMetadata | null {
  return regulatedMetadataCatalog[slug] || null;
}
