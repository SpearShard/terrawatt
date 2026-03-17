export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1c2e] to-[#0b1320] flex items-start justify-center px-6 py-16">
      <div className="max-w-3xl w-full bg-[#16263d] border border-[#2a3b55] rounded-xl p-10 shadow-lg">

        <h1 className="text-4xl font-semibold text-white mb-8">
          Delete Account
        </h1>

        <p className="text-gray-300 leading-relaxed mb-8">
          If you would like to delete your account and associated data from
          Teraawatt, you can request account deletion using the method below.
        </p>

        <h2 className="text-2xl font-semibold text-white mb-4">
          How to request deletion:
        </h2>

        <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-10">
          <li>Send an email to support@teraawatt.com</li>
          <li>Use subject: "Account Deletion Request"</li>
          <li>Include your registered email or phone number.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-white mb-4">
          What data will be deleted:
        </h2>

        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-10">
          <li>User profile information</li>
          <li>Login credentials</li>
          <li>Usage data related to your account</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mb-4">
          Data Retention:
        </h2>

        <p className="text-gray-300 mb-10">
          Some data may be retained for legal or security purposes for up to
          30 days.
        </p>

        <h2 className="text-2xl font-semibold text-white mb-4">
          Deletion Time:
        </h2>

        <p className="text-gray-300 mb-10">
          Your account and data will be permanently deleted within 7 days after
          verification.
        </p>

        <hr className="border-[#2a3b55] mb-6" />

        <p className="text-gray-300">
          If you have any questions, contact us at{" "}
          <a
            href="mailto:support@teraawatt.com"
            className="text-blue-400 hover:underline"
          >
            support@teraawatt.com
          </a>.
        </p>

      </div>
    </div>
  );
}