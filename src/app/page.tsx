"use client";
import BtnLayout from "@/components/share/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { quotes } from "@/store/quote";
import Image from "next/image";
import useOauth from "@/hooks/useOAuth";

export default function Home() {
  const { redirectOAuth } = useOauth();
  return (
    <div className="flex h-full w-full flex-col  items-center  justify-between px-0 md:flex-row ">
      <div className="flex w-full flex-col justify-between gap-6 md:gap-8 xl:gap-12">
        <span className="whitespace-nowrap text-4xl font-semibold leading-[1.1]  tracking-wider md:text-5xl lg:text-5.5xl xl:text-6xl">
          <p>책을 읽고</p>
          <p>자신의 생각을</p>
          <p>정리해보세요</p>
        </span>

        <Swiper
          modules={[Autoplay]}
          speed={1000}
          autoplay={{ delay: 4000 }}
          className="horizontal flex w-full overflow-hidden sm:w-auto md:max-w-[24rem] 2xl:max-w-[36rem]"
          slidesPerView={1}
          centeredSlides={false}
          loop={true}
        >
          {quotes.map(({ content, person }, idx) => (
            <SwiperSlide
              className="relative break-keep text-gray-400 md:text-lg lg:text-xl xl:text-2xl"
              key={idx}
            >
              <p>{content}</p>
              <p className="mt-4">{person}</p>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex gap-4">
          <BtnLayout
            onClick={() => redirectOAuth("github")}
            sizes="xl"
            className="rounded-md bg-primary text-white duration-200 hover:opacity-80"
          >
            Start Now
          </BtnLayout>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/reading.png"
          width={0}
          loading="eager"
          height={0}
          fill
          objectFit="contain"
          sizes="100%"
          alt="사진"
        />
      </div>
    </div>
  );
}
