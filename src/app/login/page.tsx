"use client";
import BtnLayout from "@/components/share/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import useOauth from "@/hooks/useOAuth";
const LoginPage = () => {
  const { redirectOAuth } = useOauth();
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-[20rem] flex-col items-center gap-2 rounded-md border border-gray-300 bg-white p-4 shadow-md md:w-[25rem] lg:w-[30rem]">
        <span className="text-2xl font-bold">로그인</span>
        <span className="text-sm font-semibold text-gray-400">
          로그인하고 독후감을 작성해보세요
        </span>
        <BtnLayout
          sizes="full"
          onClick={() => redirectOAuth("google")}
          className="mt-8 rounded-md border border-gray-300 bg-white font-bold hover:bg-gray-50  ow:py-1 "
        >
          <FcGoogle size="1.5rem" />
          Google로 로그인
        </BtnLayout>
        <BtnLayout
          sizes="full"
          onClick={() => redirectOAuth("github")}
          className="rounded-md border border-gray-300 bg-black font-bold text-white hover:opacity-80  ow:py-1 "
        >
          <FaGithub size="1.5rem" />
          Github로 로그인
        </BtnLayout>
      </div>
    </div>
  );
};

export default LoginPage;
