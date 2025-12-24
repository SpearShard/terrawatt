// app/privacy-policy/page.tsx

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

        <iframe
          src="/tcp.pdf#toolbar=0&navpanes=0&scrollbar=0"
          width="100%"
          height="800px"
          frameBorder="0"
          className="border-none"
        >
          <p className="text-center text-gray-600">
            Unable to display PDF file.{' '}
            <a href="/tcp.pdf" className="text-green-600 hover:underline">
              Download instead
            </a>.
          </p>
        </iframe>

        <div className="text-center mt-12">
          <a href="/" className="text-green-600 hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}