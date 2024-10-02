"use client";
import { useCategoryMutation } from "@/service/category/mutations";
import { useAllCategoryQuery } from "@/service/category/queries";

const useCategory = () => {
  const { data: category, ...restQuery } = useAllCategoryQuery();
  const { mutate: categoryMutate, ...restMutate } = useCategoryMutation();

  return { category, categoryMutate, ...restQuery, ...restMutate };
};

export default useCategory;
