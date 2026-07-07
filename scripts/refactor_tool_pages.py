#!/usr/bin/env python3
"""
Refactors all tool pages in toolztotal to use:
  - <ToolSchema> component (SoftwareApplication + BreadcrumbList + FAQPage schema)
  - <Breadcrumbs> component (replaces inline breadcrumb nav)
  - <RelatedTools> component (added near bottom of page)
  - Removes inline faqSchema + faqJsonLd + faqJsonLd prop from <Layout>

Category → display name mappings match DESIGN.md / toolCatalog.
"""

import re
import os
import json
import sys
from pathlib import Path

# -------------------------------------------------------------------
# Configuration
# -------------------------------------------------------------------
ROOT = Path(__file__).resolve().parent.parent
PAGES = ROOT / "src" / "pages"

# Map directory slug → human-readable category name
CATEGORY_NAMES: dict[str, str] = {
    "finance": "Finance & Loans",
    "real-estate": "Real Estate & Mortgage",
    "utility": "Everyday / Life Utility",
    "dev": "Developer Tools",
    "text": "Text & Content",
    "marketing": "Marketing & SEO",
    "health": "Health & Fitness",
    "legal": "Legal & Employment",
    "education": "Education",
    "image-tools": "Image & PDF Tools",
}

    # Pages that already have ToolSchema — skip them
SKIP_FILES = {
    # Add entries only if we are certain they were fully and correctly refactored.
    "mortgage-calculator.astro",
}


# -------------------------------------------------------------------
# Helpers
# -------------------------------------------------------------------

def slugify(filename: str) -> str:
    return filename.replace(".astro", "")


def extract_faq_from_faqschema(content: str) -> list[dict]:
    """
    Extracts the FAQ Q&A pairs from the old inline faqSchema object.
    Returns a list of {question, answer} dicts, or [] if none found.
    """
    # Grab the raw JS object between `const faqSchema = {` and `};`
    m = re.search(
        r'const\s+faqSchema\s*=\s*(\{[\s\S]+?"@type"\s*:\s*"FAQPage"[\s\S]+?\})(?:\s*;|\s*\n)',
        content,
    )
    if not m:
        return []

    raw = m.group(1)

    # Extract all Q&A pairs using regex
    pairs = re.findall(
        r'"@type"\s*:\s*"Question"[\s\S]*?"name"\s*:\s*"(.*?)"[\s\S]*?"@type"\s*:\s*"Answer"[\s\S]*?"text"\s*:\s*"([\s\S]*?)"(?=\s*\})',
        raw,
    )
    result = []
    for q, a in pairs:
        # Unescape JSON-style escapes
        q = q.replace('\\"', '"').replace("\\n", " ").replace("\\t", " ")
        a = a.replace('\\"', '"').replace("\\n", " ").replace("\\t", " ")
        result.append({"question": q, "answer": a})
    return result


def build_tool_schema_tag(
    tool_name: str,
    tool_slug: str,
    category_name: str,
    category_slug: str,
    description: str,
    faqs: list[dict],
) -> str:
    """Returns the <ToolSchema .../> JSX tag."""
    # Build FAQ prop string
    if faqs:
        faq_items = []
        for faq in faqs:
            q = faq["question"].replace('"', '\\"')
            a = faq["answer"].replace('"', '\\"')
            faq_items.append(f'    {{ question: "{q}", answer: "{a}" }}')
        faq_prop = "  faqs={[\n" + ",\n".join(faq_items) + "\n  ]}"
    else:
        faq_prop = ""

    return (
        f'  <ToolSchema\n'
        f'    toolName="{tool_name}"\n'
        f'    toolSlug="{tool_slug}"\n'
        f'    categoryName="{category_name}"\n'
        f'    categorySlug="{category_slug}"\n'
        f'    description="{description}"\n'
        + (faq_prop + "\n" if faq_prop else "")
        + f'  />'
    )


