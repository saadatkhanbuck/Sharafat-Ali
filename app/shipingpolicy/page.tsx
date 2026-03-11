"use client";

import { motion } from "framer-motion";

export default function ShippingPolicy() {
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
            Shipping <span className="text-[#B1D732]">Policy</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Hikmat Herbal, we aim to deliver your natural remedies safely and
            on time. Please review our shipping guidelines below.
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-12 text-gray-700 leading-relaxed">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Shipping Areas
            </h2>
            <p>
              We currently ship across  different countries in International shipping may be
              available upon request depending on destination and product type.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Order Processing Time
            </h2>
            <p>
              Orders are processed within 1–2 business days after confirmation.
              Orders placed on weekends or public holidays will be processed on
              the next working day.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Delivery Time
            </h2>
            <p>
              Standard delivery within Pakistan typically takes 3–5 business
              days depending on your location. Remote areas may require
              additional time.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Shipping Charges
            </h2>
            <p>
              Shipping charges are calculated at checkout based on your location
              and order size. Occasionally, we may offer free shipping
              promotions.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Order Tracking
            </h2>
            <p>
              Once your order has been dispatched, you will receive a tracking
              number via SMS or email (if provided) to monitor your shipment.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Delays
            </h2>
            <p>
              While we strive to deliver on time, unforeseen circumstances such
              as weather conditions, courier delays, or public holidays may
              affect delivery timelines.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Incorrect Shipping Details
            </h2>
            <p>
              Please ensure your shipping information is accurate at checkout.
              Hikmat Herbal is not responsible for delays or failed deliveries
              due to incorrect addresses.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Contact Us
            </h2>
            <p>For any shipping-related inquiries, please contact us:</p>
            <p className="mt-2 font-medium text-[#B1D732]">
              📞 +92 315 4232561 <br />
              📍 Lahore, Pakistan
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
