import express from "express";
import redis from "./redis.js";
import dotenv from "dotenv";

dotenv.config();
const app=express();
const PORT=3000;

app.get("/",async (req,res)=>{
    redis.set("test","Redis is Working!");
    const val=await redis.get('test')
    console.log(val);
    res.send("Hello World");
});

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
})