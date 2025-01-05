import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ddtxlkdcjiixpdlevvzt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkdHhsa2RjamlpeHBkbGV2dnp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5ODU1NzEsImV4cCI6MjA1MTU2MTU3MX0.2VUcsi96GVvINS1aSFbUOT7ChNuOtPx1fAdFd_i5SMI';





export const supabaseClient = createClient(supabaseUrl, supabaseKey);
