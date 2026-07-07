// src/data/citations.ts
export const citationsByCategory: Record<string, Array<{label: string; url: string}>> = {
  finance: [
    { label: 'Consumer Financial Protection Bureau (CFPB)', url: 'https://www.consumerfinance.gov/' },
    { label: 'Internal Revenue Service (IRS)', url: 'https://www.irs.gov/' },
    { label: 'Investopedia — Personal Finance', url: 'https://www.investopedia.com/personal-finance-4427760' },
    { label: 'Federal Reserve — Consumer Resources', url: 'https://www.federalreserve.gov/consumerinfo/' },
    { label: 'U.S. Bureau of Labor Statistics', url: 'https://www.bls.gov/' },
    { label: 'FDIC — Money Smart Resources', url: 'https://www.fdic.gov/consumer-resource-center/money-smart' },
  ],
  'real-estate': [
    { label: 'Consumer Financial Protection Bureau — Home Buying', url: 'https://www.consumerfinance.gov/owning-a-home/' },
    { label: 'Fannie Mae — Homebuyer Resources', url: 'https://www.knowyouroptions.com/' },
    { label: 'Realtor.com — Research', url: 'https://www.realtor.com/research/' },
  ],
  utility: [
    { label: 'NIST — Random Number Generation Guidelines', url: 'https://csrc.nist.gov/projects/random-bit-generation' },
    { label: 'Have I Been Pwned — Password Security', url: 'https://haveibeenpwned.com/Passwords' },
  ],
  dev: [
    { label: 'MDN Web Docs', url: 'https://developer.mozilla.org/' },
    { label: 'IETF — Internet Engineering Task Force', url: 'https://www.ietf.org/' },
  ],
  text: [
    { label: 'Flesch Kincaid Readability — Plain English', url: 'https://readable.com/' },
    { label: 'Unicode Consortium — Text Standards', url: 'https://home.unicode.org/' },
  ],
  marketing: [
    { label: 'Google Search Central — SEO Starter Guide', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
    { label: 'Google Analytics Help', url: 'https://support.google.com/analytics/' },
  ],
  health: [
    { label: 'Mayo Clinic — Patient Care & Health Information', url: 'https://www.mayoclinic.org/patient-care-and-health-information' },
    { label: 'Centers for Disease Control and Prevention (CDC)', url: 'https://www.cdc.gov/' },
    { label: 'National Institutes of Health (NIH)', url: 'https://www.nih.gov/' },
    { label: 'World Health Organization (WHO)', url: 'https://www.who.int/' },
    { label: 'USDA — Dietary Guidelines', url: 'https://www.dietaryguidelines.gov/' },
  ],
  legal: [
    { label: 'U.S. Department of Labor — Wage & Hour', url: 'https://www.dol.gov/agencies/whd' },
    { label: 'Cornell Law — Legal Information Institute', url: 'https://www.law.cornell.edu/' },
    { label: 'U.S. Equal Employment Opportunity Commission (EEOC)', url: 'https://www.eeoc.gov/' },
  ],
  education: [
    { label: 'U.S. Department of Education', url: 'https://www.ed.gov/' },
    { label: 'Purdue Online Writing Lab (OWL) — APA/MLA/Chicago', url: 'https://owl.purdue.edu/' },
  ],
  'image-tools': [
    { label: 'Mozilla — Image File Type Support', url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types' },
    { label: 'W3C — Graphics and Image Standards', url: 'https://www.w3.org/Graphics/' },
  ],
};
