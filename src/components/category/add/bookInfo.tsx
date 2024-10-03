import BookLayout from "@/components/share/book";
import { BookType } from "@/type/book";

const BookInfo = ({ book }: { book?: BookType }) => {
  if (!!!book) return;
  return (
    <div className="mt-6 flex flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-sm md:flex-row">
      <BookLayout image={book.image} />
      <div className="flex flex-col gap-2">
        <span className="text-lg font-semibold">{book.title}</span>
        <span className="text-sm text-gray-400">{book.author}</span>
        <span className="text-sm">{book.description}</span>
      </div>
    </div>
  );
};

export default BookInfo;
