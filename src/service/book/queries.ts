import { useQuery } from "@tanstack/react-query";
import { getBook, getReview } from "./api";

export const useBookQuery = (id: number) => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["book", id],
    queryFn: () => getBook(id),
    retry: 1,
  });
  return { book: data, ...restQuery };
};

export const useBookReview = (id: number) => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["review", id],
    queryFn: () => getReview(id),
  });
  return { review: data, ...restQuery };
};
