import { Check, X } from "lucide-react";
import React from "react";
export default function Comparison() {
  const comparisonPoints = [
    "1 . Point no one",
    "2 . Point no two this",
    "2 . Point no two this",
    "2 . Point no two this",
    "2 . Point no two this",
  ];

  return (
    <div className="px-6 py-20 overflow-hidden max-w-7xl mx-auto">
      <h2 className="text-4xl text-white font-bold text-center sm:text-left mb-12">
        Why <span className="text-yellow-400">MoonEX</span> ?
      </h2>
      <div className="absolute lg:left-[580px] md:left-[350px] sm:left-[200px] sm:top-[1000px] left-16 top-[1300px] w-56 h-56 sm:w-96 sm:h-96 rounded-7xl bg-[#EDD955]/20 blur-3xl " />
      <div className="sm:mx-auto bg-gray-800/30 backdrop-blur-xl rounded-xl p-4 sm:p-12 max-w-7xl ">
        <div className="grid grid-cols-3 ">
          <div className="text-xl font-bold border-r border-gray-800">
            <h3 className="text-sm md:text-2xl font-display text-yellow-400">
              Comparison
            </h3>
          </div>
          <div className="text-center border-r border-gray-800">
            <img
              alt="Moonex Logo"
              className="sm:h-16 object-cover h-7 mx-auto mb-2"
              src="/moonex-full.png"
            />
          </div>
          <div className="text-center">
            <img
              alt="Uniswap Logo"
              className="md:h-10 object-cover h-5 xs:h-8 mx-auto mb-2"
              src="/uniswap.png"
            />
          </div>
          {comparisonPoints.map((point, index) => (
            <React.Fragment key={`point-${index}`}>
              <div className="py-4 border-t border-r border-gray-800 text-gray-400 text-xs xs:text-sm sm:text-lg">
                <ol type="1">
                  <li>{point}</li>
                </ol>
              </div>
              <div className="py-4 border-t border-r border-gray-800 text-center">
                <Check
                  strokeWidth={4}
                  className="inline-block text-[#B2FFAC]"
                />
              </div>
              <div className="py-4 border-t border-gray-800 text-center">
                <X strokeWidth={4} className="inline-block text-[#FF5050]" />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
