# Surkhandarya / Termez Destination Seed Data

This file is an early research dataset for YurGo. It focuses first on Termez and the Surkhandarya region, especially historical, cultural, pilgrimage, archaeological, and nature places that tourists and local people may want to visit.

The data should be treated as a starting point for product planning and future content work. Before publishing in the app, each place should be verified with local sources, maps, opening hours, road conditions, ticket rules, contact details, and recent visitor information.

## Location Research Status

Updated: 2026-08-10

This table records the best coordinates found so far. Use `high` when multiple map/open-data sources agree or a source gives a specific monument coordinate. Use `medium` when the location is likely correct but should still be checked on Google/Yandex/OSM. Use `needs verification` when only an address, village, route, or area-level location was found.

| # | Place | Latitude | Longitude | Confidence | Notes |
|---|---:|---:|---:|---|---|
| 1 | Termez Archaeological Museum | 37.244270 | 67.282650 | high | Address also appears as Imom at-Termiziy Street 29A. |
| 2 | Surkhandarya Regional Museum of Local Lore | TBD | TBD | user-provided pin | Public sources confirm address: Termez, 1 Festivalnaya Street. User-provided Google Maps pin: https://maps.app.goo.gl/ncS5d7cyoefdPXHYA. Coordinates still need extraction from the pin. |
| 3 | Sultan Saodat Complex | 37.263110 | 67.309400 | high | Also spelled Sulton-Saodat. |
| 4 | Hakim at-Termizi Complex | 37.265870 | 67.189200 | high | Also spelled Al-Hakim at-Termiziy / Hakim At-Termiziy maqbarasi. |
| 5 | Fayaztepa Buddhist Temple Complex | 37.286389 | 67.188056 | high | DMS source: 37°17'11"N, 67°11'17"E. |
| 6 | Karatepa Buddhist Temple Complex | 37.278840 | 67.183150 | high | Also spelled Kara Tepe / Qoratepa. |
| 7 | Kyrk-Kyz / Kirk-Kiz Fortress | 37.266868 | 67.290251 | high | Also spelled Qirq-Qiz / Qirqqiz. |
| 8 | Kokildor-Ota Khanaka | 37.260390 | 67.298580 | high | Also spelled Kokildor Khanaka / Kokildor ota xonaqosi. |
| 9 | Mausoleum of Sayid Waqqas | TBD | TBD | needs verification | Public tourism source describes it near Bug village and the Hakim at-Termizi area, but an exact public coordinate was not confirmed. |
| 10 | Kampyrtepa Fortress | 37.410344 | 67.027841 | medium | Use this for the archaeological site near Termez, not the separate mountain hamlet named Kampirtepa farther west. Needs local confirmation before app release. |
| 11 | Dalverzintepa Settlement | 38.099710 | 67.860890 | high | Also spelled Dalverzin Tepe / Dalvarzintepa. User-provided Google Maps pin: https://maps.app.goo.gl/nZyMN9mLkoHtF5HV8. |
| 12 | Ayrtam / Ayritam Archaeological Site | TBD | TBD | needs verification | Official source places it about 18 km east of Termez along the Amu Darya. Exact visible visitor point still needs confirmation. |
| 13 | Zurmala Tower / Zurmala Stupa | 37.263947 | 67.232300 | high | Also appears as Zurmala tepaligi / Zurmala Mortar. |
| 14 | Jarkurgan Minaret | 37.476630 | 67.396280 | high | Also spelled Jarqo'rg'on minorasi; village Minor near Jarkurgan. |
| 15 | Bridge of Alexander / Gisht-Kuprik | TBD | TBD | needs verification | Public tourism source places it near the M41 highway in Kumkurgan district; exact stop point still needs confirmation. |
| 16 | Zarautsay Petroglyphs | 39.250000 | 66.666667 | medium | UNESCO gives area coordinate N39 15 E66 40; exact grotto visitor point should be verified locally. |
| 17 | Teshik-Tash Cave | 37.965800 | 67.156400 | high | Also spelled Teshik-Tosh / Teshik-Tash. |
| 18 | Syrob Plane Tree | TBD | TBD | needs verification | Known around Sayrob/Syrob area in Baysun district; exact visitor point needs confirmation. |
| 19 | Baysun / Boysun Cultural Area | 38.206100 | 67.198600 | medium | This is an area/city-level coordinate for Boysun, not a single attraction. Specific villages and event venues should be added separately. |
| 20 | Termez Ethno-Town | 37.227940 | 67.275068 | user-provided exact | User-provided coordinate and Yandex map link: https://yandex.uz/maps/-/CTS1NKjR. |
| 21 | Khodjaikon Salt Cave | 37.582560 | 66.547290 | high | Also spelled Xo'jaikon tuz g'ori / Khojaikon Salt Cave. |
| 22 | Khoja Gur Gur Ota | 38.466670 | 67.400000 | medium | Mountain/massif coordinate; exact trailhead and shrine/spring points should be collected separately. |
| 23 | Topalang Reservoir | 38.640700 | 67.809700 | high | Also spelled To'palang / Tupalang / To'polon suv ombori. User-provided Google Maps pin: https://maps.app.goo.gl/8fwgzH8ss2bpGzVdA. App should store reservoir area plus best viewpoints separately. |
| 24 | Sangardak Waterfall | 38.534860 | 67.565230 | high | Also spelled Sangardak sharsharasi. |
| 25 | Hojaipok | TBD | TBD | needs verification | Known as cave/spring/pilgrimage-health site at the foot of Mount Kenagi; exact coordinate needs local confirmation. |
| 26 | Panjob Gorge | 37.996740 | 67.035990 | medium | Stream/gorge area coordinate; exact trail start near Yukary-Panjob should be collected. |
| 27 | Kyzyl Canyon | TBD | TBD | needs verification | Known near Baysun; exact public coordinate was not confirmed. |
| 28 | Surkhan State Nature Reserve | TBD | TBD | needs verification | Protected area has multiple sections; app should store visitor entrance/permit office and allowed route coordinates, not only a center point. |

