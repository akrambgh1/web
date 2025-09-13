

export default function PrivacyPolicy() {
  return (
    <div className="bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">🔍 What We Collect</h2>
          <p>
            When you use our services or get in touch with WebLocators, we may collect:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Your name and email address</li>
            <li>Messages or requests you send us</li>
            <li>Cookies and usage data via analytics</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">📦 How We Use Your Data</h2>
          <p>
            We use the information to improve our services, communicate with you, and ensure a smooth user experience.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">🔐 Your Privacy Rights</h2>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Request access to your data</li>
            <li>Request deletion or correction</li>
            <li>Withdraw consent anytime</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">🍪 Cookies</h2>
          <p>
            We use cookies to improve site functionality and analyze traffic. You can manage or disable cookies in your browser settings.
          </p>
        </section>

        <section className="mt-10 border-t pt-10">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Last updated: August 2025. If you have any questions, contact us at contact@weblocators.com
          </p>
        </section>
      </div>
    </div>
  );
}
