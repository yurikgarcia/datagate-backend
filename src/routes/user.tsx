import { Request, Response } from 'express';
import { supabase } from "../../supabase";


// export const getUsers = async () => {
//   console.log ("F U Supabase!!!");
//   const { data: users, error } = await supabase
//     .from("users")
//     .select("*")
//     if (error) {
//       console.error("Error fetching users:", error.message);
//     return [];
//     }
//     console.log("USERS FROM BACK", users)
//     return users;
//   }

async function getUsers(req: Request, res: Response) {
  const { data: users, error } = await supabase
    .from("users")
    .select("*");

  if (error) {
    console.error("Error fetching users:", error.message);
    return res.status(500).json({ error: "Error fetching users" });
  }
  return res.status(200).json(users);
}

// export const createUser = async () => {
//   const { data, error } = await supabase.from ("users").insert([
//     {
//       first_name: 'Pam',
//       last_name: 'Beesly',
//       email: "p.b@gmail.com",
//       organization: "Dunder Mifflin",
//     },
//   ]);
//   if (error) {
//     console.error ("Error creating user:", error.message);
//   } else {
//     console.log ("User created successfully:", data);
//   }
//   return data;
// }

export { getUsers };
