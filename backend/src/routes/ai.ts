import { Router } from "express";
import axios from "axios";
import { GoogleGenerativeAI } from '@google/generative-ai'


const AiRouter = Router();

AiRouter.get('/crop' , async (req ,res) => {
    try {
        const cropData = {
            name: "Wheat",
            location:"Pune",
            size: "1 acre",
            soilType: "Alluvial Soil (बनाली मिट्टी)",
            irrigationMethod: "Flood",
            plantingDate: new Date().toLocaleString(),
            usingFertilizer: "yes"
        };
    
       
         const genAI = new GoogleGenerativeAI("AIzaSyCn_dYYtV3cFNEu5aLQEy-4G6T-YchDB-M");
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
            
            const prompt1 = `
            Based on the following crop data, recommend fertilizers in JSON format with 'name', 'use', and 'price' fields.
            
            Crop Data:
            - Name: ${cropData.name}
            - Location: ${cropData.location}
            - Size: ${cropData.size}
            - Soil Type: ${cropData.soilType}
            - Irrigation Method: ${cropData.irrigationMethod}
            - Planting Date: ${cropData.plantingDate}
            - Using Fertilizer: ${cropData.usingFertilizer}

            for example :
            Your response should be a valid JSON array like this:
            [
              {
                "name": "Urea",
                "use": "Provides nitrogen to promote vegetative growth and enhance leaf and stem development.",
                "price": "₹5,000 - ₹5,500 per tonne"
              }
            ]

               Send at least 4-5 fertilizers. Each 'use' field should have a max of 10 words.
        `;

        const prompt2 = `
        You are an expert in agriculture. Based on the given crop data, provide the best farming practices in JSON format.  

        Crop Data:
        - Name: ${cropData.name}
        - Location: ${cropData.location}  
        - Soil Type: ${cropData.soilType}  
        - Irrigation Method: ${cropData.irrigationMethod}  

        Your response **must strictly follow** this JSON format:

        {
          "cropName": "${cropData.name}",
          "farmingPractices": [
            {
              "practice": "Irrigation",
              "suggestion": "Provide adequate irrigation, avoid waterlogging.",
              "recommendedFrequency": "Twice a week during dry periods."
            },
            {
              "practice": "Fertilization",
              "suggestion": "Use balanced NPK fertilizer at planting stage.",
              "recommendedType": "NPK 20-10-10"
            },
            {
              "practice": "Pest Control",
              "suggestion": "Monitor pests regularly and use organic pesticides.",
              "timing": "Check every week during monsoon."
            },
            {
              "practice": "Soil Care",
              "suggestion": "Maintain soil moisture, avoid excessive watering.",
              "fertilizerType": "Organic compost for better soil health."
            },
            {
              "practice": "Weather Considerations",
              "suggestion": "Adjust irrigation based on rainfall and temperature."
            },
            {
              "practice": "Harvesting",
              "suggestion": "Harvest when grains turn golden brown.",
              "recommendedStage": "Fully mature stage, low moisture content."
            }
          ]
        }

        ### **IMPORTANT GUIDELINES:**
        1. **Use the exact field names** as shown above.  
        2. **Each value should be a maximum of 10 words.**  
        3. **Do not change practice names.**  
        4. **Do not include explanations, only return the JSON.**  
        5. **Ensure the JSON format is valid.**  
        `;
            
            const result1 = await model.generateContent(prompt1);
            const responseText1 = result1.response.text();
            const cleanedResponse1 = responseText1.replace(/```json|```/g, "").trim();
          
          const fertilizerData = JSON.parse(cleanedResponse1);
            console.log("fertilizer data : " , fertilizerData);
            
            const result2 = await model.generateContent(prompt2);
            const responseText2 = result2.response.text();
            const cleanedResponse2 = responseText2.replace(/```json|```/g, "").trim();
          
          const bestPracticesData = JSON.parse(cleanedResponse2);
       
            res.json({fertilizerData , bestPracticesData});


    } catch (error) {
        console.error("Gemini API error :" , error)
        res.json({error : "Failed to Fetch Data From Gemini"});
    }
    
});

AiRouter.get('/recommendation/crops/:city' ,async (req , res) => {
  try {
    
    const city = req.params.city;
    
    const response = await axios.get(`http://localhost:3000/api/v1/weather/forecast/${city}`);
    
    const data = response.data;

    const tempData = data.weather[0].temp;
    const humidityData = data.weather[0].humidity;
    const currentWeather = data.weather[0].weather;

  const weatherData = {
    temp : tempData ,
    humidity : humidityData ,
    condition : currentWeather
  }

  const genAI = new GoogleGenerativeAI("AIzaSyCn_dYYtV3cFNEu5aLQEy-4G6T-YchDB-M");
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
    You are an agricultural expert. Based on the given weather data, suggest the best crops for farming.  

    Weather Data:  
    - Temperature: ${weatherData.temp}  
    - Humidity: ${weatherData.humidity}  
    - Condition: ${weatherData.condition}  

    **Your response must strictly follow this JSON format:**
    [
      { "name": "Rice", "description": "Staple food, needs ample water" },
      { "name": "Wheat", "description": "Cool-season grain, high protein" },
      { "name": "Maize", "description": "Versatile cereal, drought-resistant" },
      { "name": "Sugarcane", "description": "Sweet crop, long growing cycle" },
      { "name": "Cotton", "description": "Fiber crop, warm climate required" },
      { "name": "Pulses", "description": "Protein-rich, nitrogen-fixing plants" },
      { "name": "Soybean", "description": "Oilseed crop, protein-packed beans" },
      { "name": "Groundnut", "description": "Legume crop, edible oil source" },
      { "name": "Mustard", "description": "Oilseed, thrives in cool weather" },
      { "name": "Tea", "description": "Beverage crop, grown in hills" },
      { "name": "Coffee", "description": "Popular drink, tropical cultivation" },
      { "name": "Banana", "description": "Tropical fruit, rich in potassium" },
      { "name": "Mango", "description": "King of fruits, summer delight" },
      { "name": "Potato", "description": "Tubers, staple vegetable worldwide" },
      { "name": "Tomato", "description": "Red fruit, used in cooking" }
    ]

    ### **IMPORTANT GUIDELINES:**
    1. **Use the exact field names** as shown above.  
    2. **Ensure each description is a maximum of 8 words.**  
    3. **Base recommendations strictly on the weather data.**  
    4. **Do not include explanations, only return the JSON.**  
    5. **Ensure the JSON format is valid.**  
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

     
    const cleanedResponse = responseText.replace(/```json|```/g, "").trim();    
    const cropData = JSON.parse(cleanedResponse);
   
    res.json({cropData});
  } 
  catch (error) {
    console.log('error' , error);
    res.json({error : "Failed to Fetch Data"});
  }
});

export default AiRouter;