"use client";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="/"
      className="relative w-full min-h-screen lg:h-screen overflow-hidden bg-gradient-to-b from-green-50 to-white"
    >
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start min-h-screen max-w-7xl mx-auto px-6 md:px-12 lg:px-24 gap-16 pb-16">
        {/* LEFT: Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex-1 flex flex-col items-start justify-center mt-16 lg:mt-0"
        >
          <h1 className="text-4xl mt-10 lg:mt-40 md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            <span className="text-[#B1D732] italic">Hikmat</span> کے قدرتی علاج
            کے ساتھ
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
            ہمارے قدرتی اور مؤثر جڑی بوٹیوں کے علاج سے صحت مند زندگی کا آغاز
            کریں۔ بس اپنے جسم اور دماغ کو صاف کریں، فطرت کی طاقت کے ساتھ!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/923287332655"
              className="px-6 py-3 rounded-full bg-[#B1D732] text-white font-semibold shadow-lg hover:scale-105 hover:bg-[#839e28] transition transform"
            >
              Contact With Me
              <FaWhatsapp size={25} className="inline-block ml-2" />
            </a>
            <a
              href="tel:+923287332655"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-[#B1D732] text-[#B1D732] font-semibold hover:scale-105 hover:bg-[#839e28] hover:text-white transition transform"
            >
              Join a Call
              <BiSolidPhoneCall size={22} className="inline-block ml-2" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT: Circular Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex-1 relative flex justify-center items-center mt-6 lg:mt-32 w-full"
        >
          {/* Glow / Aura */}
          <div className="absolute h-[260px] w-[260px] sm:h-[340px] sm:w-[340px] md:h-[420px] md:w-[420px] rounded-full bg-[#B1D732] blur-3xl" />

          {/* Rotating dashed ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute h-[270px] w-[270px] sm:h-[350px] sm:w-[350px] md:h-[470px] md:w-[470px] rounded-full border border-dashed border-green-700"
          />

          {/* Circular Image */}
          <div className="relative h-[220px] w-[220px] sm:h-[260px] sm:w-[260px] md:h-[340px] md:w-[340px] lg:h-[360px] lg:w-[360px] rounded-full bg-white p-0 shadow-2xl transition duration-500 hover:scale-105 overflow-hidden">
            <Image
              src="img\sharafat4.jpg"
              alt="Sharafat"
              width={360}
              height={360}
              priority
              className="object-cover object-top w-full h-full"
            />
          </div>

          {/* Floating Tags */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -top-6 left-4 sm:left-0 rounded-lg border bg-white/80 backdrop-blur px-3 py-1 text-xs shadow"
          >
            Unani Herbal Medicine Specialist
          </motion.div>
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -bottom-4 right-4 sm:right-0 rounded-lg border bg-white/80 backdrop-blur px-3 py-1 text-xs shadow"
          >
            30+ Years of Unani Treatment
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Decorative Circles */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-32 h-32 bg-green-300 rounded-full opacity-20 blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-16 w-64 h-64 bg-green-200 rounded-full opacity-20 blur-3xl"
      />
      <motion.div
        animate={{ x: [-10, 10, -10] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-40 h-40 bg-green-100 rounded-full opacity-10 blur-2xl"
      />
    </section>
  );
}
