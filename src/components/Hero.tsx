import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute bottom-40 right-8 sm:w-80 sm:h-80 w-60 h-60 rounded-7xl bg-[#EDD955]/20 blur-3xl" />
      <div className="absolute top-52 left-4 md:w-100 md:h-100 w-60 h-60 sm:w-80 sm:h-80 hidden sm:block rounded-7xl bg-[#EDD955]/20 blur-3xl" />
      {/* Orbital paths */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/circles.png"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
        />
      </div>{" "}
      {/* Stars */}
      <motion.img
        src="/star-img.png"
        alt=""
        className="absolute top-[15%] left-[20%] w-14 h-14"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ delay: 0.5 }}
      />
      <motion.img
        src="/star-img (2).png"
        alt=""
        className="absolute top-[10%] right-[30%] w-10 h-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ delay: 0.9 }}
      />
      <motion.img
        src="/star-img (1).png"
        alt=""
        className="absolute bottom-[20%] right-[15%] w-14 h-14"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ delay: 0.7 }}
      />
      {/* Yellow sphere */}
      <motion.img
        src="/sphere.png"
        alt=""
        className="absolute top-[30%] right-[10%] w-64 h-64 "
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
      {/* Content */}
      <div className="max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-8 pt-32 relative z-10">
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
