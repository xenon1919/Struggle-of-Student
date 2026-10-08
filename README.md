# Struggle of Student

A student community hub — opportunities, talent showcase, careers, the Campus Ambassador program, events, and volunteer sign-up. 
## Getting started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

## Connecting Supabase

The forms (Volunteer, Campus Ambassador, Talent submission) write to Supabase tables. Until it's connected, forms show a friendly "not connected yet" message instead of failing silently.

1. Create a project at [supabase.com](https://supabase.com).
2. In the Supabase SQL editor, run [`supabase_schema.sql`](supabase_schema.sql) — it creates the three submission tables plus an optional `events` table, with Row Level Security set so visitors can submit but not read others' entries.
3. Copy `.env.example` to `.env.local` and fill in your project's URL and anon/public key (Project Settings → API):

   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-public-key
   ```

4. Restart the dev server. Submissions will now land in your Supabase tables (Table Editor → `volunteer_applications`, `ambassador_applications`, `talent_submissions`).

## Project structure

- `src/pages/` — one file per route (Home, Opportunities, Talent, Careers, Ambassador, Events, Volunteer, Contact)
- `src/components/` — shared Navbar, Footer, form status, page hero
- `src/data/siteData.js` — placeholder content for opportunities, careers, talent, and events; swap for a Supabase query later if you want this content editable without a redeploy
- `src/lib/supabaseClient.js` — Supabase client + a `submitToTable` helper used by every form

## Still to do

- Swap placeholder social links, email, opportunities, and event entries for real ones in `src/data/siteData.js` and `src/components/Footer.jsx` / `src/pages/Contact.jsx`.
- Add real photos (talent showcase avatars, event photos) once available.
- Once Supabase is connected, decide whether submissions should also trigger an email notification (can be added via a Supabase Edge Function).