## Map Link Format

For quick checking, paste coordinates into a browser map in this format:

```text
https://www.google.com/maps/search/?api=1&query=37.263110,67.309400
```

## Region Overview

- Region: Surkhandarya
- Main city for first launch: Termez
- Tourism themes:
  - Ancient civilizations
  - Buddhist heritage
  - Islamic pilgrimage sites
  - Fortresses and archaeological ruins
  - Museums
  - Mountain and nature tourism
  - Local culture, food, and traditional life
- Suggested YurGo positioning: "Ancient Termez and the southern gateway of Uzbekistan"

Surkhandarya is the southernmost region of Uzbekistan. Termez is one of the oldest cities in Central Asia and is strongly connected with Buddhist, Zoroastrian, Islamic, Silk Road, Kushan, and Greco-Bactrian history.

## Priority Destination List

### 1. Termez Archaeological Museum

- Type: Museum / history / archaeology
- Location area: Termez
- Why it matters: One of the most important places to understand ancient Termez, Buddhist heritage, Kushan history, and archaeological discoveries from the region.
- Tourist value: High
- Local visitor value: High
- Good for:
  - Foreign tourists
  - Students
  - History lovers
  - Families
- YurGo content needed:
  - Opening hours
  - Ticket price
  - Address
  - Languages available
  - Best nearby destinations to combine with it

### 2. Surkhandarya Regional Museum of Local Lore

- Type: Museum / local history / culture
- Location area: Termez
- Known address: 1 Festivalnaya Street, Termez
- Why it matters: Presents the region's history, ethnography, art, folk culture, nature, coins, jewelry, clay objects, and other local heritage.
- Tourist value: Medium to high
- Local visitor value: High
- Good for:
  - People who want regional background before visiting ancient sites
  - Students
  - Families
  - Cultural tourists
- YurGo content needed:
  - Opening hours
  - Ticket price
  - Updated address/map pin
  - Photo permissions
  - Recommended visit duration

### 3. Sultan Saodat Complex

