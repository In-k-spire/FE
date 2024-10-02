"use client";
import BookInfo from "@/components/category/add/bookInfo";
import CategoryBox from "@/components/category/add/categoryBox";
import SearchBox from "@/components/category/add/searchBox";
import { BookType } from "@/type/book";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const AddBook = () => {
  const [selectedBook, setSelectedBook] = useState<BookType>();
  return (
    <div className="flex flex-col rounded-md border border-gray-300 bg-white p-6 shadow-sm">
      <SearchBox setSelectedBook={setSelectedBook} />
      <BookInfo book={selectedBook} />
      <CategoryBox book={selectedBook} />
    </div>
  );
};

export default AddBook;
