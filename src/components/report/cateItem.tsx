import BookLayout from "../share/book";
import BtnLayout from "../share/button";

export const CateItem = () => {
  return (
    <div className="flex gap-8 2xl:gap-12">
      <BookLayout
        image="https://shopping-phinf.pstatic.net/main_3248059/32480599469.20230927071226.jpg"
        className="cursor-pointer"
      />
      <div className="flex flex-col gap-4">
        <span className=" font-bold text-shelfTextColor md:text-xl xl:text-2xl">
          카테고리명
        </span>
        <span className="flex-1 text-grayscale/40 md:text-base xl:text-lg">
          총 15권
        </span>
        <BtnLayout
          sizes="sm"
          rounded="rounded-full"
          color="shelfTextColor"
          filled="ghost"
        >
          자세히 보기
        </BtnLayout>
      </div>
    </div>
  );
};
