export default function TermsPage() {
  return (
    <main className="min-h-screen py-26 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-4xl font-semibold text-gray-900">
          Terms of Service
        </h1>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Platform Usage
          </h2>
          <p className="text-gray-700 leading-relaxed">
            TechHive provides technology products and informational content.
            Users agree to use the platform for lawful, professional, and
            ethical purposes only.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Product Responsibility
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Product specifications are provided for informational purposes.
            Users are responsible for ensuring compatibility with their specific
            use cases.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            TechHive shall not be liable for indirect or consequential damages
            arising from the use or inability to use products or services listed
            on the platform.
          </p>
        </section>

        <section className="border-t pt-6 text-sm text-gray-500">
          By using this platform, you agree to these terms.
        </section>
      </div>
    </main>
  );
}
