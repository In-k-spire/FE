import { colors } from "@/store/color";
import { useEffect, useState } from "react";

export const useRandomBg = () => {
  const [bg, setBg] = useState('')
  useEffect(() => {
    setBg(colors[Math.floor(Math.random() * 15)])
  },[])
  return {bg};
};
