import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout, ThumbsUp } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from "react"
import axios from "axios"

interface CropData {
  name: string;
  description: string;
}[];

export function RecommendedCrops({city}: {city: string}) {
  const [cropData, setCropData] = useState<CropData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/ai/recommendation/crops/${city}`).then(res => {
      setCropData(res.data.cropData);
      setIsLoading(false);
    }).catch(err => {
      console.log(err);
    });
  }, [city]);

  if (isLoading) {
    return (
      <RecommendedCropsSkeleton />
    )
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Crops</CardTitle>
        <CardDescription className="flex items-center mt-2"><ThumbsUp className="h-4 w-4 mr-1" />Recommended crops based on location and weather for optimal farming</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full border-none whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4 pt-0">
            {cropData.map((c, i) => (
            <figure key={i} className="shrink-0">
                <figcaption className="pt-2 text-xs text-muted-foreground">
                    <div className="flex flex-col justify-center items-center w-[150px]">
                        <div className="text-[16px] font-bold text-black">{c.name}</div>
                        <Sprout className="my-2 h-6 w-6 text-green-600" />
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

export function RecommendedCropsSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Crops</CardTitle>
        <CardDescription className="flex items-center mt-2"><ThumbsUp className="h-4 w-4 mr-1" />Recommended crops based on location and weather for optimal farming</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full border-none whitespace-nowrap rounded-md border">
        <div className="flex w-full space-x-4 p-4 pt-0 justify-between">
            {Array(5).fill(0).map((_, i) => (
            <figure key={i} className="shrink-0">
                <figcaption className="pt-2 text-xs text-muted-foreground">
                    <div className="flex flex-col justify-between items-center w-full">
                        <Skeleton className="h-4 w-[80px]" />
                        <Skeleton className="my-2 h-6 w-6 rounded-full" />
                        <Skeleton className="h-4 w-[90px]" />
                        <Skeleton className="h-4 mt-1 w-[70px]" />
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


