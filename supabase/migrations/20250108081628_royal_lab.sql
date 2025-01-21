/*
  # Fix admin user creation

  1. Changes
    - Adds instance_id column if not exists
    - Creates admin user with proper auth schema
    - Creates admin profile with proper role
*/

-- Add instance_id column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'auth' 
    AND table_name = 'users' 
    AND column_name = 'instance_id'
  ) THEN
    ALTER TABLE auth.users ADD COLUMN instance_id uuid;
  END IF;
END $$;

-- Create admin user with proper schema
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_sent_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  is_super_admin
)
SELECT
  '00000000-0000-0000-0000-000000000000'::uuid,
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'admin@example.com',
  crypt('admin123', gen_salt('bf')),
  now(),
  now(),
  now(),
  '{"provider": "email", "providers": ["email"]}'::jsonb,
  '{}'::jsonb,
  now(),
  now(),
  encode(gen_random_bytes(32), 'hex'),
  false
WHERE NOT EXISTS (
  SELECT 1 FROM auth.users WHERE email = 'admin@example.com'
);

-- Create admin profile
INSERT INTO public.profiles (id, email, role)
SELECT id, email, 'admin'
FROM auth.users
WHERE email = 'admin@example.com'
AND NOT EXISTS (
  SELECT 1 FROM public.profiles WHERE email = 'admin@example.com'
);