import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCategoryById, removeCategoryById, setCategory } from "./api";
import { toast } from "react-toastify";

export const useAddCategory = () => {
  const queryClient = useQueryClient();
  const { mutate, ...restMutate } = useMutation({
    mutationFn: setCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
      toast.success("카테고리 추가 성공!");
    },
  });

  return { categoryMutate: mutate, ...restMutate };
};

export const useRemoveCategory = () => {
  const queryClient = useQueryClient();
  const { mutate, ...restMutate } = useMutation({
    mutationFn: removeCategoryById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
      toast.success("카테고리 삭제 성공!");
    },
  });
  return { remove: mutate, ...restMutate };
};

export const useEditCategory = () => {
  const queryClient = useQueryClient();
  const { mutate, ...restMutate } = useMutation({
    mutationFn: editCategoryById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
      toast.success("카테고리 수정 성공!");
    },
  });
  return { edit: mutate, ...restMutate };
};
