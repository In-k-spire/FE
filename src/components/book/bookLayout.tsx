import { BookProps } from "@/type/book";
import Image from "next/image";

const BookLayout = ({
  image,
  size = 'md' ,
  className,
}: BookProps) => {
  const SIZE = {
    sm : 'w-32 h-48',
    md : 'w-48 h-64',
    lg : 'w-64 h-[24rem]',
    xl : 'w-[20rem] h-[30rem]'
  }
  return (
    <div className={`${SIZE[size]} rounded-lg relative shadow-2xl`}>
      <Image alt="책" src={image} sizes="100%" className="rounded-lg" fill />
    </div>
  );
};

export default BookLayout;
