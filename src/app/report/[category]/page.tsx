"use client";
import CategoryList from "@/components/category/cateList";

import { SelectedBook } from "@/components/category/selectedBook";
import { useNaverBooks } from "@/service/naver/queries";
import { useState } from "react";

const CategoryDetail = () => {
  const [selectedBookId, setSelectedBookId] = useState(0);
  const { data: books, isLoading } = useNaverBooks("과학", 50);
  return (
    <div className={`flex h-full w-full items-center justify-between  px-24`}>
      <CategoryList setSelectedBookId={setSelectedBookId} books={books} />
      {!isLoading ? <SelectedBook book={books[selectedBookId]} /> : null}
    </div>
  );
};

export default CategoryDetail;
