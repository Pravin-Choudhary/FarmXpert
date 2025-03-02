import { Request, Router  } from "express";
import axios from "axios";

const WeatherRouter = Router();

WeatherRouter.get("/forecast/:city", async (req , res) => {
 
  const city =  req.params.city;
  
  try {
     const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=pune&appid=4bab098e1ac811aed6c44bb3c7aeb953&units=metric`);

      const forecasts = response.data.list;
      if (forecasts.length === 0) {
        res.status(404).json({ error: "No forecast data available" });
        return;
      }

    const selectedForecasts = [forecasts[0]];

    const uniqueDates: string[] = [];  
    for (let i = 0; i < forecasts.length; i++) {
        const entry = forecasts[i];
        const [date, time] = entry.dt_txt.split(" "); 

        if (time === "12:00:00" && !uniqueDates.includes(date)) {
            uniqueDates.push(date);
            selectedForecasts.push(entry);
        }

        if (selectedForecasts.length === 5) break; 
    }
    res.json({
      city,
      forecast: selectedForecasts,
    });

  } catch (error) {
    console.log('Error in fetching Data :' , error);
    res.status(500).json({error : 'Error in fetching Data :'});
  }
    
});




export default WeatherRouter;

