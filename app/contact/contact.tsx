"use client";
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen  text-neutral-800 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            Contact Hikmat Experts{" "}
            <span className="text-[#B1D732]">Hakeem Sharafat Ali Shah</span>
          </h1>
          <p className="text-gray-700 mt-6 max-w-2xl mx-auto text-xl">
            Start your natural healing journey with trusted Unani & Tib-e-Nabvi
            remedies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT SIDE – Herbal Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/img/dawakhana5.png"
              alt="Hikmat Herbal"
              className="rounded-3xl shadow-2xl w-full h-auto lg:h-[800px] object-contain lg:object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl"></div>
          </motion.div>

          {/* RIGHT SIDE – Info + Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#B1D732] text-black">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">
                    Only/ WhatsApp masseges
                  </p>
                  <p className="text-xl font-semibold">+92 312 8004651</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#B1D732] text-black">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-xl font-semibold">Suba Sindh, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-gray-700"></div>

            {/* Quick Message Form */}
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#ffffff] border border-gray-700 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#B1D732] outline-none transition"
              />

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full bg-[#ffffff] border border-gray-700 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#B1D732] outline-none transition resize-none"
              />

              <a
                href="https://wa.me/923128004651"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#B1D732] text-black font-semibold py-4 rounded-xl shadow-lg hover:scale-105 transition transform"
              >
                Contact via WhatsApp
                <FaWhatsapp size={25} className="inline-block ml-2" />
              </a>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
