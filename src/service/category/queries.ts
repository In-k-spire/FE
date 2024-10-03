import { useQuery } from "@tanstack/react-query";
import { getCategory, getCategoryById } from "./api";

export const useAllCategoryQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["category"],
    queryFn: getCategory,
    retry: 1,
  });

  return { data, ...restQuery };
};

export const useCategoryById = (id: string) => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["category", id],
    queryFn: () => getCategoryById(id),
    retry: 1,
  });
  return { data, ...restQuery };
};
