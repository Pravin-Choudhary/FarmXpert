import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import { useState , useEffect } from "react"
import axios from "axios"
import { Cloud, CloudRain, Sun , CloudLightning ,CloudSnow } from "lucide-react"


interface WeatherData {
  temp: number;
  humidity: number;
  weather: string;
  date: string;
}

export function Weather({city}: {city: string}) {
  const [weatherData , setWeatherData] = useState<WeatherData[]>([]);
 
  useEffect(() => {
      async function fetchWeather() {
         try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/weather/forecast/${city}`);
            setWeatherData(response.data.weather);
         } catch (error) {
          console.log('Error in Fetching Data :' ,error);
         }
      }
      fetchWeather();
  },[city]);

  function getWeatherIcon(condition: string) {
    switch (condition.toLowerCase()) {
      case "clear":
        return <Sun className="h-6 w-6 text-yellow-500 m-2" />;
      case "rainy":
        return <CloudRain className="h-6 w-6 text-blue-500 m-2" />;
      case "clouds":
        return <Cloud className="h-6 w-6 text-blue-500 m-2" />;
      case "snow":
          return <CloudSnow className="h-6 w-6 text-gray-500 m-2" />;
      case "thunderstorm":
            return <CloudLightning className="h-6 w-6  to-blue-800 text-yellow-400 m-2" />;  
      default:
        return <Cloud className="h-6 w-6 text-gray-500 m-2" />;
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Days</CardTitle>
        <CardDescription className="flex items-center mt-2"><MapPin className="h-4 w-4 mr-1" />{city}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex justify-around">
            {weatherData.map((data, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-sm font-medium">{new Date(data.date).toUTCString().slice(0,3)}</div>
                {getWeatherIcon(data.weather)}
                <div className="text-xs mb-1 text-muted-foreground">{data.weather}</div>
                <div className="text-sm font-bold">{Math.round(data.temp)}°</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
