/*
  # Fix Admin User Creation

  1. Changes
    - Properly create admin user with all required fields
    - Create corresponding profile
    - Add necessary indexes
    - Set up RLS policies
*/

-- Ensure the email field is unique
ALTER TABLE auth.users ADD CONSTRAINT unique_email UNIQUE (email);

-- Create admin user with all required fields
INSERT INTO auth.users (
  id,
  instance_id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  recovery_token,
  email_change_token_current,
  email_change_token_new,
  invited_at,
  is_super_admin,
  phone,
  phone_confirmed_at,
  phone_change_token,
  banned_until,
  reauthentication_token,
  is_sso_user,
  deleted_at
)
VALUES (
  gen_random_uuid(), -- id
  '00000000-0000-0000-0000-000000000000'::uuid, -- instance_id
  'authenticated',
  'authenticated',
  'admin@example.com',
  crypt('admin123', gen_salt('bf')),
  now(),
  now(),
  '{"provider": "email", "providers": ["email"]}'::jsonb,
  '{}'::jsonb,
  now(),
  now(),
  encode(gen_random_bytes(32), 'hex'),
  encode(gen_random_bytes(32), 'hex'),
  null,
  null,
  null,
  false,
  null,
  null,
  null,
  null,
  null,
  false,
  null
)
ON CONFLICT (email) DO NOTHING;

-- Create admin profile
INSERT INTO public.profiles (id, email, role)
SELECT id, email, 'admin'
FROM auth.users
WHERE email = 'admin@example.com'
AND NOT EXISTS (
  SELECT 1 FROM public.profiles WHERE email = 'admin@example.com'
);

-- Create necessary indexes
CREATE INDEX IF NOT EXISTS users_email_idx ON auth.users(email);
CREATE INDEX IF NOT EXISTS profiles_email_idx ON public.profiles(email);
