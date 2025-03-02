import FeaturesAndTestimonials from "@/components/FeaturesTestimonials";
import { Leaf } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f8f8]">
      <header className="w-full py-6 px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-medium">FarmXpert</span>
          </div>
          <button className="bg-white rounded-full px-6 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-shadow" onClick={() => navigate("/dashboard")}>
            Dashboard
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        <section className="w-full py-16 md:py-12 border-y border-gray-200">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-pretty tracking-wide">
              AI-Powered Farming Insights for Smarter Agriculture
            </h1>
            <p className="text-md text-gray-600 max-w-2xl mx-auto mb-8">
              Transform your farming practices with AI-driven insights in seconds! Let FarmXpert create personalized
              recommendations while you focus on growing your crops.
            </p>
            <button className="bg-gray-900 text-white rounded-full px-7 py-2 font-medium text-md hover:bg-gray-800 transition-colors" onClick={() => navigate("/dashboard")}>
              Get started for free
            </button>
          </div>
        </section>

        <section className="w-full py-16 md:py-12">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white">
              <div className="flex mt-4 space-x-2">
                <div className="ml-5 w-4 h-4 rounded-full bg-red-500"></div>
                <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
              </div>
              <div className="relative pt-4 z-10 bg-white rounded-xl shadow-lg overflow-hidden">
                <img src="/image.png" alt="image" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <FeaturesAndTestimonials />
      </main>

      <footer className="w-full py-6 px-8 border-t border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-medium">FarmXpert</span>
          </div>
          <div>
            <span className="text-gray-600">© 2025 FarmXpert. All rights reserved.</span>
          </div>  
        </div>
      </footer>
    </div>
  )
}

