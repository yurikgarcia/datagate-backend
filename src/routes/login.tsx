import { Request, Response } from "express";
import { supabase } from "../../supabase";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

async function userLogin(req: Request, res: Response) {
  const { email, password } = req.body;
  console.log("Login attempt:", { email, password });
  // try {
  //   const { data: user, error } = await supabase
  //     .from("users")
  //     .select("*")
  //     .eq("email", email)
  //     .eq("password", password) // Reminder: plaintext – not secure
  //     .maybeSingle();
  //   if (error || !user) {
  //     return res.status(401).json({ message: "Invalid email or password" });
  //   }
  //   const token = jwt.sign(
  //     { id: user.id, email: user.email, role: user.role },
  //     JWT_SECRET,
  //     { expiresIn: "1h" }
  //   );
  //   return res.status(200).json({
  //     token,
  //     user: {
  //       id: user.id,
  //       email: user.email,
  //       role: user.role,
  //     },
  //   });
  // } catch (err) {
  //   console.error("Login error:", err);
  //   return res.status(500).json({ message: "Internal server error" });
  // }
}

export { userLogin };