def extract_tool_info(content: str, tool_slug: str) -> tuple[str, str]:
    """
    Returns (tool_name, description) extracted from the <Layout title="..." description="..."> tag.
    Falls back to slug-based defaults.
    """
    # title
    m_title = re.search(r'<Layout[^>]*title="([^"]*)"', content, re.DOTALL)
    # description
    m_desc = re.search(r'<Layout[^>]*description="([^"]*)"', content, re.DOTALL)

    raw_title = m_title.group(1) if m_title else ""
    description = m_desc.group(1) if m_desc else ""

    # Strip trailing "| ToolzTotal" from title to get tool name
    tool_name = re.sub(r"\s*\|\s*ToolzTotal\s*$", "", raw_title).strip()
    # Also strip common suffixes like "- Free ... |"
    tool_name = re.sub(r"\s*-\s*Free.*$", "", tool_name).strip()
    tool_name = re.sub(r"\s*—\s*Free.*$", "", tool_name).strip()

    if not tool_name:
        # Fallback: convert slug to title case
        tool_name = tool_slug.replace("-", " ").title()

    return tool_name, description


def build_import_block(content: str) -> str:
    """
    Ensures ToolSchema, Breadcrumbs, RelatedTools are all imported.
    Adds any missing imports to the existing import block.
    """
    needed = {
        "Breadcrumbs": "import Breadcrumbs from '../../components/Breadcrumbs.astro';",
        "RelatedTools": "import RelatedTools from '../../components/RelatedTools.astro';",
        "ToolSchema": "import ToolSchema from '../../components/ToolSchema.astro';",
    }
    for component, import_line in needed.items():
        # Already imported?
        if f"import {component}" in content:
            continue
        # Insert after last import line
        content = re.sub(
            r"(import Layout from.*?;)",
            r"\1\n" + import_line,
            content,
            count=1,
        )
    return content


def remove_inline_faq_schema(content: str) -> str:
    """Remove the old faqSchema const and faqJsonLd const declarations."""
    # Remove: const faqSchema = { ... };\n const faqJsonLd = JSON.stringify(faqSchema);
    content = re.sub(
        r"// FAQ Schema JSON-LD.*?\n",
        "",
        content,
    )
    content = re.sub(
        r"// FAQ Schema.*?\n",
        "",
        content,
    )
    content = re.sub(
        r"// Inline FAQ.*?\n",
        "",
        content,
    )
    content = re.sub(
        r"const\s+faqSchema\s*=\s*\{[\s\S]*?\"@type\"\s*:\s*\"FAQPage\"[\s\S]*?\};\s*\n",
        "",
        content,
    )
    content = re.sub(
        r"const\s+faqJsonLd\s*=\s*JSON\.stringify\(faqSchema\);\s*\n",
        "",
        content,
    )
    return content


def remove_faqjsonld_from_layout(content: str) -> str:
    """Remove faqJsonLd={faqJsonLd} from the <Layout ...> opening tag."""
    content = re.sub(r"\s*faqJsonLd=\{faqJsonLd\}", "", content)
    return content


def remove_inline_breadcrumb_nav(content: str) -> str:
    """
    Remove the old inline breadcrumb <nav> block.
    Matches both patterns we found:
      Pattern 1: <nav ... aria-label="Breadcrumb">...(Home)...</nav>
    """
    # Pattern: <!-- Breadcrumbs --> (optional comment) then <nav ...>...</nav>
    content = re.sub(
        r"\s*<!--\s*Breadcrumbs?\s*-->\s*\n\s*<nav[^>]*aria-label=\"Breadcrumb\"[^>]*>[\s\S]*?</nav>",
        "",
        content,
    )
    # In case there's no comment before the nav:
    content = re.sub(
        r"\s*<nav[^>]*aria-label=\"Breadcrumb\"[^>]*>\s*<a href=\"/\"[^>]*>Home</a>[\s\S]*?</nav>",
        "",
        content,
    )
    return content


def inject_toolschema_before_layout_open(content: str, schema_tag: str) -> str:
    """
    Inject <ToolSchema .../> inside the <Layout ...> tag, right after <Layout opens.
    More specifically, place it as the FIRST child of the Layout component.
    """
    # Find the position right AFTER the closing > of <Layout ...>
    m = re.search(r"(<Layout[\s\S]*?>)", content)
    if not m:
        return content
    layout_open = m.group(1)
    insert_pos = m.end()
    return content[:insert_pos] + "\n" + schema_tag + "\n" + content[insert_pos:]


