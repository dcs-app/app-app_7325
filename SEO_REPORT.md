# SEO Report for **Haveli Restaurant**

## 1. Meta Tags (to be added to every page `<head>`)

| Page | Title (≈50‑60 chars) | Description (≈150‑160 chars) |
|------|----------------------|--------------------------------|
| Home | Haveli Restaurant – Royal Indian Cuisine & Fine Dining | Experience authentic Indian flavours in a regal haveli setting. Reserve a table or explore our curated menu of classic dishes. |
| About Us | About Haveli Restaurant – Heritage & Hospitality | Discover the story behind Haveli Restaurant, its Rajasthani heritage, family‑run hospitality, and commitment to fresh, regional Indian cuisine. |
| Menu | Haveli Restaurant Menu – Starters to Signature Dishes | Browse our extensive menu: starters, tandoor, curries, biryanis, breads, desserts & chef’s signatures like Rogan Josh and Dal Makhani. |
| Reservations | Online Table Reservations – Haveli Restaurant | Book your table instantly with date, time, and party‑size selectors. Enjoy a royal dining experience at Haveli Restaurant. |
| Contact / Location | Contact Haveli Restaurant – Phone, WhatsApp & Map | Get in touch, view opening hours, and find us on Google Maps. Call, WhatsApp or email for enquiries and private events. |

**Common tags for every page**

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://www.haveli-restaurant.com{{PAGE_PATH}}">
```

## 2. Open Graph & Twitter Card Tags

Add the following to each page (replace `{{PAGE_TITLE}}`, `{{PAGE_DESCRIPTION}}`, `{{PAGE_URL}}`, and `{{IMAGE_URL}}` accordingly).

```html
<!-- Open Graph -->
<meta property="og:title" content="{{PAGE_TITLE}} | Haveli Restaurant">
<meta property="og:description" content="{{PAGE_DESCRIPTION}}">
<meta property="og:type" content="website">
<meta property="og:url" content="{{PAGE_URL}}">
<meta property="og:image" content="{{IMAGE_URL}}">
<meta property="og:image:alt" content="Haveli Restaurant – {{PAGE_TITLE}}">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{PAGE_TITLE}} | Haveli Restaurant">
<meta name="twitter:description" content="{{PAGE_DESCRIPTION}}">
<meta name="twitter:image" content="{{IMAGE_URL}}">
<meta name="twitter:site" content="@HaveliRestaurant">
<meta name="twitter:creator" content="@HaveliRestaurant">
```

**Suggested default image** (use a high‑resolution hero shot of the restaurant interior):  
`https://placehold.co/1200x630/131921/FF9900?text=Haveli+Restaurant+Royal+Dining`

## 3. Structured Data (JSON‑LD)

### a. Organization / LocalBusiness (on every page)

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Haveli Restaurant",
  "url": "https://www.haveli-restaurant.com",
  "logo": "https://placehold.co/400x300/FF9900/white?text=Haveli+Logo",
  "image": "https://placehold.co/1200x630/131921/FF9900?text=Haveli+Restaurant+Exterior",
  "telephone": "+1-555-123-4567",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Royal Avenue",
    "addressLocality": "Cityville",
    "addressRegion": "State",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "servesCuisine": ["Indian", "Rajasthani"],
  "priceRange": "$$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "11:00",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "12:00",
      "closes": "22:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/HaveliRestaurant",
    "https://www.instagram.com/HaveliRestaurant",
    "https://www.twitter.com/HaveliRestaurant"
  ]
}
```

### b. BreadcrumbList (on each page)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.haveli-restaurant.com/index.html"
    }{{#if NOT_HOME}},
    {
      "@type": "ListItem",
      "position": 2,
      "name": "{{PAGE_NAME}}",
      "item": "https://www.haveli-restaurant.com/{{PAGE_SLUG}}.html"
    }{{/if}}
  ]
}
```

### c. MenuItem (on the Menu page)

For each dish, output a `MenuItem` object. Example for **Butter Chicken**:

```json
{
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Butter Chicken",
  "description": "Tender chicken cooked in a creamy tomato‑based sauce with aromatic spices.",
  "offers": {
    "@type": "Offer",
    "price": "22.00",
    "priceCurrency": "GBP"
  },
  "nutrition": {
    "@type": "NutritionInformation",
    "calories": "450 kcal"
  }
}
```

Generate similar objects for all 20+ dishes (minimum 5 per category) and embed them in the `<script type="application/ld+json">` block on the Menu page.

## 4. Semantic HTML Recommendations

| Element | Recommendation |
|---------|----------------|
| `<header>` | Keep a single sticky header with the logo and navigation. Use `<nav>` inside it. |
| `<main>` | Wrap the primary page content in `<main>` for accessibility and SEO. |
| Headings | Use a proper hierarchy: `<h1>` for page title, `<h2>` for section titles (e.g., “Our Story”, “Starters”), `<h3>` for sub‑sections. |
| `<section>` | Group related content (e.g., hero, story, menu highlights) inside `<section>` with an appropriate `aria-label`. |
| `<article>` | Use for individual blog posts or testimonial entries. |
| `<footer>` | Single `<footer>` containing contact info, opening hours, social links, and newsletter signup. |
| Images | Add descriptive `alt` attributes (e.g., `alt="Butter Chicken – creamy tomato sauce"`). Use `loading="lazy"` for non‑critical images. |
| Forms | Include `label` elements linked via `for`/`id`, use `aria-required="true"` where needed, and provide clear error messages. |
| Buttons/Links | Ensure clickable elements have a minimum touch target of 44 × 44 px. |

## 5. URL Structure & Clean URLs

- Use **static HTML** with clean URLs (e.g., `/menu.html`, `/reservations.html`).  
- Avoid query strings for primary navigation; only use them for filtered views (e.g., `/menu.html?category=starters`).  
- Ensure each URL returns a **200 OK** response and includes a canonical tag.

## 6. Performance & Accessibility Tips

1. **Images** – Replace placeholder images with optimized WebP/AVIF files; serve responsive `srcset`.  
2. **Critical CSS** – Inline above‑the‑fold styles for header, hero, and navigation to reduce render‑blocking.  
3. **Lazy‑load** – Use `loading="lazy"` for gallery and menu images.  
4. **ARIA** – Add `role="navigation"` to `<nav>`, `role="region"` with `aria-label` for major sections.  
5. **Contrast** – Verify that text over sandstone or maroon backgrounds meets WCAG AA contrast (≥4.5:1).  
6. **Keyboard Navigation** – Ensure dropdown menus are accessible via `Tab` and `Enter` keys.

## 7. Social Media & Sharing

- Add **Open Graph** image dimensions of **1200 × 630 px** for optimal display on Facebook/LinkedIn.  
- Provide a **Twitter Card** image of **800 × 418 px**.  
- Include `og:locale` (`en_US`) and `og:site_name` (`Haveli Restaurant`).  

## 8. Sitemap & Robots.txt (already generated)

- The `sitemap.xml` lists all primary pages and is referenced in `robots.txt`.  
- Ensure the sitemap is updated whenever a new page is added.

## 9. Next Steps for Front‑End Team

1. Insert the meta, Open Graph, and Twitter tags into each page’s `<head>`.  
2. Embed the JSON‑LD scripts (Organization, BreadcrumbList, MenuItem) where appropriate.  
3. Apply the semantic HTML structure and accessibility attributes as outlined.  
4. Verify the site with **Google Rich Results Test** and **Lighthouse** (SEO, Performance, Accessibility).  
5. Submit the sitemap to Google Search Console and Bing Webmaster Tools.