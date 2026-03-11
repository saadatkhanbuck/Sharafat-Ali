"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "Hikmat Mein Jari Bootiyon Ki Ahmiyat",
    desc: "Janiye kaise qudrati jari bootiyan aap ki sehat ko naturally boost karti hain aur body ko balance karti hain.",
    image: "/img/desi2.jpg",
    date: "12 March 2026",
    category: "Herbal",
    read: "5 min read",
  },
  {
    id: 2,
    title: "Unani Tareeqe Se Jism Ki Safai",
    desc: "Detox aur body cleansing ke liye purane Unani nuskhaat jo aap ghar par apna sakte hain.",
    image: "/img/unani.webp",
    date: "5 March 2026",
    category: "Unani",
    read: "7 min read",
  },
  {
    id: 3,
    title: "Tib-e-Nabvi Aur Modern Sehat",
    desc: "Sunnat tareeqon ka istemal aur unka modern science ke sath connection.",
    image: "/img/tib.webp",
    date: "28 Feb 2026",
    category: "Tib-e-Nabvi",
    read: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <section id="blog" className=" min-h-screen">
      {/* HERO */}
      <section className="relative py-32 text-center overflow-hidden">
        {/* Floating Circles */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 left-0 w-40 h-40  rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-60 h-60  rounded-full blur-3xl"
        />

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl italic md:text-6xl font-extrabold text-gray-900"
        >
          Explore Our <span className="text-[#B1D732]">Herbal Insights In Blog</span>
        </motion.h1>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
          Hikmat, Unani ilaaj aur qudrati sehat ke raaz — sab ek jagah.
        </p>
      </section>

      {/* FEATURED BLOG */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="relative h-[350px] w-full">
            <Image
              src="/img/desi3.jpg"
              alt="Featured Blog"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          <div className="absolute bottom-8 left-8 text-white max-w-xl">
            <p className="text-sm text-[#B1D732] mb-2">Featured Article</p>
            <h2 className="text-3xl font-bold mb-3">
              Hikmat Se Sehatmand Zindagi Ka Raaz
            </h2>
            <button className="px-5 py-2 bg-[#B1D732] rounded-full text-sm font-semibold hover:scale-105 transition">
              Read More
            </button>
          </div>
        </motion.div>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[#B1D732] to-green-500 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden transition duration-500 group-hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                  <span className="absolute top-4 left-4 bg-[#B1D732] text-white text-xs px-3 py-1 rounded-full shadow">
                    {blog.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between text-sm text-gray-500 mb-3">
                    <span>{blog.date}</span>
                    <span>{blog.read}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#B1D732] transition">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-6">{blog.desc}</p>

                  <button className="text-[#B1D732] font-semibold flex items-center gap-2 group-hover:gap-3 transition">
                    Read Article →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
}
