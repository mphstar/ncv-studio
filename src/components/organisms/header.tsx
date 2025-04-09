"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ModeToggle } from "../atoms/DarkModeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { TbEyeFilled } from "react-icons/tb";

const sections = ["portfolio", "services", "about", "contact"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  // Fungsi untuk smooth scroll ke section yang dipilih
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = -80; // Adjust this value as needed
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition + offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsOpen(false); // Tutup menu setelah klik (mobile)
    }
  };

  return (
    <header className="flex justify-between items-center py-6 px-4 sticky top-0 z-20 backdrop-blur-sm transition-colors">
      {/* Logo */}
      <Link
        className="w-[170px]"
        href="/"
        onClick={() => scrollToSection("home")}
      >
        <div className="flex items-center gap-2 whitespace-nowrap">
          <Image src={"/assets/images/logo-dark.png"} alt="Logo" width={300} height={300} className="h-6 w-6 flex dark:hidden" />
          <Image src={"/assets/images/logo-white.png"} alt="Logo" width={300} height={300} className="h-6 w-6 hidden dark:flex" />
          <p>
            <span className="italic font-bold">NCV</span>{" "}
            <span className="text-gray-600 dark:text-gray-300">Studio</span>
          </p>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:block w-full items-center justify-items-center">
        <ul className="flex gap-2 items-center text-sm font-semibold">
          {sections.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSection(item)}
                className="px-3 py-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="w-full md:w-[170px] flex justify-end justify-items-end">
        <button
          className="md:hidden text-black dark:text-white"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>

        {/* Dark Mode Toggle */}
        <div className="hidden md:block">
          <ModeToggle />
        </div>
      </div>

      {/* Fullscreen Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 h-screen w-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center space-y-8 z-[100] transition-colors"
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-black dark:text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>

            {/* Navigation Links */}
            {sections.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item)}
                className="text-2xl hover:text-gray-600 dark:hover:text-gray-400 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}

            {/* Dark Mode Toggle in Mobile */}
            <div className="mt-6">
              <ModeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
