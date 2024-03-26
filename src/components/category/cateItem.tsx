import BookLayout from "../book/bookLayout";
import BtnLayout from "../button";

export const CateItem = () => {
  return (
    <div className="flex gap-8 2xl:gap-12">
      <BookLayout
        image="https://shopping-phinf.pstatic.net/main_3248059/32480599469.20230927071226.jpg"
        className="cursor-pointer"
      />
      <div className="flex flex-col gap-4">
        <span className=" text-shelfTextColor md:text-xl xl:text-2xl font-bold">
          카테고리명
        </span>
        <span className="flex-1 md:text-base xl:text-lg text-grayscale/40">총 15권</span>
        <BtnLayout size = "sm" rounded="rounded-full" color = "shelfTextColor" filled="ghost">
          자세히 보기
        </BtnLayout>
      </div>
    </div>
  );
};
