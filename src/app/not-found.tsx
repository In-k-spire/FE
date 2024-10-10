import BtnLayout from "@/components/share/button";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6">
      <Image
        className="bg-inherit"
        src="/404.png"
        width={400}
        height={400}
        alt="404"
      />
      <div className=" text-4xl font-bold">페이지를 찾을 수 없습니다.</div>
      <BtnLayout
        href="/"
        className="rounded-md bg-primary text-white hover:bg-opacity-80"
      >
        메인으로 돌아가기
      </BtnLayout>
    </div>
  );
};

export default NotFound;
