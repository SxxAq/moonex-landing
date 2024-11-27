import {
  DollarSign,
  ShieldCheck,
  PhoneOff,
  SlidersHorizontal,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-white">Our </span>
          <span className="text-yellow-400">Features</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-[#0F172A] border-gray-800">
              <CardHeader>
                <feature.icon className="w-8 h-8 text-white mb-4" p-6 />
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
