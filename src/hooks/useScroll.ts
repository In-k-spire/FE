import { useEffect, useState } from "react";
import { throttle } from "lodash";
interface ScrollPosition {
  x: number;
  y: number;
}

const useScroll = (): ScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    }, 300);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { y: scrollPosition.y, x: scrollPosition.x };
};

export default useScroll;