- Type: Islamic architecture / mausoleum complex / pilgrimage
- Location area: Outskirts of Termez
- Period: Main mausoleum complex from around the 12th century, with later additions
- Why it matters: Memorial complex connected with the Termez Seyyids, considered descendants of the Prophet Muhammad.
- Tourist value: High
- Local visitor value: High
- Good for:
  - Pilgrimage visitors
  - Architecture lovers
  - Cultural tourists
  - Local families
- YurGo content needed:
  - Exact map location
  - Dress and etiquette notes
  - Entrance rules
  - Best time of day
  - Nearby places

### 4. Hakim at-Termizi Complex

- Type: Islamic pilgrimage / mausoleum / historical complex
- Location area: Old Termez area
- Why it matters: Sacred complex associated with Abu Abdulloh Ibn Hasan Ibn Bashir al-Hakimi at-Termizi, known locally as Termez-ota.
- Related nearby features:
  - Ancient cave structures / chillahona
  - Old Termez ruins
  - Museum of Termez history
- Tourist value: High
- Local visitor value: High
- Good for:
  - Pilgrimage visitors
  - Islamic history visitors
  - Cultural tourists
- YurGo content needed:
  - Etiquette guidance
  - Exact entrance information
  - Whether guided explanation is available
  - Recommended combined route with Old Termez and Buddhist sites

### 5. Fayaztepa Buddhist Temple Complex

- Type: Buddhist archaeological site / temple-monastery complex
- Location area: Old Termez
- Period: 1st century BC to 3rd century AD
- Why it matters: One of the most important Buddhist monuments in Uzbekistan, connected with the Kushan-era history of Termez.
- Tourist value: High
- Local visitor value: Medium to high
- Good for:
  - Foreign tourists
  - Archaeology lovers
  - Buddhist heritage travelers
  - History students
- YurGo content needed:
  - Exact map pin
  - Ticket or access rules
  - Road/access condition
  - Best time to visit
  - Explanation of Buddhist history in simple language

### 6. Karatepa Buddhist Temple Complex

- Type: Buddhist archaeological site / cave and temple complex
- Location area: Northeastern part of Old Termez
- Period: Started around the 1st century AD; flourished in the 2nd-3rd centuries AD
- Why it matters: Large Buddhist temple complex built across natural ridges, showing Termez's deep Buddhist past.
- Tourist value: High
- Local visitor value: Medium
- Good for:
  - Archaeology tourists
  - Buddhist history visitors
  - Silk Road history travelers
- YurGo content needed:
  - Access restrictions if any
  - Border/security zone considerations if relevant
  - Exact route from Termez center
  - Guide availability

### 7. Kyrk-Kyz / Kirk-Kiz Fortress

- Type: Fortress / medieval architecture / legend site
- Location area: Termez district, near Old Termez
- Period: 9th-10th centuries
- Why it matters: Ruined fortress or palace-like structure with a strong local legend connected to "forty girls."
- Tourist value: High
- Local visitor value: High
- Good for:
  - Photography
  - History visitors
  - Local family trips
  - Storytelling and legends
- YurGo content needed:
  - Best photo angles
  - Safety notes around ruins
  - Whether restoration work affects access
  - Short version of local legend

### 8. Kokildor-Ota Khanaka

- Type: Khanaka / Islamic architecture / sacred site
- Location area: Termez
- Period: Around the 11th century, with later reconstruction
- Why it matters: Revered Muslim site with unusual architecture and layout.
- Tourist value: Medium to high
- Local visitor value: High
- Good for:
  - Pilgrimage visitors
  - Architecture visitors
  - Local cultural routes
- YurGo content needed:
  - Exact map location
  - Etiquette notes
  - Visit duration
  - Connection with nearby Termez sites

### 9. Mausoleum of Sayid Waqqas

- Type: Mausoleum / pilgrimage / historical religious site
- Location area: Near Termez area; exact local village/location needs verification
- Why it matters: Associated with Abdullah Sayid Waqqas at-Termizi and local religious history.
- Tourist value: Medium
- Local visitor value: High
- Good for:
  - Pilgrimage visitors
  - Local visitors
  - Religious history routes
- YurGo content needed:
  - Exact map pin
  - Local name variants
  - Access notes
  - Etiquette notes

