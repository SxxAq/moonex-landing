import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Decorative elements */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Trusted Multi-Chain
            <span className="block text-yellow-400">DEX Platform</span>
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </p>
          <div className="flex space-x-4">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
              Connect Wallet
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              Trade Crypto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
