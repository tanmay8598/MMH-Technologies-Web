"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollReveal({
  children,
  direction = "left",
}) {
  const [isTabletOrBelow, setIsTabletOrBelow] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsTabletOrBelow(window.innerWidth < 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const variants = {
    hidden: {
      opacity: 0,
      x: !isTabletOrBelow
        ? direction === "left"
          ? -150
          : 150
        : 0,
      y: isTabletOrBelow ? 40 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}
