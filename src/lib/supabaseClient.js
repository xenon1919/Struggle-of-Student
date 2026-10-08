import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export async function submitToTable(table, values) {
  if (!isSupabaseConfigured) {
    return {
      error:
        'This form isn\'t connected yet — add your Supabase credentials to .env.local to start collecting submissions.',
    }
  }
  const { error } = await supabase.from(table).insert([values])
  if (error) return { error: error.message }
  return { error: null }
}
