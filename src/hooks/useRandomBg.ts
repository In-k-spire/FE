import { useEffect, useState } from "react";

export const useRandomBg = () => {
  let bg;
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
  useEffect(() => {
    console.log("hi");
    bg = color[Math.floor(Math.random() * 15)];
  });

  return { bg };
};
