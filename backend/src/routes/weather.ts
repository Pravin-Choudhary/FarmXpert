import { Router } from "express";
import axios from "axios";

const WeatherRouter = Router();


WeatherRouter.get("/forecast/:city", async (req, res) => {
  
    console.log(req.params);
    
    const city = req.params.city;
  
  
    try {
      const response  = await axios.get(`${process.env.BASE_API_URL}q=${city}&appid=${process.env.API_KEY}&units=metric`);
  
    const condition = response.data.weather[0].description;
    const  temperature = response.data.main.temp;
    const humidity = response.data.main.humidity;
    const windSpeed = response.data.wind.speed;
    const windDegree = response.data.wind.deg;
    const pressure = response.data.main.pressure;
  
    console.log("weather Condition :" , condition);
    console.log("weather Temp :" , temperature);
    console.log("weather windSpeed :" , windSpeed);
  
    
    const weatherData = {
      city ,
      temperature, 
      condition,
      humidity,
      windSpeed,
      windDegree,
      pressure
    }
  
    res.json({
      weatherData
    });
  
    } catch (error) {
      console.log('Error in fetching Data :' , error);
      
      res.status(500).json({error : 'Error in fetching Data :'});
    }
    
  });


export default WeatherRouter;