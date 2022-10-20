import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const supabaseUrl = "https://hfisequpepiqcqujbrep.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY as string;
const supabaseDb = createClient(supabaseUrl, supabaseKey);

export default supabaseDb;
