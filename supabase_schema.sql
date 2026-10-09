-- Run this in the Supabase SQL editor once you create your project.
-- Creates the tables the website writes to, with Row Level Security
-- configured so anonymous visitors can submit applications but cannot
-- read other people's submissions back.

create table if not exists volunteer_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  phone text,
  college text,
  year_of_study text,
  interest_area text,
  message text
);

create table if not exists ambassador_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  phone text,
  college text,
  city text,
  social_handle text,
  why_join text
);

create table if not exists talent_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  talent_category text,
  description text,
  link_url text
);

alter table volunteer_applications enable row level security;
alter table ambassador_applications enable row level security;
alter table talent_submissions enable row level security;

create policy "Allow public insert" on volunteer_applications
  for insert to anon with check (true);

create policy "Allow public insert" on ambassador_applications
  for insert to anon with check (true);

create policy "Allow public insert" on talent_submissions
  for insert to anon with check (true);

-- Optional: tables below are for content you may want to manage from
-- Supabase instead of hardcoding in the site. Not required to launch.

create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  title text not null,
  description text,
  event_date date,
  location text,
  image_url text,
  registration_url text,
  is_past boolean not null default false,
  -- Leave null for events that don't need volunteers at all.
  volunteer_capacity integer
);

alter table events enable row level security;

create policy "Allow public read" on events
  for select to anon using (true);

-- Links a volunteer application to a specific event (nullable — general
-- "volunteer with us" applications leave this blank).
alter table volunteer_applications add column if not exists event_id uuid references events(id);

-- Publicly-readable aggregate (never exposes applicant names/emails) so the
-- site can show "X of Y volunteer spots filled" and auto-close full events.
create or replace view event_volunteer_counts as
  select event_id, count(*)::int as applicant_count
  from volunteer_applications
  where event_id is not null
  group by event_id;

grant select on event_volunteer_counts to anon, authenticated;

-- Online sessions (Zoom, Google Meet, etc). You create the meeting on your
-- video platform yourself and paste the join link + capacity here — the
-- site handles registration, capacity limits, and reveals the link only to
-- registered students.
create table if not exists meetings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  title text not null,
  description text,
  platform text not null default 'Zoom',
  scheduled_at timestamptz not null,
  duration_minutes integer default 60,
  capacity integer,
  join_url text,
  is_past boolean not null default false
);

alter table meetings enable row level security;

create policy "Allow public read" on meetings
  for select to anon using (true);

create table if not exists meeting_registrations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  meeting_id uuid not null references meetings(id),
  full_name text not null,
  email text not null,
  phone text,
  college text
);

alter table meeting_registrations enable row level security;

create policy "Allow public insert" on meeting_registrations
  for insert to anon with check (true);

create or replace view meeting_registration_counts as
  select meeting_id, count(*)::int as registration_count
  from meeting_registrations
  group by meeting_id;

grant select on meeting_registration_counts to anon, authenticated;
