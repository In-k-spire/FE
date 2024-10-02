import { BookType } from "@/type/book";
import BookLayout from "../share/book";
import BtnLayout from "../share/button";
interface ICateItem {
  book: BookType;
}
export const CateItem = ({ book }: ICateItem) => {
  console.log(book);
  return (
    <div className="flex h-fit gap-8 2xl:gap-12">
      <BookLayout image={book.image} className="cursor-pointer" />
      <div className="flex flex-col justify-between gap-4">
        <span className="text-overflow font-bold text-shelfTextColor md:text-lg xl:text-xl">
          {book.title}
        </span>

        <BtnLayout
          href={`/review/${book.id}`}
          sizes="sm"
          className="w-fit rounded-full border border-shelfTextColor text-shelfTextColor hover:bg-shelfTextColor hover:text-white"
        >
          자세히 보기
        </BtnLayout>
      </div>
    </div>
  );
};
