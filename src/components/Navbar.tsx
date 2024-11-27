import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NavBar() {
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

          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 rounded-full">
            Connect Wallet
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
