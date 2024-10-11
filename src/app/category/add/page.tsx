"use client";
import BookInfo from "@/components/category/add/bookInfo";
import CategoryBox from "@/components/category/add/categoryBox";
import SearchBox from "@/components/category/add/searchBox";
import { BookType } from "@/type/book";
import { useState } from "react";
interface IAddBook {
  searchParams: {
    id: number;
    category: string;
  };
}
const AddBook = ({ searchParams }: IAddBook) => {
  const [selectedBook, setSelectedBook] = useState<BookType>();
  const { id, category } = searchParams;
  return (
    <div className="flex flex-col rounded-md border border-gray-300 bg-white p-6 shadow-sm">
      <SearchBox setSelectedBook={setSelectedBook} />
      <BookInfo book={selectedBook} />
      <CategoryBox
        book={selectedBook}
        defaultId={id}
        defaultCategory={category}
      />
    </div>
  );
};

export default AddBook;
