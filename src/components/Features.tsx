import {
  DollarSign,
  ShieldCheck,
  PhoneOff,
  SlidersHorizontal,
} from "lucide-react";

const features = [
  {
    title: "Cheapest TXs",
    description:
      "Exchange popular digital currencies at the cheapest possible transaction price",
    icon: DollarSign,
  },
  {
    title: "CerTIK",
    description:
      "We are Audited by CertiK, CertiK is the leading security focused ranking platform to",
    icon: ShieldCheck,
  },
  {
    title: "No Contract Sells",
    description: "No contract sells to fund the marketing wallets",
    icon: PhoneOff,
  },
  {
    title: "CrossDex Support",
    description:
      "Exchange popular digital currencies at the cheapest possible transaction price",
    icon: SlidersHorizontal,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a2747] via-[#0A0F1C] to-[#0A0F1C] opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16 font-display">
          <span className="text-white">Our </span>
          <span className="text-yellow-400">Features</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#0B1423]/80 rounded-lg p-8 backdrop-blur-sm border border-gray-800/20 hover:border-gray-700/40 transition-colors"
            >
              <div className="bg-gray-900/60 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-display">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
