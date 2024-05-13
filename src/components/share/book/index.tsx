import { BookProps } from "@/type/book";
import Image from "next/image";

const BookLayout = ({ image, size = "md", className }: BookProps) => {
  const SIZE = {
    full: "w-full h-56",
    sm: "w-24 h-32 lg:w-32 lg:h-48",
    md: "w-40 h-56 lg:w-48 lg:h-64",
    lg: "w-56 h-80 lg:w-64 lg:h-[22rem]",
    xl: "w-72 h-[25rem] lg:w-80 lg:h-[28rem]",
  };
  return (
    <div
      className={`${SIZE[size]} relative rounded-lg shadow-2xl ${className}`}
    >
      <Image alt="책" src={image} sizes="100%" className="rounded-lg" fill />
    </div>
  );
};

export default BookLayout;