### 10. Kampyrtepa Fortress

- Type: Ancient city / fortress / archaeological site
- Location area: About 30 km from Termez, near the Amu Darya
- Period: Ancient Bactrian / Hellenistic / Kushan layers
- Why it matters: Identified by researchers as ancient Alexandria on the Oxus, connected with Alexander the Great.
- Tourist value: High
- Local visitor value: Medium to high
- Good for:
  - Foreign tourists
  - Archaeology lovers
  - Silk Road and Alexander history visitors
- YurGo content needed:
  - Road condition
  - Public transport availability
  - Driver/taxi estimate from Termez
  - Ticket/access rules
  - Guide recommendation

### 11. Dalverzintepa Settlement

- Type: Ancient settlement / Kushan archaeology
- Location area: Shurchi district, around 60 km from Termez
- Period: Kushan Empire, 1st-4th centuries AD
- Why it matters: Major Kushan-era site where important finds were discovered, including a large gold treasure and ancient chess pieces.
- Tourist value: High
- Local visitor value: Medium
- Good for:
  - Archaeology tourists
  - History researchers
  - Long day trips from Termez
- YurGo content needed:
  - Exact route
  - Road and access information
  - Whether site has guides or signage
  - Recommended pairing with nearby district destinations

### 12. Ayrtam / Ayritam Archaeological Site

- Type: Buddhist archaeological site / ancient city-fort
- Location area: About 18 km east of Termez
- Period: 1st-3rd centuries AD
- Why it matters: Known for the Ayrtam frieze fragments showing musicians and Buddhist-influenced art from the Kushan period.
- Tourist value: Medium to high
- Local visitor value: Medium
- Good for:
  - Archaeology visitors
  - Buddhist heritage travelers
  - Museum-linked routes
- YurGo content needed:
  - Exact access status
  - Whether visible remains are visitor-friendly
  - Museum connection for original artifacts

### 13. Zurmala Tower / Zurmala Stupa

- Type: Buddhist stupa / archaeological monument
- Location area: Near Old Termez
- Period: Kushan-era Buddhist heritage
- Why it matters: One of the visible Buddhist monuments around Termez and a useful stop in an Old Termez heritage route.
- Tourist value: Medium to high
- Local visitor value: Medium
- Good for:
  - Buddhist heritage route
  - Archaeology route
  - Short stop near other Old Termez sites
- YurGo content needed:
  - Exact map pin
  - Current preservation/access status
  - Simple historical explanation
  - Nearby route combination

### 14. Jarkurgan Minaret

- Type: Minaret / Islamic architecture
- Location area: Jarkurgan district, village of Minor; between Kumkurgan and Termez
- Period: Built in 1109 by order of Sultan Sanjar
- Why it matters: Distinctive 12th-century minaret known for decorative brickwork and semi-column design.
- Tourist value: High
- Local visitor value: High
- Good for:
  - Architecture lovers
  - Photography
  - Cultural routes outside Termez
- YurGo content needed:
  - Travel time from Termez
  - Road condition
  - Public transport/driver options
  - Best photo time

### 15. Bridge of Alexander / Gisht-Kuprik

- Type: Historical bridge / aqueduct / legend site
- Location area: Kumkurgan district, near M41 highway
- Period: Built in the 16th century; connected by local legend with Alexander the Great
- Why it matters: Historical crossing/aqueduct site on an old trade route.
- Tourist value: Medium
- Local visitor value: Medium
- Good for:
  - Road-trip stop
  - History and legend content
  - Routes between Termez and mountain areas
- YurGo content needed:
  - Exact map location
  - Safety for stopping near highway
  - Best route pairing

### 16. Zarautsay Petroglyphs

- Type: Rock paintings / archaeology / nature
- Location area: Sherabad district, Kugitang mountains
- Why it matters: Ancient rock carvings showing hunting scenes, animals, tools, and masked human figures.
- Tourist value: High for special-interest visitors
- Local visitor value: Medium
- Good for:
  - Archaeology visitors
  - Hiking/nature travelers
  - Researchers
