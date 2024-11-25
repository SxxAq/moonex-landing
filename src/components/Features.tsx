import { DollarSign, Shield, Scissors, Layers } from "lucide-react";

const features = [
  {
    icon: <DollarSign />,
    title: "Cheapest TXs",
    description:
      "Exchange popular digital currencies at the cheapest possible transaction price",
  },
  {
    icon: <Shield />,
    title: "CerTIK",
    description:
      "We are Audited by CerTik, CerTik is the leading security focused ranking platform to",
  },
  {
    icon: <Scissors />,
    title: "No Contract Splits",
    description: "No contract splits to fund the marketing wallets",
  },
  {
    icon: <Layers />,
    title: "CrossDex Support",
    description:
      "Exchange popular digital currencies at the cheapest possible transaction price",
  },
];

const Features = () => {
  return (
    <div className="py-20 px-6 lg:px-20">
      <h2 className="text-3xl font-bold mb-10">
        Our <span className="text-yellow-400">Features</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#1C1C24] p-6 rounded-lg">
            <div className="text-yellow-400 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
