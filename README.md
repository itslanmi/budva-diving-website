# Budva Diving Center — Official One-Page Booking Website

Responsive one-page booking platform for **Budva Diving Center (Dive in Montenegro, Est. 1994)** built with **React**, **TypeScript**, and **Vite**, featuring modular content data, TrekkSoft booking modal integration, and a pluggable **Google Reviews API** architecture.

## Tech Stack

- **Framework:** React 19 + TypeScript + Vite 6
- **Styling:** Semantic CSS with design tokens (`Montserrat` headings + `Inter` body)
- **Booking Integration:** Modular TrekkSoft modal & URL builder (`src/services/bookingService.ts`)
- **Reviews Integration:** Pluggable Google Places API (New) proxy (`api/reviews.ts`) + typed client adapter (`src/services/reviewsService.ts`) with static fallback
- **CI:** GitHub Actions workflow (`.github/workflows/ci.yml`) running TypeScript checks and production builds

## Project Structure

```text
budva-diving-website/
├── .github/
│   └── workflows/
│       └── ci.yml                 # CI pipeline (typecheck + build)
├── api/
│   └── reviews.ts                 # Serverless Google Places API proxy template
├── public/
│   ├── images/
│   │   ├── activities/            # Web-optimized activity & PADI course photos
│   │   ├── brand/                 # Budva Diving Center logo & PADI 5-Star badge
│   │   └── dive-sites/            # Web-optimized Budva dive site photos
│   └── video/
│       └── ocean-hero.mp4         # Hero section background loop video
├── src/
│   ├── components/
│   │   ├── common/                # BookingModal, FloatingWhatsApp, Icons
│   │   ├── layout/                # TopTrustBar, Header, FooterSection
│   │   └── sections/              # Hero, Experiences, WhyUs, Reviews, DiveSites, FAQ
│   ├── data/                      # Structured site config, courses, dive sites, FAQ, fallback reviews
│   ├── hooks/                     # useGoogleReviews hook
│   ├── services/                  # reviewsService & bookingService
│   ├── styles/                    # tokens.css & global.css
│   └── types/                     # TypeScript interfaces
├── .env.example                   # Environment template for API & booking keys
├── index.html
├── LICENSE
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

```bash
npm install
npm run dev
```

### Available Scripts

- `npm run dev` — Start local Vite development server
- `npm run typecheck` — Run strict TypeScript type-checking (`tsc -b --noEmit`)
- `npm run build` — Type-check and build production bundle into `dist/`
- `npm run preview` — Preview the production build locally

## Connecting Google Reviews API (Optional)

Out of the box, the Reviews section displays curated verified guest reviews from `src/data/fallbackReviews.ts` without requiring any API keys or network calls.

To enable live Google Reviews later (without exposing your API key in the browser):

1. Deploy with a serverless backend (e.g., Vercel, Netlify, or an Express endpoint) exposing `api/reviews.ts` at `/api/reviews`.
2. Set the server-side environment variables:
   - `GOOGLE_PLACES_API_KEY`
   - `GOOGLE_PLACE_ID`
3. Set the frontend environment variable in `.env`:
   - `VITE_REVIEWS_API_URL=/api/reviews`

## Connecting TrekkSoft Live Checkout (Optional)

Set `VITE_TREKKSOFT_MERCHANT_URL` in `.env` to redirect modal submissions directly to your live TrekkSoft checkout gateway.

## Author & License

Published by **Milan Momcilovic ([@itslanmi](https://github.com/itslanmi))** under the [MIT License](./LICENSE).
