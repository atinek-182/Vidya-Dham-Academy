#!/usr/bin/env python3
"""
flagship-project-init: SVG Security Sanitizer
Strips `<script>`, `onload`, `onerror`, `javascript:` URIs, and external entity refs
from SVG assets before saving to local `src/assets/` to eliminate DOM XSS risks.
"""

import os
import sys
import re
import argparse

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

DANGEROUS_TAGS = [
    r"<script[\s\S]*?</script>",
    r"<script[^>]*>",
    r"<!ENTITY[^>]*>",
    r"<!DOCTYPE[^>]*>"
]

DANGEROUS_ATTRIBUTES = [
    r"\son\w+\s*=\s*[\"'][^\"']*[\"']",
    r"\son\w+\s*=\s*[^>\s]+",
    r"href\s*=\s*[\"']javascript:[^\"']*[\"']",
    r"xlink:href\s*=\s*[\"']javascript:[^\"']*[\"']",
    r"data:[^\"']*",
]

def sanitize_svg_string(svg_content: str) -> str:
    cleaned = svg_content
    for pattern in DANGEROUS_TAGS:
        cleaned = re.sub(pattern, "", cleaned, flags=re.IGNORECASE)
    for pattern in DANGEROUS_ATTRIBUTES:
        cleaned = re.sub(pattern, "", cleaned, flags=re.IGNORECASE)
    return cleaned

def sanitize_file(input_path: str, output_path: str = None):
    if not os.path.exists(input_path):
        print(f"Error: File not found: {input_path}")
        sys.exit(1)

    with open(input_path, "r", encoding="utf-8", errors="ignore") as f:
        raw_svg = f.read()

    cleaned_svg = sanitize_svg_string(raw_svg)
    dest_path = output_path if output_path else input_path

    os.makedirs(os.path.dirname(os.path.abspath(dest_path)), exist_ok=True)
    with open(dest_path, "w", encoding="utf-8") as f:
        f.write(cleaned_svg)

    print(f"[SECURITY] SVG Sanitized: {dest_path}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="SVG Security Sanitizer")
    parser.add_argument("--file", required=True, help="Path to input SVG file")
    parser.add_argument("--out", help="Optional path to output sanitized SVG")
    args = parser.parse_args()

    sanitize_file(args.file, args.out)
