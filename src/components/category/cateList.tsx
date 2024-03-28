import Link from "next/link";
import BtnLayout from "../button";
import { Shelf } from "../share/shelf";
import { CateItem } from "./cateItem";
import { FaArrowRight } from "react-icons/fa";
export const CateList = ({ category }: { category: string }) => {
  return (
    <div className="relative flex w-full flex-col">
      <div className="flex gap-4 px-8 pt-8 text-2xl lg:px-12 xl:text-3xl">
        <span>{category}</span>
        <Link href = {`/report/${category}`}>
          <BtnLayout size="sm" color="shelfTextColor" rounded="rounded-full">
            더보기
            <FaArrowRight />
          </BtnLayout>
        </Link>
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
