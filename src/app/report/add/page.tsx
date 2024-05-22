"use client";
import { BookInfo } from "@/components/report/add/bookInfo";
import { SearchInput } from "@/components/report/add/searchInput";
import { defaultBookValue } from "@/store/book";
import { BookType } from "@/type/book";
import FormatedTitle from "@/utils/formatTitle";
import { useEffect, useState } from "react";

export const AddBook = () => {
  const [data, setData] = useState<BookType>(defaultBookValue);

  return (
    <div className="flex flex-col gap-8">
      <SearchInput setData={setData} />
      {!!data.title.length ? <BookInfo book={data} /> : null}
    </div>
  );
};

export default AddBook;
