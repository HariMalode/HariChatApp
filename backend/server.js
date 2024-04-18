import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import connectMongoDB from './db/connectMongoDB.js';


const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;

app.use(express.json()); // parse incoming requests data as JSON from body
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes)

app.listen(PORT, () => {
  connectMongoDB();
  console.log(`Chat app listening on port ${PORT}!`);
});