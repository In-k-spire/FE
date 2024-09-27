import { InputLayout } from "@/components/share/input";
import { useNaverBooks } from "@/service/naver/queries";
import { BookType } from "@/type/book";
import { debounce } from "lodash";
import { useState } from "react";

export const SearchInput = ({
  setData,
}: {
  setData: (v: BookType) => void;
}) => {
  const [title, setTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { books, isLoading } = useNaverBooks(title, 10);
  const onTitleChange = debounce((e) => setTitle(e.target.value), 300);
  const result = books?.map((book: BookType, idx: number) => (
    <div
      className="flex w-full items-center justify-between border-b border-gray-300  bg-white px-4 py-2 hover:bg-gray-200"
      key={idx}
      onClick={() => {
        console.log(book);
        setData(book);
        setIsOpen(false);
      }}
    >
      <span>{book.title}</span>
      <span className="text-gray-400">{book.author}</span>
    </div>
  ));
  return (
    <div className="relative">
      <InputLayout
        placeholder="책 제목을 입력하세요"
        onBlur={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        sizes="full"
        onChange={onTitleChange}
        className="border border-primary shadow-none"
      />
      <div
        className={`${
          isOpen && !!title
            ? "z-10 cursor-pointer opacity-100 "
            : "z-0 opacity-0"
        } absolute w-full border border-y-0 border-gray-300 duration-300`}
      >
        {isLoading ? (
          <div className="flex h-32 items-center justify-center border-b border-gray-300 bg-white text-xl font-bold">
            검색중
          </div>
        ) : books?.length ? (
          result
        ) : (
          <div className="flex h-32 items-center justify-center border-b border-gray-300 bg-white text-xl font-bold">
            찾으시는 책이 없습니다
          </div>
        )}
      </div>
    </div>
  );
};
