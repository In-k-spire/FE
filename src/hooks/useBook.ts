import { bookAtomState } from "@/store/book";
import { useRecoilState } from "recoil";

const useBook = () => {
  const [book, setBook] = useRecoilState(bookAtomState);

  return { book, setBook };
};

export default useBook;
