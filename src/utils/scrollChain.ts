import { useEffect } from "react";

const ScrollChain = (divRef: any) => {
  useEffect(() => {
    let height = 0;
    const currentHeight = divRef.current.offsetHeight;
    const layoutHeight = document.getElementById("layout")?.offsetHeight;
    const handleScroll = (event: any) => {
      if (layoutHeight) {
        if (
          event.deltaY > 0 &&
          height > -currentHeight + layoutHeight / 2 &&
          currentHeight > layoutHeight
        ) {
          height -= 100;
        } else if (event.deltaY < 0 && height < 0) {
          height += 100;
        }
        divRef.current.style = `transform : translateY(${height}px)`;
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
};

export default ScrollChain;
