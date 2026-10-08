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
  is_past boolean not null default false
);

alter table events enable row level security;

create policy "Allow public read" on events
  for select to anon using (true);
