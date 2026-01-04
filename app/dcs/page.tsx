"use client";

import Navbar from "@/components/Navbar";

export default function DataSecurityCompliancePage() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white min-h-screen px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* HEADER */}
          <header className="space-y-3">
            <h1 className="text-4xl font-bold">Data & Security Compliance</h1>
            <p className="text-sm text-gray-400">
              Last Updated: <span className="italic">[Insert Date]</span>
            </p>
          </header>

          {/* INTRO */}
          <p className="text-gray-300 leading-relaxed">
            At <strong>Teraawatt PowerLabs Private Limited</strong>, we are committed
            to safeguarding your personal information and ensuring the highest
            standards of data protection and security. Our practices comply with
            India’s <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong>{" "}
            and the <strong>Information Technology Act, 2000</strong>, along with
            applicable rules on reasonable security practices.
          </p>

          {/* 1 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              1. Data Protection & Security Policy
            </h2>

            <h3 className="font-semibold mb-2">How We Protect Your Data</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <strong>Encryption:</strong> Sensitive data such as login
                credentials, payment information, and location data is encrypted
                during transmission and storage using industry-standard protocols
                (SSL/TLS and AES).
              </li>
              <li>
                <strong>Payment Security:</strong> We work exclusively with
                RBI-compliant and PCI-DSS certified payment gateways. We do not
                store your card or banking details on our servers.
              </li>
              <li>
                <strong>Cloud Storage Compliance:</strong> User data is stored on
                secure cloud infrastructure compliant with ISO/IEC 27001 or
                equivalent international security standards.
              </li>
              <li>
                <strong>Access Control:</strong> Access to personal data is
                restricted to authorized personnel only and governed by strict
                confidentiality obligations.
              </li>
              <li>
                <strong>Data Breach Response:</strong> In the event of a data
                breach, we will promptly notify affected users and relevant
                authorities as required by law.
              </li>
              <li>
                <strong>Regular Audits:</strong> We conduct periodic internal and
                third-party security audits to maintain compliance with evolving
                data protection standards.
              </li>
            </ul>
          </section>

          {/* RIGHTS */}
          <section>
            <h3 className="text-xl font-semibold mb-2">Your Rights</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                You may request access to, correction of, or deletion of your
                personal data at any time.
              </li>
              <li>
                You may withdraw consent for data collection and usage. Upon
                withdrawal, we will stop processing your data unless retention is
                legally required.
              </li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Cookie Policy</h2>

            <p className="text-gray-300 leading-relaxed">
              Teraawatt PowerLabs Private Limited uses cookies and similar tracking
              technologies to enhance user experience, improve services, and
              provide personalized recommendations.
            </p>

            <h3 className="font-semibold mt-4 mb-2">What Are Cookies?</h3>
            <p className="text-gray-300 leading-relaxed">
              Cookies are small text files stored on your device when you access
              our website or application. They help us remember preferences,
              analyze usage patterns, and deliver a smoother experience.
            </p>

            <h3 className="font-semibold mt-4 mb-2">Types of Cookies We Use</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <strong>Essential Cookies:</strong> Required for core platform
                functionality such as login sessions and navigation.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand usage
                behavior, performance metrics, and service improvements.
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember user preferences
                such as language, region, or saved settings.
              </li>
              <li>
                <strong>Advertising / Marketing Cookies:</strong> Enable delivery
                of relevant offers, promotions, and partner advertisements.
              </li>
              <li>
                <strong>Location Tracking:</strong> With your consent, GPS and
                location-based data may be used for EV services such as locating
                charging stations and navigation assistance.
              </li>
            </ul>
          </section>

          {/* MANAGING COOKIES */}
          <section>
            <h3 className="text-xl font-semibold mb-2">Managing Cookies</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                You can manage or disable cookies through your browser or app
                settings.
              </li>
              <li>
                Disabling certain cookies may affect the functionality and
                performance of our services.
              </li>
            </ul>
          </section>

          {/* THIRD PARTY */}
          <section>
            <h3 className="text-xl font-semibold mb-2">Third-Party Tools</h3>
            <p className="text-gray-300 leading-relaxed">
              We may use trusted third-party services such as analytics providers,
              payment gateways, and advertising networks. These providers may use
              cookies or tracking technologies in compliance with applicable laws
              and their respective privacy policies.
            </p>
          </section>

        </div>
      </main>
    </>
  );
}
