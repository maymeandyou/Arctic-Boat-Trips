import { Anchor, Facebook, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Anchor className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Arctic Explorer</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Experience the Arctic like never before with our custom-designed boat tours. Explore glaciers, wildlife,
              and remote settlements in the world's northernmost archipelago.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Tours
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#boats" className="hover:text-white transition-colors">
                  Our Fleet
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">
                  Book Now
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Wildlife Safaris
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Glacier Tours
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Photography Tours
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Custom Transport
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Logistics
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Arctic Explorer. All rights reserved. | Operating under Arctic tourism regulations</p>
        </div>
      </div>
    </footer>
  )
}
