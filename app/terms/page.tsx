"use client";

import Navbar from "@/components/Navbar";

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white min-h-screen px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* HEADER */}
          <header className="space-y-3">
            <h1 className="text-4xl font-bold">Terms & Conditions</h1>
            <p className="text-sm text-gray-400">
              Effective Date: <span className="italic">[Insert Date]</span><br />
              Last Updated: <span className="italic">[Insert Date]</span>
            </p>
          </header>

          <p className="text-gray-300 leading-relaxed">
            Welcome to <strong>Teraawatt PowerLabs Private Limited</strong>
            (“Company,” “we,” “our,” or “us”). These Terms & Conditions (“Terms”)
            govern your use of our website, mobile application, and services
            (collectively, the “Platform”). By accessing or using the Platform,
            you agree to these Terms. If you do not agree, you must discontinue
            use immediately.
          </p>

          {/* 1 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Eligibility</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                You must be at least 18 years old and capable of entering into a
                legally binding agreement under Indian law.
              </li>
              <li>
                You confirm that all information provided is accurate and
                truthful.
              </li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Account Creation</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Certain services require account creation.</li>
              <li>You are responsible for maintaining accurate account details.</li>
              <li>
                You must safeguard your login credentials and report unauthorized
                access immediately.
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Services Provided</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                The Platform enables users to locate EV charging stations, book
                charging slots, and make payments.
              </li>
              <li>
                Teraawatt PowerLabs Private Limited acts solely as a technology
                aggregator and does not own or operate charging stations.
              </li>
              <li>
                Charging services are provided by third-party charging station
                partners.
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              4. User Agreement (Aggregator Specific)
            </h2>

            <h3 className="font-semibold mt-4 mb-1">a. Relationship Between Parties</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Users / EV Owners use the Platform to book charging services.</li>
              <li>
                Charging Station Partners are independent third-party operators.
              </li>
              <li>
                The Company provides technology to connect users with partners.
              </li>
            </ul>

            <h3 className="font-semibold mt-4 mb-1">b. Bookings</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Bookings are subject to station availability.</li>
              <li>
                Booking confirmations are provided electronically and must be
                verified by users.
              </li>
            </ul>

            <h3 className="font-semibold mt-4 mb-1">c. Payments</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Payments are processed via secure third-party gateways.</li>
              <li>
                The Company is not liable for payment gateway errors or delays.
              </li>
            </ul>

            <h3 className="font-semibold mt-4 mb-1">d. Cancellations & Refunds</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Cancellations are governed by the Refund & Cancellation Policy.</li>
              <li>
                Refunds, if applicable, are issued to the original payment method.
              </li>
            </ul>

            <h3 className="font-semibold mt-4 mb-1">e. Liability</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                The Company is not responsible for charging station availability,
                pricing, quality, or safety.
              </li>
              <li>
                Charging station partners are solely responsible for service
                delivery.
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">5. User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Do not misuse or disrupt the Platform.</li>
              <li>Do not upload harmful, false, or illegal content.</li>
              <li>Comply with all applicable laws and regulations.</li>
              <li>Use booking and location services responsibly.</li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Intellectual Property</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                All content, software, designs, and logos belong to the Company
                or its licensors.
              </li>
              <li>
                You may not copy, modify, or distribute content without written
                permission.
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              7. Third-Party Services & Integrations
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Third-party services may include maps, analytics, and payments.</li>
              <li>
                We are not responsible for availability or performance of these
                services.
              </li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              8. Refund & Cancellation Policy
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                User-initiated cancellations are refundable if made within the
                specified timeframe.
              </li>
              <li>
                Partner-initiated cancellations result in a full refund.
              </li>
              <li>No-shows and late cancellations are non-refundable.</li>
              <li>
                Approved refunds are processed within
                <span className="italic"> [Insert Number]</span> business days.
              </li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              9. Shipping & Delivery Policy (Hardware)
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Products are shipped via trusted courier partners.</li>
              <li>
                Estimated delivery time:
                <span className="italic"> [Insert Range]</span>.
              </li>
              <li>
                Delivery delays due to external factors are not the Company’s
                responsibility.
              </li>
              <li>Tracking details will be provided post-shipment.</li>
            </ul>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              10. Limitation of Liability
            </h2>
            <p className="text-gray-300">
              The Platform is provided “as is” and “as available.” The Company
              does not guarantee uninterrupted or error-free services and is not
              liable for indirect or consequential damages to the fullest extent
              permitted by law.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">11. Indemnity</h2>
            <p className="text-gray-300">
              You agree to indemnify and hold harmless the Company and its
              affiliates from claims arising out of your use of the Platform,
              breach of these Terms, or violation of laws.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">12. Termination</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Accounts may be suspended or terminated for violations.</li>
              <li>Users may discontinue use at any time.</li>
            </ul>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">13. Dispute Resolution</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Governed by the laws of India.</li>
              <li>
                Courts in
                <span className="italic"> [Insert City/State]</span> shall have
                exclusive jurisdiction.
              </li>
              <li>Amicable resolution is encouraged.</li>
            </ul>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              14. Changes to Terms
            </h2>
            <p className="text-gray-300">
              Updates will be posted with a revised “Last Updated” date.
              Continued use implies acceptance.
            </p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">15. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              Teraawatt PowerLabs Private Limited<br />
              <span className="italic">[Insert Registered Address]</span><br />
              Email: <span className="italic">[Insert Support Email]</span>
            </p>
          </section>

        </div>
      </main>
    </>
  );
}
