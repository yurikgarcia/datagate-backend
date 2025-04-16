import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';

const { userLogin } = require('./routes/login')
const { getUsers, createUser } = require('./routes/user'); 
dotenv.config();


const app = express();
const port = 8080;

//Need to adjust to environment based config
app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(express.json());

//------AUTH ROUTES------//
app.use('/auth', authRoutes);

//------LOGIN ROUTES------//
app.post('/login', userLogin);

//------USER ROUTES------//
app.get('/users', getUsers);
app.post('/newUser', createUser);  


app.get('/', (req, res) => {
  res.send('Welcome to the Datagate Backend API!');
});
app.listen(port, () => {
  console.log(` Datagate Backend API is running at http://localhost:${port}`);
});