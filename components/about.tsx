export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Arctic Excellence Since Day One</h2>
            <div className="space-y-4 text-lg text-slate-600">
              <p>
                From early May to late September, Svalbard's coastline becomes a gateway to Arctic adventure. We offer
                high-quality boat tours that explore the islands' spectacular fjords, towering glaciers, thriving
                wildlife, and even the world's northernmost community – Ny-Ålesund.
              </p>
              <p>
                Whether you're joining a wildlife safari, visiting a glacier front, or traveling toward the far reaches
                of the archipelago, every journey is led by experienced guides and designed to maximize both comfort and
                discovery.
              </p>
              <p>
                We use our boats for daily wildlife trips, but it's also possible to book them for transportation. For
                transport services, please contact us or check out our logistics information.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=500&width=600"
              alt="Arctic boat tour experience"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years of Arctic Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
