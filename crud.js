import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hwwyuypdcxdigyfznqcw.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQzODM4OTEyLCJleHAiOjE5NTk0MTQ5MTJ9.tNykPvbzGeUsS7UoP2mNJNBjKUG6R76HPcNtLT1TjBc"
const supabase = createClient(supabaseUrl, supabaseKey)



async function mostar() {
  let  { data: registro, error } = await supabase
  .from('registro')
  .select('*')
  console.log(error)
}
