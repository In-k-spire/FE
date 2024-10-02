import { useQuery } from "@tanstack/react-query";
import { getCategory, getCategoryById } from "./api";
import { Storage } from "@/api/storage/storage";

export const useAllCategoryQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["category"],
    queryFn: getCategory,
    retry: 1,
    enabled: !!Storage.getItem("accessToken"),
  });

  return { data, ...restQuery };
};

export const useCategoryById = (id: string) => {
  const { data, ...restQuery } = useQuery({
    queryKey: ["category", id],
    enabled: !!Storage.getItem("accessToken"),
    queryFn: () => getCategoryById(id),
    retry: 1,
  });
  return { data, ...restQuery };
};
