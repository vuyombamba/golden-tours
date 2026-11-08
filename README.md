# Golden Tours — Website (Gauteng School Excursions & Group Tours)

React + TypeScript + Vite + Tailwind CSS site for Golden Tours.

## What this site is now

This replaces the earlier Western Cape luxury-transport version. Based on the
owner's own notes and the business address (Unit 870, Mogale Junction,
Randfontein), Golden Tours is a **Gauteng-based school excursions and group
tours operator** — school day excursions by subject, multi-day holiday trips,
matric events, leadership/study camps, staff functions, and bus/Gautrain
transport.

## Please confirm before launch

A few details in the owner's notes were ambiguous (handwritten/voice-to-text
shorthand) and were interpreted as the most likely real-world match. Every
one of these is marked `PLACEHOLDER / CONFIRM` in `src/data/content.ts` —
search that file for the phrase to find all of them. In short:

- **Geography excursion** — mine/mining-tour name given as "Mapatiza"
- **Durban trip** — "Umhlanga motions tour" → interpreted as Umhlanga Promenade
- **Mpumalanga trip** — "3 run devours" → interpreted as the Three Rondavels; "Swidella caves" → interpreted as Sudwala Caves
- **Fun Day Fundraiser / Staff Function** — "Herdebious"/"Rdebiuous" resort → interpreted as a Hartbeespoort-area resort; "Little Paris tour" name unconfirmed
- **Matric dinner, option 2** — notes were too fragmentary to reconstruct a venue name
- **Matric dinner, Sun City option** — "Club Enco" afterparty venue and "valley of..." (interpreted as Valley of Waves) need confirming
- **Drug & Awareness Day** — notes mentioned both "bring own lunch" and "lunch included" with a R220 price; the site currently says lunch is included

None of this is presented to site visitors as uncertain — it reads as normal
copy — but you should correct anything above that's wrong before it goes live.

## Also still outstanding

- No logo file changes since last build (still using the uploaded logo).
- Tour/venue photography is still Unsplash stock — swap for real photos.
- The quote form (`src/components/QuoteForm.tsx`) and newsletter signup
  (`src/components/Newsletter.tsx`) both have working UI but **no backend
  connected** — see the `INTEGRATION POINT` comments in each file.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this project to a Git repository.
2. Import it in Vercel — framework preset "Vite" is auto-detected.
3. Build command: `npm run build`, output directory: `dist`.

## Structure

- `src/pages/` — Home, SchoolExcursions, HolidayExcursions, Events, Transport, Gallery, About, Contact, Privacy, Terms
- `src/components/` — Navbar, TopBar, Footer, QuoteForm, QuickEnquiryBar, AnimatedCounter, Newsletter, etc.
- `src/data/content.ts` — all business content in one place; this is where the `PLACEHOLDER / CONFIRM` notes live
