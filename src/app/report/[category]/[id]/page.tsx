"use client";
import useBook from "@/hooks/useBook";
import { motion, AnimatePresence } from "framer-motion";
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
  const { book } = useBook();
  const [random, setRandom] = useState(8);
  return (
    <motion.div
      key={book.title}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`h-full ${color[random]} flex justify-center py-10`}
    >
      <div className="w-[40rem] bg-white shadow-lg">{book.title}</div>
    </motion.div>
  );
};
export default BookDetail;
