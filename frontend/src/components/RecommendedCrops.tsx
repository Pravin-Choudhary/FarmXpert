import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CropData } from "@/lib/data"
import { Sprout, ThumbsUp } from "lucide-react"


export function RecommendedCrops() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Crops</CardTitle>
        <CardDescription className="flex items-center mt-2"><ThumbsUp className="h-4 w-4 mr-1" />Recommended crops based on location and weather for optimal farming</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full border-none whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4 pt-0">
            {CropData.map((c, i) => (
            <figure key={i} className="shrink-0">
                <figcaption className="pt-2 text-xs text-muted-foreground">
                    <div className="flex flex-col justify-center items-center w-[150px]">
                        <div className="text-[16px] font-bold text-black">{c.name}</div>
                        <Sprout className="my-2 h-6 w-6 text-primary" />
                        <div className="text-sm font-medium text-center text-wrap">{c.description}</div>
                    </div>
                </figcaption>
            </figure>
            ))}
        </div>
        <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  )
}


