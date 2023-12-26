import { BookProps } from "@/type/book.type";
import Link from "next/link";
import BookLayout from "./bookItem";

const BookList = ({
  bookList,
  category,
}: {
  bookList: BookProps[];
  category: string;
}) => {
  const Books = bookList.slice(0, 3).map((data, idx) => {
    const style: { [v: number]: string } = {
      0: "z-20",
      1: "ml-8 z-10",
      2: "ml-16",
    };
    const hoverStyle: { [v: number]: string } = {
      0: "",
      1: "group-hover:ml-16",
      2: "group-hover:ml-32",
    };
    return (
      <div className={`absolute duration-500 ${hoverStyle[idx]} ${style[idx]}`}>
        <BookLayout image={data.image} />
      </div>
    );
  });

  return (
    <div className="flex flex-col overflow-auto">
      <span className="text-xl font-medium">{category}</span>
      <div className="group relative h-[16rem] cursor-pointer">{Books}</div>
    </div>
  );
};

export default BookList;
