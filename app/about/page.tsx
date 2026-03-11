"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { PiPhoneCallDuotone } from "react-icons/pi";

export default function AboutPage() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Soft Background Glow */}
      {/* <div className="absolute top-0 left-0 w-80 h-80 bg-green-200/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#B1D732]/20 blur-3xl rounded-full"></div> */}

      {/* HERO SECTION */}
      <div className="flex items-center justify-center gap-4 mb-6 relative py-10 z-10">
        <h2 className="text-5xl font-extrabold italic text-black whitespace-nowrap">
          About <span className="text-[#B1D732]">Us</span>
        </h2>
      </div>

      {/* Subheading / extra info */}
      <p className="text-center text-neutral-700 mb-12 max-w-2xl mx-auto">
        At Hikmat, we are dedicated to promoting natural health and wellness
        through traditional herbal remedies. Our mission is to bring the
        benefits of authentic Unani medicine to every household.
      </p>

      <section className="relative max-w-7xl mx-auto px-6 md:px-16 lg:px-32 ">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative w-full h-[480px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/img/about.jpeg"
                alt="Hakeem Sharafat Ali"
                fill
                className="object-cover object-top hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Subtle Accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-4 border-b-4 border-[#B1D732] rounded-bl-2xl"></div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="text-sm tracking-widest uppercase text-[#B1D732] font-semibold">
              About The Practitioner
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
              Hakeem <span className="text-[#B1D732]">Sharafat Ali</span>
            </h1>

            <p className="text-gray-700 leading-relaxed mb-5">
              A respected Pakistani practitioner of traditional{" "}
              <span className="font-semibold text-[#B1D732]">Hikmat</span> and
              Unani medicine, dedicated to reviving authentic herbal healing
              traditions through natural and Halal-certified remedies.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              By combining Unani principles with Tib-e-Nabvi wisdom, he promotes
              holistic healing rooted in balance, purity, and natural vitality —
              offering herbal solutions for digestive health, cholesterol,
              stamina, and overall wellness.
            </p>

            {/* Smaller Premium Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/923287332655"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-sm bg-[#B1D732] text-white font-medium rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
              >
                Book Consultation
                <PiPhoneCallDuotone size={18} className="inline-block ml-2" />
              </a>

              <a
                href="#product"
                className="px-6 py-2.5 text-sm border border-[#B1D732] text-[#B1D732] font-medium rounded-full hover:bg-[#B1D732] hover:text-white transition"
              >
                View Products
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 border-t border-green-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {[
            { number: "30+", label: "Years Serving Patients" },
            { number: "500,000+", label: "Patients Treated" },
            { number: "100%", label: "Natural Remedies" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-10 rounded-2xl bg-white shadow-md"
            >
              <h3 className="text-4xl font-bold text-[#B1D732] mb-3">
                {stat.number}
              </h3>
              <p className="text-gray-600 text-sm tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative min-h-[420px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Image */}
        <Image
          src="/img/unani2.jpg"
          alt="Herbal Healing Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="flex items-center z-10 text-sm">
          <a
            href="https://wa.me/923287332655"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 hover:scale-110 transition-transform duration-300"
              viewBox="0 0 24 24"
            >
              <path
                fill="#25D366"
                d="M12 2C6.486 2 2 6.486 2 12a9.93 9.93 0 0 0 1.64 5.48L2 22l4.7-1.61A9.93 9.93 0 0 0 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2z"
              />
              <path
                fill="#FFF"
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.67.149-.198.297-.768.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.52-.074-.149-.67-1.611-.918-2.205-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.57-.009s-.52.074-.793.372c-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.214 3.074c.149.198 2.099 3.205 5.088 4.495.712.307 1.268.491 1.701.628.714.227 1.363.195 1.877.118.572-.085 1.758-.718 2.007-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
              />
            </svg>
          </a>

          <a
            href="https://wa.me/923287332655"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-md flex items-center z-10 text-sm px-4 py-1 rounded-full bg-[#B1D732] text-black font-semibold inline-flex items-center font-semibold text-gray-900">
              (+92) 328 7332655
            </p>
          </a>
        </div>
      </section>
    </section>
  );
}
