import { Sun, Cloud, CloudRain } from "lucide-react";

export const bestPracticesData = {
    "cropName": "Rice",
    "farmingPractices": [
      {
        "practice": "Irrigation",
        "suggestion": "Flood the fields for early-stage growth, but reduce irrigation after 3 months.",
        "recommendedFrequency": "Twice a week during the early stages, once every 3 days in the dry season."
      },
      {
        "practice": "Fertilization",
        "suggestion": "Use a balanced NPK fertilizer at planting and again at flowering stage.",
        "recommendedType": "NPK 20-10-10"
      },
      {
        "practice": "Pest Control",
        "suggestion": "Monitor for rice stem borers. Use organic neem oil for pest control.",
        "timing": "Check regularly, especially during monsoon season."
      },
      {
        "practice": "Soil Care",
        "suggestion": "Ensure the soil remains moderately moist and avoid over-flooding to prevent nutrient leaching.",
        "fertilizerType": "Organic compost is recommended for soil health."
      },
      {
        "practice": "Weather Considerations",
        "suggestion": "If the weather is dry, increase irrigation. If the weather is rainy, reduce irrigation frequency."
      },
      {
        "practice": "Harvesting",
        "suggestion": "Harvest when the grains are golden brown. Avoid harvesting during rainy periods to reduce grain damage."
      }
    ]
  }
  
export const dayData = [
  { day: "Sun", temp: 27, icon: Sun },
  { day: "Mon", temp: 28, icon: Sun },
  { day: "Tue", temp: 28, icon: Cloud },
  { day: "Wed", temp: 29, icon: Cloud },
  { day: "Thu", temp: 30, icon: Sun },
  { day: "Fri", temp: 29, icon: CloudRain },
  { day: "Sat", temp: 29, icon: CloudRain },
];
  