def inject_breadcrumbs_after_opening_div(
    content: str,
    category_name: str,
    category_slug: str,
    tool_name: str,
    tool_slug: str,
) -> str:
    """
    Inject <Breadcrumbs .../> right after the first opening wrapper <div> inside <Layout>.
    """
    breadcrumb_tag = (
        f'    <Breadcrumbs\n'
        f'      categoryName="{category_name}"\n'
        f'      categorySlug="{category_slug}"\n'
        f'      toolName="{tool_name}"\n'
        f'      toolSlug="{tool_slug}"\n'
        f'    />'
    )
    # Insert right after the first <div class="max-w-[1400px]... pattern
    m = re.search(
        r'(<div\s+class="max-w-\[1400px\][^"]*"[^>]*>)',
        content,
    )
    if not m:
        return content
    insert_pos = m.end()
    return content[:insert_pos] + "\n" + breadcrumb_tag + "\n" + content[insert_pos:]


def inject_related_tools_before_layout_close(
    content: str,
    category_slug: str,
    tool_slug: str,
) -> str:
    """
    Inject <RelatedTools .../> at the END of the main content, before </Layout>.
    """
    related_tag = (
        f'\n    <RelatedTools\n'
        f'      categorySlug="{category_slug}"\n'
        f'      toolSlug="{tool_slug}"\n'
        f'    />'
    )
    # Insert before </Layout>
    if "</Layout>" in content:
        content = content.replace("</Layout>", related_tag + "\n</Layout>", 1)
    return content


# -------------------------------------------------------------------
# Main refactor loop
# -------------------------------------------------------------------

def refactor_file(filepath: Path, category_slug: str) -> bool:
    """
    Refactors a single .astro tool page. Returns True if modified.
    """
    if filepath.name in SKIP_FILES:
        print(f"  SKIP (already done): {filepath.name}")
        return False

    content = filepath.read_text(encoding="utf-8")

    # Skip if already has ToolSchema
    if "ToolSchema" in content:
        print(f"  SKIP (ToolSchema present): {filepath.name}")
        return False

    tool_slug = slugify(filepath.name)
    category_name = CATEGORY_NAMES.get(category_slug, category_slug.title())

    # Extract tool info from <Layout> props
    tool_name, description = extract_tool_info(content, tool_slug)

    # Extract FAQ data from inline faqSchema
    faqs = extract_faq_from_faqschema(content)

    print(f"  Processing: {filepath.name}")
    print(f"    tool_name  = {tool_name!r}")
    print(f"    category   = {category_name!r}")
    print(f"    faqs       = {len(faqs)} found")

    # Step 1: Add missing imports
    content = build_import_block(content)

    # Step 2: Remove old inline FAQ schema blocks
    content = remove_inline_faq_schema(content)

    # Step 3: Remove faqJsonLd= from <Layout> tag
    content = remove_faqjsonld_from_layout(content)

    # Step 4: Remove inline breadcrumb <nav> block
    content = remove_inline_breadcrumb_nav(content)

    # Step 5: Inject <ToolSchema> as first child of <Layout>
    schema_tag = build_tool_schema_tag(
        tool_name, tool_slug, category_name, category_slug, description, faqs
    )
    content = inject_toolschema_before_layout_open(content, schema_tag)

    # Step 6: Inject <Breadcrumbs> after the first outer wrapper div
    content = inject_breadcrumbs_after_opening_div(
        content, category_name, category_slug, tool_name, tool_slug
    )

    # Step 7: Inject <RelatedTools> before </Layout>
    content = inject_related_tools_before_layout_close(
        content, category_slug, tool_slug
    )

    filepath.write_text(content, encoding="utf-8")
    return True


def main():
    modified = 0
    skipped = 0
    errors = []

    for cat_dir in sorted(PAGES.iterdir()):
        if not cat_dir.is_dir():
            continue
        category_slug = cat_dir.name
        if category_slug not in CATEGORY_NAMES:
            continue  # Skip [category], about, etc.

        print(f"\nCategory: {category_slug}")
        for page_file in sorted(cat_dir.glob("*.astro")):
            if page_file.name == "index.astro":
                continue  # Skip category index pages
            try:
                result = refactor_file(page_file, category_slug)
                if result:
                    modified += 1
                else:
                    skipped += 1
            except Exception as e:
                errors.append((page_file, str(e)))
                print(f"  ERROR: {page_file.name}: {e}")

    print(f"\n{'='*60}")
    print(f"DONE — Modified: {modified}, Skipped: {skipped}, Errors: {len(errors)}")
    if errors:
        print("\nErrors:")
        for path, err in errors:
            print(f"  {path}: {err}")


if __name__ == "__main__":
    main()
