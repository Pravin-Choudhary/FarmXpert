require('dotenv').config();
import express from "express";
import cors from "cors";
import AiRouter from "./routes/ai";
import CropRouter from "./routes/crop";
import WeatherRouter from "./routes/weather";


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/ai", AiRouter);
app.use("/api/v1/crop", CropRouter);
app.use("/api/v1/weather", WeatherRouter);

app.get('/' , (req , res) => {
    res.send("Root working ");
})

app.listen(3000 , () => {
    console.log("Server started on Port : 3000");
    
} )