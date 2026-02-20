import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userroutes.js';
import db from './database/db.js';
import dotenv from 'dotenv';
dotenv.config();

var app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/user",userRoutes);
app.listen(5000,()=>{
    console.log("server is running on port 5000");
});