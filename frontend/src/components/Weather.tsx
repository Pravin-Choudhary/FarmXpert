import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { dayData } from "@/lib/data"
import { MapPin } from "lucide-react"

export function Weather({city}: {city: string}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Days</CardTitle>
        <CardDescription className="flex items-center mt-2"><MapPin className="h-4 w-4 mr-1" />{city}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex justify-between">
            {dayData.map((hour, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-sm font-medium">{hour.day}</div>
                <hour.icon className="my-2 h-6 w-6 text-primary" />
                <div className="text-sm font-bold">{hour.temp}°</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
