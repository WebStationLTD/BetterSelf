import TicketIframeController from "../../components/TicketIframeController";

/**
 * Test Page - Iframe Testing
 *
 * This page is used for testing the ticket booking iframe
 * without any visual overlays or masks. It provides a clean
 * environment to evaluate the iframe functionality.
 *
 * Route: /test
 */

// Page metadata for SEO and social sharing
export const metadata = {
  title: "Test Iframe - BetterSelf Conference 2025",
  description: "Test page for ticket booking iframe functionality",
  robots: "noindex, nofollow", // Prevent search engine indexing
};

export default function TestPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Page Header */}
      {/* <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Iframe Test Page
            </h1>
            <div className="text-sm text-gray-500">
              BetterSelf Conference 2025
            </div>
          </div>
        </div>
      </header> */}

      {/* Test Instructions */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">
            🧪 Test Environment
          </h2>
          <p className="text-blue-800 text-sm">
            This page displays the ticket booking iframe without any masks or
            overlays. Use it to test the raw iframe functionality and responsive
            behavior.
          </p>
        </div>
      </section> */}

      {/* Iframe Container */}
      <section className="w-full">
        <TicketIframeController />
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-500">
            Test Page - BetterSelf Conference 2025 |
            <a
              href="/"
              className="ml-2 text-blue-600 hover:text-blue-800 underline"
            >
              ← Back to Homepage
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
