

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";


const COLORS = {
  primary: "#c61b3f",
  primaryHover: "#a31634",
  surface: "#ffffff",
  text: "#0b1323",
  subtext: "#5a6576",
  navy: "#0e1a2b",
  border: "#e5e8ef",
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 bg-[#0f172a] ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          {/* Logo + Brand */}
          <a href="/" className="flex items-center gap-3">
            
            <span className="text-xl font-extrabold tracking-wide text-white">Distill&Deliver</span>
          </a>

          {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#products" className="text-white hover:text-amber-400 transition">Products</a>
            <a href="#about" className="text-white hover:text-amber-400 transition">About</a>
            <a href="#features" className="text-white hover:text-amber-400 transition">Features</a>
            <a href="#contact" className="text-white hover:text-amber-400 transition">Contact</a>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
            <a
                href="/register-client"
                className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow transition"
            >
                Register as a Trade Client
            </a>
            <a
                href="/private-order"
                className="border border-white text-white hover:border-amber-400 hover:text-amber-400 text-sm font-semibold px-5 py-2.5 rounded-lg transition"
            >
                Book a Private Order
            </a>
            </div>


          {/* Mobile Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="md:hidden text-white"
          >
            {isMobileNavOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </header>

      {/* Mobile Nav */}
      {isMobileNavOpen && (
        <div className="md:hidden fixed left-1/2 top-20 z-40 w-[90%] -translate-x-1/2 rounded-xl bg-white p-5 shadow-xl border">
          <nav className="grid gap-3 text-sm">
            <a href="#products" className="font-medium text-gray-800">Products</a>
            <a href="#about" className="font-medium text-gray-800">About</a>
            <a href="#testimonials" className="font-medium text-gray-800">Testimonials</a>
            <a href="#contact" className="font-medium text-gray-800">Contact</a>
          </nav>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
                href="/private-order"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition"
            >
                Book a Private Order
            </a>
            <a
                href="/register-client"
                className="bg-white text-amber-700 border border-amber-600 hover:bg-amber-50 px-8 py-3 rounded-full font-semibold text-lg shadow-md transition"
            >
                Register as a Trade Client
            </a>
            </div>

        </div>
      )}
    </>
  );
};

export default Header;
