import BookLayout from "../book/bookLayout";
import BtnLayout from "../button";

export const CateItem = () => {
  return (
    <div className="flex md:gap-8 lg:gap-12">
      <BookLayout
        image="https://shopping-phinf.pstatic.net/main_3248059/32480599469.20230927071226.jpg"
        className="cursor-pointer"
      />
      <div className="flex flex-col gap-4">
        <span className=" text-shelfTextColor text-2xl font-bold">
          카테고리명
        </span>
        <span className="flex-1 text-lg text-grayscale/40">총 15권</span>
        <BtnLayout size = "sm" rounded="rounded-full" color = "shelfTextColor" filled="ghost">
          자세히 보기
        </BtnLayout>
      </div>
    </div>
  );
};
