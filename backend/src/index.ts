require('dotenv').config();
import express from "express";
import cors from "cors";
import AiRouter from "./routes/ai";
import CropRouter from "./routes/crop";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/ai", AiRouter);
app.use("/api/v1/crop", CropRouter);

app.listen(3000 , () => {
    console.log("Server started on Port : 3000");
    
} )