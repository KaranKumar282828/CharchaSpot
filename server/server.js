import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { connectDB } from './db/connection1.db.js';


connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

// routes
import userRoutes from './routes/user.route.js';
app.use('/api/v1/user', userRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})