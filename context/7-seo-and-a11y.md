# 7. Technical SEO, GEO Citation Index & Accessibility Audit

> **Target Standard**: WCAG 2.2 AA (4.5:1 Text, 3:1 UI)  
> **Core Web Vitals Target**: LCP < 1.2s, CLS < 0.05, FID/INP < 100ms  

---

## 1. Structured Data (Schema.org JSON-LD)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "vidya-dham-academy",
  "url": "https://vidya-dham-academy.com",
  "description": "High-concept creative digital flagship built with Antigravity Design OS.",
  "publisher": {
    "@type": "Organization",
    "name": "vidya-dham-academy"
  }
}
</script>
```

---

## 2. Heading Hierarchy & ARIA Map
- Exactly **one `<h1>`** on the page (`sec-hero` main title).
- Unbroken heading hierarchy: `<h1>` $\rightarrow$ `<h2>` $\rightarrow$ `<h3>`.
- All icon-only buttons include `aria-label="[Descriptive Action]"`.
- Touch target hit area minimum: $48 \times 48\text{px}$ (exceeds WCAG $44 \times 44\text{px}$).
- Visible keyboard focus rings enabled via `:focus-visible` with 2px offset.

---

## 3. Generative Engine Optimization (GEO) Citations
- Plain-English executive summary embedded in initial HTML DOM.
- Key product definitions tagged with `<dfn>` and semantic `<section>` blocks for AI retrieval agents (Perplexity, SearchGPT, Gemini).
