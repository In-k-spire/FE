"use client";

import BookLayout from "@/components/book/bookLayout";
import CategoryList from "@/components/category/cateList";
import useBook from "@/hooks/useBook";

const CategoryDetail = () => {
  const { book } = useBook();
  return (
    <div className="flex h-full w-full px-24">
      <BookLayout image="" />
      {book.title}
      <CategoryList />
    </div>
  );
};

export default CategoryDetail;
