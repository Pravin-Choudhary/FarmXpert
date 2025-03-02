import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MoveDown, Sprout } from "lucide-react"

export function BestPractices({data}: {data: any}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Best Farming Practices</CardTitle>
        <CardDescription className="flex items-center mt-2"><Sprout className="h-4 w-4 mr-1" />{data.cropName}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex flex-col space-y-2">
            {data.farmingPractices.map((d: any, i: number) => (
            <div key={i} className="flex flex-col items-center">
                <div className="container flex flex-col gap-1 border border-accent rounded-lg p-2 text-sm shadow-xs">
                    <div className="text-md font-bold">{d.practice}</div>
                    <div className="text-sm font-medium text-muted-foreground">Suggestion: {d.suggestion}</div>
                    <div className="text-sm font-medium text-muted-foreground">{
                        (d.recommendedFrequency) ? `Recommended Frequency: ${d.recommendedFrequency}` : ((d.recommendedType) ? `Recommended Type: ${d.recommendedType}` : ((d.fertilizerType) ? `Fertilizer Type: ${d.fertilizerType}` : ((d.timing) ? `Timing: ${d.timing}` : `Recommended Stage: ${d.recommendedStage}`)))
                    }</div>
                </div>
                {i !== data.farmingPractices.length - 1 && <MoveDown className="h-4 w-4 mt-3 text-muted-foreground" />}
            </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function BestPracticesEmpty() {
  return (
    <Card className="min-h-80">
      <CardHeader>
        <CardTitle>Best Farming Practices</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center min-h-60">
          <div className="text-lg font-medium text-gray-600">No data available</div>
          <div className="text-sm text-gray-600">Please Fill the form to get recommendations</div>
        </div>
      </CardContent>
    </Card>
  )
}
