import BtnLayout from "../share/button";
import { Shelf } from "../share/shelf";
import { CateItem } from "./cateItem";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
export const CateList = ({ category }: { category: string }) => {
  return (
    <div className="relative flex w-full flex-col">
      <div className="flex items-center justify-between px-8 pt-8  lg:px-12 ">
        <div className="flex gap-4 text-2xl xl:text-3xl">
          <span>{category}</span>
          <BtnLayout
            href={`/report/${category}`}
            sizes="sm"
            className="group rounded-full bg-shelfTextColor text-white"
          >
            더보기
            <FaArrowRight className="duration-300 group-hover:translate-x-2" />
          </BtnLayout>
        </div>
        <BtnLayout
          href="/report/add"
          color="shelfTextColor"
          sizes="sm"
          className="rounded-md border border-shelfTextColor text-shelfTextColor hover:bg-shelfTextColor hover:text-white"
        >
          책 추가하기
          <FaPlus />
        </BtnLayout>
      </div>
      <div className="flex h-full w-full gap-8 overflow-auto p-8 lg:gap-12 lg:p-12 2xl:gap-16">
        <CateItem />
        <CateItem />
        <CateItem />
        <CateItem />
        <CateItem />
      </div>
      <Shelf />
    </div>
  );
};
