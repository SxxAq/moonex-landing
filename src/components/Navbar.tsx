import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-[#0A0F1C]/80 backdrop-blur-sm border-b border-gray-800/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img
                src="/moonex-full.png"
                alt="MoonEX Logo"
                className="h-16 w-auto"
              />
              <img
                src="/logo.png"
                alt="MoonEX Logo"
                className="h-10 w-auto hidden"
              />
            </a>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              <a
                href="/"
                className="text-white font-bold hover:text-yellow-400 transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-white font-bold hover:text-yellow-400 transition-colors"
              >
                About Us
              </a>
              <a
                href="/roadmap"
                className="text-white font-bold hover:text-yellow-400 transition-colors"
              >
                Roadmap
              </a>
              <a
                href="/faqs"
                className="text-white font-bold hover:text-yellow-400 transition-colors"
              >
                FAQs
              </a>
              <a
                href="/contact"
                className="text-white font-bold hover:text-yellow-400 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 rounded-full">
              Connect Wallet
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-yellow-400 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-yellow-400" />
              ) : (
                <Menu className="h-6 w-6 text-yellow-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#0A0F1C] border-b border-gray-800/20"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-400 hover:bg-gray-800/30 transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-400 hover:bg-gray-800/30 transition-colors"
            >
              About Us
            </a>
            <a
              href="/roadmap"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-400 hover:bg-gray-800/30 transition-colors"
            >
              Roadmap
            </a>
            <a
              href="/faqs"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-400 hover:bg-gray-800/30 transition-colors"
            >
              FAQs
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-400 hover:bg-gray-800/30 transition-colors"
            >
              Contact Us
            </a>
          </div>
          <div className="px-4 py-3">
            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 rounded-full">
              Connect Wallet
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
