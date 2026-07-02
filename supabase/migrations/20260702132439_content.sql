-- Content model for admin-managed public hub pages (blogs, faculties, branches, toppers).
-- A single content_items table backs every hub kind since they share the same shape.

create extension if not exists "pgcrypto";

create table if not exists public.content_items (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('blog', 'faculties', 'branches', 'toppers')),
  slug text not null,
  title text not null,
  subtitle text not null default '',
  category text not null default '',
  badges text[] not null default '{}',
  facts text[] not null default '{}',
  summary text[] not null default '{}',
  sections jsonb not null default '[]'::jsonb,
  faqs jsonb not null default '[]'::jsonb,
  status text not null default 'draft' check (status in ('draft', 'published')),
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (kind, slug)
);

create index if not exists content_items_kind_status_idx
  on public.content_items (kind, status, sort_order);

-- Keep updated_at fresh on every update.
create or replace function public.set_updated_at()
  returns trigger
  language plpgsql
  set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists content_items_set_updated_at on public.content_items;
create trigger content_items_set_updated_at
  before update on public.content_items
  for each row execute function public.set_updated_at();

-- Table-level grants for the Data API roles (raw-SQL tables need these explicitly).
-- RLS policies below still restrict which rows each role can access.
grant select on public.content_items to anon;
grant select, insert, update, delete on public.content_items to authenticated;

-- Row Level Security: public reads published content; authenticated admins manage everything.
alter table public.content_items enable row level security;

drop policy if exists "content_items public read published" on public.content_items;
create policy "content_items public read published"
  on public.content_items
  for select
  to anon, authenticated
  using (status = 'published');

drop policy if exists "content_items authenticated read all" on public.content_items;
create policy "content_items authenticated read all"
  on public.content_items
  for select
  to authenticated
  using (true);

drop policy if exists "content_items authenticated insert" on public.content_items;
create policy "content_items authenticated insert"
  on public.content_items
  for insert
  to authenticated
  with check (true);

drop policy if exists "content_items authenticated update" on public.content_items;
create policy "content_items authenticated update"
  on public.content_items
  for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "content_items authenticated delete" on public.content_items;
create policy "content_items authenticated delete"
  on public.content_items
  for delete
  to authenticated
  using (true);
