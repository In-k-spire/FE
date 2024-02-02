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
  const Books = bookList.slice(0, 3).map((data, idx) => {
    const style: { [v: number]: string } = {
      0: "z-20",
      1: "ml-8 z-10 duration-300",
      2: "ml-16 duration-500",
    };
    const hoverStyle: { [v: number]: string } = {
      0: "",
      1: "group-hover:ml-16",
      2: "group-hover:ml-32",
    };
    return (
      <div
        className={`absolute h-[24rem] w-[18rem] overflow-hidden  ${hoverStyle[idx]} ${style[idx]}`}
      >
        <Image
          src={data.image}
          width={0}
          className="h-full w-full object-cover"
          sizes="100vw"
          height={0}
          alt="이미지"
        />
      </div>
    );
  });

  return (
    <div className="flex cursor-pointer flex-col [&>span]:hover:text-primary">
      <span className="mb-2 text-2xl font-semibold duration-300">
        {category}
      </span>
      <div className="group relative h-[24rem]">{Books}</div>
    </div>
  );
};

export default BookList;
