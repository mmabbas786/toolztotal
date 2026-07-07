#!/usr/bin/env python3
"""
Fixes the ToolSchema faqs prop on all refactored tool pages by extracting 
FAQ questions and answers from the HTML <details>/<summary> or accordion FAQ 
sections already present on each page.

This is a follow-up to refactor_tool_pages.py which only captured 1 FAQ pair.
"""

import re
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAGES = ROOT / "src" / "pages"

CATEGORY_SLUGS = [
    "finance", "real-estate", "utility", "dev", "text",
    "marketing", "health", "legal", "education", "image-tools"
]


def extract_faq_from_html(content: str) -> list[dict]:
    """
    Extract FAQ Q&A from HTML patterns in the page:
    - <summary>...</summary> + content block (accordion pattern)
    - <h3>Question</h3> <p>Answer</p> pattern
    
    Returns list of {question, answer} dicts.
    """
    faqs = []
    
    # Pattern 1: <details> accordion — <summary>{Q}</summary>{A text}
    # Used in many pages: <details class="..."><summary ...>{question}</summary>
    details_matches = re.findall(
        r'<details[^>]*>[\s\S]*?<summary[^>]*>\s*([\s\S]*?)\s*</summary>\s*([\s\S]*?)</details>',
        content,
        re.DOTALL
    )
    for q_raw, a_raw in details_matches:
        q = re.sub(r'<[^>]+>', '', q_raw).strip()
        a = re.sub(r'<[^>]+>', ' ', a_raw).strip()
        a = re.sub(r'\s+', ' ', a).strip()
        if q and a and len(q) > 10 and len(a) > 20:
            faqs.append({"question": q, "answer": a})
    
    if faqs:
        return faqs
    
    # Pattern 2: FAQ heading + answer pattern
    # Some pages use h3+p for FAQ
    h3_p_matches = re.findall(
        r'<h3[^>]*>\s*([\s\S]*?)\s*</h3>\s*<[dp][^>]*>\s*([\s\S]*?)\s*</[dp]>',
        content,
        re.DOTALL
    )
    for q_raw, a_raw in h3_p_matches:
        q = re.sub(r'<[^>]+>', '', q_raw).strip()
        a = re.sub(r'<[^>]+>', ' ', a_raw).strip()
        a = re.sub(r'\s+', ' ', a).strip()
        if q and a and len(q) > 10 and len(a) > 20:
            if '?' in q or len(q) < 150:
                faqs.append({"question": q, "answer": a})
    
    return faqs[:15]  # cap at 15


def build_faqs_prop(faqs: list[dict]) -> str:
    """Build the faqs prop string for ToolSchema."""
    if not faqs:
        return ""
    faq_items = []
    for faq in faqs:
        q = faq["question"].replace("\\", "\\\\").replace('"', '\\"')
        a = faq["answer"].replace("\\", "\\\\").replace('"', '\\"')
        # Truncate very long answers for the schema prop
        if len(a) > 800:
            a = a[:797] + "..."
        faq_items.append(f'    {{ question: "{q}", answer: "{a}" }}')
    return "  faqs={[\n" + ",\n".join(faq_items) + "\n  ]}"


def fix_toolschema_faqs(filepath: Path) -> bool:
    """
    Replace single-FAQ ToolSchema prop with all FAQs extracted from HTML.
    Returns True if modified.
    """
    content = filepath.read_text(encoding="utf-8")
    
    if "ToolSchema" not in content:
        return False
    
    # Check if already has more than 1 FAQ in the faqs prop
    faq_count_in_prop = content.count('{ question:')
    
    # Extract all FAQs from HTML
    faqs = extract_faq_from_html(content)
    
    if len(faqs) <= faq_count_in_prop:
        # Already has as many or more FAQs as we found — nothing to improve
        return False
    
    if len(faqs) == 0:
        return False
    
    print(f"  Fixing {filepath.name}: {faq_count_in_prop} → {len(faqs)} FAQs")
    
    # Replace the existing faqs prop block in ToolSchema
    # Match:  faqs={[\n    { question:... }\n  ]}
    new_prop = build_faqs_prop(faqs)
    
    # Remove old faqs prop and replace
    content = re.sub(
        r'  faqs=\{\[[\s\S]*?\]\}',
        new_prop,
        content,
        count=1
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
            result = fix_toolschema_faqs(page_file)
            if result:
                modified += 1
    
    print(f"\nDONE — Fixed FAQ props on {modified} pages")


if __name__ == "__main__":
    main()
