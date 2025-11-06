"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  id: number;
  icon: ReactNode;
  title: string;
  desc: string;
}

export default function FeatureCard({
  id,
  icon,
  title,
  desc,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.2 * id,
          ease: "easeOut",
        },
      }}
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.4,
          delay: 0.2,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true }}
      className="p-6  shadow-sm rounded-2xl flex flex-col border-1 border-indigo-700 items-center text-center"
    >
      <div className="text-indigo-600 text-4xl mb-4">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
    </motion.div>
  );
}
