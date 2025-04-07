import { supabase } from './supabase';

async function test() {
  const { data, error } = await supabase
    .from('users')
    .select('*')

  if (error) {
    console.error('Error fetching data:', error.message);
  } else {
    console.log('Data fetched successfully:', data);
  }
}

test();