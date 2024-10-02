import BookLayout from "@/components/share/book";
import { BookType } from "@/type/book";

const ReviewInfo = ({ book }: { book: BookType }) => {
  if (!book) return;
  return (
    <div className="flex flex-col rounded-md border border-gray-300 bg-white p-6 shadow-sm">
      <span className="text-2xl font-bold">{book.title}</span>
      <span className="mt-2 text-sm text-gray-400">
        {book.author}/{book.publisher}
      </span>
      <div className="mt-12 flex gap-8">
        <BookLayout image={book.image} sizes="lg" />
        <span>{book.description}</span>
      </div>
    </div>
  );
};

export default ReviewInfo;
