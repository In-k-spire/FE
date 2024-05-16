import BookLayout from "../share/book";
import { InputLayout } from "../share/input";
import { Shelf } from "../share/shelf";
export const RecentItem = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-start justify-between gap-8 p-12 md:flex-row md:items-center md:gap-0">
        <div className="flex w-full flex-col sm:w-auto">
          <span className="hidden whitespace-nowrap text-4.5xl font-bold leading-[1.1] text-shelfTextColor sm:flex md:text-5xl lg:text-5.5xl 2xl:text-6xl">
            Book of<br></br> the week
          </span>
          <span className="mt-8 text-base text-grayscale/40 lg:text-lg">
            원하는 카테고리가 있으신가요?
          </span>
          <InputLayout
            className="w-full"
            placeholder="카테고리로 검색"
            sizes="lg"
          />
        </div>
        <div className="hidden items-center gap-16  sm:flex xl:gap-24">
          <BookLayout
            image="https://shopping-phinf.pstatic.net/main_3248059/32480599469.20230927071226.jpg"
            className="hidden 2xl:flex"
            sizes="xl"
          />
          <BookLayout image="https://shopping-phinf.pstatic.net/main_3248059/32480599469.20230927071226.jpg" />
          <BookLayout image="https://shopping-phinf.pstatic.net/main_3248059/32480599469.20230927071226.jpg" />
        </div>
      </div>
      <Shelf />
    </div>
  );
};
