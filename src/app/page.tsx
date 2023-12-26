"use client";
import OAuthBtn from "@/components/button/oauth";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import BtnLayout from "@/components/button";
import Lottie from "react-lottie-player";
import ReadingJson from "../assets/reading.json";
export default function Home() {
  return (
    <div className="m-16 flex justify-evenly">
      <div className="flex flex-col justify-center gap-12">
        <span className="whitespace-nowrap  text-[54px] font-semibold leading-[1.2] tracking-wider">
          <p>책을 읽고</p>
          <p>자신의 생각을</p>
          <p>정리해보세요</p>
        </span>
        <div className="flex gap-4">
          <OAuthBtn className="bg-black">
            <FaGithub size="1.25rem" className="text-white" />
          </OAuthBtn>
          <OAuthBtn className="bg-white">
            <FcGoogle size="1.25rem" />
          </OAuthBtn>
        </div>
        <BtnLayout className="bg-white hover:text-white h-12 w-48 text-lg font-semibold text-primary duration-200 hover:bg-primary">
          Start Now
        </BtnLayout>
      </div>
      <Lottie
        loop
        play
        animationData={ReadingJson}
        className="h-[30rem] w-[30rem]"
      />
    </div>
  );
}
