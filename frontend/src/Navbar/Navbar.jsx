
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Who Are We", href: "#" },
    { label: "Our Services", href: "#" },
    { label: "What We Care", href: "#" },
    { label: "Career", href: "#" },
    { label: "Blog", href: "#" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: 0,
        backgroundColor: isScrolled
          ? "rgba(0, 0, 0, 0.8)"
          : "rgba(0, 0, 0, 0.3)",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] sm:w-[100%] max-w-5xl rounded-full"
    >
      <div className="mx-auto px-4 sm:px-6 py-3 rounded-full backdrop-blur-sm">
        <div className="flex items-center justify-between">
          {/* Logo or brand name */}
          <a href="#" className="text-white font-bold text-lg">
            Electcare
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white font-medium hover:text-[#fa6e43] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="px-4 py-2 bg-[#fa6e43] text-white rounded-full hover:bg-[#e55d34] transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[100%] left-0 w-full rounded-b-2xl bg-black bg-opacity-90 backdrop-blur-md p-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white font-medium hover:text-[#fa6e43] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button className="px-4 py-2 bg-[#fa6e43] text-white rounded-full hover:bg-[#e55d34] transition-colors">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

