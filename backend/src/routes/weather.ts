import { Request, Router  } from "express";
import axios from "axios";

const WeatherRouter = Router();

WeatherRouter.get("/forecast/:city", async (req , res) => {
 
  const {city} =  req.params;
  console.log(process.env.OpenWeather_API);
  try {
     const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.OpenWeather_API}&units=metric`);

      const forecasts = response.data.list;
      if (forecasts.length === 0) {
         res.status(404).json({ error: "No forecast data available" });
         return;
    }

    const selectedForecasts = [forecasts[0]];
    const firstDate = forecasts[0].dt_txt.slice(0,10);

    console.log(firstDate);
    
    const uniqueDates: string[] = []; 
    uniqueDates.push(firstDate)
   
    for (let i = 0; i < forecasts.length; i++) {
        const  forecast = forecasts[i];
        const [date, time] = forecast.dt_txt.split(" "); 

        if (time === "12:00:00" && !uniqueDates.includes(date)) {
            uniqueDates.push(date);
            selectedForecasts.push(forecast);
        }

        if (selectedForecasts.length === 5) break; 
    }

    const weather = [];

      for (const forecast of selectedForecasts) {

        weather.push(
          {
            temp : forecast.main.temp,
            humidity : forecast.main.humidity,
            weather : forecast.weather[0].main,
            date : forecast.dt_txt
          }
        );

        console.log("data",weather);
        
      }

    res.json({
      city,
      weather,
  });


  } catch (error) {
    // console.log('Error in fetching Data :' , error);
    res.status(500).json({error : 'Error in fetching Data :'});
  }
    
});




export default WeatherRouter;

