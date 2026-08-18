# Validation Report

**Project:** Haveli Restaurant  
**Framework Detected:** `nextjs-app-router`  
**Total Files Scanned:** 6  

## Summary
| Severity | Category               | Count |
|----------|------------------------|-------|
| Critical | framework_violation   | 2 |
| Warning  | missing_package_json  | 1 |

No missing imports or undefined components were found.

## Detailed Issues

```json
[
  {
    "severity": "critical",
    "category": "framework_violation",
    "file": "src/app/page.tsx",
    "line": null,
    "description": "Required page file for Next.js App Router is missing.",
    "suggestion": "Create `src/app/page.tsx` (or `app/page.tsx`) as the entry page."
  },
  {
    "severity": "critical",
    "category": "framework_violation",
    "file": "index.html",
    "line": null,
    "description": "Root-level `index.html` should not exist in a Next.js App Router project.",
    "suggestion": "Remove `index.html` and rely on Next.js page routing."
  },
  {
    "severity": "warning",
    "category": "missing_dep",
    "file": "package.json",
    "line": null,
    "description": "Package manifest not found; cannot verify npm dependencies for imported modules.",
    "suggestion": "Add a `package.json` with required dependencies (e.g., next, react, react-icons)."
  }
]
```

## Notes
- All import statements in the scanned TypeScript/TSX files resolve to existing files.
- All JSX component usages are properly imported or are native HTML elements.
- No prohibited file types (`.svelte`, `.vue`, `.astro`) were detected.