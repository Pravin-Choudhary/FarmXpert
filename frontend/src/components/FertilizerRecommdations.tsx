import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FlaskConical } from "lucide-react"

export function FertilizerRecommdation({data}: {data: any[]}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Fertilizers</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {data.map((f, i) => (
          <Card key={i} className="bg-muted/50">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-1">
                    <FlaskConical className="w-4 h-4" />
                    <h3 className="font-medium">{f.name}</h3>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <div className="flex items-center gap-1">
                      <p className="text-sm text-muted-foreground">{f.use}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>{f.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}

export function FertilizerRecommdationEmpty() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Fertilizers</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center justify-center min-h-90">
          <div className="text-lg font-medium text-gray-600">No data available</div>
          <div className="text-sm text-gray-600">Please Fill the form to get recommendations</div>
        </div>
      </CardContent>
    </Card>
  )
}

