"use client";

import { ExpandableCardDemo } from "../components/expandablecard";
import { motion } from "framer-motion";
import { PiFlipVerticalLight } from "react-icons/pi";

export default function ProductsPage() {
  return (
    <section
      id="product"
      className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32 py-24"
    >
      <div className="flex items-center justify-center gap-4 mb-6 relative z-10">
        <h2 className="text-5xl font-extrabold italic text-black whitespace-nowrap">
          Our <span className="text-[#B1D732]">Products</span>
        </h2>
      </div>

      {/* Subheading / extra info */}
      <p className="text-center text-neutral-700 mb-12 max-w-2xl mx-auto">
        Explore our range of natural herbal remedies crafted with traditional
        Hikmat formulations. Each product is made from carefully selected
        ingredients to support digestion, immunity, vitality, and overall
        wellness. Experience the benefits of nature’s healing with our trusted
        herbal solutions.
      </p>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm tracking-widest uppercase text-[#B1D732] font-semibold">
            Our Herbal Collection
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
            Authentic <span className="text-[#B1D732]">Hikmat Products</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            Our carefully formulated herbal remedies are crafted using
            traditional Unani principles and natural ingredients. Each product
            is designed to restore balance, enhance vitality, and support
            overall wellness.
          </p>

          {/* BENEFITS */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-[#B1D732] rounded-full"></div>
              <p className="text-gray-700 text-sm">100% Natural Ingredients</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-[#B1D732] rounded-full"></div>
              <p className="text-gray-700 text-sm">
                Halal Certified Formulations
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-[#B1D732] rounded-full"></div>
              <p className="text-gray-700 text-sm">
                Trusted by 500,000 Patients
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/923128004651"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 text-sm bg-[#B1D732] text-white rounded-full shadow hover:scale-105 transition"
          >
            Consult Before Purchase
            <PiFlipVerticalLight size={20} className="inline-block ml-2" />
          </a>
        </motion.div>

        {/* RIGHT SIDE - KEEP YOUR CARDS SAME */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ExpandableCardDemo />
        </motion.div>
      </div>
    </section>
  );
}
