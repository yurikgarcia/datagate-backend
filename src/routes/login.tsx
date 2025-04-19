import { Request, Response } from "express";
import { supabase } from "../../supabase";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

async function userLogin(req: Request, res: Response) {
  const { email, password } = req.body;

  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .maybeSingle();
  if (error) {
    console.error("Supabase error:", error);
    res.status(500).json({ message: "Supabase query error" });
    return;
  }
  if (!user) {
    res.status(401).json({ message: "Invalid email or password" });
    return;
  }
  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: "24h" }
  );
  res.status(200).json({
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
  });
}

export { userLogin }