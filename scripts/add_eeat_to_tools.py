import os
import re
import hashlib

citations_by_category = {
  "finance": [
    { "label": "Consumer Financial Protection Bureau (CFPB)", "url": "https://www.consumerfinance.gov/" },
    { "label": "Internal Revenue Service (IRS)", "url": "https://www.irs.gov/" },
    { "label": "Investopedia — Personal Finance", "url": "https://www.investopedia.com/personal-finance-4427760" },
    { "label": "Federal Reserve — Consumer Resources", "url": "https://www.federalreserve.gov/consumerinfo/" },
    { "label": "U.S. Bureau of Labor Statistics", "url": "https://www.bls.gov/" },
    { "label": "FDIC — Money Smart Resources", "url": "https://www.fdic.gov/consumer-resource-center/money-smart" }
  ],
  "real-estate": [
    { "label": "Consumer Financial Protection Bureau — Home Buying", "url": "https://www.consumerfinance.gov/owning-a-home/" },
    { "label": "Fannie Mae — Homebuyer Resources", "url": "https://www.knowyouroptions.com/" },
    { "label": "Realtor.com — Research", "url": "https://www.realtor.com/research/" }
  ],
  "utility": [
    { "label": "NIST — Random Number Generation Guidelines", "url": "https://csrc.nist.gov/projects/random-bit-generation" },
    { "label": "Have I Been Pwned — Password Security", "url": "https://haveibeenpwned.com/Passwords" }
  ],
  "dev": [
    { "label": "MDN Web Docs", "url": "https://developer.mozilla.org/" },
    { "label": "IETF — Internet Engineering Task Force", "url": "https://www.ietf.org/" }
  ],
  "text": [
    { "label": "Flesch Kincaid Readability — Plain English", "url": "https://readable.com/" },
    { "label": "Unicode Consortium — Text Standards", "url": "https://home.unicode.org/" }
  ],
  "marketing": [
    { "label": "Google Search Central — SEO Starter Guide", "url": "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
    { "label": "Google Analytics Help", "url": "https://support.google.com/analytics/" }
  ],
  "health": [
    { "label": "Mayo Clinic — Patient Care & Health Information", "url": "https://www.mayoclinic.org/patient-care-and-health-information" },
    { "label": "Centers for Disease Control and Prevention (CDC)", "url": "https://www.cdc.gov/" },
    { "label": "National Institutes of Health (NIH)", "url": "https://www.nih.gov/" },
    { "label": "World Health Organization (WHO)", "url": "https://www.who.int/" },
    { "label": "USDA — Dietary Guidelines", "url": "https://www.dietaryguidelines.gov/" }
  ],
  "legal": [
    { "label": "U.S. Department of Labor — Wage & Hour", "url": "https://www.dol.gov/agencies/whd" },
    { "label": "Cornell Law — Legal Information Institute", "url": "https://www.law.cornell.edu/" },
    { "label": "U.S. Equal Employment Opportunity Commission (EEOC)", "url": "https://www.eeoc.gov/" }
  ],
  "education": [
    { "label": "U.S. Department of Education", "url": "https://www.ed.gov/" },
    { "label": "Purdue Online Writing Lab (OWL) — APA/MLA/Chicago", "url": "https://owl.purdue.edu/" }
  ],
  "image-tools": [
    { "label": "Mozilla — Image File Type Support", "url": "https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types" },
    { "label": "W3C — Graphics and Image Standards", "url": "https://www.w3.org/Graphics/" }
  ]
}

ymyl_categories = {"finance", "real-estate", "legal", "health"}
categories = set(citations_by_category.keys())
pages_dir = "/Users/mirzamehediabbas/toolztotal/src/pages"

def get_two_citations(category, filename):
    citations = citations_by_category.get(category, [])
    if not citations:
        return []
    if len(citations) <= 2:
        return citations
    h = int(hashlib.md5(filename.encode('utf-8')).hexdigest(), 16)
    idx1 = h % len(citations)
    idx2 = (h // len(citations) + 1) % (len(citations) - 1)
    if idx2 >= idx1:
        idx2 += 1
    return [citations[idx1], citations[idx2]]

def refactor_file(filepath, category, filename):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip legal/index.astro and any other category index pages
    if filename == 'index.astro':
        print(f"Skipping index file: {filepath}")
        return

    # Check if file has frontmatter
    frontmatter_match = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    if not frontmatter_match:
        print(f"No frontmatter found in: {filepath}")
        return

    frontmatter = frontmatter_match.group(1)
    
    # 1. Add imports to frontmatter if not already present
    import_cf = "import ContentFooter from '../../components/ContentFooter.astro';"
    import_sc = "import Sources from '../../components/Sources.astro';"
    import_db = "import DisclaimerBanner from '../../components/DisclaimerBanner.astro';"

    new_imports = []
    if import_cf not in frontmatter:
        new_imports.append(import_cf)
    if import_sc not in frontmatter:
        new_imports.append(import_sc)
    if category in ymyl_categories and import_db not in frontmatter:
        new_imports.append(import_db)

    if new_imports:
        updated_frontmatter = frontmatter.rstrip() + "\n" + "\n".join(new_imports) + "\n"
        content = content.replace(f"---\n{frontmatter}\n---", f"---\n{updated_frontmatter}---", 1)

    # Remove any existing Sources or reviewed footer if they were added in error previously
    # We check if there are tags like <ContentFooter or <Sources
    content = re.sub(r'\s*<ContentFooter\s+[^>]*/>', '', content)
    content = re.sub(r'\s*<Sources\s+sources=\{.*?\}\s*/>', '', content, flags=re.DOTALL)
    content = re.sub(r'\s*<DisclaimerBanner\s+[^>]*/>', '', content)

    # 2. Insert DisclaimerBanner right after Breadcrumbs component call
    if category in ymyl_categories:
        breadcrumbs_pattern = r'(<Breadcrumbs\s+[^>]*/>)'
        db_tag = f'\n  <DisclaimerBanner category="{category}" />'
        
        # Match breadcrumbs tag (even multiline)
        match = re.search(breadcrumbs_pattern, content, re.DOTALL)
        if match:
            breadcrumbs_call = match.group(1)
            content = content.replace(breadcrumbs_call, breadcrumbs_call + db_tag, 1)
        else:
            print(f"Warning: Breadcrumbs not found in YMYL page {filepath}")

    # 3. Insert Sources component call after article close
    selected_citations = get_two_citations(category, filename)
    citations_js = ",\n    ".join([f"{{ label: '{c['label']}', url: '{c['url']}' }}" for c in selected_citations])
    sources_tag = f"""

  <Sources sources={{[
    {citations_js}
  ]}} />"""

    article_close = "</article>"
    if article_close in content:
        content = content.replace(article_close, article_close + sources_tag, 1)
    else:
        print(f"Warning: </article> not found in {filepath}")

    # 4. Insert ContentFooter call just before closing Layout tag
    cf_tag = f'\n  <ContentFooter category="{category}" />\n'
    layout_close = "</Layout>"
    if layout_close in content:
        # Find the last occurrence of </Layout>
        parts = content.rsplit(layout_close, 1)
        content = layout_close.join([parts[0] + cf_tag, parts[1]])
    else:
        print(f"Warning: </Layout> not found in {filepath}")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Successfully refactored: {filepath}")

def main():
    count = 0
    for root, dirs, files in os.walk(pages_dir):
        category = os.path.basename(root)
        if category in categories:
            for file in files:
                if file.endswith('.astro'):
                    filepath = os.path.join(root, file)
                    refactor_file(filepath, category, file)
                    count += 1
    print(f"Finished refactoring {count} files.")

if __name__ == '__main__':
    main()
