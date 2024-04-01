import { BookType } from "@/type/book";
import BookLayout from "../book/bookLayout";
import { Rating } from "../share/rating";

export const SelectedBook = ({ book }: { book: BookType }) => {
  return (
    <div className="group relative">
      <div className="transform-preserve3d relative z-10 origin-top-left border rounded-lg border-secondary shadow-lg ">
        <BookLayout
          image={book?.image}
          className="backface-invisible z-10"
          size="xl"
        />
        <div className="absolute left-0 top-0 z-0 h-full w-full rounded-lg p-4 [transform:rotateY(-180deg)] bg-white">
          <Rating star={5}/>
        </div>
      </div>
      <div className="bg-white absolute left-0 top-0 w-full p-4 h-full overflow-auto border rounded-lg border-secondary">
        {book?.description}
      </div>
    </div>
  );
};
