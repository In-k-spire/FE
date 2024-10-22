import { RefObject, useEffect } from "react";
import { SwiperRef } from "swiper/react";

export const useSwipeOnScroll = (swiperRef: RefObject<SwiperRef | null> | null) => {
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (swiperRef?.current) {
        const swiper = swiperRef.current.swiper;
        if (event.deltaY > 0) {
          swiper.slideNext();
        } else {
          swiper.slidePrev();
        }
      }
    };
    if (swiperRef?.current) {
      window.addEventListener("wheel", handleScroll);
      return () => {
        window.removeEventListener("wheel", handleScroll);
      };
    }
  }, [swiperRef]);
};
