"use client";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import BookLayout from "@/components/book/bookLayout";
import BtnLayout from "@/components/button";
import CategoryList from "@/components/category/cateList";
import useBook from "@/hooks/useBook";
import { SelectedBook } from "@/components/category/selectedBook";

const CategoryDetail = () => {
  const { book } = useBook();

  return (
    <div className={`flex h-full w-full items-center justify-between  px-24`}>
      <CategoryList />
      <SelectedBook />
    </div>
  );
};

export default CategoryDetail;
