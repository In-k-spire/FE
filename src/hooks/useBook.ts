import { booksAtomState, bookAtomState } from "@/store/book";
import { useRecoilState } from "recoil";

const useBook = () => {
  const [book, setBook] = useRecoilState(bookAtomState);
  const [books, setBooks] = useRecoilState(booksAtomState);

  return { book, setBook, books, setBooks };
};

export default useBook;
