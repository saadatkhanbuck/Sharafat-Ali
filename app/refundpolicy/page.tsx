"use client";

import { motion } from "framer-motion";

export default function ReturnRefundPolicy() {
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
            Return & <span className="text-[#B1D732]">Refund Policy</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Hikmat Herbal, customer satisfaction is our priority. Please
            review our return and refund policy carefully before making a
            purchase.
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-12 text-gray-700 leading-relaxed">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Eligibility for Returns
            </h2>
            <p>
              Products may be eligible for return within 24/48 hours of delivery
              if they are unused, unopened, and in their original packaging.
              Proof of purchase is required.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Non-Returnable Items
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Opened or used herbal products</li>
              <li>Personal care items</li>
              <li>Custom herbal formulations</li>
              <li>Products damaged due to misuse</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Damaged or Incorrect Products
            </h2>
            <p>
              If you receive a damaged or incorrect product, please contact us
              within 48 hours of delivery with clear photos. We will arrange a
              replacement or refund after verification.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Refund Process
            </h2>
            <p>
              Once your return is approved and received, refunds will be
              processed within 5–7 business days via the original payment
              method.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Order Cancellation
            </h2>
            <p>
              Orders can be canceled before shipment. Once the order has been
              dispatched, cancellation may not be possible.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Exchange Policy
            </h2>
            <p>
              Exchanges are only available for defective or damaged products.
              Replacement requests must be made within 7 days of delivery.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Shipping Costs
            </h2>
            <p>
              Customers are responsible for return shipping costs unless the
              product received was incorrect or defective.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Contact Us
            </h2>
            <p>For any return or refund queries, please contact us:</p>
            <p className="mt-2 font-medium text-[#B1D732]">
              📞(+92) 312 8004651 <br />
              📍 Suba Sindh, Pakistan
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
