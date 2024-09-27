import { useBookQuery } from "@/service/book/queries";

const useBook = (id: number) => {
  const { data, isError } = useBookQuery(id);

  return { book: data };
};

export default useBook;
