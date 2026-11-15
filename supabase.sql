-- Create the main reflections table used by the Benjakitti Park community wall.
create table if not exists public.user_reflections (
  id uuid primary key default gen_random_uuid(),
  spot_id text not null,
  zone_name_th text not null,
  zone_name_en text not null,
  image_url text,
  reflection_th text not null,
  reflection_en text not null,
  author_th text default 'นักสำรวจนิรนาม',
  author_en text default 'Anonymous Explorer',
  likes integer not null default 0,
  created_at timestamptz not null default now()
);

-- Allow public read/write for the static site demo setup.
-- For production, replace with tighter Row Level Security policies.
alter table public.user_reflections enable row level security;

create policy "Public can read reflections"
on public.user_reflections
for select
using (true);

create policy "Public can insert reflections"
on public.user_reflections
for insert
with check (true);

create policy "Public can update likes and reflection rows"
on public.user_reflections
for update
using (true)
with check (true);

-- Optional: index newest posts first
create index if not exists idx_user_reflections_created_at
  on public.user_reflections (created_at desc);
