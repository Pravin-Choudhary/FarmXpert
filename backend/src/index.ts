require('dotenv').config()
import express from "express";
import cors from "cors";
import AiRouter from "./routes/ai";
import CropRouter from "./routes/crop";
import WeatherRouter from "./routes/weather";
import { GoogleGenerativeAI } from '@google/generative-ai'
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/ai", AiRouter);
app.use("/api/v1/crop", CropRouter);
app.use("/api/v1/weather", WeatherRouter);

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


app.listen(3000 , () => {
    console.log("Server started on Port : 3000");
    
} );

