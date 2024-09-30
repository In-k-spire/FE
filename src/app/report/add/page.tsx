"use client";
import BookInfo from "@/components/report/add/bookInfo";
import CategoryBox from "@/components/report/add/categoryBox";
import SearchBox from "@/components/report/add/searchBox";
import { BookType } from "@/type/book";
import { useState } from "react";

const AddBook = () => {
  const [selectedBook, setSelectedBook] = useState<BookType>();
  return (
    <div className="flex flex-col rounded-md border border-gray-300 bg-white p-6 shadow-sm">
      <SearchBox setSelectedBook={setSelectedBook} />
      <BookInfo book={selectedBook} />
      <CategoryBox list={["테스트1", "테스트2"]} book={selectedBook} />
    </div>
  );
};

export default AddBook;
