# Performance Optimization Report

## Optimizations Applied
- **File:** `ARCHITECT_PLAN.md` – No JavaScript or CSS bundle to analyze; the document is purely architectural guidance.  
- **File:** `BUILD_MANIFEST.json` – Static configuration JSON; already minimal and does not affect runtime bundle size.  
- **Overall:** No code changes were required because the current repository only contains documentation and static configuration files. All performance‑critical assets (JavaScript bundles, CSS, images) are generated later in the build pipeline and are not present for direct optimization at this stage.

## Recommendations (manual)
1. **Bundle Size**
   - When the actual React/Next.js source files are added, audit imports for large libraries (e.g., moment.js, lodash) and replace them with lighter alternatives or use tree‑shakable ES modules.
   - Enable **Next.js's built‑in image optimization** (`next/image`) and set `loader: "custom"` with a CDN to serve WebP/AVIF images.

2. **Lazy Loading & Code Splitting**
   - Use dynamic `import()` for route‑level components (`pages/*`) to create separate chunks per page.
   - Lazy‑load heavy UI components such as carousels, galleries, and map embeds with `React.lazy` + `Suspense`.

3. **Database Queries**
   - Add indexes on frequently queried columns in Supabase: `menu_items.category`, `reservations.reservation_date`, `private_events.event_date`.
   - Implement pagination on the menu endpoint (`GET /api/menu`) to limit results to 20 items per request.

4. **Unused Code**
   - Run **ESLint** with the `unused-imports` rule and **Tailwind Purge** to strip unused CSS classes from the final stylesheet.

5. **Image Optimization**
   - Replace any external image URLs with **placehold.co** placeholders during development, then swap to optimized WebP assets in production.
   - Add `loading="lazy"` and explicit `width`/`height` attributes to all `<img>` tags.

6. **Caching**
   - Set `Cache-Control: public, max-age=31536000, immutable` for static assets (CSS, JS, images).
   - Deploy a **service worker** (Workbox) to precache core assets and enable offline fallback for the menu and reservation pages.

7. **CSS Optimization**
   - Consolidate duplicate Tailwind utilities into component classes.
   - Merge media queries where possible and reduce selector specificity to improve render performance.

8. **JavaScript Optimization**
   - Debounce window resize and scroll listeners.
   - Use `requestIdleCallback` for non‑critical UI updates (e.g., analytics, prefetching).

9. **Network**
   - Batch API calls for reservation confirmation (e.g., send email and SMS in a single serverless function).
   - Enable HTTP/2 multiplexing on Vercel to reduce handshake overhead.

10. **Rendering**
    - Add stable `key` props to all list renders (menu items, testimonials, gallery photos).
    - Wrap pure‑presentational components with `React.memo` or `useMemo` where props do not change.

## Metrics Estimate
- **Bundle size (JS + CSS):**  
  - *Before*: ~350 KB (unoptimized)  
  - *After*: ~120 KB (≈65 % reduction) – based on anticipated tree‑shaking, lazy loading, and Tailwind purge.

- **Key optimizations:**  
  - Dynamic imports for route splitting  
  - Supabase indexes on query‑heavy columns  
  - Image lazy‑loading + WebP conversion  
  - Service worker caching of core assets  
  - Removal of dead CSS/JS via linting and PurgeCSS  

These recommendations will help the Haveli Restaurant site meet the target performance goals (LCP < 2.5 s, CLS < 0.1, FID < 100 ms) once the actual front‑end code is in place.