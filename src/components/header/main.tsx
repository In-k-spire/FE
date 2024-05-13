"use client";
import useUser from "@/hooks/useUser";

const HeaderMain = ({ children }: { children: React.ReactNode }) => {
  const user = useUser();
  console.log(user, !!user);
  return (
    <div className="flex h-16 w-full items-center justify-between bg-white px-12 md:px-20 lg:px-28 xl:px-36">
      <div className="flex items-center gap-6 lg:gap-8">{children}</div>
      <div className="text-base md:text-lg xl:text-2xl">
        {!!user ? `${user.code} 님 안녕하세요` : "로그인"}
      </div>
    </div>
  );
};

export default HeaderMain;
