"use client";

import Navbar from "@/components/Navbar";

export default function CorporateGovernancePage() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white min-h-screen px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* HEADER */}
          <header className="space-y-3">
            <h1 className="text-4xl font-bold">
              Corporate Governance & Legal Notices
            </h1>
            <p className="text-sm text-gray-400">
              Last Updated: <span className="italic">28-01-2026</span>
            </p>
          </header>

          {/* 1. DISCLAIMER */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Disclaimer</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Teraawatt PowerLabs Private Limited operates an aggregator platform
              to help users locate and access EV charging stations. While we make
              reasonable efforts to ensure information accuracy and reliability:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                We do not guarantee uninterrupted service availability or the
                accuracy of third-party data such as charging station uptime,
                tariffs, or availability.
              </li>
              <li>
                We are not responsible for outages, downtime, partner defaults,
                or inaccuracies originating from charging station operators or
                third-party providers.
              </li>
              <li>
                To the extent permitted by law, we shall not be liable for losses,
                damages, or inconvenience arising from reliance on the Platform,
                except where required under applicable laws.
              </li>
            </ul>
          </section>

          {/* 2. INTELLECTUAL PROPERTY */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              2. Intellectual Property Policy
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                All intellectual property rights related to the Teraawatt
                PowerLabs Private Limited brand, trademarks, trade name, logo,
                software, designs, and content are exclusively owned by the
                Company or its licensors.
              </li>
              <li>
                Users and partners are strictly prohibited from copying,
                reverse-engineering, reselling, redistributing, or exploiting
                any part of the Platform without prior written authorization.
              </li>
              <li>
                Unauthorized use of intellectual property may result in legal
                action under applicable intellectual property laws in India and
                other jurisdictions.
              </li>
            </ul>
          </section>

          {/* 3. MOTOR VEHICLE AGGREGATOR */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              3. Compliance with Motor Vehicle Aggregator Guidelines
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If Teraawatt PowerLabs Private Limited expands its services to
              include EV taxi or transportation aggregation, we will comply with
              the Motor Vehicle Aggregator Guidelines issued by the Ministry of
              Road Transport and Highways (MoRTH), including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Driver background verification and licensing.</li>
              <li>Transparent fare disclosure and digital receipts.</li>
              <li>Safety standards and mandatory insurance coverage.</li>
              <li>Customer grievance redressal as prescribed by law.</li>
            </ul>
          </section>

          {/* 4. CONSUMER PROTECTION */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              4. Compliance with Consumer Protection (E-Commerce) Rules, 2020
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              As an intermediary and service platform, Teraawatt PowerLabs Private
              Limited complies with the Consumer Protection (E-Commerce) Rules,
              2020 by ensuring:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                Refund and cancellation policies are clearly disclosed in the
                Terms & Conditions.
              </li>
              <li>
                A transparent and accessible grievance redressal mechanism.
              </li>
              <li>
                Customer support and escalation channels are available within
                the app and website.
              </li>
              <li>
                Appointment and disclosure of a Grievance Officer, as outlined
                in the Industry-Specific Compliance section.
              </li>
            </ul>
          </section>

          {/* 5. LOCATION DATA */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              5. Location Data Regulations
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Location data is essential for providing EV charging discovery and
              navigation services. In compliance with Indian data protection
              laws:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                Location data is treated as sensitive personal data and
                collected only with explicit user consent.
              </li>
              <li>
                Users may disable location access through device settings at any
                time.
              </li>
              <li>
                Location data is used strictly for service delivery and
                navigation and is not shared with unauthorized third parties.
              </li>
            </ul>
          </section>

          {/* 6. CERT-IN */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              6. CERT-In Guidelines (April 2022)
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Teraawatt PowerLabs Private Limited complies with the Indian
              Computer Emergency Response Team (CERT-In) Directions issued in
              April 2022 by:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                Reporting cybersecurity incidents, including data breaches or
                payment fraud, to CERT-In within 6 hours of detection.
              </li>
              <li>
                Maintaining system and network logs for a minimum period of 180
                days within India.
              </li>
              <li>
                Ensuring servers and network infrastructure are synchronized
                with government-approved Indian time sources.
              </li>
            </ul>
          </section>

        </div>
      </main>
    </>
  );
}
