# Hotel De' Papi — Booking & Nightlife Platform

A full-stack booking site for Hotel De' Papi (Ughelli North, Delta State): a
hotel/short-let apartment business with an attached nightlife club. This is
**Stage 1: project foundation + homepage**.

## Stack

- **Next.js 14 (App Router) + TypeScript** — one codebase serves both the
  customer site and the admin dashboard, with API routes doing backend work.
  No separate backend server to deploy or keep in sync.
- **Tailwind CSS** — utility-first styling, fast to keep consistent across a
  large multi-page app (homepage, room pages, club pages, admin screens).
- **Prisma + PostgreSQL** (SQLite locally) — a real relational database.
  Schema is already sketched in `prisma/schema.prisma` (rooms, bookings,
  customers, club events, VIP tables, admins) as the plan for Stage 5.
- **NextAuth.js** (Stage 6) — secure session-based login for the admin
  dashboard, separate from customer accounts.
- **Paystack** (Stage 7) — Nigerian card, bank transfer, and USSD payments.
  The `Booking` and `TableReservation` models already have `paystackRef`
  and `paymentStatus` fields reserved for this.
- **Cloudinary or S3-compatible storage** (Stage 8) — for admin-uploaded
  room and event photos, rather than storing images in the database.

Why this stack: it is the fastest path to a real, deployable full-stack app
(not a static site) while staying inside a single, well-documented framework.
Next.js deploys cleanly to Vercel; Prisma/Postgres can run on Neon, Supabase,
or Railway — all of which have free tiers suitable for a small Nigerian
business, and all support scaling up later.

## What's built in this stage

- Project scaffolding: Next.js, TypeScript, Tailwind, Prisma config.
- `prisma/schema.prisma` — the full planned data model (not yet connected;
  homepage currently reads from `src/lib/data/rooms.ts` mock data).
- Homepage: hero with search bar and a prominent "Book your room" CTA, room
  grid (with ₦ pricing, guests, bedrooms, bathrooms, amenities, and a
  "Book now" button on every card), nightlife teaser band, footer with the
  real address and Google Maps embed, and a floating contact button.
- Brand palette: sampled directly from your logo — deep bottle green
  (`ink`, `#1A3234`) as the primary color, copper/peach gold (`gold-bright`,
  `#DD9970`) as the accent used for every booking CTA, on a warm ivory
  background (`sand`) — kept deliberately simple, no extra colors.
- Real photography in place of stock images: your logo is in the navbar,
  the hero background is your actual courtyard/entrance shot, and two room
  cards use your real interior photos (`public/brand/`).
- Responsive layout: single column on mobile, up to 3-column room grid on
  desktop (fewer, larger columns than a typical 4-up grid, so each photo
  reads as large, high-quality property photography).
- Real business details used throughout: name (Hotel De' Papi), address
  (14 Eric Oharisi Street, Slaughter Road, Otowodo, Ughelli North, Delta
  State, Nigeria), and the Google Maps embed, which points at that address.

**About the two interior photos:** both came from a video with on-screen
text baked into the footage. I blurred a small handwritten caption out of
one, and blurred a table branded with a Gucci logo out of the other —
featuring another brand's trademark on Hotel De' Papi's own marketing
photos could read as an unauthorized endorsement, so it's safer left out.
The blur is a quick fix, not a proper retouch — for a permanent version,
re-shoot those two spots or send me the same photos without that overlay
and branding and I'll swap them in cleanly. Rooms 3 and 4 still use stock
photography pending more real photos from you.

**Still open:** no WhatsApp or front-desk phone number has been provided
yet, so those buttons are intentionally hidden rather than showing a made-up
number — add the real numbers to `.env` (`NEXT_PUBLIC_WHATSAPP_NUMBER`,
`NEXT_PUBLIC_PHONE_NUMBER`) and they'll appear automatically.

## Running locally

```bash
npm install
cp .env.example .env
npm run dev
```

Open http://localhost:3000.

## Roadmap

1. **Foundation + homepage** ✅ this stage.
2. **Property/room listing page** — `/rooms`, filterable grid, still on mock
   data.
3. **Individual property page** — gallery, description, amenities, house
   rules, availability calendar.
4. **Booking system** — check-in/out + guest form, availability logic, still
   in-memory/mock so the flow can be tested before a database exists.
5. **Database** — Prisma connected to real Postgres, replacing all mock data,
   including the club/VIP table models already sketched.
6. **Authentication** — secure admin login (NextAuth.js), route protection
   for `/admin`.
7. **Paystack** — checkout on room bookings and VIP table reservations,
   webhook to confirm payment.
8. **Admin dashboard** — stats (bookings, revenue, occupancy), CRUD for
   rooms/images/prices/availability, booking approval, club event and VIP
   table management.
9. **WhatsApp + Google Maps** — add the real WhatsApp and front-desk phone
   numbers so the buttons in the footer and floating contact widget appear.
   Maps is already wired to the real address.
10. **Testing + deployment prep** — responsive/QA pass, environment
    variables, deploy to Vercel + hosted Postgres.
