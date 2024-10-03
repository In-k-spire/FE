"use client";
import BookList from "@/components/category/category/bookList";
import { SelectedBook } from "@/components/category/category/selectedBook";
import { useCategoryById } from "@/service/category/queries";
import { useState } from "react";

const CategoryDetail = ({ params }: { params: { id: string } }) => {
  const [selectedBookId, setSelectedBookId] = useState(0);
  const { id } = params;
  const { data, isLoading } = useCategoryById(id);
  const { bookList } = data || [];
  const handleBookChange = (bookIdx: number) => {
    document.startViewTransition(() => {
      setSelectedBookId(bookIdx);
    });
  };

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0`}
    >
      <BookList setSelectedBookId={handleBookChange} books={bookList} />
      {!isLoading ? <SelectedBook book={bookList[selectedBookId]} /> : null}
    </div>
  );
};

export default CategoryDetail;
