
# Project: Haveli Restaurant

## Tech Stack

**Framework:** nextjs-app-router
**State:** zustand
**Styling:** tailwind-shadcn
**Data:** supabase-client
**Auth:** supabase-auth

## Database Schema

**Tables:**
- `reservations` — id, guest_name, guest_email, guest_phone, party_size, reservation_date, reservation_time, special_requests, created_at, status
- `private_events` — id, event_name, client_name, client_email, client_phone, event_date, guest_count, event_type, budget, created_at, status
- `menu_items` — id, category, dish_name, description, price_veg, price_non_veg, is_vegetarian, dietary_labels, image_url, created_at
- `testimonials` — id, guest_name, rating, review_text, review_date, created_at
- `newsletter_subscribers` — id, email, created_at

## API Endpoints

**Reservations:**
- POST /api/reservations — create new reservation
- GET /api/reservations/[id] — fetch reservation by ID

**Private Events:**
- POST /api/private-events — submit event enquiry
- GET /api/private-events/[id] — fetch event details

**Menu:**
- GET /api/menu — fetch all menu items
- GET /api/menu/[category] — filter by category

**Testimonials:**
- GET /api/testimonials — fetch all reviews
- POST /api/testimonials — submit review (client-side rating)

**Newsletter:**
- POST /api/newsletter/subscribe — add email to subscriber list

## Frontend Components / Pages

**Core Pages:**
- index (home/landing) — hero, story intro, featured menu, reservation CTA, testimonials preview
- about-us — full story, chef philosophy, sourcing, family heritage, regional focus
- menu — complete menu with filtering, dietary labels, pricing (veg/non-veg split)
- specialities — signature dishes showcase with heritage narratives
- dining-experience — ambiance description, private dining info, event hosting
- gallery — food photography, ambiance shots, events, behind-the-scenes
- private-events — event enquiry form, types (wedding, corporate, celebration), pricing tiers
- reservations — online booking form with date/time/party size pickers, validation, confirmation
- testimonials — customer reviews, ratings, gallery of guest experiences
- contact — contact form, phone, WhatsApp, email, hours, map embed
- location — Google Maps, directions, parking info, hours table

**Component Library:**
- Header (sticky nav, logo, menu toggle, phone/reservation CTA)
- Footer (hours, location, contact, social links, newsletter signup, legal)
- MenuCard (dish name, description, price, dietary icons, image reveal)
- ReservationForm (date picker, time picker, party size, special requests)
- PrivateEventForm (event type, guest count, budget, date)
- TestimonialCard (guest name, rating stars, quote, date)
- ImageReveal (lazy-loaded food photography with fade-in)
- LocationMap (embedded Google Maps, address, directions button)
- WhatsAppButton (fixed position, phone number link)

## Critical Requirements

1. **Supabase Integration**: Real-time reservations and event enquiries, with email notifications via pg_net or Vercel Functions
2. **Mobile-First Responsive**: Hero, navigation, forms, gallery, map must work flawlessly on all breakpoints (320px–2560px)
3. **Performance**: LCP < 2.5s, CLS < 0.1, FID < 100ms — image optimization, lazy loading, code splitting
4. **Accessibility**: WCAG 2.1 AA — semantic HTML, ARIA labels, color contrast, form validation, keyboard navigation
5. **Premium UX**: Smooth animations (fade-in, parallax, hover lift), food-image reveals, elegant interactions, zero jarring loads

## Complexity Rating

**Complex** — 11-page premium restaurant site with Supabase backend, real-time reservations, menu filtering, multi-step forms, image optimization, Google Maps integration, newsletter system, and rigorous performance/accessibility standards.