"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const [animationOffset, setAnimationOffset] = useState(0);
  const speed = 0.5; // Kecepatan gerakan

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationOffset((prev) => (prev >= 100 ? 0 : prev + speed));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-bold uppercase text-black dark:text-gray-300 tracking-wide">
          About <span className="text-white">NCV</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 italic">
          "From Concept to Creation, From Creation to Meaning."
        </p>

        {/* Description */}
        <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
          NCV is a creative agency specializing in branding, animation, and
          design. We transform ideas into meaningful visual creations. With a
          dedicated team, we deliver innovative solutions in{" "}
          <span className="text-white font-semibold">
            motion graphics, illustration, 3D motion, Live2D, mixing mastering,
            MV, and video production.
          </span>
        </p>

        {/* Animated Image Grid & Text */}
        <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
          {/* Animated Image Grid */}
          <div className="relative w-full  overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/assets/images/overview-logo.jpg"
                alt="Logo"
                width={400}
                height={300}
                className="w-full h-full object-contain rounded-md"
              />
            </div>
          </div>

          {/* Vision, Mission, Values */}
          <div>
            <h3 className="text-xl font-semibold uppercase text-gray-600 dark:text-gray-300">
              Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              To be the leading creative agency in meaningful visual innovation.
            </p>

            <h3 className="text-xl font-semibold uppercase text-gray-600 dark:text-gray-300 mt-6">
              Mission
            </h3>
            <ul className="text-gray-600 dark:text-gray-400 mt-2 space-y-2 list-disc list-inside">
              <li>Transform concepts into authentic creations.</li>
              <li>Utilize cutting-edge technology in animation & design.</li>
              <li>Help brands build strong visual identities.</li>
            </ul>

            <h3 className="text-xl font-semibold uppercase text-gray-600 dark:text-gray-300 mt-6">
              Our Values
            </h3>
            <ul className="text-gray-600 dark:text-gray-400 mt-2 space-y-2 list-disc list-inside">
              <li>
                <span className="text-black dark:text-white font-semibold">
                  Creativity:
                </span>{" "}
                We think beyond limits.
              </li>
              <li>
                <span className="text-black dark:text-white font-semibold">
                  Innovation:
                </span>{" "}
                We explore new possibilities.
              </li>
              <li>
                <span className="text-black dark:text-white font-semibold">
                  Collaboration:
                </span>{" "}
                Together, we create magic.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
