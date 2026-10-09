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

/** Fetches all rows from a table, ordered by `orderBy` (ascending). Returns [] if not connected or on error. */
export async function fetchRows(table, { orderBy, ascending = true, eq } = {}) {
  if (!isSupabaseConfigured) return []
  let query = supabase.from(table).select('*')
  if (eq) {
    for (const [col, val] of Object.entries(eq)) query = query.eq(col, val)
  }
  if (orderBy) query = query.order(orderBy, { ascending })
  const { data, error } = await query
  if (error) return []
  return data || []
}

/** Fetches a count-per-id view (e.g. event_volunteer_counts) as a { [idColumn]: count } map. */
export async function fetchCountsMap(view, idColumn, countColumn) {
  if (!isSupabaseConfigured) return {}
  const { data, error } = await supabase.from(view).select('*')
  if (error || !data) return {}
  const map = {}
  for (const row of data) map[row[idColumn]] = row[countColumn]
  return map
}
