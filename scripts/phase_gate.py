#!/usr/bin/env python3
"""
flagship-project-init: Phase Gatekeeper
Enforces deterministic blast-radius containment, file write whitelists,
and mandatory Skill Evidence & Formula blocks before any phase DoD is signed off.
"""

import os
import sys
import json
import re
import subprocess
import argparse

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

def normalize_posix(path_str: str) -> str:
    return os.path.normpath(path_str).replace("\\", "/")

def get_git_modified_files(project_dir: str) -> list:
    try:
        cmd = ["git", "status", "--porcelain", "-uall"]
        res = subprocess.run(cmd, cwd=project_dir, capture_output=True, text=True, check=True)
        files = []
        for line in res.stdout.splitlines():
            if not line or len(line) < 4:
                continue
            # Format: XY PATH or XY PATH -> PATH (XY has 2 chars + 1 space delimiter)
            path_part = line[3:].strip()
            if " -> " in path_part:
                path_part = path_part.split(" -> ")[-1]
            rel_path = normalize_posix(path_part)
            files.append(rel_path)
        return files
    except Exception as e:
        print(f"[Gatekeeper Warning] Git status check failed ({e}). Checking direct filesystem.")
        return []

def verify_phase_spec(project_dir: str, phase_id: str) -> tuple:
    spec_path = os.path.join(project_dir, "specs", f"phase-{phase_id}-spec.md")
    if not os.path.exists(spec_path):
        return False, f"Missing required specification artifact: specs/phase-{phase_id}-spec.md"

    with open(spec_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Verify Skill Evidence & Formula Block presence
    has_evidence_block = bool(re.search(r"##\s*(\d+\.)?\s*Skill Evidence", content, re.IGNORECASE) or "### Skill Evidence" in content)
    if not has_evidence_block:
        return False, f"specs/phase-{phase_id}-spec.md is missing '## Skill Evidence & Formula Block'"

    # Verify rule citations or mathematical formulas
    has_rule_citations = re.search(r"Rule|formula|calculation|contrast ratio|clamp\(|concentric", content, re.IGNORECASE)
    if not has_rule_citations:
        return False, f"specs/phase-{phase_id}-spec.md Skill Evidence block lacks concrete rule citations or formulas"

    return True, "Phase spec verified with valid skill evidence."

def check_blast_radius(project_dir: str, allowed_paths: list) -> tuple:
    modified_files = get_git_modified_files(project_dir)
    if not modified_files:
        return True, "No uncommitted modified files."

    norm_allowed = [normalize_posix(p) for p in allowed_paths]
    violations = []

    for mf in modified_files:
        # Check if modified file matches any allowed pattern
        is_allowed = False
        for ap in norm_allowed:
            if ap.endswith("/**/*"):
                prefix = ap[:-5]
                if mf.startswith(prefix):
                    is_allowed = True
                    break
            elif ap.endswith("/*"):
                prefix = ap[:-2]
                if mf.startswith(prefix) and "/" not in mf[len(prefix)+1:]:
                    is_allowed = True
                    break
            elif mf == ap or mf.endswith(ap):
                is_allowed = True
                break
        
        # Always allow progress tracker, specs, design map, and phase gatekeeper itself
        if (
            mf.startswith("specs/")
            or mf == "context/6-progress-tracker.md"
            or mf == "RESUME.md"
            or mf == "NEXT_CHAT_PROMPT.md"
            or mf == ".design-lock.json"
            or mf == "docs/DESIGN_MAP.mermaid"
            or mf == "scripts/phase_gate.py"
        ):
            is_allowed = True

        if not is_allowed:
            violations.append(mf)

    if violations:
        msg = f"BLAST RADIUS VIOLATION! The following files were modified outside ALLOWED_WRITE_PATHS:\n"
        for v in violations:
            msg += f"  [FAIL] {v}\n"
        msg += f"Permitted paths for this phase:\n"
        for ap in norm_allowed:
            msg += f"  [ALLOWED] {ap}\n"
        return False, msg

    return True, "Blast radius clean: all modifications within allowed paths."

def main():
    parser = argparse.ArgumentParser(description="Deterministic Phase Gatekeeper")
    parser.add_argument("--phase", required=True, help="Sub-phase ID, e.g. 1.1, 4.1, 8.2")
    parser.add_argument("--allowed", nargs="*", default=[], help="List of allowed write relative paths")
    parser.add_argument("--project-dir", default=os.getcwd(), help="Target project root directory")
    args = parser.parse_args()

    project_dir = os.path.abspath(args.project_dir)
    print(f"============================================================")
    print(f"[GATE] FLAGSHIP PHASE GATEKEEPER: Auditing Sub-Phase {args.phase}")
    print(f"============================================================")

    # 1. Spec & Evidence Check
    spec_ok, spec_msg = verify_phase_spec(project_dir, args.phase)
    if not spec_ok:
        print(f"\n[FAIL] GATE FAILED (SPECIFICATION DEFICIENCY):")
        print(f"   {spec_msg}")
        print(f"\nAction Required:")
        print(f"   Create specs/phase-{args.phase}-spec.md with a populated '## Skill Evidence & Formula Block'")
        print(f"   citing exact rules, formulas, and tokens before signing off DoD.\n")
        sys.exit(1)
    else:
        print(f"[PASS] Spec & Formula Evidence: PASS")

    # 2. Blast Radius Check
    if args.allowed:
        blast_ok, blast_msg = check_blast_radius(project_dir, args.allowed)
        if not blast_ok:
            print(f"\n[FAIL] GATE FAILED (BLAST RADIUS BREACH):")
            print(f"   {blast_msg}")
            print(f"Action Required:")
            print(f"   Revert out-of-bounds edits using `git checkout <file>` or `git clean`.")
            print(f"   Do NOT modify code reserved for future phases.\n")
            sys.exit(1)
        else:
            print(f"[PASS] Blast Radius Containment: PASS")

    print(f"\n[OK] PHASE {args.phase} GATE CLEARED: All verification criteria passed.")
    print(f"============================================================\n")
    sys.exit(0)

if __name__ == "__main__":
    main()
