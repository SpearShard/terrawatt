"use client";

import Navbar from "@/components/Navbar";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white min-h-screen px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-8">

          <header className="space-y-3">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-sm text-gray-400">
              Effective Date: <span className="italic">28-01-2026</span><br />
              Last Updated: <span className="italic">28-01-2026</span>
            </p>
          </header>

          <p className="text-gray-300 leading-relaxed">
            Teraawatt PowerLabs Private Limited (“Company,” “we,” “our,” or “us”)
            operates the <span className="italic">[App Name]</span> mobile
            application and website (collectively, the “Platform”) to help users
            locate nearby EV charging stations and related services.
          </p>

          <p className="text-gray-300 leading-relaxed">
            This Privacy Policy explains how we collect, use, store, and share
            your information when you use our Platform. We are committed to
            protecting your personal data in compliance with the Digital
            Personal Data Protection Act, 2023 (DPDP Act) and the Information
            Technology Act, 2000 (IT Act), including its rules on reasonable
            security practices.
          </p>

          {/* 1 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              1. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, vehicle details (if provided).
              </li>
              <li>
                <strong>Location Data:</strong> GPS and network-based location
                data to show nearby charging stations.
              </li>
              <li>
                <strong>Payment Information:</strong> Payment details processed
                securely by third-party providers.
              </li>
              <li>
                <strong>Device & Technical Data:</strong> IP address, device
                type, OS, app version, and usage statistics.
              </li>
              <li>
                <strong>Cookies & Analytics:</strong> Usage data collected via
                cookies and analytics tools (e.g., Google Analytics).
              </li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              2. Purpose of Data Collection & Usage
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Provide core services and nearby charging locations.</li>
              <li>Process payments and manage bookings.</li>
              <li>Personalize and improve user experience.</li>
              <li>Analyze performance and usage trends.</li>
              <li>Comply with legal, regulatory, and security obligations.</li>
            </ul>
            <p className="text-gray-300 mt-3">
              We follow data minimization and purpose limitation principles.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Consent</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                By using the Platform, you consent to data processing as
                described.
              </li>
              <li>
                Explicit permission is requested for location tracking.
              </li>
              <li>
                Consent may be withdrawn by changing app settings or contacting
                us.
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              4. User Rights Under DPDP Act
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Right to access and correct personal data.</li>
              <li>Right to withdraw consent.</li>
              <li>Right to request deletion (subject to legal obligations).</li>
              <li>Right to grievance redressal.</li>
            </ul>
            <p className="text-gray-300 mt-3">
              Requests can be submitted via email at{" "}
              <span className="italic">[Insert Privacy Email]</span>.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Data Sharing</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Service providers (cloud, analytics, payments).</li>
              <li>EV charging partners for service fulfillment.</li>
              <li>Third-party integrations such as map services.</li>
              <li>Government authorities when legally required.</li>
            </ul>
            <p className="text-gray-300 mt-3">
              We do not sell or rent personal data.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Data Retention</h2>
            <p className="text-gray-300">
              Data is retained only as long as necessary or as required by law
              and is securely deleted afterward.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">7. Data Security</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Encryption of sensitive data.</li>
              <li>Secure servers with restricted access.</li>
              <li>Regular audits and monitoring.</li>
            </ul>
            <p className="text-gray-300 mt-3">
              No system is 100% secure.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              8. Cookies & Tracking
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Cookies improve experience and remember preferences.</li>
              <li>Users may manage cookies via browser settings.</li>
              <li>Analytics tools are used for performance insights.</li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              9. GPS & Location Tracking
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Location data helps find nearby charging stations.</li>
              <li>Tracking occurs only with user permission.</li>
              <li>Disabling location may limit features.</li>
            </ul>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              10. Data Protection Officer (DPO)
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Data Protection Officer<br />
              <span className="italic">[Insert DPO Name]</span><br />
              Email: <span className="italic">[Insert DPO Email]</span><br />
              Address: <span className="italic">[Insert Company Address]</span>
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              11. Updates to This Policy
            </h2>
            <p className="text-gray-300">
              Updates will be posted on this page with a revised “Last Updated”
              date.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">12. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              Teraawatt PowerLabs Private Limited<br />
              <span className="italic">[Insert Registered Address]</span><br />
              Email: <span className="italic">[Insert Privacy/Support Email]</span>
            </p>
          </section>

        </div>
      </main>
    </>
  );
}
