

import { createClient } from '@supabase/supabase-js'

// Use a custom domain as the supabase URL
const supabaseUrl = 'https://bqnextqilqksuoqbqgek.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxbmV4dHFpbHFrc3VvcWJxZ2VrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzNzI5MjAsImV4cCI6MjAxNDk0ODkyMH0.b3nnwd-xiIrVOAeBMFW7fa2RP8cilC78_DRbg5_WTR4'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

