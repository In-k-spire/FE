"use client";
import OAuthBtn from "@/components/button/oauth";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import BtnLayout from "@/components/button";
import Lottie from "react-lottie-player";
import ReadingJson from "../assets/reading.json";
export default function Home() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full justify-evenly">
        <div className="flex flex-col justify-center gap-12">
          <span className="whitespace-nowrap  text-[80px] font-semibold leading-[1.2] tracking-wider">
            <p>책을 읽고</p>
            <p>자신의 생각을</p>
            <p>정리해보세요</p>
          </span>
          <div className="flex gap-4">
            <OAuthBtn className="bg-black">
              <FaGithub size="2rem" className="text-white" />
            </OAuthBtn>
            <OAuthBtn className="bg-white">
              <FcGoogle size="2rem" />
            </OAuthBtn>
          </div>
          <BtnLayout className="h-16 w-64 bg-white text-3xl font-semibold text-primary duration-200 hover:bg-primary hover:text-white">
            Start Now
          </BtnLayout>
        </div>
        <Lottie
          loop
          play
          animationData={ReadingJson}
          className="h-[40rem] w-[40rem]"
        />
      </div>
    </div>
  );
}
