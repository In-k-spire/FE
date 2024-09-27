import { useQuery } from "@tanstack/react-query";
import { getBook } from "./api";

export const useBookQuery = (id: number) => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["book", id],
    queryFn: () => getBook(id),
    retry: 1,
  });
  return { data, ...restQuery };
};
