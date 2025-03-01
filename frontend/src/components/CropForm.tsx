import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { useState } from "react"
import { Eraser, SendHorizonal } from "lucide-react"
import { DatePicker } from "./DatePicker";

export default function CropForm({city}: {city: string}) {
    const [cropDetails, setCropDetails] = useState({
        name: "",
        location: city ?? "",
        size: "",
        soilType: "",
        irrigationMethod: "",
        plantingDate: new Date(),
        usingFertilizer: "yes"
    })

    const soilTypes = [
        "Alluvial Soil (बनाली मिट्टी)",
        "Black Soil (कृषि मिट्टी)",
        "Red Soil (लाल मिट्टी)",
        "Laterite Soil (लेटेराइट मिट्टी)",
        "Desert Soil (माळवती मिट्टी)",
        "Saline and Alkaline Soil (नमकीन और क्षारीय मिट्टी)",
        "Forest Soil (जंगल की मिट्टी)",
        "Peaty and Marshy Soil (पीट और दलदली मिट्टी)",
        "Mountain Soil (पर्वतीय मिट्टी)",
        "Arid Soil (रेगिस्तानी मिट्टी)",
        "Grey Soil (धूसर मिट्टी)"
    ];
      

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Crop Details</CardTitle>
        <CardDescription>Fill out the details to generate ai recommendations</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid lg:grid-cols-2 w-full items-center gap-4">
            <div className="col-span-full flex flex-col space-y-1.5">
              <Label htmlFor="name">Crop Name</Label>
              <Input id="name" placeholder="Name of your crop" onChange={(e) => setCropDetails({...cropDetails, name: e.target.value})} />
            </div>
            <div className="col-span-full lg:col-span-1 flex flex-col space-y-1.5">
              <Label htmlFor="location">Farm Location</Label>
              <Input id="location" placeholder="Location of your farm" value={cropDetails.location} onChange={(e) => setCropDetails({...cropDetails, location: e.target.value})} />
            </div>
            <div className="col-span-full lg:col-span-1 flex flex-col space-y-1.5">
              <Label htmlFor="size">Farm Size</Label>
              <Input id="size" placeholder="e.g. 1 acre or 40 gunthas" onChange={(e) => setCropDetails({...cropDetails, size: e.target.value})} />
            </div>
            <div className="col-span-full lg:col-span-1 flex flex-col space-y-1.5">
              <Label htmlFor="soiltype">Soil Type</Label>
              <Select onValueChange={(value) => setCropDetails({...cropDetails, soilType: value})}>
                <SelectTrigger id="soiltype">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {soilTypes.map((type, i) => <SelectItem value={type} key={i}>{type}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-full lg:col-span-1 flex flex-col space-y-1.5">
              <Label htmlFor="irigationmethod">Irigation Method</Label>
              <Select onValueChange={(value) => setCropDetails({...cropDetails, irrigationMethod: value})}>
                <SelectTrigger id="irigationmethod">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {["Drip", "Flood", "Sprinkler"].map((method, i) => <SelectItem value={method} key={i}>{method}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-full flex flex-col space-y-1.5">
                <Label htmlFor="date">Planting Date</Label>
                <DatePicker id="date" onSelect={(date) => setCropDetails({...cropDetails, plantingDate: date})} />
            </div>
            <div className="col-span-full lg:col-span-1 flex flex-col space-y-1.5">
                <Label htmlFor="fertilizer">Using Fertilizer</Label>
                <RadioGroup>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="r1" onClick={() => setCropDetails({...cropDetails, usingFertilizer: "yes"})} />
                        <Label htmlFor="r1">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="r2" onClick={() => setCropDetails({...cropDetails, usingFertilizer: "no"})} />
                        <Label htmlFor="r2">No</Label>
                    </div>
                </RadioGroup>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => {
            setCropDetails({
                name: "",
                location: "",
                size: "",
                soilType: "",
                irrigationMethod: "",
                plantingDate: new Date(),
                usingFertilizer: "yes"
            })
        }}>Reset<Eraser /></Button>
        <Button>Send <SendHorizonal /></Button>
      </CardFooter>
    </Card>
  )
}
