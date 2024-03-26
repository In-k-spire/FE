import BookLayout from "../book/bookLayout";
import BtnLayout from "../button";

export const CateItem = () => {
  return (
    <div className="flex h-48 md:h-56 md:gap-8 lg:h-64 lg:gap-12">
      <BookLayout
        image="https://shopping-phinf.pstatic.net/main_3248059/32480599469.20230927071226.jpg"
        className="cursor-pointer rounded-lg shadow-2xl duration-300 hover:scale-105 [&>img]:rounded-lg"
        width="min-w-[8rem] md:min-w-[10rem] lg:min-w-[12rem]"
        heigth="h-full"
      />
      <div className="flex flex-col gap-4">
        <span className=" text-shelfTextColor text-2xl font-bold">
          카테고리명
        </span>
        <span className="flex-1 text-lg text-grayscale/40">총 15권</span>
        <BtnLayout className="border-shelfTextColor text-shelfTextColor hover:bg-shelfTextColor w-full whitespace-nowrap rounded-full duration-300 hover:text-white md:h-[2rem] md:text-lg lg:h-[2.5rem] lg:text-xl">
          자세히 보기
        </BtnLayout>
      </div>
    </div>
  );
};
