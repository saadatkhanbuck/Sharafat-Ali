import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hikmat | Hakeem Sharafat Ali",
  description: "Authentic Natural Herbal Treatments & Hikmat Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global Background Wrapper */}
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#f8fff0] via-white to-[#f3ffe3]">
          
          {/* Global Glow Effects */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-green-300/30 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B1D732]/20 blur-3xl rounded-full pointer-events-none"></div>

          <NavbarDemo />

          {/* Page Content */}
          <main className="relative z-10">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}