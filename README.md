# Struggle of Student

A student community hub — opportunities, talent showcase, careers, team & leadership, placements, services, the Campus Ambassador program, events with capacity-limited volunteering, online sessions, and a one-tap way to join the community.

## Getting started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

## Connecting Supabase

The forms (Volunteer, Campus Ambassador, Talent submission, Meeting registration) write to Supabase tables, and the Events/Meetings pages read live data (events, capacity, registration counts) from Supabase. Until it's connected, forms show a friendly "not connected yet" message and the Events/Meetings pages fall back to placeholder content from `siteData.js`.

1. Create a project at [supabase.com](https://supabase.com).
2. In the Supabase SQL editor, run [`supabase_schema.sql`](supabase_schema.sql) — it creates the submission tables, the `events` and `meetings` tables (with capacity fields), and two public read-only views (`event_volunteer_counts`, `meeting_registration_counts`) used to show live "spots left" / "Slots Full" without exposing anyone's name or email.
3. Copy `.env.example` to `.env.local` and fill in your project's URL and anon/public key (Project Settings → API):

   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-public-key
   ```

4. Restart the dev server.

### Managing events, volunteer capacity, and meetings (no admin panel needed)

Everything is managed straight from the **Supabase Table Editor** — no custom admin UI to maintain:

- **Events** (`events` table): add a row per event. Set `volunteer_capacity` to a number to enable volunteer sign-ups for that event (leave it blank for events that don't need volunteers). The Events page automatically shows "X spots left" and switches to "Volunteer Slots Full" once applications in `volunteer_applications` for that event reach the capacity — no manual intervention needed.
- **Volunteer applications** (`volunteer_applications` table): view submissions here; `event_id` tells you which event (if any) each applicant signed up for.
- **Online sessions** (`meetings` table): add a row per session. Create the actual Zoom (or Meet) meeting yourself, then paste the join link into `join_url` and set `capacity`. Registrants are tracked in `meeting_registrations`, and the site reveals `join_url` to a student immediately after they register — no Zoom API/OAuth setup required. Set `is_past` to `true` to move a session out of the upcoming list.
- **Ambassador / Talent submissions**: same pattern — view and manage directly in the Table Editor.

## Project structure

- `src/pages/` — one file per route: Home, Opportunities, Talent, Careers, Ambassador, Events, Meetings, Volunteer, Join, Team, Placements, Services, Contact
- `src/components/` — shared Navbar, Footer, Logo, form status, page hero
- `src/data/siteData.js` — placeholder content for opportunities, careers, talent, events, meetings, team members, leadership, placements, and services; swap for real content (and, for events/meetings, Supabase rows take over automatically once connected)
- `src/lib/supabaseClient.js` — Supabase client, a `submitToTable` helper used by every form, and `fetchRows` / `fetchCountsMap` helpers used by the Events and Meetings pages

## Still to do

- Swap placeholder social links, email, opportunities, team/leadership photos, placements, and event entries for real ones in `src/data/siteData.js`, `src/components/Footer.jsx`, and `src/pages/Contact.jsx`.
- Replace the `Logo` component (`src/components/Logo.jsx`) with a real logo image once one's ready — it's currently an "SS" text monogram placeholder.
- Add real photos (talent showcase avatars, team/leadership headshots, event photos) once available.
- Once Supabase is connected, decide whether submissions should also trigger an email notification (can be added via a Supabase Edge Function).
