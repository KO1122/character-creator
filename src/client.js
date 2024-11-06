import { createClient } from "@supabase/supabase-js";
const URL = "https://sulaaqridfuirtxqnyjt.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1bGFhcXJpZGZ1aXJ0eHFueWp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4NzYyNjMsImV4cCI6MjA0NjQ1MjI2M30.gHbso238_2eDZbC_g947AcbHG-tNBj3cyfi_tYizfgw";
export const supabase = createClient(URL, API_KEY);
