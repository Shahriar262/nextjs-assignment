export default function AboutPage() {
  return (
    <main className="min-h-screen py-26 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            About TechHive
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            A technology-focused platform delivering reliable hardware and
            infrastructure solutions for modern professionals and enterprises.
          </p>
        </section>

        {/* Mission */}
        <section className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              TechHive exists to simplify technology decisions. We help
              developers, designers, IT teams, and businesses choose
              high-performance products that scale with real-world demands.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What We Offer
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Developer & enterprise-grade laptops</li>
              <li>• High-performance desktops & servers</li>
              <li>• Professional peripherals & accessories</li>
              <li>• Cloud-ready and scalable hardware solutions</li>
            </ul>
          </div>
        </section>

        {/* Vision */}
        <section className="border-t pt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Long-Term Vision
          </h2>
          <p className="text-gray-700 max-w-4xl leading-relaxed">
            Our vision is to become a trusted technology partner for individuals
            and organizations by providing transparent information, reliable
            products, and future-ready solutions aligned with modern software
            and infrastructure needs.
          </p>
        </section>
      </div>
    </main>
  );
}
