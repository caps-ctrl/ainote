"use client";

import { motion } from "framer-motion";
import { Code, Heart, Coffee } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black/60 m-10 rounded-2xl text-gray-100 flex flex-col items-center justify-center px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-10"
      >
        About This Project
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-3xl text-center leading-relaxed text-gray-300"
      >
        <p className="mb-6">
          This project is a personal experiment by a{" "}
          <span className="text-indigo-400 font-medium">wannabe developer</span>{" "}
          — a student from{" "}
          <span className="font-semibold text-indigo-500">Poland</span> 🇵🇱, who
          loves learning, building, and breaking things just to fix them again.
        </p>

        <p className="mb-6">
          It’s built with <span className="text-indigo-400">Next.js</span>,{" "}
          <span className="text-indigo-400">TypeScript</span>, and{" "}
          <span className="text-indigo-400">TailwindCSS</span> — with a touch of{" "}
          <span className="text-pink-400">AI magic</span> here and there.
        </p>

        <p className="mb-6">
          The goal? To push creativity, learn new technologies, and maybe
          inspire other students or junior devs to start their own projects —
          even if they’re not “perfect” yet. Because progress beats perfection.
        </p>

        <p className="text-gray-400 italic">
          Built with <Heart className="inline w-5 h-5 text-pink-500 mx-1" />
          and too much <Coffee className="inline w-5 h-5 text-amber-500 mx-1" />
          .
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-12 flex gap-4"
      >
        <a
          href="/features"
          className="px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition font-medium"
        >
          Explore Features
        </a>
        <a
          href="/register"
          className="px-6 py-3 border border-indigo-500 rounded-xl hover:bg-indigo-500/10 transition font-medium"
        >
          Join the Project
        </a>
      </motion.div>
    </div>
  );
}
