"use client";
import BookList from "@/components/report/category/bookList";
import { SelectedBook } from "@/components/report/category/selectedBook";
import { useNaverBooks } from "@/service/naver/queries";
import { useState } from "react";

const CategoryDetail = () => {
  const [selectedBookId, setSelectedBookId] = useState(0);
  const { books, isLoading } = useNaverBooks("과학", 50);
  const handleBookChange = (bookIdx: number) => {
    document.startViewTransition(() => {
      setSelectedBookId(bookIdx);
    });
  };
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0`}
    >
      <BookList setSelectedBookId={handleBookChange} books={books} />
      {!isLoading ? <SelectedBook book={books[selectedBookId]} /> : null}
    </div>
  );
};

export default CategoryDetail;
