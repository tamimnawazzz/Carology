import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';

// import { connect } from 'mongoose';
// import connectDB from './config/mongodb';
// import connectDB from './config/mongodb';

const app= express();
const PORT=process.env.PORT || 1205;
connectDB();
// connectDB();

const allowedOrigins=['http://localhost:5173']

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:allowedOrigins , credentials: true}));

//API Endpoints
app.get('/',(req,res)=>{
    res.send('API Working');
})
app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on PORT: ${PORT}`);
})