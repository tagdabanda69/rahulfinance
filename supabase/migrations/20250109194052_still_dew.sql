-- Drop existing admin user if exists
DO $$ 
BEGIN
  IF EXISTS (
    SELECT 1 FROM auth.users WHERE email = 'admin@example.com'
  ) THEN
    DELETE FROM auth.users WHERE email = 'admin@example.com';
  END IF;
END $$;

-- Create admin user with proper schema
INSERT INTO auth.users (
  id,
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
  is_super_admin
)
VALUES (
  gen_random_uuid(),
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
  false
);

-- Create admin profile
INSERT INTO public.profiles (id, email, role)
SELECT id, email, 'admin'
FROM auth.users
WHERE email = 'admin@example.com'
AND NOT EXISTS (
  SELECT 1 FROM public.profiles WHERE email = 'admin@example.com'
);

-- Ensure RLS policies are properly set
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Add necessary indexes
CREATE INDEX IF NOT EXISTS users_email_idx ON auth.users(email);
CREATE INDEX IF NOT EXISTS profiles_email_idx ON public.profiles(email);