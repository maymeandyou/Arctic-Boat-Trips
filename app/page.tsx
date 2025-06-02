import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Boats } from "@/components/boats"
import { Booking } from "@/components/booking"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Boats />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
