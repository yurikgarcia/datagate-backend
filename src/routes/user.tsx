import { Request, Response } from 'express';
import { supabase } from "../../supabase";
import { pool } from '../../db';
import bcrypt from 'bcrypt'


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

async function createUser(req: Request, res: Response) {
  const { firstName, lastName, email, organization, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const { data, error } = await supabase
    .from('users')
    .insert([
      {
        first_name: firstName,
        last_name: lastName,
        email,
        organization,
        password: hashedPassword,
      },
    ])
    .select(); 
  if (error) {
    console.error('>>> Supabase insert error:', error.message);
    return res.status(500).json({ message: 'Error creating user' });
  }
  return res.status(201).json({
    message: 'User created successfully',
    user: data[0],
  });
}

export { getUsers, createUser };
