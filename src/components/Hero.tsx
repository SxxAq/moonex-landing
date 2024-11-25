import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative py-20 px-6 lg:px-20">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">
          Trusted Multi-Chain
          <span className="text-yellow-400"> DEX Platform</span>
        </h1>
        <p className="text-xl mb-8">
          Trade, earn, and own crypto on the all-in-one multi-chain DEX
        </p>
        <div className="space-x-4">
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
            Connect Wallet
          </Button>
          <Button
            variant="outline"
            className="text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-black"
          >
            Trade Crypto
          </Button>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
        <div className="w-64 h-64 bg-yellow-400 rounded-full opacity-50 absolute top-20 right-20"></div>
        <div className="w-2 h-2 bg-white rounded-full absolute top-40 left-40"></div>
        <div className="w-2 h-2 bg-white rounded-full absolute bottom-40 right-60"></div>
      </div>
    </div>
  );
};

export default Hero;
