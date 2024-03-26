import BookLayout from "../book/bookLayout";
import { InputLayout } from "../input";
import { Shelf } from "../share/shelf";
export const RecentItem = () => {
  return (
    <div className="w-full">
      <div className="md:flex-row flex-col flex items-start md:gap-0 gap-8 md:items-center justify-between p-12">
        <div className="flex-col sm:w-auto w-full flex">
          <span className="text-shelfTextColor whitespace-nowrap sm:flex hidden text-4.5xl md:text-5xl lg:text-5.5xl 2xl:text-6xl font-bold leading-[1.1]">
            Book of<br></br> the week
          </span>
          <span className="mt-8 text-base lg:text-lg text-grayscale/40">
            원하는 카테고리가 있으신가요?
          </span>
          <InputLayout className="w-full"  placeholder="카테고리로 검색" size="lg" />
        </div>
        <div className="hidden items-center sm:flex  gap-16 xl:gap-24">
          <BookLayout
            image="https://shopping-phinf.pstatic.net/main_3248059/32480599469.20230927071226.jpg"
            className="2xl:flex hidden"
            size = "xl"
          />
          <BookLayout
            image="https://shopping-phinf.pstatic.net/main_3248059/32480599469.20230927071226.jpg"
          />
          <BookLayout
            image="https://shopping-phinf.pstatic.net/main_3248059/32480599469.20230927071226.jpg"
          />
        </div>
      </div>
      <Shelf />
    </div>
  );
};
