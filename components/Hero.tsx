"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-16">
      <div className="max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-12"
        >
          My name is Alex Tkachev. I'm a{" "}
          <span className="font-medium">Digital Versatile Designer</span>{" "}
          based in Almaty (KZ).
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-16"
        >
          <a 
            href="mailto:hello@alextkachev.com" 
            className="text-lg md:text-xl hover:opacity-70 transition-opacity"
          >
            hello@alextkachev.com
          </a>
          <span className="mx-4 text-gray-300">•</span>
          <a 
            href="mailto:hello@alextkachev.com" 
            className="text-lg md:text-xl hover:opacity-70 transition-opacity"
          >
            hello@alextkachev.com
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-sm text-gray-500"
        >
          Use menu to explore
        </motion.div>
      </div>
    </section>
  );
}