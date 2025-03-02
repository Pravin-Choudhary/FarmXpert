export default function FeaturesAndTestimonials() {
    return (
      <>
        {/* Features Section */}
        <section className="w-full py-16 md:py-24 border-y border-gray-200">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              Everything you need for smart farming
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto tracking-wide">
              Comprehensive tools and insights to optimize your farming operations and increase yields
            </p>
          </div>
  
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-50"></div>
  
              <div className="p-6 md:p-10 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Feature 1 */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-full bg-green-100 mb-6 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-green-500"></div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">AI Crop Recommendations</h3>
                      <div className="space-y-2">
                        <div className="h-4">Get smart crop suggestions based on climate, </div>
                        <div className="h-4">location, and season, ensuring higher yields </div>
                        <div className="h-4">and sustainable farming practices</div>
                      </div>
                    </div>
                  </div>
  
                  {/* Feature 2 */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-full bg-blue-100 mb-6 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Weather Insights</h3>
                      <div className="space-y-2">
                        <div className="h-4">Stay ahead with real-time forecasts, rainfall  </div>
                        <div className="h-4">predictions, and temperature trends to plan</div>
                        <div className="h-4">farming activities efficiently and prevent losses.</div>
                      </div>
                    </div>
                  </div>
  
                  {/* Feature 3 */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-full bg-yellow-100 mb-6 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">AI Fertilizer Recommendations</h3>
                      <div className="space-y-2">
                        <div className="h-4">Receive precise fertilizer suggestions tailored to</div>
                        <div className="h-4">soil health and crop needs, optimizing growth</div>
                        <div className="h-4">while reducing unnecessary chemical usage.</div>
                      </div>
                    </div>
                  </div>
  
                  {/* Feature 4 */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-full bg-purple-100 mb-6 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-purple-500"></div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Best Farming Practices</h3>
                      <div className="space-y-2">
                        <div className="h-4">Access AI-driven techniques for irrigation,</div>
                        <div className="h-4">pest control, and soil management to enhance</div>
                        <div className="h-4">productivity and ensure sustainable agriculture.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Testimonials Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Trusted by Farmers Across India
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto tracking-wide text-pretty">
                See how FarmXpert is helping farmers optimize their yields and improve their operations
              </p>
            </div>
  
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-50"></div>
  
              <div className="p-6 md:p-10 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Testimonial 1 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-green-100 mr-4"></div>
                      <div>
                        <h4 className="font-semibold">Sangram Patil</h4>
                        <p className="text-sm text-gray-600">Wheat Farmer, Kolhapur</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="tracking-wide text-pretty">FarmXpert’s AI crop recommendations have boosted my wheat yield significantly. It’s like having a personal farming expert at my fingertips!</div>
                    </div>
                    <div className="mt-6 flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
  
                  {/* Testimonial 2 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-blue-100 mr-4"></div>
                      <div>
                        <h4 className="font-semibold">Rahul Kale</h4>
                        <p className="text-sm text-gray-600">Organic Farmer, Pune</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="tracking-wide text-pretty">The weather insights are super accurate! I avoided major losses by adjusting my irrigation schedule based on real-time forecasts.</div>
                    </div>
                    <div className="mt-6 flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
  
                  {/* Testimonial 3 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-yellow-100 mr-4"></div>
                      <div>
                        <h4 className="font-semibold">Aniket Jadhav</h4>
                        <p className="text-sm text-gray-600">Rice Farmer, Sangli</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="tracking-wide text-pretty">Joining the farming community on FarmXpert helped me connect with experienced farmers. We share tips and grow together!</div>
                    </div>
                    <div className="mt-6 flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
  
                  {/* Testimonial 4 */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-purple-100 mr-4"></div>
                      <div>
                        <h4 className="font-semibold">Rakesh Kumar</h4>
                        <p className="text-sm text-gray-600">Vineyard Owner, Odisha</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="tracking-wide text-pretty">I used to overuse fertilizers, but now FarmXpert suggests exactly what my soil needs. My crops are healthier than ever!</div>
                    </div>
                    <div className="mt-6 flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
  
  