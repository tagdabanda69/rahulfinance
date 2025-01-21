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
DO $$
DECLARE
  new_user_id uuid;
BEGIN
  INSERT INTO auth.users (
    email,
    raw_user_meta_data,
    raw_app_meta_data,
    aud,
    role,
    encrypted_password,
    email_confirmed_at,
    created_at,
    updated_at,
    confirmation_token,
    recovery_token
  ) VALUES (
    'admin@example.com',
    '{}'::jsonb,
    '{"provider": "email", "providers": ["email"]}'::jsonb,
    'authenticated',
    'authenticated',
    crypt('admin123', gen_salt('bf')),
    now(),
    now(),
    now(),
    encode(gen_random_bytes(32), 'hex'),
    encode(gen_random_bytes(32), 'hex')
  )
  RETURNING id INTO new_user_id;

  -- Create admin profile
  INSERT INTO public.profiles (id, email, role)
  VALUES (new_user_id, 'admin@example.com', 'admin');
END $$;

-- Ensure proper indexes exist
CREATE INDEX IF NOT EXISTS users_email_idx ON auth.users(email);
CREATE INDEX IF NOT EXISTS profiles_email_idx ON public.profiles(email);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA auth TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA auth TO postgres, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA auth TO postgres, service_role;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA auth TO postgres, service_role;