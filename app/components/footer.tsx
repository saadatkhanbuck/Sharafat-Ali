"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import Link from "next/link";
import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0f1a05] text-white overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#B1D732]/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-green-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Updated Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo + About */}
          <div>
            <h2 className="text-3xl font-bold text-[#B1D732] mb-4">
              Hakeem Sharafat Ali
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Reviving authentic Unani & Tib-e-Nabvi healing traditions with
              natural, halal-certified herbal remedies for complete wellness.
            </p>

            <div className="flex items-center space-x-2 text-sm">
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
                <p className="text-xs text-zinc-300">Connect With Us</p>
                <p className="text-md font-semibold text-gray-200">
                  (+92) 328 7332655
                </p>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "#about" },
                { name: "Products", path: "#product" },
                { name: "Blog", path: "#blog" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.path}
                    className="hover:text-[#B1D732] transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {[
                { name: "Cookies Policy", path: "/cookiespolicy" },
                { name: "Return & Refund Policy", path: "/refundpolicy" },
                { name: "Privacy Policy", path: "/privacypolicy" },
                { name: "Terms & Conditions", path: "/termsconditions" },
                { name: "Shipping Policy", path: "/shipingpolicy" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.path}
                    className="hover:text-[#B1D732] transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4 text-gray-300 text-sm">
              <p>📞 +92 315 3579751</p>
              <p>📍 Suba Sindh, Pakistan</p>
              <p className="text-[#B1D732] font-medium">
                30+ Years of Herbal Excellence
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Join Our Newsletter
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Get herbal wellness tips and product updates directly to your
              inbox.
            </p>

            <a
              href="tel:+923287332655"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-[#B1D732] text-[#B1D732] font-semibold hover:scale-105 hover:bg-[#839e28] hover:text-white transition transform"
            >
              Join a Call
              <BiSolidPhoneCall size={22} className="inline-block ml-2" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2a3a14] mt-16 pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Hikmat Herbal. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
