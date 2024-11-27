import { Check, X } from "lucide-react";
const comparisonPoints = [
  "Point no one",
  "Point no two this",
  "Point no two this",
  "Point no two this",
  "Point no two this",
];

export default function ComparisonSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">
          <span className="text-white">Why </span>
          <span className="text-yellow-400">MoonEX</span>
          <span className="text-white">?</span>
        </h2>

        <div className="grid grid-cols-3 gap-8">
          <div className="text-gray-400">
            <h3 className="text-xl font-bold text-yellow-400 mb-6">
              Comparison
            </h3>
            {comparisonPoints.map((point, index) => (
              <div key={index} className="py-4 border-b border-gray-800">
                {point}
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src="/placeholder.svg" alt="MoonEX" width={24} height={24} />
              <span className="text-xl font-bold text-white">MoonEX</span>
            </div>
            {comparisonPoints.map((_, index) => (
              <div key={index} className="py-4 border-b border-gray-800">
                <Check className="text-green-400 w-6 h-6" />
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/placeholder.svg"
                alt="UniSwap"
                width={24}
                height={24}
              />
              <span className="text-xl font-bold text-pink-500">UNISWAP</span>
            </div>
            {comparisonPoints.map((_, index) => (
              <div key={index} className="py-4 border-b border-gray-800">
                <X className="text-red-400 w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
