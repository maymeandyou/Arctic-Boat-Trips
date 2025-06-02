import { Shield, Thermometer, Eye, Zap } from "lucide-react"

export function Boats() {
  const features = [
    {
      icon: Shield,
      title: "Arctic Safety",
      description: "Custom-built for extreme Arctic conditions with advanced safety systems",
    },
    {
      icon: Thermometer,
      title: "Heated Comfort",
      description: "Fully heated, enclosed cabins to keep you warm in any weather",
    },
    {
      icon: Eye,
      title: "Excellent Visibility",
      description: "Panoramic windows and open deck access for optimal wildlife viewing",
    },
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description: "Fast, efficient travel to maximize your time exploring",
    },
  ]

  return (
    <section id="boats" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Arctic Fleet</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Three custom-built Red Bay Stormforce boats, specially designed for Arctic conditions. These heated,
            enclosed RIBs combine safety, speed, and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Red Bay Stormforce boat"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">12</div>
              <div className="text-slate-300">Passenger Capacity</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">45</div>
              <div className="text-slate-300">Knots Max Speed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">8h</div>
              <div className="text-slate-300">Range Duration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
