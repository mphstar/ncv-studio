"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useMouse from "@react-hook/mouse-position";
import { useTheme } from "next-themes";

const Cursor = ({ children }: { children: React.ReactNode }) => {
  const [isFocused, setIsFocused] = useState(true);
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const ref = React.useRef<HTMLDivElement>(null);
  const mouse = useMouse(ref as React.RefObject<HTMLElement>, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX ?? 0;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY ?? 0;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 20,
      width: 20,
      fontSize: "16px",
      backgroundColor: theme === "dark" ? "#fff" : "#000",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const cursorVariant = "default";

  return (
    <div ref={ref} onMouseEnter={handleFocus} onMouseLeave={handleBlur}>
      {/* Jika bukan di mobile, tampilkan kursor */}
      {!isMobile && mouse.x !== null && mouse.y !== null && (
        <motion.div
          variants={variants}
          className="circle"
          animate={isFocused ? cursorVariant : "hidden"}
          transition={spring}
        />
      )}
      {children}
    </div>
  );
};

export default Cursor;
