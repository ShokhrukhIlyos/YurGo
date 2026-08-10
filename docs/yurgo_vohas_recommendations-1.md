# YurGo / Vohas Restaurant Digitalization Plan

## Overview

This document summarizes the recommendations and ideas discussed for the **YurGo** project and the **Vohas Restaurant** pilot website.

The main idea is to avoid building a large and complicated restaurant system immediately. Instead, start with a simple digital restaurant presentation and menu, collect useful data, prove value to the restaurant, and then gradually add more advanced functionality.

Vohas can serve as the first real pilot and partnership for a much larger YurGo platform focused on restaurants, hotels, taxis, tourism, local experiences, and accommodation in Uzbekistan.

---

# 1. Vohas Website as the First Step

The current Vohas website is a good first version because it is simple and easy for the restaurant to adopt.

The website currently works mainly as:

- Restaurant presentation
- Digital menu
- Restaurant information page
- Contact page
- Instagram connection
- Phone/call connection
- Location/directions access
- Multi-language presentation

For the first stage, this is enough.

There is no need to immediately introduce:

- Online ordering
- Telegram ordering bot
- Payments
- Complex restaurant management
- Staff training
- Complicated admin systems

The goal of the first stage is to prove that the website brings value.

---

# 2. Recommended Pricing Strategy

A reasonable starting price for the current Vohas website is approximately:

**5,000,000 UZS as an initial project price**

This can include:

- Website design
- Development
- Mobile responsiveness
- Digital menu
- Three-language support
- Restaurant information
- Instagram integration
- Call button
- Location links
- Deployment
- Initial setup

Because the restaurant may hesitate to pay a large amount immediately, the monthly-service model may be even better.

---

# 3. Monthly Subscription Model

Instead of selling only a website, YurGo can sell an ongoing digital service.

Possible pricing structure:

## Basic

**Around 400,000–500,000 UZS/month**

Possible inclusions:

- Website hosting
- Technical support
- Small menu updates
- Price updates
- Restaurant information updates
- Basic maintenance
- Analytics
- Domain/server costs included

## Business

**Around 700,000–800,000 UZS/month**

Possible inclusions:

- Everything in Basic
- QR digital menu
- QR tracking
- Customer feedback system
- Restaurant dashboard
- Menu analytics
- Call-click analytics
- Instagram-click analytics
- Location-click analytics
- Customer behavior insights

## Advanced

**Around 1,000,000 UZS/month or more**

Possible future inclusions:

- AI-generated business insights
- Advanced dashboards
- Revenue analytics
- Staff/service analytics
- Ordering features
- Telegram integration
- Payment integrations
- Loyalty programs
- Customer segmentation
- Marketing tools

A small setup fee can also be charged when onboarding a new restaurant.

---

# 4. Why Subscription Is Valuable

A subscription model can be easier for restaurants than a large one-time payment.

For YurGo, it provides:

- Predictable recurring revenue
- Long-term customer relationships
- Continuous data collection
- Easier upselling later
- Easier maintenance
- Ability to improve the product gradually

Infrastructure costs such as servers, domains, hosting, and maintenance can be included inside the monthly subscription instead of explaining each technical cost separately to the restaurant.

---

# 5. Start Without Telegram Ordering

Telegram ordering is useful, but it should not be introduced too early.

If restaurant staff are not requesting an ordering system yet, introducing it may create:

- Extra work
- Staff training
- Operational stress
- Confusion
- More technical support
- Resistance from management

Therefore, the recommended roadmap is:

1. Presentation website
2. Digital menu
3. Analytics
4. QR system
5. Feedback
6. Business dashboard
7. Ordering
8. Payments
9. Automation

Ordering should be added only when actual visitor behavior shows that it would be useful.

---

# 6. QR Digital Menu

One of the strongest ideas is to put a QR code on each table.

Example:

```text
yurgo.uz/vohas/menu?table=12
```

When customers scan the QR code, they can see:

- Food categories
- Food images
- Prices
- Descriptions
- Available languages

No ordering is required initially.

The QR menu replaces or complements paper menus and gives YurGo useful analytics.

---

# 7. Table-Based QR Codes

Using QR codes for tables is better than assigning permanent QR codes to individual waiters.

Tables are stable.

Staff can:

- Change jobs
- Change shifts
- Leave the restaurant
- Move between areas

If QR codes are assigned directly to staff, restaurant management must constantly update and reprint them.

With table QR codes:

- QR codes remain permanent
- Staff changes do not affect the system
- Table behavior can be tracked consistently
- Future ordering can use the same QR code
- Future payments can use the same QR code
- Feedback can be linked to the table

This reduces operational risk.

---

# 8. Customer Feedback System

