"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  const text = "NCV Studio".split(""); // Pisahkan huruf satu per satu

  return (
    <section id="home">
      <motion.div
        className="relative flex flex-col justify-center px-4 py-12 mb-48 mt-28"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.div className="max-w-3xl">
          {/* Animasi teks kecil */}
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            From Concept to Creation, From Creation to Meaning.
          </motion.p>

          {/* Animasi teks besar NCV Studio */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mt-4 leading-tight flex"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            {text.map((char, index) => (
              <motion.span
                key={index}
                className="relative"
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.6, ease: "easeInOut" },
                  },
                }}
              >
                {char === " " ? "\u00A0" : char} {/* Spasi tetap rapi */}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        {/* Animasi teks Scroll to explore */}
        <motion.div
          className="absolute bottom-4 right-12 text-right text-gray-400"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1.2, delay: 0.5 },
            },
          }}
        >
          <p className="text-sm">Scroll to explore</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
