"use client";

import Navbar from "@/components/Navbar";

export default function PaymentGatewayCompliancePage() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white min-h-screen px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* HEADER */}
          <header className="space-y-3">
            <h1 className="text-4xl font-bold">
              Payment Gateway Compliance
            </h1>
            <p className="text-sm text-gray-400">
              Last Updated: <span className="italic">[Insert Date]</span>
            </p>
          </header>

          {/* INTRO */}
          <p className="text-gray-300 leading-relaxed">
            Teraawatt PowerLabs Private Limited is committed to ensuring secure,
            transparent, and compliant digital payment processing. Our payment
            practices adhere to the guidelines issued by the Reserve Bank of India
            (RBI), National Payments Corporation of India (NPCI), and globally
            recognized security standards.
          </p>

          {/* 1. RBI GUIDELINES */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              1. RBI Guidelines on Payment Aggregators & Payment Gateways
            </h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Teraawatt PowerLabs Private Limited complies with the Reserve Bank of
              India (RBI) Guidelines governing Payment Aggregators and Payment
              Gateways to ensure lawful and secure transaction processing.
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                We integrate only with RBI-authorized and regulated payment
                gateways such as Razorpay, PayU, Cashfree, or equivalent
                providers.
              </li>
              <li>
                In accordance with RBI regulations and PCI-DSS tokenization
                norms, Teraawatt does not store customer card details on its
                servers.
              </li>
              <li>
                All card and payment data is processed securely within the
                infrastructure of our partnered payment gateways.
              </li>
              <li>
                Users are always redirected to a secure payment environment for
                completing transactions.
              </li>
            </ul>
          </section>

          {/* 2. PCI DSS */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              2. PCI DSS Compliance
            </h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              The Payment Card Industry Data Security Standard (PCI DSS) is a
              global benchmark for protecting cardholder data and preventing
              payment fraud.
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                Teraawatt PowerLabs Private Limited does not directly store,
                process, or transmit cardholder data.
              </li>
              <li>
                Responsibility for PCI DSS compliance rests with our integrated
                payment gateway partners who are certified under PCI DSS.
              </li>
              <li>
                We ensure secure integration practices, encrypted communication,
                and adherence to recommended security controls when interfacing
                with payment gateways.
              </li>
              <li>
                Integration protocols are reviewed periodically to minimize the
                risk of unauthorized access, fraud, or data breaches.
              </li>
            </ul>
          </section>

          {/* 3. UPI / NPCI */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              3. UPI / NPCI Compliance
            </h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              For payments made via Unified Payments Interface (UPI), Teraawatt
              PowerLabs Private Limited follows the guidelines issued by the
              National Payments Corporation of India (NPCI) and the RBI.
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <strong>Two-Factor Authentication (2FA):</strong> All UPI
                transactions require authentication through the user’s linked
                mobile device and banking application.
              </li>
              <li>
                <strong>Data Security:</strong> We do not store UPI PINs,
                credentials, or sensitive banking information. These are handled
                exclusively by the user’s bank and the UPI system.
              </li>
              <li>
                <strong>Fraud Monitoring:</strong> Suspicious or anomalous
                transactions are flagged and handled in accordance with RBI and
                NPCI directives.
              </li>
            </ul>
          </section>

        </div>
      </main>
    </>
  );
}
