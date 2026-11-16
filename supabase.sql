-- OPTIONAL: shared live word wall for the "Play" tab.
-- Run this once in the Supabase SQL editor, then set SHARED.enabled = true in storage.js.
-- Visitors (anon key) can only READ and ADD words: no updates, no deletes.

create table if not exists public.word_wall (
  id bigint generated always as identity primary key,
  word text not null check (char_length(btrim(word)) between 1 and 60),
  champion text check (char_length(champion) <= 40),
  created_at timestamptz not null default now()
);

alter table public.word_wall enable row level security;

drop policy if exists "Anyone can read words" on public.word_wall;
create policy "Anyone can read words"
  on public.word_wall for select
  to anon
  using (true);

drop policy if exists "Anyone can add a word" on public.word_wall;
create policy "Anyone can add a word"
  on public.word_wall for insert
  to anon
  with check (char_length(btrim(word)) between 1 and 60);

grant select, insert on public.word_wall to anon;

create index if not exists word_wall_created_at_idx on public.word_wall (created_at desc);

-- To clear the wall after the exhibition (run as project owner):
--   truncate public.word_wall;

-- The old site used a "user_reflections" table that allowed public UPDATEs.
-- It is no longer used. To remove it:
--   drop table if exists public.user_reflections;
