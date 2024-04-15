"use client"
import OAuthBtn from "@/components/button/oauth";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import BtnLayout from "@/components/button";
import Lottie from "react-lottie-player";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ReadingJson from "../assets/reading.json";
import { quotes } from "@/store/quote";
import { CustomSwiper } from "@/components/share/customSwiper";
export default function Home() {
  return (
    <div className="flex h-full w-full flex-col  items-center  justify-between px-0 md:flex-row  xl:px-32">
      <div className="flex w-full flex-col justify-between gap-6 md:gap-8 xl:gap-12">
        <span className="whitespace-nowrap text-4xl font-semibold leading-[1.1]  tracking-wider md:text-5xl lg:text-5.5xl xl:text-6xl">
          <p>책을 읽고</p>
          <p>자신의 생각을</p>
          <p>정리해보세요</p>
        </span>
       
        <CustomSwiper
          modules={[Autoplay]}
          speed={1000}
          autoplay={{ delay: 4000 }}
          className="w-full sm:w-auto md:max-w-[24rem] 2xl:max-w-[36rem]"
          slidesPerView={1}
          centeredSlides={false}
          loop={true}
        >
          {quotes.map(({ content, person }, idx) => (
            <SwiperSlide
              className="relative break-keep text-grayscale/40 md:text-lg lg:text-xl xl:text-2xl"
              key={idx}
            >
              <p>{content}</p>
              <p className="mt-4">{person}</p>
            </SwiperSlide>
          ))}
        </CustomSwiper>

        <div className="flex gap-4">
          <OAuthBtn provider="github">
            <FaGithub className="h-6 w-6 text-white xl:h-8 xl:w-8" />
          </OAuthBtn>
          <OAuthBtn provider="google">
            <FcGoogle className="h-6 w-6 xl:h-8 xl:w-8" />
          </OAuthBtn>
        </div>
        <BtnLayout
          size="xl"
          color="primary"
          rounded="rounded-md"
          filled="ghost"
        >
          Start Now
        </BtnLayout>
      </div>
      <Lottie
        className="hidden max-w-[30rem] md:flex"
        loop
        play
        animationData={ReadingJson}
      />
    </div>
  );
}
