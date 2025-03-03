import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();//loading env vars


const app=express();

//middleware
app.use(cors());
app.use(express.json());

//test route

app.get("/",(req,res)=>{
    res.send("API Running...");
});

//start the server
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));