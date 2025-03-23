"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Motion", "Illustration", "Music Video", "Animation"];

const works = [
  {
    id: 1,
    category: "Illustration",
    src: "https://random.imagecdn.app/400/300?category=Illustration+1",
    title: "Paperstreet",
  },
  {
    id: 2,
    category: "Illustration",
    src: "https://random.imagecdn.app/400/300?category=Illustration+2",
    title: "Artwork 2",
  },
  {
    id: 3,
    category: "Motion",
    src: "https://random.imagecdn.app/400/300?category=Motion+1",
    title: "Motion Design",
  },
  {
    id: 4,
    category: "Music Video",
    src: "https://random.imagecdn.app/400/300?category=Music+Video+1",
    title: "Music Video",
  },
  {
    id: 5,
    category: "Animation",
    src: "https://random.imagecdn.app/400/300?category=Animation+1",
    title: "Animation Art",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredWorks =
    selectedCategory === "All"
      ? works
      : works.filter((work) => work.category === selectedCategory);

  return (
    <section id="portfolio" className="px-4">
      <h1 className="text-4xl font-bold mb-6">Works</h1>
      <div className="flex space-x-2 mb-6 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${
              selectedCategory === category
                ? "bg-black text-white dark:bg-white dark:text-black"
                : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-5">
        <AnimatePresence>
          {filteredWorks.map((work) => (
            <motion.div
              key={work.id}
              layout
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              {/* Image */}
              <Image
                src={work.src}
                alt={work.category}
                width={300}
                height={200}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 rounded-lg">
                <span className="text-white font-medium"> {work.title} </span>
                <ArrowUpRight className="text-white w-6 h-6 self-end" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