- YurGo content needed:
  - Permit/access requirements
  - Guide requirement
  - Difficulty level
  - Road and hiking information
  - Preservation rules

### 17. Teshik-Tash Cave

- Type: Archaeological cave / nature / prehistoric site
- Location area: Baysuntau mountains
- Elevation: Around 1550 meters above sea level
- Why it matters: Famous for Mousterian culture and the burial of a Neanderthal child; thousands of stone tools were found there.
- Tourist value: High for history/nature travelers
- Local visitor value: Medium
- Good for:
  - Archaeology travelers
  - Hiking visitors
  - Educational trips
- YurGo content needed:
  - Access route
  - Hiking difficulty
  - Guide requirement
  - Safety notes
  - Best season

### 18. Syrob Plane Tree

- Type: Natural monument / local shrine / cultural stop
- Location area: Baysun district area; exact map pin needs verification
- Why it matters: Very old plane tree with a hollow trunk and local cultural significance.
- Tourist value: Medium
- Local visitor value: High
- Good for:
  - Cultural stops
  - Family trips
  - Local stories
- YurGo content needed:
  - Exact location
  - Local etiquette
  - Whether mini-museum is active
  - Best route pairing

### 19. Baysun / Boysun Cultural Area

- Type: Cultural region / intangible heritage / mountains
- Location area: Baysun district
- Why it matters: Known for distinctive traditions, folklore, crafts, music, and mountain culture. Baysun culture is internationally recognized through UNESCO intangible heritage context.
- Tourist value: High
- Local visitor value: High
- Good for:
  - Cultural tourists
  - Festival visitors
  - Mountain/nature travelers
  - Ethno-tourism
- YurGo content needed:
  - Main villages and sites
  - Festival calendar
  - Local homestays
  - Local guides
  - Food and crafts

### 20. Termez Ethno-Town

- Type: Cultural complex / crafts / food / family recreation
- Location area: Termez
- Status: Newer tourism complex
- Why it matters: Cultural and recreational space presenting Surkhandarya history, crafts, bakhshi art, national cuisine, workshops, and family visitor infrastructure.
- Tourist value: Medium to high
- Local visitor value: High
- Good for:
  - Families
  - Cultural tourists
  - Food and craft visitors
  - Evening walks if open
- YurGo content needed:
  - Opening status
  - Opening hours
  - Ticket/entry rules
  - Restaurant information
  - Crafts/workshop schedule

## Nature And Health Tourism Additions

These are not all historical places, but they are important for Surkhandarya tourism and should be included in the YurGo region dataset.

### 21. Khodjaikon Salt Cave

- Type: Salt cave / health tourism / nature
- Location area: Sherabad district
- Elevation: Around 1200 meters above sea level
- Why it matters: Known for speleotherapy and sanatorium-style treatment.
- YurGo content needed:
  - Medical/health disclaimer
  - Booking/contact details
  - Treatment schedule
  - Access route

### 22. Khoja Gur Gur Ota

- Type: Mountain massif / shrine / hiking / nature
- Location area: Baysun mountains
- Why it matters: Dramatic mountain area with cliffs, canyons, caves, shrine, and spring.
- YurGo content needed:
  - Hiking difficulty
  - Guide requirement
  - Safety warnings
  - Best season
  - Transport options

### 23. Topalang Reservoir

- Type: Reservoir / nature / scenic area
- Location area: Sariosiyo district
- Why it matters: Attractive natural area connected with the Topalang river and mountain landscapes.
- YurGo content needed:
  - Swimming/safety rules
  - Best viewpoints
  - Picnic rules
  - Transport options

### 24. Sangardak Waterfall

- Type: Waterfall / nature / mountain trip
- Location area: Sariosiyo district
- Distance note: Around 205 km from Termez according to official tourism content
- Why it matters: One of the most beautiful natural sites in the region.
- YurGo content needed:
  - Travel time from Termez
  - Road condition
  - Best season
  - Safety near water/rocks
  - Local guide/driver options

### 25. Hojaipok

