"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Almaty",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container flex items-center justify-between py-4">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Name</span>
            <span className="font-medium">Alex Tkachev™, 2025</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">GMT+6 ({currentTime}, KZ)</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Status</span>
              <span className="font-medium text-green-600">Currently available for Freelance Projects</span>
            </div>
          </div>

          <button
            onClick={toggleMenu}
            className="flex items-center space-x-2 text-sm font-medium hover:opacity-70 transition-opacity"
          >
            <span>{isMenuOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white pt-20"
          >
            <div className="container h-full flex">
              <div className="flex-1 py-8">
                <div className="mb-12">
                  <h3 className="text-sm text-gray-500 mb-4">Sitemap</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-2xl font-light hover:opacity-70 transition-opacity">Index</a></li>
                    <li><a href="#" className="text-2xl font-light hover:opacity-70 transition-opacity">About</a></li>
                    <li><a href="#" className="text-2xl font-light hover:opacity-70 transition-opacity">Projects [9]</a></li>
                    <li><a href="#" className="text-2xl font-light hover:opacity-70 transition-opacity">Services</a></li>
                    <li><a href="#" className="text-2xl font-light hover:opacity-70 transition-opacity">Contact</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm text-gray-500 mb-4">Let's connect</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-lg hover:opacity-70 transition-opacity">Resume</a></li>
                    <li><a href="#" className="text-lg hover:opacity-70 transition-opacity">Twitter</a></li>
                    <li><a href="#" className="text-lg hover:opacity-70 transition-opacity">Instagram</a></li>
                    <li><a href="mailto:hello@alextkachev.com" className="text-lg hover:opacity-70 transition-opacity">Email</a></li>
                    <li><a href="#" className="text-lg hover:opacity-70 transition-opacity">LinkedIn</a></li>
                    <li><a href="#" className="text-lg hover:opacity-70 transition-opacity">Dribbble</a></li>
                  </ul>
                </div>
              </div>

              <div className="flex-1 py-8 pl-16">
                <div className="mb-8">
                  <span className="text-sm text-gray-500">GMT+6 ({currentTime}, KZ)</span>
                </div>
                <div className="mb-8">
                  <span className="text-sm text-gray-500">Status</span>
                  <br />
                  <span className="font-medium text-green-600">Currently available for Freelance Projects</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}