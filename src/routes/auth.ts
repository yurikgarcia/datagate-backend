// src/routes/auth.ts
import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key';

// Mock user data (replace with real DB logic later)
const mockUser = {
  email: 'pam@dundermifflin.com',
  password: 'beesly123',
  first_name: 'Pam',
  last_name: 'Halpert',
};

router.post('/login', async (req: Request, res: Response) : Promise<void> => {
  const { email, password } = req.body;
  
  if (email === mockUser.email && password === mockUser.password) {
    const payload = {
      first_name: mockUser.first_name,
      last_name: mockUser.last_name,
      email: mockUser.email,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      token,
      first_name: payload.first_name,
      last_name: payload.last_name,
    });
  } else {
  res.status(401).json({ error: 'Invalid credentials' });
  }});
export default router;

