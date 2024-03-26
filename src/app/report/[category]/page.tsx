"use client";
import BookList from "@/components/bookcategory/bookList";
import { SelectedBook } from "@/components/bookcategory/selectedBook";

import { useNaverBooks } from "@/service/naver/queries";
import { useState } from "react";

const CategoryDetail = () => {
  const [selectedBookId, setSelectedBookId] = useState(0);
  const { data: books, isLoading } = useNaverBooks("과학", 50);

  return (
    <div className={`flex h-full w-full items-center justify-between`}>
      <BookList setSelectedBookId={setSelectedBookId} books={books} />
      {!isLoading ? <SelectedBook book={books[selectedBookId]} /> : null}
    </div>
  );
};

export default CategoryDetail;
