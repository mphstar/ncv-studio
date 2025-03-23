"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const text = ["N", "C", "V", " ", " ", "S", "t", "u", "d", "i", "o"]; // Memastikan spasi ada

  useEffect(() => {
    setTimeout(() => {
      onFinish(); // Sembunyikan loading setelah beberapa detik
    }, 2500);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50">
      <motion.h1
        className="text-6xl md:text-8xl font-bold flex text-black dark:text-white"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        {text.map((char, index) => (
          <motion.span
            key={index}
            className={`relative ${char === " " ? "w-4" : ""}`} // Menambahkan lebar spasi
            variants={{
              hidden: { opacity: 0, color: "rgb(0,0,0)" },
              visible: {
                opacity: 1,
                color: "rgb(100,100,100)",
                transition: { duration: 0.8, ease: "easeInOut" },
              },
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
