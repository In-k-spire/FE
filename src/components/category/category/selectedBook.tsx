import { BookType } from "@/type/book";
import BookLayout from "../../share/book";
import BtnLayout from "../../share/button";
import { FaArrowRight } from "react-icons/fa";

export const SelectedBook = ({ book }: { book: BookType }) => {
  return (
    <div className="group/book relative">
      <div className="transform-preserve3d relative origin-top-left rounded-lg border border-secondary shadow-lg ">
        <BookLayout
          image={book?.image}
          className="backface-invisible z-10 "
          sizes="xl"
        />
        <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center rounded-lg p-4 opacity-0 duration-300 group-hover/book:bg-[rgba(255,255,255,0.7)] group-hover/book:opacity-100 ">
          <BtnLayout href={`/review/${book.id}`} sizes="md" className="group">
            독후감 보기
            <FaArrowRight className="duration-300 group-hover:translate-x-2" />
          </BtnLayout>
        </div>
      </div>
    </div>
  );
};
