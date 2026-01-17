import ContactForm from "@/components/form/ContactForm";


export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Header */}
        <section className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Contact Sales
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Connect with our sales engineers to discuss enterprise solutions,
            infrastructure requirements, and bulk procurement options.
          </p>
        </section>

        {/* Content */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Why Contact Our Sales Team?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We help businesses select reliable, scalable, and secure
                technology solutions aligned with real-world workloads.
              </p>
            </div>

            <ul className="space-y-2 text-gray-700">
              <li>• Enterprise-grade hardware consultation</li>
              <li>• Custom infrastructure planning</li>
              <li>• Bulk and volume-based pricing</li>
              <li>• Dedicated technical guidance</li>
            </ul>

            <p className="text-sm text-gray-500">
              Typical response time: within 1 business day
            </p>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

        </section>

      </div>
    </main>
  );
}
