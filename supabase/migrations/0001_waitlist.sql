-- Replyo — waitlist table
-- Run this in Supabase Studio: SQL Editor → New query → paste → Run

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  source text not null default 'landing',
  created_at timestamptz not null default now()
);

create index if not exists waitlist_created_at_idx
  on public.waitlist (created_at desc);

-- RLS: nikt z anon key nie czyta ani nie pisze.
-- Insert robimy z service_role (omija RLS), więc nie potrzebujemy policy na insert.
alter table public.waitlist enable row level security;
