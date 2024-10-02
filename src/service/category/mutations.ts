import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCategory, setCategory } from "./api";
import { toast } from "react-toastify";

export const useCategoryMutation = () => {
  const queryClient = useQueryClient();
  const { mutate, ...restMutate } = useMutation({
    mutationFn: setCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
      toast.success("카테고리 추가 성공!");
    },
  });

  return { mutate, ...restMutate };
};
