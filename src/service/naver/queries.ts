import { useQuery } from "@tanstack/react-query";
import { getBooks } from "./api";
export const useNaverBooks = (query: string, display: number = 10) => {
  const { data, ...restquery } = useQuery({
    retry: 1,
    queryKey: [query, display, "books"],
    queryFn: () => getBooks({ query, display }),
  });
  return { data: data?.items, ...restquery };
};
