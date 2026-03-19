# Franchiseen Landing

Public-facing marketing website for **Franchiseen** — operated by House of Guzarishh FZE LLC, Ajman Free Zone, UAE.

## Purpose
- Stripe activation: provides live privacy policy, terms, and contact info
- App downloads: drives installs of the Franchiseen iOS/Android app

## Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Deployed on Vercel

## Routes
| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/contact` | Contact page |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

### Option B — GitHub Integration
1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click Deploy

No environment variables required.

## Before Going Live
- [ ] Replace `https://apps.apple.com` with the real App Store URL
- [ ] Replace `https://play.google.com` with the real Google Play URL
- [ ] Update `hello@franchiseen.com` with the real contact email
- [ ] Add a real logo to `/public/logo.svg` and update Navbar/Footer
- [ ] Update stats bar numbers as needed
# franchiseen_landing
