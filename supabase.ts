
import dotenv from 'dotenv';
dotenv.config();

// console.log ('Supabase URL:', process.env.SUPABASE_URL);
// console.log ('Supabase Service Role Key:', process.env.SUPABASE_SERVICE_ROLE_KEY);

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);


