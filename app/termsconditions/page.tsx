"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function TermsConditions() {
  return (
    <section className="bg-gradient-to-b from-[#f8fff0] via-white to-[#f3ffe3] py-20">
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-300/30 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B1D732]/20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms & <span className="text-[#B1D732]">Conditions</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Please read these Terms & Conditions carefully before using the
            Hikmat website and services.
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-12 text-gray-700 leading-relaxed">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the Hikmat website, you agree to comply
              with and be bound by these Terms & Conditions. If you do not
              agree, please do not use our services.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Use of Website
            </h2>
            <p>
              The content on this website is provided for general information
              and herbal wellness purposes only. You agree not to misuse the
              website or engage in unlawful activities.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Herbal Consultations
            </h2>
            <p>
              Our herbal remedies and consultations are based on traditional
              Unani and Tib-e-Nabvi principles. Results may vary depending on
              individual health conditions. We recommend consulting a qualified
              healthcare provider when necessary.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Intellectual Property
            </h2>
            <p>
              All website content including text, images, branding, and design
              elements are the property of Hikmat and may not be copied or used
              without written permission.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Limitation of Liability
            </h2>
            <p>
              Hikmat shall not be held liable for any direct or indirect damages
              arising from the use of our website or herbal products.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Privacy
            </h2>
            <p>
              Your use of our website is also governed by our Privacy Policy.
              Please review it to understand how we collect and protect your
              information.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Changes to Terms
            </h2>
            <p>
              Hikmat reserves the right to modify these Terms & Conditions at
              any time. Changes will be effective immediately upon posting on
              this page.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Contact Information
            </h2>
            <p>
              If you have any questions regarding these Terms & Conditions,
              please contact us:
            </p>
            <button
              onClick={() => window.open("tel:+923154232561")}
              className="mt-4 px-5 py-2 rounded-full bg-[#B1D732] text-white font-semibold shadow-lg hover:scale-105 hover:bg-[#839e28] transition transform"
            >
              join a call
              <Send size={18} className="inline-block ml-2" />
            </button>
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
