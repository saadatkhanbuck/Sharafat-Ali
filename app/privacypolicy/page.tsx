"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
            Privacy <span className="text-[#B1D732]">Policy</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how Hikmat
            collects, uses, and protects your personal information.
          </p>
        </motion.div>

        {/* Policy Content */}
        <div className="space-y-12 text-gray-700 leading-relaxed">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Information We Collect
            </h2>
            <p>
              We may collect personal information such as your name, phone
              number, email address, and health-related details when you book a
              consultation, contact us, or subscribe to our newsletter.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p>
              Your information is used to provide herbal consultations,
              recommend appropriate remedies, improve our services, and send
              wellness updates if you subscribe to our newsletter.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Protection of Your Data
            </h2>
            <p>
              We are committed to ensuring that your information is secure.
              Appropriate technical and organizational measures are in place to
              safeguard your personal data from unauthorized access.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Sharing of Information
            </h2>
            <p>
              We do not sell, trade, or share your personal information with
              third parties, except when required by law or necessary to provide
              our services.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Cookies & Website Usage
            </h2>
            <p>
              Our website may use cookies to enhance user experience and analyze
              website traffic. You can disable cookies in your browser settings
              if you prefer.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Your Rights
            </h2>
            <p>
              You have the right to request access to, correction of, or
              deletion of your personal data. You may contact us at any time
              regarding your information.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Changes to This Policy
            </h2>
            <p>
              Hikmat reserves the right to update this Privacy Policy at any
              time. Updates will be posted on this page with a revised effective
              date.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center text-sm text-gray-500">
          Last Updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </section>
  );
}
