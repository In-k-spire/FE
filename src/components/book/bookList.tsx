import { BookProps } from "@/type/book.type";
import Link from "next/link";
import BookLayout from "./bookItem";
import Image from "next/image";

const BookList = ({
  bookList,
  category,
}: {
  bookList: BookProps[];
  category: string;
}) => {
  return (
    <div className="flex cursor-pointer flex-col [&>span]:hover:text-primary"></div>
  );
};

export default BookList;
