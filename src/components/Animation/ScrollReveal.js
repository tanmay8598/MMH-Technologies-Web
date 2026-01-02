"use client";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";

export default function ScrollReveal({ children, direction = "left" }) {
  const [amount, setAmount] = useState(0.3);
  const xInitial = direction === "left" ? -250 : 250;

  useEffect(() => {
    if (window.innerWidth < 768) { // mobile/tablet breakpoint
      setAmount(0.1); // trigger earlier on small screens
    }
  }, []);

  return (
    <motion.div
      initial={{ x: xInitial, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}

