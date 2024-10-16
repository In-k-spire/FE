"use client";
import useUser from "@/hooks/useUser";
import Link from "next/link";
import { useState } from "react";

const HeaderMain = ({ children }: { children: React.ReactNode }) => {
  const { user, logoutMutate: logout } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex h-16 w-full items-center justify-between bg-white px-4 shadow-md sm:px-8 md:px-16 lg:px-28 xl:px-36 ">
      <div className="flex items-center gap-6 lg:gap-8">{children}</div>
      <div className="text-base md:text-lg xl:text-2xl">
        {!!user?.name ? (
          <div
            className="relative cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {user?.name} <span className="hidden md:inline">님 안녕하세요</span>
            <div
              onClick={() => logout()}
              className={`${
                isOpen ? "flex" : "hidden"
              } absolute left-0 top-[110%] whitespace-nowrap rounded-md border border-gray-300 bg-white p-2 text-sm hover:text-primary`}
            >
              로그아웃
            </div>
          </div>
        ) : (
          <Link href="/login">로그인</Link>
        )}
      </div>
    </div>
  );
};

export default HeaderMain;
