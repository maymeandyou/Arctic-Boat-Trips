import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Services() {
  const tours = [
    {
      title: "Wildlife Safari",
      description: "Encounter Arctic foxes, polar bears, seals, and countless seabirds in their natural habitat",
      image: "/placeholder.svg?height=300&width=400",
      duration: "6-8 hours",
      season: "May - September",
      price: "From €180",
    },
    {
      title: "Glacier Expedition",
      description: "Get up close to massive glaciers and witness the raw power of Arctic ice formations",
      image: "/placeholder.svg?height=300&width=400",
      duration: "4-6 hours",
      season: "June - August",
      price: "From €150",
    },
    {
      title: "Ny-Ålesund Discovery",
      description: "Visit the world's northernmost research community and learn about Arctic science",
      image: "/placeholder.svg?height=300&width=400",
      duration: "Full day",
      season: "July - August",
      price: "From €250",
    },
    {
      title: "Fjord Explorer",
      description: "Navigate through spectacular fjords and discover hidden Arctic landscapes",
      image: "/placeholder.svg?height=300&width=400",
      duration: "5-7 hours",
      season: "May - September",
      price: "From €160",
    },
    {
      title: "Photography Tour",
      description: "Capture the Arctic's beauty with guidance from professional photographers",
      image: "/placeholder.svg?height=300&width=400",
      duration: "8-10 hours",
      season: "May - September",
      price: "From €220",
    },
    {
      title: "Custom Transport",
      description: "Private boat charter for research, logistics, or special expeditions",
      image: "/placeholder.svg?height=300&width=400",
      duration: "Flexible",
      season: "May - September",
      price: "Contact us",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Arctic Adventures Await</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Click the pictures below for more info and booking. From early May to late September, Svalbard's coastline
            becomes a gateway to Arctic adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-slate-900">
                    {tour.season}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{tour.title}</CardTitle>
                <CardDescription className="text-slate-600">{tour.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-slate-500">{tour.duration}</span>
                  <span className="font-semibold text-blue-600">{tour.price}</span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Learn More & Book</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
