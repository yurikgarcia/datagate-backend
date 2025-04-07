import { supabase } from "../supabase";

export const createUser = async () => {
  const { data, error } = await supabase.from ("users").insert([
    {
      first_name: 'Pam',
      last_name: 'Beesly',
      email: "p.b@gmail.com",
      organization: "Dunder Mifflin",
    },
  ]);
  if (error) {
    console.error ("Error creating user:", error.message);
  } else {
    console.log ("User created successfully:", data);
  }
  return data;
}
