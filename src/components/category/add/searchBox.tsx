import BookLayout from "@/components/share/book";
import { InputLayout } from "@/components/share/input";
import { useNaverBooks } from "@/service/naver/queries";
import { BookType } from "@/type/book";
import { debounce } from "lodash";
import { useMemo, useState } from "react";

const SearchBox = ({
  setSelectedBook,
}: {
  setSelectedBook: (book: BookType) => void;
}) => {
  const [title, setTitle] = useState("");
  const { books, isLoading } = useNaverBooks(title, 5);
  const handleSelectBook = (book: BookType) => {
    setSelectedBook(book);
    setTitle("");
  };
  const BookList = useMemo(
    () =>
      books?.map((book: BookType, idx: number) => (
        <div
          key={idx}
          onClick={() => handleSelectBook(book)}
          className="flex  cursor-pointer gap-2 border-b border-gray-300  p-2 last:border-b-0 hover:bg-gray-200"
        >
          <BookLayout
            image={book.image}
            sizes="xs"
            className="ow:rounded-none"
          />
          <div className="flex flex-col gap-1 overflow-hidden">
            <span className="text text-overflow-2 font-semibold">
              {book.title}
            </span>
            <span className="truncate text-sm text-gray-400">
              {book.author}
            </span>
          </div>
        </div>
      )),
    [books],
  );

  const debounceOnChange = debounce((e) => {
    setTitle(e.target.value);
  }, 300);

  return (
    <>
      <span className="text-2xl font-bold">새로운 책 추가하기</span>
      <span className="mb-2 mt-6 text-sm font-semibold">제목</span>
      <InputLayout
        sizes="full"
        className=" rounded-md border border-gray-300  focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        placeholder="제목을 입력해주세요"
        onChange={debounceOnChange}
      />
      {isLoading && title ? (
        <div className="p-4 text-center">로딩중</div>
      ) : !title || !books.length ? null : (
        <div className="mt-2 flex w-full flex-col rounded-md border border-gray-300">
          {BookList}
        </div>
      )}
    </>
  );
};

export default SearchBox;
