require('dotenv').config();
import express from "express";
import cors from "cors";
import AiRouter from "./routes/ai";
import WeatherRouter from "./routes/weather";

import { GoogleGenerativeAI } from '@google/generative-ai'

import CommunityRouter from "./routes/community";
import { decode, JwtPayload } from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";


const app = express();
export const prisma = new PrismaClient();

interface GoogleJWTPayload extends JwtPayload{
    email?: string;
    picture?: string;
    given_name?: string,
    family_name?: string,
}

app.use(cors());
app.use(express.json());
app.use("/api/v1/ai", AiRouter);
app.use("/api/v1/weather", WeatherRouter);
app.use("/api/v1/community", CommunityRouter);

app.get('/' , (req , res) => {
    res.send("Root working ");
})


app.get('/geminiTest' , async (req , res) => {

    // const genAI = new GoogleGenerativeAI("AIzaSyAXRdeg1SiMEOXGGDiXUOlO39_oSBf4uOY");
    // const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    // const prompt = "write a poem on good better best in 5 line each line should contain 6 words";
    
    // const result = await model.generateContent(prompt);
    // console.log(result.response.text());

    console.log(process.env.GEMINI_API_KEY);
    
    res.send('working');
});





app.post("/api/v1/auth/google" , async (req , res) => {
    const { token } = req.body;
    const decoded = decode(token) as GoogleJWTPayload;
    try {
        const user = await prisma.user.findUnique({ 
            where:{
                email: decoded?.email
            }
        });
        if (!user) {
            const newUser = await prisma.user.create({
                data: {
                    name: decoded?.given_name ?? "",
                    email: decoded?.email ?? "",
                    profileImage: decoded?.picture,
                }
            });
            if(newUser) {
                res.status(200).json({
                    id: newUser.id,
                    name: newUser.name,
                    profileImage: newUser.profileImage,
                });
            }
            else{
                res.status(500).json({
                    error: "Error creating user"
                });
            }
        } else {
            res.status(200).json({
                id: user.id,
                name: user.name,
                profileImage: user.profileImage,
            });
        }
    }catch(err){
        res.status(500).json({
            message: "Error creating user"
        });
    }
});

app.listen(3000 , () => {
    console.log("Server started on Port : 3000");
    
} );

