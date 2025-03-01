import { BestPractices } from "@/components/BestPractices";
import CropForm from "@/components/CropForm";
import { Weather } from "@/components/Weather";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const [city, setCity] = useState("Pune");
    const [coordinates, setCoordinates] = useState({ lat: 0, lon: 0 });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          setCoordinates({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        });
      }, []); 
    
      useEffect(() => {
        if (coordinates.lat !== 0 && coordinates.lon !== 0) {
          console.log(coordinates.lat, coordinates.lon, import.meta.env.VITE_API_KEY);
          
          fetch(`https://us1.locationiq.com/v1/reverse?key=${"import.meta.env.VITE_API_KEY"}&lat=${coordinates.lat}&lon=${coordinates.lon}&format=json`)
            .then((res) => res.json())
            .then((data) => {
              setCity(data.address.city);
            })
            .catch((error) => console.error("Error fetching city:", error));
        }
      }, [coordinates]); 
      console.log(city);
  return (
    <div className="flex min-h-screen flex-col bg-background items-center">
      <div className="container flex-1 gap-12 p-4 md:p-6 2xl:p-8">
        <div className="flex-1 space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-full lg:col-span-3">
                    <CropForm city={city} />
                </div>
                <div className="col-span-full lg:col-span-4 space-y-4">
                    <Weather city={city} />
                    <BestPractices />
                </div>
                <div className="col-span-full lg:col-span-3">
                </div>
                <div className="col-span-full lg:col-span-4 space-y-4">
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}