import useBook from "@/hooks/useBook";
import { BookProps } from "@/type/book.type";
import SummarizeTitle from "@/utils/summarizeTitle";
import Image from "next/image";

const Preview = () => {
  const { book } = useBook();
  return (
    <div className="relative flex h-[20rem] w-[50%] justify-between">
      <div className="relative w-[16rem] shadow-xl">
        <Image src={book.image} alt="책" layout="fill" objectFit="cover" />
      </div>
      <div className="flex w-[50%] flex-col">
        <span className="text-3xl font-semibold">
          {SummarizeTitle(book.title)}
        </span>
        <span className="text-description mt-4 overflow-auto text-sm">
          {book.description}
        </span>
      </div>
    </div>
  );
};

export default Preview;