After eating, customers can use the same QR code to submit feedback.

A simple feedback flow could include:

- 1–5 star rating
- Service rating
- Food rating
- Cleanliness rating
- Speed rating
- Optional comment
- Optional waiter selection

The system should be fast and easy.

Customers should not need to create an account.

---

# 9. Table Feedback vs Waiter Feedback

The recommended model is:

**Primary identifier: Table**

**Optional secondary identifier: Waiter**

For example:

```text
Restaurant: Vohas
Table: 12
Rating: 4
Waiter: Optional
Comment: "Food was great, service was a little slow."
```

Management can later check which waiter served that table during that time.

This is much easier than maintaining a unique physical QR code for every waiter.

---

# 10. Restaurant Dashboard

Restaurant management should have access to a simple dashboard.

Possible metrics:

- Total visitors
- Unique visitors
- QR scans
- Menu views
- Menu category views
- Most viewed dishes
- Call button clicks
- Telegram clicks
- Instagram clicks
- Location/directions clicks
- Feedback count
- Average rating
- Positive comments
- Negative comments
- Popular visit times
- Popular tables

Later the dashboard can also include revenue and ordering information.

---

# 11. Measuring Website Efficiency

The website should be measured based on user actions, not only page views.

Example customer funnel:

```text
1,000 website visitors
    ↓
400 menu views
    ↓
150 location clicks
    ↓
90 phone clicks
    ↓
60 Instagram / Telegram interactions
```

These numbers can show whether the website actually creates customer intent.

Important conversion events include:

- Menu opened
- Menu category clicked
- Food item viewed
- Phone button clicked
- Instagram clicked
- Telegram clicked
- Directions opened
- QR scanned
- Feedback submitted

These metrics become valuable when presenting results to restaurant owners.

---

# 12. Monthly Restaurant Reports

A monthly report can help prove YurGo's value.

Example:

```text
Vohas Monthly Digital Report

Visitors: 3,240
QR scans: 1,120
Menu views: 2,430
Phone clicks: 214
Directions clicks: 387
Instagram clicks: 190

Average rating: 4.6 / 5
Feedback responses: 178
```

The report can later include AI summaries such as:

> Customers particularly liked the food quality and atmosphere.  
> The most common negative feedback was slower service during evening hours.

This helps management make real business decisions.

---

# 13. Revenue Measurement Later

If the restaurant later allows digital selection or ordering, YurGo can estimate or calculate revenue generated from individual tables.

Example:

```text
Table 1: 2,400,000 UZS/month
Table 2: 3,100,000 UZS/month
Table 3: 1,800,000 UZS/month
```

Management could then see:

- Revenue by table
- Revenue by day
- Revenue by hour
- Revenue by waiter
- Average customer bill
- Most profitable menu items

This should be introduced later after the simpler system is proven.

---

# 14. Technical Architecture

The recommended architecture is:

```text
Customer Browser
       ↓
Netlify Frontend
       ↓
YurGo API on VPS
       ↓
PostgreSQL Database
```

Netlify handles:

- Static HTML
- CSS
- JavaScript
- Images
- Fast CDN delivery
- SSL
- Frontend deployment

The VPS handles:

- API
- Authentication
- Feedback
- Analytics
- QR events
- Restaurant data
- Dashboard data
- Future ordering
- Future payments

PostgreSQL stores structured data.

---

# 15. VPS Requirements

At the beginning, YurGo does not need a powerful server.

A VPS costing approximately **$10–20/month** can be enough for:

- Several restaurant websites
- API requests
- Feedback collection
- Analytics
- PostgreSQL
- Small dashboards

A server with approximately:

- 2 CPU cores
- 2–4 GB RAM

can support a significant early-stage workload if the application is optimized.

The system should scale only when real usage requires it.

---

# 16. Using an Existing VPS

If an existing VPS has enough CPU and memory, YurGo services can run on the same machine.

Docker can be used to isolate services.

Example:

```text
VPS
├── nginx
├── yurgo-api
├── postgres
├── analytics-worker
└── admin-dashboard
```

There is no need to buy a separate server for each restaurant.

---

# 17. Frontend Deployment

The current Vohas website can remain on Netlify.

The existing repository structure confirms that the Vohas site is currently a static site using:

- HTML
- CSS
- JavaScript

It does not currently require React.

There is no urgent need to rewrite it.

The frontend can call the YurGo backend API from JavaScript.

Example:

```javascript
fetch("https://api.yurgo.uz/events", {
  method: "POST",
  body: JSON.stringify({
    restaurant_id: "vohas",
    event: "menu_open"
  })
});
```

---

# 18. Backend API

The VPS can act as the central YurGo API service.

FastAPI is a good option.

Possible API structure:

