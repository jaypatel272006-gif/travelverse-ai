-- TRAVELVERSE AI: CLOUD SQL SCHEMATICS & POLICIES
-- Year 2200 Production Architecture Blueprint

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Profiles Table (Linked to Supabase Auth)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  name text not null,
  avatar text default 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
  bio text default 'Wanderlust explorer & travel enthusiast.',
  user_xp integer default 0,
  user_level integer default 1,
  joined_date text,
  twin_preferences jsonb default '{"hotelCategory": "midrange", "foodPreference": "all", "budgetRange": "midrange", "flightClass": "economy", "adventureLevel": "medium", "travelPace": "moderate", "favoriteStyle": "nature"}'::jsonb,
  departure_hub text default 'Delhi',
  ui_theme_style jsonb default '{"colorTheme": "noon", "accentColor": "cyan", "cardStyle": "hologram", "layoutDensity": "comfortable"}'::jsonb,
  dashboard_widgets jsonb default '[{"id": "budget", "label": "Budget Simulator", "visible": true}, {"id": "dna", "label": "Travel DNA Genome", "visible": true}, {"id": "achievements", "label": "Achievements Logs", "visible": true}, {"id": "wishlist", "label": "Wishlist Telemetry", "visible": true}, {"id": "journals", "label": "Travel Journals log", "visible": true}]'::jsonb,
  dashboard_preset text default 'traveler',
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for profiles
alter table public.profiles enable row level security;

create policy "Users can view any profile" on public.profiles
  for select using (true);

create policy "Users can update their own profile" on public.profiles
  for update using (auth.uid() = id);

-- Trigger to automatically create profile on sign up
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name, avatar, bio, joined_date)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'name', 'Explorer-' || substring(new.id::text from 1 for 6)),
    coalesce(new.raw_user_meta_data->>'avatar_url', 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'),
    'Ready to discover the universe with TravelVerse AI.',
    to_char(now(), 'Month YYYY')
  );
  return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- 2. Itineraries Table
create table public.itineraries (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  destination text not null,
  country text not null,
  image text,
  duration integer not null,
  budget_type text not null,
  travel_style text not null,
  pace text not null,
  date_saved text not null,
  costs jsonb not null,
  days jsonb not null,
  average_walking_dist float,
  emergency_services jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.itineraries enable row level security;

create policy "Users can view their own itineraries" on public.itineraries
  for select using (auth.uid() = user_id);

create policy "Users can insert their own itineraries" on public.itineraries
  for insert with check (auth.uid() = user_id);

create policy "Users can update their own itineraries" on public.itineraries
  for update using (auth.uid() = user_id);

create policy "Users can delete their own itineraries" on public.itineraries
  for delete using (auth.uid() = user_id);


-- 3. Custom Photos Table
create table public.custom_photos (
  user_id uuid references public.profiles(id) on delete cascade not null,
  destination_id text not null,
  image_url text not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (user_id, destination_id)
);

alter table public.custom_photos enable row level security;

create policy "Users can view their own custom photos" on public.custom_photos
  for select using (auth.uid() = user_id);

create policy "Users can insert/update their own custom photos" on public.custom_photos
  for insert with check (auth.uid() = user_id);

create policy "Users can update their own custom photos" on public.custom_photos
  for update using (auth.uid() = user_id);

create policy "Users can delete their own custom photos" on public.custom_photos
  for delete using (auth.uid() = user_id);


-- 4. Travel Journals Table
create table public.journals (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  title text not null,
  location text not null,
  date text not null,
  content text not null,
  image text,
  author text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.journals enable row level security;

create policy "Anyone can read journals" on public.journals
  for select using (true);

create policy "Users can insert their own journals" on public.journals
  for insert with check (auth.uid() = user_id);

create policy "Users can update their own journals" on public.journals
  for update using (auth.uid() = user_id);

create policy "Users can delete their own journals" on public.journals
  for delete using (auth.uid() = user_id);


-- 5. Wishlists Table
create table public.wishlists (
  user_id uuid references public.profiles(id) on delete cascade not null,
  item_type text not null, -- 'destinations', 'flights', 'hotels', 'tours'
  item_id text not null,
  item_data jsonb not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (user_id, item_type, item_id)
);

alter table public.wishlists enable row level security;

create policy "Users can view their own wishlists" on public.wishlists
  for select using (auth.uid() = user_id);

create policy "Users can insert their own wishlists" on public.wishlists
  for insert with check (auth.uid() = user_id);

create policy "Users can delete their own wishlists" on public.wishlists
  for delete using (auth.uid() = user_id);
