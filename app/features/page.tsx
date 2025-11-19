"use client";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { Sparkles, Brain, Zap, Shield, Layers } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-10 h-10 text-indigo-500" />,
    title: "AI-Powered Insights",
    desc: "Our intelligent engine analyzes data in real time to deliver accurate, actionable insights.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-indigo-500" />,
    title: "Creative Assistance",
    desc: "Create faster with generative tools — from text and visuals to new ideas and concepts.",
  },
  {
    icon: <Shield className="w-10 h-10 text-indigo-500" />,
    title: "Secure by Design",
    desc: "Your data is protected with modern encryption standards and strict security protocols.",
  },
  {
    icon: <Zap className="w-10 h-10 text-indigo-500" />,
    title: "Instant Performance",
    desc: "Experience lightning-fast response times powered by an optimized server infrastructure.",
  },
  {
    icon: <Layers className="w-10 h-10 text-indigo-500" />,
    title: "Modular System",
    desc: "Every feature is modular — choose only what you need and scale effortlessly.",
  },
];

export default function FeaturesPage() {
  const { isLoggedIn } = useAuth();
  return (
    <div className="min-h-screen bg-black/70 m-10 rounded-2xl text-gray-100 flex flex-col items-center px-6 py-20">
      {/* Nagłówek */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8"
      >
        Explore our Features
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-400 text-center max-w-2xl mb-16"
      >
        Zobacz, co sprawia, że nasza platforma wyróżnia się spośród innych.
        Inteligencja, wydajność i piękny design — wszystko w jednym miejscu.
      </motion.p>

      {/* Sekcja kart */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-2 transition"
          >
            <div className="mb-4">{feature.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Sub-footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <p className="text-gray-500 mb-4">Ready to experience the future?</p>
        {isLoggedIn ? (
          <span />
        ) : (
          <a
            href="/register"
            className="px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition font-medium"
          >
            Get Started
          </a>
        )}
      </motion.div>
    </div>
  );
}
