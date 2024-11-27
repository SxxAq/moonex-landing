import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1C] py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="/" className="flex items-center space-x-2">
              <img src="/placeholder.svg" alt="MoonEX" width={40} height={40} />
              <span className="text-xl font-bold text-white">MoonEX</span>
            </a>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="/about"
                className="block text-gray-400 hover:text-yellow-400"
              >
                About Us
              </a>
              <a
                href="/roadmap"
                className="block text-gray-400 hover:text-yellow-400"
              >
                Roadmap
              </a>
              <a
                href="/faqs"
                className="block text-gray-400 hover:text-yellow-400"
              >
                FAQs
              </a>
              <a
                href="/contact"
                className="block text-gray-400 hover:text-yellow-400"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <Button
              variant="outline"
              className="text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              Contact Us
            </Button>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <span className="sr-only">Twitter</span>
                {/* Add social icons here */}
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <span className="sr-only">Reddit</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <span className="sr-only">Discord</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
