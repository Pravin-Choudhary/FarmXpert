import { Router } from "express";
import axios from "axios";
import { GoogleGenerativeAI } from '@google/generative-ai'
import { CropSchema } from "../types";


const AiRouter = Router();

AiRouter.get('/crop' , async (req ,res) => {
    const parsedBody = CropSchema.safeParse(req.body);
    if(!parsedBody.success){
        res.status(400).json({error : "Invalid Request Body"});
        return;
    }
    try {
        const cropData = parsedBody.data;
    
        const obj = {
            name:"Pravin",
            age : 19
        }
         const genAI = new GoogleGenerativeAI("AIzaSyAXRdeg1SiMEOXGGDiXUOlO39_oSBf4uOY");
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
            
            const prompt = `just print data of provide variable in one line ${obj}t`;
            
            const result = await model.generateContent(prompt);
            console.log(result.response.text());
            res.json({response : "True"});
    } catch (error) {
        res.json({error : "Failed to Fetch Data From Gemini"});
    }
    
});

export default AiRouter;