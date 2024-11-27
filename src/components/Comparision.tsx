import { Check, X } from "lucide-react";
const comparisonPoints = [
  "1 . Point no one",
  "2 . Point no two this",
  "2 . Point no two this",
  "2 . Point no two this",
  "2 . Point no two this",
];

export default function ComparisonSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a2747] via-[#0A0F1C] to-[#0A0F1C] opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl font-bold mb-16 font-display text-left">
          Why <span className="text-yellow-400">MoonEX</span> ?
        </h2>

        <div className="grid grid-cols-3 gap-0">
          <div>
            <h3 className="text-2xl font-display text-yellow-400 mb-8">
              Comparison
            </h3>
            {comparisonPoints.map((point, index) => (
              <div
                key={index}
                className="py-6 border-t border-gray-800/30 text-gray-400 pr-4"
              >
                {point}
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center h-[40px] mb-8">
              <img src="/moonex-full.png" alt="MoonEX" className="h-16" />{" "}
            </div>
            {comparisonPoints.map((_, index) => (
              <div
                key={index}
                className="py-6 border-t border-gray-800/30 flex items-center justify-center"
              >
                <Check className="text-green-400 w-6 h-6" strokeWidth={2.5} />
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center h-[40px] mb-8">
              <img src="/uniswap.png" alt="MoonEX" className="h-10" />{" "}
            </div>
            {comparisonPoints.map((_, index) => (
              <div
                key={index}
                className="py-6 border-t border-gray-800/30 flex items-center justify-center"
              >
                <X className="text-red-400 w-6 h-6" strokeWidth={2.5} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
