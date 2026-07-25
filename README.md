# Trail— Engagement Invitation

A single-page, luxury handcrafted engagement invitation. React 19 + Vite + Tailwind CSS + Framer Motion. Fully static — no backend, no database, no auth.

## Customize

Everything content-specific (names, date, venue, message) lives in one file:

```
src/config/site.js
```

Edit that file and every section (Hero, Countdown, Event Details, Venue, Calendar link, Invitation Message, Footer) updates automatically.

## Add your music

Drop a short, loopable MP3 at:

```
public/audio/theme.mp3
```

The floating button bottom-right will play/pause it. No autoplay.

## Add real photos

Replace the placeholder URLs in `src/components/Gallery.jsx` with your own images (either hosted, or placed in `public/` and referenced as `/your-image.jpg`).

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo in Vercel.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy — no environment variables needed.

## Structure

```
src/
  components/
    botanical/        hand-drawn SVG motifs (Lotus, LeafBranch, Garland) — the signature visual language
    Hero.jsx
    Countdown.jsx
    EventDetails.jsx
    Venue.jsx
    ReserveDay.jsx     wraps CalendarButton
    CalendarButton.jsx
    Gallery.jsx
    InvitationMessage.jsx
    Footer.jsx
    MusicPlayer.jsx
    SectionDivider.jsx
  config/site.js       single source of truth for all event content
  hooks/useCountdown.js
  utils/calendar.js    builds the "Add to Google Calendar" link via URL params only
  index.css
  App.jsx
  main.jsx
```
