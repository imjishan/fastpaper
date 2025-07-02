"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function LatestProject() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-16 border-t border-gray-100">
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-2">Latest Project</h2>
      </div>

      <motion.div 
        className="group cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div className="mb-4 md:mb-0">
            <motion.h3 
              className="text-3xl md:text-5xl font-light mb-2"
              animate={{ x: isHovered ? 10 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              Cristina Gómez
            </motion.h3>
            <p className="text-gray-600">Art Direction, Design, UI Motion, 2024</p>
          </div>
          
          <div className="flex space-x-4">
            <motion.button 
              className="px-6 py-3 border border-black text-sm font-medium hover:bg-black hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View case
            </motion.button>
            <motion.button 
              className="px-6 py-3 border border-black text-sm font-medium hover:bg-black hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View case
            </motion.button>
          </div>
        </div>

        <motion.div 
          className="aspect-video bg-gray-100 rounded-lg overflow-hidden"
          animate={{ scale: isHovered ? 1.02 : 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm">Cristina Gómez Project Preview</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="mt-8 text-sm text-gray-500">
        Use menu to explore
      </div>
    </section>
  );
}