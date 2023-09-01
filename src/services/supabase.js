import { createClient } from "@supabase/supabase-js";

const superbase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default superbase;
