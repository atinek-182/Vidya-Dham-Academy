#!/usr/bin/env python3
"""
flagship-project-init: JIT Prompt Hydrator
Reads the current live project context files and compiles the freshly hydrated
NEXT_CHAT_PROMPT.md for the next chat session, ensuring prompts never suffer from
stale pre-written assumptions or drift.
"""

import os
import sys
import json
import re
import argparse

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

def normalize_posix(path_str: str) -> str:
    return os.path.normpath(path_str).replace("\\", "/")

def read_file_safe(path: str, default: str = "") -> str:
    if os.path.exists(path):
        try:
            with open(path, "r", encoding="utf-8") as f:
                return f.read()
        except Exception:
            return default
    return default

def hydrate_next_prompt(project_dir: str, next_chat_num: int):
    chat_str = f"{next_chat_num:02d}"
    prompt_tpl_path = os.path.join(project_dir, "prompts", f"chat-{chat_str}.md")

    if not os.path.exists(prompt_tpl_path):
        print(f"Error: Prompt template not found at {normalize_posix(prompt_tpl_path)}")
        sys.exit(1)

    template_content = read_file_safe(prompt_tpl_path)

    # Read live context
    brand_content = read_file_safe(os.path.join(project_dir, "context", "1-brand-and-vision.md"))
    tokens_content = read_file_safe(os.path.join(project_dir, "context", "2-design-tokens.json"))
    manifest_content = read_file_safe(os.path.join(project_dir, "context", "3-ui-manifest.md"))
    style_lock = read_file_safe(os.path.join(project_dir, ".tastemaker", "style-lock.md"))

    # Extract summaries
    brand_summary = "Pending Stage 1"
    if brand_content:
        lines = [line.strip() for line in brand_content.split("\n") if line.startswith("# ") or line.startswith("## ")]
        brand_summary = "; ".join(lines[:4])

    stack_match = re.search(r"Target Stack:\s*(.*)", brand_content, re.IGNORECASE)
    active_stack = stack_match.group(1).strip() if stack_match else "Vite React (TypeScript)"

    vibe_match = re.search(r"Aesthetic Vibe:\s*(.*)", brand_content, re.IGNORECASE)
    active_vibe = vibe_match.group(1).strip() if vibe_match else "Awwwards Creative Flagship"

    # Replacements dictionary
    replacements = {
        "LIVE_BRAND_SUMMARY": brand_summary,
        "ACTIVE_STACK": active_stack,
        "ACTIVE_VIBE": active_vibe,
        "NEXT_CHAT_NUM": str(next_chat_num),
        "NEXT_CHAT_STR": chat_str
    }

    hydrated = template_content
    for key, val in replacements.items():
        hydrated = hydrated.replace(f"{{{{{key}}}}}", str(val))

    # Write to NEXT_CHAT_PROMPT.md at project root
    next_prompt_file = os.path.join(project_dir, "NEXT_CHAT_PROMPT.md")
    with open(next_prompt_file, "w", encoding="utf-8") as f:
        f.write(hydrated)

    # Update .design-lock.json active chat
    lock_file = os.path.join(project_dir, ".design-lock.json")
    if os.path.exists(lock_file):
        try:
            with open(lock_file, "r", encoding="utf-8") as f:
                lock_data = json.load(f)
            lock_data["active_chat"] = next_chat_num
            with open(lock_file, "w", encoding="utf-8") as f:
                json.dump(lock_data, f, indent=2)
        except Exception:
            pass

    print(f"[OK] Successfully hydrated NEXT_CHAT_PROMPT.md for Chat {next_chat_num}")
    print(f"Target: {normalize_posix(next_prompt_file)}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="JIT Prompt Hydrator")
    parser.add_argument("--next-chat", type=int, required=True, help="Next chat number (1-24)")
    parser.add_argument("--project-dir", default=os.getcwd(), help="Target project root directory")
    args = parser.parse_args()

    hydrate_next_prompt(os.path.abspath(args.project_dir), args.next_chat)
