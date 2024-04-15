"use client"
import {  ReactNode } from "react";
import "swiper/css";
import { Swiper } from "swiper/react";
import { SwiperOptions } from "swiper/types";
interface CustomSwiperProps extends SwiperOptions {
  children: ReactNode;
  className? : string
}
export const CustomSwiper = ({children,className, ...options} : CustomSwiperProps)   => {
    return <Swiper {...options} className={className}>{children}</Swiper>
}