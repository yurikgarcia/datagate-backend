import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
const { getUsers } = require('./routes/user'); 
dotenv.config();


const app = express();
const port = 8080;
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());

//------ROUTES------//
app.use('/auth', authRoutes);
app.get('/users', getUsers); 


app.get('/', (req, res) => {
  res.send('Welcome to the Datagate Backend API!');
});
app.listen(port, () => {
  console.log(` Datagate Backend API is running at http://localhost:${port}`);
});