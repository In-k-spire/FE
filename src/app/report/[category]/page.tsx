"use client";
import CategoryList from "@/components/category/cateList";

import { SelectedBook } from "@/components/category/selectedBook";

const CategoryDetail = () => {
  return (
    <div className={`flex h-full w-full items-center justify-between  px-24`}>
      <CategoryList />
      <SelectedBook />
    </div>
  );
};

export default CategoryDetail;
