import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-4xl font-bold">Welcome to FarmXpert</h1>
      <p className="text-lg">
        FarmXpert is a platform that allows farmers to easily manage their
        farms and track their performance.
      </p>
      <Button className="cursor-pointer" onClick={() => navigate("/dashboard")}>Go to Dashboard</Button>
    </div>
  )
}