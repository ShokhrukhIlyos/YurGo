---
name: yurgo-tourism-research
description: Research tourism destinations for YurGo in a way any AI agent or developer can reuse. Use when collecting destination data, map coordinates, history, visitor feedback, transport/practical notes, image sources, source links, verification status, or future research tasks for regions, cities, historical places, nature sites, museums, stays, food, and local services.
---

# YurGo Tourism Research Skill

## Purpose

Build reliable, app-ready research notes for YurGo destinations without overclaiming. This guide is written for any AI agent, researcher, or developer working on YurGo, not only Codex.

Capture what the place is, why it matters, where it is, what visitors say, what practical details travelers need, and which sources support the data.

## Core Workflow

1. Define the research scope:
   - Region, city, district, or exact place.
   - Destination category: historical, cultural, pilgrimage, museum, nature, hiking, food, stay, transport, or service.
   - Required output: seed list, detailed dossier, coordinates, map links, image sources, reviews, or full destination page notes.

2. Build a destination list:
   - Start with official tourism/government sources.
   - Add places from maps, review platforms, travel agencies, local articles, UNESCO/heritage pages, and academic sources.
   - Keep alternative names and spellings in Uzbek, Russian, English, and common transliterations.

3. Research each place:
   - History / significance
   - Category and visitor type
   - Coordinates and map links
   - Visitor feedback themes
   - Practical travel notes
   - Safety, access, and etiquette notes
   - Nearby places and route combinations
   - Sources and verification confidence

4. Mark confidence honestly:
   - `high`: multiple reliable sources agree, or a specific coordinate/source is authoritative.
   - `medium`: likely correct, but needs map/local confirmation.
   - `needs verification`: only area-level, search-result, or unclear public info exists.
   - `user-provided`: supplied by the project owner or local contact; still record whether coordinates were extracted.

5. Keep outputs useful for builders:
   - Use tables for coordinates, map links, and source status.
   - Use short bullets for history and feedback.
   - Avoid final marketing copy unless asked.
   - Avoid hard implementation decisions unless the user asks for product/database design.

## Best Source Types

Read `references/source-priority.md` when choosing sources or explaining the research method.

Use sources in this order when available:

1. Official tourism/government pages
2. UNESCO or cultural-heritage inventories
3. Map data and map listings
4. Visitor-review platforms
5. Academic and museum sources
6. Local news and regional tourism updates
7. Travel agency/blog sources
8. Image search and photo platforms

## Map Research

For coordinates:

- Prefer exact map pins from Google Maps, Yandex Maps, OpenStreetMap, Mapcarta, Wikidata, Vici, UNESCO, or user-provided local pins.
- Check for duplicate names. Some places have the same or similar names in different districts.
- Store coordinates as decimal latitude and longitude.
- Create both Google and Yandex links when coordinates are known:

```text
Google: https://www.google.com/maps/search/?api=1&query=<lat>,<lon>
Yandex: https://yandex.com/maps/?ll=<lon>,<lat>&z=16&text=<lat>%2C<lon>
```

For unresolved places, use targeted search links and mark them as `needs verification`.

## Review Research

Collect review data as themes, not copied review dumps.

Good review fields:

- Rating and number of ratings/reviews
- What visitors liked
- What visitors complained about
- Practical tips from visitors
- Whether guides/drivers are recommended
- Best time to visit
- Accessibility, road, heat, crowds, water, and safety notes

Avoid relying on one review as fact. Treat reviews as signals to verify.

## Image Research

Do not copy random internet photos into the repo.

For each place, collect at least four image leads:

- Google Images search link
- Yandex Images search link
- Wikimedia Commons search/category link
- Official tourism, map, review, or heritage page with photos

For final app images, prefer:

- YurGo-owned photos
- Local partner photos with written permission
- Wikimedia Commons photos with compatible license and attribution
- Official tourism images only when reuse permission is clear

Each final image record should include owner, license, source URL, attribution, caption, alt text, and verification status.

## Output Formats

For early research, create Markdown files under `data/`.

Recommended files:

- `<region>-<city>-destinations.md`: seed destination list, categories, coordinates, and map links.
- `<region>-<city>-research-dossier.md`: history, feedback, practical notes, sources.
- `<region>-<city>-image-sources.md`: image leads and licensing notes.

Keep data reusable. Do not bury coordinates, links, or source status inside long prose only.

## Agent Compatibility Notes

Any AI agent using this skill should:

- Cite source URLs for factual claims.
- Separate verified facts from assumptions.
- Avoid copying copyrighted review text or photos.
- Summarize visitor feedback as themes.
- Mark uncertainty clearly.
- Prefer structured outputs that can later become JSON, database rows, or destination pages.
- Keep local/user-provided knowledge separate from internet-sourced facts.

## Future Research Checklist

Before a place becomes public in YurGo, verify:

- Exact pin and entrance point
- Opening hours
- Ticket price
- Current access status
- Road condition and transport options
- Local guide availability
- Safety notes
- Religious/cultural etiquette
- Food, stays, toilets, water, parking
- Photo rights
- Last verified date

## Recommended Next Steps

After the first dossier:

1. Convert destination notes into structured JSON or database-ready records.
2. Collect local photos and permissions.
3. Ask locals/guides to verify pins, prices, and route conditions.
4. Build route bundles such as half-day, full-day, weekend, pilgrimage, family, hiking, and budget routes.
5. Add local providers: drivers, guides, guesthouses, food, and services.
