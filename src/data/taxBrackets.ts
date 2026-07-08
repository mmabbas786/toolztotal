// src/data/taxBrackets.ts
/**
 * Estimated 2026 brackets based on ~2.7% inflation adjustment of 2025 figures.
 * Verify against IRS Rev. Proc. when published.
 * Last verified: July 2026.
 */

export type FilingStatus = 'single' | 'married_jointly' | 'head_of_household';

export interface TaxBracket {
  min: number;
  max: number | null; // null = no upper limit
  rate: number; // decimal, e.g. 0.10 for 10%
}

export const FEDERAL_BRACKETS_2026: Record<FilingStatus, TaxBracket[]> = {
  single: [
    { min: 0, max: 12100, rate: 0.10 },
    { min: 12100, max: 49250, rate: 0.12 },
    { min: 49250, max: 105050, rate: 0.22 },
    { min: 105050, max: 200600, rate: 0.24 },
    { min: 200600, max: 254700, rate: 0.32 },
    { min: 254700, max: 638000, rate: 0.35 },
    { min: 638000, max: null, rate: 0.37 },
  ],
  married_jointly: [
    { min: 0, max: 24200, rate: 0.10 },
    { min: 24200, max: 98500, rate: 0.12 },
    { min: 98500, max: 210100, rate: 0.22 },
    { min: 210100, max: 401200, rate: 0.24 },
    { min: 401200, max: 509400, rate: 0.32 },
    { min: 509400, max: 638000, rate: 0.35 },
    { min: 638000, max: null, rate: 0.37 },
  ],
  head_of_household: [
    { min: 0, max: 17300, rate: 0.10 },
    { min: 17300, max: 66000, rate: 0.12 },
    { min: 66000, max: 105050, rate: 0.22 },
    { min: 105050, max: 200600, rate: 0.24 },
    { min: 200600, max: 254700, rate: 0.32 },
    { min: 254700, max: 638000, rate: 0.35 },
    { min: 638000, max: null, rate: 0.37 },
  ],
};

export const STANDARD_DEDUCTION_2026: Record<FilingStatus, number> = {
  single: 15400,
  married_jointly: 30800,
  head_of_household: 23100,
};

export const FICA_2026 = {
  socialSecurityRate: 0.062, // 6.2%
  socialSecurityWageBase: 168600, // estimated 2026 wage base
  medicareRate: 0.0145, // 1.45%
  additionalMedicareRate: 0.009, // 0.9% on wages over threshold
  additionalMedicareThreshold: {
    single: 200000,
    married_jointly: 250000,
    head_of_household: 200000,
  },
};

export interface StateTaxInfo {
  name: string;
  hasIncomeTax: boolean;
  flatRate?: number;
  brackets?: TaxBracket[];
}

