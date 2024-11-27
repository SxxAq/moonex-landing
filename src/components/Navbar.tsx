import { Button } from "@/components/ui/button";
export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A0F1C]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img
                src="/placeholder.svg"
                alt="MoonEX"
                width={40}
                height={40}
                className="text-yellow-400"
              />
              <span className="text-xl font-bold text-white">MoonEX</span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="/" className="text-white hover:text-yellow-400">
                Home
              </a>
              <a href="/about" className="text-white hover:text-yellow-400">
                About Us
              </a>
              <a href="/roadmap" className="text-white hover:text-yellow-400">
                Roadmap
              </a>
              <a href="/faqs" className="text-white hover:text-yellow-400">
                FAQs
              </a>
              <a href="/contact" className="text-white hover:text-yellow-400">
                Contact Us
              </a>
            </div>
          </div>

          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
}
