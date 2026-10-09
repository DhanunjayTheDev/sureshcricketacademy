# Suresh Cricket Academy

Static marketing website for Suresh Cricket Academy - React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion.

No backend, no database, no admin panel. The registration form and CTAs open a pre-filled WhatsApp message; nothing is submitted to a server.

## Before going live

Replace the placeholder values in [src/constants/config.ts](src/constants/config.ts):

- `CONTACT.whatsappNumber` - real WhatsApp number (digits only, country code first)
- `CONTACT.phoneDisplay` / `phoneHref` - real phone number
- `CONTACT.email`, `CONTACT.address`, `CONTACT.instagram`, `CONTACT.facebook`
- `CONTACT.mapEmbedSrc` - real Google Maps embed URL
- `SITE_CONFIG.url` - the real production domain (also update `public/robots.txt` and `public/sitemap.xml`)
- `SCHEDULE.morning` / `SCHEDULE.evening` in the same file - confirmed batch timings

Other content to swap in once available:

- Real photos in place of the monogram/icon placeholders (`MonogramPortrait`, `PlaceholderTile` components) and gallery images in [src/data/gallery.ts](src/data/gallery.ts)
- Real testimonials in [src/data/testimonials.ts](src/data/testimonials.ts) - currently marked `[Placeholder]`
- `public/og-image.jpg` social share image

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run lint     # oxlint
npm run preview  # preview the production build
```

## Structure

- `src/constants` - single source of truth for contact/site config
- `src/data` - all content (coach bio, programs, FAQ, gallery, testimonials, nav)
- `src/components/ui` - reusable primitives (Button, Section, Reveal, Counter, placeholders)
- `src/components/layout` - navbar, footer, announcement bar, page transitions
- `src/components/sections` - page-specific and shared content sections
- `src/pages` - route-level pages