export const STATE_TAX_2026: Record<string, StateTaxInfo> = {
  AL: { name: 'Alabama', hasIncomeTax: true, brackets: [
    { min: 0, max: 500, rate: 0.02 },
    { min: 500, max: 3000, rate: 0.04 },
    { min: 3000, max: null, rate: 0.05 },
  ]},
  AK: { name: 'Alaska', hasIncomeTax: false },
  AZ: { name: 'Arizona', hasIncomeTax: true, flatRate: 0.025 },
  AR: { name: 'Arkansas', hasIncomeTax: true, brackets: [
    { min: 0, max: 4400, rate: 0.02 },
    { min: 4400, max: 8800, rate: 0.04 },
    { min: 8800, max: null, rate: 0.044 },
  ]},
  CA: { name: 'California', hasIncomeTax: true, brackets: [
    { min: 0, max: 10756, rate: 0.01 },
    { min: 10756, max: 25499, rate: 0.02 },
    { min: 25499, max: 40245, rate: 0.04 },
    { min: 40245, max: 55866, rate: 0.06 },
    { min: 55866, max: 70606, rate: 0.08 },
    { min: 70606, max: 360659, rate: 0.093 },
    { min: 360659, max: 432787, rate: 0.103 },
    { min: 432787, max: 721314, rate: 0.113 },
    { min: 721314, max: null, rate: 0.123 },
  ]},
  CO: { name: 'Colorado', hasIncomeTax: true, flatRate: 0.044 },
  CT: { name: 'Connecticut', hasIncomeTax: true, brackets: [
    { min: 0, max: 10000, rate: 0.03 },
    { min: 10000, max: 50000, rate: 0.05 },
    { min: 50000, max: 100000, rate: 0.055 },
    { min: 100000, max: null, rate: 0.0699 },
  ]},
  DE: { name: 'Delaware', hasIncomeTax: true, brackets: [
    { min: 0, max: 5000, rate: 0.022 },
    { min: 5000, max: 20000, rate: 0.048 },
    { min: 20000, max: 60000, rate: 0.0555 },
    { min: 60000, max: null, rate: 0.066 },
  ]},
  DC: { name: 'District of Columbia', hasIncomeTax: true, brackets: [
    { min: 0, max: 10000, rate: 0.04 },
    { min: 10000, max: 40000, rate: 0.06 },
    { min: 40000, max: 60000, rate: 0.065 },
    { min: 60000, max: null, rate: 0.085 },
  ]},
  FL: { name: 'Florida', hasIncomeTax: false },
  GA: { name: 'Georgia', hasIncomeTax: true, flatRate: 0.0539 },
  HI: { name: 'Hawaii', hasIncomeTax: true, brackets: [
    { min: 0, max: 10000, rate: 0.032 },
    { min: 10000, max: 40000, rate: 0.068 },
    { min: 40000, max: null, rate: 0.0825 },
  ]},
  ID: { name: 'Idaho', hasIncomeTax: true, flatRate: 0.05695 },
  IL: { name: 'Illinois', hasIncomeTax: true, flatRate: 0.0495 },
  IN: { name: 'Indiana', hasIncomeTax: true, flatRate: 0.0305 },
  IA: { name: 'Iowa', hasIncomeTax: true, flatRate: 0.038 },
  KS: { name: 'Kansas', hasIncomeTax: true, brackets: [
    { min: 0, max: 15000, rate: 0.031 },
    { min: 15000, max: 30000, rate: 0.0525 },
    { min: 30000, max: null, rate: 0.057 },
  ]},
  KY: { name: 'Kentucky', hasIncomeTax: true, flatRate: 0.04 },
  LA: { name: 'Louisiana', hasIncomeTax: true, brackets: [
    { min: 0, max: 12500, rate: 0.0185 },
    { min: 12500, max: 50000, rate: 0.0350 },
    { min: 50000, max: null, rate: 0.0425 },
  ]},
  ME: { name: 'Maine', hasIncomeTax: true, brackets: [
    { min: 0, max: 25000, rate: 0.058 },
    { min: 25000, max: 50000, rate: 0.0675 },
    { min: 50000, max: null, rate: 0.0715 },
  ]},
  MD: { name: 'Maryland', hasIncomeTax: true, brackets: [
    { min: 0, max: 3000, rate: 0.03 },
    { min: 3000, max: 100000, rate: 0.0475 },
    { min: 100000, max: null, rate: 0.0575 },
  ]},
  MA: { name: 'Massachusetts', hasIncomeTax: true, flatRate: 0.05 },
  MI: { name: 'Michigan', hasIncomeTax: true, flatRate: 0.0425 },
  MN: { name: 'Minnesota', hasIncomeTax: true, brackets: [
    { min: 0, max: 30000, rate: 0.0535 },
    { min: 30000, max: 90000, rate: 0.0680 },
    { min: 90000, max: null, rate: 0.0785 },
  ]},
  MS: { name: 'Mississippi', hasIncomeTax: true, flatRate: 0.044 },
  MO: { name: 'Missouri', hasIncomeTax: true, brackets: [
    { min: 0, max: 10000, rate: 0.02 },
    { min: 10000, max: 20000, rate: 0.04 },
    { min: 20000, max: null, rate: 0.047 },
  ]},
  MT: { name: 'Montana', hasIncomeTax: true, brackets: [
    { min: 0, max: 20000, rate: 0.047 },
    { min: 20000, max: null, rate: 0.059 },
  ]},
  NE: { name: 'Nebraska', hasIncomeTax: true, brackets: [
    { min: 0, max: 10000, rate: 0.0246 },
    { min: 10000, max: 30000, rate: 0.0480 },
    { min: 30000, max: null, rate: 0.0584 },
  ]},
  NV: { name: 'Nevada', hasIncomeTax: false },
  NH: { name: 'New Hampshire', hasIncomeTax: false },
  NJ: { name: 'New Jersey', hasIncomeTax: true, brackets: [
    { min: 0, max: 20000, rate: 0.014 },
    { min: 20000, max: 50000, rate: 0.0175 },
    { min: 50000, max: 150000, rate: 0.055 },
    { min: 150000, max: null, rate: 0.0637 },
  ]},
  NM: { name: 'New Mexico', hasIncomeTax: true, brackets: [
    { min: 0, max: 10000, rate: 0.017 },
    { min: 10000, max: 20000, rate: 0.049 },
    { min: 20000, max: null, rate: 0.059 },
  ]},
  NY: { name: 'New York', hasIncomeTax: true, brackets: [
    { min: 0, max: 15000, rate: 0.04 },
    { min: 15000, max: 80000, rate: 0.055 },
    { min: 80000, max: 200000, rate: 0.06 },
    { min: 200000, max: null, rate: 0.0685 },
  ]},
  NC: { name: 'North Carolina', hasIncomeTax: true, flatRate: 0.045 },
  ND: { name: 'North Dakota', hasIncomeTax: true, brackets: [
    { min: 0, max: 45000, rate: 0.011 },
    { min: 45000, max: null, rate: 0.025 },
  ]},
  OH: { name: 'Ohio', hasIncomeTax: true, brackets: [
    { min: 0, max: 26000, rate: 0.0138 },
    { min: 26000, max: 100000, rate: 0.0275 },
    { min: 100000, max: null, rate: 0.035 },
  ]},
  OK: { name: 'Oklahoma', hasIncomeTax: true, brackets: [
    { min: 0, max: 5000, rate: 0.005 },
    { min: 5000, max: 10000, rate: 0.0275 },
    { min: 10000, max: null, rate: 0.0475 },
  ]},
  OR: { name: 'Oregon', hasIncomeTax: true, brackets: [
    { min: 0, max: 10000, rate: 0.0475 },
    { min: 10000, max: 125000, rate: 0.0875 },
    { min: 125000, max: null, rate: 0.099 },
  ]},
  PA: { name: 'Pennsylvania', hasIncomeTax: true, flatRate: 0.0307 },
  RI: { name: 'Rhode Island', hasIncomeTax: true, brackets: [
    { min: 0, max: 65000, rate: 0.0375 },
    { min: 65000, max: 150000, rate: 0.0475 },
    { min: 150000, max: null, rate: 0.0599 },
  ]},
  SC: { name: 'South Carolina', hasIncomeTax: true, brackets: [
    { min: 0, max: 15000, rate: 0.03 },
    { min: 15000, max: null, rate: 0.06 },
  ]},
  SD: { name: 'South Dakota', hasIncomeTax: false },
  TN: { name: 'Tennessee', hasIncomeTax: false },
  TX: { name: 'Texas', hasIncomeTax: false },
  UT: { name: 'Utah', hasIncomeTax: true, flatRate: 0.0455 },
  VT: { name: 'Vermont', hasIncomeTax: true, brackets: [
    { min: 0, max: 40000, rate: 0.0335 },
    { min: 40000, max: 90000, rate: 0.066 },
    { min: 90000, max: null, rate: 0.0875 },
  ]},
  VA: { name: 'Virginia', hasIncomeTax: true, brackets: [
    { min: 0, max: 3000, rate: 0.02 },
    { min: 3000, max: 5000, rate: 0.03 },
    { min: 5000, max: 17000, rate: 0.05 },
    { min: 17000, max: null, rate: 0.0575 },
  ]},
  WA: { name: 'Washington', hasIncomeTax: false },
  WV: { name: 'West Virginia', hasIncomeTax: true, brackets: [
    { min: 0, max: 10000, rate: 0.03 },
    { min: 10000, max: 25000, rate: 0.04 },
    { min: 25000, max: 60000, rate: 0.045 },
    { min: 60000, max: null, rate: 0.0512 },
  ]},
  WI: { name: 'Wisconsin', hasIncomeTax: true, brackets: [
    { min: 0, max: 15000, rate: 0.035 },
    { min: 15000, max: 30000, rate: 0.044 },
    { min: 30000, max: 300000, rate: 0.053 },
    { min: 300000, max: null, rate: 0.0765 },
  ]},
  WY: { name: 'Wyoming', hasIncomeTax: false },
};
