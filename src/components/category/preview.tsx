import useBook from "@/hooks/useBook";
import { BookProps } from "@/type/book.type";
import SeparateTitle from "@/utils/separateTitle";
import Image from "next/image";

const Preview = () => {
  const { book } = useBook();
  const { mainTitle, subTitle } = SeparateTitle(book.title);
  return (
    <div className="relative flex h-[20rem] justify-center gap-8">
      <div className="relative w-[16rem] shadow-xl">
        <Image
          src={book.image}
          alt="책"
          loading="eager"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex w-[50%] flex-col">
        <div>
          <span className="text-3xl font-semibold">{mainTitle}</span>
          <span className="text-description ml-4 text-xl">{subTitle}</span>
        </div>
        <span className="text-description mt-4 overflow-auto text-sm">
          {book.description}
        </span>
        <div></div>
      </div>
    </div>
  );
};

export default Preview;
