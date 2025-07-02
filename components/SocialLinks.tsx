"use client";

import { motion } from "framer-motion";

export default function SocialLinks() {
  const photos = [
    "ALEX TKACHEV™ Photo 1",
    "ALEX TKACHEV™ Photo 2", 
    "ALEX TKACHEV™ Photo 3",
    "ALEX TKACHEV™ Photo 4",
    "ALEX TKACHEV™ Photo 5"
  ];

  return (
    <section className="py-16 border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Photo Gallery */}
        <div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`aspect-square bg-gray-100 rounded-lg overflow-hidden ${
                  index === 0 ? 'col-span-2' : ''
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gray-200 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-xs">{photo}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm text-gray-500"
          >
            Use menu to explore
          </motion.div>
        </div>

        {/* Social Links */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-sm text-gray-500 mb-4">Let's connect</h3>
              <div className="space-y-3">
                <motion.a 
                  href="#" 
                  className="block text-lg hover:opacity-70 transition-opacity"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Resume
                </motion.a>
                <motion.a 
                  href="#" 
                  className="block text-lg hover:opacity-70 transition-opacity"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Twitter
                </motion.a>
                <motion.a 
                  href="#" 
                  className="block text-lg hover:opacity-70 transition-opacity"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Instagram
                </motion.a>
                <motion.a 
                  href="mailto:hello@alextkachev.com" 
                  className="block text-lg hover:opacity-70 transition-opacity"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Email
                </motion.a>
                <motion.a 
                  href="#" 
                  className="block text-lg hover:opacity-70 transition-opacity"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  LinkedIn
                </motion.a>
                <motion.a 
                  href="#" 
                  className="block text-lg hover:opacity-70 transition-opacity"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Dribbble
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}