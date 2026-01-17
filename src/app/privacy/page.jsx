export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-26 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-4xl font-semibold text-gray-900">Privacy Policy</h1>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We collect minimal user data necessary for authentication, order
            processing, and platform improvement. This may include name, email
            address, and usage analytics.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            How We Use Your Data
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Collected data is used strictly for service delivery, customer
            support, and improving system reliability. We do not sell or trade
            personal data.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement industry-standard security practices including
            encrypted connections and secure authentication mechanisms to
            protect user data.
          </p>
        </section>

        <section className="border-t pt-6 text-sm text-gray-500">
          Last updated: 2026
        </section>
      </div>
    </main>
  );
}
