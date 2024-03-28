import { BookType } from "@/type/book";
import BookLayout from "../book/bookLayout";

export const SelectedBook = ({ book }: { book: BookType }) => {
  return (
    <div className="group relative">
      <div className="transform-preserve3d relative z-10 origin-top-left border rounded-lg border-secondary shadow-lg group-hover:transform-[perspective(2000)_rotateY(0deg)] group-hover:backface-visibility-hidden">
        <BookLayout
          image={book?.image}
          className="backface-invisible z-10"
          size="xl"
        />
        <div className="absolute left-0 top-0 z-0 h-full w-full [transform:rotateY(-180deg)]">
          안녕
        </div>
      </div>
      <div className="absolute left-0 top-0 w-full h-full overflow-auto border rounded-lg border-secondary">
        {book?.description}
      </div>
    </div>
  );
};
