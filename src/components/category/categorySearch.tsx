import BtnLayout from "../share/button";
import { InputLayout } from "../share/input";
import { Shelf } from "../share/shelf";
import { FaPlus } from "react-icons/fa6";
interface ICategorySearch {
  setCategory: (v: string) => void;
}
export const CategorySearch = ({ setCategory }: ICategorySearch) => {
  return (
    <div className="w-full">
      <div className="flex flex-col-reverse items-start justify-between gap-8 p-4 md:flex-row md:p-8 lg:p-12 ">
        <div className="flex w-full flex-col sm:w-auto">
          <span className="hidden whitespace-nowrap text-4.5xl font-bold leading-[1.1] text-shelfTextColor sm:flex md:text-5xl lg:text-5.5xl 2xl:text-6xl">
            Book of<br></br> the week
          </span>
          <span className="mt-8 text-base text-gray-400 lg:text-lg">
            원하는 카테고리가 있으신가요?
          </span>
          <InputLayout
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-md shadow-md"
            placeholder="카테고리로 검색"
            sizes="lg"
          />
        </div>
        <BtnLayout
          href="/category/add"
          color="shelfTextColor"
          className="rounded-md bg-shelfTextColor text-white hover:opacity-80"
        >
          책 추가하기
          <FaPlus />
        </BtnLayout>
      </div>
      <Shelf />
    </div>
  );
};
