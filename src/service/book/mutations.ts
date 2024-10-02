import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setBook, setReview } from "./api";
import { BookReviewType, BookType } from "@/type/book";
import useApiError from "@/hooks/useApiError";
import { toast } from "react-toastify";

export const useBookMutation = () => {
  const { handleError } = useApiError();
  const queryClient = useQueryClient();
  const { mutate, ...restMutate } = useMutation({
    mutationFn: ({
      book,
      categoryId,
    }: {
      book?: BookType;
      categoryId: number;
    }) => setBook(categoryId, book),
    onError: handleError,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
      toast.success("책 추가 성공!");
    },
  });
  return { bookMutate: mutate };
};

export const useBookReviewMutation = (id: number) => {
  const { handleError } = useApiError();
  const queryClient = useQueryClient();
  const { mutate, ...restMutate } = useMutation({
    mutationFn: (review: BookReviewType) => setReview(id, review),
    onError: handleError,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["review", id] });
      toast.success("리뷰 추가 성공!");
    },
  });

  return { reviewMutate: mutate };
};
