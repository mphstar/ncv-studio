"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Motion Graphic", description: "Creating engaging motion graphics animations." },
  { title: "Illustration", description: "Producing high-quality digital illustrations." },
  { title: "Motion 3D", description: "3D animation for various creative needs." },
  { title: "Live2D", description: "Interactive character animation." },
  { title: "Mixing & Mastering", description: "Professional audio processing and enhancement." },
  { title: "Music Video (MV)", description: "High-quality music video production." },
  { title: "Video Production", description: "Complete video production from concept to final output." },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section id="services" className="mt-24 px-4">
      {/* Title Section */}
      <h2 className="text-xl uppercase text-gray-400">Our Services</h2>
      <h1 className="text-4xl font-bold mt-2">
        What <span className="">Services</span> We Offer
      </h1>

      {/* Service List */}
      <div className="mt-10 space-y-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`border-b border-gray-700 pb-4 flex flex-col md:flex-row justify-between md:items-center cursor-pointer transition-all ${
              selectedService === service.title ? "text-black dark:text-white font-bold text-2xl" : "text-gray-600 dark:text-gray-300 text-lg"
            }`}
            onClick={() => setSelectedService(service.title)}
          >
            <span>
              {service.title}
              {selectedService === service.title && (
                <motion.span
                  className="text-teal-400"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  .
                </motion.span>
              )}
            </span>

            {/* Description appears on the right */}
            {selectedService === service.title && (
              <motion.p
                className="text-gray-600 dark:text-gray-300 text-lg max-w-md"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {service.description}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
