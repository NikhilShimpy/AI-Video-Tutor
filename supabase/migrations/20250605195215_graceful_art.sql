/*
  # Create auth tables and profiles

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key, references auth.users)
      - `email` (text)
      - `full_name` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `learning_preferences` (jsonb)

  2. Security
    - Enable RLS on `profiles` table
    - Add policies for authenticated users to read/update their own profile
*/

create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  full_name text,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  learning_preferences jsonb default '{}'::jsonb
);

alter table public.profiles enable row level security;

create policy "Users can read own profile"
  on profiles for select
  to authenticated
  using (auth.uid() = id);

create policy "Users can update own profile"
  on profiles for update
  to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Create a trigger to update updated_at
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_profiles_updated_at
  before update on profiles
  for each row
  execute function update_updated_at_column();

-- Set up Row Level Security
alter table public.profiles enable row level security;