- Type: Cave / spring / pilgrimage / health tourism
- Location area: At the foot of Mount Kenagi
- Why it matters: Cave and healing spring with local pilgrimage value.
- YurGo content needed:
  - Exact location
  - Access difficulty
  - Safety notes
  - Etiquette notes

### 26. Panjob Gorge

- Type: Gorge / canyon / nature
- Location area: Kugitang Tau foothills, about 125 km northwest of Termez
- Why it matters: Narrow limestone, gypsum, and rock-salt canyon with high vertical cliffs.
- YurGo content needed:
  - Hiking/access route
  - Safety notes
  - Guide requirement
  - Best season

### 27. Kyzyl Canyon

- Type: Canyon / nature / scenic route
- Location area: Near Baysun
- Why it matters: Red canyon landscape and scenic labyrinth-like terrain.
- YurGo content needed:
  - Exact map pin
  - Access route
  - Best photo spots
  - Safety notes

### 28. Surkhan State Nature Reserve

- Type: Nature reserve / protected area / wildlife
- Location area: Sherabad and Termez districts
- Why it matters: Protected area with rare plants, birds, mammals, reptiles, and mountain landscapes.
- YurGo content needed:
  - Visitor access rules
  - Permit requirements
  - Allowed routes
  - Conservation rules

## Suggested Termez Historical Route

This is an early route idea for YurGo itinerary planning.

### Half-Day Termez Heritage Route

1. Termez Archaeological Museum
2. Sultan Saodat Complex
3. Hakim at-Termizi Complex
4. Kyrk-Kyz Fortress
5. Fayaztepa or Zurmala Stupa if access and timing allow

### Full-Day Ancient Termez Route

1. Termez Archaeological Museum
2. Fayaztepa Buddhist Temple Complex
3. Karatepa Buddhist Temple Complex
4. Zurmala Stupa
5. Hakim at-Termizi Complex
6. Kyrk-Kyz Fortress
7. Sultan Saodat Complex

### Day Trip From Termez

1. Kampyrtepa Fortress
2. Ayrtam Archaeological Site
3. Jarkurgan Minaret
4. Bridge of Alexander / Gisht-Kuprik if route allows

## Data Fields YurGo Should Collect For Each Place

- Place name
- Alternative names and spellings
- Category
- Region
- District/city
- Exact address
- Latitude and longitude
- Short description
- Detailed description
- Historical period
- Why it matters
- Best for visitor types
- Estimated visit duration
- Best season/time of day
- Entrance fee
- Opening hours
- Contact phone or official contact
- Official website or reference source
- Photos
- Transport from Termez
- Transport from nearest town
- Public transport availability
- Taxi/driver estimated cost
- Rental car suitability
- Road condition
- Parking availability
- Accessibility notes
- Safety notes
- Cultural/religious etiquette
- Nearby food
- Nearby stays
- Nearby services
- Suggested route combinations
- Verification status
- Last verified date

## Verification Checklist

Before any place appears in the public YurGo app, verify:

- The exact map pin is correct.
- The place is open to visitors.
- The road is safe and accessible for normal travelers.
- Ticket prices and opening hours are current.
- Photo usage rights are clear.
- Religious/cultural etiquette notes are correct.
- Any border-zone, protected-area, or permit restrictions are understood.
- Local names and spelling variants are included for search.
- At least one local source or recent visitor source confirms the information.

## Initial Sources

- Uzbekistan Travel: Surkhandarya region overview
- Uzbekistan Travel: Termez city overview
- Uzbekistan Travel: "To the South: 20 historical and natural monuments of magic Surkhandarya"
- Uzbekistan Travel: "Archaeological sites of Surkhandarya"
- Uzbekistan Travel: "Surkhandarya - the cradle of ancient civilizations"
- Government tourism news: Surkhandarya tourism development updates
- President.uz: Termez Ethno-town visit and description
- Mapcarta / OpenStreetMap-derived pages for monument coordinates where available
- Wikidata / Wikimedia Commons for heritage-site coordinates where available
- Vici.org for archaeological-site coordinates where available
- UNESCO tentative-list pages for heritage-area coordinates where available
- Grottomap and related open references for cave coordinates where available
