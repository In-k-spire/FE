import { BookType } from "@/type/book.type";
import Link from "next/link";
import BookLayout from "./bookLayout";
import Image from "next/image";

const BookList = ({
  bookList,
  category,
}: {
  bookList: BookType[];
  category: string;
}) => {
  return (
    <div className="flex cursor-pointer flex-col [&>span]:hover:text-primary"></div>
  );
};

export default BookList;