```text
POST /events
POST /feedback
GET  /restaurants
GET  /restaurants/{id}
GET  /restaurants/{id}/menu
GET  /restaurants/{id}/analytics
GET  /restaurants/{id}/feedback
```

Later:

```text
POST /orders
POST /payments
POST /reservations
```

The same API can later serve:

- Web application
- Telegram bot
- Android application
- iOS application
- Restaurant admin dashboard
- Hotel systems
- Taxi systems

---

# 19. Domain Strategy

Using the free Netlify domain is acceptable for development and early testing.

For the final platform, one main YurGo domain is better.

Example:

```text
yurgo.uz
```

Restaurants can then use paths:

```text
yurgo.uz/vohas
yurgo.uz/restaurant-b
yurgo.uz/cafe-c
```

or subdomains:

```text
vohas.yurgo.uz
restaurant-b.yurgo.uz
cafe-c.yurgo.uz
```

A path-based architecture is often simpler for a centralized platform.

If a restaurant later wants its own domain, it can be mapped to the same YurGo system.

---

# 20. Domain and Hosting Costs

Restaurants do not necessarily need to understand:

- VPS
- DNS
- Netlify
- SSL
- Database
- CDN
- Server configuration

These costs can simply be included inside YurGo's monthly subscription.

Example:

```text
Restaurant pays: 800,000 UZS/month

YurGo handles:
- Domain
- Hosting
- VPS
- Maintenance
- Backups
- Updates
- Analytics
```

This makes the offer easier to understand.

---

# 21. YurGo Platform Architecture

Long-term, avoid building a completely separate website for every restaurant.

Instead, build one reusable restaurant application.

Conceptually:

```text
RestaurantPage(restaurantId)
```

Example database:

```text
restaurants
-----------
id
name
slug
address
phone
instagram
latitude
longitude
description

menu_categories
---------------
id
restaurant_id
name

menu_items
----------
id
restaurant_id
category_id
name
description
price
image

tables
------
id
restaurant_id
table_number
qr_token
```

The same frontend can render hundreds of restaurants.

---

# 22. Vohas Should Become a Template

The Vohas site should eventually evolve from:

```text
vohas-site
```

into something like:

```text
restaurant-app
```

Then restaurant data comes from the database.

For example:

```text
yurgo.uz/vohas
```

loads Vohas data.

```text
yurgo.uz/sultan
```

loads another restaurant.

The frontend stays the same.

Only the data changes.

This is the transition from a website-development business into a platform.

---

# 23. YurGo's Bigger Vision

Restaurants are only the first step.

The broader YurGo ecosystem can include:

## Restaurants

- Digital menus
- Reviews
- Analytics
- Ordering
- Reservations
- Payments

## Hotels

- Hotel discovery
- Rooms
- Booking
- Guest feedback
- Local recommendations

## Private Homes

Local users could rent rooms or homes to travelers.

This creates additional income opportunities for residents.

## Taxi Services

Possible future functions:

- Taxi booking
- Route planning
- Airport transfers
- Hotel transfers
- Tourist transportation

## Tourist Attractions

Dataset can include:

- Location
- Description
- Reviews
- Photos
- Opening hours
- Cultural information
- Historical information

---

# 24. AI Travel Agent Vision

Later YurGo can become an AI travel assistant.

A traveler could say:

> I have two days in Termez. I like history and Uzbek food.

The AI could suggest:

- Hotel
- Restaurants
- Tourist attractions
- Transportation
- Schedule
- Estimated budget

Example:

```text
09:00 — Breakfast at Vohas
10:00 — Visit archaeological museum
12:30 — Lunch
14:00 — Sultan Saodat complex
17:00 — Hotel
19:00 — Dinner
```

The AI can use YurGo's structured local dataset.

---

# 25. Restaurant Partnerships

YurGo should aim for partnerships rather than only selling websites.

A restaurant partnership could include:

- Digital presence
- Analytics
- QR menu
- Customer feedback
- Visibility inside YurGo
- Future bookings or orders

Discounts for YurGo users can be discussed but should not be mandatory.

A restaurant can participate without offering discounts.

The relationship itself and shared customer traffic can still provide value.

---

# 26. Build Proof Before Complexity

The strongest strategy is:

```text
Simple product
     ↓
Collect data
     ↓
Show business value
     ↓
Build trust
     ↓
Introduce advanced features
```

Do not build features only because they are technically possible.

Build them when restaurant behavior and customer data demonstrate a real need.

---

# 27. Recommended Development Roadmap

## Phase 1 — Vohas Presentation

- Static website
- Menu
- Images
- Contact
- Instagram
- Location
- Multiple languages

## Phase 2 — Analytics

