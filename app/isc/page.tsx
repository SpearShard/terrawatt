"use client";

import Navbar from "@/components/Navbar";

export default function IndustryCompliancePage() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white min-h-screen px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* HEADER */}
          <header className="space-y-3">
            <h1 className="text-4xl font-bold">Industry-Specific Compliance</h1>
            <p className="text-sm text-gray-400">
              Last Updated: <span className="italic">[Insert Date]</span>
            </p>
          </header>

          {/* INTRO */}
          <p className="text-gray-300 leading-relaxed">
            At <strong>Teraawatt PowerLabs Private Limited</strong>, we operate as a
            technology-driven EV aggregator platform connecting EV owners,
            charging station partners, and operators. Our policies are designed
            to ensure regulatory compliance, operational transparency, user
            safety, and environmental responsibility.
          </p>

          {/* 1 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              1. EV Aggregator Service Policy
            </h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Teraawatt PowerLabs Private Limited acts as a trusted intermediary
              facilitating EV charging discovery, booking, and related services.
            </p>

            <h3 className="font-semibold mb-2">Onboarding Guidelines</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <strong>Charging Stations:</strong> All charging station partners
                must complete a verification process, including compliance with
                local regulations, safety certifications, and technical
                compatibility with our platform.
              </li>
              <li>
                <strong>EV Operators:</strong> Fleet owners and individual EV
                operators must provide accurate registration details, valid
                permits, and proof of insurance prior to onboarding.
              </li>
              <li>
                <strong>Pricing Standards:</strong> Charging prices are displayed
                transparently. Any dynamic pricing or surge rates are clearly
                communicated before booking confirmation.
              </li>
              <li>
                <strong>Service Uptime & Maintenance:</strong> Charging partners
                are expected to maintain a minimum of 95% service uptime and
                follow scheduled maintenance protocols.
              </li>
              <li>
                <strong>Safety Standards:</strong> All charging infrastructure
                must comply with Bureau of Indian Standards (BIS) and applicable
                EV safety regulations. Emergency procedures must be in place at
                partner locations.
              </li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              2. Grievance Redressal Mechanism
            </h2>

            <p className="text-gray-300 leading-relaxed">
              In compliance with the Information Technology (Intermediary
              Guidelines and Digital Media Ethics Code) Rules, 2021, Teraawatt
              PowerLabs Private Limited has appointed a Grievance Officer to
              address user concerns.
            </p>

            <h3 className="font-semibold mt-4 mb-2">Grievance Officer Details</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li><strong>Name:</strong> [Insert Appointed Person’s Name]</li>
              <li><strong>Email:</strong> [Insert Official Email Address]</li>
              <li><strong>Address:</strong> [Insert Company Address]</li>
            </ul>

            <h3 className="font-semibold mt-4 mb-2">Complaint Process</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>
                Users may submit complaints related to services, payments, data
                privacy, or partner conduct by contacting the Grievance Officer.
              </li>
              <li>
                Complaints will be acknowledged within{" "}
                <strong>[Insert Number of Hours]</strong> of receipt.
              </li>
              <li>
                A resolution will be provided within{" "}
                <strong>[Insert Number]</strong> business days, or as mandated by
                applicable laws.
              </li>
              <li>
                Where complaints involve third-party partners, we will coordinate
                with them to ensure timely resolution.
              </li>
            </ol>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              3. Environmental Responsibility Statement
            </h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Sustainability is central to Teraawatt PowerLabs Private Limited’s
              mission. As part of our Environmental, Social, and Governance (ESG)
              commitment, we strive to contribute meaningfully to cleaner urban
              mobility.
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <strong>Promote Green Mobility:</strong> Encourage widespread EV
                adoption by making charging accessible and convenient.
              </li>
              <li>
                <strong>Renewable Energy Usage:</strong> Partner with charging
                providers that utilize renewable energy sources wherever
                feasible.
              </li>
              <li>
                <strong>Carbon Footprint Reduction:</strong> Continuously monitor
                and reduce emissions across operations, logistics, and
                infrastructure.
              </li>
              <li>
                <strong>Awareness & Advocacy:</strong> Support initiatives that
                promote eco-friendly transportation and sustainable practices.
              </li>
            </ul>

            <p className="text-gray-300 leading-relaxed mt-4">
              By choosing <strong>Teraawatt PowerLabs Private Limited</strong>, you
              actively contribute to a cleaner, greener future for electric
              mobility.
            </p>
          </section>

        </div>
      </main>
    </>
  );
}
