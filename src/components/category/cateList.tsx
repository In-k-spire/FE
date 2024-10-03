import BtnLayout from "../share/button";
import { Shelf } from "../share/shelf";
import { CateItem } from "./cateItem";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { BookType } from "@/type/book";
interface ICateList {
  name: string;
  id: number;
  bookList: BookType[];
}
export const CateList = ({ name, id, bookList }: ICateList) => {
  const ItemList = bookList?.map((book, idx) => (
    <CateItem book={book} key={idx} />
  ));
  return (
    <div className="relative flex w-full flex-col">
      <div className="flex flex-col items-start justify-between gap-2 px-4 pt-8 md:flex-row md:items-center md:gap-0 md:px-8 lg:px-12 ">
        <div className="flex w-full justify-between gap-4 text-2xl md:w-auto md:justify-start xl:text-3xl">
          <span>{name}</span>
          <BtnLayout
            disabled={!bookList.length}
            href={`/category/${id}`}
            sizes="sm"
            className="group rounded-full bg-shelfTextColor text-white"
          >
            더보기
            <FaArrowRight className="duration-300 group-hover:translate-x-2" />
          </BtnLayout>
        </div>
        <BtnLayout
          href={`/category/add?category=${name}&id=${id}`}
          color="shelfTextColor"
          sizes="sm"
          className="rounded-md border border-shelfTextColor text-shelfTextColor hover:bg-shelfTextColor hover:text-white"
        >
          책 추가하기
          <FaPlus />
        </BtnLayout>
      </div>
      <div className="flex h-full w-full gap-8 overflow-auto p-4 md:p-8 lg:gap-12 lg:p-12 2xl:gap-16">
        {ItemList}
      </div>
      <Shelf />
    </div>
  );
};
