import { Check, X } from "lucide-react";

const comparisonPoints = [
  "1. Point no one",
  "2. Point no two this",
  "2. Point no two this",
  "2. Point no two this",
  "2. Point no two this",
];

export default function ComparisonSection() {
  return (
    <section className="bg-[#0A0F1C] py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a2747] via-[#0A0F1C] to-[#0A0F1C] opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl font-bold mb-16 font-display">
          <span className="text-white">Why </span>
          <span className="text-yellow-400">MoonEX</span>
          <span className="text-white"> ?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-display text-yellow-400">
              Comparison
            </h3>
            {comparisonPoints.map((point, index) => (
              <div
                key={index}
                className="py-4 border-b border-gray-800/30 text-gray-400"
              >
                {point}
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="flex items-center h-[40px]">
              <img src="/moonex-full.png" alt="MoonEX" className="h-8" />
            </div>
            {comparisonPoints.map((_, index) => (
              <div
                key={index}
                className="py-4 border-b border-gray-800/30 flex items-center"
              >
                <Check className="text-green-400 w-6 h-6" />
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="flex items-center h-[40px]">
              <span className="text-[#FF3B9A] text-2xl font-bold">UNISWAP</span>
            </div>
            {comparisonPoints.map((_, index) => (
              <div
                key={index}
                className="py-4 border-b border-gray-800/30 flex items-center"
              >
                <X className="text-red-400 w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
