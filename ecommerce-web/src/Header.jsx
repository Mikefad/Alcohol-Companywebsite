

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
          <nav className="hidden md:flex gap-6">
            <a href="#products" className="text-sm font-medium text-white hover:text-amber-400">Products</a>
            <a href="#about" className="text-sm font-medium text-white hover:text-amber-400">About</a>
            <a href="#features" className="text-sm font-medium text-white hover:text-amber-400">Features</a>
            <a href="#contact" className="text-sm font-medium text-white hover:text-amber-400">Contact</a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a href="/register" className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-amber-600" >Register</a>
            <a href="/book" className="px-4 py-2 text-sm font-semibold border rounded-lg text-white" style={{ borderColor: COLORS.border }}>Book a Session</a>
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
            <a href="#features" className="font-medium text-gray-800">Features</a>
            <a href="#contact" className="font-medium text-gray-800">Contact</a>
          </nav>
          <div className="mt-4 grid gap-2">
            <a href="/register" className="w-full text-center text-white font-semibold px-4 py-2 rounded-lg bg-amber-600" >Register</a>
            <a href="/book" className="w-full text-center font-semibold px-4 py-2 rounded-lg border" style={{ color: COLORS.text, borderColor: COLORS.border }}>Book a Session</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
