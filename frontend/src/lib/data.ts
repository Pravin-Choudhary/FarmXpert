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
  
export const FertilizerData = [
  {
    name: "Urea",
    use: "Provides nitrogen to promote vegetative growth and enhance leaf and stem development.",
    price: "₹5,000 - ₹5,500 per tonne"
  },
  {
    name: "Di-Ammonium Phosphate (DAP)",
    use: "Supplies both nitrogen and phosphorus to support root development and flowering.",
    price: "₹24,000 - ₹25,000 per tonne"
  },
  {
    name: "Muriate of Potash (MOP)",
    use: "Provides potassium to improve grain filling, increase disease resistance, and regulate water usage.",
    price: "₹17,000 - ₹18,000 per tonne"
  },
  {
    name: "Single Super Phosphate (SSP)",
    use: "Offers phosphorus, sulfur, and calcium to aid in root development and overall plant growth.",
    price: "₹4,000 - ₹4,500 per tonne"
  },
  {
    name: "Ammonium Sulfate",
    use: "Supplies nitrogen and sulfur to promote protein synthesis and chlorophyll formation.",
    price: "₹7,000 - ₹7,500 per tonne"
  },
  {
    name: "Zinc Sulfate",
    use: "Provides zinc to prevent deficiency, which can cause stunted growth and reduced yields.",
    price: "₹2,500 - ₹3,000 per 50 kg bag"
  },
  {
    name: "Farmyard Manure (FYM)",
    use: "Organic fertilizer that improves soil structure, water retention, and nutrient content.",
    price: "Varies widely; approximately ₹1,000 - ₹1,500 per tonne"
  },
  {
    name: "Vermicompost",
    use: "Enhances soil fertility and microbial activity, leading to better nutrient availability.",
    price: "₹5,000 - ₹6,000 per tonne"
  }
];


export const CropData = [
  {
    name: "Rice",
    description: "Staple food, needs ample water"
  },
  {
    name: "Wheat",
    description: "Cool-season grain, high protein"
  },
  {
    name: "Maize",
    description: "Versatile cereal, drought-resistant"
  },
  {
    name: "Sugarcane",
    description: "Sweet crop, long growing cycle"
  },
  {
    name: "Cotton",
    description: "Fiber crop, warm climate required"
  },
  {
    name: "Pulses",
    description: "Protein-rich, nitrogen-fixing plants"
  },
  {
    name: "Soybean",
    description: "Oilseed crop, protein-packed beans"
  },
  {
    name: "Groundnut",
    description: "Legume crop, edible oil source"
  },
  {
    name: "Mustard",
    description: "Oilseed, thrives in cool weather"
  },
  {
    name: "Tea",
    description: "Beverage crop, grown in hills"
  },
  {
    name: "Coffee",
    description: "Popular drink, tropical cultivation"
  },
  {
    name: "Banana",
    description: "Tropical fruit, rich in potassium"
  },
  {
    name: "Mango",
    description: "King of fruits, summer delight"
  },
  {
    name: "Potato",
    description: "Tubers, staple vegetable worldwide"
  },
  {
    name: "Tomato",
    description: "Red fruit, used in cooking"
  }
];
