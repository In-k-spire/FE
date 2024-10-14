import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getCategory, getCategoryById } from "./api";

export const useCategory = (name?: string) => {
  const { data, ...restQuery } = useInfiniteQuery({
    queryKey: ["category", name],
    queryFn: ({ pageParam }) => getCategory(pageParam, name),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const lastId = lastPage[2]?.id;
      return lastId;
    },
  });
  return { category: data?.pages.flat(), ...restQuery };
};

export const useCategoryById = (id: string) => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["category", id],
    queryFn: () => getCategoryById(id),
    retry: 1,
  });
  return { data, ...restQuery };
};