- Visitor tracking
- Menu tracking
- Call clicks
- Instagram clicks
- Location clicks

## Phase 3 — QR Menu

- QR per table
- Table identifiers
- Menu visits
- Scan analytics

## Phase 4 — Feedback

- Star ratings
- Comments
- Optional waiter
- Table-based feedback

## Phase 5 — Dashboard

- Management dashboard
- Feedback analytics
- Customer behavior
- Monthly reports

## Phase 6 — Dynamic Database

- Restaurants in PostgreSQL
- Menu items in PostgreSQL
- Admin editing
- Reusable restaurant frontend

## Phase 7 — Ordering

- Cart
- Orders
- Telegram notifications
- Restaurant order management

## Phase 8 — Payments

- Click
- Payme
- Other local payment providers

## Phase 9 — YurGo Ecosystem

- Hotels
- Taxi
- Attractions
- Private accommodation
- AI trip planner

---

# 28. Core Business Principle

The most important idea is that YurGo should not position itself as:

> "We build restaurant websites."

Instead, it should eventually position itself as:

> **A digital platform that helps local businesses understand customers, improve service, and connect with travelers.**

The website is only the entry point.

The real long-term product is:

**data + analytics + local discovery + customer experience + partnerships.**

---

# 29. What the QR Menu Milestone Means for the Pitch

The Vohas pilot now has a working full-menu page and 50 printable table QR codes. This is a good moment to think about it not just as a checklist item, but as leverage — this is the artifact that turns "we can build you a website" into a live demo you put in front of the owner.

## Turn the QR codes into the sales moment

A restaurant owner who has heard fifty pitches for "digital menus" will not be impressed by a slide. They will be impressed by:

```text
You hand them a QR card.
They scan it with their own phone.
Their own menu, their own prices, their own dishes appear instantly.
```

That thirty-second demo is worth more than the whole pricing conversation in Section 2. Bring printed cards (Section 6 already describes the `qrcodes-print.html` cut-sheet) to the meeting, put one on the table, and let the owner scan it themselves rather than describing the feature.

## The photo gap is a negotiation lever, not just a task

The 56 dishes currently show stock photos, not Vohas's real plating. Don't rush to fix this quietly — it's an opening to get the restaurant invested:

- Ask the owner/chef to send real photos for even 10–15 signature dishes first. Small ask, fast turnaround, immediate visible improvement they contributed to.
- Once they've supplied photos once, they've participated in building the product — this is the beginning of the "partnership, not vendor" relationship described in Section 25.
- Every dish still on a stock photo is also a subtle, honest way to keep the conversation open ("send us photos and we'll swap them in same day") — a low-friction touchpoint that doesn't require a sales call.

## Reframe the QR system as the analytics hook, not just a menu

Section 10 and 11 talk about analytics as something to add later. The QR codes make that concrete and sellable right now: every scan already carries a table number in the URL (`?t=07`). That is, unprompted, exactly the data model Section 9 describes for feedback and Section 13 describes for revenue-by-table — the hard part (a stable per-table identifier reaching the customer's phone) is already solved.

The pitch to the owner can become:

```text
Today: this QR code shows your menu.
Next month: it also tells you which tables scan most,
what dishes get viewed most, and lets customers rate their visit
without downloading anything.
Same card. No reprinting.
```

That's a much stronger monthly-subscription argument (Section 3, Business tier) than "we'll add analytics eventually" — the QR infrastructure is the thing they're already paying for continuing to pay for, not a new ask.

## Suggested near-term sequencing

Given the menu + QR system exists now, the highest-leverage next moves, roughly in order of "cheapest to add, most useful for the pitch":

1. Basic click/scan tracking wired into the existing QR links before the cards get printed and glued down physically — cheap now, expensive to retrofit later.
2. A lightweight one-page "restaurant sees their own stats" view, even if crude — this is what justifies moving Vohas from a one-time build into the monthly subscription model in Section 3.
3. Real dish photos, sourced from the owner as described above, both to raise menu page quality and as a relationship-building touchpoint.
4. Feedback star-rating on the same table QR (Section 8/9) — natural next ask once the owner has seen scan data and is hungry for more signal.

None of this requires new infrastructure decisions — it's the same VPS/API architecture already described in Sections 14–18, just filled in incrementally against a system that's already live instead of hypothetical.

---

# Final Recommendation

For Vohas, keep the first version simple.

Use the existing website as the pilot.

Add analytics first.

Then add table QR codes.

Then feedback.

Then management dashboards.

Only after the restaurant and customers demonstrate demand should YurGo add ordering, Telegram integration, payments, and larger operational systems.

This approach keeps cost, risk, complexity, and staff training low while allowing YurGo to build a strong real-world dataset and partnership network in Uzbekistan.
