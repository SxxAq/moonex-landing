import { Check, X } from "lucide-react";

const comparisonData = [
  "Point no one",
  "Point no two this",
  "Point no two this",
  "Point no two this",
  "Point no two this",
];

const Comparison = () => {
  return (
    <div className="py-20 px-6 lg:px-20">
      <h2 className="text-3xl font-bold mb-10">
        Why <span className="text-yellow-400">MoonEX</span> ?
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="font-bold">Comparison</div>
        <div className="font-bold text-yellow-400">Moonex</div>
        <div className="font-bold text-pink-500">UNISWAP</div>
        {comparisonData.map((point, index) => (
          <>
            <div key={index}>{point}</div>
            <div className="text-green-500">
              <Check />
            </div>
            <div className="text-red-500">
              <X />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Comparison;
