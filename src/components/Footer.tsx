import { Send, Twitter } from "lucide-react";
import { FaReddit } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1C] py-8 border-t border-gray-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <img src="/logo3.png" alt="MoonEX" className="h-100 w-auto" />
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8 md:gap-12 text-base">
            <a
              href="/about"
              className="text-gray-300 font-bold hover:text-yellow-400 transition-colors duration-200"
            >
              About Us
            </a>
            <a
              href="/roadmap"
              className="text-gray-300 font-bold hover:text-yellow-400 transition-colors duration-200"
            >
              Roadmap
            </a>
            <a
              href="/faqs"
              className="text-gray-300 font-bold hover:text-yellow-400 transition-colors duration-200"
            >
              FAQs
            </a>
            <a
              href="/contact"
              className="text-gray-300 font-bold hover:text-yellow-400 transition-colors duration-200"
            >
              Contact Us
            </a>
          </nav>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h3 className="text-2xl font-display font-bold">
              Contact <span className="text-yellow-400">Us</span>
            </h3>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-white font-bold hover:text-yellow-400 transition-colors duration-200"
                aria-label="Telegram"
              >
                <Send className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white font-bold hover:text-yellow-400 transition-colors duration-200"
                aria-label="Reddit"
              >
                <FaReddit className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white font-bold hover:text-yellow-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
