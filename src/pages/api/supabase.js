import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://bmixnmotvfcjozcipfkr.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtaXhubW90dmZjam96Y2lwZmtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU4MDUyOTAsImV4cCI6MTk5MTM4MTI5MH0.HGNndaD9rWaPbU7UA-4iFjaPDDkNfWuNR4WdPLUr92g'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
//need to setup process.env for this
