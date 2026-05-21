import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let cached: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (cached) return cached;

  const url = process.env.SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY;

  if (!url || !secretKey) {
    throw new Error(
      "Brak SUPABASE_URL lub SUPABASE_SECRET_KEY w env. Sprawdź .env.local (lokalnie) lub Project Settings → Environment Variables (Vercel)."
    );
  }

  cached = createClient(url, secretKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  return cached;
}
