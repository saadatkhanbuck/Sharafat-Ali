"use client";

import { motion } from "framer-motion";

export default function CookiesPolicy() {
  return (
    <section className="bg-gradient-to-b from-[#f8fff0] via-white to-[#f3ffe3] py-20">
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-300/30 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B1D732]/20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-6">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cookies <span className="text-[#B1D732]">Policy</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This Cookies Policy explains how Hikmat uses cookies and similar
            technologies to improve your browsing experience.
          </p>
        </motion.div>

        {/* Policy Content */}
        <div className="space-y-12 text-gray-700 leading-relaxed">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit
              a website. They help improve user experience by remembering
              preferences and analyzing website traffic.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. How We Use Cookies
            </h2>
            <p>
              Hikmat uses cookies to understand how visitors interact with our
              website, improve functionality, and provide a better herbal
              wellness experience.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Types of Cookies We Use
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for basic website
                functionality.
              </li>
              <li>
                <strong>Performance Cookies:</strong> Help us analyze website
                traffic and usage.
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember your preferences
                and settings.
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Used to deliver relevant
                information and updates.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Managing Cookies
            </h2>
            <p>
              You can control or disable cookies through your browser settings.
              However, disabling cookies may affect certain website features.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Changes to This Policy
            </h2>
            <p>
              We may update this Cookies Policy from time to time. Any changes
              will be posted on this page with an updated revision date.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Contact Us
            </h2>
            <p>
              If you have any questions about our Cookies Policy, you may
              contact us at:
            </p>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-16 text-center text-sm text-gray-500">
          Last Updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </section>
  );
}
