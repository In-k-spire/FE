"use client";

import { motion } from "framer-motion";
import { useState } from "react";
const color = [
  "bg-[#F75C4F]",
  "bg-[#EC80AF]",
  "bg-[#82C0D0]",
  "bg-[#81C1F2]",
  "bg-[#A1D461]",
  "bg-[#F2693E]",
  "bg-[#5783C8]",
  "bg-[#FFB244]",
  "bg-[#80BFD2]",
  "bg-[#EFA047]",
  "bg-[#B8A2FE]",
  "bg-[#6DCC7A]",
  "bg-[#EB4D55]",
  "bg-[#F1D01B]",
  "bg-[#2467D2]",
];
const BookDetail = () => {
  const [random, setRandom] = useState(0);
  return (
    <motion.div
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        repeat: Infinity,
        repeatDelay: 1,
      }}
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      className={`h-full ${color[random]}`}
    >
      HIHI
    </motion.div>
  );
};
export default BookDetail;
