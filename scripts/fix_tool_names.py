#!/usr/bin/env python3
"""
Cleans up tool names in ToolSchema tags that were extracted with 
full title suffixes like "- Free ... Online | ToolzTotal".

Also fixes any tool names that are too long by mapping them to proper names.
"""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAGES = ROOT / "src" / "pages"

CATEGORY_SLUGS = [
    "finance", "real-estate", "utility", "dev", "text",
    "marketing", "health", "legal", "education", "image-tools"
]

# Map slug → correct tool name (for cases where regex extracted too much)
TOOL_NAME_OVERRIDES = {
    "age-calculator": "Age Calculator",
    "amortization-calculator": "Amortization Schedule Calculator",
    "base64-encoder-decoder": "Base64 Encoder / Decoder",
    "bmi-calculator": "BMI Calculator",
    "body-fat-calculator": "Body Fat Calculator",
    "break-even-calculator": "Break-Even Analysis Calculator",
    "cac-ltv-calculator": "SaaS CAC:LTV Calculator",
    "calorie-calculator": "Calorie & TDEE Calculator",
    "case-converter": "Case Converter",
    "character-counter": "Character Counter",
    "citation-generator": "Citation Generator",
    "color-picker": "Color Picker",
    "compound-interest-calculator": "Compound Interest Calculator",
    "css-minifier": "CSS Minifier & Beautifier",
    "diff-checker": "Diff Checker",
    "email-subject-tester": "Email Subject Line Tester",
    "final-grade-calculator": "Final Grade Calculator",
    "gpa-calculator": "GPA Calculator",
    "grade-calculator": "Grade Calculator",
    "headline-analyzer": "Headline Analyzer",
    "hours-calculator": "Hours Calculator",
    "ideal-weight-calculator": "Ideal Weight Calculator",
    "image-compressor": "Image Compressor",
    "image-resizer": "Image Resizer",
    "inflation-calculator": "Inflation Calculator",
    "json-formatter": "JSON Formatter & Validator",
    "keyword-density-checker": "Keyword Density Checker",
    "loan-calculator": "Loan Payment Calculator",
    "macro-calculator": "Macro Calculator",
    "meta-tag-generator": "Meta Tag Generator",
    "mortgage-affordability-calculator": "Mortgage Affordability Calculator",
    "mortgage-calculator": "Mortgage Payment Calculator",
    "mortgage-refinance-calculator": "Mortgage Refinance Calculator",
    "name-generator": "Random Name Generator",
    "net-worth-calculator": "Net Worth Calculator",
    "overtime-calculator": "Overtime Pay Calculator",
    "password-generator": "Random Password Generator",
    "payroll-tax-calculator": "Payroll Tax Calculator",
    "pdf-merger": "PDF Merger",
    "percentage-calculator": "Percentage Calculator",
    "pregnancy-calculator": "Pregnancy Due Date Calculator",
    "property-tax-calculator": "Property Tax Calculator",
    "qr-code-generator": "QR Code Generator",
    "readability-checker": "Readability Score Checker",
    "regex-tester": "Regex Tester",
    "rent-vs-buy-calculator": "Rent vs Buy Calculator",
    "rental-property-calculator": "Rental Property Cash Flow Calculator",
    "retirement-calculator": "Retirement Savings Calculator",
    "roi-calculator": "ROI Calculator",
    "sales-tax-calculator": "Sales Tax Calculator",
    "self-employment-tax-calculator": "Self-Employment Tax Calculator",
    "serp-preview": "SERP Snippet Preview Tool",
    "severance-calculator": "Severance Pay Calculator",
    "split-bill-calculator": "Split Bill Calculator",
    "subnet-calculator": "Subnet Calculator",
    "tip-calculator": "Tip Calculator",
    "unit-converter": "Unit Converter",
    "utm-builder": "UTM Link Builder",
    "uuid-generator": "UUID Generator",
    "word-counter": "Word Counter",
}


def fix_tool_name(filepath: Path) -> bool:
    slug = filepath.stem
    if slug not in TOOL_NAME_OVERRIDES:
        return False
    
    correct_name = TOOL_NAME_OVERRIDES[slug]
    content = filepath.read_text(encoding="utf-8")
    
    # Find current toolName in ToolSchema
    m = re.search(r'<ToolSchema[\s\S]*?toolName="([^"]*)"', content)
    if not m:
        return False
    
    current_name = m.group(1)
    if current_name == correct_name:
        return False
    
    print(f"  {filepath.name}: {current_name!r} → {correct_name!r}")
    
    # Replace the toolName prop
    content = re.sub(
        r'(  <ToolSchema[\s\S]*?toolName=")[^"]*(")',
        f'\\1{correct_name}\\2',
        content,
        count=1,
    )
    
    filepath.write_text(content, encoding="utf-8")
    return True


def main():
    modified = 0
    for cat_slug in CATEGORY_SLUGS:
        cat_dir = PAGES / cat_slug
        if not cat_dir.exists():
            continue
        for page_file in sorted(cat_dir.glob("*.astro")):
            if page_file.name == "index.astro":
                continue
            if fix_tool_name(page_file):
                modified += 1
    
    print(f"\nDONE — Fixed tool names on {modified} pages")


if __name__ == "__main__":
    main()
