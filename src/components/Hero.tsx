import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-[#0A0F1C]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1a2747]/20 via-[#0A0F1C] to-[#0A0F1C]"></div>

      {/* Orbital paths */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/circles.png"
          alt=""
          className="absolute top-0 right-0 w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Stars */}
      <motion.img
        src="/star-img.png"
        alt=""
        className="absolute top-[15%] left-[20%] w-8 h-8"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      />
      <motion.img
        src="/star-img (1).png"
        alt=""
        className="absolute top-[10%] right-[30%] w-6 h-6"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
      />
      <motion.img
        src="/star-img (2).png"
        alt=""
        className="absolute bottom-[30%] left-[15%] w-7 h-7"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
      />

      {/* Yellow sphere */}
      <motion.img
        src="/sphere.png"
        alt=""
        className="absolute top-[20%] right-[10%] w-64 h-64"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 relative z-10">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 font-display leading-tight">
            Trusted Multi-Chain
            <div className="text-yellow-400">DEX Platform</div>
          </h1>
          <p className="text-xl text-gray-400 mb-12 font-light">
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 rounded-full text-lg">
              Connect Wallet
            </Button>
            <Button
              variant="outline"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 px-8 py-6 rounded-full text-lg"
            >
              Trade Crypto
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
