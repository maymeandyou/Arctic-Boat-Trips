import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@arcticexplorer.no",
      description: "Get in touch for bookings and inquiries",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+47 79 02 xxxx",
      description: "Call us during business hours",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Longyearbyen, Svalbard",
      description: "Meet us at the harbor",
    },
    {
      icon: Clock,
      title: "Season",
      details: "May - September",
      description: "Operating during Arctic summer",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to embark on your Arctic adventure? Contact us for bookings, transport services, or any questions
            about our tours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-slate-900 mb-2">{item.details}</p>
                <p className="text-sm text-slate-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-slate-900 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Safety & Practical Information</h3>
          <p className="text-slate-300 mb-6 max-w-3xl mx-auto">
            Read more about clothing requirements, safety procedures, and what to expect on our tours. We provide all
            necessary Arctic gear and safety equipment for your comfort and protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Practical Info
            </a>
            <a
              href="#"
              className="border border-white text-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Logistics Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
